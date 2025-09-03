// Careers page data configuration
export interface HeroContent {
  backgroundImage: string;
  headline: string;
  subheadline: string;
}

export interface OpportunitiesContent {
  headline: string;
  subheadline: string;
  buttonText: string;
}

export interface TeamCard {
  id: string;
  name: string;
  title: string;
  image: string;
  description: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface JobListing {
  id: string;
  title: string;
  excerpt: string;
  fullDescription: string;
  location: string;
  type: string;
  workMode: string;
  department: string;
}

export interface OpeningsContent {
  headline: string;
  subheadline: string;
  searchPlaceholder: string;
}

export interface CareersData {
  heroContent: HeroContent;
  opportunitiesContent: OpportunitiesContent;
  teamCards: TeamCard[];
  benefits: Benefit[];
  openingsContent: OpeningsContent;
  jobListings: JobListing[];
}

export const careersData: CareersData = {
  heroContent: {
    backgroundImage: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    headline: 'Careers',
    subheadline: 'Join our mission to transform healthcare through innovative medical equipment solutions and make a meaningful impact in the lives of patients worldwide.'
  },

  opportunitiesContent: {
    headline: 'ProCare Group Career Opportunities',
    subheadline: 'Discover exciting career paths in healthcare technology and join a team dedicated to advancing medical excellence through innovative solutions.',
    buttonText: 'Join Our Team'
  },

  teamCards: [
    {
      id: 'team-1',
      name: 'Dr. Sarah Mitchell',
      title: 'Chief Medical Officer',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Leading clinical excellence and medical innovation initiatives across all healthcare solutions.'
    },
    {
      id: 'team-2',
      name: 'Michael Chen',
      title: 'Senior Engineer',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Developing cutting-edge medical technology solutions that enhance patient care delivery.'
    },
    {
      id: 'team-3',
      name: 'Emily Rodriguez',
      title: 'Operations Manager',
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Optimizing healthcare operations and ensuring seamless service delivery to our clients.'
    }
  ],

  benefits: [
    {
      icon: 'Heart',
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, wellness programs, mental health support, and fitness benefits to keep you at your best.'
    },
    {
      icon: 'TrendingUp',
      title: 'Career Growth',
      description: 'Professional development opportunities, training programs, mentorship, and clear advancement paths for your career.'
    },
    {
      icon: 'Users',
      title: 'Team Environment',
      description: 'Collaborative workplace culture with supportive colleagues, team building activities, and inclusive environment.'
    },
    {
      icon: 'Award',
      title: 'Recognition & Rewards',
      description: 'Competitive compensation, performance bonuses, employee recognition programs, and comprehensive benefits package.'
    }
  ],

  openingsContent: {
    headline: 'Current Openings',
    subheadline: 'Explore our current job opportunities and find your next career move in healthcare technology.',
    searchPlaceholder: 'Search Job Title'
  },

  jobListings: [
    {
      id: 'job-1',
      title: 'Healthcare Operations Manager',
      excerpt: 'Lead operational excellence initiatives and manage healthcare service delivery across multiple facilities.',
      fullDescription: 'We are seeking an experienced Healthcare Operations Manager to oversee our operational excellence initiatives across multiple healthcare facilities. The ideal candidate will have a strong background in healthcare operations, process improvement, and team leadership. You will be responsible for managing service delivery, implementing best practices, ensuring compliance with healthcare regulations, and driving continuous improvement initiatives. This role requires excellent communication skills, strategic thinking, and the ability to work collaboratively with diverse healthcare teams.',
      location: 'New York, NY',
      type: 'Full-time',
      workMode: 'Hybrid',
      department: 'Operations'
    },
    {
      id: 'job-2',
      title: 'Clinical Care Coordinator',
      excerpt: 'Coordinate patient care activities and collaborate with healthcare teams to ensure quality outcomes.',
      fullDescription: 'Join our clinical team as a Care Coordinator where you will play a vital role in coordinating patient care activities and ensuring seamless communication between healthcare teams. You will work closely with physicians, nurses, and other healthcare professionals to develop and implement care plans, monitor patient progress, and ensure quality outcomes. The ideal candidate will have clinical experience, strong organizational skills, and a passion for patient advocacy. This position offers the opportunity to make a direct impact on patient care while working with cutting-edge medical technology.',
      location: 'Boston, MA',
      type: 'Full-time',
      workMode: 'Hybrid',
      department: 'Clinical Services'
    },
    {
      id: 'job-3',
      title: 'Healthcare Business Analyst',
      excerpt: 'Analyze healthcare data, identify improvement opportunities, and support strategic decision-making.',
      fullDescription: 'We are looking for a Healthcare Business Analyst to join our strategy team and help drive data-driven decision making across our organization. You will be responsible for analyzing healthcare data, identifying trends and improvement opportunities, developing reports and dashboards, and supporting strategic initiatives. The ideal candidate will have experience with healthcare analytics, strong technical skills in data analysis tools, and the ability to translate complex data into actionable insights. This remote position offers flexibility while working on impactful projects that shape the future of healthcare delivery.',
      location: 'Remote',
      type: 'Full-time',
      workMode: 'Remote',
      department: 'Strategy'
    },
    {
      id: 'job-4',
      title: 'Patient Services Representative',
      excerpt: 'Provide exceptional patient support, handle inquiries, and ensure positive patient experiences.',
      fullDescription: 'Join our patient services team as a representative where you will be the first point of contact for patients and their families. You will handle inquiries, provide information about our services, schedule appointments, and ensure positive patient experiences throughout their healthcare journey. The ideal candidate will have excellent communication skills, empathy, and a commitment to customer service excellence. This part-time position offers flexible scheduling and the opportunity to make a meaningful difference in patients\' lives while working in a supportive team environment.',
      location: 'Chicago, IL',
      type: 'Part-time',
      workMode: 'On-site',
      department: 'Patient Services'
    },
    {
      id: 'job-5',
      title: 'Medical Equipment Technician',
      excerpt: 'Maintain and repair medical equipment to ensure optimal performance and safety standards.',
      fullDescription: 'We are seeking a skilled Medical Equipment Technician to join our technical services team. You will be responsible for maintaining, calibrating, and repairing various types of medical equipment to ensure optimal performance and compliance with safety standards. The role involves troubleshooting technical issues, performing preventive maintenance, and providing technical support to healthcare facilities. The ideal candidate will have technical training in biomedical equipment, strong problem-solving skills, and attention to detail. This position offers opportunities for professional development and specialization in cutting-edge medical technology.',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      workMode: 'On-site',
      department: 'Technical Services'
    },
    {
      id: 'job-6',
      title: 'Healthcare Sales Representative',
      excerpt: 'Build relationships with healthcare providers and promote our medical equipment solutions.',
      fullDescription: 'Join our sales team as a Healthcare Sales Representative where you will build and maintain relationships with healthcare providers while promoting our comprehensive range of medical equipment solutions. You will identify new business opportunities, conduct product demonstrations, prepare proposals, and work closely with clients to understand their needs. The ideal candidate will have sales experience in the healthcare industry, strong relationship-building skills, and knowledge of medical equipment. This role offers competitive compensation, commission opportunities, and the chance to work with leading healthcare institutions.',
      location: 'Dallas, TX',
      type: 'Full-time',
      workMode: 'Hybrid',
      department: 'Sales'
    },
    {
      id: 'job-7',
      title: 'Quality Assurance Specialist',
      excerpt: 'Ensure compliance with healthcare regulations and maintain quality standards across all operations.',
      fullDescription: 'We are looking for a Quality Assurance Specialist to ensure our operations meet the highest standards of quality and compliance with healthcare regulations. You will develop and implement quality control procedures, conduct audits, investigate quality issues, and work with teams to implement corrective actions. The ideal candidate will have experience in healthcare quality assurance, knowledge of regulatory requirements, and strong analytical skills. This position plays a critical role in maintaining our reputation for excellence and ensuring patient safety.',
      location: 'Atlanta, GA',
      type: 'Full-time',
      workMode: 'On-site',
      department: 'Quality Assurance'
    },
    {
      id: 'job-8',
      title: 'Healthcare IT Specialist',
      excerpt: 'Support healthcare technology systems and ensure seamless integration of medical equipment.',
      fullDescription: 'Join our IT team as a Healthcare IT Specialist where you will support healthcare technology systems and ensure seamless integration of medical equipment with existing infrastructure. You will troubleshoot technical issues, implement system upgrades, provide user support, and work on projects to enhance our technology capabilities. The ideal candidate will have experience with healthcare IT systems, strong technical skills, and understanding of medical equipment connectivity. This role offers opportunities to work with the latest healthcare technology and make a significant impact on operational efficiency.',
      location: 'Seattle, WA',
      type: 'Full-time',
      workMode: 'Remote',
      department: 'Information Technology'
    }
  ]
};