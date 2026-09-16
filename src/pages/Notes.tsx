import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const notes = [
  { id: 1, title: 'Building scalable React applications', date: 'Upcoming', category: 'Frontend' },
  { id: 2, title: 'Understanding API architecture', date: 'Upcoming', category: 'Backend' },
  { id: 3, title: 'What I learned building an e-commerce platform', date: 'Upcoming', category: 'Case Study' },
  { id: 4, title: 'Frontend performance principles', date: 'Upcoming', category: 'Performance' },
];

export default function Notes() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-8 text-balance">Notes</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Thoughts on software engineering, architecture, and building digital products.
          </p>
        </motion.div>

        <div className="flex flex-col border-t border-border">
          {notes.map((note, idx) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group py-8 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer hoverable"
            >
              <div className="flex flex-col gap-2">
                <div className="font-mono text-xs tracking-widest text-muted-foreground uppercase">{note.category}</div>
                <h2 className="text-2xl font-serif group-md:hover:text-foreground transition-colors">{note.title}</h2>
              </div>
              
              <div className="flex items-center gap-6 text-muted-foreground font-mono text-sm">
                <span>{note.date}</span>
                <ArrowRight className="opacity-0 -translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all text-foreground" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <div className="inline-block px-6 py-3 border border-dashed border-border text-muted-foreground font-mono text-sm tracking-widest uppercase">
            Articles in progress
          </div>
        </div>
      </div>
    </div>
  );
}
