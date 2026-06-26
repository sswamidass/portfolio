import CaseStudyTemplate from '../components/CaseStudyTemplate'
import { workItems } from '../data/work'

const item = workItems.find(w => w.id === 'homeground')

const intro = [
  'Homeground is a nature-inspired subscription box built around a simple idea: slow down, gather around something intentional. Each box brings together a curated children\'s book, an adult read, a featured Great Lakes coffee roaster, and seasonal goods — all tied to a central theme.',
  'I co-founded it with my partner Sara. I designed everything from the name up: brand identity, Shopify storefront, email infrastructure, and the pre-launch experience that had to exist before a single box could ship.',
]

const sections = [
  {
    label: 'Background',
    items: [
      {
        heading: 'Starting from a blank canvas',
        body: 'Most design projects start with something — a brief, a style guide, an existing direction. Homeground started with a conversation. We had a clear emotional vision for what the brand should feel like, but nothing built: no identity, no color system, no store, no audience.',
      },
      {
        body: 'The design challenge wasn\'t just to make things look good. It was to construct a brand world coherent enough that a stranger could land on the site and immediately understand what Homeground was and why it was worth subscribing to. And it had to work across every touchpoint at once — there was no room to figure out the logo first, then the store, then the emails. Everything had to speak the same language from the start.',
      },
    ],
  },
  {
    label: 'Audience',
    items: [
      {
        heading: 'The person we were designing for',
        body: 'The Homeground subscriber values ritual. They\'re parents who read alongside their kids, adults who treat coffee as a practice rather than a habit, people who find meaning in things made with intention — a small-batch roast, a thoughtfully selected book, a seasonal item tied to where they live.',
      },
      {
        body: 'They weren\'t looking for convenience. They were looking for connection. That insight shaped everything. The brand couldn\'t be loud or transactional. It had to feel like a recommendation from someone with taste.',
      },
    ],
  },
  {
    label: 'My Role',
    items: [
      {
        heading: 'Co-founder, sole designer',
        body: 'Sara handled operations and product curation. I handled everything the customer sees. That meant naming, visual identity, information architecture, Shopify storefront design and theme development, email campaign design, and the pre-launch infrastructure. Brand strategy through execution.',
      },
    ],
  },
  {
    label: 'Brand Identity',
    items: [
      {
        heading: 'Building the world',
        body: 'The identity started with the name — Homeground — and the associations it carries: the ground beneath your feet, home as a place you return to, the grounds in a coffee cup. From that I built a visual language rooted in the natural world: a botanical illustration system, an earthy palette anchored in deep greens and warm neutrals, and typography that balanced warmth with literary credibility.',
        image: '/images/homeground-founders.jpg',
      },
      {
        body: 'Every element was codified into a living style guide — color tokens, type scale, illustration usage rules, logo clearance, and voice guidelines — so the brand could grow without drifting.',
      },
    ],
  },
  {
    label: 'Storefront',
    items: [
      {
        heading: 'Getting out of the brand\'s way',
        body: 'The Shopify storefront was built on the Horizon theme, rebuilt to reflect the Homeground brand system. I designed and developed six core pages: homepage, subscribe, FAQ, About Us, manage subscription, and a seasonal landing page.',
      },
      {
        body: 'The subscribe page was the most considered. It had to answer the three questions every prospective subscriber has — what\'s in it, how much does it cost, how do I cancel — without feeling like a legal document. Clear hierarchy, honest copy, and enough warmth to make the decision feel good rather than transactional.',
      },
    ],
  },
  {
    label: 'Pre-Launch',
    items: [
      {
        heading: 'Building an audience before the doors opened',
        body: 'Before the store launched, the priority was audience. I designed and built a pre-launch email capture page — a standalone experience that conveyed the full brand and collected sign-ups before anything was for sale. One scroll. Do the whole job.',
        image: '/images/homeground-email-hero.png',
      },
      {
        body: 'Email infrastructure was built on Omnisend: welcome flows, subscriber confirmation, campaign templates, and full DNS authentication setup (SPF, DKIM, DMARC) to ensure deliverability from day one. Every campaign followed the same visual system as the storefront — consistent type, consistent color, consistent voice.',
      },
    ],
  },
  {
    label: 'Outcome',
    items: [
      {
        heading: 'Design ownership at its most complete',
        body: 'By the time the store opened, every customer touchpoint was live and cohesive. The pre-launch list gave us a warm audience for the first order push.',
        image: '/images/homeground-family.jpg',
      },
      {
        body: 'Homeground is the project I\'m most personally invested in, and the one that most clearly shows what I\'m capable of when given full creative latitude. Every decision — from the name to the email footer — made with intention, and made by hand.',
      },
    ],
  },
]

export default function HomegroundCaseStudy() {
  return <CaseStudyTemplate item={item} intro={intro} sections={sections} />
}
