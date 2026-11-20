---
layout: about
title: about
permalink: /
subtitle: Computer Vision &amp; Deep Learning · Small-Object Detection · Research Associate at the <a href='https://www.ncp.edu.pk/coe-aitec.php'>AI Technology Centre (AITeC)</a>, Islamabad

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>AI Technology Centre (AITeC)</p>
    <p>National Centre for Physics, Quaid-i-Azam University Campus</p>
    <p>Islamabad, Pakistan</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I work on **computer vision and deep learning**, with a focus on **small-object detection**: finding targets that cover only a few pixels in an image, such as distant drones in the sky or pedestrians and cyclists far down the road. These objects are where modern detectors fail most often, and where careful architecture design and honest evaluation make the largest difference.

**How this started.** During my MS in Computer Science at the [Pakistan Institute of Engineering and Applied Sciences](https://www.pieas.edu.pk/) (PIEAS), supervised by Dr. Asifullah Khan, my thesis redesigned YOLOv8 to detect **small and distant drones** (CIS-YOLOv8: CBAM attention, Involution and an extra high-resolution detection head). I graduated as a **Gold Medalist** (CGPA 3.8/4.0).

**Where it went next.** I am now a Research Associate (Assistant Manager, Technical) at the **[AI Technology Centre (AITeC)](https://www.ncp.edu.pk/coe-aitec.php)**, Islamabad, working with Dr. Muhammad Ahmad Kamran. I have continued the same line of research:

- **Small-drone detection across YOLO generations.** [SD-YOLO](https://rizwan00277.github.io/sd-yolo/) tests whether compact modules transfer across YOLOv8n, YOLO11n and YOLO26n on unseen test videos. The validation-selected design raises small-object AP by up to 60% with fewer parameters, and shows that module gains depend on the YOLO generation (journal, under review).
- **Small road users in RGB and thermal images.** I built a paired RGB–thermal benchmark from FLIR ADAS (52,857 new RGB annotations) and designed MaxSPD-YOLO, which improves small-object AP from 31.5% to 36.0% with 43% fewer parameters (under review).
- **Reliable evaluation.** I study when deep models learn shortcuts instead of the task: in video-based PTSD detection (ICIC 2026, accepted) and in subject-independent gesture recognition from drone video, where small and distant people are the norm (under review).

I also deploy these vision models on real systems at AITeC, such as multi-camera robot localization and indoor drones, which keeps my research grounded in what works outside the benchmark.

Before PIEAS, I completed my BS in Computer Science at [Government College University (GCU), Lahore](https://gcu.edu.pk/), and I have taught as a Lecturer at the University of Lahore and as a Teaching Assistant at PIEAS.

<div class="alert alert-info" role="alert" style="margin-top: 1.5rem;">
I am looking for <b>PhD positions starting Fall 2027</b> in <b>computer vision and deep learning</b>, especially small-object detection, efficient detector design, multimodal (RGB–thermal) perception and robust evaluation. Feel free to reach out by email.
</div>
