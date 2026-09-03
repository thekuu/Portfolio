import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '@/data/projects';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-serif mb-4">Project not found</h1>
        <Link to="/" className="text-muted-foreground hover:text-foreground underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        {/* Back Link */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link to="/#work" className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground hoverable">
            <ArrowLeft size={16} /> BACK TO WORK
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="font-mono text-sm tracking-widest text-muted-foreground mb-6 uppercase">{project.category}</div>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">{project.title}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">{project.description}</p>
          
          <div className="flex flex-wrap gap-4 mt-10">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-foreground text-background font-mono text-sm tracking-widest uppercase hover:opacity-80 transition-colors hoverable rounded-sm">
              <ExternalLink size={16} /> Live Demo
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-border bg-muted/50 hover:bg-muted transition-colors font-mono text-sm tracking-widest uppercase hoverable rounded-sm">
              <Github size={16} /> GitHub
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full aspect-[16/9] bg-muted mb-24 rounded-sm overflow-hidden border border-border"
        >
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          
          {/* Metadata Sidebar */}
          <div className="md:col-span-4 flex flex-col gap-12 order-2 md:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4">Technologies</h3>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <li key={tech} className="text-xs font-mono px-3 py-1 bg-muted border border-border text-foreground rounded-full">{tech}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4">Key Features</h3>
              <ul className="flex flex-col gap-3 text-foreground font-sans">
                {project.features.map(feature => (
                  <li key={feature} className="flex gap-3">
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-8 flex flex-col gap-16 order-1 md:order-2">
            {project.overview && (
              <Section title="Overview">
                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {project.overview}
                </p>
              </Section>
            )}

            {project.problem && (
              <Section title="The Problem">
                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {project.problem}
                </p>
              </Section>
            )}

            {project.solution && (
              <Section title="The Solution & Architecture">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 whitespace-pre-wrap">
                  {project.solution}
                </p>
                
                {/* Architecture Diagram Placeholder */}
                <div className="w-full bg-muted border border-border p-8 rounded-sm font-mono text-xs md:text-sm flex flex-col text-muted-foreground">
                  <div className="text-center mb-8 tracking-widest">SYSTEM ARCHITECTURE</div>
                  
                  {/* CSS Based Architecture Diagram */}
                  <div className="flex flex-col items-center w-full select-none">
                    {/* USER */}
                    <div className="px-4 py-2 rounded bg-muted/50 border border-border/50 text-muted-foreground text-xs tracking-wider">
                      USER
                    </div>
                    
                    <div className="w-[1px] h-6 bg-zinc-700"></div>
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" className="text-zinc-700"><path d="M4 6L0 0H8L4 6Z" fill="currentColor"/></svg>
                    
                    {/* FRONTEND */}
                    <div className="px-6 py-3 rounded bg-muted border border-border text-center w-48 mt-1 shadow-sm">
                      <div className="text-foreground font-semibold mb-1">FRONT-END</div>
                      <div className="text-muted-foreground text-xs">{project.technologies.includes('Next.js') ? 'Next.js' : 'React / Vite'}</div>
                    </div>

                    <div className="w-[1px] h-6 bg-zinc-700"></div>
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" className="text-zinc-700"><path d="M4 6L0 0H8L4 6Z" fill="currentColor"/></svg>

                    {/* API */}
                    <div className="px-6 py-3 rounded bg-muted border border-border text-center w-48 mt-1 shadow-sm">
                      <div className="text-foreground font-semibold mb-1">API</div>
                      <div className="text-muted-foreground text-xs">{project.technologies.includes('Node.js') || project.technologies.includes('Express') ? 'Node / REST' : 'Serverless / API Routes'}</div>
                    </div>

                    <div className="w-[1px] h-6 bg-zinc-700"></div>
                    
                    {/* Horizontal Branch */}
                    <div className="w-[148px] h-[1px] bg-zinc-700"></div>
                    
                    <div className="w-[148px] relative h-6">
                      {/* Left Drop */}
                      <div className="absolute left-0 -translate-x-1/2 flex flex-col items-center">
                        <div className="w-[1px] h-6 bg-zinc-700"></div>
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" className="text-zinc-700"><path d="M4 6L0 0H8L4 6Z" fill="currentColor"/></svg>
                      </div>
                      {/* Right Drop */}
                      <div className="absolute right-0 translate-x-1/2 flex flex-col items-center">
                        <div className="w-[1px] h-6 bg-zinc-700"></div>
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" className="text-zinc-700"><path d="M4 6L0 0H8L4 6Z" fill="currentColor"/></svg>
                      </div>
                    </div>

                    {/* Databases */}
                    <div className="flex justify-center gap-[32px] w-full mt-1">
                      <div className="px-4 py-3 w-[116px] rounded bg-muted border border-border text-center flex flex-col items-center justify-center shadow-sm">
                        <div className="text-foreground font-semibold">Database</div>
                      </div>
                      <div className="px-4 py-3 w-[116px] rounded bg-muted border border-border text-center flex flex-col items-center justify-center shadow-sm">
                        <div className="text-foreground font-semibold">Storage</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Section>
            )}

            <Section title="Challenges & Learnings">
              <div className="flex flex-col gap-8">
                <div>
                  <h4 className="text-xl font-serif text-foreground mb-4">Challenges</h4>
                  <ul className="flex flex-col gap-3 text-lg text-muted-foreground">
                    {project.challenges.map(c => (
                      <li key={c} className="flex gap-3">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-serif text-foreground mb-4">What I Learned</h4>
                  <ul className="flex flex-col gap-3 text-lg text-muted-foreground">
                    {project.lessons.map(l => (
                      <li key={l} className="flex gap-3">
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>
          </div>

        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col gap-6"
    >
      <h2 className="text-3xl font-serif text-foreground">{title}</h2>
      {children}
    </motion.div>
  );
}
