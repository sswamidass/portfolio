import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CaseStudyNav from '../components/CaseStudyNav'
import CaseStudyFooter from '../components/CaseStudyFooter'
import { useTheme } from '../context/useTheme'
import { img } from '../utils/img'
import { workItems } from '../data/work'
import './HomegroundCaseStudy.css'

const item = workItems.find((w) => w.id === 'homeground')

const A = {
  logoBlack: img('/images/homeground/logo-black.png'),
  logoWhite: img('/images/homeground/logo-white.png'),
  illBooks: img('/images/homeground/ill-books.png'),
  illNovel: img('/images/homeground/ill-novel.png'),
  illCoffee: img('/images/homeground/ill-coffee.png'),
  cardBooks: img('/images/homeground/card-books-photo.jpg'),
  cardCoffee: img('/images/homeground/card-coffee-photo.jpg'),
}

const palette = [
  { name: 'Deep Blue', code: '0D3B52', hex: '#0d3b52' },
  { name: 'Lake Blue', code: '2C5F7A', hex: '#2c5f7a' },
  { name: 'Forest', code: '3D5A4C', hex: '#3d5a4c' },
  { name: 'Sage', code: '7A8F7E', hex: '#7a8f7e' },
  { name: 'Accent Gold', code: 'B8935F', hex: '#b8935f' },
  { name: 'Warm Sand', code: 'DAC8AD', hex: '#dac8ad' },
]

function BrowserChrome() {
  return (
    <div className="hg-browser__chrome">
      <span className="hg-browser__dot" />
      <span className="hg-browser__dot" />
      <span className="hg-browser__dot" />
      <div className="hg-browser__urlwrap">
        <div className="hg-browser__url">homegroundbox.com</div>
      </div>
      <span className="hg-browser__chrome-pad" />
    </div>
  )
}

/* ---- Artifact A: brand-system card ---- */
function BrandSystemCard() {
  return (
    <div className="hg-brandcard">
      <span className="hg-brandcard__tick hg-brandcard__tick--l" aria-hidden="true" />
      <span className="hg-brandcard__tick hg-brandcard__tick--r" aria-hidden="true" />

      <div className="hg-brandcard__labels">
        <div className="hg-brandcard__label hg-brandcard__label--l">Brand identity</div>
        <div className="hg-brandcard__label hg-brandcard__label--r">Visual system · 01</div>
      </div>

      <div className="hg-brandcard__logo">
        <img src={A.logoBlack} alt="Homeground logotype" />
      </div>

      <div className="hg-brandcard__grid">
        <div className="hg-typecard">
          <div className="hg-typecard__label">Typography</div>
          <div className="hg-typecard__display">
            Coffee with a
            <br />
            <em>provenance.</em>
          </div>
          <div className="hg-typecard__divider" />
          <div className="hg-typecard__specs">
            <div className="hg-typecard__spec">
              <div className="hg-typecard__aa hg-typecard__aa--serif">Aa</div>
              <div className="hg-typecard__spec-label">Playfair · Display</div>
            </div>
            <div className="hg-typecard__spec">
              <div className="hg-typecard__aa hg-typecard__aa--sans">Aa</div>
              <div className="hg-typecard__spec-label">Poppins · Body</div>
            </div>
          </div>
        </div>

        <div className="hg-palettecard">
          <div className="hg-palettecard__label">Palette</div>
          <div className="hg-palettecard__rows">
            {palette.map((s) => (
              <div className="hg-swatch" key={s.code}>
                <div className="hg-swatch__chip" style={{ background: s.hex }} />
                <div className="hg-swatch__name">{s.name}</div>
                <div className="hg-swatch__code">{s.code}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hg-illstrip">
        <div className="hg-illstrip__head">
          <div className="hg-illstrip__label">Hand-inked illustration</div>
          <div className="hg-illstrip__note">rooted in the natural world</div>
        </div>
        <div className="hg-illstrip__row">
          <img src={A.illBooks} alt="Stack of three children's books" style={{ height: 84 }} />
          <img src={A.illNovel} alt="Hardcover novel" style={{ height: 106 }} />
          <img src={A.illCoffee} alt="Bag of coffee" style={{ height: 104 }} />
        </div>
      </div>
    </div>
  )
}

/* ---- Artifact B: storefront homepage ---- */
function StorefrontMock() {
  return (
    <div className="hg-browser">
      <BrowserChrome />
      <div className="hg-store__nav">
        <img src={A.logoBlack} alt="homeground" />
        <div className="hg-store__navlinks">
          <span>Subscribe</span>
          <span>About Us</span>
          <span>FAQ</span>
          <span className="is-cart">Cart (1)</span>
        </div>
      </div>
      <div className="hg-store__hero">
        <div className="hg-store__kicker">Small-batch coffee · books worth keeping</div>
        <div className="hg-store__hero-title">Slow mornings live here.</div>
        <div className="hg-store__hero-body">
          A curated children's book, an adult read, a featured Great Lakes roaster, and seasonal
          goods — packed and shipped from our house to yours.
        </div>
        <div className="hg-btn-gold">Start your subscription</div>
      </div>
      <div className="hg-store__products">
        <div className="hg-store__product">
          <div className="hg-store__well">
            <img src={A.illBooks} alt="Stack of children's books" style={{ height: 74 }} />
          </div>
          <div className="hg-store__product-title">For the Little Ones</div>
          <div className="hg-store__product-sub">Board &amp; picture books</div>
        </div>
        <div className="hg-store__product">
          <div className="hg-store__well">
            <img src={A.illNovel} alt="Hardcover novel" style={{ height: 92 }} />
          </div>
          <div className="hg-store__product-title">For You</div>
          <div className="hg-store__product-sub">One adult read</div>
        </div>
        <div className="hg-store__product">
          <div className="hg-store__well">
            <img src={A.illCoffee} alt="Bag of coffee" style={{ height: 90 }} />
          </div>
          <div className="hg-store__product-title">To Savor</div>
          <div className="hg-store__product-sub">Great Lakes roaster</div>
        </div>
      </div>
      <div className="hg-store__footer">
        <img src={A.logoWhite} alt="homeground" />
      </div>
    </div>
  )
}

/* ---- Artifact C: pre-launch capture page ---- */
function CaptureMock() {
  return (
    <div className="hg-browser hg-browser--deep">
      <BrowserChrome />
      <div className="hg-capture">
        <img className="hg-capture__logo" src={A.logoWhite} alt="homeground" />
        <div className="hg-capture__rule" />
        <div className="hg-capture__title">We&rsquo;ve been waiting to tell someone.</div>
        <div className="hg-capture__sub">
          A subscription box of coffee and stories is almost ready. Leave your email and be first
          through the door.
        </div>
        <div className="hg-capture__form">
          <div className="hg-capture__input">Your email address</div>
          <div className="hg-btn-gold">Keep me posted</div>
        </div>
        <div className="hg-capture__fine">No spam — just the opening date and a thank-you.</div>
      </div>
    </div>
  )
}

/* ---- Artifact D: email mocks ---- */
function EmailMocks() {
  return (
    <div className="hg-emails">
      <div className="hg-email">
        <div className="hg-email__head">
          <div className="hg-email__sender">
            <b>homeground</b>&nbsp;&nbsp;hello@homegroundbox.com
          </div>
          <div className="hg-email__subject">You&rsquo;re in. Welcome to homeground.</div>
        </div>
        <div className="hg-email__band">
          <img src={A.logoWhite} alt="homeground" />
        </div>
        <div className="hg-email__body hg-email__body--offwhite">
          <div className="hg-email__headline">Thanks for pulling up a chair.</div>
          <div className="hg-email__copy">
            You&rsquo;ll be the first to hear when the doors open — and the first to shop the opening
            collection.
          </div>
          <div className="hg-email__btn">Meet the shop</div>
        </div>
      </div>

      <div className="hg-email">
        <div className="hg-email__head">
          <div className="hg-email__sender">
            <b>homeground</b>&nbsp;&nbsp;hello@homegroundbox.com
          </div>
          <div className="hg-email__subject">You&rsquo;re on the list.</div>
        </div>
        <div className="hg-email__body hg-email__body--cream">
          <div className="hg-email__headline hg-email__headline--italic">
            Something good is brewing.
          </div>
          <div className="hg-email__copy">
            We&rsquo;ll only write when there&rsquo;s something worth opening.
          </div>
        </div>
        <div className="hg-email__strip">
          <img src={A.illCoffee} alt="Bag of coffee" style={{ height: 66 }} />
          <img src={A.illBooks} alt="Stack of children's books" style={{ height: 54 }} />
        </div>
      </div>
    </div>
  )
}

/* ---- Artifact E: insert cards ---- */
function InsertCards() {
  return (
    <div className="hg-cards">
      <div className="hg-cardfig">
        <div className="hg-cs__scroll">
          <div className="hg-cardclip hg-cardclip--welcome">
            <div className="hg-card hg-card--welcome">
              <div className="hg-welcome__inset">
                <div className="hg-welcome__hello-row">
                  <h3 className="hg-welcome__hello">Hello,</h3>
                  <div className="hg-welcome__hello-rule" />
                </div>
                <div className="hg-welcome__eyebrow">Welcome to Homeground</div>
                <div className="hg-welcome__copy">
                  <p>
                    Finally, your box has made it home. This is your very first Homeground box, and
                    it&rsquo;s also our very first. So many things make this moment special, but
                    mostly it&rsquo;s this: the small, meaningful moments you&rsquo;re about to share
                    together.
                  </p>
                  <p>
                    Whether you chose whole roasted or ground coffee beans, we encourage you to
                    expand your craft and tempt your taste buds to try something familiar, but also
                    brand new. Utilize the brew card to make yourself your favorite at-home barista.
                  </p>
                  <p>
                    Homeground was built to bring families together through meaningful experiences.
                    So, what are you waiting for? Let&rsquo;s unwrap your box!
                  </p>
                </div>
                <div className="hg-welcome__footer">
                  <div className="hg-welcome__sign">Coming Home</div>
                  <div className="hg-welcome__sign hg-welcome__sign--sm">
                    we&rsquo;re so glad you&rsquo;re here! Sanjay &amp; Sara
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hg-cs__caption">Welcome card · front · 6 × 4 in</div>
      </div>

      <div className="hg-cs__scroll">
        <div className="hg-cardrow">
          <div className="hg-cardfig">
            <div className="hg-cardclip hg-cardclip--books">
              <div className="hg-card hg-card--books">
                <img
                  className="hg-photocard__img hg-photocard__img--books"
                  src={A.cardBooks}
                  alt="Three children's books photographed on tan paper"
                />
                <div className="hg-books__text">
                  <div className="hg-cardkicker">The Books</div>
                  <h3 className="hg-books__title">
                    <em>Three</em> for the kids
                  </h3>
                  <div className="hg-books__list">
                    <div className="hg-books__item">
                      <span className="hg-books__item-name">Barn in Fall</span>
                      <span className="hg-books__item-fmt">Board book · 0–3</span>
                    </div>
                    <div className="hg-books__item">
                      <span className="hg-books__item-name">Lawrence in the Fall</span>
                      <span className="hg-books__item-fmt">Picture book · 3–6</span>
                    </div>
                    <div className="hg-books__item">
                      <span className="hg-books__item-name">Runaway Pumpkins</span>
                      <span className="hg-books__item-fmt">Picture book · 4–8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hg-cs__caption">Books card · front · 4 × 6 in</div>
          </div>

          <div className="hg-cardfig">
            <div className="hg-cardclip hg-cardclip--coffee">
              <div className="hg-card hg-card--coffee">
                <img
                  className="hg-photocard__img hg-photocard__img--coffee"
                  src={A.cardCoffee}
                  alt="Infusco coffee bag photographed on tan paper"
                />
                <div className="hg-coffee__text">
                  <div className="hg-cardkicker">The Coffee</div>
                  <h3 className="hg-coffee__name">Alejandro Reynoso</h3>
                  <div className="hg-coffee__farm">Finca La Colina</div>
                  <div className="hg-coffee__roaster">
                    Infusco Coffee Roasters
                    <br />
                    Sawyer, Michigan
                  </div>
                </div>
              </div>
            </div>
            <div className="hg-cs__caption">Coffee card · front · 6 × 4 in</div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---- Artifact F: outcome system panel ---- */
function OutcomePanel() {
  const circles = [
    'var(--hg-lake-blue)',
    'var(--hg-sky-blue)',
    'var(--hg-forest-green)',
    'var(--hg-accent-gold)',
    'var(--hg-sand)',
    'var(--hg-cream)',
  ]
  return (
    <div className="hg-outcome">
      <img className="hg-outcome__logo" src={A.logoWhite} alt="homeground" />
      <div className="hg-outcome__rule" />
      <div className="hg-outcome__circles">
        {circles.map((c, i) => (
          <div className="hg-outcome__circle" key={i} style={{ background: c }} />
        ))}
      </div>
      <div className="hg-outcome__bottom">
        <div className="hg-outcome__caption">
          One system — storefront,
          <br />
          email, print &amp; packaging
        </div>
        <div className="hg-outcome__ills">
          <img src={A.illBooks} alt="Stack of children's books" style={{ height: 60 }} />
          <img src={A.illNovel} alt="Hardcover novel" style={{ height: 76 }} />
          <img src={A.illCoffee} alt="Bag of coffee" style={{ height: 74 }} />
        </div>
      </div>
    </div>
  )
}

export default function HomegroundCaseStudy() {
  const { theme } = useTheme()

  useEffect(() => {
    document.title = `${item.company} | Sanjay Swamidass`
    window.scrollTo(0, 0)
  }, [])

  const masthead = theme === 'dark' ? A.logoWhite : A.logoBlack

  return (
    <div className="hg-cs">
      <CaseStudyNav />

      <div className="hg-cs__shell">
        <img className="hg-cs__masthead" src={masthead} alt="Homeground" />
        <h1 className="sr-only">Homeground</h1>
        <dl className="hg-cs__meta">
          <div><dt>Role</dt><dd>{item.role}</dd></div>
          <div><dt>Timeline</dt><dd>{item.duration}</dd></div>
          <div><dt>Expertise</dt><dd>{item.tools}</dd></div>
          <div><dt>Team</dt><dd>{item.team}</dd></div>
        </dl>
        <hr className="hg-cs__rule" />

        <div className="hg-cs__lede">
          <p className="hg-cs__lede-lead">
            Homeground is a nature-inspired subscription box built around a simple idea: slow down,
            gather around something intentional. Each box brings together a curated children's book,
            an adult read, a featured Great Lakes coffee roaster, and seasonal goods, all tied to a
            central theme.
          </p>
          <p className="hg-cs__lede-sub">
            I co-founded it with my wife Sara. I designed everything from the name up: brand
            identity, Shopify storefront, email infrastructure, and the pre-launch experience that
            had to exist before a single box could ship.
          </p>
        </div>

        <section className="hg-cs__section">
          <div className="hg-cs__eyebrow">Background</div>
          <h2 className="hg-cs__heading">Starting from a blank canvas</h2>
          <p className="hg-cs__body">
            Most design projects start with something: a brief, a style guide, an existing direction.
            Homeground started with a conversation. We had a clear emotional vision for what the brand
            should feel like, but nothing built: no identity, no color system, no store, no audience.
          </p>
          <p className="hg-cs__body">
            The design challenge wasn't just to make things look good. It was to construct a brand
            world coherent enough that a stranger could land on the site and immediately understand
            what Homeground was and why it was worth subscribing to. And it had to work across every
            touchpoint at once. There was no room to figure out the logo first, then the store, then
            the emails. Everything had to speak the same language from the start.
          </p>
        </section>

        <section className="hg-cs__section">
          <div className="hg-cs__eyebrow">Audience</div>
          <h2 className="hg-cs__heading">The person we were designing for</h2>
          <p className="hg-cs__body">
            The Homeground subscriber values ritual. They're parents who read alongside their kids,
            adults who treat coffee as a practice rather than a habit, people who find meaning in
            things made with intention: a small-batch roast, a thoughtfully selected book, a seasonal
            item tied to where they live.
          </p>
          <p className="hg-cs__body">
            They weren't looking for convenience. They were looking for connection. That insight
            shaped everything. The brand couldn't be loud or transactional. It had to feel like a
            recommendation from someone with taste.
          </p>
        </section>

        <section className="hg-cs__section">
          <div className="hg-cs__eyebrow">My role</div>
          <h2 className="hg-cs__heading">Co-founder, sole designer</h2>
          <p className="hg-cs__body">
            Sara handled operations and product curation. I handled everything the customer sees. That
            meant naming, visual identity, information architecture, Shopify storefront design and
            theme development, email campaign design, and the pre-launch infrastructure.
          </p>
        </section>

        <section className="hg-cs__section">
          <div className="hg-cs__eyebrow">Brand identity</div>
          <h2 className="hg-cs__heading">Building the world</h2>
          <p className="hg-cs__body">
            The identity started with the name, Homeground, and the associations it carries: the
            ground beneath your feet, home as a place you return to, the grounds in a coffee cup. From
            that I built a visual language rooted in the natural world: a botanical illustration
            system, an earthy palette anchored in deep greens and warm neutrals, and typography that
            balanced warmth with literary credibility.
          </p>
          <BrandSystemCard />
          <p className="hg-cs__body">
            Every element was codified into a living style guide: color tokens, type scale,
            illustration usage rules, logo clearance, and voice guidelines, so the brand could grow
            without drifting.
          </p>
        </section>

        <section className="hg-cs__section">
          <div className="hg-cs__eyebrow">Storefront</div>
          <h2 className="hg-cs__heading">Getting out of the brand's way</h2>
          <p className="hg-cs__body">
            The Shopify storefront was built on the Horizon theme, rebuilt to reflect the Homeground
            brand system. I designed and developed six core pages: homepage, subscribe, FAQ, About
            Us, manage subscription, and a seasonal landing page.
          </p>
          <p className="hg-cs__body">
            The subscribe page was the most considered. It had to answer the three questions every
            prospective subscriber has: what's in it, how much does it cost, how do I cancel. Clear
            hierarchy, honest copy, and enough warmth to make the decision feel good rather than
            transactional.
          </p>
          <div className="hg-cs__figure">
            <StorefrontMock />
            <div className="hg-cs__caption">Homepage · Horizon theme, rebuilt</div>
          </div>
          <p className="hg-cs__body">
            The illustration system carried onto the homepage: one card per thing in the box, in the
            order a subscriber opens it. Hand-inked art, one line of honest copy, no badges or price
            bait.
          </p>
        </section>

        <section className="hg-cs__section">
          <div className="hg-cs__eyebrow">Pre-launch</div>
          <h2 className="hg-cs__heading">Building an audience before the doors opened</h2>
          <p className="hg-cs__body">
            Before the store launched, the priority was audience. I designed and built a pre-launch
            email capture page, a standalone experience that conveyed the full brand and collected
            sign-ups before anything was for sale. One page, one scroll, and it had to do the whole job.
          </p>
          <div className="hg-cs__figure">
            <CaptureMock />
            <div className="hg-cs__caption">Pre-launch capture page · one scroll</div>
          </div>
          <p className="hg-cs__body">
            Email infrastructure was built on Omnisend: welcome flows, subscriber confirmation,
            campaign templates, and full DNS authentication setup (SPF, DKIM, DMARC) to ensure
            deliverability from day one. Every campaign followed the same visual system as the
            storefront: consistent type, consistent color, consistent voice.
          </p>
          <div className="hg-cs__scroll">
            <EmailMocks />
          </div>
          <div className="hg-cs__caption">Welcome flow · confirmation and nurture</div>
        </section>

        <section className="hg-cs__section">
          <div className="hg-cs__eyebrow">Print</div>
          <h2 className="hg-cs__heading">The cards inside the box</h2>
          <p className="hg-cs__body">
            The first box shipped with a set of double-sided insert cards: a welcome letter, one card
            for the children's books, one for the adult novel, one for the coffee. Same type, same
            palette, same voice as the store, printed on matte uncoated 16pt stock, 6 × 4 in
            landscape and 4 × 6 in portrait.
          </p>
          <InsertCards />
          <p className="hg-cs__body">
            Each back carried the reason for the pick: why the books were chosen, what to do with them
            together, the farm and the roast, and a brew method. The referral code sat in a
            sand-colored panel at the bottom, the only ask on the card.
          </p>
        </section>

        <section className="hg-cs__section hg-cs__section--last">
          <div className="hg-cs__eyebrow">Outcome</div>
          <h2 className="hg-cs__heading">Owning all of it</h2>
          <p className="hg-cs__body">
            By the time the store opened, every customer touchpoint was live and cohesive. The
            pre-launch list gave us a warm audience for the first order push.
          </p>
          <OutcomePanel />
          <p className="hg-cs__body">
            Homeground is the project I'm most invested in, and the clearest picture of what I do when
            nobody's constraining the brief. Every decision, from the name to the email footer, was
            mine, and I made it by hand.
          </p>
        </section>

        <div className="hg-cs__back">
          <Link to="/work">&larr; All work</Link>
        </div>
      </div>

      <CaseStudyFooter />
    </div>
  )
}
