// Event detail data configuration
export interface EventContent {
  type: 'heading' | 'subheading' | 'paragraph';
  text: string;
}

export interface GalleryImage {
  url: string;
  caption: string;
}

export interface EventDetailData {
  id: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  image: string;
  content: EventContent[];
  gallery: GalleryImage[];
}

export const eventDetailData: Record<string, EventDetailData> = {
  'event-1': {
    id: 'event-1',
    title: 'Medical Equipment Donation Drive Reaches 50 Rural Clinics',
    category: 'Community Outreach',
    date: 'March 15, 2024',
    readingTime: '5 min read',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    content: [
      {
        type: 'paragraph',
        text: 'ProCare Group is proud to announce the successful completion of our largest medical equipment donation drive to date, reaching 50 rural clinics across underserved communities. This milestone represents our unwavering commitment to improving healthcare access and outcomes in areas where medical resources are most needed.'
      },
      {
        type: 'heading',
        text: 'Transforming Healthcare Access in Rural Communities'
      },
      {
        type: 'paragraph',
        text: 'Over the past six months, our dedicated team has worked tirelessly to identify rural healthcare facilities in need of essential medical equipment. Through partnerships with local healthcare organizations and community leaders, we have been able to deliver life-saving equipment including diagnostic tools, patient monitoring systems, and emergency care devices to clinics serving over 100,000 patients annually.'
      },
      {
        type: 'subheading',
        text: 'Equipment Donated and Impact Achieved'
      },
      {
        type: 'paragraph',
        text: 'The donation drive included a comprehensive range of medical equipment valued at over $2.5 million. Each clinic received customized equipment packages based on their specific needs and patient demographics. The donated equipment includes digital X-ray machines, ultrasound systems, patient monitors, defibrillators, and essential diagnostic tools that were previously unavailable in these remote locations.'
      },
      {
        type: 'paragraph',
        text: 'The impact has been immediate and profound. Healthcare providers in these rural clinics report a 40% improvement in diagnostic capabilities and a 60% reduction in patient referrals to distant urban hospitals. This means patients can now receive quality care closer to home, reducing travel costs and improving health outcomes for entire communities.'
      },
      {
        type: 'subheading',
        text: 'Training and Ongoing Support'
      },
      {
        type: 'paragraph',
        text: 'Beyond equipment donation, ProCare Group has committed to providing comprehensive training and ongoing technical support to ensure the donated equipment is used effectively and maintained properly. Our team of certified technicians has conducted on-site training sessions for over 200 healthcare professionals, covering equipment operation, maintenance protocols, and troubleshooting procedures.'
      },
      {
        type: 'paragraph',
        text: 'We have also established a remote support system that allows clinic staff to access technical assistance and guidance whenever needed. This holistic approach ensures that our donation creates lasting impact and sustainable improvements in healthcare delivery.'
      },
      {
        type: 'heading',
        text: 'Looking Forward: Expanding Our Reach'
      },
      {
        type: 'paragraph',
        text: 'Building on the success of this initiative, ProCare Group is planning to expand the program to reach an additional 75 rural clinics over the next 18 months. We are also exploring partnerships with international healthcare organizations to extend our impact to underserved communities in developing countries.'
      },
      {
        type: 'paragraph',
        text: 'This donation drive exemplifies our core belief that access to quality healthcare should not be determined by geographic location or economic circumstances. Through continued investment in community health initiatives, we remain committed to creating a world where every patient has access to the medical care they need and deserve.'
      }
    ],
    gallery: [
      {
        url: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        caption: 'Medical equipment being delivered to rural clinic'
      },
      {
        url: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        caption: 'Healthcare professionals receiving equipment training'
      },
      {
        url: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        caption: 'Community members celebrating new healthcare capabilities'
      },
      {
        url: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        caption: 'Medical staff using donated diagnostic equipment'
      }
    ]
  },
  'event-2': {
    id: 'event-2',
    title: 'Achieving Carbon Neutral Operations: Our Sustainability Milestone',
    category: 'Environmental Impact',
    date: 'February 28, 2024',
    readingTime: '7 min read',
    image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    content: [
      {
        type: 'paragraph',
        text: 'ProCare Group has achieved a significant environmental milestone by becoming carbon neutral across all our operations. This achievement represents years of dedicated effort to reduce our environmental footprint while maintaining our commitment to delivering exceptional healthcare solutions.'
      },
      {
        type: 'heading',
        text: 'Our Journey to Carbon Neutrality'
      },
      {
        type: 'paragraph',
        text: 'The path to carbon neutrality began three years ago with a comprehensive assessment of our environmental impact across all business operations. We identified key areas for improvement including energy consumption, transportation, manufacturing processes, and supply chain management.'
      },
      {
        type: 'subheading',
        text: 'Renewable Energy Transition'
      },
      {
        type: 'paragraph',
        text: 'One of our most significant achievements has been the complete transition to renewable energy sources across all our facilities. We have installed solar panels on all manufacturing and office buildings, generating 100% of our electricity needs from clean, renewable sources. This transition alone has reduced our carbon emissions by 65%.'
      },
      {
        type: 'paragraph',
        text: 'Additionally, we have implemented advanced energy management systems that optimize energy consumption throughout our operations, resulting in a 30% reduction in overall energy usage compared to previous years.'
      }
    ],
    gallery: [
      {
        url: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        caption: 'Solar panels installed on ProCare Group facilities'
      },
      {
        url: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        caption: 'Energy-efficient manufacturing processes'
      },
      {
        url: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        caption: 'Team celebrating carbon neutral achievement'
      }
    ]
  },
  'event-3': {
    id: 'event-3',
    title: 'Healthcare Training Program Graduates 200 Medical Professionals',
    category: 'Education Initiative',
    date: 'January 20, 2024',
    readingTime: '4 min read',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    content: [
      {
        type: 'paragraph',
        text: 'ProCare Group\'s comprehensive healthcare training program has successfully graduated its 200th medical professional, marking a significant milestone in our commitment to advancing healthcare education and professional development worldwide.'
      },
      {
        type: 'heading',
        text: 'Empowering Healthcare Professionals'
      },
      {
        type: 'paragraph',
        text: 'Our training program was designed to address the growing need for skilled healthcare professionals who are proficient in using modern medical equipment and implementing best practices in patient care. The program combines theoretical knowledge with hands-on practical experience using state-of-the-art medical equipment.'
      },
      {
        type: 'subheading',
        text: 'Comprehensive Curriculum'
      },
      {
        type: 'paragraph',
        text: 'The program covers a wide range of topics including medical equipment operation, patient safety protocols, diagnostic procedures, and healthcare technology integration. Participants receive certification in multiple areas of medical equipment usage and patient care management.'
      }
    ],
    gallery: [
      {
        url: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        caption: 'Medical professionals during training session'
      },
      {
        url: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        caption: 'Graduation ceremony for healthcare professionals'
      },
      {
        url: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        caption: 'Hands-on equipment training in progress'
      }
    ]
  }
};