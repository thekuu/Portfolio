export default function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background mt-20">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-serif tracking-[0.2em] uppercase text-foreground mb-2">ZEKARYAS GEREMEW</h3>
            <p className="text-muted-foreground text-xs font-mono tracking-[0.15em] uppercase">Software Engineer</p>
          </div>
          
          <div className="flex gap-8">
            <a href="https://github.com/thekuu" target="_blank" rel="noopener noreferrer" className="text-xs font-mono tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors hoverable relative group py-1">
              GitHub
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="https://www.linkedin.com/in/zekaryasgeremew" target="_blank" rel="noopener noreferrer" className="text-xs font-mono tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors hoverable relative group py-1">
              LinkedIn
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] font-mono tracking-[0.15em] uppercase text-muted-foreground">
          <p>© {new Date().getFullYear()} Zekaryas Geremew</p>
        </div>
      </div>
    </footer>
  );
}
