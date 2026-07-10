import placeholder from '../assets/images/placeholders/lake-katwe-placeholder.png'

export const packages = [
  {
    id: 1,
    slug: 'half-day-lake-katwe-discovery',
    name: 'Half-Day Lake Katwe Discovery',
    duration: 'Half day',
    summary:
      'A flexible introductory outing that combines destination orientation and a guided experience.',
    activities: ['Guided discovery', 'Landscape viewing', 'Visitor planning support'],
    accommodationIncluded: false,
    mealsIncluded: false,
    transportIncluded: false,
    price: null,
    priceLabel: 'Request quotation',
    featured: true,
    image: placeholder,
  },
  {
    id: 2,
    slug: 'heritage-and-stay-escape',
    name: 'Heritage and Stay Escape',
    duration: '1 night / 2 days',
    summary:
      'A short itinerary pairing accommodation with guided destination and heritage experiences.',
    activities: ['Accommodation', 'Guided tour', 'Flexible planning'],
    accommodationIncluded: true,
    mealsIncluded: false,
    transportIncluded: false,
    price: null,
    priceLabel: 'Request quotation',
    featured: true,
    image: placeholder,
  },
  {
    id: 3,
    slug: 'group-study-visit',
    name: 'Group Study Visit',
    duration: 'Custom',
    summary:
      'A planning-friendly package for school groups, research teams or organised educational travel.',
    activities: ['Group support', 'Guided visit', 'Accommodation planning'],
    accommodationIncluded: true,
    mealsIncluded: false,
    transportIncluded: true,
    price: null,
    priceLabel: 'Request quotation',
    featured: false,
    image: placeholder,
  },
]
