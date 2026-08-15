import fisherManImage from '../assets/images/wispers/fisher-man-image.png'
import natureAnimals from '../assets/images/wispers/nature-animals.png'
import wisperImage from '../assets/images/wispers/wisper-image.png'
import wisperImage10 from '../assets/images/wispers/wisper-image10.png'
import wisperNature from '../assets/images/wispers/wisper-nature.png'
import wispersImage1 from '../assets/images/wispers/wispers-image1.png'
import wispersImage3 from '../assets/images/wispers/wispers-image3.png'
import wispersImage5 from '../assets/images/wispers/wispers-image5.png'
import wispersImage6 from '../assets/images/wispers/wispers-image6.png'
import wispersImage7 from '../assets/images/wispers/wispers-image7.png'
import wispersImage8 from '../assets/images/wispers/wispers-image8.png'
import wispersImage9 from '../assets/images/wispers/wispers-image9.png'
import wispersImage10 from '../assets/images/wispers/wispers-image10.png'

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
      src: wisperNature,
      alt: 'Entrance sign and natural setting for Whispers of Lake Katwe.',
      title: 'Whispers of Lake Katwe',
      description:
        'A welcoming Lake Katwe setting for visitors starting their destination experience.',
    },
    {
      src: wisperImage,
      alt: 'Cattle grazing in the green landscape near Lake Katwe.',
      title: 'Lake Katwe landscape',
      description:
        'Open scenery around Lake Katwe, suited to relaxed viewing and wider destination context.',
    },
  ],
  'salt-mining': [
    {
      src: fisherManImage,
      alt: 'A local man standing on a small boat on the water near Lake Katwe.',
      title: 'Lake activity',
      description:
        'A local water scene that helps visitors connect Lake Katwe experiences with everyday activity.',
    },
    {
      src: wispersImage3,
      alt: 'Local women standing with salt crystals during a Lake Katwe visit.',
      title: 'Salt heritage moment',
      description:
        'A guide-friendly salt heritage image connected to local people and visitor learning.',
    },
  ],
  nature: [
    {
      src: wisperImage10,
      alt: 'A visitor standing beside the water with Lake Katwe scenery behind.',
      title: 'Lake edge views',
      description:
        'A scenic lake-edge stop for relaxed viewing, photos and orientation around the area.',
    },
    {
      src: wispersImage5,
      alt: 'Visitors standing by palms and water near Lake Katwe.',
      title: 'Scenic visitor stop',
      description:
        'A calm outdoor setting for nature walks, guest photos and slower-paced exploration.',
    },
  ],
  wildlife: [
    {
      src: natureAnimals,
      alt: 'Wildlife gathered near water in the wider Lake Katwe area.',
      title: 'Wildlife near water',
      description:
        'Wildlife imagery for visitors interested in quiet observation and flexible outdoor outings.',
    },
    {
      src: wispersImage10,
      alt: 'An elephant walking near water in the wider Lake Katwe and Queen Elizabeth area.',
      title: 'Nearby wildlife',
      description:
        'A nearby wildlife scene that fits wider Queen Elizabeth and Lake Katwe itinerary planning.',
    },
  ],
  community: [
    {
      src: wispersImage1,
      alt: 'Visitors and hosts gathered indoors during a community visit.',
      title: 'Community gathering',
      description:
        'A community-oriented moment showing group connection, hosting and visitor engagement.',
    },
    {
      src: wispersImage8,
      alt: 'Guests seated together during a group travel experience.',
      title: 'Group travel moment',
      description:
        'A shared visitor experience that supports group travel, school visits and guided planning.',
    },
  ],
  tours: [
    {
      src: fisherManImage,
      alt: 'A local guide on the water near Lake Katwe.',
      title: 'Guided lake tour',
      description:
        'A guide-supported lake experience for visitors learning about place, landscape and daily activity.',
    },
    {
      src: wispersImage7,
      alt: 'Tour guests wearing life jackets during a water-based outing.',
      title: 'Guest boat outing',
      description:
        'A group tour moment showing visitor support, safety equipment and shared travel experiences.',
    },
  ],
  accommodation: [
    {
      src: wispersImage6,
      alt: 'Guests gathered around a dining table at local accommodation.',
      title: 'Guest house dining',
      description:
        'Accommodation support for visitors who want meals, rest and planning help during their stay.',
    },
    {
      src: wispersImage9,
      alt: 'A visitor looking out from a poolside accommodation area toward Lake Katwe.',
      title: 'Poolside lake view',
      description:
        'A relaxed stay setting with views across the Lake Katwe area and space to unwind between activities.',
    },
  ],
}

export const gallery = galleryCategories.flatMap((category, index) => [
  {
    id: index * 2 + 1,
    ...galleryImages[category.value][0],
    category: category.value,
  },
  {
    id: index * 2 + 2,
    ...galleryImages[category.value][1],
    category: category.value,
  },
])
