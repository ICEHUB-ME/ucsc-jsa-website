import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Users, Globe, Mail, FileText } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
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
    <div className="bg-gradient-to-b from-white to-slate-100 text-slate-800">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          UCSC Japanese Student Association
        </motion.h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          A community celebrating Japanese culture, language, and connection at the University of California, Santa Cruz.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" onClick={() => window.location.href = "mailto:jsaucsc@gmail.com"}>Join Us</Button>
          <Button variant="outline" size="lg" onClick={() => onNavigate("events")}>View Events</Button>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-6">About JSA</h2>
          <p className="text-base leading-relaxed max-w-3xl">
            The UCSC Japanese Student Association (JSA) is open to anyone interested in Japanese culture—no language experience required. We host cultural events, socials, workshops, and collaborations throughout the year.
          </p>
        </motion.div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <Calendar className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Events</h3>
            <p>Seasonal festivals, language tables, movie nights, and cultural workshops.</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <Users className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p>A welcoming space for students from all backgrounds to connect.</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <Globe className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Culture</h3>
            <p>Explore Japanese traditions, pop culture, food, and history together.</p>
          </CardContent>
        </Card>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-6">Interested in joining or collaborating with JSA?</p>
        <div className="relative inline-block" ref={dropdownRef}>
          <Button size="lg" className="flex gap-2 mx-auto" onClick={() => setIsContactOpen(!isContactOpen)}>
            <Mail size={18} /> Contact JSA
          </Button>

          {isContactOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 p-1 flex flex-col z-50 text-left">
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
      </section>
    </div>
  );
}