import placeholder from '../assets/images/placeholders/lake-katwe-placeholder.png'
import saltMiningImage from '../assets/images/discover/lake-katwe-traditional-salt-mining.png'
import wildlifeBirdlifeImage from '../assets/images/discover/lake-katwe-wildlife-birdlife.png'

export const discoverHighlights = [
  {
    title: 'Lake Katwe',
    description:
      'A destination shaped by crater landscapes, open scenery and layered visitor interests.',
    path: '/discover/lake-katwe',
  },
  {
    title: 'Salt Heritage',
    description:
      'Learn about the area through respectful guided experiences focused on salt-mining heritage.',
    path: '/discover/salt-mining',
  },
  {
    title: 'Nature and Landscape',
    description:
      'Slow down with scenic walks, changing light and broad views across the area.',
    path: '/discover/nature',
  },
  {
    title: 'Community and Culture',
    description:
      'Plan guided, respectful visits that support meaningful engagement and visitor etiquette.',
    path: '/discover/community',
  },
  {
    title: 'Wildlife and Birdlife',
    description:
      'Explore general wildlife and birdwatching possibilities without overpromising specific sightings.',
    path: '/discover/wildlife',
  },
  {
    title: 'Nearby Attractions',
    description:
      'Use the Lake Katwe area as part of a wider travel plan that can include surrounding destinations.',
    path: '/discover/nearby-attractions',
  },
]

export const discoverPages = {
  'lake-katwe': {
    title: 'Discover Lake Katwe',
    eyebrow: 'Discover',
    description:
      'Get to know Lake Katwe through broad landscape context, visitor highlights and practical planning support.',
    image: placeholder,
    sections: [
      {
        heading: 'Destination introduction',
        body:
          'Lake Katwe invites visitors interested in scenery, guided interpretation and slower destination discovery. It works well for travellers building a wider Uganda itinerary around nature, learning and place-based experiences.',
      },
      {
        heading: 'Landscape overview',
        body:
          'The area offers open views, changing light and a strong sense of landscape. Visits can be timed for photography, relaxed walking or a general introduction to the surroundings.',
      },
      {
        heading: 'Visitor highlights',
        body:
          'Guests often combine guided orientation, heritage learning, photography and accommodation planning as part of one trip.',
      },
    ],
  },
  'salt-mining': {
    title: 'Salt-Mining Heritage',
    eyebrow: 'Discover',
    description:
      'Learn about salt-mining heritage with respectful guiding, practical context and considerate photography.',
    image: placeholder,
    sections: [
      {
        heading: 'Traditional Salt Mining',
        image: saltMiningImage,
        imageAlt: 'Miners harvesting salt from the traditional pans at Lake Katwe',
        body:
          'The salt works at Lake Katwe are one of Africa’s oldest continuously operating artisanal salt production sites. More than 10,000 individual salt pans line the shores. Mining peaks during the dry seasons, typically January to March and July to September, when intense sunlight drives rapid evaporation.',
      },
      {
        heading: 'The Process',
        list: [
          'Preparing and flooding shallow pans with lake water.',
          'Allowing the sun to evaporate the water, leaving salt crystals behind.',
          'Harvesting by hand: women often collect the surface crust (higher-grade edible salt), while men extract denser rock salt from the bottom, sometimes using wooden rafts or floating platforms.',
          'Drying, sorting and packaging the salt for sale.',
        ],
      },
      {
        heading: 'Types of Salt Produced',
        list: [
          'High-quality edible table salt (sodium chloride, Grade 1).',
          'Rock salt used as livestock salt licks.',
          'Darker, mineral-rich “black salt” valued by traditional healers.',
        ],
      },
      {
        heading: 'Production and Trade',
        body:
          'Annual production is estimated at around 15,000 tonnes of crystalline salt. Traders from Uganda and neighbouring countries purchase the product, supporting both local families and regional markets.',
      },
      {
        heading: 'Visiting the Salt Pans',
        body:
          'Visitors can join guided community tours to walk among the pans, observe the process up close, and learn directly from the miners about their techniques, challenges and heritage.',
      },
    ],
  },
  nature: {
    title: 'Nature and Landscape',
    eyebrow: 'Discover',
    description:
      'Take in the crater setting, open scenery and slower paced nature experiences around the area.',
    image: placeholder,
    sections: [
      {
        heading: 'Crater landscape',
        body:
          'The landscape gives the area much of its character, creating strong visual contrast and broad views that suit unhurried exploration.',
      },
      {
        heading: 'Sunrise, sunset and walking routes',
        body:
          'Visits can be planned around light, weather and walking comfort, especially for guests interested in scenery and photography.',
      },
      {
        heading: 'Environmental respect',
        body:
          'Visitors are encouraged to keep to guided routes, carry out waste and approach the environment with care.',
      },
    ],
  },
  community: {
    title: 'Community and Culture',
    eyebrow: 'Discover',
    description:
      'Plan thoughtful community-oriented visits with guidance on etiquette, timing and respectful engagement.',
    image: placeholder,
    sections: [
      {
        heading: 'Respectful cultural engagement',
        body:
          'Community visits are best approached with listening, flexibility and guidance rather than assumptions about access or activity.',
      },
      {
        heading: 'Local stories and visitor etiquette',
        body:
          'A guide can support introductions, conversation pacing and practical etiquette such as asking before photographing or entering spaces.',
      },
      {
        heading: 'Optional crafts and local products',
        body:
          'Where appropriate, visitors may explore crafts or locally made items, with details confirmed closer to travel dates.',
      },
    ],
  },
  wildlife: {
    title: 'Wildlife and Birdlife',
    eyebrow: 'Discover',
    description:
      'Explore general wildlife and birdwatching opportunities without promising exact sightings or fixed outcomes.',
    image: placeholder,
    sections: [
      {
        heading: 'Wildlife and Birdlife',
        image: wildlifeBirdlifeImage,
        imageAlt: 'Flamingos and small wading birds feeding along the Lake Katwe shoreline',
        body:
          'The extreme salinity of Lake Katwe itself supports only specialised microorganisms and algae — no fish live in its waters. However, the surrounding landscape is rich in life.',
      },
      {
        heading: 'Birdwatching at Lake Munyanyange',
        body:
          'Nearby Lake Munyanyange, a seasonal alkaline wetland, attracts migratory birds, including flocks of lesser flamingos and African spoonbills, especially at certain times of year. The broader crater landscape and proximity to Queen Elizabeth National Park mean visitors may also encounter other bird species and, in the wider area, mammals such as elephants, buffalo, warthogs and various antelope.',
      },
      {
        heading: 'The Crater Drive',
        body:
          'The famous Crater Drive, approximately 27 km, through Queen Elizabeth National Park offers scenic viewpoints over multiple explosion craters, making Lake Katwe an excellent stop on a full-day exploration of the park’s volcanic features.',
      },
      {
        heading: 'A flexible outdoor experience',
        body:
          'Conditions, timing and season all shape what visitors may encounter, so planning remains flexible and realistic.',
      },
    ],
  },
  'nearby-attractions': {
    title: 'Nearby Attractions',
    eyebrow: 'Discover',
    description:
      'Use mock attraction data now and verify all travel details before public launch.',
    image: placeholder,
    sections: [
      {
        heading: 'Wider itinerary planning',
        body:
          'The Lake Katwe area can be part of a broader travel route that includes nearby scenic and visitor destinations.',
      },
      {
        heading: 'Verification note',
        body:
          'Distances, opening details, access requirements and fees should all be checked before final publication.',
      },
    ],
  },
}
