export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  demoUrl: string; // This will point to your files in /public/demo-websites/
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    id: '6',
    title: 'IT Professional Portfolio',
    category: 'Personal Branding',
    description: 'A sleek, modern personal portfolio website for an IT professional freelancer. Designed to showcase technical expertise, featured projects, and secure clients.',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1172',
    demoUrl: 'https://personal-branding.saarthdigital.in/',
    tags: ['IT Professional', 'Freelancer', 'Portfolio']
  },
  {
    id: '5',
    title: 'Luxe Editorial Salon',
    category: 'Beauty & Wellness',
    description: 'An elegant, high-end editorial salon website featuring a curated service menu, client testimonials, and a refined aesthetic.',
    thumbnail: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1074',
    demoUrl: 'https://salon-demo.saarthdigital.in/',
    tags: ['Salon', 'Elegant Design', 'Local Business']
  },
  {
    id: '4',
    title: 'Elite Fitness Coach Portfolio',
    category: 'Personal Branding',
    description: 'A high-impact personal branding website for an elite gym trainer. Designed to showcase expertise, client transformations, and secure high-ticket coaching clients.',
    thumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1170',
    demoUrl: 'https://personal-trainer.saarthdigital.in/',
    tags: ['Personal Branding', 'Fitness Coach', 'Lead Gen']
  }
];
