import Reveal from './Reveal';
import HeartDivider from './HeartDivider';
import content from '../content';
import './Reunion.css';

export default function Reunion() {
  const { title, mapImage, mapAlt, coordinates, text } = content.reunion;

  return (
    <section className="section section--tinted reunion" id="reunion">
      <div className="section-inner">
        <Reveal direction="up">
          <h2 className="section-title">{title}</h2>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <HeartDivider />
        </Reveal>

        <div className="reunion__grid">
          <Reveal direction="left" className="reunion__text-wrap">
            <p className="story-text">{text}</p>
            <div className="coordinates-badge">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7.05 11.36 7.35 11.62a1 1 0 0 0 1.3 0C13.95 21.36 21 15.25 21 10c0-4.42-3.58-8-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
              <span>{coordinates}</span>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15} className="reunion__map-wrap">
            <div className="map-frame">
              <img src={mapImage} alt={mapAlt} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
