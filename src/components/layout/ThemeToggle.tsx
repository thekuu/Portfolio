import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme
    const storedTheme = localStorage.getItem('theme');
    let isDarkCheck = true;
    
    if (storedTheme) {
      isDarkCheck = storedTheme === 'dark';
    } else {
      isDarkCheck = document.documentElement.classList.contains('dark') ||
                    (!document.documentElement.classList.contains('light') &&
                     window.matchMedia('(prefers-color-scheme: dark)').matches);
    }

    if (isDarkCheck) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.documentElement.style.setProperty('color-scheme', 'dark');
      document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', 'dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('color-scheme', 'only light');
      document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', 'only light');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    // Save to local storage
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    
    // Add transition class to body
    document.body.classList.add('theme-transitioning');
    
    if (newIsDark) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('color-scheme', 'dark');
      document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.documentElement.style.setProperty('color-scheme', 'only light');
      document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', 'only light');
    }
    
    setTimeout(() => {
      document.body.classList.remove('theme-transitioning');
    }, 700);
  };

  return (
    <button 
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full flex items-center justify-center bg-muted text-muted-foreground md:hover:text-foreground transition-colors hoverable z-50 border border-border"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <Moon size={18} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <Sun size={18} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
