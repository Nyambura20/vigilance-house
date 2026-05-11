/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const HOUSEHELP_PROFILES = [
  {
    id: '1',
    name: 'Sarah Kimani',
    role: 'Nannies',
    rating: 4.8,
    reviews: 124,
    skills: ['Childcare', 'First Aid', 'Cooking'],
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop',
    location: 'Nairobi',
    price: { daily: '$15', weekly: '$90', monthly: '$250' },
    bio: 'Professional nanny with 8 years experience in early childhood development. I love children and prioritize their safety and education.',
    availability: 'Immediate',
    experience: '8+ Years',
    education: 'Diploma in Childcare',
    contact: '0712345678'
  },
  {
    id: '2',
    name: 'John Mwangi',
    role: 'Gardeners',
    rating: 4.9,
    reviews: 89,
    skills: ['Landscaping', 'Security', 'Farming'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    location: 'Mombasa',
    price: { daily: '$12', weekly: '$70', monthly: '$200' },
    bio: 'Expert in tropical landscaping and organic farming. Transform your backyard into a paradise.',
    availability: 'In 2 weeks',
    experience: '10+ Years',
    education: 'NITA Certified Gardener',
    contact: '0723456789'
  },
  {
    id: '3',
    name: 'Grace Atieno',
    role: 'House Keepers',
    rating: 4.7,
    reviews: 56,
    skills: ['Organization', 'Deep Cleaning'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
    location: 'Kisumu',
    price: { daily: '$18', weekly: '$100', monthly: '$300' },
    bio: 'Detail-oriented house keeper with hospitality background. Pristine results guaranteed.',
    availability: 'Immediate',
    experience: '6 Years',
    education: 'Hospitality Management Cert',
    contact: '0734567890'
  },
  {
    id: '4',
    name: 'Mary Wambui',
    role: 'Caregivers',
    rating: 5.0,
    reviews: 42,
    skills: ['Nursing', 'Medication Mgmt'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop',
    location: 'Nakuru',
    price: { daily: '$25', weekly: '$150', monthly: '$450' },
    bio: 'Registered nurse specializing in geriatric care. Compassionate and skilled professional.',
    availability: 'Flexible',
    experience: '12 Years',
    education: 'Degree in Nursing',
    contact: '0745678901'
  },
  {
    id: '5',
    name: 'Peter Kamau',
    role: 'Plumbers',
    rating: 4.6,
    reviews: 31,
    skills: ['Pipe Fitting', 'Leak Repair', 'Installation'],
    image: 'https://images.unsplash.com/photo-1540560056066-64c1aec8a65e?q=80&w=600&auto=format&fit=crop',
    location: 'Nairobi',
    price: { daily: '$30', weekly: '$180', monthly: '$600' },
    bio: 'Certified technical maintainer with focus on plumbing systems. 24/7 emergency support.',
    availability: 'Immediate',
    experience: '5 Years',
    education: 'Technical College Diploma',
    contact: '0756789012'
  },
  {
    id: '6',
    name: 'David Omondi',
    role: 'Electrician',
    rating: 4.9,
    reviews: 74,
    skills: ['Wiring', 'Fault Finding', 'Appliances'],
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=600&auto=format&fit=crop',
    location: 'Eldoret',
    price: { daily: '$35', weekly: '$210', monthly: '$700' },
    bio: 'Licensed electrician for domestic and commercial wiring. Safety first approach.',
    availability: 'Flexible',
    experience: '9 Years',
    education: 'ERC Licensed Electrician',
    contact: '0767890123'
  },
  {
    id: '7',
    name: 'Alice Muthoni',
    role: 'Laundry Workers',
    rating: 4.5,
    reviews: 28,
    skills: ['Ironing', 'Stain Removal', 'Steam Cleaning'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
    location: 'Thika',
    price: { daily: '$10', weekly: '$60', monthly: '$180' },
    bio: 'Dedicated laundry specialist with eye for delicate fabrics.',
    availability: 'Immediate',
    experience: '4 Years',
    education: 'Domestic Skills Cert',
    contact: '0778901234'
  },
  {
    id: '8',
    name: 'Joseph Kariuki',
    role: 'Cook',
    rating: 4.8,
    reviews: 65,
    skills: ['Local Cuisines', 'Baking', 'Meal Planning'],
    image: 'https://images.unsplash.com/photo-1583394828561-90504dcaad4b?q=80&w=600&auto=format&fit=crop',
    location: 'Nairobi',
    price: { daily: '$20', weekly: '$120', monthly: '$400' },
    bio: 'Professional cook specialized in healthy African and continental dishes.',
    availability: 'Immediate',
    experience: '7 Years',
    education: 'Culinary Arts Cert',
    contact: '0709876543'
  }
];

export const TRAINING_COURSES = [
  {
    id: 'c1',
    title: 'NITA Certification: Housekeeping',
    duration: '4 Weeks',
    level: 'Professional',
    instructor: 'Regina W.',
    thumbnail: 'https://images.unsplash.com/photo-1581578731522-7b7547964301?q=80&w=400&auto=format&fit=crop',
    note: 'NITA training is mandatory for all unskilled applicants. Company covers costs for a 5-year commitment.'
  },
  {
    id: 'c2',
    title: 'Advanced Culinary Arts',
    duration: '6 Weeks',
    level: 'Intermediate',
    instructor: 'Chef Mike',
    thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'c3',
    title: 'Child Safety & Emergency Care',
    duration: '2 Weeks',
    level: 'Advanced',
    instructor: 'Nurse Sarah',
    thumbnail: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop'
  }
];
