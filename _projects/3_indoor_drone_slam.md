---
layout: page
title: "GPS-Denied Indoor Drone Flight with Visual SLAM"
description: A custom quadrotor that flies indoors using stereo visual odometry on a Jetson Orin Nano and ArduPilot.
img: assets/img/projects/indoor_drone_diagram.png
importance: 5
category: applied vision
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/indoor_drone_diagram.png" title="project overview" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  System overview: ZED Mini visual-inertial pose on the Jetson is relayed through MAVROS to the Pixhawk EKF3 for GPS-free flight.
</div>

**Goal.** Fly a drone indoors, where GPS is not available, using only onboard vision for position.

**Hardware.** DJI X500 V2 frame · Pixhawk 6X (ArduPilot) · NVIDIA Jetson Orin Nano · ZED Mini stereo camera.

**What I built.**

- Brought up the Jetson with **ROS 2 Humble** and the ZED ROS 2 wrapper; fixed a Tegra UART DMA driver issue through a device-tree change.
- Wrote a relay node that sends ZED visual pose to the flight controller through **MAVROS**, and tuned **ArduPilot EKF3** for vision-only flight.
- Diagnosed EKF dropouts caused by compute overload and fixed them (lower camera resolution, power-mode tuning).
- Completed a real indoor flight (take-off, forward, return, land); now working on **autonomous waypoint missions** in GUIDED mode.

**Stack.** ROS 2 · MAVROS · ArduPilot · ZED SDK · Jetson · Python · Bash
