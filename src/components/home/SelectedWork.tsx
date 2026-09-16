import { motion } from 'motion/react';
import { projects } from '@/data/projects';
import { Link } from 'react-router-dom';

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-4">Selected Work</h2>
            <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">Three products. Three different problems.</p>
          </div>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col gap-6"
    >
      <div className="flex justify-between items-end border-b border-border pb-4 mb-4">
        <div className="font-mono text-xs text-muted-foreground tracking-widest">{project.id}</div>
        <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase">{project.category}</div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-4 flex flex-col justify-between h-full order-2 lg:order-1">
          <div>
            <Link to={`/work/${project.slug}`} className="hoverable" data-cursor="READ">
              <h3 className="text-3xl md:text-5xl font-serif mb-6 group-md:hover:text-foreground transition-colors">{project.title}</h3>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-8">{project.description}</p>
            
            <ul className="flex flex-wrap gap-2 mb-12">
              {project.technologies.slice(0, 4).map((tech: string) => (
                <li key={tech} className="text-xs font-mono px-3 py-1 border border-border rounded-full text-muted-foreground">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          
          <Link 
            to={`/work/${project.slug}`}
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider hoverable"
            data-cursor="READ"
          >
            View case study 
            <motion.span
              className="inline-block"
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              →
            </motion.span>
          </Link>
        </div>
        
        <div className="lg:col-span-8 overflow-hidden rounded-sm bg-muted aspect-[4/3] order-1 lg:order-2">
          <Link to={`/work/${project.slug}`} className="hoverable project-card block w-full h-full">
            <motion.div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Optional overlay for better contrast if images are bright */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
