import { Link } from 'react-router-dom';
import { SPORTS, ATHLETES, NEWS, TESTIMONIALS } from '../data';
import Iso from '../components/Iso';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import SportCard from '../components/SportCard';
import AthleteCard from '../components/AthleteCard';
import NewsCard from '../components/NewsCard';
import Icon from '../components/Icon';

export default function HomePage() {
  const featAthletes = ATHLETES.slice(0, 4);

  return (
    <div className="page-home">
      {/* HERO */}
      <section className="hero">
        {/* floating ISO shapes fill the right half of the hero */}
        <div className="hero-iso-field">
          <div className="floating" style={{ top: '8%', right: '3%', width: 300, height: 345, animationDelay: '0s' }}>
            <Iso sport="football" />
          </div>
          <div className="floating" style={{ top: '48%', right: '16%', width: 240, height: 276, animationDelay: '1.6s' }}>
            <Iso sport="basketball" />
          </div>
          <div className="floating" style={{ top: '6%', right: '26%', width: 170, height: 196, opacity: 0.72, animationDelay: '3s' }}>
            <Iso sport="athletics" />
          </div>
          <div className="floating" style={{ top: '60%', right: '4%', width: 150, height: 173, opacity: 0.55, animationDelay: '2s' }}>
            <Iso sport="volleyball" />
          </div>
        </div>

        <div className="container hero-inner">
          <div className="glass-pill hero-eyebrow">
            <span className="dot"></span>
            <span>Uganda's Sports Development Agency · Est. 2018</span>
          </div>
          <h1>
            Unlock<br />
            <span className="line2">Africa's</span><br />
            <em>Potential.</em>
          </h1>
          <p className="hero-sub">
            Talent is everywhere in Uganda. Structure is not. Athleco is the agency
            that scouts, develops and represents the next generation — from a school
            pitch in Gulu to the world stage.
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Discover Your Talent <Icon name="arrowUpRight" size={16} />
            </Link>
            <Link to="/sports" className="btn btn-glass btn-lg">
              Explore Sports
            </Link>
          </div>
        </div>

        <div className="hero-marquee">
          <div className="track">
            {[0, 1].map(i => (
              <div className="item" key={i}>
                We Identify <span></span> We Develop <span></span> We Promote <span></span>
                Grassroots To Global <span></span> 10 Sports <span></span> 145 Schools <span></span>
                One Uganda <span></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container" style={{ marginTop: 40 }}>
        <Reveal>
          <div className="stats-row">
            {[['380', '+', 'Athletes Tracked'], ['10', '', 'Sports Covered'], ['145', '', 'Partner Schools'], ['12', '', 'Regions Active']].map(([n, e, l], i) => (
              <div className="stat" key={i}>
                <div className="num">{n}<em>{e}</em></div>
                <div className="label">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* WHAT WE DO */}
      <section className="container" style={{ marginTop: 130 }}>
        <SectionHead
          eyebrow="What We Do"
          title={<>The Full <em>Pathway</em><br />For Every Athlete</>}
          sub="Most Ugandan talent is lost between a school pitch and a professional contract. We built the bridge — six connected services under one roof."
        />
        <div className="feature">
          {[
            ['target', 'Scout & Identify', 'Structured talent ID across 145 schools and 12 regions. We find them before age 16, when it matters most.'],
            ['chart', 'Develop & Train', 'Sport-specific academies, an altitude residential, sports science, nutrition and full athlete welfare.'],
            ['trophy', 'Represent & Promote', 'A licensed agency arm: contracts, image rights, brand deals and overseas transfers handled properly.'],
            ['building', 'Build Infrastructure', 'We design and build facilities where the talent actually lives — beyond Kampala, in the regions.'],
            ['flag', 'Run Events', 'Combines, showcase tournaments, talent days and the annual Athleco Awards — 14 events a year.'],
            ['shield', 'Protect & Support', 'Legal counsel, medical care and education management so athletes are people first, talent second.'],
          ].map(([ic, h, p], i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="feature-card">
                <div className="ic"><Icon name={ic} size={26} /></div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SPORTS PREVIEW */}
      <section className="container" style={{ marginTop: 130 }}>
        <SectionHead
          eyebrow="Our Sports"
          title={<>Ten Sports.<br /><em>One Mission.</em></>}
          action={<Link to="/sports" className="btn btn-ghost">All Sports <Icon name="arrow" size={15} /></Link>}
        />
        <div className="card-grid cols-3">
          {SPORTS.slice(0, 6).map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 80}>
              <SportCard sport={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* PATHWAY */}
      <section className="container" style={{ marginTop: 130 }}>
        <SectionHead
          center
          eyebrow="The Athleco Pathway"
          title={<>From Grassroots <em>To Global</em></>}
          sub="A clear five-step journey every Athleco athlete moves through — no more guesswork, no more lost talent."
        />
        <Reveal>
          <div className="pathway">
            {[
              ['01', 'Scout', 'Spotted at a school combine or talent day.'],
              ['02', 'Develop', 'Academy or residential placement with full support.'],
              ['03', 'Compete', 'Showcase tournaments and national pathways.'],
              ['04', 'Represent', 'Agency signs, contracts and brand deals follow.'],
              ['05', 'Global', 'Professional or overseas career, managed end-to-end.'],
            ].map(([n, h, p], i) => (
              <div className="pathway-step" key={i}>
                <div className="n">{n}</div>
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FEATURED ATHLETES */}
      <section className="container" style={{ marginTop: 130 }}>
        <SectionHead
          eyebrow="The Roster"
          title={<>Faces Of The <em>Movement</em></>}
          action={<Link to="/athletes" className="btn btn-ghost">All Athletes <Icon name="arrow" size={15} /></Link>}
        />
        <div className="card-grid cols-4">
          {featAthletes.map((a, i) => (
            <Reveal key={a.id} delay={(i % 4) * 70}>
              <AthleteCard athlete={a} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container" style={{ marginTop: 130 }}>
        <div className="card-grid cols-2">
          {TESTIMONIALS.slice(0, 2).map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="testi">
                <div className="quote">{t.quote}</div>
                <div className="who">
                  <div className="n">{t.name}</div>
                  <div className="r">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* JOURNAL PREVIEW */}
      <section className="container" style={{ marginTop: 130 }}>
        <SectionHead
          eyebrow="From The Journal"
          title={<>Latest <em>Stories</em></>}
          action={<Link to="/journal" className="btn btn-ghost">All Stories <Icon name="arrow" size={15} /></Link>}
        />
        <div className="card-grid cols-3">
          {NEWS.slice(0, 3).map((n, i) => (
            <Reveal key={n.id} delay={(i % 3) * 80}>
              <NewsCard news={n} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container" style={{ marginTop: 130, paddingBottom: 0 }}>
        <Reveal>
          <div className="cta-band">
            <div className="eyebrow centered" style={{ justifyContent: 'center', marginBottom: 22 }}>Join The Movement</div>
            <h2 className="section-title" style={{ maxWidth: 800, margin: '0 auto' }}>
              Your Talent Deserves <em>A Platform</em>
            </h2>
            <p className="lede" style={{ margin: '22px auto 36px', textAlign: 'center' }}>
              Athlete, coach, school or partner — there's a place for you in what we're building.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">Get Started <Icon name="arrowUpRight" size={16} /></Link>
              <Link to="/programs" className="btn btn-glass btn-lg">Our Programs</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
