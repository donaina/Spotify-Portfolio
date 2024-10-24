import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export function EducationSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <Card className="p-6 bg-zinc-900 border-zinc-800">
        <h3 className="text-xl font-semibold text-green-500">
          National Diploma: Computer Hardware Engineering
        </h3>
        <p className="text-zinc-400">Dalewares Institute of Technology • Lagos, Nigeria</p>
      </Card>
    </motion.div>
  );
}