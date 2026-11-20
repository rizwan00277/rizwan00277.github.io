---
layout: page
title: "Paired RGB–Thermal Benchmark and MaxSPD-YOLO for Small Road Users"
description: 52,857 new RGB labels for FLIR ADAS and a compact detector that lifts small-object AP from 31.5% to 36.0%.
img: assets/img/projects/maxspd_yolo_arch.png
importance: 2
category: computer vision
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/maxspd_yolo_arch.png" title="project overview" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  MaxSPD-YOLO11n architecture: MaxViT and space-to-depth blocks in the backbone and a stride-4 P2 detection head.
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/rgb_thermal_examples.png" title="rgb_thermal_examples.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Paired day and night frames: our RGB labels (left) and the FLIR thermal labels (right).
</div>

**Goal.** Pedestrians, cyclists and cars far from the camera are small in the image and hard to detect, in both RGB and thermal. The FLIR ADAS v1.3 dataset is widely used for driving perception, but its RGB images lack usable labels, so the two modalities could not be compared fairly.

**What I did.**

- Annotated **52,857 objects** in the RGB images of **9,598 paired RGB–thermal frames**, with shared, leakage-checked splits.
- Evaluated **eleven YOLO configurations** in both modalities with three seeds each (66 training runs).
- Designed **MaxSPD-YOLO11n**: higher-resolution detection heads, space-to-depth downsampling and a MaxViT block. Compared with YOLO11n it improves test AP50:95 from 37.9% to 40.3% (RGB) and 28.2% to 29.9% (thermal), and **small-object AP from 31.5% to 36.0%** (RGB), with 43% fewer parameters.

**Status.** Paper submitted to ICCII 2026: "A Paired RGB-Thermal Benchmark and the MaxSPD-YOLO Detector for Small Road-User Detection" (under review).

**Stack.** PyTorch · Ultralytics YOLO · Python
