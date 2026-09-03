import CaseStudyTemplate from '../components/CaseStudyTemplate'
import { workItems } from '../data/work'

const item = workItems.find(w => w.id === 'gehc')

const intro = [
  'MRI technologists make hundreds of decisions during every exam. They manage patient safety, configure imaging protocols, monitor scan progress, and review images — all while working under constant time pressure. Concerto is the software that powers that experience.',
  'I lead interaction design on GE HealthCare\'s MRI team, building workflows that help expert users get through that complexity without giving up the precision and flexibility MRI demands.',
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
        body: 'Designing for MRI meant learning the clinical workflow, not just the software.',
      },
      {
        body: 'I partnered closely with MRI application specialists, observed demonstrations, reviewed existing workflows, and translated complex technical concepts into user-centered design decisions. Rather than treating each screen independently, I focused on how technologists move through an entire exam — from patient setup to image acquisition and post-processing.',
      },
      {
        callout: 'Technologists rarely work sequentially. While one scan is running, they\'re already preparing the next one. The interface needed to support parallel work instead of forcing linear interactions.',
      },
      {
        body: 'That shaped every layout decision.',
      },
    ],
  },
  {
    label: 'My Role',
    items: [
      {
        heading: 'Designing within a highly technical ecosystem',
        body: 'On the MRI software team I owned interaction design, information architecture, wireframes, high-fidelity UI, prototypes, and design specs for Concerto\'s scanning experience.',
      },
      {
        body: 'Working within a multidisciplinary team of product managers, engineers, and MRI domain experts, I translated highly technical requirements into workflows that balanced efficiency, discoverability, and patient safety.',
      },
      {
        body: 'Most of the job was cutting cognitive load without taking away the flexibility expert users rely on.',
      },
    ],
  },
  {
    label: 'Research & Discovery',
    items: [
      {
        heading: 'Understanding complexity before simplifying it',
        body: 'MRI software contains hundreds of configurable parameters, many of which directly affect image quality or patient safety. Before proposing anything, I spent time learning why each control existed and how technologists used it during live exams.',
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
        body: 'Those four problems drove the rest of the work.',
      },
    ],
  },
  {
    label: 'Design Approach',
    items: [
      {
        heading: 'Reducing cognitive load without reducing capability',
        body: 'I wasn\'t there to make it prettier. The goal was helping technologists decide faster, with more confidence.',
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
        body: 'Each one had to earn its place on efficiency, safety, and how an expert would use it.',
      },
    ],
  },
  {
    label: 'Visual Design',
    items: [
      {
        heading: 'Designing for clarity in high-pressure environments',
        body: "Concerto's interface is dense because it has to be. I wasn't trying to show less; I was trying to organize and prioritize what was already there.",
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
        body: 'The result is easier to navigate and reads as deliberate, and it kept all the depth advanced MRI work needs.',
      },
    ],
  },
  {
    label: 'Collaboration',
    items: [
      {
        heading: 'Designing alongside clinical experts',
        body: 'Every workflow went through MRI application specialists, product managers, and engineers before it shipped.',
      },
      {
        body: 'Clinical experts provided the domain knowledge behind each feature, while engineering ensured proposed interactions aligned with technical constraints. My responsibility was translating those requirements into intuitive experiences that supported both novice and experienced technologists.',
      },
      {
        body: 'Going back and forth like that kept the designs tied to how MRI is practiced, not how we assumed it was.',
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
        body: 'Navigation got faster, system feedback got clearer, and the interaction patterns got more predictable, without losing the advanced capability expert users need.',
      },
      {
        callout: "In healthcare, simplicity means helping experts make better decisions under pressure, not taking features away.",
      },
    ],
  },
  {
    label: 'Reflection',
    items: [
      {
        body: 'Concerto changed how I think about enterprise UX.',
      },
      {
        body: "The challenge was never to simplify MRI. It was to make one of the most sophisticated workflows in healthcare feel manageable without compromising precision or safety, knowing every interaction had consequences for clinicians and patients.",
      },
      {
        body: "Good enterprise software doesn't hide complexity. It organizes it, sets priorities, and gets out of the way so people can focus.",
      },
    ],
  },
]

export default function GehcCaseStudy() {
  return <CaseStudyTemplate item={item} intro={intro} sections={sections} />
}
