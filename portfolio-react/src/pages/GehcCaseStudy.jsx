import CaseStudyTemplate from '../components/CaseStudyTemplate'
import { img } from '../utils/img'
import { workItems } from '../data/work'

const item = workItems.find(w => w.id === 'gehc')

const intro = [
  'MRI technologists make hundreds of decisions during every exam. They manage patient safety, configure imaging protocols, monitor scan progress, and review images — all while working under constant time pressure. Concerto is the software that powers that experience.',
  'As a UX Designer on GE HealthCare\'s MRI team, I design workflows that help expert users navigate this complexity without sacrificing the precision and flexibility modern MRI requires.',
]

const sections = [
  {
    label: 'Background',
    items: [
      {
        heading: 'Designing for experts',
        body: 'Unlike consumer software, MRI applications can\'t simply remove complexity. Every control exists for a clinical reason, and experienced technologists depend on that control to deliver accurate, safe imaging.',
      },
      {
        body: 'Concerto is the primary interface technologists use throughout an MRI exam — from selecting protocols and configuring scan parameters to monitoring acquisitions and reviewing reconstructed images. Every interaction has the potential to affect workflow efficiency, image quality, or patient safety.',
      },
      {
        body: 'Working alongside product managers, engineers, and MRI clinical specialists, my role was to improve usability while respecting the realities of an expert clinical environment.',
      },
    ],
  },
  {
    label: 'Understanding the User',
    items: [
      {
        heading: 'Learning how MRI technologists think',
        body: 'Designing for MRI required more than understanding software — it required understanding the clinical workflow.',
      },
      {
        body: 'I partnered closely with MRI application specialists, observed demonstrations, reviewed existing workflows, and translated complex technical concepts into user-centered design decisions. Rather than treating each screen independently, I focused on how technologists move through an entire exam — from patient setup to image acquisition and post-processing.',
      },
      {
        callout: 'Technologists rarely work sequentially. While one scan is running, they\'re already preparing the next one. The interface needed to support parallel work instead of forcing linear interactions.',
      },
      {
        body: 'Every design decision was evaluated against that reality.',
      },
    ],
  },
  {
    label: 'My Role',
    items: [
      {
        heading: 'Designing within a highly technical ecosystem',
        body: 'As a UX Designer on the MRI software team, I contributed interaction design, information architecture, wireframes, high-fidelity UI, prototypes, and design specifications for Concerto\'s scanning experience.',
      },
      {
        body: 'Working within a multidisciplinary team of product managers, engineers, and MRI domain experts, I translated highly technical requirements into workflows that balanced efficiency, discoverability, and patient safety.',
      },
      {
        body: 'Much of my work involved reducing cognitive load without removing the flexibility expert users depend on.',
      },
    ],
  },
  {
    label: 'Research & Discovery',
    items: [
      {
        heading: 'Understanding complexity before simplifying it',
        body: 'MRI software contains hundreds of configurable parameters, many of which directly affect image quality or patient safety. Before proposing solutions, I invested time understanding why these controls existed and how technologists actually used them during live exams.',
      },
      {
        body: 'Working sessions with MRI specialists revealed recurring usability challenges:',
        list: [
          'Critical information competing for attention during active scans',
          'Complex parameter panels that exposed more controls than were needed in a given context',
          'System feedback that relied heavily on technical terminology',
          'Workflows that required unnecessary navigation between related tasks',
        ],
      },
      {
        body: 'These insights became the foundation for every design decision moving forward.',
      },
    ],
  },
  {
    label: 'Design Approach',
    items: [
      {
        heading: 'Reducing cognitive load without reducing capability',
        body: 'Rather than redesigning the interface around aesthetics, I focused on helping technologists make faster, more confident decisions.',
      },
      {
        body: 'This included designing workflows that:',
        list: [
          'surfaced the most relevant information at the right time',
          'progressively revealed advanced controls instead of presenting every option at once',
          'improved visibility into scan status and system feedback',
          'supported configuring upcoming scans while current acquisitions were still running',
          'maintained consistency across complex protocol management workflows',
        ],
      },
      {
        body: 'Every interaction was evaluated through the lens of efficiency, safety, and expert usability.',
      },
    ],
  },
  {
    label: 'Visual Design',
    items: [
      {
        heading: 'Designing for clarity in high-pressure environments',
        body: "Concerto's interface is information-dense by necessity. My goal wasn't to reduce information — it was to improve how that information was organized and prioritized.",
      },
      {
        body: 'I refined layouts, hierarchy, spacing, iconography, and visual states to make important actions easier to recognize while reducing unnecessary visual noise.',
      },
      {
        body: 'Particular attention was given to:',
        list: [
          'status indicators',
          'task progression',
          'parameter organization',
          'adaptive panels',
          'contextual actions',
          'error and warning states',
        ],
      },
      {
        body: 'The result was an interface that felt more intentional and easier to navigate while preserving the depth required by advanced MRI workflows.',
      },
    ],
  },
  {
    label: 'Collaboration',
    items: [
      {
        heading: 'Designing alongside clinical experts',
        body: 'Every workflow was shaped through close collaboration with MRI application specialists, product managers, and engineers.',
      },
      {
        body: 'Clinical experts provided the domain knowledge behind each feature, while engineering ensured proposed interactions aligned with technical constraints. My responsibility was translating those requirements into intuitive experiences that supported both novice and experienced technologists.',
      },
      {
        body: 'This iterative collaboration ensured designs reflected real clinical practice rather than assumptions.',
      },
    ],
  },
  {
    label: 'Impact',
    items: [
      {
        heading: 'Improving confidence in complex workflows',
        body: "The work contributed to the ongoing evolution of Concerto's MRI scanning experience, helping modernize workflows used throughout patient setup, protocol management, scan configuration, image acquisition, and review.",
      },
      {
        body: 'By focusing on workflow efficiency and cognitive clarity, the designs supported faster navigation, improved system feedback, and more intuitive interaction patterns without sacrificing the advanced capabilities required by expert users.',
      },
      {
        callout: "In healthcare, simplicity isn't about removing features — it's about helping experts make better decisions under pressure.",
      },
    ],
  },
  {
    label: 'Reflection',
    items: [
      {
        body: 'Working on Concerto fundamentally changed how I think about enterprise UX.',
      },
      {
        body: "The challenge wasn't simplifying MRI — it was making one of healthcare's most sophisticated workflows feel manageable without compromising precision or safety. Every interaction had real-world implications for clinicians and patients alike.",
      },
      {
        body: "Designing in that environment taught me that great enterprise software doesn't hide complexity. It organizes it, prioritizes it, and helps people focus on what matters most.",
      },
    ],
  },
]

export default function GehcCaseStudy() {
  return <CaseStudyTemplate item={item} intro={intro} sections={sections} />
}
