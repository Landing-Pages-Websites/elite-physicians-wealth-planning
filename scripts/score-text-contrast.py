#!/usr/bin/env python3
"""
Score the regions captured by check-text-contrast.mjs.

Each region's background is cropped out of the glyph-free background plate, so
there is no antialiasing halo to confuse the measurement. Contrast is computed
against the worst realistic background pixel in the box — worst case, not the
mean, because a light paragraph is unreadable over the one bright book spine
crossing it even when the average looks fine.

WCAG AA: 4.5:1 normal text, 3:1 large text (>=24px, or >=18.66px bold).
"""
import json
import sys
from collections import defaultdict

import numpy as np
from PIL import Image

Image.MAX_IMAGE_PIXELS = None
PLATES = {}


def lum(rgb):
    c = np.asarray(rgb, dtype=float) / 255.0
    c = np.where(c <= 0.04045, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)
    return 0.2126 * c[..., 0] + 0.7152 * c[..., 1] + 0.0722 * c[..., 2]


def ratio(a, b):
    hi, lo = max(a, b), min(a, b)
    return (hi + 0.05) / (lo + 0.05)


def region_image(path):
    return np.asarray(Image.open(path).convert("RGB"), dtype=np.uint8)


samples = json.load(open("/tmp/text-contrast.json"))
fails, near, scored = [], [], 0

for s in samples:
    try:
        img = region_image(s["file"])
    except Exception:
        continue
    H, W = img.shape[:2]
    b = s["box"]
    x0, y0 = max(0, b["x"]), max(0, b["y"])
    x1, y1 = min(W, b["x"] + b["w"]), min(H, b["y"] + b["h"])
    if x1 - x0 < 8 or y1 - y0 < 4:
        continue
    # Inset the crop. An element's border box includes a few pixels of whatever
    # sits outside its own fill — the page ground beyond a button's rounded
    # corner, its drop shadow — and sampling those makes a perfectly legible
    # button look like a failure. The glyphs live in the middle.
    ix = max(2, int((x1 - x0) * 0.06))
    iy = max(2, int((y1 - y0) * 0.18))
    x0, x1 = x0 + ix, max(x0 + ix + 1, x1 - ix)
    y0, y1 = y0 + iy, max(y0 + iy + 1, y1 - iy)
    region = img[y0:y1, x0:x1].reshape(-1, 3)
    if len(region) < 20:
        continue

    tl = float(lum(s["color"][:3]))
    rl = lum(region)
    # 2nd/98th percentile trims single stray pixels but keeps a genuine bright
    # or dark band crossing the text.
    lo, hi = float(np.percentile(rl, 2)), float(np.percentile(rl, 98))
    worst = min(ratio(tl, lo), ratio(tl, hi))
    scored += 1

    large = s["fontSize"] >= 24 or (s["fontSize"] >= 18.66 and int(s["fontWeight"]) >= 700)
    floor = 3.0 if large else 4.5
    rec = dict(section=s["section"], vp=s["viewport"], size=s["fontSize"],
               text=s["text"], ratio=round(worst, 2), floor=floor)
    if worst < floor:
        fails.append(rec)
    elif worst < floor + 0.5:
        near.append(rec)

by_sec = defaultdict(int)
for f in fails:
    by_sec[f["section"]] += 1

print(f"scored {scored} text regions against glyph-free background plates\n")
for label, rows in (("FAIL", fails), ("NEAR", near)):
    if not rows:
        continue
    print(f"{label} ({len(rows)}):")
    for r in sorted(rows, key=lambda x: x["ratio"])[:24]:
        print(f'  {r["ratio"]:>5}:1 (needs {r["floor"]}) [{r["vp"]:>4}] #{r["section"]:<20} {r["size"]:>2}px  "{r["text"]}"')
    if len(rows) > 24:
        print(f"  … and {len(rows) - 24} more")
    print()

if fails:
    print("by section:", dict(by_sec))
    print(f"\nTEXT CONTRAST GATE FAILED — {len(fails)} region(s) below the AA floor")
    sys.exit(1)
print(f"text contrast gate passed — {scored} regions, 0 below AA")
