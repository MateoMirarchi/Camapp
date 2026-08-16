import Reveal from './Reveal';
import content from '../content';
import './FinalLetter.css';

export default function FinalLetter() {
  const { title, text, signature } = content.finalLetter;

  return (
    <section className="section section--tinted final-letter" id="final-letter">
      <div className="section-inner">
        <Reveal direction="scale">
          <div className="letter-card">
            <span className="letter-card__quote">“</span>
            <h2 className="section-title">{title}</h2>
            <p className="story-text final-letter__text">{text}</p>
            <p className="final-letter__signature">{signature}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
