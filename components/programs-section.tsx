"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, Target, Shield, Heart, Zap } from "lucide-react"

const programs = [
  {
    id: 1,
    title: "Kids Martial Arts",
    description: "Building confidence, discipline, and character in children ages 4-12",
    ageGroup: "Ages 4-12",
    duration: "45 min",
    price: "$89/month",
    image: "/api/placeholder/400/300",
    features: ["Character Development", "Anti-Bullying", "Physical Fitness", "Self-Defense"],
    color: "from-blue-500 to-cyan-500",
    icon: Users,
  },
  {
    id: 2,
    title: "Teen & Adult Martial Arts",
    description: "Comprehensive martial arts training for teens and adults focusing on fitness and self-defense",
    ageGroup: "Ages 13+",
    duration: "60 min",
    price: "$99/month",
    image: "/api/placeholder/400/300",
    features: ["Self-Defense", "Fitness", "Stress Relief", "Competition Training"],
    color: "from-purple-500 to-pink-500",
    icon: Target,
  },
  {
    id: 3,
    title: "After School Program",
    description: "Safe, structured environment with homework help and martial arts training",
    ageGroup: "Ages 5-12",
    duration: "3 hours",
    price: "$149/month",
    image: "/api/placeholder/400/300",
    features: ["Homework Help", "Martial Arts", "Character Building", "Safe Environment"],
    color: "from-green-500 to-emerald-500",
    icon: Shield,
  },
  {
    id: 4,
    title: "Summer Camps",
    description: "High-energy summer camps combining martial arts, games, and character development",
    ageGroup: "Ages 4-14",
    duration: "Full Day",
    price: "$199/week",
    image: "/api/placeholder/400/300",
    features: ["All-Day Fun", "Martial Arts", "Games & Activities", "Character Building"],
    color: "from-orange-500 to-red-500",
    icon: Heart,
  },
]

export function ProgramsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Our Programs
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Martial Arts Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From beginners to advanced practitioners, we have programs designed to meet you where you are 
            and help you achieve your goals in a supportive, professional environment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${program.color} text-white`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <Badge variant="outline">{program.ageGroup}</Badge>
                    </div>
                    
                    <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {program.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {program.duration}
                      </div>
                      <div className="font-semibold text-primary">
                        {program.price}
                      </div>
                    </div>

                    <div className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <Zap className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button className="w-full mt-6" asChild>
                      <Link href={`/programs/${program.id}`}>
                        Learn More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/programs">
              View All Programs
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

