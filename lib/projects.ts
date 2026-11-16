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

const image = (name: string) => `/images/projects/${name}.webp`;

export const projects: Project[] = [
  {
    slug: "ev-battery-management-system",
    title: "EV Battery Management System (BMS)",
    category: "Embedded Systems",
    summary: "Monitor battery voltage, current and temperature, estimate state of charge, and explore battery protection and balancing concepts.",
    technologies: ["ESP32", "BMS", "Li-ion Battery", "Current Sensor", "IoT"],
    difficulty: "Advanced", duration: "To be confirmed",
    image: image("ev-battery-management-system"),
    imageAlt: "EV battery management system prototype with battery pack, BMS board and monitoring dashboard",
    featured: true, status: "Coming soon"
  },
  {
    slug: "dual-axis-solar-tracker",
    title: "Dual-Axis Solar Tracker",
    category: "Electrical & Electronics",
    summary: "Use light sensors and servo motors to adjust a solar panel horizontally and vertically toward stronger sunlight.",
    technologies: ["ESP32", "LDR Sensors", "Servo Motors", "Solar Panel", "IoT"],
    difficulty: "Intermediate", duration: "To be confirmed",
    image: image("dual-axis-solar-tracker"),
    imageAlt: "Dual-axis solar tracker prototype with LDR sensors and ESP32 dashboard",
    featured: true, status: "Coming soon"
  },
  {
    slug: "autonomous-delivery-robot",
    title: "Autonomous Delivery Robot",
    category: "Robotics & Automation",
    summary: "A mobile delivery robot concept combining obstacle sensing, motor control, camera monitoring and a connected status dashboard.",
    technologies: ["ESP32", "ESP32-CAM", "HC-SR04", "L298N", "IoT"],
    difficulty: "Advanced", duration: "To be confirmed",
    image: image("autonomous-delivery-robot"),
    imageAlt: "Autonomous delivery robot prototype with ESP32, camera and ultrasonic sensors",
    featured: true, status: "Coming soon"
  },
  {
    slug: "predictive-maintenance-system",
    title: "IoT Predictive Maintenance System",
    category: "Internet of Things",
    summary: "Collect vibration, temperature and current signals from a machine to monitor condition and explore early fault-warning models.",
    technologies: ["ESP32", "SW-420", "DS18B20", "ACS712", "AI / ML"],
    difficulty: "Advanced", duration: "To be confirmed",
    image: image("predictive-maintenance-system"),
    imageAlt: "Industrial predictive maintenance setup with sensors and live dashboard",
    featured: true, status: "Coming soon"
  },
  {
    slug: "iot-weather-monitoring",
    title: "IoT Weather Monitoring Station",
    category: "Internet of Things",
    summary: "Measure environmental parameters such as temperature, humidity, pressure, light intensity, rainfall and wind conditions.",
    technologies: ["ESP32", "DHT22", "BMP280", "BH1750", "Weather Sensors"],
    difficulty: "Intermediate", duration: "To be confirmed",
    image: image("iot-weather-monitoring"),
    imageAlt: "IoT weather station with environmental sensors and monitoring dashboard",
    featured: true, status: "Coming soon"
  },
  {
    slug: "iot-smart-waste-segregation",
    title: "IoT Smart Waste Segregation System",
    category: "Internet of Things",
    summary: "A smart waste-sorting concept that combines camera-based classification, bin monitoring and connected collection insights.",
    technologies: ["ESP32", "Camera", "Ultrasonic Sensor", "Load Cell", "AI / ML"],
    difficulty: "Advanced", duration: "To be confirmed",
    image: image("iot-smart-waste-segregation"),
    imageAlt: "Smart waste segregation prototype with wet, dry and hazardous waste bins",
    featured: true, status: "Coming soon"
  },
  {
    slug: "smart-water-cleaning-robot",
    title: "Smart Water Cleaning Robot",
    category: "Robotics & Automation",
    summary: "An IoT-enabled floating robot concept for collecting surface waste while monitoring selected water-quality parameters.",
    technologies: ["ESP32", "HC-SR04", "Water Quality Sensors", "DC Motors", "Solar"],
    difficulty: "Advanced", duration: "To be confirmed",
    image: image("smart-water-cleaning-robot"),
    imageAlt: "Floating water cleaning robot with waste collection conveyor and sensors",
    status: "Coming soon"
  },
  {
    slug: "fire-smoke-detection-system",
    title: "IoT Fire & Smoke Detection System",
    category: "Internet of Things",
    summary: "Monitor smoke, flame and temperature readings and send alerts to a connected dashboard when configured thresholds are crossed.",
    technologies: ["ESP32", "MQ-2", "Flame Sensor", "DHT11", "Buzzer"],
    difficulty: "Intermediate", duration: "To be confirmed",
    image: image("fire-smoke-detection"),
    imageAlt: "Fire and smoke detection system with ESP32 sensors and alert dashboard",
    status: "Coming soon"
  },
  {
    slug: "arduino-fire-fighting-robot",
    title: "Arduino Fire-Fighting Robot",
    category: "Robotics & Automation",
    summary: "A robot prototype that detects a flame, navigates toward a target and operates a water pump for a controlled demonstration.",
    technologies: ["Arduino UNO", "Flame Sensor", "HC-SR04", "Servo Motor", "Water Pump"],
    difficulty: "Advanced", duration: "To be confirmed",
    image: image("arduino-fire-fighting-robot"),
    imageAlt: "Arduino fire-fighting robot prototype with flame sensor and water spray",
    status: "Coming soon"
  },
  {
    slug: "iot-manhole-monitoring",
    title: "IoT Manhole Monitoring System",
    category: "Internet of Things",
    summary: "Monitor manhole cover status, water level and gas readings and report abnormal conditions to a remote dashboard.",
    technologies: ["ESP32", "HC-SR04", "Gas Sensor", "Tilt Sensor", "GPS"],
    difficulty: "Intermediate", duration: "To be confirmed",
    image: image("iot-manhole-monitoring"),
    imageAlt: "IoT manhole monitoring installation with sensors and remote dashboard",
    status: "Coming soon"
  },
  {
    slug: "contactless-iot-doorbell",
    title: "Contactless IoT Doorbell",
    category: "Internet of Things",
    summary: "Combine contactless visitor detection, a camera feed and connected visitor notifications for a smart entry concept.",
    technologies: ["ESP32-CAM", "HC-SR04", "Wi-Fi", "Camera", "IoT"],
    difficulty: "Intermediate", duration: "To be confirmed",
    image: image("contactless-iot-doorbell"),
    imageAlt: "Contactless smart doorbell with camera, sensor and visitor notification interface",
    status: "Coming soon"
  },
  {
    slug: "smart-parking-system",
    title: "Smart Parking System",
    category: "Internet of Things",
    summary: "Use RFID for vehicle access and sensors to detect parking-slot occupancy, then update a live parking dashboard.",
    technologies: ["ESP8266", "RFID RC522", "HC-SR04", "Servo Motor", "Wi-Fi"],
    difficulty: "Intermediate", duration: "To be confirmed",
    image: image("smart-parking-system"),
    imageAlt: "Smart parking prototype with RFID entry barrier and slot status dashboard",
    status: "Coming soon"
  },
  {
    slug: "iot-garbage-monitoring",
    title: "IoT Garbage Monitoring System",
    category: "Internet of Things",
    summary: "Measure waste-bin fill level and weight, display status and trigger collection alerts when configured limits are reached.",
    technologies: ["ESP8266", "HC-SR04", "Load Cell", "Wi-Fi", "Dashboard"],
    difficulty: "Beginner", duration: "To be confirmed",
    image: image("iot-garbage-monitoring"),
    imageAlt: "Smart garbage bin with fill-level sensor, load cell and monitoring dashboard",
    status: "Coming soon"
  },
  {
    slug: "smart-women-safety-device",
    title: "Smart Women Safety Device",
    category: "Embedded Systems",
    summary: "A wearable safety prototype concept with an SOS control, location reporting and motion-event detection.",
    technologies: ["ESP32", "GPS", "MPU6050", "SOS Button", "Buzzer"],
    difficulty: "Intermediate", duration: "To be confirmed",
    image: image("smart-women-safety-device"),
    imageAlt: "Wearable IoT safety device with ESP32, GPS module and SOS button",
    status: "Coming soon"
  },
  {
    slug: "iot-health-monitoring",
    title: "IoT Health Monitoring System",
    category: "Biomedical Projects",
    summary: "Demonstrate connected collection and visualization of selected vital-sign sensor readings. Not a diagnostic device.",
    technologies: ["ESP32", "MAX30102", "DHT22", "OLED Display", "IoT"],
    difficulty: "Advanced", duration: "To be confirmed",
    image: image("iot-health-monitoring"),
    imageAlt: "IoT health monitoring prototype with pulse sensor and live dashboard",
    status: "Coming soon"
  },
  {
    slug: "smart-home-automation",
    title: "Smart Home Automation System",
    category: "Internet of Things",
    summary: "Control selected home appliances using a microcontroller, relay module, motion sensing and a mobile IoT interface.",
    technologies: ["ESP32", "Relay Module", "PIR Sensor", "DHT22", "Blynk"],
    difficulty: "Beginner", duration: "To be confirmed",
    image: image("smart-home-automation"),
    imageAlt: "Smart home automation prototype with ESP32, relay module and mobile control app",
    featured: true, status: "Coming soon"
  }
];

export const categories = [
  "Arduino Projects", "ESP32 & ESP8266", "Internet of Things", "Embedded Systems",
  "Robotics & Automation", "Artificial Intelligence", "Electrical & Electronics",
  "Biomedical Projects", "Smart Agriculture", "Final Year Projects", "Diploma Projects", "Hackathon Projects"
];
