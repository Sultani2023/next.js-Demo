export const projects = [
  {
    id: 1,
    title: "Mobile App Development",
    description: "Build cross-platform mobile app for task management with real-time sync features",
    status: "In Progress",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    deadline: "2026-06-15",
    team: ["Mahfoza", "Ahmad", "Fatima", "Zahra"]
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with payment integration and admin dashboard",
    status: "Planning",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    deadline: "2026-07-30",
    team: ["Mahfoza", "Sara", "Mariam"]
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard for business intelligence and reporting",
    status: "In Progress",
    technologies: ["React", "D3.js", "Firebase", "Chart.js"],
    deadline: "2026-06-20",
    team: ["Ahmad", "Fatima", "Zahra"]
  },
  {
    id: 4,
    title: "AI Chatbot Integration",
    description: "Intelligent chatbot for customer support automation",
    status: "Planning",
    technologies: ["Python", "OpenAI", "FastAPI", "React"],
    deadline: "2026-08-10",
    team: ["Mahfoza", "Mariam", "Sara"]
  },
  {
    id: 5,
    title: "Marketing Website Redesign",
    description: "Complete redesign of company marketing website with modern UI/UX",
    status: "Completed",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    deadline: "2026-05-01",
    team: ["Fatima", "Zahra"]
  },
  {
    id: 6,
    title: "HR Management System",
    description: "Internal HR system for employee management and payroll",
    status: "In Progress",
    technologies: ["React", "Django", "PostgreSQL", "Redis"],
    deadline: "2026-07-15",
    team: ["Mahfoza", "Ahmad", "Sara", "Mariam"]
  },
]

export const teamMembers = [
  {
    id: 1,
    name: "Mahfoza",
    role: "Full-stack Lead",
    bio: "Expert in React & Next.js with 5+ years experience",
    skills: ["React", "Next.js", "Tailwind", "TypeScript"],
    avatar: "/images-3.jpg"
  },
  {
    id: 2,
    name: "Horia",
    role: "Backend Developer",
    bio: "Specialized in Node.js and database architecture",
    skills: ["Node.js", "Python", "MongoDB", "PostgreSQL"],
    avatar: "/images-5.jpg"
  },
  {
    id: 3,
    name: "Fatima",
    role: "UI/UX Designer",
    bio: "Creating beautiful and intuitive user experiences",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    avatar: "/images-4.jpg"
  },
  {
    id: 4,
    name: "Sara",
    role: "Project Manager",
    bio: "Agile certified project manager with 7+ years experience",
    skills: ["Agile", "Scrum", "JIRA", "Leadership"],
    avatar: "/image-1.jpg"
  },
  {
    id: 5,
    name: "Zahra",
    role: "QA Engineer",
    bio: "Ensuring quality and reliability of all products",
    skills: ["Cypress", "Jest", "Selenium", "Manual Testing"],
    avatar: "/images-2.jpg"
  },
  {
    id: 6,
    name: "Mariam",
    role: "DevOps Engineer",
    bio: "Managing deployment and infrastructure",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    avatar: "/images-6.jpg"
  },
]

export const meetings = [
  {
    id: 1,
    title: "Sprint Planning",
    date: "2026-06-02T10:00:00",
    type: "Weekly Sync",
    participants: ["Mahfoza", "Ahmad", "Fatima", "Sara", "Zahra", "Mariam"]
  },
  {
    id: 2,
    title: "Design Review",
    date: "2026-06-03T14:30:00",
    type: "Design Meeting",
    participants: ["Mahfoza", "Fatima", "Sara"]
  },
  {
    id: 3,
    title: "Code Review Session",
    date: "2026-06-04T11:00:00",
    type: "Technical",
    participants: ["Mahfoza", "Ahmad", "Mariam"]
  },
  {
    id: 4,
    title: "Client Demo",
    date: "2026-06-05T15:00:00",
    type: "Presentation",
    participants: ["Mahfoza", "Sara", "Zahra"]
  },
  {
    id: 5,
    title: "Retrospective",
    date: "2026-06-06T09:30:00",
    type: "Team Meeting",
    participants: ["All Team Members"]
  },
]

export const tasks = [
  { id: 1, title: "Design dashboard layout", description: "Create responsive dashboard design", status: "completed", priority: "high", dueDate: "2026-05-28", assignee: "Fatima" },
  { id: 2, title: "Implement authentication", description: "Add login/signup functionality", status: "in-progress", priority: "high", dueDate: "2026-06-05", assignee: "Ahmad" },
  { id: 3, title: "Write API documentation", description: "Document all API endpoints", status: "todo", priority: "medium", dueDate: "2026-06-10", assignee: "Mariam" },
  { id: 4, title: "Optimize performance", description: "Reduce load time by 50%", status: "in-progress", priority: "high", dueDate: "2026-06-07", assignee: "Frozan" },
  { id: 5, title: "Fix responsive issues", description: "Ensure mobile compatibility", status: "todo", priority: "medium", dueDate: "2026-06-12", assignee: "Zahra" },
  { id: 6, title: "Write unit tests", description: "Achieve 80% test coverage", status: "todo", priority: "low", dueDate: "2026-06-15", assignee: "Zahra" },
]

export const activities = [
  { user: "Mahfoza", action: "completed task 'Design dashboard layout'", type: "task", time: "2 hours ago" },
  { user: "Asma", action: "started new meeting 'Sprint Planning'", type: "meeting", time: "3 hours ago" },
  { user: "Fatima", action: "updated project 'Mobile App Development'", type: "project", time: "5 hours ago" },
  { user: "Sara", action: "joined the team as Project Manager", type: "member", time: "1 day ago" },
  { user: "Zahra", action: "completed code review for PR #42", type: "task", time: "1 day ago" },
  { user: "Mariam", action: "deployed new version to production", type: "project", time: "2 days ago" },
]