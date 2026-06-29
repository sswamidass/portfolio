import CaseStudyTemplate from '../components/CaseStudyTemplate'
import { img } from '../utils/img'
import { workItems } from '../data/work'

const item = workItems.find(w => w.id === 'remote360')

const intro = [
  'remote360® gives operators and service teams in the machining and fabrication industry real-time visibility into machine performance — from any device, anywhere. Live data, maintenance metrics, productivity dashboards. The kind of tool that turns a floor manager\'s instinct into something measurable.',
  'When I joined MC Machinery, remote360 existed only as a proof of concept. I rebuilt it from the ground up — owning research, UX, visual design, and front-end development. Six years, one designer, one product.',
]

const sections = [
  {
    label: 'Background',
    items: [
      {
        heading: 'A concept that needed a product',
        body: 'The original remote360 was a Java desktop application built by an IoT partner. It proved the data infrastructure worked, but the experience didn\'t. Customers wanted real-time visibility on the go. What they got was a clunky, desktop-only interface that felt like it had been configured, not designed.',
      },
      {
        image: img('/images/ignition.png'),
      },
      {
        body: 'The IoT partner\'s strength was plumbing — sensors, data pipelines, infrastructure. Design was outside their scope. My role was to take ownership of everything the data touched: how it was organized, how it looked, and how it felt to use. I was the first and only designer on the project.',
      },
    ],
  },
  {
    label: 'Understanding the User',
    items: [
      {
        heading: 'The person on the floor',
        body: 'The people using remote360 weren\'t sitting at a desk. They were floor managers and service technicians in loud, fast-moving industrial environments — people who needed a fast answer about a machine, not a dashboard full of charts to parse.',
      },
      {
        callout: 'Downtime costs money. Every extra tap is a liability.',
      },
      {
        body: 'I ran interviews with customers, engineers, field technicians, and the sales team. The contrast between veteran users and new users was the most useful signal: experienced users had developed workarounds; newer users just hit walls. I synthesized those conversations into a primary persona that anchored every design decision that followed.',
        image: img('/images/persona.svg'),
      },
    ],
  },
  {
    label: 'My Role',
    items: [
      {
        heading: 'One designer, end to end',
        body: 'I was embedded in the Business Systems team with a back-end developer, a network technician, and a department manager who had championed the product from the start. I owned the full design lifecycle: user research, information architecture, interaction design, visual design, prototyping, and front-end development in HTML5, SCSS, JavaScript, PHP, and MySQL.',
      },
      {
        callout: 'Six years. One designer. One product.',
      },
      {
        body: 'Working alone across design and development meant no translation loss between intent and execution. When I made a decision at the whiteboard, I was the one building it. That accountability changed how I made decisions.',
      },
    ],
  },
  {
    label: 'Research & Architecture',
    items: [
      {
        heading: 'Listening before designing',
        body: 'The research was clear: the core data had value, but the path to it was too slow. Users wanted answers in one or two taps, not buried three levels deep. The web MVP needed to preserve what worked — the live data feed, the status indicators — and eliminate everything that didn\'t.',
        image: img('/images/ia.jpg'),
      },
      {
        body: 'I structured the information architecture around access speed. Every navigation decision was evaluated against a single question: how quickly can someone get the answer they came for?',
        image: img('/images/wireframes.jpg'),
      },
    ],
  },
  {
    label: 'Visual Design',
    items: [
      {
        heading: 'Dark by design',
        body: 'I tested three visual directions with technicians, product managers, and leadership. The dark interface won decisively — it felt native to the industrial context, reduced eye strain under harsh lighting, and gave the product a sharp identity that set it apart from generic enterprise software.',
        image: img('/images/mockups.jpg'),
      },
      {
        body: 'I rebuilt the color system from scratch, using the Java app\'s red, green, and yellow status indicators as a starting point — pulling them toward softer, more readable tones and building out a full supporting palette. Every icon in the product was redrawn. The result looked and felt like a different product.',
        images: [img('/images/ui-1.jpg'), img('/images/r360_StyleGuide.jpg')],
      },
    ],
  },
  {
    label: 'Development',
    items: [
      {
        heading: 'Designing and building it myself',
        body: 'I built the front end in HTML5, SCSS, and JavaScript, integrating with PHP and MySQL for data. Owning both sides of the work meant I could make real-time calls at the edge of what was designed and what was buildable — without the friction of handoff. The app launched mobile-first and was tested across screen sizes throughout, not as an afterthought.',
      },
    ],
  },
  {
    label: 'Impact',
    items: [
      {
        heading: 'A product that made industry news',
        body: 'Beta testing with local customers confirmed the direction, and remote360 quickly became a differentiator in MC Machinery\'s service offering. The platform launched in 2016 and continued to evolve — tighter color usage, improved data visualizations, new features like automated PDF production reports delivered directly to customer inboxes.',
        image: img('/images/reports.png'),
      },
      {
        body: 'The work got noticed beyond the company:',
        links: [
          { label: 'Data-Driven Manufacturing — Canadian Fabricating & Welding', url: 'https://www.canadianmetalworking.com/canadianfabricatingandwelding/article/fabricating/data-driven-manufacturing' },
          { label: '#1 in EDM Sales, Support and Innovation — MC Machinery', url: 'https://s3-us-west-1.amazonaws.com/mcmachinery-uploads/uploads/diamonds/CoverStory_Spring19_r2.pdf' },
          { label: 'Machine Monitoring Optimizes Operations — MC Machinery Blog', url: 'https://www.mcmachinery.com/blog/customer-story-principal-manufacturing/' },
          { label: 'remote360: monitoreo remoto de servicio y soporte — Metal Mecánica', url: 'http://www.metalmecanica.com/temas/Remote-360,-monitoreo-remoto-de-servicio-y-soporte+125577' },
          { label: 'Remote Monitoring to Make Better Decisions — Canadian Metalworking', url: 'https://www.canadianmetalworking-digital.com/canadianmetalworking/202011/MobilePagedReplica.action?pm=2&folio=FW30#pg76' },
        ],
      },
      {
        image: img('/images/beforeafter.jpg'),
      },
      {
        image: img('/images/final_group.jpg'),
      },
      {
        body: 'remote360 taught me what it actually means to own a product. When you\'re the researcher, the designer, and the engineer, every decision is yours to live with. That kind of accountability doesn\'t leave you.',
      },
    ],
  },
]

export default function R360CaseStudy() {
  return <CaseStudyTemplate item={item} intro={intro} sections={sections} logoOnly dark />
}
