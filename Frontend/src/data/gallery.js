import { mediaAssets } from '../config/mediaAssets'

export const galleryCategories = [
  { label: 'Lake Katwe', value: 'lake-katwe' },
  { label: 'Salt Mining', value: 'salt-mining' },
  { label: 'Nature', value: 'nature' },
  { label: 'Wildlife', value: 'wildlife' },
  { label: 'Community', value: 'community' },
  { label: 'Tours', value: 'tours' },
  { label: 'Accommodation', value: 'accommodation' },
]

const rotatingMedia = [
  mediaAssets.craterLake,
  mediaAssets.saltLake,
  mediaAssets.flamingos,
  mediaAssets.treeLion,
  mediaAssets.hippos,
  mediaAssets.kob,
]

export const gallery = galleryCategories.flatMap((category, index) => [
  {
    id: index * 2 + 1,
    src: rotatingMedia[(index * 2) % rotatingMedia.length].src,
    alt: rotatingMedia[(index * 2) % rotatingMedia.length].alt,
    title: `${category.label} preview`,
    category: category.value,
    description:
      'Reference destination image for design development. Replace with your final curated media library if needed.',
  },
  {
    id: index * 2 + 2,
    src: rotatingMedia[(index * 2 + 1) % rotatingMedia.length].src,
    alt: rotatingMedia[(index * 2 + 1) % rotatingMedia.length].alt,
    title: `${category.label} moments`,
    category: category.value,
    description:
      'Reference destination image for design development. Replace with your final curated media library if needed.',
  },
])
