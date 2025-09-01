/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { 
  User, 
  Calendar, 
  CreditCard, 
  Award, 
  BookOpen, 
  Clock, 
  Target, 
  TrendingUp,
  Bell,
  Settings,
  LogOut,
  CheckCircle,
  Star,
  Users,
  Zap
} from "lucide-react"

// Mock data - in real app this would come from API
const memberData = {
  name: "John Smith",
  email: "john.smith@email.com",
  memberSince: "January 2023",
  currentBelt: "Blue Belt",
  nextBelt: "Purple Belt",
  progress: 65,
  classesAttended: 48,
  totalClasses: 60,
  nextClass: "Teen & Adult Martial Arts - Today 6:00 PM",
  upcomingClasses: [
    { date: "Today", time: "6:00 PM", class: "Teen & Adult Martial Arts", instructor: "Master Kim" },
    { date: "Tomorrow", time: "6:00 PM", class: "Teen & Adult Martial Arts", instructor: "Master Kim" },
    { date: "Friday", time: "6:00 PM", class: "Sparring Practice", instructor: "Master Lee" },
  ],
  achievements: [
    { title: "Perfect Attendance", description: "Attended 30 consecutive classes", date: "March 2024", icon: "ðŸ†" },
    { title: "Blue Belt Promotion", description: "Promoted to Blue Belt", date: "February 2024", icon: "ðŸ¥‹" },
    { title: "Tournament Participant", description: "Competed in Spring Tournament", date: "January 2024", icon: "âš”ï¸" },
  ],
  paymentHistory: [
    { date: "March 2024", amount: "$99.00", status: "Paid", method: "Auto-pay" },
    { date: "February 2024", amount: "$99.00", status: "Paid", method: "Auto-pay" },
    { date: "January 2024", amount: "$99.00", status: "Paid", method: "Auto-pay" },
  ]
}

export default function MemberPortalPage() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [loginForm, setLoginForm] = React.useState({ email: "", password: "" })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock login - in real app this would authenticate with backend
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-t-lg text-center">
              <div className="mx-auto mb-4">
                <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="h-8 w-8" />
                </div>
              </div>
              <CardTitle className="text-2xl">Member Portal</CardTitle>
              <CardDescription className="text-red-100">
                Access your training progress and account
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                    placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700"
                  size="lg"
                >
                  Sign In
                </Button>
              </form>
              <div className="mt-6 text-center">
                <Button variant="link" className="text-sm">
                  Forgot your password?
                </Button>
              </div>
              <div className="mt-4 text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Button variant="link" className="p-0 h-auto text-red-600">
                  Contact us to get started
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-8"
        >
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/api/placeholder/64/64" />
              <AvatarFallback className="bg-gradient-to-r from-red-600 to-blue-600 text-white text-xl">
                {memberData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {memberData.name.split(' ')[0]}!</h1>
              <p className="text-muted-foreground">Member since {memberData.memberSince}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => setIsLoggedIn(false)}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-4 gap-6 mb-8"
        >
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Current Belt</p>
                  <p className="text-2xl font-bold text-blue-600">{memberData.currentBelt}</p>
                </div>
                <Award className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Classes Attended</p>
                  <p className="text-2xl font-bold text-green-600">{memberData.classesAttended}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Progress to Next Belt</p>
                  <p className="text-2xl font-bold text-purple-600">{memberData.progress}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Next Class</p>
                  <p className="text-sm font-bold text-red-600">Today 6:00 PM</p>
                </div>
                <Clock className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="dashboard" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="classes">Classes</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Belt Progress */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="mr-2 h-5 w-5 text-purple-600" />
                      Belt Progress
                    </CardTitle>
                    <CardDescription>
                      Your journey to {memberData.nextBelt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span>{memberData.currentBelt}</span>
                        <span>{memberData.nextBelt}</span>
                      </div>
                      <Progress value={memberData.progress} className="h-3" />
                      <p className="text-sm text-muted-foreground">
                        {memberData.progress}% complete â€¢ {100 - memberData.progress}% remaining
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Classes */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-blue-600" />
                      Upcoming Classes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {memberData.upcomingClasses.map((cls, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div>
                            <p className="font-medium">{cls.class}</p>
                            <p className="text-sm text-muted-foreground">{cls.instructor}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{cls.date}</p>
                            <p className="text-sm text-muted-foreground">{cls.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Achievements */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="mr-2 h-5 w-5 text-yellow-600" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {memberData.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="text-2xl mb-2">{achievement.icon}</div>
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                        <Badge variant="secondary">{achievement.date}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="classes" className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Class Schedule & Attendance</CardTitle>
                  <CardDescription>
                    View your class schedule and track attendance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Interactive Class Calendar</h3>
                    <p className="text-muted-foreground mb-4">
                      Book classes, view schedules, and track your attendance
                    </p>
                    <Button className="bg-gradient-to-r from-red-600 to-blue-600">
                      View Full Calendar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="progress" className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Training Progress</CardTitle>
                  <CardDescription>
                    Track your martial arts journey and skill development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <TrendingUp className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Detailed Progress Tracking</h3>
                    <p className="text-muted-foreground mb-4">
                      View your skill assessments, belt requirements, and training milestones
                    </p>
                    <Button className="bg-gradient-to-r from-red-600 to-blue-600">
                      View Progress Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="billing" className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Billing & Payments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div>
                        <p className="font-medium text-green-800 dark:text-green-200">Account Status</p>
                        <p className="text-sm text-green-600 dark:text-green-400">Active - Auto-pay enabled</p>
                      </div>
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold">Payment History</h3>
                      {memberData.paymentHistory.map((payment, index) => (
                        <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{payment.date}</p>
                            <p className="text-sm text-muted-foreground">{payment.method}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{payment.amount}</p>
                            <Badge variant="secondary" className="text-green-600">
                              {payment.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>
                    Manage your account information and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <User className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Profile Management</h3>
                    <p className="text-muted-foreground mb-4">
                      Update your personal information, emergency contacts, and preferences
                    </p>
                    <Button className="bg-gradient-to-r from-red-600 to-blue-600">
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
