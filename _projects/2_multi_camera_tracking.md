---
layout: page
title: "Multi-Robot Tracking with Dual ZED 2i Stereo Cameras"
description: Real-time global localization of multiple TurtleBot 4 robots in an 8 m arena using two fixed stereo cameras.
img: assets/img/projects/localization_architecture.png
importance: 2
category: robotics
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/localization_architecture.png" title="project overview" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  System architecture (Fig. 1 of the ICACS 2027 submission): two camera threads and the main tracker thread.
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/localization_gui.png" title="localization_gui.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Live GUI during a hand-off from camera 1 to camera 2 (Fig. 3 of the paper).
</div>

**Goal.** Give every robot in a shared arena an accurate position in one **global world frame**, so a central system can monitor and guide them.

**Approach.**

- Two ceiling-view **ZED 2i stereo cameras** cover an 8 × 4 m arena; each camera is calibrated into a common world frame.
- **YOLO** detects robots; the ZED depth gives each detection a 3D position, which is transformed to world (x, y) coordinates.
- A cross-camera tracker uses **Hungarian assignment** to fuse detections and keep a stable identity for each robot (fixed-roster mode).
- A **PyQt5 GUI** with zoom and pan shows live tracks at up to **60 FPS**. Ground-plane error is roughly **0–0.35 m**.

**Status.** Paper submitted to ICACS 2027: "Marker-Free Infrastructure-Based Localization of Multiple Ground Robots with Two Stereo Depth Cameras" (under review).

**Stack.** Python · ZED SDK · YOLO · OpenCV · PyQt5 · ROS 2
