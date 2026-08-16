import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import content from '../content';
import './EnvelopeIntro.css';

export default function EnvelopeIntro() {
  const [isOpen, setIsOpen] = useState(false);
  const [flapDone, setFlapDone] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
  };

  return (
    <section className="envelope-section" id="intro">
      <div className={`envelope-wrapper ${isOpen ? 'is-open' : ''}`}>
        <div className="envelope-back">
          <div className="envelope-back-fold" />
        </div>

        <AnimatePresence>
          {flapDone && (
            <motion.div
              className="letter-paper"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: -18, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="letter-text">{content.intro.message}</p>
              <span className="letter-heart">♡</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="envelope-flap"
          animate={{ rotateX: isOpen ? -178 : 0 }}
          transition={{ duration: 0.9, ease: [0.45, 0, 0.55, 1] }}
          onAnimationComplete={() => {
            if (isOpen) setFlapDone(true);
          }}
        />

        {!isOpen && (
          <button
            type="button"
            className="open-button"
            onClick={handleOpen}
            aria-label="Abrir la carta"
          >
            <span>Abrir</span>
          </button>
        )}
      </div>

      <p className="envelope-caption">
        {isOpen ? 'Seguí bajando…' : 'Tenés una carta esperándote'}
      </p>
    </section>
  );
}
