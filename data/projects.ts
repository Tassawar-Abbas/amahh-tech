export interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  link: string
  technologies: string[]
}

export const projects: Project[] =  [
  {
    id: '1',
    title: 'Global Airport Taxi',
    category: 'Web',
    image: '/images/g.png',
    description: 'A seamless transportation booking system with real-time tracking and management.',
    technologies: ["React", "Html5", "CSS3", "Bootstrap", "JavaScript","Tailwind Css"],
    link:'https://globalairporttaxi.com/'
  },
  {
    id: '2',
    title: 'Tamadres',
    category: 'Web',
    image: '/images/m1.png',
    description: 'Online bookstore and cultural platform that aims to remind readers that books are products of culture.',
    technologies: ["React", "Html5", "CSS3", "Bootstrap", "JavaScript","Tailwind Css"],
    link:'https://tamadres.com/'
  },
  {
    id: '3',
    title: 'Partner Dashboard Management',
    category: 'Web',
    image: '/images/p1.png',
    description: 'All-in-one platform designed for coaches, course creators, and community builders to share knowledge, engage audiences, and monetize content',
    technologies: ["React", "Html5", "CSS3", "Bootstrap", "JavaScript","Tailwind Css","Node J's","Express J's","MongoDb","AWS",'Context Api'],
    link:'https://partner.wisdome.mobi/dashboard'
  },
  {
    id: '4',
    title: "Member Learning Challenges and Events Management",
    category: 'Web',
    image: "/images/m1.png",
    description: "​Wisdome's dashboard offers a centralized hub for creators to manage courses, events, and community interactions. It provides tools for scheduling, content management, and audience engagement, facilitating seamless knowledge sharing and monetization",
    technologies:  ["React", "Html5", "CSS3", "Bootstrap", "JavaScript","Tailwind Css","Node J's","Express J's","MongoDb","AWS",'Context Api'],
    link:'https://wisdome.mobi/dashboard'
  },
  {
    id: '5',
    title: "Member Learning Challenges and Events Management",
    category: 'Mobile',
    image: "/images/ma5.png",
    description: "​Wisdome's dashboard offers a centralized hub for creators to manage courses, events, and community interactions. It provides tools for scheduling, content management, and audience engagement, facilitating seamless knowledge sharing and monetization",
    technologies:  ["React Native","JavaScript","Tailwind Css","Node J's","Express J's","MongoDb","AWS",'Axios','Context Api'],
        link:''
  },
 
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getRelatedProjects(id: string, category: string, limit = 3): Project[] {
  return projects.filter((project) => project.id !== id && project.category === category).slice(0, limit)
}
