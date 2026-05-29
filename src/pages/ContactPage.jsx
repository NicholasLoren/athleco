import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="crumbs"><Link to="/">Home</Link><span className="sep">/</span><span>Contact</span></div>
          <Reveal as="div" className="eyebrow">Get In Touch</Reveal>
          <Reveal as="h1" className="display-title" delay={60} style={{ marginTop: 18 }}>Let's <em>Talk.</em></Reveal>
          <Reveal as="p" className="lede" delay={120} style={{ marginTop: 22 }}>
            Athlete, coach, school, federation or sponsor — whoever you are, there's a
            conversation worth having. We reply within two working days.
          </Reveal>
        </div>

        <div className="contact-grid" style={{ paddingBottom: 40 }}>
          <Reveal>
            <div className="glass-strong" style={{ padding: 36 }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(232,123,30,0.15)', border: '1px solid var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'var(--orange)' }}>
                    <Icon name="check" size={30} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800, textTransform: 'uppercase' }}>Message Sent</h3>
                  <p className="body-copy" style={{ marginTop: 12 }}>Thanks for reaching out. We'll be in touch within two working days.</p>
                  <button className="btn btn-glass" style={{ marginTop: 24 }} onClick={() => setSent(false)}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="form-field"><label>First Name</label><input required placeholder="Jane" /></div>
                    <div className="form-field"><label>Last Name</label><input required placeholder="Akello" /></div>
                  </div>
                  <div className="form-field"><label>Email</label><input type="email" required placeholder="jane@email.com" /></div>
                  <div className="form-field">
                    <label>I am a…</label>
                    <select required defaultValue="">
                      <option value="" disabled>Select one</option>
                      <option>Athlete</option>
                      <option>Coach / Trainer</option>
                      <option>School / Academy</option>
                      <option>Federation</option>
                      <option>Sponsor / Corporate</option>
                      <option>Media</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-field"><label>Sport (if relevant)</label><input placeholder="e.g. Athletics" /></div>
                  <div className="form-field"><label>Message</label><textarea required placeholder="Tell us about yourself or your organization…"></textarea></div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                    Send Message <Icon name="arrowUpRight" size={16} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <div className="contact-info-row">
                <span className="ic"><Icon name="map" size={22} /></span>
                <div>
                  <div className="t">Visit Us</div>
                  <div className="v">Plot 14, Kira Road</div>
                  <div className="v" style={{ color: 'var(--fg-3)', fontSize: 14 }}>Kampala, Uganda</div>
                </div>
              </div>
              <div className="contact-info-row">
                <span className="ic"><Icon name="mail" size={22} /></span>
                <div>
                  <div className="t">Email Us</div>
                  <div className="v">hello@athleco.ug</div>
                  <div className="v" style={{ color: 'var(--fg-3)', fontSize: 14 }}>talent@athleco.ug</div>
                </div>
              </div>
              <div className="contact-info-row">
                <span className="ic"><Icon name="phone" size={22} /></span>
                <div>
                  <div className="t">Call Us</div>
                  <div className="v">+256 700 000 000</div>
                  <div className="v" style={{ color: 'var(--fg-3)', fontSize: 14 }}>Mon–Fri, 9am–5pm EAT</div>
                </div>
              </div>
              <div className="contact-info-row" style={{ borderBottom: 'none' }}>
                <span className="ic"><Icon name="clock" size={22} /></span>
                <div>
                  <div className="t">Talent Days</div>
                  <div className="v">Every last Saturday</div>
                  <div className="v" style={{ color: 'var(--fg-3)', fontSize: 14 }}>Open combines · all sports welcome</div>
                </div>
              </div>

              <div className="glass" style={{ padding: 28, marginTop: 24 }}>
                <div className="eyebrow">For Athletes</div>
                <p className="body-copy" style={{ marginTop: 12, fontSize: 14.5 }}>
                  Want to be scouted? Bring yourself to any open Talent Day — no registration, no fee.
                  Or send a short video and your details and our scouts will review it.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
