import { motion } from 'framer-motion';
import AAROHANImage from '../../assets/Aarohan Logo.png';
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const fullText = "YOUTH FEST-2024";

export function Section1() {
  return (
    <div className="w-full bg-gradient-to-b from-primary/10 to-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <img src={AAROHANImage} alt="AAROHAN" className="h-32 md:h-40 lg:h-48 mb-8" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-primary mb-4">
            {fullText}
          </h1>
          <p className="text-xl text-center text-primary">
            Unleash Your Potential, Ignite Your Spirit
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground mb-6">
              Organized by the Rajasthan chapter of the Divine India Youth Association (DIYA), AAROHAN Youth Fest aims to
              provide a dynamic platform for youngsters to showcase their talents and skills. Scheduled from 24th – 25th
              December 2024 at Mohan Lal Sukhadia University, Udaipur, this festival promises an enriching experience
              filled with cultural, educational, and creative activities.
            </p>
            <Button size="lg" className="w-full md:w-auto">
              Register Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            {[
              "Address current challenges of youth",
              "Provide solutions rooted in spirituality",
              "Engage youth through interactive sessions and activities"
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-4 bg-card p-4 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <div className="text-lg font-medium">{item}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
