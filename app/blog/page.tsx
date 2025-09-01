/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  Eye, 
  MessageCircle, 
  Share2,
  Filter,
  BookOpen,
  Award,
  Users,
  Target,
  Zap,
  Heart,
  ArrowRight
} from "lucide-react"

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Martial Arts for Children's Development",
    excerpt: "Discover how martial arts training helps children build confidence, discipline, and social skills that benefit them throughout their lives.",
    content: "Martial arts training offers numerous benefits for children's physical, mental, and emotional development...",
    author: "Master Kim",
    authorImage: "/api/placeholder/40/40",
    date: "March 15, 2024",
    readTime: "5 min read",
    views: 1247,
    comments: 23,
    likes: 89,
    category: "Child Development",
    tags: ["Kids", "Development", "Benefits", "Character"],
    featured: true,
    image: "/api/placeholder/600/300"
  },
  {
    id: 2,
    title: "Preparing for Your First Martial Arts Tournament",
    excerpt: "Essential tips and strategies for students competing in their first martial arts tournament, from mental preparation to competition day logistics.",
    content: "Competing in your first tournament can be both exciting and nerve-wracking...",
    author: "Master Lee",
    authorImage: "/api/placeholder/40/40",
    date: "March 12, 2024",
    readTime: "7 min read",
    views: 892,
    comments: 15,
    likes: 67,
    category: "Competition",
    tags: ["Tournament", "Competition", "Tips", "Preparation"],
    featured: false,
    image: "/api/placeholder/600/300"
  },
  {
    id: 3,
    title: "The Philosophy Behind Traditional Martial Arts",
    excerpt: "Exploring the deeper meaning and philosophical foundations that make martial arts more than just physical training.",
    content: "Traditional martial arts encompass much more than physical techniques...",
    author: "Master Chen",
    authorImage: "/api/placeholder/40/40",
    date: "March 10, 2024",
    readTime: "6 min read",
    views: 654,
    comments: 31,
    likes: 78,
    category: "Philosophy",
    tags: ["Philosophy", "Traditional", "Mindset", "Wisdom"],
    featured: false,
    image: "/api/placeholder/600/300"
  },
  {
    id: 4,
    title: "Building Confidence Through Martial Arts Training",
    excerpt: "How consistent martial arts practice helps students of all ages develop unshakeable self-confidence and inner strength.",
    content: "Confidence is one of the most valuable gifts martial arts can provide...",
    author: "Instructor Sarah",
    authorImage: "/api/placeholder/40/40",
    date: "March 8, 2024",
    readTime: "4 min read",
    views: 1156,
    comments: 19,
    likes: 94,
    category: "Personal Growth",
    tags: ["Confidence", "Self-Esteem", "Growth", "Mindset"],
    featured: false,
    image: "/api/placeholder/600/300"
  },
  {
    id: 5,
    title: "Adult Martial Arts: It's Never Too Late to Start",
    excerpt: "Addressing common concerns and highlighting the unique benefits of beginning martial arts training as an adult.",
    content: "Many adults hesitate to start martial arts, thinking they're too old or out of shape...",
    author: "Instructor Mike",
    authorImage: "/api/placeholder/40/40",
    date: "March 5, 2024",
    readTime: "5 min read",
    views: 743,
    comments: 12,
    likes: 56,
    category: "Adult Training",
    tags: ["Adults", "Fitness", "Beginner", "Motivation"],
    featured: false,
    image: "/api/placeholder/600/300"
  },
  {
    id: 6,
    title: "The Importance of Respect in Martial Arts",
    excerpt: "Understanding how respect forms the foundation of martial arts training and character development.",
    content: "Respect is the cornerstone of all martial arts training...",
    author: "Master Kim",
    authorImage: "/api/placeholder/40/40",
    date: "March 3, 2024",
    readTime: "4 min read",
    views: 567,
    comments: 8,
    likes: 42,
    category: "Character",
    tags: ["Respect", "Values", "Character", "Tradition"],
    featured: false,
    image: "/api/placeholder/600/300"
  }
]

const categories = ["All", "Child Development", "Competition", "Philosophy", "Personal Growth", "Adult Training", "Character"]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [filteredPosts, setFilteredPosts] = React.useState(blogPosts)

  React.useEffect(() => {
    let filtered = blogPosts

    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    setFilteredPosts(filtered)
  }, [searchTerm, selectedCategory])

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

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
            Blog & News
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent italic">
              Martial Arts
            </span>{" "}
            Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest news, training tips, and insights from our expert instructors. 
            Discover the deeper aspects of martial arts and personal development.
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
              placeholder="Search articles, topics, or tags..."
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
        </motion.div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && !searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="overflow-hidden shadow-xl border-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-red-600 to-blue-600">
                      Featured Article
                    </Badge>
                  </div>
                  <div className="h-full bg-gradient-to-br from-red-100 to-blue-100 flex items-center justify-center">
                    <BookOpen className="h-24 w-24 text-red-600/50" />
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4 border-red-200 text-red-700">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-3xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={featuredPost.authorImage} />
                        <AvatarFallback className="bg-gradient-to-r from-red-600 to-blue-600 text-white">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{featuredPost.author}</p>
                        <p className="text-sm text-muted-foreground">{featuredPost.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {featuredPost.views}
                      </div>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 w-fit">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-red-100 to-blue-100 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-red-600/30" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-3 leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Author and Meta */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={post.authorImage} />
                          <AvatarFallback className="bg-gradient-to-r from-red-600 to-blue-600 text-white text-xs">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{post.author}</p>
                          <p className="text-xs text-muted-foreground">{post.date}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {post.views}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <Heart className="h-3 w-3 mr-1" />
                          {post.likes}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-3 w-3 mr-1" />
                          {post.comments}
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full text-sm">
                      Read Article
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or category filter
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="shadow-xl border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-blue-600 text-white p-8">
              <div className="text-center">
                <BookOpen className="h-12 w-12 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="text-red-100 max-w-2xl mx-auto mb-6">
                  Subscribe to our newsletter and never miss the latest martial arts insights, 
                  training tips, and academy news.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input 
                    placeholder="Enter your email" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <Button className="bg-white text-red-600 hover:bg-white/90">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Blog Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-4 gap-6 mt-12"
        >
          <Card className="shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
              <p className="text-muted-foreground">Articles Published</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
              <p className="text-muted-foreground">Monthly Readers</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-muted-foreground">Newsletter Subscribers</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
              <p className="text-muted-foreground">Expert Contributors</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
