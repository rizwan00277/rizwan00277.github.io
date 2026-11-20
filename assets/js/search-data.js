// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "List of publications, including published and submitted papers.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "research and engineering projects in robot learning, perception, and computer vision.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Research and professional experience. A PDF version is available from the button on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-completed-my-ms-in-computer-science-at-pieas-as-a-gold-medalist-cgpa-3-8-4-0-with-a-thesis-on-improving-yolov8-for-small-and-distant-drone-detection",
          title: 'Completed my MS in Computer Science at PIEAS as a Gold Medalist (CGPA...',
          description: "",
          section: "News",},{id: "news-joined-the-university-of-lahore-as-a-lecturer-in-computer-science",
          title: 'Joined The University of Lahore as a Lecturer in Computer Science.',
          description: "",
          section: "News",},{id: "news-joined-the-autonomous-ai-amp-amp-decision-support-lab-aitec-national-centre-of-physics-islamabad-as-a-research-associate",
          title: 'Joined the Autonomous AI &amp;amp;amp; Decision Support Lab (AITeC), National Centre of Physics,...',
          description: "",
          section: "News",},{id: "news-completed-the-first-indoor-flight-of-our-visual-slam-drone-jetson-orin-nano-zed-mini-pixhawk-6x-in-a-gps-denied-environment",
          title: 'Completed the first indoor flight of our visual-SLAM drone (Jetson Orin Nano +...',
          description: "",
          section: "News",},{id: "news-submitted-two-papers-to-icacs-2027-marker-free-localization-of-multiple-ground-robots-with-two-stereo-depth-cameras-and-synthetic-skeleton-pretraining-for-subject-independent-aerial-gesture-recognition",
          title: 'Submitted two papers to ICACS 2027: marker-free localization of multiple ground robots with...',
          description: "",
          section: "News",},{id: "news-submitted-our-paired-rgb-thermal-benchmark-and-maxspd-yolo-detector-for-small-road-user-detection-to-iccii-2026",
          title: 'Submitted our paired RGB-thermal benchmark and MaxSPD-YOLO detector for small road-user detection to...',
          description: "",
          section: "News",},{id: "news-our-paper-is-it-ptsd-or-the-production-auditing-shortcut-learning-in-video-based-ptsd-detection-has-been-accepted-at-icic-2026-ieee-umt-lahore",
          title: 'Our paper “Is It PTSD or the Production? Auditing Shortcut Learning in Video-Based...',
          description: "",
          section: "News",},{id: "news-built-a-dual-zed-2i-stereo-camera-system-that-tracks-and-localizes-multiple-turtlebot-4-robots-in-an-8-m-arena-in-real-time",
          title: 'Built a dual ZED 2i stereo-camera system that tracks and localizes multiple TurtleBot...',
          description: "",
          section: "News",},{id: "projects-sim-to-real-deep-rl-navigation-for-turtlebot-4",
          title: 'Sim-to-Real Deep RL Navigation for TurtleBot 4',
          description: "Soft Actor-Critic agent that learns mapless navigation and obstacle avoidance in Gazebo and transfers to a real robot.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_drl_navigation/";
            },},{id: "projects-multi-robot-tracking-with-dual-zed-2i-stereo-cameras",
          title: 'Multi-Robot Tracking with Dual ZED 2i Stereo Cameras',
          description: "Real-time global localization of multiple TurtleBot 4 robots in an 8 m arena using two fixed stereo cameras.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_multi_camera_tracking/";
            },},{id: "projects-gps-denied-indoor-drone-flight-with-visual-slam",
          title: 'GPS-Denied Indoor Drone Flight with Visual SLAM',
          description: "A custom quadrotor that flies indoors using stereo visual odometry on a Jetson Orin Nano and ArduPilot.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_indoor_drone_slam/";
            },},{id: "projects-small-and-distant-drone-detection-with-custom-yolo",
          title: 'Small and Distant Drone Detection with Custom YOLO',
          description: "Architecture changes to YOLO (attention, SPD-Conv, lightweight blocks) for detecting tiny drones in the sky.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_drone_detection/";
            },},{id: "projects-rgb-annotations-for-the-flir-adas-dataset",
          title: 'RGB Annotations for the FLIR ADAS Dataset',
          description: "Hand-annotated 9,000+ RGB images of FLIR ADAS v1.3 in YOLO format and trained YOLOv8n baselines.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_flir_rgb_annotations/";
            },},{id: "projects-llm-guided-robot-navigation-assistant",
          title: 'LLM-Guided Robot Navigation Assistant',
          description: "A desktop assistant that lets you talk to a TurtleBot — combining ROS 2, YOLO, ZED cameras, and a locally hosted LLM.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_llm_navigation_assistant/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Muhammad_Rizwan_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%69%7A%77%61%6E%30%30%32%37%37@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/muhammad-rizwan277", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/rizwan00277", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0000-9834-9929", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=uvcDpLcAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
