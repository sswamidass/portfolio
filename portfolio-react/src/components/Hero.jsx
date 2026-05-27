export default function Hero() {
  function scrollToWork(e) {
    e.preventDefault()
    const target = document.querySelector('[data-section="work"]')
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  function scrollToContact(e) {
    e.preventDefault()
    const target = document.querySelector('[data-section="contact"]')
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="hero">
      <div className="hero-inner">
        <div className="hero-tags">
          <span>Product Design</span>
          <span className="tag-dot"></span>
          <span>Front-End Development</span>
        </div>

        <h1 className="hero-headline">
          Hi, I'm Sanjay — Senior Product Designer crafting products people love to use.
        </h1>

        <p className="hero-sub">
          Experienced in the full design cycle — from research and wireframes to high-fidelity UI and front-end code. Currently at GE Healthcare.
        </p>

        <div className="hero-ctas">
          <a href="#" className="hero-cta-primary" onClick={scrollToContact}>
            Let's Talk
          </a>
          <a href="#" className="hero-cta-secondary" onClick={scrollToWork}>
            View Work <span className="cta-arrow">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
