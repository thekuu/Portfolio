import { useState } from 'react';
import { motion } from 'motion/react';

export default function SystemMap() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    { id: 'interface', label: 'INTERFACE', desc: 'React, Next.js, UI/UX' },
    { id: 'application', label: 'APPLICATION', desc: 'State, Logic, Routing' },
    { id: 'api', label: 'API', desc: 'REST, GraphQL, Middleware' },
    { id: 'data', label: 'DATA', desc: 'PostgreSQL, MongoDB, Redis' },
    { id: 'architecture', label: 'ARCHITECTURE', desc: 'System Design, Scalability' }
  ];

  return (
    <section className="py-32 px-6 bg-background overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-serif mb-16">The Journey</h2>
        
        <div className="flex flex-col items-center relative py-10">
          {nodes.map((node, index) => (
            <div key={node.id} className="flex flex-col items-center relative z-10 w-full">
              <motion.div
                className={`relative px-8 py-4 border rounded-full font-mono text-sm tracking-widest cursor-pointer transition-all duration-300 w-64 max-w-full hoverable ${
                  activeNode === node.id 
                    ? 'border-white bg-foreground text-background' 
                    : 'border-border bg-background text-muted-foreground hover:border-foreground hover:text-foreground'
                }`}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                whileHover={{ scale: 1.05 }}
              >
                {node.label}
                
                {/* Description Tooltip */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: activeNode === node.id ? 1 : 0,
                    y: activeNode === node.id ? 0 : 10,
                  }}
                  className="absolute left-full ml-8 top-1/2 -translate-y-1/2 w-48 text-left hidden md:block pointer-events-none"
                >
                  <div className="text-xs text-muted-foreground normal-case tracking-normal">{node.desc}</div>
                </motion.div>
              </motion.div>
              
              {/* Connector line */}
              {index < nodes.length - 1 && (
                <div className="h-12 w-[1px] bg-muted my-2 relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 w-full bg-zinc-500"
                    initial={{ height: 0 }}
                    animate={{ height: activeNode === node.id || activeNode === nodes[index+1].id ? '100%' : '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
