import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const technologies = {
  Frontend: [
    { name: 'React', desc: 'Component architecture, Hooks, Context, ecosystem.' },
    { name: 'Next.js', desc: 'SSR, SSG, API routes, App router, optimization.' },
    { name: 'TypeScript', desc: 'Type safety, interfaces, generics, scalability.' },
    { name: 'Tailwind CSS', desc: 'Utility-first design, custom themes, responsiveness.' }
  ],
  Backend: [
    { name: 'Node.js', desc: 'Event-driven architecture, APIs, microservices.' },
    { name: 'Express', desc: 'Middleware, routing, RESTful API design.' },
    { name: 'REST APIs', desc: 'Resource modeling, status codes, authentication.' }
  ],
  Databases: [
    { name: 'MongoDB', desc: 'Document modeling, aggregations, indexing.' },
    { name: 'PostgreSQL', desc: 'Relational design, complex queries, ACID compliance.' }
  ],
  Infrastructure: [
    { name: 'Git', desc: 'Version control, branching strategies, collaboration.' },
    { name: 'Vercel', desc: 'Serverless deployments, CI/CD, edge functions.' },
    { name: 'Render', desc: 'Containerized deployments, background workers.' }
  ]
};

export default function Stack() {
  const [activeTech, setActiveTech] = useState<{name: string, desc: string, category: string} | null>(null);

  const renderDetailBox = (category: string) => {
    // Default to putting the prompt under Frontend if nothing is selected
    const isDefaultPlacement = !activeTech && category === 'Frontend';
    const isActivePlacement = activeTech?.category === category;
    
    if (!isDefaultPlacement && !isActivePlacement) return null;

    return (
      <motion.div
        layout
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden mt-6"
      >
        <div className="p-6 lg:p-8 border border-border rounded-sm bg-background/50 flex flex-col justify-center relative min-h-[160px]">
          <AnimatePresence mode="wait">
            {activeTech ? (
              <motion.div
                key={activeTech.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col gap-4"
              >
                <h3 className="text-2xl lg:text-3xl font-serif text-foreground">{activeTech.name}</h3>
                <p className="text-base lg:text-lg text-muted-foreground font-sans leading-relaxed">{activeTech.desc}</p>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">Used in selected projects</p>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-zinc-600" />
                    <div className="w-2 h-2 rounded-full bg-zinc-700" />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-muted-foreground font-mono text-sm tracking-widest uppercase text-center my-auto"
              >
                Select or hover over a technology<br />to see details
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-8 text-balance">The Stack</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A refined collection of tools and technologies I use to build scalable digital products.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12 lg:gap-16">
          {Object.entries(technologies).map(([category, items], idx) => (
            <motion.div 
              key={category}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <h2 className="font-mono text-sm tracking-widest text-muted-foreground uppercase mb-6 border-b border-border pb-2">{category}</h2>
              <div className="flex flex-wrap gap-3">
                {items.map(tech => (
                  <button
                    key={tech.name}
                    onMouseEnter={() => setActiveTech({ ...tech, category })}
                    onClick={() => setActiveTech({ ...tech, category })}
                    className={`px-5 py-2 border rounded-full font-sans transition-all hoverable ${
                      activeTech?.name === tech.name 
                        ? 'border-foreground bg-foreground text-background' 
                        : 'border-border text-foreground hover:text-foreground hover:border-foreground hover:bg-muted'
                    }`}
                  >
                    {tech.name}
                  </button>
                ))}
              </div>
              
              <AnimatePresence>
                {renderDetailBox(category)}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
