---
layout: page
title: "Sim-to-Real Deep RL Navigation for TurtleBot 4"
description: Soft Actor-Critic agent that learns mapless navigation and obstacle avoidance in Gazebo and transfers to a real robot.
img: assets/img/projects/drl_navigation_diagram.png
importance: 1
category: robotics
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/drl_navigation_diagram.png" title="project overview" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  System overview: depth from the OAK-D is converted to a pseudo-LiDAR scan and fed with the goal to a Soft Actor-Critic policy, trained in Gazebo and transferred to the real TurtleBot 4.
</div>

**Goal.** Teach a mobile robot to reach goals and avoid obstacles in unknown indoor spaces — without a pre-built map — using deep reinforcement learning.

**Approach.**

- Trained a **Soft Actor-Critic (SAC)** agent with Stable-Baselines3 in Gazebo for about **650k steps**.
- Perception from an **OAK-D depth camera**, converted into a **pseudo-LiDAR scan** so the policy sees a compact, robot-agnostic observation.
- Careful observation and reward design (goal distance and heading, obstacle proximity, smoothness) to make the policy transfer from simulation to the real **TurtleBot 4** on **ROS 2**.

**Stack.** Python · PyTorch · Stable-Baselines3 · ROS 2 · Gazebo · OAK-D
