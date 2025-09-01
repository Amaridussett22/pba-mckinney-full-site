"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Star, Users, Award, Calendar, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-red-900 to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* 3D Floating Elements */}
      <div className="absolute inset-0">
        {/* Floating Martial Arts Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-br from-red-500/20 to-yellow-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-lg blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -180, -360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-red-500/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* 3D Belt Rank Elements */}
        <motion.div
          className="absolute top-1/2 left-1/6 w-4 h-32 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full shadow-lg"
          animate={{
            rotateY: [0, 180, 360],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformStyle: "preserve-3d" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/6 w-4 h-32 bg-gradient-to-b from-red-600 to-black rounded-full shadow-lg"
          animate={{
            rotateY: [360, 180, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformStyle: "preserve-3d" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4 text-sm px-4 py-2 bg-gradient-to-r from-red-100 to-blue-100 text-red-800 border-red-200">
                🥋 Premier Martial Arts Training Since 1982
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Building{" "}
              <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent italic">
                Leaders
              </span>
              <br />
              <span className="italic">One Black Belt at a Time</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Transform your life through traditional martial arts in <span className="text-red-400 font-semibold">Little Elm</span>. 
              Build confidence, discipline, and character while learning authentic self-defense from certified instructors 
              in our supportive community since <span className="text-yellow-400 font-semibold">1982</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <Link href="/book-trial">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Trial Class
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10 hover:border-red-400 transition-all duration-300" asChild>
                <Link href="/programs">
                  <Play className="mr-2 h-5 w-5" />
                  View Programs
                </Link>
              </Button>
            </motion.div>

            {/* Stats with 3D effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
            >
              <motion.div 
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-red-400 mr-2 group-hover:text-yellow-400 transition-colors" />
                  <span className="text-2xl font-bold text-white">500+</span>
                </div>
                <p className="text-gray-400 text-sm">Active Students</p>
              </motion.div>
              <motion.div 
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-blue-400 mr-2 group-hover:text-yellow-400 transition-colors" />
                  <span className="text-2xl font-bold text-white">42+</span>
                </div>
                <p className="text-gray-400 text-sm">Years Excellence</p>
              </motion.div>
              <motion.div 
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-yellow-400 mr-2 group-hover:text-red-400 transition-colors" />
                  <span className="text-2xl font-bold text-white">4.9</span>
                </div>
                <p className="text-gray-400 text-sm">Rating</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Interactive Video/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-red-500/20 via-blue-500/20 to-yellow-500/20 p-8 backdrop-blur-sm border border-white/10"
              whileHover={{ rotateY: 5, rotateX: 5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="aspect-video bg-black/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm border border-white/20"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Play className="h-8 w-8 text-white ml-1" />
                  </motion.div>
                  <p className="text-white/80">Watch Our Academy in Action</p>
                </div>
                
                {/* Animated background elements */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-blue-500/10"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(239, 68, 68, 0.1), rgba(59, 130, 246, 0.1))",
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(251, 191, 36, 0.1))",
                      "linear-gradient(45deg, rgba(251, 191, 36, 0.1), rgba(239, 68, 68, 0.1))",
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
              
              {/* 3D Floating Achievement Badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-br from-white to-gray-100 rounded-lg p-4 shadow-xl border border-red-200"
                animate={{ 
                  y: [0, -10, 0],
                  rotateY: [0, 10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-800">Live Classes</span>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg p-4 shadow-xl"
                animate={{ 
                  y: [0, 10, 0],
                  rotateY: [0, -10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">Since 1982</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-6 bg-gradient-to-br from-red-600 to-red-700 rounded-lg p-3 shadow-xl"
                animate={{ 
                  x: [0, 10, 0],
                  rotateZ: [0, 5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Zap className="h-5 w-5 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 3D Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          rotateX: [0, 10, 0]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div 
            className="w-1 h-3 bg-gradient-to-b from-red-400 to-blue-400 rounded-full mt-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
