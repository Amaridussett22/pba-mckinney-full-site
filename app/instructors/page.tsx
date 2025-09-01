/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Star, 
  Award, 
  Calendar, 
  Users, 
  MessageCircle, 
  Mail,
  Phone,
  MapPin,
  Clock,
  Target,
  Zap
} from "lucide-react"

// Mock instructor data
const instructors = [
  {
    id: 1,
    name: "Master Kim",
    title: "Head Instructor & School Owner",
    image: "/api/placeholder/200/200",
    belt: "6th Degree Black Belt",
    experience: "25+ Years",
    specialties: ["Traditional Taekwondo", "Self-Defense", "Competition Training", "Leadership Development"],
    certifications: ["Kukkiwon Certified", "USA Taekwondo Certified", "CPR/First Aid", "Youth Development"],
    bio: "Master Kim has dedicated over 25 years to martial arts and has been teaching for 15 years. He believes in building character through discipline and respect, helping students achieve their personal best both in martial arts and in life.",
    achievements: [
      "Founded Pro Black Belt Academy in 2010",
      "Trained over 500 students to black belt",
      "Regional Tournament Champion (2015-2018)",
      "Youth Mentor of the Year (2020)"
    ],
    classes: ["Teen & Adult Martial Arts", "Advanced Training", "Competition Team"],
    rating: 4.9,
    reviews: 127,
    languages: ["English", "Korean"],
    philosophy: "Every student has the potential to be great. My job is to help them discover that greatness through martial arts training and character development."
  },
  {
    id: 2,
    name: "Master Lee",
    title: "Senior Instructor",
    image: "/api/placeholder/200/200",
    belt: "5th Degree Black Belt",
    experience: "18+ Years",
    specialties: ["Kids Martial Arts", "Forms & Techniques", "Sparring", "Character Development"],
    certifications: ["Kukkiwon Certified", "Youth Sports Certified", "Anti-Bullying Specialist", "CPR/First Aid"],
    bio: "Master Lee specializes in working with children and teens, helping them build confidence and discipline through martial arts. Her patient and encouraging teaching style makes her a favorite among young students.",
    achievements: [
      "Kids Program Developer",
      "Anti-Bullying Workshop Leader",
      "State Forms Champion (2019)",
      "Instructor of the Year (2021)"
    ],
    classes: ["Kids Martial Arts", "Teen & Adult Martial Arts", "Sparring Practice"],
    rating: 4.8,
    reviews: 89,
    languages: ["English"],
    philosophy: "Children learn best when they feel safe, supported, and challenged. I create an environment where every child can thrive and discover their inner strength."
  },
  {
    id: 3,
    name: "Master Chen",
    title: "Advanced Training Specialist",
    image: "/api/placeholder/200/200",
    belt: "4th Degree Black Belt",
    experience: "15+ Years",
    specialties: ["Advanced Techniques", "Forms Mastery", "Meditation", "Traditional Philosophy"],
    certifications: ["Traditional Martial Arts Certified", "Meditation Instructor", "Forms Judge", "CPR/First Aid"],
    bio: "Master Chen brings deep knowledge of traditional martial arts philosophy and advanced techniques. He focuses on the mental and spiritual aspects of martial arts training alongside physical development.",
    achievements: [
      "Traditional Forms Specialist",
      "Meditation Program Creator",
      "National Forms Judge",
      "Philosophy Workshop Leader"
    ],
    classes: ["Advanced Training", "Forms & Techniques", "Open Training"],
    rating: 4.9,
    reviews: 64,
    languages: ["English", "Mandarin"],
    philosophy: "True martial arts mastery comes from understanding the harmony between mind, body, and spirit. I guide students on this deeper journey of self-discovery."
  },
  {
    id: 4,
    name: "Instructor Sarah",
    title: "Youth Program Coordinator",
    image: "/api/placeholder/200/200",
    belt: "2nd Degree Black Belt",
    experience: "8+ Years",
    specialties: ["Little Dragons", "After School Program", "Youth Development", "Fun Learning"],
    certifications: ["Youth Development Certified", "Early Childhood Education", "First Aid/CPR", "Playground Safety"],
    bio: "Instructor Sarah specializes in our youngest students, making martial arts fun and engaging for children ages 3-8. Her background in early childhood education helps create age-appropriate learning experiences.",
    achievements: [
      "Little Dragons Program Creator",
      "After School Program Manager",
      "Youth Safety Advocate",
      "Community Volunteer Award (2022)"
    ],
    classes: ["Little Dragons", "After School Program", "Kids Martial Arts"],
    rating: 4.7,
    reviews: 52,
    languages: ["English", "Spanish"],
    philosophy: "Learning should be fun! I believe in making martial arts accessible and enjoyable for our youngest students while building important life skills."
  },
  {
    id: 5,
    name: "Instructor Mike",
    title: "Fitness & Conditioning Specialist",
    image: "/api/placeholder/200/200",
    belt: "1st Degree Black Belt",
    experience: "6+ Years",
    specialties: ["Fitness Training", "Strength & Conditioning", "Adult Programs", "Self-Defense"],
    certifications: ["Personal Training Certified", "Strength & Conditioning", "Self-Defense Instructor", "CPR/First Aid"],
    bio: "Instructor Mike brings a fitness-focused approach to martial arts training. He helps adult students achieve their fitness goals while learning practical self-defense skills.",
    achievements: [
      "Adult Fitness Program Developer",
      "Self-Defense Workshop Leader",
      "Fitness Challenge Coordinator",
      "Health & Wellness Advocate"
    ],
    classes: ["Adult Fitness Classes", "Self-Defense Workshops", "Conditioning Training"],
    rating: 4.6,
    reviews: 38,
    languages: ["English"],
    philosophy: "Martial arts is the perfect combination of physical fitness, mental discipline, and practical skills. I help adults discover the benefits of this amazing art."
  }
]

export default function InstructorsPage() {
  const [selectedInstructor, setSelectedInstructor] = React.useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-red-100 to-blue-100 text-red-800">
            Our Team
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent italic">
              Expert Instructors
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our certified instructors bring decades of combined experience, passion for teaching, 
            and dedication to helping every student achieve their martial arts goals.
          </p>
        </motion.div>

        {/* Instructors Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-red-600 to-blue-600" />
                
                <CardHeader className="text-center pb-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative mx-auto mb-4"
                  >
                    <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                      <AvatarImage src={instructor.image} alt={instructor.name} />
                      <AvatarFallback className="bg-gradient-to-r from-red-600 to-blue-600 text-white text-2xl">
                        {instructor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full p-2">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                  </motion.div>
                  
                  <CardTitle className="text-xl">{instructor.name}</CardTitle>
                  <CardDescription className="font-medium text-red-600">
                    {instructor.title}
                  </CardDescription>
                  
                  <div className="flex items-center justify-center space-x-4 mt-2">
                    <Badge variant="outline" className="border-blue-200 text-blue-700">
                      {instructor.belt}
                    </Badge>
                    <Badge variant="outline" className="border-green-200 text-green-700">
                      {instructor.experience}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Rating */}
                  <div className="flex items-center justify-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(instructor.rating) 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{instructor.rating}</span>
                    <span className="text-sm text-muted-foreground">({instructor.reviews} reviews)</span>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {instructor.bio}
                  </p>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {instructor.specialties.slice(0, 3).map((specialty, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                      {instructor.specialties.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{instructor.specialties.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Classes */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      Classes:
                    </h4>
                    <div className="space-y-1">
                      {instructor.classes.map((cls, i) => (
                        <div key={i} className="text-xs text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {cls}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex items-center text-sm">
                    <MessageCircle className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="text-muted-foreground">
                      Languages: {instructor.languages.join(', ')}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => setSelectedInstructor(instructor.id)}
                    >
                      View Profile
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700"
                    >
                      Book Class
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-4 gap-6 mt-16"
        >
          <Card className="shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-red-600 mb-2">70+</div>
              <p className="text-muted-foreground">Combined Years Experience</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-muted-foreground">Students Trained</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <p className="text-muted-foreground">Certifications</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">4.8</div>
              <p className="text-muted-foreground">Average Rating</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="shadow-xl border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-blue-600 text-white p-8">
              <div className="text-center">
                <Target className="h-12 w-12 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Teaching Philosophy</h2>
                <p className="text-red-100 max-w-3xl mx-auto">
                  At Pro Black Belt Academy, we believe that martial arts is more than just physical training. 
                  It's about developing character, building confidence, and creating leaders who make a positive 
                  impact in their communities.
                </p>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Individual Attention</h3>
                  <p className="text-muted-foreground text-sm">
                    Every student receives personalized instruction tailored to their unique goals and learning style.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Character Development</h3>
                  <p className="text-muted-foreground text-sm">
                    We focus on building respect, discipline, perseverance, and leadership skills alongside martial arts techniques.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Continuous Growth</h3>
                  <p className="text-muted-foreground text-sm">
                    Our instructors are committed to ongoing education and bringing the latest teaching methods to our students.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Train with Our Expert Team?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the difference that quality instruction makes. Book your free trial class today 
            and meet our amazing instructors in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700">
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Trial
            </Button>
            <Button size="lg" variant="outline">
              <Phone className="mr-2 h-5 w-5" />
              Call (469) 481-2782
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
