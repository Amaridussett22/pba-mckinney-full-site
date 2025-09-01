/* eslint-disable react/no-unescaped-entities */
"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Jessica Mack",
    role: "Parent",
    content: "We love Professional Black Belt Academy. It has helped build confidence, discipline, and a positive environment for our daughters to grow, learn, and thrive in!",
    rating: 5,
    image: "/api/placeholder/60/60",
  },
  {
    id: 2,
    name: "Brian Mitchell",
    role: "Parent",
    content: "The experience has been great for my children. They have shown great strides in class but also in school with the things they have learned here. The attitude and focus on discipline has helped my kids immensely.",
    rating: 5,
    image: "/api/placeholder/60/60",
  },
  {
    id: 3,
    name: "Nicole B",
    role: "Parent",
    content: "We absolutely love this place! Every single person here is compassionate, motivating and a positive influence for these students. They’re always available to answer questions and are always looking for creative ways to keep students engaged.",
    rating: 5,
    image: "/api/placeholder/60/60",
  },
  {
    id: 4,
    name: "Jerry C",
    role: "Parent",
    content: "What a GREAT group of instructors and mentors. These people have had the type of impact on my Son that I know he will carry with him for a lifetime. Strongest possible recommendation.",
    rating: 5,
    image: "/api/placeholder/60/60",
  },
  {
    id: 5,
    name: "Kristen Ethridge",
    role: "Parent",
    content: "My kids have been training at Pro Black Belt West Prosper for a year now. We trained at other facilities previously, and my kids just never engaged. But working with Mr. Ellen and the instructor team has been amazing.",
    rating: 5,
    image: "/api/placeholder/60/60",
  },
  {
    id: 6,
    name: "Jessica Gonzalez",
    role: "Parent",
    content: "This is such a wonderful establishment. The staff are all hardworking and helpful. They care for every student as their own and celebrate accomplishments to the max. We love it here.",
    rating: 5,
    image: "/api/placeholder/60/60",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our{&amp;quot; &amp;quot;}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Families Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don’t just take our word for it. Here’s what our amazing students and parents 
            have to say about their experience at Pro Black Belt Academy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
                
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-purple-500/20 mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    &amp;quot;{testimonial.content}&amp;quot;
                  </p>
                  
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-muted-foreground">Happy Students</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
            <div className="text-muted-foreground">Reviews</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


