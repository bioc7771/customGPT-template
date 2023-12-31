import { NavItem } from "@/types"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Mercury",
  description: "Unlock the secrets of any website",
  mainNav: [],
  links: {
    twitter: "https://twitter.com/ChongKai0828",
    github: "https://github.com/jacobvo888/ai-template",
  },
}
