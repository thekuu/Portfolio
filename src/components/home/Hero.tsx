import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }} />
      </div>

      <div className="container mx-auto max-w-7xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-medium tracking-tight leading-[0.9] text-balance mb-6">
            SOFTWARE<br />ENGINEER
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12 border-t border-border pt-8">
            <p className="text-lg md:text-xl text-muted-foreground max-w-md text-balance font-sans">
              Building digital products<br/>from interface to architecture.
            </p>
            
            <div className="flex flex-col gap-4 text-sm font-mono tracking-widest text-muted-foreground uppercase">
              <p>Frontend · Backend · Systems</p>
            </div>
          </div>
          
          <div className="mt-16 flex gap-6">
            <Link 
              to="/#work" 
              onClick={() => {
                if (window.location.pathname === '/') {
                  const element = document.getElementById('work');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="group flex items-center gap-2 border border-border bg-muted/50 md:hover:bg-muted px-6 py-3 rounded-full transition-all hoverable"
            >
              Explore Work
              <ArrowRight size={16} className="md:group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="group flex items-center gap-2 text-muted-foreground md:hover:text-foreground transition-colors hoverable">
              Let's Talk
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-6 md:left-12 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground to-transparent relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-foreground absolute top-0"
            animate={{ top: ['-50%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
