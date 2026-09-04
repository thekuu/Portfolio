import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function BuiltNotJustDesigned() {
  const [activeTab, setActiveTab] = useState('performance');

  return (
    <section className="py-32 px-6 md:px-12 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Built, Not Just Designed</h2>
          <p className="text-muted-foreground font-sans max-w-xl">
            A look under the hood. Demonstrating frontend engineering principles, component architecture, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Controls */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <TabButton 
              active={activeTab === 'performance'} 
              onClick={() => setActiveTab('performance')}
              title="Performance Metrics"
            />
            <TabButton 
              active={activeTab === 'architecture'} 
              onClick={() => setActiveTab('architecture')}
              title="API Architecture"
            />
            <TabButton 
              active={activeTab === 'component'} 
              onClick={() => setActiveTab('component')}
              title="Component Logic"
            />
          </div>

          {/* Display Area */}
          <div className="lg:col-span-8 bg-muted/50 border border-border rounded-sm p-8 min-h-[400px] flex items-center justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              {activeTab === 'performance' && <PerformanceDisplay key="perf" />}
              {activeTab === 'architecture' && <ArchitectureDisplay key="arch" />}
              {activeTab === 'component' && <ComponentDisplay key="comp" />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function TabButton({ active, onClick, title }: { active: boolean, onClick: () => void, title: string }) {
  return (
    <button 
      onClick={onClick}
      className={`text-left px-6 py-4 border rounded-sm transition-all hoverable ${
        active ? 'border-foreground bg-muted text-foreground' : 'border-border text-muted-foreground md:hover:text-foreground hover:border-border'
      }`}
    >
      <span className="font-mono text-sm tracking-widest uppercase">{title}</span>
    </button>
  );
}

function PerformanceDisplay() {
  const scores = [
    { label: 'Performance', score: 98 },
    { label: 'Accessibility', score: 100 },
    { label: 'Best Practices', score: 100 },
    { label: 'SEO', score: 100 }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="w-full max-w-md"
    >
      <div className="grid grid-cols-2 gap-8">
        {scores.map((item, i) => (
          <div key={item.label} className="flex flex-col items-center justify-center gap-4">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#27272a" strokeWidth="8" />
                <motion.circle 
                  cx="50" cy="50" r="45" fill="none" stroke="#22c55e" strokeWidth="8"
                  strokeDasharray="283"
                  initial={{ strokeDashoffset: 283 }}
                  animate={{ strokeDashoffset: 283 - (283 * item.score) / 100 }}
                  transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute font-mono text-xl text-green-500">{item.score}</div>
            </div>
            <div className="text-xs font-mono tracking-widest text-muted-foreground uppercase">{item.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ArchitectureDisplay() {
  const flow = ['Request', 'Controller', 'Service', 'Database', 'Response'];
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col md:flex-row items-center gap-4 w-full justify-center font-mono text-xs md:text-sm tracking-widest"
    >
      {flow.map((step, i) => (
        <div key={step} className="flex flex-col md:flex-row items-center gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            className="px-4 py-2 bg-background border border-border rounded text-foreground"
          >
            {step}
          </motion.div>
          {i < flow.length - 1 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (i * 0.2) + 0.1 }}
              className="text-muted-foreground/50 hidden md:block"
            >
              →
            </motion.div>
          )}
          {i < flow.length - 1 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (i * 0.2) + 0.1 }}
              className="text-muted-foreground/50 md:hidden"
            >
              ↓
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  );
}

function ComponentDisplay() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="w-full max-w-lg"
    >
      <div className="bg-[#0d1117] rounded-md border border-border overflow-hidden text-sm">
        <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
          <span className="ml-4 font-mono text-xs text-zinc-400">InteractiveComponent.tsx</span>
        </div>
        <div className="p-6 font-mono text-zinc-300 leading-relaxed overflow-x-auto whitespace-pre">
          <span className="text-pink-400">export function</span> <span className="text-blue-400">InteractiveComponent</span>() {'{\n'}
          {'  '}const [isOpen, setIsOpen] = <span className="text-blue-300">useState</span>(false);{'\n'}
          {'\n'}
          {'  '}return ({'\n'}
          {'    '}&lt;<span className="text-green-400">motion.div</span>{'\n'}
          {'      '}animate={'{isOpen ? "open" : "closed"}'}{'\n'}
          {'      '}onClick={'{\(\) => setIsOpen(!isOpen)}'}{'\n'}
          {'    '}&gt;{'\n'}
          {'      '}Click to interact{'\n'}
          {'    '}&lt;/<span className="text-green-400">motion.div</span>&gt;{'\n'}
          {'  '});{'\n'}
          {'}'}
        </div>
      </div>
    </motion.div>
  );
}
