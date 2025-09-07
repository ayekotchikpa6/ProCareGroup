// News & Blogs data configuration
export interface NewsArticle {
  id: string;
  image: string;
  category: string;
  title: string;
  date: string;
  readingTime: string;
}

export interface Article {
  id: string;
  image: string;
  category: string;
  title: string;
  date: string;
  readingTime: string;
}

// News data - 28 articles for 4 pages of 7 each
export const newsData: NewsArticle[] = [
  // Page 1
  {
    id: 'news-1',
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Industry News',
    title: 'Revolutionary Medical Imaging Technology Approved by FDA',
    date: 'March 20, 2024',
    readingTime: '4 min read'
  },
  {
    id: 'news-2',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Company News',
    title: 'ProCare Group Expands Operations to Southeast Asia',
    date: 'March 18, 2024',
    readingTime: '3 min read'
  },
  {
    id: 'news-3',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Healthcare Innovation',
    title: 'AI-Powered Diagnostic Tools Show 95% Accuracy Rate',
    date: 'March 15, 2024',
    readingTime: '6 min read'
  },
  {
    id: 'news-4',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Training & Education',
    title: 'New Medical Equipment Training Program Launches',
    date: 'March 12, 2024',
    readingTime: '5 min read'
  },
  {
    id: 'news-5',
    image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Sustainability',
    title: 'Carbon Neutral Manufacturing Facility Opens',
    date: 'March 10, 2024',
    readingTime: '4 min read'
  },
  {
    id: 'news-6',
    image: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Partnership',
    title: 'Strategic Alliance with Leading Hospital Network',
    date: 'March 8, 2024',
    readingTime: '3 min read'
  },
  {
    id: 'news-7',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Community Impact',
    title: 'Medical Equipment Donation Reaches 100 Clinics',
    date: 'March 5, 2024',
    readingTime: '5 min read'
  },
  // Page 2
  {
    id: 'news-8',
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Product Launch',
    title: 'Next-Generation Patient Monitoring System Released',
    date: 'March 3, 2024',
    readingTime: '4 min read'
  },
  {
    id: 'news-9',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Research & Development',
    title: 'Breakthrough in Minimally Invasive Surgery Tools',
    date: 'February 28, 2024',
    readingTime: '6 min read'
  },
  {
    id: 'news-10',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Awards & Recognition',
    title: 'ProCare Group Wins Healthcare Innovation Award',
    date: 'February 25, 2024',
    readingTime: '3 min read'
  },
  {
    id: 'news-11',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Digital Health',
    title: 'Telemedicine Platform Integration Complete',
    date: 'February 22, 2024',
    readingTime: '5 min read'
  },
  {
    id: 'news-12',
    image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Quality Assurance',
    title: 'ISO 13485 Certification Renewed for All Facilities',
    date: 'February 20, 2024',
    readingTime: '4 min read'
  },
  {
    id: 'news-13',
    image: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Global Expansion',
    title: 'New Distribution Center Opens in Europe',
    date: 'February 18, 2024',
    readingTime: '3 min read'
  },
  {
    id: 'news-14',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Emergency Response',
    title: 'Rapid Deployment Kit for Disaster Relief Ready',
    date: 'February 15, 2024',
    readingTime: '5 min read'
  },
  // Page 3
  {
    id: 'news-15',
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Technology Integration',
    title: 'IoT-Enabled Medical Devices Launch Successfully',
    date: 'February 12, 2024',
    readingTime: '6 min read'
  },
  {
    id: 'news-16',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Workforce Development',
    title: '500 Healthcare Professionals Complete Training',
    date: 'February 10, 2024',
    readingTime: '4 min read'
  },
  {
    id: 'news-17',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Clinical Studies',
    title: 'Multi-Center Study Validates Equipment Efficacy',
    date: 'February 8, 2024',
    readingTime: '7 min read'
  },
  {
    id: 'news-18',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Supply Chain',
    title: 'Sustainable Packaging Initiative Reduces Waste by 40%',
    date: 'February 5, 2024',
    readingTime: '3 min read'
  },
  {
    id: 'news-19',
    image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Customer Success',
    title: 'Hospital Network Reports 30% Efficiency Improvement',
    date: 'February 3, 2024',
    readingTime: '5 min read'
  },
  {
    id: 'news-20',
    image: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Regulatory Compliance',
    title: 'New FDA Guidelines Successfully Implemented',
    date: 'February 1, 2024',
    readingTime: '4 min read'
  },
  {
    id: 'news-21',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Innovation Lab',
    title: 'Prototype Testing Facility Opens to Partners',
    date: 'January 30, 2024',
    readingTime: '6 min read'
  },
  // Page 4
  {
    id: 'news-22',
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Market Expansion',
    title: 'Pediatric Equipment Line Launches Globally',
    date: 'January 28, 2024',
    readingTime: '4 min read'
  },
  {
    id: 'news-23',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Data Security',
    title: 'Enhanced Cybersecurity Measures Implemented',
    date: 'January 25, 2024',
    readingTime: '5 min read'
  },
  {
    id: 'news-24',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Maintenance Services',
    title: 'Predictive Maintenance Program Reduces Downtime',
    date: 'January 22, 2024',
    readingTime: '3 min read'
  },
  {
    id: 'news-25',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Conference & Events',
    title: 'Annual Healthcare Technology Summit Announced',
    date: 'January 20, 2024',
    readingTime: '4 min read'
  },
  {
    id: 'news-26',
    image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Financial Performance',
    title: 'Q4 Results Show Record Growth in All Segments',
    date: 'January 18, 2024',
    readingTime: '6 min read'
  },
  {
    id: 'news-27',
    image: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Leadership',
    title: 'New Chief Innovation Officer Joins Executive Team',
    date: 'January 15, 2024',
    readingTime: '3 min read'
  },
  {
    id: 'news-28',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Future Vision',
    title: '2024 Strategic Roadmap: Innovation and Growth',
    date: 'January 12, 2024',
    readingTime: '8 min read'
  }
];

// Articles data - 16 articles for 4 pages of 4 each
export const articlesData: Article[] = [
  // Page 1
  {
    id: 'article-1',
    image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Sustainability',
    title: 'Building a Greener Healthcare Future: Our Environmental Commitment',
    date: 'March 22, 2024',
    readingTime: '8 min read'
  },
  {
    id: 'article-2',
    image: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'CSR',
    title: 'Empowering Communities Through Healthcare Access Initiatives',
    date: 'March 19, 2024',
    readingTime: '10 min read'
  },
  {
    id: 'article-3',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Innovation',
    title: 'The Future of Medical Technology: Trends Shaping Healthcare',
    date: 'March 16, 2024',
    readingTime: '12 min read'
  },
  {
    id: 'article-4',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Best Practices',
    title: 'Optimizing Medical Equipment Lifecycle Management',
    date: 'March 13, 2024',
    readingTime: '9 min read'
  },
  // Page 2
  {
    id: 'article-5',
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Digital Health',
    title: 'Integrating AI and Machine Learning in Medical Diagnostics',
    date: 'March 10, 2024',
    readingTime: '11 min read'
  },
  {
    id: 'article-6',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Quality Assurance',
    title: 'Ensuring Patient Safety Through Rigorous Testing Standards',
    date: 'March 7, 2024',
    readingTime: '7 min read'
  },
  {
    id: 'article-7',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Training',
    title: 'Developing Healthcare Professionals for Tomorrow',
    date: 'March 4, 2024',
    readingTime: '6 min read'
  },
  {
    id: 'article-8',
    image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Global Health',
    title: 'Addressing Healthcare Disparities in Developing Nations',
    date: 'March 1, 2024',
    readingTime: '13 min read'
  },
  // Page 3
  {
    id: 'article-9',
    image: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Research',
    title: 'Clinical Evidence Supporting Advanced Medical Technologies',
    date: 'February 26, 2024',
    readingTime: '15 min read'
  },
  {
    id: 'article-10',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Sustainability',
    title: 'Circular Economy Principles in Medical Equipment Manufacturing',
    date: 'February 23, 2024',
    readingTime: '10 min read'
  },
  {
    id: 'article-11',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Leadership',
    title: 'Transformational Leadership in Healthcare Organizations',
    date: 'February 20, 2024',
    readingTime: '8 min read'
  },
  {
    id: 'article-12',
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Technology',
    title: 'Interoperability Challenges in Modern Healthcare Systems',
    date: 'February 17, 2024',
    readingTime: '9 min read'
  },
  // Page 4
  {
    id: 'article-13',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Patient Care',
    title: 'Enhancing Patient Experience Through Technology Innovation',
    date: 'February 14, 2024',
    readingTime: '7 min read'
  },
  {
    id: 'article-14',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Regulatory',
    title: 'Navigating Global Medical Device Regulations',
    date: 'February 11, 2024',
    readingTime: '11 min read'
  },
  {
    id: 'article-15',
    image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Innovation',
    title: 'Breakthrough Technologies Revolutionizing Surgery',
    date: 'February 8, 2024',
    readingTime: '12 min read'
  },
  {
    id: 'article-16',
    image: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Future Vision',
    title: 'Healthcare 2030: Preparing for the Next Decade',
    date: 'February 5, 2024',
    readingTime: '14 min read'
  }
];