---
layout: page
title: "Small and Distant Drone Detection with Custom YOLO"
description: Architecture changes to YOLO (attention, SPD-Conv, lightweight blocks) for detecting tiny drones in the sky.
img: assets/img/projects/sd_yolo11n_arch.png
importance: 4
category: computer vision
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/sd_yolo11n_arch.png" title="project overview" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  SD-YOLO11n architecture: layers that differ from YOLO11n in red, the added stride-4 P2 branch in blue.
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/sd_yolo_qualitative.png" title="sd_yolo_qualitative.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Test frames: ground truth, pretrained baseline and SD-YOLO variant; the last row is a failure case.
</div>

**Goal.** Detect drones that cover only a few pixels in the image — a hard case for standard object detectors.

**Approach.**

- **MS thesis (PIEAS):** modified the **YOLOv8** architecture to keep fine spatial detail and focus on small targets.
- Explored and ablated blocks such as **CBAM**, **GAM**, **MaxViT**, **Involution**, **SPD-Conv**, **SCDown** and **RepC3** across YOLOv8 to YOLO26-style models.
- **SD-YOLO** (journal article under review): one stage-wise module path applied to **YOLOv8n, YOLO11n and YOLO26n** on a video-disjoint Drone-vs-Bird benchmark (46 unseen test videos). Selected on validation, P2 + ELA + ADown raises test mAP50–95 of YOLO11n and YOLO26n by 26% and 35% and small-object AP by 44% and 60%, with 11–12% fewer parameters. Module effects differ between YOLO generations, so modules should be re-validated for each release.
- **Project page with tracking videos:** [rizwan00277.github.io/sd-yolo](https://rizwan00277.github.io/sd-yolo/)

**Stack.** PyTorch · Ultralytics YOLO · ByteTrack · Python
