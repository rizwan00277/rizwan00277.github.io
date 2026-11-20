---
layout: page
title: "Small and Distant Drone Detection: from MS Thesis to SD-YOLO"
description: Architecture changes to YOLO (attention, SPD-Conv, lightweight blocks) for detecting tiny drones in the sky.
img: assets/img/projects/sd_yolo11n_arch.png
importance: 1
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

- **MS thesis (PIEAS):** modified the **YOLOv8** architecture to retain fine spatial detail for small targets.
- Explored and ablated blocks such as **CBAM**, **GAM**, **MaxViT**, **Involution**, **SPD-Conv**, **SCDown** and **RepC3** across YOLOv8 to YOLO26-style models.
- **SD-YOLO** (journal article under review): one stage-wise module path applied to **YOLOv8n, YOLO11n and YOLO26n** on a video-disjoint Drone-vs-Bird benchmark (46 unseen test videos). In our experiments, the validation-selected configuration improved test accuracy for YOLO11n and YOLO26n with fewer parameters, while the gain for YOLOv8n was not clearly established. Module effects differed between YOLO generations, which suggests re-validating such modules for each release.
- **Project page with tracking videos:** [rizwan00277.github.io/sd-yolo](https://rizwan00277.github.io/sd-yolo/)

**Stack.** PyTorch · Ultralytics YOLO · ByteTrack · Python
