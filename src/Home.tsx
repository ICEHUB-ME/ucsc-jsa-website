import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Globe, Mail } from "lucide-react";

export default function Home() {
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
          <Link to="/join-us">
            <Button size="lg">Join Us</Button>
          </Link>
          <Link to="/schedule">
            <Button variant="outline" size="lg">View Events</Button>
          </Link>
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
        <Link to="/contact">
          <Button size="lg" className="flex gap-2 mx-auto">
            <Mail size={18} /> Contact JSA
          </Button>
        </Link>
      </section>
    </div>
  );
}