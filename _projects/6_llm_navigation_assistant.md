---
layout: page
title: "LLM-Guided Robot Navigation Assistant"
description: A desktop assistant that lets you talk to a TurtleBot — combining ROS 2, YOLO, ZED cameras, and a locally hosted LLM.
img: assets/img/projects/aura_gui.png
importance: 6
category: applied vision
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/aura_gui.png" title="project overview" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Combined lab GUI, including the LLM-based navigation panel for the TurtleBot 4.
</div>

**Goal.** Make robot navigation accessible through natural language: "go to the door", "what do you see?"

**Approach.**

- A Python GUI that connects to **ROS 2** topics, **SLAM + Nav2** navigation, **YOLO** detections and **ZED** camera streams.
- A **locally deployed LLM** turns user requests into navigation goals and answers questions about the scene.
- **Speech-to-text** and **text-to-speech** for hands-free operation in dynamic indoor environments.

**Stack.** ROS 2 · Nav2 · YOLO · local LLMs · Python (Tkinter)
