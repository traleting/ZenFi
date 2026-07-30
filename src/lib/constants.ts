export const COMPANY = {
  name: 'ZENFI CONNECT (PTY) LTD',
  shortName: 'ZenFi Connect',
  regNumber: '2026/381899/07',
  founded: 'May 2026',
  slogan: 'Fast, Unlimited LTE WiFi You Can Trust',
  phone: '071 198 7683',
  phoneRaw: '0711987683',
  email: 'zenficonnect96@gmail.com',
  location: 'Kwamhlanga, Mpumalanga, South Africa',
  directors: ['G.T Thombeni', 'J.P Nxalati'],
  whatsappLink: 'https://wa.me/27711987683',
  whatsappDisplay: '071 198 7683',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Packages', href: '#packages' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const HOME_PACKAGES = [
  { speed: '20 Mbps', price: 'R499', period: '/month', speedValue: 20, priceValue: 499 },
  { speed: '50 Mbps', price: 'R599', period: '/month', speedValue: 50, priceValue: 599 },
  { speed: '100 Mbps', price: 'R799', period: '/month', speedValue: 100, priceValue: 799, popular: true },
];

export const BUSINESS_PACKAGES = [
  { speed: '20 Mbps', price: 'R899', period: '/month', speedValue: 20, priceValue: 899 },
  { speed: '50 Mbps', price: 'R1099', period: '/month', speedValue: 50, priceValue: 1099 },
  { speed: '100 Mbps', price: 'R1299', period: '/month', speedValue: 100, priceValue: 1299, popular: true },
];

export const FEATURES = [
  {
    icon: 'Zap',
    title: 'Fast LTE Speeds',
    desc: 'Reliable LTE connectivity designed for streaming, remote work, gaming and everyday browsing.',
  },
  {
    icon: 'Infinity',
    title: 'Unlimited & Uncapped',
    desc: 'No data limits, no throttling, no surprise charges.',
  },
  {
    icon: 'Headphones',
    title: 'Local Support',
    desc: 'Friendly local support based in Kwamhlanga, Mpumalanga.',
  },
  {
    icon: 'Wallet',
    title: 'Affordable Packages',
    desc: 'Competitive pricing for homes and businesses.',
  },
];

export const STEPS = [
  { num: '01', icon: 'PackageOpen', title: 'Choose your package', desc: 'Pick the plan that fits your home or business needs.' },
  { num: '02', icon: 'MapPin', title: 'Check coverage', desc: 'Confirm your area is covered by our LTE network.' },
  { num: '03', icon: 'Wrench', title: 'Professional installation', desc: 'Our team installs your equipment quickly and neatly.' },
  { num: '04', icon: 'Wifi', title: 'Enjoy unlimited LTE', desc: 'Start browsing, streaming and working with no limits.' },
];

export const TESTIMONIALS = [
  { name: 'Thabo M.', role: 'Home user, Kwamhlanga', text: 'Excellent service and very fast installation.', rating: 5 },
  { name: 'Lerato N.', role: 'Small business owner', text: 'Affordable internet with friendly support.', rating: 5 },
  { name: 'Sipho K.', role: 'Business client', text: 'Reliable connection for my business.', rating: 5 },
];

export const FAQS = [
  { q: 'Is the internet unlimited?', a: 'Yes, all packages are unlimited and uncapped.' },
  { q: 'How long does installation take?', a: 'Installation is scheduled after coverage confirmation.' },
  { q: 'Do you have contracts?', a: 'Contact us for package and agreement details.' },
  { q: 'What areas do you cover?', a: 'Kwamhlanga and surrounding areas in Mpumalanga.' },
];
