import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const steps = [
  { num: "01", title: "Understand", desc: "Understand the problem, users and requirements." },
  { num: "02", title: "Design", desc: "Design the experience and technical approach." },
  { num: "03", title: "Build", desc: "Develop the frontend, backend and integrations." },
  { num: "04", title: "Validate", desc: "Test usability, performance and reliability." },
  { num: "05", title: "Ship", desc: "Deploy, monitor and continuously improve." }
];

export default function HowIBuild() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-background border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-serif mb-20">How I Build</h2>
        
        <div className="flex flex-col gap-12">
          {steps.map((step, index) => (
            <Step key={step.num} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Step({ step, index }: { step: any, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-b border-border pb-12 group hover:border-border transition-colors"
    >
      <div className="md:col-span-2 font-mono text-muted-foreground group-md:hover:text-foreground transition-colors">
        — {step.num}
      </div>
      <div className="md:col-span-4 font-serif text-2xl md:text-3xl group-md:hover:text-foreground transition-colors">
        {step.title}
      </div>
      <div className="md:col-span-6 text-muted-foreground font-sans text-lg group-md:hover:text-foreground transition-colors">
        {step.desc}
      </div>
    </motion.div>
  );
}
