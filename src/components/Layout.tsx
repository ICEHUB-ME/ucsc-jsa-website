import { useState, useRef, useEffect, type ReactNode } from "react";
import { Button } from "./ui/button";
import { Mail, FileText } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
  onNavigate: (page: string) => void;
}

export default function Layout({ children, onNavigate }: LayoutProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      {/* Official Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
          <div 
            className="font-bold text-xl tracking-tight cursor-pointer text-red-600 flex items-center gap-2" 
            onClick={() => onNavigate("home")}
          >
            UCSC JSA
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <button onClick={() => onNavigate("home")} className="hover:text-red-600 transition-colors">Home</button>
            <button onClick={() => onNavigate("events")} className="hover:text-red-600 transition-colors">Events</button>
            <button onClick={() => onNavigate("about")} className="hover:text-red-600 transition-colors">About</button>
          </nav>
          <div className="relative" ref={dropdownRef}>
            <Button size="sm" onClick={() => setIsContactOpen(!isContactOpen)}>
              <Mail className="mr-2 h-4 w-4" /> Contact
            </Button>
            
            {isContactOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 p-1 flex flex-col z-50">
                <button 
                  className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-red-600 rounded-md transition-colors text-left"
                  onClick={() => {
                    window.open("https://docs.google.com/forms", "_blank");
                    setIsContactOpen(false);
                  }}
                >
                  <FileText size={14} /> Google Form
                </button>
                <button 
                  className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-red-600 rounded-md transition-colors text-left"
                  onClick={() => {
                    window.location.href = "mailto:jsaucsc@gmail.com";
                    setIsContactOpen(false);
                  }}
                >
                  <Mail size={14} /> Email Directly
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {children}
      </main>

      {/* Standard Footer */}
      <footer className="border-t bg-white py-8 text-center text-sm text-slate-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} UCSC Japanese Student Association. All rights reserved.</p>
          <p className="text-xs">Official Student Organization at UC Santa Cruz</p>
        </div>
      </footer>
    </div>
  );
}