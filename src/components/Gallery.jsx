import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';
import HeartDivider from './HeartDivider';
import content from '../content';
import './Gallery.css';

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function Gallery() {
  const { title, subtitle, photos } = content.gallery;
  const [[index, direction], setState] = useState([0, 0]);

  const go = (newDirection) => {
    setState(([current]) => {
      const next = (current + newDirection + photos.length) % photos.length;
      return [next, newDirection];
    });
  };

  const photo = photos[index];

  return (
    <section className="section gallery" id="gallery">
      <Reveal direction="up">
        <h2 className="section-title">{title}</h2>
      </Reveal>
      <Reveal direction="up" delay={0.1}>
        <p className="section-subtitle">{subtitle}</p>
        <HeartDivider />
      </Reveal>

      <Reveal direction="scale" delay={0.1} className="carousel">
        <button
          type="button"
          className="carousel-arrow carousel-arrow--left"
          onClick={() => go(-1)}
          aria-label="Foto anterior"
        >
          ‹
        </button>

        <div className="carousel-frame">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.figure
              key={index}
              className="carousel-slide"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={photo.src} alt={photo.alt} />
              <figcaption>{photo.caption}</figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <button
          type="button"
          className="carousel-arrow carousel-arrow--right"
          onClick={() => go(1)}
          aria-label="Foto siguiente"
        >
          ›
        </button>
      </Reveal>

      <div className="carousel-dots">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            className={`carousel-dot ${i === index ? 'is-active' : ''}`}
            onClick={() => setState([i, i > index ? 1 : -1])}
            aria-label={`Ir a la foto ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
