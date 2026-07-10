export const siteConfig = {
  name: 'Wispers of Lake Katwe',
  shortName: 'Wispers',
  tagline: 'Explore Lake Katwe. Experience nature, culture and community.',
  description:
    'An independent tourism and hospitality company offering guided experiences, travel planning and accommodation around Lake Katwe, Uganda.',
  phone: '+256 700 000 000',
  whatsapp: '+256 700 000 000',
  email: 'info@wispersoflakekatwe.com',
  location: 'Lake Katwe Area, Kasese District, Uganda',
  hours: 'Daily, 8:00 AM - 6:00 PM',
  baseTitle: 'Wispers of Lake Katwe | Explore Lake Katwe',
}

export function getPageTitle(pageTitle) {
  return pageTitle
    ? `${pageTitle} | ${siteConfig.name}`
    : siteConfig.baseTitle
}
