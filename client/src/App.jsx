import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function App() {
  return (
    <div className="font-sans text-gray-800 w-full overflow-x-hidden">

      {/* HERO */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-6">
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,#22c55e33,transparent_40%),radial-gradient(circle_at_80%_30%,#3b82f633,transparent_40%),radial-gradient(circle_at_50%_80%,#a855f733,transparent_40%)] animate-pulse" />
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/10"
            >
              <span className="h-2 w-2 rounded-full bg-green-400 animate-ping" />
              <span className="text-sm text-gray-200">Now building custom CRMs for small businesses</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold leading-tight text-white"
            >
              Grow Faster with <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">Smart Software</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 text-lg text-gray-300 max-w-xl"
            >
              HustleTech builds simple, powerful CRM systems and custom software to automate your operations and boost growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="https://wa.me/919519428887"
                target="_blank"
                className="group relative inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-lg hover:shadow-2xl transition"
              >
                Book Demo on WhatsApp
                <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-white/10" />
              </a>

              <a
                href="#services"
                className="px-6 py-3 rounded-2xl border border-white/20 text-gray-200 hover:bg-white/10 transition"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 grid grid-cols-3 gap-4 text-center"
            >
              {[{k:"Setup",v:"<48h"},{k:"Clients",v:"10+"},{k:"Uptime",v:"99%"}].map((s,i)=> (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
                  <p className="text-2xl font-bold text-white">{s.v}</p>
                  <p className="text-xs text-gray-400">{s.k}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT - mock cards */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="grid gap-4"
            >
              <div className="p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur shadow-xl">
                <p className="text-white font-semibold mb-2">Gym CRM</p>
                <p className="text-gray-300 text-sm">Attendance, payments, renewals in one dashboard.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur shadow-xl">
                <p className="text-white font-semibold mb-2">Custom Automation</p>
                <p className="text-gray-300 text-sm">Reduce manual work with tailored workflows.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur shadow-xl">
                <p className="text-white font-semibold mb-2">Web Apps</p>
                <p className="text-gray-300 text-sm">Fast, modern apps for your business growth.</p>
              </div>
            </motion.div>

            {/* floating glow */}
            <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="w-full  py-20 px-6 md:px-12 lg:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3  gap-8 max-w-6xl mx-auto">

          {["CRM Systems", "Custom Software", "Web Development"].map((title, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-2xl shadow-lg border hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">
                Build scalable and easy-to-use solutions tailored to your business.
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* PROJECT */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-slate-100 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Our Work</h2>
          <h3 className="text-xl font-semibold mb-2">Gym CRM System</h3>
          <p className="text-gray-700">
            Manage attendance, payments, members, and renewals in one simple dashboard.
          </p>
        </motion.div>
      </section>

      {/* WHY US */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {["Simple & Easy", "Affordable", "Fast Setup"].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 border rounded-2xl shadow"
            >
              <p className="text-lg font-medium">{item}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-20 text-center bg-slate-900 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6"
        >
          Ready to automate your business?
        </motion.h2>

        <a
          href="https://wa.me/919519428887"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl text-lg shadow-lg"
        >
          Contact on WhatsApp
        </a>
      </section>

    </div>
  );
}
