"use client"
import { motion } from "framer-motion"
import { ParticlesBackground } from "@/components/particles-background"
import { Navbar } from "@/components/navbar"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { FloatingBadge } from "@/components/floating-badge"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Cpu, Server, Database, Code, LineChart, Wifi, Shield, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function Services() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-violet-900">
      <ParticlesBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <FloatingBadge>My Services</FloatingBadge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mt-6">
              Expert{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                Solutions
              </span>{" "}
              For Your Needs
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              Comprehensive services in electrical engineering, IoT development, software engineering, and machine
              learning.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </section>

      {/* Services Grid */}
      <section className="relative py-12 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <GlassmorphicCard className="p-8 h-full hover:border-orange-400/50 transition-all duration-300">
                <div className="space-y-6">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Electrical System Design</h3>
                  <p className="text-blue-100">
                    Comprehensive electrical system design services for residential, commercial, and industrial
                    applications, focusing on efficiency and sustainability.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge className="bg-white/10 text-white hover:bg-white/20">Power Systems</Badge>
                    <Badge className="bg-white/10 text-white hover:bg-white/20">Control Systems</Badge>
                    <Badge className="bg-white/10 text-white hover:bg-white/20">Energy Efficiency</Badge>
                  </div>
                  <div className="pt-4">
                    <Button
                      variant="link"
                      className="p-0 text-orange-400 hover:text-orange-300 group-hover:underline transition-all"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </GlassmorphicCard>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <GlassmorphicCard className="p-8 h-full hover:border-orange-400/50 transition-all duration-300">
                <div className="space-y-6">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Wifi className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">IoT Solution Development</h3>
                  <p className="text-blue-100">
                    End-to-end IoT solutions from sensor selection and integration to cloud connectivity and data
                    visualization for smart homes and industrial applications.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge className="bg-white/10 text-white hover:bg-white/20">Sensor Networks</Badge>
                    <Badge className="bg-white/10 text-white hover:bg-white/20">Wireless Connectivity</Badge>
                    <Badge className="bg-white/10 text-white hover:bg-white/20">Real-time Monitoring</Badge>
                  </div>
                  <div className="pt-4">
                    <Button
                      variant="link"
                      className="p-0 text-blue-400 hover:text-blue-300 group-hover:underline transition-all"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </GlassmorphicCard>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <GlassmorphicCard className="p-8 h-full hover:border-orange-400/50 transition-all duration-300">
                <div className="space-y-6">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Software Development</h3>
                  <p className="text-blue-100">
                    Custom software solutions including web applications, mobile apps, and embedded systems with a focus
                    on user experience and performance.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge className="bg-white/10 text-white hover:bg-white/20">Web Development</Badge>
                    <Badge className="bg-white/10 text-white hover:bg-white/20">Mobile Apps</Badge>
                    <Badge className="bg-white/10 text-white hover:bg-white/20">Embedded Software</Badge>
                  </div>
                  <div className="pt-4">
                    <Button
                      variant="link"
                      className="p-0 text-purple-400 hover:text-purple-300 group-hover:underline transition-all"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </GlassmorphicCard>
            </motion.div>

            {/* Service 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <GlassmorphicCard className="p-8 h-full hover:border-orange-400/50 transition-all duration-300">
                <div className="space-y-6">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <LineChart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Machine Learning Solutions</h3>
                  <p className="text-blue-100">
                    Data analysis and machine learning implementations for predictive maintenance, pattern recognition,
                    and automated decision-making systems.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge className="bg-white/10 text-white hover:bg-white/20">Predictive Analytics</Badge>
                    <Badge className="bg-white/10 text-white hover:bg-white/20">Neural Networks</Badge>
                    <Badge className="bg-white/10 text-white hover:bg-white/20">Computer Vision</Badge>
                  </div>
                  <div className="pt-4">
                    <Button
                      variant="link"
                      className="p-0 text-green-400 hover:text-green-300 group-hover:underline transition-all"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </GlassmorphicCard>
            </motion.div>

            {/* Service 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <GlassmorphicCard className="p-8 h-full hover:border-orange-400/50 transition-all duration-300">
                <div className="space-y-6">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Embedded Systems Design</h3>
                  <p className="text-blue-100">
                    Custom embedded systems design and development for specialized applications, including hardware
                    selection, firmware development, and system integration.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge className="bg-white/10 text-white hover:bg-white/20">Microcontrollers</Badge>
                    <Badge className="bg-white/10 text-white hover:bg-white/20">Firmware</Badge>
                    <Badge className="bg-white/10 text-white hover:bg-white/20">Hardware Integration</Badge>
                  </div>
                  <div className="pt-4">
                    <Button
                      variant="link"
                      className="p-0 text-yellow-400 hover:text-yellow-300 group-hover:underline transition-all"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </GlassmorphicCard>
            </motion.div>

            {/* Service 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <GlassmorphicCard className="p-8 h-full hover:border-orange-400/50 transition-all duration-300">
                <div className="space-y-6">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-red-400 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Technical Consultation</h3>
                  <p className="text-blue-100">
                    Expert technical consultation for project planning, technology selection, system architecture, and
                    implementation strategies across electrical and software domains.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge className="bg-white/10 text-white hover:bg-white/20">Project Planning</Badge>
                    <Badge className="bg-white/10 text-white hover:bg-white/20">Technology Assessment</Badge>
                    <Badge className="bg-white/10 text-white hover:bg-white/20">System Architecture</Badge>
                  </div>
                  <div className="pt-4">
                    <Button
                      variant="link"
                      className="p-0 text-red-400 hover:text-red-300 group-hover:underline transition-all"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </GlassmorphicCard>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <FloatingBadge>How I Work</FloatingBadge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mt-6">
              My{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              A systematic approach to delivering high-quality solutions that meet your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <GlassmorphicCard className="p-6 h-full hover:border-orange-400/50 transition-all duration-300">
                <div className="flex flex-col items-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center text-2xl font-bold text-white">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-white">Discovery</h3>
                  <p className="text-blue-100">
                    In-depth consultation to understand your requirements, challenges, and objectives.
                  </p>
                </div>
              </GlassmorphicCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <GlassmorphicCard className="p-6 h-full hover:border-orange-400/50 transition-all duration-300">
                <div className="flex flex-col items-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center text-2xl font-bold text-white">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-white">Planning</h3>
                  <p className="text-blue-100">
                    Detailed project planning including technology selection, architecture design, and timeline
                    development.
                  </p>
                </div>
              </GlassmorphicCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <GlassmorphicCard className="p-6 h-full hover:border-orange-400/50 transition-all duration-300">
                <div className="flex flex-col items-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center text-2xl font-bold text-white">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-white">Implementation</h3>
                  <p className="text-blue-100">
                    Agile development process with regular updates, feedback integration, and quality assurance.
                  </p>
                </div>
              </GlassmorphicCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <GlassmorphicCard className="p-6 h-full hover:border-orange-400/50 transition-all duration-300">
                <div className="flex flex-col items-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center text-2xl font-bold text-white">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-white">Support</h3>
                  <p className="text-blue-100">
                    Comprehensive post-implementation support, maintenance, and continuous improvement.
                  </p>
                </div>
              </GlassmorphicCard>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <FloatingBadge>Technologies</FloatingBadge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mt-6">
              Tools &{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Leveraging cutting-edge technologies to deliver innovative solutions.
            </p>
          </motion.div>

          <GlassmorphicCard className="p-8 border-2 border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center">
                  <Server className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Cloud Platforms</h3>
                <p className="text-blue-100 text-sm">AWS, Azure, Google Cloud</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center">
                  <Cpu className="h-10 w-10 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Microcontrollers</h3>
                <p className="text-blue-100 text-sm">Arduino, ESP32, Raspberry Pi</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center">
                  <Code className="h-10 w-10 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Programming</h3>
                <p className="text-blue-100 text-sm">Python, JavaScript, C/C++</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center">
                  <Database className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Databases</h3>
                <p className="text-blue-100 text-sm">MongoDB, PostgreSQL, Firebase</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center">
                  <Wifi className="h-10 w-10 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white">IoT Protocols</h3>
                <p className="text-blue-100 text-sm">MQTT, LoRaWAN, Zigbee</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Security</h3>
                <p className="text-blue-100 text-sm">Encryption, OAuth, JWT</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center">
                  <LineChart className="h-10 w-10 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold text-white">ML Frameworks</h3>
                <p className="text-blue-100 text-sm">TensorFlow, PyTorch, scikit-learn</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center">
                  <Zap className="h-10 w-10 text-pink-400" />
                </div>
                <h3 className="text-lg font-bold text-white">CAD Tools</h3>
                <p className="text-blue-100 text-sm">AutoCAD, EAGLE, Fusion 360</p>
              </motion.div>
            </div>
          </GlassmorphicCard>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-orange-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-3000"></div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <GlassmorphicCard className="p-8 md:p-12 border-2 border-white/20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <FloatingBadge>Ready to Start?</FloatingBadge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
                Let's Build Something{" "}
                <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                  Amazing
                </span>{" "}
                Together
              </h2>
              <p className="text-xl text-blue-100">
                Ready to transform your ideas into reality? Let's discuss your project and explore how my expertise can
                help you achieve your goals.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90 text-white border-0"
                >
                  Start Your Project
                </Button>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10"
                  >
                    Learn More About Me
                  </Button>
                </Link>
              </div>
            </motion.div>
          </GlassmorphicCard>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 overflow-hidden border-t border-white/10">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center">
                <span className="text-lg font-bold text-white">JS</span>
              </div>
              <span className="text-xl font-bold text-white">Judas Sipho Sithole</span>
            </div>
            <nav className="flex flex-wrap gap-6">
              <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/#projects" className="text-blue-100 hover:text-white transition-colors">
                Projects
              </Link>
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-blue-100">© {new Date().getFullYear()} Judas Sipho Sithole. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
