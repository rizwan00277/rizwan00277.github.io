---
layout: page
title: "RGB Annotations for the FLIR ADAS Dataset"
description: Hand-annotated 9,000+ RGB images of FLIR ADAS v1.3 in YOLO format and trained YOLOv8n baselines.
img: assets/img/projects/maxspd_yolo_arch.png
importance: 5
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

**Goal.** The FLIR ADAS v1.3 dataset is widely used for thermal and RGB driving perception, but its RGB images lack usable labels. This project fills that gap.

**What I did.**

- Annotated **9,000+ RGB images** in YOLO format.
- Trained and evaluated **YOLOv8n** detectors to provide baselines for RGB and RGB–thermal object detection research.

**Status.** Paper submitted to ICCII 2026: "A Paired RGB-Thermal Benchmark and the MaxSPD-YOLO Detector for Small Road-User Detection" (under review).

**Stack.** YOLOv8 · Python · annotation tools
