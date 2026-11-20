---
layout: page
title: "Small and Distant Drone Detection with Custom YOLO"
description: Architecture changes to YOLO (attention, SPD-Conv, lightweight blocks) for detecting tiny drones in the sky.
img: assets/img/projects/drone_detection.png
importance: 4
category: computer vision
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/drone_detection.png" title="project overview" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

**Goal.** Detect drones that cover only a few pixels in the image — a hard case for standard object detectors.

**Approach.**

- **MS thesis (PIEAS):** modified the **YOLOv8** architecture to keep fine spatial detail and focus on small targets.
- Explored and ablated blocks such as **CBAM**, **GAM**, **MaxViT**, **Involution**, **SPD-Conv**, **SCDown** and **RepC3** across YOLOv8 to YOLO26-style models.
- Current work: **RSC-YOLOv26n**, a lightweight detector for drone detection (manuscript in preparation, with Abdul Rehman).

**Stack.** PyTorch · Ultralytics YOLO · Python
