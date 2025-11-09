"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p 
          className="text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          © 2025 Himanshu Kulkarni. Built with Next.js and Tailwind CSS.
        </motion.p>
      </div>
    </footer>
  );
}