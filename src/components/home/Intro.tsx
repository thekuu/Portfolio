import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div style={{ opacity, y }}>
          <p className="text-sm font-mono tracking-widest text-muted-foreground mb-8 uppercase">Introduction</p>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-balance">
            I build digital products.
          </h2>
          
          <div className="mt-8 md:mt-12 text-xl md:text-3xl text-muted-foreground font-sans font-light leading-relaxed max-w-3xl">
            <p className="mb-6">From interfaces people interact with to the systems that power them.</p>
            <p>I enjoy solving problems across the frontend, backend and architecture layers.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
