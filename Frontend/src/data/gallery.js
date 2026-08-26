import accommodationPoolView from '../assets/images/gallery/accommodation-pool-view.png'
import boatTourGuests from '../assets/images/gallery/boat-tour-guests.png'
import colorfulSaltPans from '../assets/images/gallery/colorful-salt-pans.png'
import communityGuidedVisit from '../assets/images/gallery/community-guided-visit.png'
import communitySaltWork from '../assets/images/gallery/community-salt-work.png'
import craterAerialView from '../assets/images/gallery/crater-aerial-view.png'
import flamingosOnLakeKatwe from '../assets/images/gallery/flamingos-on-lake-katwe.png'
import guestHouseDining from '../assets/images/gallery/guest-house-dining.png'
import guidedLakeTour from '../assets/images/gallery/guided-lake-tour.png'
import lakeKatwePanorama from '../assets/images/gallery/lake-katwe-panorama.png'
import lakeKatweSunset from '../assets/images/gallery/lake-katwe-sunset.png'
import queenElizabethBirdlife from '../assets/images/gallery/queen-elizabeth-birdlife.png'
import saltFlatsView from '../assets/images/gallery/salt-flats-view.png'
import saltWorkers from '../assets/images/gallery/salt-workers.png'

export const galleryCategories = [
  { label: 'Lake Katwe', value: 'lake-katwe' },
  { label: 'Salt Mining', value: 'salt-mining' },
  { label: 'Nature', value: 'nature' },
  { label: 'Wildlife', value: 'wildlife' },
  { label: 'Community', value: 'community' },
  { label: 'Tours', value: 'tours' },
  { label: 'Accommodation', value: 'accommodation' },
]

const galleryImages = {
  'lake-katwe': [
    {
      src: lakeKatwePanorama,
      alt: 'Panoramic view across Lake Katwe and its surrounding landscape.',
      title: 'Lake Katwe panorama',
      description: 'A wide view of Lake Katwe and the distinctive landscape surrounding the water.',
    },
    {
      src: craterAerialView,
      alt: 'Aerial view of the Lake Katwe crater landscape.',
      title: 'Crater landscape',
      description: 'An elevated perspective showing the shape and scale of the Lake Katwe crater area.',
    },
  ],
  'salt-mining': [
    {
      src: colorfulSaltPans,
      alt: 'Colorful salt pans arranged along the shore of Lake Katwe.',
      title: 'Colorful salt pans',
      description: 'The varied colors and patterns of the traditional salt pans beside Lake Katwe.',
    },
    {
      src: saltWorkers,
      alt: 'Local salt workers at Lake Katwe.',
      title: 'Salt workers',
      description: 'Local knowledge and daily work at the heart of Lake Katwe’s salt-mining heritage.',
    },
  ],
  nature: [
    {
      src: lakeKatweSunset,
      alt: 'Sunset casting warm light across Lake Katwe.',
      title: 'Lake Katwe sunset',
      description: 'Evening light creates a calm and colorful view across Lake Katwe.',
    },
    {
      src: saltFlatsView,
      alt: 'Natural textures and open views across the Lake Katwe salt flats.',
      title: 'Salt flats landscape',
      description: 'The natural textures, colors and open scenery of the Lake Katwe salt flats.',
    },
  ],
  wildlife: [
    {
      src: flamingosOnLakeKatwe,
      alt: 'Flamingos gathered on the water at Lake Katwe.',
      title: 'Flamingos on the lake',
      description: 'Flamingos add movement and color to the wider Lake Katwe ecosystem.',
    },
    {
      src: queenElizabethBirdlife,
      alt: 'Birdlife in the Queen Elizabeth National Park area near Lake Katwe.',
      title: 'Nearby birdlife',
      description: 'Birdwatching opportunities extend into the surrounding Queen Elizabeth landscape.',
    },
  ],
  community: [
    {
      src: communityGuidedVisit,
      alt: 'Visitors taking part in a guided community experience near Lake Katwe.',
      title: 'Community-guided visit',
      description: 'A locally guided visit connecting guests with people, place and everyday life.',
    },
    {
      src: communitySaltWork,
      alt: 'Community members sharing Lake Katwe salt-working traditions with visitors.',
      title: 'Community salt heritage',
      description: 'Community members share the skills and stories behind Lake Katwe’s salt heritage.',
    },
  ],
  tours: [
    {
      src: guidedLakeTour,
      alt: 'A local guide leading an experience on the water near Lake Katwe.',
      title: 'Guided lake tour',
      description: 'A guide-supported lake experience focused on local knowledge and the landscape.',
    },
    {
      src: boatTourGuests,
      alt: 'Guests wearing life jackets during a guided boat outing.',
      title: 'Guest boat outing',
      description: 'Visitors enjoy a supported water-based outing with appropriate safety equipment.',
    },
  ],
  accommodation: [
    {
      src: guestHouseDining,
      alt: 'Guests gathered around a dining table at local accommodation.',
      title: 'Guest house dining',
      description: 'A welcoming shared dining space for visitors staying near Lake Katwe.',
    },
    {
      src: accommodationPoolView,
      alt: 'A guest enjoying the poolside view at accommodation near Lake Katwe.',
      title: 'Poolside lake view',
      description: 'A relaxed place to unwind and enjoy views across the Lake Katwe area.',
    },
  ],
}

export const gallery = galleryCategories.flatMap((category, categoryIndex) =>
  galleryImages[category.value].map((item, itemIndex) => ({
    id: categoryIndex * 100 + itemIndex + 1,
    ...item,
    category: category.value,
  })),
)
