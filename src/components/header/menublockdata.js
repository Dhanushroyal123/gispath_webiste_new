import staffingpic from './assets/staffing.jpg'
import aboutus from './assets/aboutus.jpg'

const data = [
  {
    id: 2,
    b1: {
      name: 'Services',
      content:
        'Optimize the existing. Conceptualize the new. Reveal the unknown.',
      name_exp: 'View all services',
    },
    b2: [
      'Staffing',
      'Immigrations',
      'IT Recuritment',
      'Customer Experience & Design',
      'Digital Products Engineering',
    ],
    b3: {
      first_service: 'Staffing',
      image: aboutus,
      content:
        'We focus on Reliable Employees, Quality Relationships, Strategic Partnerships',
      status: true,
    },
    blockheight: 470,
  },

  {
    id: 3,
    b1: {
      name: 'AboutuS',
      content: 'Fearless ideas meet exceptional results',
      name_exp: 'View all About Us',
    },
    b2: ['Overview', 'Leadership', 'News Room'],
    b3: {
      first_service: 'Overview',
      image: staffingpic,
      content:
        'Global Enterprises to be Future-Ready with a Generative AI Centre of Excellence',
      status: true,
    },
    blockheight: 440,
  },
  {
    id: 4,
    b1: {
      name: 'Careers',
      content: 'Unlimited opportunity for growth and reinvention',
      name_exp: 'View all careers',
    },
    b2: ['Overview', 'Open Positions'],
    b3: {
      first_service: 'Staffing',
      image: '',
      content: '',
      status: false,
    },
    blockheight: 400,
  },
  {
    id: 5,
    b1: {
      name: 'Blog',
      content:
        'Optimize the existing. Conceptualize the new. Reveal the unknown.',
      name_exp: 'view all services',
    },
    b2: ['Staffing', 'Immigrations', 'IT Recuritment'],
    b3: {
      first_service: 'Staffing',
      image: '',
      content: '',
    },
  },
  {
    id: 6,
    b1: {
      name: 'contact',
      content:
        'Optimize the existing. Conceptualize the new. Reveal the unknown.',
      name_exp: 'view all services',
    },
    b2: ['Staffing', 'Immigrations', 'IT Recuritment'],
    b3: {
      first_service: 'Staffing',
      image: '',
      content: '',
    },
  },
]

export default data
