export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  technologies: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  status: "Available" | "Coming soon";
};

export const projects: Project[] = [
  { slug: "iot-smart-garbage-monitor", title: "IoT Smart Garbage Monitoring System", category: "Internet of Things", summary: "A connected bin-monitoring concept that tracks fill level and supports smarter waste collection.", technologies: ["ESP32", "Ultrasonic Sensor", "IoT"], difficulty: "Intermediate", duration: "To be confirmed", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=85", imageAlt: "Connected electronics and glowing technology installation", featured: true, status: "Coming soon" },
  { slug: "esp32-environment-monitor", title: "ESP32 Environment Monitoring", category: "ESP32 Projects", summary: "Monitor environmental readings using a microcontroller and suitable sensors.", technologies: ["ESP32", "Sensors", "Embedded C"], difficulty: "Beginner", duration: "To be confirmed", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85", imageAlt: "Electronic circuit board and embedded hardware", featured: true, status: "Coming soon" },
  { slug: "robotic-obstacle-avoider", title: "Robotic Obstacle Avoider", category: "Robotics & Automation", summary: "A mobile robot concept that detects obstacles and changes direction autonomously.", technologies: ["Arduino", "Ultrasonic Sensor", "Motor Driver"], difficulty: "Beginner", duration: "To be confirmed", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85", imageAlt: "Modern robotics hardware", status: "Coming soon" },
  { slug: "predictive-maintenance-monitor", title: "Machine Condition Monitoring", category: "Embedded Systems", summary: "A prototype concept for collecting machine-condition signals for maintenance insights.", technologies: ["Microcontroller", "Sensors", "Dashboard"], difficulty: "Advanced", duration: "To be confirmed", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85", imageAlt: "Engineer working with industrial electronics", featured: true, status: "Coming soon" },
  { slug: "smart-agriculture-monitor", title: "Smart Agriculture Monitoring", category: "Smart Agriculture", summary: "A sensor-based agriculture monitoring concept for soil and environmental conditions.", technologies: ["IoT", "Soil Sensor", "ESP32"], difficulty: "Intermediate", duration: "To be confirmed", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85", imageAlt: "Green agricultural field under open sky", status: "Coming soon" },
  { slug: "ai-visual-inspection", title: "AI Visual Inspection", category: "Artificial Intelligence", summary: "An image-based inspection concept for identifying selected visual defects.", technologies: ["Python", "Computer Vision", "Machine Learning"], difficulty: "Advanced", duration: "To be confirmed", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=85", imageAlt: "Abstract technology and city lights", featured: true, status: "Coming soon" }
];

export const categories = [
  "Arduino Projects", "ESP32 & ESP8266", "Internet of Things", "Embedded Systems",
  "Robotics & Automation", "Artificial Intelligence", "Electrical & Electronics",
  "Biomedical Projects", "Smart Agriculture", "Final Year Projects", "Diploma Projects", "Hackathon Projects"
];
