/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Star, CheckCircle, Phone, Mail, MapPin } from "lucide-react"

const timeSlots = [
  { time: "4:00 PM", available: true },
  { time: "5:00 PM", available: true },
  { time: "6:00 PM", available: false },
  { time: "7:00 PM", available: true },
  { time: "8:00 PM", available: true },
]

const programs = [
  { id: "kids", name: "Kids Martial Arts (Ages 4-12)", price: "Free Trial" },
  { id: "teens", name: "Teen & Adult Classes (Ages 13+)", price: "Free Trial" },
  { id: "after-school", name: "After School Program", price: "Free Trial" },
]

export default function BookTrialPage() {
  const [selectedProgram, setSelectedProgram] = React.useState("")
  const [selectedDate, setSelectedDate] = React.useState("")
  const [selectedTime, setSelectedTime] = React.useState("")
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    experience: "",
    goals: "",
    emergencyContact: "",
    emergencyPhone: "",
    waiver: false,
    marketing: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Booking submitted:", { selectedProgram, selectedDate, selectedTime, formData })
  }

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
            Free Trial Class
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your{" "}
            <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent italic">
              Free Trial
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the Pro Black Belt Academy difference with a complimentary trial class. 
            No commitment required - just come and see what we're all about!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <Calendar className="mr-2 h-6 w-6" />
                  Book Your Free Trial
                </CardTitle>
                <CardDescription className="text-red-100">
                  Fill out the form below to schedule your complimentary trial class
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Program Selection */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">Select Program</Label>
                    <RadioGroup value={selectedProgram} onValueChange={setSelectedProgram}>
                      {programs.map((program) => (
                        <motion.div
                          key={program.id}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <RadioGroupItem value={program.id} id={program.id} />
                          <Label htmlFor={program.id} className="flex-1 cursor-pointer">
                            <div className="font-medium">{program.name}</div>
                            <div className="text-sm text-green-600 font-semibold">{program.price}</div>
                          </Label>
                        </motion.div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Date & Time Selection */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred Time</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((slot) => (
                          <Button
                            key={slot.time}
                            type="button"
                            variant={selectedTime === slot.time ? "default" : "outline"}
                            disabled={!slot.available}
                            onClick={() => setSelectedTime(slot.time)}
                            className={`${
                              selectedTime === slot.time 
                                ? "bg-gradient-to-r from-red-600 to-blue-600" 
                                : ""
                            } ${!slot.available ? "opacity-50" : ""}`}
                          >
                            <Clock className="mr-1 h-3 w-3" />
                            {slot.time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">Personal Information</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input
                          id="age"
                          type="number"
                          value={formData.age}
                          onChange={(e) => setFormData({...formData, age: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Previous Experience</Label>
                        <Select value={formData.experience} onValueChange={(value) => setFormData({...formData, experience: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No Experience</SelectItem>
                            <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                            <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                            <SelectItem value="advanced">Advanced (3+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Goals & Emergency Contact */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="goals">Goals & Expectations</Label>
                      <Textarea
                        id="goals"
                        placeholder="What do you hope to achieve through martial arts?"
                        value={formData.goals}
                        onChange={(e) => setFormData({...formData, goals: e.target.value})}
                        rows={3}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                        <Input
                          id="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                        <Input
                          id="emergencyPhone"
                          type="tel"
                          value={formData.emergencyPhone}
                          onChange={(e) => setFormData({...formData, emergencyPhone: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Agreements */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="waiver"
                        checked={formData.waiver}
                        onCheckedChange={(checked) => setFormData({...formData, waiver: checked as boolean})}
                      />
                      <Label htmlFor="waiver" className="text-sm">
                        I agree to the waiver and liability terms *
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="marketing"
                        checked={formData.marketing}
                        onCheckedChange={(checked) => setFormData({...formData, marketing: checked as boolean})}
                      />
                      <Label htmlFor="marketing" className="text-sm">
                        I'd like to receive updates about classes and events
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-lg py-6"
                    disabled={!selectedProgram || !selectedDate || !selectedTime || !formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.waiver}
                  >
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Book My Free Trial Class
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* What to Expect */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center">
                  <Star className="mr-2 h-5 w-5" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Meet our certified instructors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Experience our teaching methods</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Tour our modern facilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Learn basic techniques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">No pressure, no commitment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-500 mr-3" />
                  <div>
                    <div className="font-medium">(469) 481-2782</div>
                    <div className="text-sm text-muted-foreground">Call us directly</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-500 mr-3" />
                  <div>
                    <div className="font-medium">info@problackbeltacademy.com</div>
                    <div className="text-sm text-muted-foreground">Email us</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                  <div>
                    <div className="font-medium">3620 W. First Street Unit 10</div>
                    <div className="font-medium">Prosper, Texas 75078</div>
                    <div className="text-sm text-muted-foreground">Little Elm area</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Offer */}
            <Card className="shadow-lg border-2 border-yellow-400">
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-t-lg">
                <CardTitle className="flex items-center">
                  ðŸŽ‰ Special Offer
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">FREE</div>
                  <div className="text-lg font-semibold mb-2">Trial Class + Uniform</div>
                  <div className="text-sm text-muted-foreground">
                    Book today and receive a complimentary uniform with your trial class!
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
