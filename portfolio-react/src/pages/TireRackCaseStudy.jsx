import CaseStudyTemplate from '../components/CaseStudyTemplate'
import { img } from '../utils/img'
import { workItems } from '../data/work'

const item = workItems.find(w => w.id === 'tirerack')

const intro = [
  'Tire Rack is the second-largest online tire retailer in North America. They built their reputation on helping drivers — from everyday commuters to serious enthusiasts — find the right tires and get them shipped directly to their door or a local installer.',
  'I joined the web design team during one of the most significant moments in Tire Rack\'s digital history: a ground-up redesign of the entire retail site. It was my first professional design role, and it was anything but a gentle introduction.',
]

const sections = [
  {
    label: 'Background',
    items: [
      {
        heading: 'A site built for a different era',
        body: 'In 2012, Tire Rack\'s retail site was running on architecture from the early 2000s. No responsive design. No HTML5 or CSS3. A visual language rooted in skeuomorphism that had aged poorly. The site functioned, but it no longer reflected the company — or the standards customers had come to expect.',
        image: img('/images/old-tr.png'),
      },
      {
        body: 'The goal was a ground-up redesign: a modern retail experience that would strengthen the brand, improve usability, and drive measurable growth in online traffic and conversions.',
      },
    ],
  },
  {
    label: 'Audience',
    items: [
      {
        heading: 'A wide spectrum of buyers',
        body: 'Tire Rack\'s audience spans a wide range — from first-time tire buyers who just need the right fit, to seasoned enthusiasts who know exactly what they want down to the compound. The existing site had a reasonably clear purchase flow, but the experience around it didn\'t hold up. The redesign had to serve both ends of that spectrum without alienating either.',
      },
    ],
  },
  {
    label: 'My Role',
    items: [
      {
        heading: 'One designer on a team of six',
        body: 'I joined a web design team of six on the marketing side. UX planning and prototyping were led by the company\'s UI/UX Designer; our team translated those into high-fidelity mockups and front-end code. As the newest member, I owned specific sections of the site while collaborating closely with the lead to stay aligned on a design system that was still being defined as we built.',
      },
    ],
  },
  {
    label: 'Design Process',
    items: [
      {
        heading: 'Section by section, system by system',
        body: 'The style guide was finalized from three concepts the team presented and became the visual foundation everything else was built from. Working from UX flows defined by the lead designer, we designed mockups section by section — ensuring consistency across a site with significant scale and complexity.',
        image: img('/images/mockups_tr.jpg'),
      },
      {
        body: 'Each section was designed with the full user journey in mind — accounting for entry points, edge cases, and the gaps the old site left unaddressed.',
      },
    ],
  },
  {
    label: 'Visual Design',
    items: [
      {
        heading: 'Familiar, but finally modern',
        body: 'Tire Rack\'s signature red stayed front and center — brand equity worth protecting. Everything around it shifted: flat design replaced the dated skeuomorphic aesthetic, the secondary palette was pulled back to clean and restrained, and strong product photography gave the site a more premium feel. The result was recognizable but genuinely modern.',
        image: img('/images/ui-tr.png'),
      },
    ],
  },
  {
    label: 'Development',
    items: [
      {
        heading: 'Precision in the handoff',
        body: 'As mockups were approved, our team built out the front end in HTML5, CSS3, and JavaScript. Completed code was handed off to back-end developers for data integration and platform deployment. Working within that model early in my career taught me something I\'ve carried since: the cleaner the handoff, the faster the build — and precision in design files is a form of respect for the people who implement them.',
      },
    ],
  },
  {
    label: 'Outcome',
    items: [
      {
        heading: 'A foundation that lasted',
        body: 'The redesigned site launched in 2014. Traffic and sales increased following the launch, and the design system the team built became the foundation the company continued to build on for years after.',
        image: img('/images/final_tr.jpg'),
      },
      {
        body: 'For me, Tire Rack was formative. It was where I learned what large-scale collaborative design actually looks like — structured process, shared systems, and accountability that extends beyond your own section of the work. Everything I\'ve done since has benefited from starting there.',
      },
    ],
  },
]

export default function TireRackCaseStudy() {
  return <CaseStudyTemplate item={item} intro={intro} sections={sections} logoOnly />
}
