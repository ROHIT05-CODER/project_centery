export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  technologies: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  featured?: boolean;
  status: "Available" | "Coming soon";
};

export const projects: Project[] = [
  { slug: "iot-smart-garbage-monitor", title: "IoT Smart Garbage Monitoring System", category: "Internet of Things", summary: "A connected bin-monitoring concept that tracks fill level and supports smarter waste collection.", technologies: ["ESP32", "Ultrasonic Sensor", "IoT"], difficulty: "Intermediate", duration: "To be confirmed", featured: true, status: "Coming soon" },
  { slug: "esp32-environment-monitor", title: "ESP32 Environment Monitoring", category: "ESP32 Projects", summary: "Monitor environmental readings using a microcontroller and suitable sensors.", technologies: ["ESP32", "Sensors", "Embedded C"], difficulty: "Beginner", duration: "To be confirmed", featured: true, status: "Coming soon" },
  { slug: "robotic-obstacle-avoider", title: "Robotic Obstacle Avoider", category: "Robotics & Automation", summary: "A mobile robot concept that detects obstacles and changes direction autonomously.", technologies: ["Arduino", "Ultrasonic Sensor", "Motor Driver"], difficulty: "Beginner", duration: "To be confirmed", status: "Coming soon" },
  { slug: "predictive-maintenance-monitor", title: "Machine Condition Monitoring", category: "Embedded Systems", summary: "A prototype concept for collecting machine-condition signals for maintenance insights.", technologies: ["Microcontroller", "Sensors", "Dashboard"], difficulty: "Advanced", duration: "To be confirmed", status: "Coming soon" },
  { slug: "smart-agriculture-monitor", title: "Smart Agriculture Monitoring", category: "Smart Agriculture", summary: "A sensor-based agriculture monitoring concept for soil and environmental conditions.", technologies: ["IoT", "Soil Sensor", "ESP32"], difficulty: "Intermediate", duration: "To be confirmed", status: "Coming soon" },
  { slug: "ai-visual-inspection", title: "AI Visual Inspection", category: "Artificial Intelligence", summary: "An image-based inspection concept for identifying selected visual defects.", technologies: ["Python", "Computer Vision", "Machine Learning"], difficulty: "Advanced", duration: "To be confirmed", status: "Coming soon" }
];

export const categories = [
  "Arduino Projects", "ESP32 & ESP8266", "Internet of Things", "Embedded Systems",
  "Robotics & Automation", "Artificial Intelligence", "Electrical & Electronics",
  "Biomedical Projects", "Smart Agriculture", "Final Year Projects", "Diploma Projects", "Hackathon Projects"
];