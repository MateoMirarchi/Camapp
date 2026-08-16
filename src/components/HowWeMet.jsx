import Reveal from './Reveal';
import HeartDivider from './HeartDivider';
import content from '../content';
import './HowWeMet.css';

export default function HowWeMet() {
  const { title, photo, photoAlt, text } = content.howWeMet;

  return (
    <section className="section how-we-met" id="how-we-met">
      <Reveal direction="up">
        <h2 className="section-title">{title}</h2>
      </Reveal>
      <Reveal direction="up" delay={0.1}>
        <HeartDivider />
      </Reveal>

      <div className="how-we-met__grid">
        <Reveal direction="left" className="how-we-met__photo-wrap">
          <div className="polaroid">
            <img src={photo} alt={photoAlt} />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.15} className="how-we-met__text-wrap">
          <p className="story-text">{text}</p>
        </Reveal>
      </div>
    </section>
  );
}
