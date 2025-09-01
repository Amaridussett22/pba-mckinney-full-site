/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Star, 
  Trophy, 
  Zap,
  Gift,
  Camera,
  Award,
  Target,
  Heart,
  Plus,
  Filter,
  Search,
  ExternalLink,
  ChevronRight
} from "lucide-react"
import { Input } from "@/components/ui/input"

// Mock events data
const events = [
  {
    id: 1,
    title: "Spring Tournament 2024",
    description: "Annual spring tournament featuring forms, sparring, and breaking competitions for all belt levels.",
    date: "April 15, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Pro Black Belt Academy - Main Dojo",
    category: "Tournament",
    type: "Competition",
    price: "$35 per division",
    capacity: 150,
    registered: 89,
    image: "/api/placeholder/400/200",
    organizer: "Master Kim",
    featured: true,
    status: "Registration Open",
    highlights: [
      "Multiple age and belt divisions",
      "Trophies for 1st, 2nd, 3rd place",
      "Professional photography",
      "Food and refreshments available"
    ],
    requirements: [
      "Current academy member",
      "Minimum 6 months training",
      "Proper tournament uniform"
    ]
  },
  {
    id: 2,
    title: "Black Belt Testing",
    description: "Quarterly black belt promotion testing for eligible candidates who have completed all requirements.",
    date: "March 30, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "Pro Black Belt Academy - Main Dojo",
    category: "Testing",
    type: "Promotion",
    price: "$150 testing fee",
    capacity: 12,
    registered: 8,
    image: "/api/placeholder/400/200",
    organizer: "Master Kim & Master Lee",
    featured: false,
    status: "Registration Open",
    highlights: [
      "Comprehensive skill evaluation",
      "Forms, sparring, and breaking",
      "Leadership demonstration",
      "Certificate ceremony"
    ],
    requirements: [
      "Minimum time in current rank",
      "Instructor recommendation",
      "All curriculum requirements met"
    ]
  },
  {
    id: 3,
    title: "Family Fun Day",
    description: "A special event for the whole family featuring games, demonstrations, and community building activities.",
    date: "April 6, 2024",
    time: "11:00 AM - 3:00 PM",
    location: "Pro Black Belt Academy - Full Facility",
    category: "Community",
    type: "Family Event",
    price: "Free for members",
    capacity: 200,
    registered: 156,
    image: "/api/placeholder/400/200",
    organizer: "All Instructors",
    featured: false,
    status: "Almost Full",
    highlights: [
      "Family-friendly activities",
      "Martial arts demonstrations",
      "Games and prizes",
      "BBQ lunch included"
    ],
    requirements: [
      "Open to all academy families",
      "RSVP required for catering"
    ]
  },
  {
    id: 4,
    title: "Self-Defense Workshop",
    description: "Intensive workshop covering practical self-defense techniques for teens and adults.",
    date: "March 23, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Pro Black Belt Academy - Training Room",
    category: "Workshop",
    type: "Educational",
    price: "$25 per person",
    capacity: 30,
    registered: 18,
    image: "/api/placeholder/400/200",
    organizer: "Instructor Mike",
    featured: false,
    status: "Registration Open",
    highlights: [
      "Practical techniques",
      "Situational awareness training",
      "Hands-on practice",
      "Take-home reference guide"
    ],
    requirements: [
      "Ages 13 and up",
      "Comfortable workout clothes",
      "No experience necessary"
    ]
  },
  {
    id: 5,
    title: "Little Dragons Graduation",
    description: "Special graduation ceremony for our youngest students completing the Little Dragons program.",
    date: "April 20, 2024",
    time: "10:00 AM - 11:30 AM",
    location: "Pro Black Belt Academy - Main Dojo",
    category: "Graduation",
    type: "Ceremony",
    price: "Free",
    capacity: 80,
    registered: 45,
    image: "/api/placeholder/400/200",
    organizer: "Instructor Sarah",
    featured: false,
    status: "Registration Open",
    highlights: [
      "Individual recognition",
      "Certificate presentation",
      "Photo opportunities",
      "Refreshments for families"
    ],
    requirements: [
      "Little Dragons program completion",
      "Family attendance encouraged"
    ]
  },
  {
    id: 6,
    title: "Summer Camp Open House",
    description: "Preview our exciting summer camp program with activities, demonstrations, and enrollment opportunities.",
    date: "May 4, 2024",
    time: "1:00 PM - 4:00 PM",
    location: "Pro Black Belt Academy - Full Facility",
    category: "Open House",
    type: "Information",
    price: "Free",
    capacity: 100,
    registered: 23,
    image: "/api/placeholder/400/200",
    organizer: "All Instructors",
    featured: false,
    status: "Registration Open",
    highlights: [
      "Camp activity previews",
      "Meet the counselors",
      "Early bird discounts",
      "Q&A sessions"
    ],
    requirements: [
      "Open to all families",
      "Ages 5-14 welcome"
    ]
  }
]

const categories = ["All", "Tournament", "Testing", "Community", "Workshop", "Graduation", "Open House"]

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [viewMode, setViewMode] = React.useState("upcoming")
  const [filteredEvents, setFilteredEvents] = React.useState(events)

  React.useEffect(() => {
    let filtered = events

    if (selectedCategory !== "All") {
      filtered = filtered.filter(event => event.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.type.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredEvents(filtered)
  }, [searchTerm, selectedCategory])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Registration Open": return "bg-green-100 text-green-800 border-green-200"
      case "Almost Full": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Full": return "bg-red-100 text-red-800 border-red-200"
      case "Completed": return "bg-gray-100 text-gray-800 border-gray-200"
      default: return "bg-blue-100 text-blue-800 border-blue-200"
    }
  }

  const getCapacityPercentage = (registered: number, capacity: number) => {
    return Math.round((registered / capacity) * 100)
  }

  const featuredEvent = events.find(event => event.featured)

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
            Events & Activities
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Academy{" "}
            <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent italic">
              Events
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for tournaments, workshops, graduations, and community events. 
            Build connections, showcase skills, and celebrate achievements together.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events, workshops, tournaments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap ${
                  selectedCategory === category 
                    ? "bg-gradient-to-r from-red-600 to-blue-600" 
                    : ""
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
          <Button className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700">
            <Plus className="mr-2 h-4 w-4" />
            Create Event
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
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="mt-8">
              {/* Featured Event */}
              {featuredEvent && selectedCategory === "All" && !searchTerm && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-12"
                >
                  <Card className="overflow-hidden shadow-xl border-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="relative h-64 lg:h-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gradient-to-r from-red-600 to-blue-600">
                            Featured Event
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge className={`${getStatusColor(featuredEvent.status)}`}>
                            {featuredEvent.status}
                          </Badge>
                        </div>
                        <div className="h-full bg-gradient-to-br from-red-100 to-blue-100 flex items-center justify-center">
                          <Trophy className="h-24 w-24 text-red-600/50" />
                        </div>
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <Badge variant="outline" className="w-fit mb-4 border-red-200 text-red-700">
                          {featuredEvent.category}
                        </Badge>
                        <h2 className="text-3xl font-bold mb-4 leading-tight">
                          {featuredEvent.title}
                        </h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {featuredEvent.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center text-sm">
                            <Calendar className="h-4 w-4 mr-2 text-red-600" />
                            {featuredEvent.date}
                          </div>
                          <div className="flex items-center text-sm">
                            <Clock className="h-4 w-4 mr-2 text-blue-600" />
                            {featuredEvent.time}
                          </div>
                          <div className="flex items-center text-sm">
                            <MapPin className="h-4 w-4 mr-2 text-green-600" />
                            {featuredEvent.location}
                          </div>
                          <div className="flex items-center text-sm">
                            <Users className="h-4 w-4 mr-2 text-purple-600" />
                            {featuredEvent.registered}/{featuredEvent.capacity} registered
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-6">
                          <div className="text-2xl font-bold text-green-600">
                            {featuredEvent.price}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {getCapacityPercentage(featuredEvent.registered, featuredEvent.capacity)}% full
                          </div>
                        </div>

                        <Button className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 w-fit">
                          Register Now
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}

              {/* Events Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.filter(event => !event.featured).map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="relative h-48 bg-gradient-to-br from-red-100 to-blue-100 flex items-center justify-center">
                        {event.category === "Tournament" && <Trophy className="h-16 w-16 text-red-600/30" />}
                        {event.category === "Testing" && <Award className="h-16 w-16 text-blue-600/30" />}
                        {event.category === "Community" && <Heart className="h-16 w-16 text-green-600/30" />}
                        {event.category === "Workshop" && <Target className="h-16 w-16 text-purple-600/30" />}
                        {event.category === "Graduation" && <Star className="h-16 w-16 text-yellow-600/30" />}
                        {event.category === "Open House" && <Users className="h-16 w-16 text-indigo-600/30" />}
                        
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="text-xs">
                            {event.category}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge className={`text-xs ${getStatusColor(event.status)}`}>
                            {event.status}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-3 leading-tight">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                            {event.description}
                          </p>
                          
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-sm">
                              <Calendar className="h-3 w-3 mr-2 text-red-600" />
                              {event.date}
                            </div>
                            <div className="flex items-center text-sm">
                              <Clock className="h-3 w-3 mr-2 text-blue-600" />
                              {event.time}
                            </div>
                            <div className="flex items-center text-sm">
                              <MapPin className="h-3 w-3 mr-2 text-green-600" />
                              {event.location.split(' - ')[0]}
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-t pt-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="font-bold text-green-600">
                              {event.price}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              <Users className="h-3 w-3 inline mr-1" />
                              {event.registered}/{event.capacity}
                            </div>
                          </div>
                          
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              Details
                            </Button>
                            <Button 
                              size="sm" 
                              className="flex-1 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700"
                              disabled={event.status === "Full"}
                            >
                              {event.status === "Full" ? "Full" : "Register"}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="calendar" className="mt-8">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-6 w-6" />
                    Event Calendar
                  </CardTitle>
                  <CardDescription className="text-red-100">
                    Interactive calendar view of all academy events
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-12 text-center">
                  <Calendar className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Interactive Event Calendar</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    View all academy events in a comprehensive calendar format. Filter by event type, 
                    register directly from the calendar, and sync with your personal calendar.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="p-4 border rounded-lg">
                      <div className="text-2xl mb-2">ðŸ“…</div>
                      <h4 className="font-semibold">Monthly View</h4>
                      <p className="text-sm text-muted-foreground">See all events at once</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="text-2xl mb-2">ðŸ””</div>
                      <h4 className="font-semibold">Reminders</h4>
                      <p className="text-sm text-muted-foreground">Never miss an event</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="text-2xl mb-2">ðŸ“±</div>
                      <h4 className="font-semibold">Sync Calendar</h4>
                      <p className="text-sm text-muted-foreground">Add to your phone</p>
                    </div>
                  </div>
                  <Button className="mt-6 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700">
                    Launch Calendar
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="past" className="mt-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Camera className="mr-2 h-6 w-6" />
                    Past Events & Highlights
                  </CardTitle>
                  <CardDescription>
                    Relive the memories from our previous events and celebrations
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-12 text-center">
                  <Camera className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Event Gallery & Archives</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Browse photos, videos, and highlights from past tournaments, graduations, 
                    and community events. See the amazing achievements of our academy family.
                  </p>
                  <Button className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700">
                    View Gallery
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Event Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-4 gap-6 mt-12"
        >
          <Card className="shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-red-600 mb-2">24+</div>
              <p className="text-muted-foreground">Events This Year</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-muted-foreground">Total Participants</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">12</div>
              <p className="text-muted-foreground">Tournaments Hosted</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
