import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export function Section2() {
  return (
    <div className="w-full bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6">
            Join us at AAROHAN Youth Fest 2024
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center bg-card p-4 rounded-lg shadow-md"
            >
              <Calendar className="w-6 h-6 text-primary mr-3" />
              <span className="text-lg font-semibold">24th - 25th December</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center bg-card p-4 rounded-lg shadow-md"
            >
              <MapPin className="w-6 h-6 text-primary mr-3" />
              <span className="text-lg font-semibold">Mohanlal Sukhadia University, Udaipur</span>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Experience two days of inspiration, creativity, and personal growth at one of India's most beautiful locations.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}