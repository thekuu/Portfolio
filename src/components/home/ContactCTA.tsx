import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function ContactCTA() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background border-t border-border">
      <div className="container mx-auto max-w-5xl text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-serif mb-8 text-balance"
        >
          HAVE A PROJECT<br />IN MIND?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground font-sans text-xl md:text-2xl mb-12"
        >
          Let's build something useful.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            to="/contact" 
            className="group inline-flex items-center gap-4 text-xl font-mono border-b border-border pb-2 md:hover:border-foreground transition-colors hoverable text-foreground md:hover:text-foreground"
          >
            Get in touch
            <ArrowRight className="md:group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
