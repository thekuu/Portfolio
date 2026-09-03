import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-8 text-balance">A little about me.</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-16">
            <div className="lg:col-span-7 flex flex-col gap-8 text-xl text-muted-foreground font-sans leading-relaxed">
              <p>
                I am Zekaryas Geremew, a Software Engineer with a focus on building robust digital products. 
                My work spans across the frontend, backend, and into system architecture.
              </p>
              <p>
                I believe that great software is not just about writing code—it's about understanding 
                the underlying problem, designing systems that scale, and crafting interfaces that feel intuitive.
              </p>
              <p>
                While my foundation is deeply rooted in frontend and full-stack development, my long-term 
                direction is focused on <span className="text-foreground font-medium">Solution Architecture</span>, 
                where I can influence how entire platforms are conceived, designed, and operated.
              </p>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="aspect-[3/4] bg-muted border border-border rounded-sm relative overflow-hidden group shadow-lg">
                <img
                  src="/portrait.jpeg"
                  alt="Zekaryas Geremew — Software Engineer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 md:group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    // Fallback to github avatar if local image not found
                    const target = e.currentTarget;
                    if (!target.src.includes('github_avatar')) {
                      target.src = '/github_avatar.png';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono tracking-widest text-foreground/80 uppercase pointer-events-none">
                  <span>Zekaryas Geremew</span>
                  <span>Software Engineer</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 border-t border-border pt-16"
        >
          <h2 className="text-3xl font-serif mb-12">The Journey</h2>
          
          <div className="flex flex-col gap-0 max-w-2xl">
            <TimelineItem title="Software Engineering" isActive={false} />
            <TimelineItem title="Full-Stack Development" isActive={false} />
            <TimelineItem title="Project Management" isActive={false} />
            <TimelineItem title="Systems Thinking" isActive={true} />
            <TimelineItem title="Solution Architecture" isActive={false} isLast />
          </div>
        </motion.div>
        
        <div className="mt-24">
          <Link 
            to="/stack" 
            className="group inline-flex items-center gap-4 text-xl font-mono border-b border-border pb-2 md:hover:border-foreground transition-colors hoverable text-foreground md:hover:text-foreground"
          >
            Explore my technical stack
            <ArrowRight className="md:md:group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ title, isActive, isLast = false }: { title: string, isActive: boolean, isLast?: boolean }) {
  return (
    <div className="flex gap-8 group">
      <div className="flex flex-col items-center">
        <div className={`w-3 h-3 rounded-full transition-colors ${isActive ? 'bg-foreground' : 'bg-muted group-hover:bg-foreground/50'}`} />
        {!isLast && <div className="w-[1px] h-20 bg-muted group-hover:bg-border transition-colors" />}
      </div>
      <div className={`text-xl font-serif transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground group-md:hover:text-foreground'}`}>
        {title}
      </div>
    </div>
  );
}
