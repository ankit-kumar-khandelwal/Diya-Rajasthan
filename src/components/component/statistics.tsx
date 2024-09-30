import React from 'react';
import { motion } from 'framer-motion';
import { Users, BrainCircuit, Building, BarChart } from 'lucide-react';

const statItems = [
  { icon: Users, value: '10,000+', label: 'Attendees' },
  { icon: BrainCircuit, value: '20+', label: 'Thought Leaders' },
  { icon: Building, value: '100+', label: 'NGOs' },
  { icon: BarChart, value: '10M+', label: 'Impressions' },
];

export function Statistics() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground mb-4"
          >
            Event Highlights
          </motion.div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Impressive Event Statistics
          </h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Our recent event was a huge success, with incredible numbers to show for it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-6 bg-card rounded-xl shadow-lg"
            >
              <item.icon className="w-12 h-12 text-primary mb-4" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + 0.1 * index, type: "spring", stiffness: 100 }}
                className="text-4xl font-bold mb-2"
              >
                {item.value}
              </motion.div>
              <div className="text-sm font-medium text-muted-foreground">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}