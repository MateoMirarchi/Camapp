import { motion } from 'framer-motion';
import Reveal from './Reveal';
import HeartDivider from './HeartDivider';
import content from '../content';
import './Timeline.css';

export default function Timeline() {
  const { title, subtitle, items } = content.timeline;

  return (
    <section className="section timeline" id="timeline">
      <Reveal direction="up">
        <h2 className="section-title">{title}</h2>
      </Reveal>
      <Reveal direction="up" delay={0.1}>
        <p className="section-subtitle">{subtitle}</p>
        <HeartDivider />
      </Reveal>

      <ol className="timeline-list">
        {items.map((item, i) => (
          <Reveal
            as={motion.li}
            key={item.label}
            direction={i % 2 === 0 ? 'left' : 'right'}
            delay={0.05}
            className="timeline-item"
          >
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <h3 className="timeline-label">{item.label}</h3>
              <p className="timeline-text">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
