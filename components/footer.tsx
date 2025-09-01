"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube,
  Award,
  Star,
  Users,
  Calendar
} from "lucide-react"

export function Footer() {
  const [email, setEmail] = React.useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-red-900 to-blue-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-red-600 via-blue-600 to-red-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">PBA</span>
                </div>
                <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center">
                  <span className="text-xs font-bold text-black">82</span>
                </div>
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
                  Pro Black Belt Academy
                </div>
                <div className="text-sm text-red-300 italic">
                  <span className="text-red-400">Little Elm</span> • <span className="text-blue-400">Est. 1982</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building leaders one black belt at a time. Join our community of martial artists and 
              discover your potential through discipline, respect, and excellence.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="hover:bg-white/10 hover:text-red-400">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/10 hover:text-red-400">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/10 hover:text-red-400">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-red-300">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Programs", href: "/programs" },
                { name: "Class Schedule", href: "/classes" },
                { name: "Instructors", href: "/instructors" },
                { name: "Member Portal", href: "/member-portal" },
                { name: "Events", href: "/events" },
                { name: "Blog", href: "/blog" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-red-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-red-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-300">Programs</h3>
            <ul className="space-y-3">
              {[
                { name: "Little Dragons (Ages 3-4)", href: "/programs#little-dragons" },
                { name: "Kids Martial Arts (Ages 4-12)", href: "/programs#kids" },
                { name: "Teen & Adult Classes", href: "/programs#teens-adults" },
                { name: "After School Program", href: "/programs#after-school" },
                { name: "Summer Camps", href: "/programs#summer-camps" },
                { name: "Birthday Parties", href: "/programs#birthday-parties" },
              ].map((program) => (
                <li key={program.name}>
                  <Link 
                    href={program.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-300">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">3620 W. First Street Unit 10</p>
                  <p className="text-gray-300">Prosper, Texas 75078</p>
                  <p className="text-sm text-gray-400 italic">Little Elm area</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <Link href="tel:+14694812782" className="text-gray-300 hover:text-blue-400 transition-colors">
                  (469) 481-2782
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <Link href="mailto:info@problackbeltacademy.com" className="text-gray-300 hover:text-green-400 transition-colors">
                  info@problackbeltacademy.com
                </Link>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Mon-Fri: 3:00 PM - 9:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-white/10" />

        {/* Newsletter Signup */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest news, events, and special offers delivered to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-red-400"
              required
            />
            <Button 
              type="submit" 
              className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>
        </div>

        {/* Academy Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-6 w-6 text-red-400 mr-2" />
              <span className="text-3xl font-bold text-white">500+</span>
            </div>
            <p className="text-gray-400 text-sm">Active Students</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Award className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-3xl font-bold text-white">42+</span>
            </div>
            <p className="text-gray-400 text-sm">Years Excellence</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="h-6 w-6 text-yellow-400 mr-2" />
              <span className="text-3xl font-bold text-white">4.9</span>
            </div>
            <p className="text-gray-400 text-sm">Rating</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Calendar className="h-6 w-6 text-green-400 mr-2" />
              <span className="text-3xl font-bold text-white">200+</span>
            </div>
            <p className="text-gray-400 text-sm">Reviews</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Pro Black Belt Academy. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-red-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-red-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-red-400 transition-colors">
                Sitemap
              </Link>
            </div>
            <div className="text-gray-400 text-sm italic">
              Pro Black Belt Academy - Premier Martial Arts Training
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
