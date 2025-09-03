// About page data configuration
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  foundedYear: number;
  experience: number;
}

export interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio?: string;
}

export interface Brand {
  name: string;
  logo: string;
  description?: string;
}

export interface Statistic {
  value: string;
  label: string;
  description: string;
}

export interface MissionVision {
  mission: {
    title: string;
    content: string;
  };
  vision: {
    title: string;
    content: string;
  };
}

// Company information
export const companyInfo: CompanyInfo = {
  name: 'ProCare Group',
  tagline: 'Leading the future of healthcare with innovative medical equipment solutions',
  description: 'ProCare Group is a leading healthcare solutions provider with over 25 years of experience in delivering high-quality medical equipment, consumables, and comprehensive support services. Founded with a vision to transform healthcare delivery, we have grown to become a trusted partner for healthcare institutions across the globe.',
  foundedYear: 1999,
  experience: 25
};

// Core values data
export const coreValues: CoreValue[] = [
  {
    icon: 'Heart',
    title: 'Patient-Centered Care',
    description: 'Every decision we make prioritizes the well-being and satisfaction of those we serve, ensuring compassionate and comprehensive healthcare solutions.'
  },
  {
    icon: 'Shield',
    title: 'Quality & Safety',
    description: 'We maintain the highest standards of quality and safety in all our products and services, adhering to strict regulatory compliance.'
  },
  {
    icon: 'Award',
    title: 'Excellence & Innovation',
    description: 'Continuous improvement and cutting-edge innovation drive our commitment to delivering exceptional healthcare outcomes.'
  },
  {
    icon: 'Users',
    title: 'Collaborative Partnership',
    description: 'We build lasting relationships with healthcare providers through transparent communication and collaborative problem-solving.'
  }
];

// Team members data
export const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Sarah Mitchell',
    title: 'Chief Executive Officer',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    bio: 'Leading healthcare innovation with 20+ years of medical industry experience.'
  },
  {
    name: 'Michael Chen',
    title: 'Chief Technology Officer',
    image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    bio: 'Driving technological advancement in medical equipment solutions.'
  },
  {
    name: 'Dr. Emily Rodriguez',
    title: 'Chief Medical Officer',
    image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    bio: 'Ensuring clinical excellence and medical best practices across all operations.'
  },
  {
    name: 'David Thompson',
    title: 'Chief Operations Officer',
    image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    bio: 'Optimizing operational efficiency and service delivery excellence.'
  }
];

// Partner brands data
export const partnerBrands: Brand[] = [
  { name: 'MedTech Solutions', logo: 'MT', description: 'Advanced diagnostic equipment' },
  { name: 'HealthCare Plus', logo: 'HC', description: 'Patient monitoring systems' },
  { name: 'Medical Innovations', logo: 'MI', description: 'Surgical instruments' },
  { name: 'ProMed Systems', logo: 'PS', description: 'Laboratory equipment' },
  { name: 'Advanced Care', logo: 'AC', description: 'Emergency care solutions' },
  { name: 'MediCore', logo: 'MC', description: 'Medical consumables' }
];

// Company statistics
export const companyStats: Statistic[] = [
  {
    value: '25+',
    label: 'Years of Experience',
    description: 'Serving healthcare providers worldwide'
  },
  {
    value: '500+',
    label: 'Healthcare Partners',
    description: 'Trusted by leading medical institutions'
  },
  {
    value: '50+',
    label: 'Countries Served',
    description: 'Global reach and local expertise'
  },
  {
    value: '99.9%',
    label: 'Uptime Guarantee',
    description: 'Reliable equipment performance'
  }
];

// Mission and vision
export const missionVision: MissionVision = {
  mission: {
    title: 'Our Mission',
    content: 'To provide innovative, reliable, and cost-effective medical equipment solutions that empower healthcare professionals to deliver exceptional patient care while advancing the standards of healthcare delivery worldwide.'
  },
  vision: {
    title: 'Our Vision',
    content: 'To be the global leader in healthcare technology solutions, recognized for our commitment to innovation, quality, and sustainable healthcare practices that improve lives and strengthen communities.'
  }
};

// Hero section content
export const heroContent = {
  badge: 'Welcome to ProCare Group',
  headline: 'About ProCare Group',
  subheadline: 'Leading the future of healthcare with innovative medical equipment solutions, exceptional service, and unwavering commitment to patient care excellence.',
  backgroundImage: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
};

// Expertise areas
export const expertiseAreas = [
  {
    title: 'Medical Equipment',
    description: 'Our medical expertise encompasses a comprehensive range of healthcare technologies, from advanced diagnostic imaging systems to precision surgical instruments.',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  },
  {
    title: 'Education & Training',
    description: 'We provide comprehensive training and educational programs to ensure healthcare professionals can maximize the potential of our medical equipment.',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  }
];