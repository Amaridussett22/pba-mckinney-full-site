/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  User, 
  ChevronLeft, 
  ChevronRight,
  Plus,
  Filter,
  Search
} from "lucide-react"
import { Input } from "@/components/ui/input"

// Mock class data
const classSchedule = {
  Monday: [
    { time: "4:00 PM", class: "Kids Martial Arts (Ages 4-8)", instructor: "Master Kim", capacity: 15, enrolled: 12, location: "Main Dojo" },
    { time: "5:00 PM", class: "Kids Martial Arts (Ages 9-12)", instructor: "Master Lee", capacity: 15, enrolled: 14, location: "Main Dojo" },
    { time: "6:00 PM", class: "Teen & Adult Martial Arts", instructor: "Master Kim", capacity: 20, enrolled: 16, location: "Main Dojo" },
    { time: "7:00 PM", class: "Advanced Training", instructor: "Master Chen", capacity: 12, enrolled: 8, location: "Training Room" },
  ],
  Tuesday: [
    { time: "4:00 PM", class: "After School Program", instructor: "Instructor Sarah", capacity: 25, enrolled: 22, location: "Main Dojo" },
    { time: "6:00 PM", class: "Teen & Adult Martial Arts", instructor: "Master Lee", capacity: 20, enrolled: 18, location: "Main Dojo" },
    { time: "7:00 PM", class: "Sparring Practice", instructor: "Master Kim", capacity: 16, enrolled: 12, location: "Main Dojo" },
  ],
  Wednesday: [
    { time: "4:00 PM", class: "Kids Martial Arts (Ages 4-8)", instructor: "Master Kim", capacity: 15, enrolled: 13, location: "Main Dojo" },
    { time: "5:00 PM", class: "Kids Martial Arts (Ages 9-12)", instructor: "Master Lee", capacity: 15, enrolled: 15, location: "Main Dojo" },
    { time: "6:00 PM", class: "Teen & Adult Martial Arts", instructor: "Master Kim", capacity: 20, enrolled: 17, location: "Main Dojo" },
    { time: "7:00 PM", class: "Forms & Techniques", instructor: "Master Chen", capacity: 18, enrolled: 14, location: "Main Dojo" },
  ],
  Thursday: [
    { time: "4:00 PM", class: "After School Program", instructor: "Instructor Sarah", capacity: 25, enrolled: 24, location: "Main Dojo" },
    { time: "6:00 PM", class: "Teen & Adult Martial Arts", instructor: "Master Lee", capacity: 20, enrolled: 19, location: "Main Dojo" },
    { time: "7:00 PM", class: "Competition Team", instructor: "Master Kim", capacity: 12, enrolled: 10, location: "Training Room" },
  ],
  Friday: [
    { time: "4:00 PM", class: "Kids Martial Arts (Ages 4-8)", instructor: "Master Kim", capacity: 15, enrolled: 11, location: "Main Dojo" },
    { time: "5:00 PM", class: "Kids Martial Arts (Ages 9-12)", instructor: "Master Lee", capacity: 15, enrolled: 13, location: "Main Dojo" },
    { time: "6:00 PM", class: "Teen & Adult Martial Arts", instructor: "Master Kim", capacity: 20, enrolled: 15, location: "Main Dojo" },
    { time: "7:00 PM", class: "Open Training", instructor: "Master Chen", capacity: 25, enrolled: 18, location: "Main Dojo" },
  ],
  Saturday: [
    { time: "9:00 AM", class: "Little Dragons (Ages 3-4)", instructor: "Instructor Sarah", capacity: 10, enrolled: 8, location: "Main Dojo" },
    { time: "10:00 AM", class: "Kids Martial Arts (Ages 5-8)", instructor: "Master Kim", capacity: 15, enrolled: 14, location: "Main Dojo" },
    { time: "11:00 AM", class: "Kids Martial Arts (Ages 9-12)", instructor: "Master Lee", capacity: 15, enrolled: 12, location: "Main Dojo" },
    { time: "12:00 PM", class: "Teen & Adult Martial Arts", instructor: "Master Kim", capacity: 20, enrolled: 16, location: "Main Dojo" },
    { time: "1:00 PM", class: "Tournament Training", instructor: "Master Chen", capacity: 16, enrolled: 11, location: "Main Dojo" },
  ],
  Sunday: [
    { time: "Closed", class: "Family Day", instructor: "", capacity: 0, enrolled: 0, location: "" },
  ]
}

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export default function ClassesPage() {
  const [selectedDay, setSelectedDay] = React.useState("Monday")
  const [viewMode, setViewMode] = React.useState("schedule")
  const [searchTerm, setSearchTerm] = React.useState("")

  const getCapacityColor = (enrolled: number, capacity: number) => {
    const percentage = (enrolled / capacity) * 100
    if (percentage >= 90) return "text-red-600 bg-red-50 border-red-200"
    if (percentage >= 70) return "text-yellow-600 bg-yellow-50 border-yellow-200"
    return "text-green-600 bg-green-50 border-green-200"
  }

  const getCapacityBadge = (enrolled: number, capacity: number) => {
    const percentage = (enrolled / capacity) * 100
    if (percentage >= 90) return "destructive"
    if (percentage >= 70) return "secondary"
    return "default"
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
            Class Schedule
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent italic">
              Weekly Classes
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find the perfect class for your schedule. All classes are designed to build character, 
            confidence, and martial arts skills in a supportive environment.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search classes, instructors, or times..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            Filter Classes
          </Button>
          <Button className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700">
            <Plus className="mr-2 h-4 w-4" />
            Book Trial Class
          </Button>
        </motion.div>

        {/* View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Tabs value={viewMode} onValueChange={setViewMode}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="schedule">Weekly Schedule</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            </TabsList>

            <TabsContent value="schedule" className="mt-8">
              {/* Day Navigation */}
              <div className="flex items-center justify-center mb-8">
                <Button variant="outline" size="icon" className="mr-4">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex space-x-2 overflow-x-auto">
                  {daysOfWeek.map((day) => (
                    <Button
                      key={day}
                      variant={selectedDay === day ? "default" : "outline"}
                      onClick={() => setSelectedDay(day)}
                      className={`min-w-[100px] ${
                        selectedDay === day 
                          ? "bg-gradient-to-r from-red-600 to-blue-600" 
                          : ""
                      }`}
                    >
                      {day}
                    </Button>
                  ))}
                </div>
                <Button variant="outline" size="icon" className="ml-4">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Classes for Selected Day */}
              <motion.div
                key={selectedDay}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="grid gap-6"
              >
                {selectedDay === "Sunday" ? (
                  <Card className="shadow-lg">
                    <CardContent className="p-12 text-center">
                      <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Family Day</h3>
                      <p className="text-muted-foreground">
                        We're closed on Sundays to give our families time to rest and recharge. 
                        See you Monday!
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  classSchedule[selectedDay as keyof typeof classSchedule].map((cls, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="grid md:grid-cols-4 gap-4 items-center">
                            {/* Time */}
                            <div className="flex items-center space-x-3">
                              <div className="p-3 rounded-lg bg-gradient-to-r from-red-100 to-blue-100">
                                <Clock className="h-6 w-6 text-red-600" />
                              </div>
                              <div>
                                <p className="font-bold text-lg">{cls.time}</p>
                                <p className="text-sm text-muted-foreground">60 minutes</p>
                              </div>
                            </div>

                            {/* Class Info */}
                            <div className="md:col-span-2">
                              <h3 className="font-bold text-lg mb-2">{cls.class}</h3>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <User className="h-4 w-4 mr-1" />
                                  {cls.instructor}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {cls.location}
                                </div>
                              </div>
                            </div>

                            {/* Capacity & Action */}
                            <div className="flex items-center justify-between">
                              <div className="text-center">
                                <div className={`inline-flex items-center px-3 py-1 rounded-full border text-sm font-medium ${getCapacityColor(cls.enrolled, cls.capacity)}`}>
                                  <Users className="h-3 w-3 mr-1" />
                                  {cls.enrolled}/{cls.capacity}
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {cls.capacity - cls.enrolled} spots left
                                </p>
                              </div>
                              <Button 
                                className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700"
                                disabled={cls.enrolled >= cls.capacity}
                              >
                                {cls.enrolled >= cls.capacity ? "Full" : "Book Now"}
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))
                )}
              </motion.div>
            </TabsContent>

            <TabsContent value="calendar" className="mt-8">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-6 w-6" />
                    Interactive Calendar
                  </CardTitle>
                  <CardDescription className="text-red-100">
                    Full calendar view with booking capabilities
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-12 text-center">
                  <Calendar className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Advanced Calendar System</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Our interactive calendar system allows you to view all classes, book sessions, 
                    track attendance, and manage your martial arts schedule with ease.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="p-4 border rounded-lg">
                      <div className="text-2xl mb-2">ðŸ“…</div>
                      <h4 className="font-semibold">Monthly View</h4>
                      <p className="text-sm text-muted-foreground">See all classes at a glance</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="text-2xl mb-2">ðŸ””</div>
                      <h4 className="font-semibold">Reminders</h4>
                      <p className="text-sm text-muted-foreground">Never miss a class</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="text-2xl mb-2">ðŸ“Š</div>
                      <h4 className="font-semibold">Progress Tracking</h4>
                      <p className="text-sm text-muted-foreground">Monitor attendance</p>
                    </div>
                  </div>
                  <Button className="mt-6 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700">
                    Launch Full Calendar
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-4 gap-6 mt-12"
        >
          <Card className="shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-red-600 mb-2">35+</div>
              <p className="text-muted-foreground">Classes per Week</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <p className="text-muted-foreground">Days Open</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">5</div>
              <p className="text-muted-foreground">Expert Instructors</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">All Ages</div>
              <p className="text-muted-foreground">Programs Available</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
