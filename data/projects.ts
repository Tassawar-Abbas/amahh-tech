export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  category: string
  link: string
  github: string
  featured: boolean
  technologies: string[]
  challenges: string
  solutions: string
  results: string
  testimonial?: {
    quote: string
    author: string
    role: string
    company: string
  }
  gallery: string[]
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with inventory management and payment processing.",
    longDescription:
      "A comprehensive e-commerce platform built for scalability and performance. This solution includes advanced inventory management, secure payment processing, customer accounts, and detailed analytics dashboards.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Web",
    link: "#",
    github: "#",
    featured: true,
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
    challenges:
      "The client needed a scalable solution that could handle thousands of products and high traffic during sales events. They also required seamless integration with their existing inventory management system.",
    solutions:
      "We implemented a microservices architecture to ensure scalability and used Redis caching to optimize performance during high-traffic periods. Custom API integrations were developed to connect with their existing systems.",
    results:
      "The platform successfully handles over 10,000 daily users with peak performance during flash sales. The client reported a 35% increase in online sales and a 40% reduction in cart abandonment rates.",
    testimonial: {
      quote:
        "The e-commerce platform exceeded our expectations. It's fast, reliable, and our customers love the seamless shopping experience.",
      author: "Jane Smith",
      role: "CTO",
      company: "Fashion Retailer Inc.",
    },
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "healthcare-management",
    title: "Healthcare Management System",
    description: "An integrated system for healthcare providers to manage patient records and appointments.",
    longDescription:
      "A secure, HIPAA-compliant healthcare management system designed for hospitals and clinics. The platform streamlines patient record management, appointment scheduling, billing, and reporting in one integrated solution.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Enterprise",
    link: "#",
    github: "#",
    featured: false,
    technologies: ["Angular", "Java Spring Boot", "PostgreSQL", "Docker", "Kubernetes"],
    challenges:
      "The healthcare provider needed a secure system that complied with strict regulatory requirements while improving efficiency across multiple departments and locations.",
    solutions:
      "We developed a modular system with role-based access controls and end-to-end encryption. The microservices architecture allows different departments to use specialized modules while maintaining data consistency.",
    results:
      "The system reduced administrative workload by 45% and improved appointment adherence by 30%. Patient satisfaction scores increased by 25% due to streamlined processes.",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "fitness-tracking",
    title: "Fitness Tracking App",
    description: "A mobile application for tracking workouts, nutrition, and health metrics.",
    longDescription:
      "A comprehensive fitness companion app that helps users track workouts, monitor nutrition, set goals, and visualize progress. The app includes social features, trainer connections, and personalized recommendations.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Mobile",
    link: "#",
    github: "#",
    featured: true,
    technologies: ["React Native", "Firebase", "Node.js", "TensorFlow", "Google Fit API"],
    challenges:
      "Creating an engaging, personalized experience that would keep users motivated while accurately tracking various fitness metrics across different activities and devices.",
    solutions:
      "We implemented machine learning algorithms to provide personalized workout recommendations and used gamification elements to increase engagement. The app integrates with various fitness wearables and health platforms.",
    results:
      "The app has over 500,000 downloads with a 4.7-star rating. User retention is 45% higher than industry average, and users report an average 20% improvement in achieving fitness goals.",
    testimonial: {
      quote:
        "This app transformed how we engage with our members. The personalized recommendations and social features have created a thriving fitness community.",
      author: "Michael Johnson",
      role: "Fitness Director",
      company: "Elite Gym Chain",
    },
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "ai-analytics",
    title: "AI-Powered Analytics Dashboard",
    description: "A dashboard that uses machine learning to provide predictive insights from business data.",
    longDescription:
      "An intelligent analytics platform that transforms raw business data into actionable insights using advanced machine learning algorithms. The dashboard provides predictive analytics, anomaly detection, and automated reporting.",
    image: "/placeholder.svg?height=600&width=800",
    category: "AI",
    link: "#",
    github: "#",
    featured: false,
    technologies: ["Python", "TensorFlow", "React", "D3.js", "AWS SageMaker"],
    challenges:
      "Processing and analyzing large volumes of unstructured data from multiple sources to provide meaningful, actionable insights in real-time.",
    solutions:
      "We developed custom machine learning models for predictive analytics and implemented a scalable data processing pipeline. The interactive dashboard visualizes complex data in an intuitive way.",
    results:
      "The client reported a 28% improvement in decision-making speed and a 15% increase in operational efficiency. The predictive models have achieved 92% accuracy in forecasting business trends.",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate Marketplace",
    description: "A platform connecting property buyers, sellers, and agents with advanced search capabilities.",
    longDescription:
      "A comprehensive real estate platform that connects buyers, sellers, and agents in a seamless marketplace. The platform features virtual tours, neighborhood analytics, mortgage calculators, and AI-powered property recommendations.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Web",
    link: "#",
    github: "#",
    featured: false,
    technologies: ["Vue.js", "Node.js", "MongoDB", "Google Maps API", "AWS"],
    challenges:
      "Creating an intuitive platform that could handle complex property searches, integrate with multiple listing services, and provide valuable insights to help users make informed decisions.",
    solutions:
      "We implemented advanced search algorithms with multiple filtering options and developed a recommendation engine based on user preferences. Virtual tour integration and interactive maps enhance the property viewing experience.",
    results:
      "The platform has facilitated over $50 million in property transactions within its first year. User engagement metrics show 3x longer session times compared to competitor platforms.",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "supply-chain",
    title: "Supply Chain Management System",
    description: "An enterprise solution for tracking inventory, managing suppliers, and optimizing logistics.",
    longDescription:
      "A comprehensive supply chain management system that provides end-to-end visibility and control over the entire supply chain. The system optimizes inventory levels, automates supplier management, and streamlines logistics operations.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Enterprise",
    link: "#",
    github: "#",
    featured: false,
    technologies: ["React", "Java", "Oracle Database", "Blockchain", "IoT Integration"],
    challenges:
      "The client needed to improve visibility across a complex global supply chain with multiple suppliers, warehouses, and distribution centers while reducing costs and minimizing disruptions.",
    solutions:
      "We implemented IoT tracking for real-time inventory visibility and blockchain technology for secure, transparent supplier transactions. Advanced analytics provide demand forecasting and optimization recommendations.",
    results:
      "The system reduced inventory costs by 23%, decreased order fulfillment time by 35%, and improved supplier compliance by 40%. Supply chain disruptions were reduced by 60% through proactive risk management.",
    testimonial: {
      quote:
        "This system has transformed our supply chain operations. We now have complete visibility and control, allowing us to make data-driven decisions that have significantly improved our bottom line.",
      author: "Robert Chen",
      role: "VP of Operations",
      company: "Global Manufacturing Corp",
    },
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getRelatedProjects(id: string, category: string, limit = 3): Project[] {
  return projects.filter((project) => project.id !== id && project.category === category).slice(0, limit)
}
