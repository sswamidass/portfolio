import CaseStudyTemplate from '../components/CaseStudyTemplate'
import { img } from '../utils/img'
import { workItems } from '../data/work'

const item = workItems.find(w => w.id === 'k12')

const intro = [
  'Elevate K-12 connects schools facing teacher shortages with certified remote instructors — bringing standardized, high-quality instruction to students regardless of where they live. Their mission: every student deserves a great teacher.',
  'I was brought in to redesign their marketing website. Three weeks to go live.',
]

const sections = [
  {
    label: 'Background',
    items: [
      {
        heading: 'A site that buried its own message',
        body: 'The existing site was dense. Landing pages were overloaded with information, and first-time visitors struggled to understand what Elevate K-12 actually did — let alone why it mattered. The experience felt like reading a brochure, not discovering a solution.',
        image: img('/images/old-k12.png'),
      },
      {
        body: 'The ask was direct: transform the site into something that let the mission land quickly, with content structured for the way real users actually read online.',
      },
    ],
  },
  {
    label: 'Audience',
    items: [
      {
        heading: 'Decision-makers with a short window',
        body: 'The primary audience was school administrators and district leaders — people evaluating whether a remote teaching platform could solve a real staffing crisis. They weren\'t casual browsers. They came with a specific problem and limited attention. The redesign needed to meet them there: give them clarity fast, and make a compelling case for why Elevate K-12 was the right answer.',
      },
    ],
  },
  {
    label: 'My Role',
    items: [
      {
        heading: 'Focused UI design engagement',
        body: 'I worked directly with the company\'s Brand Manager to audit existing content, align on priorities, and determine what could realistically ship within the deadline. I owned the full visual design — layouts, typography, color, components — and delivered handoff-ready files for their development team.',
      },
    ],
  },
  {
    label: 'Planning',
    items: [
      {
        heading: 'One idea at a time',
        body: 'Given the tight timeline, I kept the site hierarchy close to what already existed — reducing risk while maximizing design impact. The real work was in restructuring how content was presented within each page.',
        image: img('/images/k12_sitemap.png'),
      },
      {
        body: 'The guiding principle: one idea at a time. Instead of presenting everything at once, I designed a flow that let users absorb the company\'s value proposition in stages — building understanding before asking for any action.',
        image: img('/images/k12_wireframe.png'),
      },
    ],
  },
  {
    label: 'Visual Design',
    items: [
      {
        heading: 'Making space for the mission',
        body: 'I kept the brand\'s primary green and secondary purple but shifted how they were used — from large, dominant color blocks to intentional accent moments. The result felt more modern and gave the content room to breathe. Clean typography and generous white space did the heavy lifting.',
        images: [img('/images/ui-k12.png'), img('/images/k12_flow.png')],
      },
    ],
  },
  {
    label: 'Outcome',
    items: [
      {
        heading: 'On time, on brief',
        body: 'The redesign shipped on schedule. Development was handled by the company\'s internal team from my handoff files. The new design gave Elevate K-12 a cleaner, more credible presence — one that reflected the professionalism of their mission and made it far easier for prospective clients to understand their offering at a glance.',
        image: img('/images/final_k12.jpg'),
      },
    ],
  },
]

export default function K12CaseStudy() {
  return <CaseStudyTemplate item={item} intro={intro} sections={sections} logoOnly />
}
