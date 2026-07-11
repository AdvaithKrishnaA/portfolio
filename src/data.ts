import highOnProduct from "@/assets/highonproduct.svg"
import parcelCover from "@/assets/parcel-cover.svg"
import burn from "@/assets/burn.svg"
import imaLogo from "@/assets/ima-logo.svg"
import engineerGame from "@/assets/engineer-game.webp"
import caseStudies from "@/assets/casestudies.webp"

export type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "The Behavioral Economics of Love",
    description: "Spoiler: our choices in love aren't always rational!",
    link: "/blog/the-behavioral-economics-of-love",
    uid: "blog-1",
  },
  {
    title: "The Behavioral Economics of Holiday Decision Making",
    description:
      "Everything from gift waste to secret-santas to sale-induced overspending.",
    link: "/blog/the-behavioral-economics-of-christmas",
    uid: "blog-2",
  },
  {
    title: "Anchored Down: Psychology of Coupon Use",
    description:
      "The psychology behind why coupons hook us runs deeper than saving money.",
    link: "/blog/the-psychology-of-coupon-use",
    uid: "blog-3",
  },
  {
    title: "Bad Arguments and Bogus Logic: Navigating Logical Fallacies",
    description:
      "Understanding common logical fallacies and how they shape our reasoning and decision-making.",
    link: "/blog/bad-arguments-and-bogus-logic-navigating-logical-fallacies",
    uid: "blog-4",
  },
]

export const EMAIL = "meetadvaith@duck.com"

const CASE_PORTFOLIO_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Requesting Access: Case Portfolio",
)}&body=${encodeURIComponent(
  "Hi Advaith,\n\nI came across your portfolio and would love to go through your case studies. Could you share access?\n\nName:\nOrganization / Institution:\n\nThanks!",
)}`

export type Project = {
  name: string
  description: string
  link?: string
  video?: string
  image?: string
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: "High On Product",
    description:
      "A limited no-nonsense initiative to help crack entry level product interviews",
    link: "https://highonproduct.com",
    image: highOnProduct,
    id: "project1",
  },
  {
    name: "Parcel",
    description:
      "A simple app to save and share links, notes, and secrets securely",
    link: "/parcel",
    image: parcelCover,
    id: "project-parcel",
  },
  {
    name: "Burn",
    description:
      "Burn helps you release negative thoughts — write them down, watch them disappear, and get back to better vibes.",
    link: "/burn",
    image: burn,
    id: "project-burn",
  },
  {
    name: "Ima",
    description:
      "A quiet macOS menu bar app where tasks exist only for the time you decide they deserve",
    link: "/ima",
    image: imaLogo,
    id: "project0",
  },
  {
    name: "Engineer #099",
    description: "A pixel-style endless runner game but for engineers in tech",
    link: "/engineer-game",
    image: engineerGame,
    id: "project3",
  },
  {
    name: "Case Portfolio",
    description: "Request access to my case studies",
    image: caseStudies,
    link: CASE_PORTFOLIO_MAILTO,
    id: "project2",
  },
]
