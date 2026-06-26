import CaseStudyTemplate from '../components/CaseStudyTemplate'
import { workItems } from '../data/work'

const item = workItems.find(w => w.id === 'gehc')

const intro = [
  'HUE — Harmonized User Experience — is GE HealthCare\'s initiative to unify the way technologists interact with CT and MR imaging systems across the enterprise. One consistent experience. One interaction language. Across the machines that image millions of patients every year.',
  'I led interaction design for Module 2: In-Room Scan Preparation — the workflow that allows technologists to identify patients, verify exams, and initiate scans directly from inside the scan room. It\'s the moment just before the machine runs. The stakes are real.',
]

const sections = [
  {
    label: 'Background',
    items: [
      {
        heading: 'Two modalities, two worlds',
        body: 'CT and MR imaging systems had evolved independently for decades. Each had its own workflow logic, its own interaction patterns, its own assumptions about how a technologist works. The result was a fractured experience: technologists moving between systems had to mentally shift gears, relearn interactions, and absorb inconsistency on top of an already demanding job.',
      },
      {
        body: 'HUE was the initiative to change that — to build a shared UX foundation that could span modalities without erasing what made each one distinct. Module 2, In-Room Scan Prep, was one of the most critical pieces: it sits at the intersection of patient safety, clinical efficiency, and regulatory compliance.',
      },
    ],
  },
  {
    label: 'The Problem',
    items: [
      {
        heading: 'Wrong patient. High pressure. No margin for error.',
        body: 'Radiology workflows are fast, complex, and high-stakes. Through user research, field observation, and usability analysis, we identified the issues that mattered most. Wrong patient selection was the most serious — a known use error with documented clinical consequences. The existing UI offered weak visual confirmation and no mandatory verification step, leaving the workflow reliant on technologist memory and habit rather than system safeguards.',
      },
      {
        body: 'Beyond safety, the experience had accumulated friction in every direction. Patient worklists were hard to navigate under time pressure. CT and MR followed different interaction models, so technologists who worked across both systems were constantly context-switching. Cognitive load was high, interruptions were frequent, and the interface didn\'t help absorb either.',
        image: '/images/ct2.jpeg',
      },
      {
        body: 'Privacy added another layer. Patient health information visible on a screen in a shared clinical environment has compliance implications — HIPAA requirements don\'t pause for workflow efficiency.',
      },
    ],
  },
  {
    label: 'My Role',
    items: [
      {
        heading: 'Leading IxD for Module 2',
        body: 'I led interaction design for the Patient Schedule module — owning workflows, interaction patterns, and UI structure from concept through usability validation. I worked across a cross-functional team that included UX researchers, modality specialists for both CT and MR, and engineering leads. I contributed to design specifications, drove cross-platform alignment decisions, and was the primary designer on safety-critical interactions, including the patient confirmation flow.',
      },
    ],
  },
  {
    label: 'Approach',
    items: [
      {
        heading: 'Grounding every decision in real workflows',
        body: 'We started by mapping the scenarios technologists actually encounter: selecting single versus multiple exams, searching and filtering long worklists under time pressure, handling emergency cases with unknown patients, using barcode readers to reduce manual input. These weren\'t hypothetical flows — they were derived from field research and usability analysis. They became the backbone of the interaction model.',
      },
      {
        heading: 'A tollgate for patient safety',
        body: 'The most consequential design decision was introducing a mandatory confirmation step before any scan could proceed. Field data was clear: removing confirmation reduced user trust and increased perceived errors, even when actual errors didn\'t occur. The confirmation wasn\'t just a safety mechanism — it was a trust mechanism. We reinforced it with persistent patient visibility across screens, strong visual selection states, and barcode scanning support to eliminate manual identification error entirely.',
      },
      {
        heading: 'One system, two workflows',
        body: 'CT and MR technologists work differently, and the interface needed to respect that. CT workflows are sequential and protocol-driven, so we designed a directed, step-by-step flow that reduces cognitive load at each decision point. MR workflows are more fluid and expert-driven, so we designed an open navigation model that gives experienced users flexibility without forcing a linear path. Same underlying UX system. Different surface behaviors. Neither modality compromised for the other.',
      },
      {
        heading: 'Making the worklist fast',
        body: 'We redesigned the patient schedule as a high-performance data interaction surface. Real-time search-as-you-type. Multi-attribute filtering across patient ID, name, exam type, date of birth. Sortable column headers. Multi-exam grouping for complex CT cases. Clear visual hierarchy for scan selection. The goal was to reduce time-to-selection and give technologists confidence they\'d found the right patient — even under interruption.',
      },
      {
        heading: 'Privacy by design',
        body: 'We built a configurable Privacy Mode that hides protected health information in shared environments and reveals it only upon interaction. It\'s adjustable per region and per customer deployment. Compliance and workflow efficiency aren\'t in tension when the interface is designed to handle both.',
      },
      {
        heading: 'Designed for the room, not the desk',
        body: 'The interface runs on 12–15.6" touch displays mounted in scan rooms — not at a desk. Typography was scaled for readability at distance. Touch targets were sized for gloved hands and high-stress interactions. The visual hierarchy was tuned to be readable from the gantry, the doorway, and the control window. It had to work in the actual environment, not just in a usability lab.',
        image: '/images/ct1.jpeg',
      },
    ],
  },
  {
    label: 'Impact',
    items: [
      {
        heading: 'Safety, efficiency, and a shared language',
        body: 'The confirmation tollgate measurably reduced the conditions that lead to wrong-patient errors, and usability research showed improved technologist confidence and trust in the workflow. Faster patient lookup through search and filtering reduced time-to-selection across both modalities. The shared UX foundation lowered the training burden for technologists working across CT and MR systems — the interaction language was finally consistent.',
      },
      {
        body: 'Privacy Mode gave compliance teams a configurable, deployment-ready solution that didn\'t require technologists to change how they worked. And the dual-workflow architecture — directed for CT, open for MR — proved that a unified system doesn\'t have to mean a uniform one.',
      },
    ],
  },
  {
    label: 'Reflection',
    items: [
      {
        heading: 'What this project taught me',
        body: 'Healthcare UX is humbling. The environment is unforgiving, the constraints are real, and the people using your interface are managing more complexity than any interface can fully reduce. The most important thing I carried out of this project: safety is a UX problem before it\'s an engineering one. If the interface doesn\'t make the safe path the obvious path, no amount of downstream validation will fully compensate.',
      },
      {
        body: 'Designing across modalities also forced a discipline I hadn\'t encountered at the same scale before — holding consistency and flexibility in tension simultaneously, making every shared component earn its place while protecting the workflows that couldn\'t be standardized away. That balance is what large design systems are actually about.',
      },
    ],
  },
]

export default function GehcCaseStudy() {
  return <CaseStudyTemplate item={item} intro={intro} introPhoto="/images/ct3.jpeg" sections={sections} />
}
