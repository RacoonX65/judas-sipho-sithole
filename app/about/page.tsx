"use client"
import { motion } from "framer-motion"
import { ParticlesBackground } from "@/components/particles-background"
import { Navbar } from "@/components/navbar"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { FloatingBadge } from "@/components/floating-badge"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Award, GraduationCap, Briefcase, Heart } from "lucide-react"
import Link from "next/link"

export default function About() {
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
            <FloatingBadge>About Me</FloatingBadge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mt-6">
              Discover My{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              Final-year Electrical Engineering student at University of Johannesburg, graduating 2025. Passionate about
              IoT, software development, and machine learning with plans for advanced studies.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </section>

      {/* Bio Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <GlassmorphicCard className="p-2 border-2 border-white/20">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=600&width=600"
                    alt="Judas Sipho Sithole"
                    className="w-full h-full object-cover"
                  />
                </div>
              </GlassmorphicCard>
              <div className="absolute -bottom-6 -right-6 z-20">
                <GlassmorphicCard className="p-4 border-2 border-white/20">
                  <div className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-orange-400" />
                    <span className="text-white font-medium">Award-Winning Engineer</span>
                  </div>
                </GlassmorphicCard>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                I'm Judas Sipho Sithole, a{" "}
                <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                  Final-Year Engineering Student
                </span>{" "}
                with a passion for innovation
              </h2>
              <p className="text-blue-100 text-lg">
                Currently completing my BEng Tech in Electrical Engineering at the University of Johannesburg,
                graduating in 2025. My academic journey has been focused on pushing the boundaries of what's possible
                with technology, from circuits and systems to IoT solutions, software development, and machine learning
                applications.
              </p>
              <p className="text-blue-100 text-lg">
                With plans to pursue BEng Tech Honours and eventually a Master's degree, I'm committed to advancing my
                expertise in electrical engineering. I believe in creating solutions that are not just technically sound
                but also user-friendly and impactful, bridging the gap between hardware and software.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  className="bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90 text-white border-0"
                  size="lg"
                >
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </Button>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10"
                    size="lg"
                  >
                    View Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </section>

      {/* Education & Experience */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <FloatingBadge>My Background</FloatingBadge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mt-6">
              Education &{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                  <div className="relative flex items-start">
                    <GlassmorphicCard className="ml-10 md:ml-0 p-6 w-full">
                      <div className="absolute left-0 md:left-1/2 mt-1.5 -translate-x-12 md:-translate-x-7">
                        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-orange-400 to-pink-600"></div>
                      </div>
                      <div className="flex flex-col">
                        <Badge className="self-start mb-2 bg-gradient-to-r from-orange-400 to-pink-600 text-white">
                          2021 - 2025
                        </Badge>
                        <h4 className="text-xl font-bold text-white">BEng Tech in Electrical Engineering</h4>
                        <p className="text-blue-100 mt-1">University of Johannesburg</p>
                        <p className="text-blue-100/80 mt-4">
                          Final year student specializing in power systems, control systems, and embedded electronics
                          with a focus on IoT applications. Expected graduation: 2025.
                        </p>
                      </div>
                    </GlassmorphicCard>
                  </div>

                  <div className="relative flex items-start">
                    <GlassmorphicCard className="ml-10 md:ml-0 p-6 w-full">
                      <div className="absolute left-0 md:left-1/2 mt-1.5 -translate-x-12 md:-translate-x-7">
                        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-400 to-cyan-600 animate-pulse"></div>
                      </div>
                      <div className="flex flex-col">
                        <Badge className="self-start mb-2 bg-blue-500/20 text-blue-300 border border-blue-400/30">
                          2026 - 2027 (Planned)
                        </Badge>
                        <h4 className="text-xl font-bold text-white">BEng Tech Honours in Electrical Engineering</h4>
                        <p className="text-blue-100 mt-1">University of Johannesburg</p>
                        <p className="text-blue-100/80 mt-4">
                          Planning to pursue honours degree with specialization in advanced IoT systems, renewable
                          energy integration, and smart grid technologies.
                        </p>
                      </div>
                    </GlassmorphicCard>
                  </div>

                  <div className="relative flex items-start">
                    <GlassmorphicCard className="ml-10 md:ml-0 p-6 w-full">
                      <div className="absolute left-0 md:left-1/2 mt-1.5 -translate-x-12 md:-translate-x-7">
                        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 animate-pulse"></div>
                      </div>
                      <div className="flex flex-col">
                        <Badge className="self-start mb-2 bg-purple-500/20 text-purple-300 border border-purple-400/30">
                          Future Goal
                        </Badge>
                        <h4 className="text-xl font-bold text-white">Master's Degree in Electrical Engineering</h4>
                        <p className="text-blue-100 mt-1">Target Institution: TBD</p>
                        <p className="text-blue-100/80 mt-4">
                          Long-term goal to pursue Master's degree focusing on advanced research in IoT, machine
                          learning applications in electrical systems, and sustainable energy solutions.
                        </p>
                      </div>
                    </GlassmorphicCard>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Experience</h3>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                  <div className="relative flex items-start">
                    <GlassmorphicCard className="ml-10 md:ml-0 p-6 w-full">
                      <div className="absolute left-0 md:left-1/2 mt-1.5 -translate-x-12 md:-translate-x-7">
                        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-400 to-cyan-600"></div>
                      </div>
                      <div className="flex flex-col">
                        <Badge className="self-start mb-2 bg-white/10 text-white">2024 - Present</Badge>
                        <h4 className="text-xl font-bold text-white">Final Year Engineering Student</h4>
                        <p className="text-blue-100 mt-1">University of Johannesburg</p>
                        <p className="text-blue-100/80 mt-4">
                          Leading final year project on IoT-based smart campus greenhouse monitoring system. Developing
                          integrated hardware and software solutions for automated plant care and environmental
                          monitoring.
                        </p>
                      </div>
                    </GlassmorphicCard>
                  </div>

                  <div className="relative flex items-start">
                    <GlassmorphicCard className="ml-10 md:ml-0 p-6 w-full">
                      <div className="absolute left-0 md:left-1/2 mt-1.5 -translate-x-12 md:-translate-x-7">
                        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-400 to-cyan-600"></div>
                      </div>
                      <div className="flex flex-col">
                        <Badge className="self-start mb-2 bg-white/10 text-white">2023 - 2024</Badge>
                        <h4 className="text-xl font-bold text-white">Freelance Software Developer</h4>
                        <p className="text-blue-100 mt-1">Various Clients</p>
                        <p className="text-blue-100/80 mt-4">
                          Developing full-stack web applications and IoT solutions for small businesses and academic
                          projects while completing studies. Focus on React, Node.js, and embedded systems.
                        </p>
                      </div>
                    </GlassmorphicCard>
                  </div>

                  <div className="relative flex items-start">
                    <GlassmorphicCard className="ml-10 md:ml-0 p-6 w-full">
                      <div className="absolute left-0 md:left-1/2 mt-1.5 -translate-x-12 md:-translate-x-7">
                        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-400 to-cyan-600"></div>
                      </div>
                      <div className="flex flex-col">
                        <Badge className="self-start mb-2 bg-white/10 text-white">2022 - 2023</Badge>
                        <h4 className="text-xl font-bold text-white">Engineering Intern</h4>
                        <p className="text-blue-100 mt-1">Local Engineering Firm</p>
                        <p className="text-blue-100/80 mt-4">
                          Gained practical experience in electrical system design and implementation during university
                          vacation periods. Worked on residential and small commercial electrical installations.
                        </p>
                      </div>
                    </GlassmorphicCard>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <FloatingBadge>My Toolkit</FloatingBadge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mt-6">
              Technical{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">Skills</span>
            </h2>
          </motion.div>

          <GlassmorphicCard className="p-8 border-2 border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-white">Programming</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-blue-100">Python</span>
                      <span className="text-blue-100">95%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-400 to-pink-600 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-blue-100">JavaScript</span>
                      <span className="text-blue-100">90%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-400 to-pink-600 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-blue-100">C/C++</span>
                      <span className="text-blue-100">85%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-400 to-pink-600 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-white">Electrical</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-blue-100">Circuit Design</span>
                      <span className="text-blue-100">90%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-blue-100">PCB Layout</span>
                      <span className="text-blue-100">85%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-blue-100">Power Systems</span>
                      <span className="text-blue-100">80%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-white">IoT</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-blue-100">Sensor Integration</span>
                      <span className="text-blue-100">95%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-400 to-indigo-600 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-blue-100">Wireless Protocols</span>
                      <span className="text-blue-100">90%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-400 to-indigo-600 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-blue-100">Cloud Platforms</span>
                      <span className="text-blue-100">85%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-400 to-indigo-600 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-white">Machine Learning</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-blue-100">Data Analysis</span>
                      <span className="text-blue-100">90%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-600 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-blue-100">Neural Networks</span>
                      <span className="text-blue-100">85%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-600 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-blue-100">Computer Vision</span>
                      <span className="text-blue-100">80%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-600 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </GlassmorphicCard>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </section>

      {/* Personal Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <FloatingBadge>Personal Side</FloatingBadge>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Beyond the{" "}
                <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                  Engineer
                </span>
              </h2>
              <p className="text-blue-100 text-lg">
                When I'm not designing circuits or writing code, you'll find me exploring the outdoors, playing chess,
                or volunteering with local STEM education programs. I believe in maintaining a balanced life that fuels
                creativity and innovation.
              </p>
              <p className="text-blue-100 text-lg">
                I'm passionate about mentoring the next generation of engineers and technologists. Through workshops and
                community events, I share my knowledge and experience to inspire others to pursue careers in STEM
                fields.
              </p>
              <div className="flex items-center gap-3 pt-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg text-white">Passionate about technology that makes a difference</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <GlassmorphicCard className="p-2 aspect-square">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Hobby 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </GlassmorphicCard>
              <GlassmorphicCard className="p-2 aspect-square">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Hobby 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </GlassmorphicCard>
              <GlassmorphicCard className="p-2 aspect-square">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Hobby 3"
                  className="w-full h-full object-cover rounded-lg"
                />
              </GlassmorphicCard>
              <GlassmorphicCard className="p-2 aspect-square">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Hobby 4"
                  className="w-full h-full object-cover rounded-lg"
                />
              </GlassmorphicCard>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-orange-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-3000"></div>
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
