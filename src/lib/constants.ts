export const SITE_CONFIG = {
  name: 'Humanity CSS',
  tagline: 'Specialist Domiciliary Care',
  phone: '07877 200 381',
  email: 'info@hcssconnect.co.uk',
  address: 'London, United Kingdom',
  cqcRating: 'GOOD',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Our Services',
    href: '/services',
    children: [
      { label: 'All Services', href: '/services' },
      { label: 'Complex Care', href: '/services/complex-care' },
      { label: 'Addiction & Recovery', href: '/services/addiction-recovery' },
    ],
  },
  { label: 'Referrals', href: '/referrals' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES = [
  {
    title: 'Personal Care',
    description: 'Dignified support with daily living activities including bathing, dressing, and personal hygiene.',
    icon: 'Heart',
    href: '/services',
  },
  {
    title: 'Medication Support',
    description: 'Safe and reliable medication administration and management by trained care professionals.',
    icon: 'Pill',
    href: '/services',
  },
  {
    title: 'Companionship',
    description: 'Meaningful social engagement and emotional support to combat loneliness and isolation.',
    icon: 'Users',
    href: '/services',
  },
  {
    title: 'Complex Care',
    description: 'Specialist care for individuals with complex medical needs, including PEG feeding and tracheostomy care.',
    icon: 'Activity',
    href: '/services/complex-care',
  },
  {
    title: 'Mental Health Support',
    description: 'Compassionate support for individuals living with mental health conditions in their own homes.',
    icon: 'Brain',
    href: '/services',
  },
  {
    title: 'Substance Misuse Support',
    description: 'Non-judgmental, person-centred support for individuals recovering from addiction.',
    icon: 'Shield',
    href: '/services/addiction-recovery',
  },
];

export const AREAS = [
  { name: 'Southwark', description: 'SE1, SE5, SE15, SE16, SE17, SE22' },
  { name: 'Harrow', description: 'HA1, HA2, HA3, HA5, HA7' },
  { name: 'Ealing', description: 'W5, W7, W13, UB1, UB2, UB6' },
  { name: 'Greater London', description: 'Expanding across all London boroughs' },
];

export const RAPID_RESPONSE = [
  {
    title: 'Welfare Checks',
    description: 'Urgent visits to assess client safety and wellbeing at short notice.',
  },
  {
    title: 'Crisis Response',
    description: '24/7 rapid deployment of experienced care staff during emergencies.',
  },
  {
    title: 'Out-of-Hours Support',
    description: 'Continuous care coverage including evenings, weekends, and bank holidays.',
  },
];

export const DIFFERENTIATORS = [
  'Specialist in high-risk and high-acuity domiciliary care',
  'Supporting difficult-to-engage and hard-to-reach clients',
  'CQC Rated GOOD with consistent compliance record',
  'Leadership team with over 40 years combined care experience',
  'Culturally sensitive care reflecting London\'s diverse communities',
  'Person-centred approach respecting individual dignity and choice',
  'Robust safeguarding protocols and DBS-checked staff',
  'Flexible care packages tailored to evolving needs',
];
