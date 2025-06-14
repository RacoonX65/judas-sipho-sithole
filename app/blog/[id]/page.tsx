"use client"
import { motion } from "framer-motion"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, User, Eye, MessageCircle, Heart, Share2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

// Personal blog post from Judas Sipho Sithole
const blogPost = {
  id: 1,
  title: "My Journey Building Smart IoT Systems: Lessons from the University of Johannesburg",
  excerpt:
    "Hello! I'm Judas Sipho Sithole, and I want to share my personal experience building IoT systems during my BEng Tech studies and how I've applied these skills in real-world projects.",
  content: `
    <h2>Hello, I'm Judas Sipho Sithole</h2>
    <p>Let me start by introducing myself properly. I'm Judas Sipho Sithole, a BEng Tech graduate in Electrical Engineering from the University of Johannesburg. This is my personal story about discovering the fascinating world of IoT systems and how it completely changed my perspective on what engineering could be.</p>
    
    <h2>My First Encounter with IoT</h2>
    <p>I'll never forget the moment during my third year at UJ when our professor introduced us to IoT concepts. I was sitting in the back row, honestly a bit skeptical about "smart" devices. How wrong I was! That single lecture sparked a passion that would define my career path.</p>
    
    <h2>The University Project That Changed Everything</h2>
    <p>During my final year, I decided to tackle an ambitious project: building a smart environmental monitoring system for our campus greenhouse. Looking back, I was probably too ambitious, but that's exactly what made it so valuable.</p>
    
    <h3>The Challenge I Set for Myself</h3>
    <p>I wanted to create a system that could:</p>
    <ul>
      <li>Monitor temperature, humidity, and soil moisture in real-time</li>
      <li>Send alerts when conditions weren't optimal</li>
      <li>Automatically water plants when needed</li>
      <li>Store all data in the cloud for analysis</li>
    </ul>
    
    <h3>My Hardware Journey</h3>
    <p>I started with what I knew - basic electrical circuits. But IoT required me to learn so much more:</p>
    
    <h4>Choosing My First Microcontroller</h4>
    <p>I remember standing in the electronics store, completely overwhelmed by the options. The shop owner recommended an Arduino Uno for beginners, but I was drawn to the ESP32 because of its built-in WiFi. Best decision I ever made!</p>
    
    <h4>Sensor Selection Adventures</h4>
    <p>This is where I made my first major mistake. I bought the cheapest sensors I could find, thinking "a sensor is a sensor." Wrong! I learned the hard way that sensor quality matters when you need reliable data.</p>
    
    <p>Here's what I ended up using after several failed attempts:</p>
    <ul>
      <li><strong>DHT22:</strong> For temperature and humidity (much more reliable than the DHT11 I started with)</li>
      <li><strong>Soil moisture sensor:</strong> I went through three different types before finding one that didn't corrode</li>
      <li><strong>Light sensor:</strong> To understand how sunlight affected plant growth</li>
    </ul>
    
    <h2>The Software Side - My Coding Journey</h2>
    <p>As an electrical engineering student, I thought I knew programming. Arduino sketches humbled me quickly! Here's the evolution of my coding skills:</p>
    
    <h3>My First Arduino Code (The Messy Version)</h3>
    <pre><code>
// This was my first attempt - don't judge me!
void setup() {
  Serial.begin(9600);
  // I put everything in setup() initially 🤦‍♂️
}

void loop() {
  // One giant function that did everything
  // No error handling, no structure
  delay(1000);
}
    </code></pre>
    
    <h3>What I Learned About Clean Code</h3>
    <p>My professor's feedback was brutal but necessary: "Judas, this code works, but it's not maintainable." That comment changed how I approach programming forever.</p>
    
    <h3>My Improved Approach</h3>
    <pre><code>
#include "WiFi.h"
#include "DHT.h"
#include "PubSubClient.h"

// I learned to organize my code properly
class SensorManager {
private:
  DHT dht;
  int soilPin;
  
public:
  SensorManager(int dhtPin, int soilSensorPin) : 
    dht(dhtPin, DHT22), soilPin(soilSensorPin) {}
    
  SensorData readSensors() {
    // Proper error handling and data validation
    SensorData data;
    data.temperature = dht.readTemperature();
    data.humidity = dht.readHumidity();
    
    if (isnan(data.temperature) || isnan(data.humidity)) {
      Serial.println("Sensor read error!");
      return SensorData(); // Return empty data
    }
    
    return data;
  }
};
    </code></pre>
    
    <h2>The Cloud Integration Challenge</h2>
    <p>This is where things got really interesting (and frustrating). I had my sensors working locally, but getting data to the cloud was a whole different beast.</p>
    
    <h3>My AWS Learning Curve</h3>
    <p>I chose AWS IoT Core because it seemed comprehensive. What I didn't realize was how steep the learning curve would be. I spent weeks just understanding IAM policies and device certificates.</p>
    
    <h3>The Breakthrough Moment</h3>
    <p>After countless failed attempts, I finally got my first data point to appear in the AWS console. I literally jumped up and shouted in the lab! My classmates thought I was crazy, but that moment felt like magic.</p>
    
    <h2>Real-World Applications I've Built Since</h2>
    <p>Since graduating, I've applied these skills in several projects that actually matter to people:</p>
    
    <h3>Smart Home System for My Family</h3>
    <p>I built a comprehensive home automation system for my parents' house. The electricity bill savings convinced them that their "crazy engineer son" might be onto something!</p>
    
    <h3>Industrial Monitoring for a Local Factory</h3>
    <p>A small manufacturing company hired me to monitor their equipment temperature. This project taught me about industrial-grade sensors and the importance of redundancy.</p>
    
    <h2>Lessons I Wish I'd Known Earlier</h2>
    <p>If I could go back and advise my university self, here's what I'd say:</p>
    
    <h3>Start Simple, Then Scale</h3>
    <p>My biggest mistake was trying to build everything at once. Start with one sensor, get it working perfectly, then add complexity.</p>
    
    <h3>Invest in Quality Sensors</h3>
    <p>Cheap sensors will cost you more in debugging time than the money you save. Trust me on this one!</p>
    
    <h3>Documentation is Your Friend</h3>
    <p>I can't tell you how many times I've looked at my own code from months ago and had no idea what I was thinking. Comment everything!</p>
    
    <h3>Security Matters from Day One</h3>
    <p>I learned this the hard way when someone accessed my test device because I used default passwords. Always implement proper security from the beginning.</p>
    
    <h2>The Skills That Made the Difference</h2>
    <p>Beyond the technical knowledge, here are the skills that really set me apart:</p>
    
    <ul>
      <li><strong>Problem-solving persistence:</strong> IoT projects will break in ways you never imagined</li>
      <li><strong>Cross-disciplinary thinking:</strong> You need to understand hardware, software, networking, and user experience</li>
      <li><strong>Continuous learning:</strong> The IoT field evolves rapidly; what I learned in university is just the foundation</li>
    </ul>
    
    <h2>My Current IoT Philosophy</h2>
    <p>After years of building IoT systems, I've developed some core principles:</p>
    
    <h3>User-Centric Design</h3>
    <p>Technology should solve real problems for real people. If your IoT system doesn't make someone's life easier, you're building the wrong thing.</p>
    
    <h3>Reliability Over Features</h3>
    <p>I'd rather have a simple system that works 99.9% of the time than a feature-rich system that fails regularly.</p>
    
    <h3>Privacy by Design</h3>
    <p>With great data comes great responsibility. I always ask: "What's the minimum data I need to solve this problem?"</p>
    
    <h2>What's Next for Me</h2>
    <p>I'm currently exploring edge computing and machine learning integration in IoT systems. The goal is to make devices smarter and more autonomous while reducing cloud dependency.</p>
    
    <h2>My Advice for Aspiring IoT Engineers</h2>
    <p>If you're just starting your IoT journey, here's my personal advice:</p>
    
    <ol>
      <li><strong>Get your hands dirty:</strong> Theory is important, but nothing beats building actual projects</li>
      <li><strong>Join communities:</strong> The IoT community is incredibly supportive. Don't be afraid to ask questions</li>
      <li><strong>Think beyond the technology:</strong> Consider the business impact, user experience, and ethical implications</li>
      <li><strong>Embrace failure:</strong> Every failed project teaches you something valuable</li>
    </ol>
    
    <h2>Final Thoughts</h2>
    <p>Building IoT systems has been one of the most rewarding aspects of my engineering career. It combines everything I love about electrical engineering with the endless possibilities of software and data.</p>
    
    <p>If you're considering diving into IoT, my advice is simple: start today. Pick a small problem in your life and try to solve it with sensors and code. You might just discover a passion that changes your career path, like I did.</p>
    
    <p>Feel free to reach out if you have questions about IoT development or want to share your own projects. I love connecting with fellow engineers and learning from your experiences!</p>
    
    <p><em>Happy building!</em><br>
    Judas Sipho Sithole</p>
  `,
  author: "Judas Sipho Sithole",
  date: "2024-01-15",
  readTime: "8 min read",
  category: "IoT",
  tags: ["Personal Journey", "IoT", "University Projects", "Arduino", "ESP32", "AWS"],
  image: "/placeholder.svg?height=400&width=800",
  views: 1250,
  comments: 23,
  likes: 89,
  featured: true,
  personalNote: "This project changed how I think about electrical engineering and software integration.",
}

const relatedPosts = [
  {
    id: 2,
    title: "Why I Chose Machine Learning: From Electrical Engineering to AI",
    image: "/placeholder.svg?height=200&width=300",
    category: "Machine Learning",
  },
  {
    id: 4,
    title: "From Circuits to Code: My Software Engineering Evolution",
    image: "/placeholder.svg?height=200&width=300",
    category: "Software Engineering",
  },
  {
    id: 3,
    title: "Building My First Smart Home System: A Personal Project Diary",
    image: "/placeholder.svg?height=200&width=300",
    category: "Personal Projects",
  },
]

export default function BlogPost() {
  const params = useParams()
  // Remove the mounted check that was causing the delay

  return (
    <>
      {/* Personal Article Header */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to My Stories
            </Link>

            <div className="mb-6">
              <Badge className="bg-gradient-to-r from-orange-500 to-pink-600 text-white border-0 mb-4">
                Personal Story • {blogPost.category}
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">{blogPost.title}</h1>

              {/* Personal Introduction */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/10">
                <p className="text-blue-100 leading-relaxed">
                  <span className="text-orange-400 font-medium">Hey there!</span> This is a personal story from my
                  engineering journey. I'm sharing the real experiences, mistakes, and breakthroughs that shaped how I
                  approach IoT development today.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-blue-100 mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Written by {blogPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(blogPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-6 text-blue-100 mb-8">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>{blogPost.views} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>{blogPost.comments} comments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span>{blogPost.likes} likes</span>
                </div>
                <Button variant="outline" size="sm" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share My Story
                </Button>
              </div>

              {/* Personal Note */}
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mb-8">
                <p className="text-orange-200 italic">
                  💭 <strong>Personal Note:</strong> "{blogPost.personalNote}"
                </p>
              </div>
            </div>

            <GlassmorphicCard className="overflow-hidden mb-8">
              <img
                src={blogPost.image || "/placeholder.svg"}
                alt={blogPost.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </GlassmorphicCard>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </section>

      {/* Personal Article Content */}
      <section className="relative py-12 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <GlassmorphicCard className="p-8 border-2 border-white/20">
                  <div
                    className="prose prose-invert prose-lg max-w-none
                      prose-headings:text-white prose-headings:font-bold
                      prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/20 prose-h2:pb-2
                      prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                      prose-h4:text-lg prose-h4:mt-4 prose-h4:mb-2
                      prose-p:text-blue-100 prose-p:leading-relaxed prose-p:mb-4
                      prose-ul:text-blue-100 prose-li:mb-2
                      prose-ol:text-blue-100
                      prose-strong:text-white prose-strong:font-semibold
                      prose-em:text-orange-200
                      prose-code:bg-white/10 prose-code:text-orange-400 prose-code:px-2 prose-code:py-1 prose-code:rounded
                      prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/20 prose-pre:rounded-lg prose-pre:p-4"
                    dangerouslySetInnerHTML={{ __html: blogPost.content }}
                  />

                  <Separator className="my-8 bg-white/20" />

                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPost.tags.map((tag) => (
                      <Badge key={tag} className="bg-white/10 text-white hover:bg-white/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-6">
                    <h4 className="text-lg font-bold text-white mb-3">Thanks for Reading My Story!</h4>
                    <p className="text-blue-100 mb-4">
                      I hope my experience helps you on your own engineering journey. If you have questions or want to
                      share your own IoT projects, I'd love to hear from you!
                    </p>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                      >
                        <Heart className="h-4 w-4 mr-2" />
                        Like This Story ({blogPost.likes})
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                      >
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>

                  <div className="text-blue-100 text-sm text-center">
                    Published on {new Date(blogPost.date).toLocaleDateString()} • Written with ❤️ by Judas Sipho Sithole
                  </div>
                </GlassmorphicCard>
              </motion.div>

              {/* Personal Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <div className="space-y-8">
                  {/* About Me */}
                  <GlassmorphicCard className="p-6 border-2 border-white/20">
                    <div className="text-center">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">JS</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">Judas Sipho Sithole</h3>
                      <p className="text-blue-100 text-sm mb-4">
                        BEng Tech in Electrical Engineering from UJ. I love building IoT systems, writing code, and
                        sharing my engineering adventures.
                      </p>
                      <Link href="/about">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90 text-white border-0"
                        >
                          More About Me
                        </Button>
                      </Link>
                    </div>
                  </GlassmorphicCard>

                  {/* More of My Stories */}
                  <GlassmorphicCard className="p-6 border-2 border-white/20">
                    <h3 className="text-lg font-bold text-white mb-4">More of My Stories</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                          <div className="flex gap-3">
                            <img
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="text-sm font-medium text-white group-hover:text-orange-400 transition-colors line-clamp-2">
                                {post.title}
                              </h4>
                              <Badge className="bg-white/10 text-white text-xs mt-1">{post.category}</Badge>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </GlassmorphicCard>

                  {/* Connect with Me */}
                  <GlassmorphicCard className="p-6 border-2 border-white/20">
                    <h3 className="text-lg font-bold text-white mb-4">Let's Connect!</h3>
                    <p className="text-blue-100 text-sm mb-4">
                      I love hearing from fellow engineers and sharing experiences. Drop me a line!
                    </p>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90 text-white border-0">
                      Get In Touch
                    </Button>
                  </GlassmorphicCard>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
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
              <Link href="/blog" className="text-blue-100 hover:text-white transition-colors">
                Blog
              </Link>
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-blue-100">© {new Date().getFullYear()} Judas Sipho Sithole. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
