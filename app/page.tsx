"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Twitter,
  Download,
  ExternalLink,
  Menu,
  X,
  Star,
  Sparkles,
  ArrowRight,
  Code,
  Palette,
  Smartphone,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "services", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" }, 
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Galaxy Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
            style={{ backgroundImage: 'url("/images/galaxy-background.png")' }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
        {/* Animated stars */}
        <div className="stars absolute inset-0"></div>
        <div className="stars2 absolute inset-0"></div>
        <div className="stars3 absolute inset-0"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Nishan Gurung
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors hover:text-purple-400 font-medium ${
                    activeSection === item.id ? "text-purple-400" : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-purple-500/20">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 hover:text-purple-400 transition-colors font-medium text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className={`space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-purple-900/30 rounded-full text-sm font-medium text-purple-300 border border-purple-500/30">
                <Sparkles className="w-4 h-4 mr-2" />
                UI/UX Designer & Creative Enthusiast
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Nishan
                </span>
                <br />
                <span className="text-white">Gurung</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                A passionate and emerging UI/UX designer crafting user-friendly, visually appealing designs that bridge
                <span className="text-purple-400 font-semibold"> creativity and functionality</span> in the digital
                space.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available for projects</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Based in Nepal</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("portfolio")}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg font-semibold"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-2 border-purple-500/50 text-purple-300 hover:bg-purple-900/30 px-8 py-6 rounded-2xl transition-all duration-300 text-lg font-semibold"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Let's Connect
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-purple-500/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">3+</div>
                <div className="text-sm text-gray-300">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">0</div>
                <div className="text-sm text-gray-300">Years experiences</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">100%</div>
                <div className="text-sm text-gray-300">Passion</div>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className={`relative ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>

              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600 p-1 rounded-3xl shadow-2xl">
                <div className="bg-black rounded-3xl p-2 overflow-hidden">
                  {/* Profile Image with Simple White Outline */}
                  <div className="relative w-full h-[500px] rounded-2xl overflow-hidden flex items-center justify-center">
                    {/* This is where the edited image with transparent background and white outline would go */}
                    <img
                      src="/images/nishan-profile.png"
                      alt="Nishan Gurung"
                      className="w-auto h-full object-contain outline-white"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 -right-6 bg-black/60 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-purple-500/30 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-300">UI/UX Designer</span>
                </div>
              </div>

              <div className="absolute bottom-10 -left-6 bg-black/60 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-blue-500/30 animate-float delay-500">
                <div className="flex items-center space-x-2">
                  <Palette className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium text-gray-300">Creative Mind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Passionate about creating meaningful digital experiences through thoughtful design
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-black/50 border-purple-500/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-400 flex items-center">
                    <Star className="mr-2 h-6 w-6" />
                    Education & Training
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">Bachelor's in BIT</h3>
                    <p className="text-gray-300">Texas College - Currently Pursuing</p>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">UI/UX Design Training</h3>
                    <p className="text-gray-300">Mindrisers - Completed</p>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white">Design Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-800/50">Figma</Badge>
                      <Badge className="bg-blue-900/50 text-blue-300 hover:bg-blue-800/50">Adobe XD</Badge>
                      <Badge className="bg-green-900/50 text-green-300 hover:bg-green-800/50">Sketch</Badge>
                      <Badge className="bg-orange-900/50 text-orange-300 hover:bg-orange-800/50">Photoshop</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate UI/UX designer with a keen eye for creating intuitive and visually stunning digital
                  experiences. Currently pursuing my Bachelor's degree in BIT at Texas College, I've also completed
                  comprehensive UI/UX training at Mindrisers.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Though early in my career, I've already designed several creative projects including a food app,
                  hospital website, and flower shop website. I'm proficient in Figma and constantly learning new design
                  trends and technologies.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  My goal is to bridge the gap between creativity and functionality, ensuring every design not only
                  looks beautiful but also provides an exceptional user experience.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-900/30">
                  <Linkedin className="mr-2 h-4 w-4" />
                  View LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 relative z-10 bg-black/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              My Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Showcasing my journey through creative design solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Food App Project */}
            <Card className="bg-black/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl">🍕</div>
                  </div>
                  <div className="absolute top-2 right-2 text-2xl">🍔</div>
                  <div className="absolute bottom-2 left-2 text-2xl">🥗</div>
                  <div className="absolute top-2 left-2 text-xl">🍜</div>
                  <div className="absolute bottom-2 right-2 text-xl">🥤</div>
                </div>
                <CardTitle className="text-xl text-purple-400 flex items-center">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Food App Design
                </CardTitle>
                <CardDescription className="text-gray-400">Mobile Application UI/UX</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  A modern food delivery app design focusing on user-friendly navigation and appetizing visual
                  presentation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-purple-900/50 text-purple-300">Figma</Badge>
                  <Badge className="bg-blue-900/50 text-blue-300">Mobile UI</Badge>
                  <Badge className="bg-green-900/50 text-green-300">UX Research</Badge>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-900/30"
                  onClick={() =>
                    window.open(
                      "https://www.figma.com/proto/lo2KxOK6eZj2oyqyCQzMiE/Flower-page?node-id=168-332&p=f&t=ZcKqvJRJLSDHIqCm-1&scaling=scale-down&content-scaling=fixed&page-id=161%3A221&starting-point-node-id=168%3A332",
                      "_blank",
                    )
                  }
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            {/* Hospital Website Project */}
            <Card className="bg-black/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl">🏥</div>
                  </div>
                  <div className="absolute top-2 right-2 text-2xl">⚕️</div>
                  <div className="absolute bottom-2 left-2 text-2xl">🩺</div>
                  <div className="absolute top-2 left-2 text-xl">💊</div>
                  <div className="absolute bottom-2 right-2 text-xl">🚑</div>
                </div>
                <CardTitle className="text-xl text-purple-400 flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  Hospital Website
                </CardTitle>
                <CardDescription className="text-gray-400">Healthcare Web Platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Clean and professional hospital website design emphasizing usability and accessibility for patients.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-purple-900/50 text-purple-300">Figma</Badge>
                  <Badge className="bg-blue-900/50 text-blue-300">Web Design</Badge>
                  <Badge className="bg-green-900/50 text-green-300">Healthcare</Badge>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-900/30"
                  onClick={() =>
                    window.open(
                      "https://www.figma.com/proto/lo2KxOK6eZj2oyqyCQzMiE/Flower-page?node-id=63-90&t=Ek8GF34YUb3OZrdE-1&scaling=min-zoom&content-scaling=fixed&page-id=63%3A2&starting-point-node-id=63%3A90",
                      "_blank",
                    )
                  }
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            {/* Flower Shop Project */}
            <Card className="bg-black/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-pink-900/20 to-purple-900/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl">🌸</div>
                  </div>
                  <div className="absolute top-2 right-2 text-2xl">🌹</div>
                  <div className="absolute bottom-2 left-2 text-2xl">🌻</div>
                  <div className="absolute top-2 left-2 text-xl">🌷</div>
                  <div className="absolute bottom-2 right-2 text-xl">💐</div>
                </div>
                <CardTitle className="text-xl text-purple-400 flex items-center">
                  <Palette className="mr-2 h-5 w-5" />
                  Flower Shop Website
                </CardTitle>
                <CardDescription className="text-gray-400">E-commerce Web Design</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Beautiful and elegant flower shop website with focus on visual appeal and seamless shopping
                  experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-purple-900/50 text-purple-300">Figma</Badge>
                  <Badge className="bg-blue-900/50 text-blue-300">E-commerce</Badge>
                  <Badge className="bg-green-900/50 text-green-300">Visual Design</Badge>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-900/30"
                  onClick={() =>
                    window.open(
                      "https://www.figma.com/proto/lo2KxOK6eZj2oyqyCQzMiE/Flower-page?node-id=14-5&p=f&t=ZGY06BlY812Pc33N-1&scaling=min-zoom&content-scaling=fixed&page-id=14%3A2&starting-point-node-id=14%3A5",
                      "_blank",
                    )
                  }
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive design solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/50 border-purple-500/20 backdrop-blur-sm text-center hover:border-purple-400/60 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-purple-400">UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Creating intuitive and user-centered designs that enhance user experience and drive engagement through
                  thoughtful interface design.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-purple-500/20 backdrop-blur-sm text-center hover:border-purple-400/60 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-purple-400">Web Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Designing responsive and visually appealing websites that work seamlessly across all devices and
                  provide optimal user experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-purple-500/20 backdrop-blur-sm text-center hover:border-purple-400/60 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-purple-400">App Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Crafting mobile application interfaces that are both beautiful and functional, ensuring smooth user
                  interactions and modern aesthetics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10 bg-black/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's create something amazing together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Let's Work Together</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with creative minds. Whether you need a
                complete design overhaul or just want to discuss ideas, feel free to reach out!
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">nishan.gurung@email.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">LinkedIn</p>
                    <p className="text-gray-300">linkedin.com/in/nishangurung</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-purple-500/50 text-purple-300 hover:bg-purple-900/30 rounded-xl"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-purple-500/50 text-purple-300 hover:bg-purple-900/30 rounded-xl"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-purple-500/50 text-purple-300 hover:bg-purple-900/30 rounded-xl"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Card className="bg-black/50 border-purple-500/20 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-400">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-black/50 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 rounded-xl"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-black/50 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 rounded-xl"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      className="bg-black/50 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 rounded-xl"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl py-6 text-lg font-semibold">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-500/20 relative z-10 bg-black/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Quick Response</h3>
              <p className="text-gray-300 leading-relaxed">
                I typically respond to emails within 24 hours. For urgent inquiries, feel free to call or message me on
                social media.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-purple-500/50 text-purple-300 hover:bg-purple-900/30 rounded-xl"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-purple-500/50 text-purple-300 hover:bg-purple-900/30 rounded-xl"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-purple-500/50 text-purple-300 hover:bg-purple-900/30 rounded-xl"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-purple-500/20">
            <p className="text-gray-400">
              © 2024 Nishan Gurung. All rights reserved. Designed with ❤️ and cosmic inspiration.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
