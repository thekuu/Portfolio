import { motion } from 'motion/react';
import { ArrowRight, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="w-16 h-1 bg-foreground mx-auto mb-12" />
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-none">
            LET'S BUILD<br/>SOMETHING.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-sans">
            Currently open for new opportunities and interesting projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-12"
        >
          <a 
            href="mailto:zekaryasgeremew@gmail.com"
            className="group flex items-center justify-center gap-4 text-xs sm:text-lg md:text-2xl font-mono tracking-[0.1em] md:tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors hoverable w-full sm:w-auto py-4 px-2 relative"
          >
            <span className="break-all text-center">zekaryasgeremew@gmail.com</span>
            <ArrowRight className="group-hover:translate-x-4 transition-transform shrink-0 w-5 h-5 md:w-8 md:h-8" />
            
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-border transition-colors"></span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground transition-all duration-500 group-hover:w-full"></span>
          </a>
          
          <div className="flex gap-8 mt-8">
            <SocialLink href="https://github.com/thekuu" icon={<Github />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/zekaryasgeremew" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="#" icon={<ExternalLink />} label="Resume" />
          </div>
        </motion.div>

      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors hoverable"
    >
      <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center bg-muted/50 hover:bg-muted transition-colors">
        {icon}
      </div>
      <span className="font-mono text-xs tracking-widest uppercase">{label}</span>
    </a>
  );
}
