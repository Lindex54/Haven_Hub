export const siteConfig = {
  name: 'Wispers of Lake Katwe',
  shortName: 'Wispers',
  tagline: 'Explore Lake Katwe. Experience nature, culture and community.',
  description:
    'An independent tourism and hospitality company offering guided experiences, travel planning and accommodation around Lake Katwe, Uganda.',
  phone: '+256788723253',
  whatsapp: '+256788723253',
  emails: ['amanfamao@gmail.com', 'akramamana655@gmail.com'],
  location: 'Lake Katwe Area, Kasese District, Uganda',
  hours: 'Daily, 8:00 AM - 6:00 PM',
  baseTitle: 'Wispers of Lake Katwe | Explore Lake Katwe',
}

export function getPageTitle(pageTitle) {
  return pageTitle
    ? `${pageTitle} | ${siteConfig.name}`
    : siteConfig.baseTitle
}
