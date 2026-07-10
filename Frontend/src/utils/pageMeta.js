import { useEffect } from 'react'
import { getPageTitle, siteConfig } from '../config/siteConfig'

export function usePageMeta(pageTitle, description = siteConfig.description) {
  useEffect(() => {
    document.title = getPageTitle(pageTitle)

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    }
  }, [description, pageTitle])
}
