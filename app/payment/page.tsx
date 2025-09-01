"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { 
  CreditCard, 
  Shield, 
  CheckCircle, 
  Calendar, 
  Users, 
  Star,
  Lock,
  Zap,
  Gift,
  Clock,
  DollarSign,
  Percent,
  Award,
  Target
} from "lucide-react"

// Mock pricing data
const membershipPlans = [
  {
    id: "unlimited",
    name: "Unlimited Monthly",
    price: 99,
    originalPrice: 120,
    description: "Unlimited classes, all programs included",
    features: [
      "Unlimited classes per month",
      "All programs included",
      "Free uniform",
      "Belt testing included",
      "Family discounts available",
      "No long-term contract"
    ],
    popular: true,
    savings: 21
  },
  {
    id: "twice-weekly",
    name: "Twice Weekly",
    price: 79,
    originalPrice: 95,
    description: "Perfect for busy schedules",
    features: [
      "8 classes per month",
      "All programs included",
      "Free uniform",
      "Belt testing included",
      "Make-up classes available",
      "Flexible scheduling"
    ],
    popular: false,
    savings: 16
  },
  {
    id: "once-weekly",
    name: "Once Weekly",
    price: 59,
    originalPrice: 70,
    description: "Great for beginners",
    features: [
      "4 classes per month",
      "All programs included",
      "Free uniform",
      "Belt testing included",
      "Perfect for new students",
      "Low commitment option"
    ],
    popular: false,
    savings: 11
  }
]

const addOns = [
  {
    id: "private-lessons",
    name: "Private Lessons",
    price: 75,
    description: "One-on-one instruction (per session)",
    icon: Target
  },
  {
    id: "tournament-training",
    name: "Tournament Training",
    price: 25,
    description: "Specialized competition preparation",
    icon: Award
  },
  {
    id: "after-school",
    name: "After School Program",
    price: 150,
    description: "Full after-school care with martial arts",
    icon: Clock
  }
]

export default function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = React.useState("unlimited")
  const [selectedAddOns, setSelectedAddOns] = React.useState<string[]>([])
  const [paymentMethod, setPaymentMethod] = React.useState("card")
  const [autoRenew, setAutoRenew] = React.useState(true)
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
    city: "",
    state: "",
    zipCode: ""
  })

  const selectedPlanData = membershipPlans.find(plan => plan.id === selectedPlan)
  const selectedAddOnData = addOns.filter(addon => selectedAddOns.includes(addon.id))
  
  const subtotal = (selectedPlanData?.price || 0) + selectedAddOnData.reduce((sum, addon) => sum + addon.price, 0)
  const discount = autoRenew ? Math.round(subtotal * 0.1) : 0
  const tax = Math.round((subtotal - discount) * 0.0825) // Texas sales tax
  const total = subtotal - discount + tax

  const handleAddOnToggle = (addonId: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle payment processing
    console.log("Processing payment:", { selectedPlan, selectedAddOns, total, formData })
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
            Secure Payment
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent italic">
              Membership
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start your martial arts journey today with flexible membership options 
            designed to fit your schedule and goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Plan Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Membership Plans */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-6 w-6 text-red-600" />
                  Select Membership Plan
                </CardTitle>
                <CardDescription>
                  Choose the plan that best fits your training goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
                  <div className="space-y-4">
                    {membershipPlans.map((plan) => (
                      <motion.div
                        key={plan.id}
                        whileHover={{ scale: 1.02 }}
                        className={`relative p-6 border rounded-lg cursor-pointer transition-all ${
                          selectedPlan === plan.id 
                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <RadioGroupItem value={plan.id} id={plan.id} />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-3">
                                <Label htmlFor={plan.id} className="text-lg font-semibold cursor-pointer">
                                  {plan.name}
                                </Label>
                                {plan.popular && (
                                  <Badge className="bg-gradient-to-r from-red-600 to-blue-600">
                                    Most Popular
                                  </Badge>
                                )}
                              </div>
                              <div className="text-right">
                                <div className="flex items-center space-x-2">
                                  <span className="text-2xl font-bold text-green-600">
                                    ${plan.price}
                                  </span>
                                  <span className="text-sm text-muted-foreground line-through">
                                    ${plan.originalPrice}
                                  </span>
                                </div>
                                <div className="text-sm text-green-600 font-medium">
                                  Save ${plan.savings}/month
                                </div>
                              </div>
                            </div>
                            <p className="text-muted-foreground mb-3">{plan.description}</p>
                            <div className="grid md:grid-cols-2 gap-2">
                              {plan.features.map((feature, index) => (
                                <div key={index} className="flex items-center text-sm">
                                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Add-ons */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="mr-2 h-6 w-6 text-blue-600" />
                  Optional Add-ons
                </CardTitle>
                <CardDescription>
                  Enhance your training with additional services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {addOns.map((addon) => (
                    <motion.div
                      key={addon.id}
                      whileHover={{ scale: 1.01 }}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedAddOns.includes(addon.id)
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleAddOnToggle(addon.id)}
                    >
                      <div className="flex items-center space-x-4">
                        <Checkbox
                          checked={selectedAddOns.includes(addon.id)}
                          onCheckedChange={() => handleAddOnToggle(addon.id)}
                        />
                        <addon.icon className="h-6 w-6 text-blue-600" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold">{addon.name}</h3>
                            <span className="text-lg font-bold text-green-600">
                              +${addon.price}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{addon.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-2 h-6 w-6 text-green-600" />
                  Payment Information
                </CardTitle>
                <CardDescription>
                  Secure payment processing with 256-bit SSL encryption
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Payment Method Selection */}
                  <div>
                    <Label className="text-base font-medium mb-3 block">Payment Method</Label>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center cursor-pointer">
                          <CreditCard className="h-4 w-4 mr-2" />
                          Credit/Debit Card
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bank" id="bank" />
                        <Label htmlFor="bank" className="flex items-center cursor-pointer">
                          <DollarSign className="h-4 w-4 mr-2" />
                          Bank Transfer (ACH)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {paymentMethod === "card" && (
                    <>
                      <Separator />
                      
                      {/* Card Information */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Card Information</h3>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input
                              id="cardNumber"
                              placeholder="1234 5678 9012 3456"
                              value={formData.cardNumber}
                              onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expiryDate">Expiry Date</Label>
                              <Input
                                id="expiryDate"
                                placeholder="MM/YY"
                                value={formData.expiryDate}
                                onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV</Label>
                              <Input
                                id="cvv"
                                placeholder="123"
                                value={formData.cvv}
                                onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Billing Address */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Billing Address</h3>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="billingAddress">Street Address</Label>
                            <Input
                              id="billingAddress"
                              value={formData.billingAddress}
                              onChange={(e) => setFormData({...formData, billingAddress: e.target.value})}
                              required
                            />
                          </div>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <Label htmlFor="city">City</Label>
                              <Input
                                id="city"
                                value={formData.city}
                                onChange={(e) => setFormData({...formData, city: e.target.value})}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="state">State</Label>
                              <Input
                                id="state"
                                value={formData.state}
                                onChange={(e) => setFormData({...formData, state: e.target.value})}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="zipCode">ZIP Code</Label>
                              <Input
                                id="zipCode"
                                value={formData.zipCode}
                                onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="shadow-lg sticky top-8">
              <CardHeader className="bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle>Order Summary</CardTitle>
                <CardDescription className="text-red-100">
                  Review your membership selection
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Selected Plan */}
                  {selectedPlanData && (
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{selectedPlanData.name}</h3>
                        <p className="text-sm text-muted-foreground">Monthly membership</p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">${selectedPlanData.price}</div>
                        <div className="text-sm text-muted-foreground line-through">
                          ${selectedPlanData.originalPrice}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Selected Add-ons */}
                  {selectedAddOnData.map((addon) => (
                    <div key={addon.id} className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">{addon.name}</h4>
                        <p className="text-sm text-muted-foreground">Add-on service</p>
                      </div>
                      <div className="font-semibold">${addon.price}</div>
                    </div>
                  ))}

                  <Separator />

                  {/* Auto-renewal Discount */}
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      checked={autoRenew}
                      onCheckedChange={setAutoRenew}
                      id="autoRenew"
                    />
                    <Label htmlFor="autoRenew" className="text-sm cursor-pointer">
                      Enable auto-renewal (10% discount)
                    </Label>
                  </div>

                  <Separator />

                  {/* Pricing Breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Auto-renewal discount</span>
                        <span>-${discount}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${tax}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${total}</span>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700"
                    size="lg"
                    onClick={handleSubmit}
                  >
                    <Lock className="mr-2 h-5 w-5" />
                    Complete Payment
                  </Button>

                  {/* Security Features */}
                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Shield className="h-4 w-4 mr-2 text-green-600" />
                      256-bit SSL encryption
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      PCI DSS compliant
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Zap className="h-4 w-4 mr-2 text-green-600" />
                      Instant activation
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Money Back Guarantee */}
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">30-Day Money Back Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  Not satisfied? Get a full refund within 30 days, no questions asked.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
