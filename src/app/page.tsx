"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart } from "recharts";

// Data for visualizations
const industryMetrics = [
  { name: "Annual Catch", current: 120000, target: 200000, unit: "tons" },
  { name: "Fleet Size", current: 3500, target: 4000, unit: "vessels" },
  { name: "Employment", current: 45000, target: 60000, unit: "jobs" },
  { name: "Export Value", current: 850, target: 1500, unit: "M USD" },
];

const digitalMaturityData = [
  { category: "Fleet Management", current: 25, target: 85 },
  { category: "Catch Documentation", current: 15, target: 90 },
  { category: "Supply Chain", current: 20, target: 95 },
  { category: "Quality Control", current: 30, target: 85 },
  { category: "Market Intelligence", current: 10, target: 80 },
  { category: "Compliance", current: 35, target: 90 },
];

const traceabilityFlow = [
  { step: "Catch Registration", description: "GPS coordinates, species, quantity, time", digitization: 15 },
  { step: "Onboard Processing", description: "Temperature monitoring, quality checks", digitization: 25 },
  { step: "Port Landing", description: "Weight verification, quality assessment", digitization: 40 },
  { step: "Cold Chain", description: "Temperature logs, transport tracking", digitization: 35 },
  { step: "Market Distribution", description: "Wholesale transactions, pricing", digitization: 50 },
  { step: "Retail/Consumer", description: "Product origin, freshness indicators", digitization: 20 },
];

const roiProjections = [
  { year: "2024", traditional: 850, digital: 950, efficiency: 12 },
  { year: "2025", traditional: 870, digital: 1100, efficiency: 26 },
  { year: "2026", traditional: 890, digital: 1280, efficiency: 44 },
  { year: "2027", traditional: 910, digital: 1450, efficiency: 59 },
  { year: "2028", traditional: 930, digital: 1620, efficiency: 74 },
];

const challengeCategories = [
  { name: "Digitization Gaps", value: 35, color: "#ef4444" },
  { name: "Organization Issues", value: 28, color: "#f97316" },
  { name: "Tracking Deficits", value: 22, color: "#eab308" },
  { name: "Quality Control", value: 15, color: "#22c55e" },
];

export default function ElBahriAnalysis() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      title: "Smart Fleet Management",
      description: "Real-time vessel tracking, maintenance scheduling, and crew management",
      capabilities: ["GPS tracking", "Fuel monitoring", "Maintenance alerts", "Crew certification tracking"],
      impact: "40% reduction in operational costs"
    },
    {
      id: 2,
      title: "Digital Catch Documentation",
      description: "Automated logging with species identification and catch verification",
      capabilities: ["Digital logbooks", "AI species recognition", "Catch photography", "GPS coordinates"],
      impact: "95% accuracy in catch reporting"
    },
    {
      id: 3,
      title: "Supply Chain Traceability",
      description: "End-to-end transparency from catch to consumer",
      capabilities: ["Blockchain records", "QR code tracking", "Temperature monitoring", "Chain of custody"],
      impact: "100% product traceability"
    },
    {
      id: 4,
      title: "Quality Assurance System",
      description: "Automated quality monitoring and freshness indicators",
      capabilities: ["Temperature sensors", "Freshness algorithms", "Quality scoring", "Shelf-life prediction"],
      impact: "60% reduction in spoilage"
    },
    {
      id: 5,
      title: "Market Intelligence Hub",
      description: "Real-time pricing, demand forecasting, and trade analytics",
      capabilities: ["Price monitoring", "Demand prediction", "Market trends", "Export opportunities"],
      impact: "25% increase in revenue"
    },
    {
      id: 6,
      title: "Regulatory Compliance",
      description: "Automated reporting and quota management system",
      capabilities: ["Automated reports", "Quota tracking", "Compliance alerts", "Document management"],
      impact: "100% regulatory compliance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">El Bahri APP</h1>
            <p className="text-xl mb-2">Digital Transformation for Algeria's Fishing Industry</p>
            <p className="text-blue-200 text-lg">Comprehensive Analysis & Strategic Recommendations</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="overview">Industry Overview</TabsTrigger>
            <TabsTrigger value="challenges">Challenge Analysis</TabsTrigger>
            <TabsTrigger value="features">Platform Features</TabsTrigger>
            <TabsTrigger value="traceability">Traceability</TabsTrigger>
            <TabsTrigger value="impact">Economic Impact</TabsTrigger>
            <TabsTrigger value="roadmap">Implementation</TabsTrigger>
          </TabsList>

          {/* Industry Overview */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {industryMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{metric.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-blue-600">
                          {metric.current.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500">{metric.unit}</span>
                      </div>
                      <Progress 
                        value={(metric.current / metric.target) * 100} 
                        className="h-2"
                      />
                      <div className="text-sm text-gray-600">
                        Target: {metric.target.toLocaleString()} {metric.unit}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Digital Maturity Assessment</CardTitle>
                  <CardDescription>Digitization levels across key operational areas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={digitalMaturityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" angle={-45} textAnchor="end" height={80} />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="current" fill="#ef4444" name="Current Level" />
                      <Bar dataKey="target" fill="#22c55e" name="Target Level" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Industry Challenges</CardTitle>
                  <CardDescription>Distribution of critical issues affecting the sector</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={challengeCategories}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({name, value}) => `${name}: ${value}%`}
                      >
                        {challengeCategories.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Sector Analysis Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-red-50 border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-800 mb-2">Critical Issues</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Limited digital infrastructure</li>
                      <li>• Manual documentation processes</li>
                      <li>• Poor supply chain visibility</li>
                      <li>• Quality control gaps</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-yellow-800 mb-2">Opportunities</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Growing export demand</li>
                      <li>• Government support initiatives</li>
                      <li>• Blue economy potential</li>
                      <li>• Mediterranean market access</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-800 mb-2">Digital Solutions</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• IoT sensors and tracking</li>
                      <li>• Blockchain traceability</li>
                      <li>• AI-powered analytics</li>
                      <li>• Mobile applications</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Challenge Analysis */}
          <TabsContent value="challenges" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Detailed Challenge Assessment</CardTitle>
                <CardDescription>Comprehensive analysis of current sector limitations and digital transformation needs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-blue-900 border-b pb-2">Digitization Gaps</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-red-50 rounded-lg">
                          <h4 className="font-medium text-red-800">Manual Record Keeping</h4>
                          <p className="text-sm text-red-600 mt-1">85% of fishing operations still use paper-based logging systems</p>
                        </div>
                        <div className="p-3 bg-red-50 rounded-lg">
                          <h4 className="font-medium text-red-800">Limited Connectivity</h4>
                          <p className="text-sm text-red-600 mt-1">Only 30% of vessels have reliable internet access at sea</p>
                        </div>
                        <div className="p-3 bg-red-50 rounded-lg">
                          <h4 className="font-medium text-red-800">Technology Adoption</h4>
                          <p className="text-sm text-red-600 mt-1">Low adoption of modern fishing technologies and digital tools</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-orange-900 border-b pb-2">Organization Issues</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800">Fragmented Operations</h4>
                          <p className="text-sm text-orange-600 mt-1">Lack of coordination between fishing cooperatives and markets</p>
                        </div>
                        <div className="p-3 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800">Information Silos</h4>
                          <p className="text-sm text-orange-600 mt-1">Isolated data systems preventing comprehensive industry insights</p>
                        </div>
                        <div className="p-3 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800">Resource Inefficiency</h4>
                          <p className="text-sm text-orange-600 mt-1">Suboptimal allocation of fishing vessels and equipment</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-yellow-900 border-b pb-2">Tracking Deficits</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-yellow-50 rounded-lg">
                          <h4 className="font-medium text-yellow-800">Supply Chain Opacity</h4>
                          <p className="text-sm text-yellow-600 mt-1">Limited visibility from catch to consumer delivery</p>
                        </div>
                        <div className="p-3 bg-yellow-50 rounded-lg">
                          <h4 className="font-medium text-yellow-800">Quality Monitoring</h4>
                          <p className="text-sm text-yellow-600 mt-1">Inadequate temperature and freshness tracking systems</p>
                        </div>
                        <div className="p-3 bg-yellow-50 rounded-lg">
                          <h4 className="font-medium text-yellow-800">Compliance Gaps</h4>
                          <p className="text-sm text-yellow-600 mt-1">Difficulty meeting international traceability standards</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Impact Analysis</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-blue-800 mb-3">Economic Consequences</h4>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Annual revenue loss of approximately $200M due to inefficiencies</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>20-30% product spoilage due to poor cold chain management</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Limited access to premium export markets due to traceability gaps</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-800 mb-3">Operational Impact</h4>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Reduced competitive advantage in Mediterranean markets</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Increased regulatory compliance costs and penalties</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Limited data-driven decision making capabilities</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Platform Features */}
          <TabsContent value="features" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>El Bahri APP - Core Platform Features</CardTitle>
                <CardDescription>Comprehensive digital solution addressing all aspects of the fishing value chain</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {features.map((feature) => (
                    <div 
                      key={feature.id}
                      className="p-6 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer bg-white"
                      onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-blue-900">{feature.title}</h3>
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                            {feature.impact}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                        
                        {activeFeature === feature.id && (
                          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                            <h4 className="font-medium text-blue-900 mb-2">Key Capabilities:</h4>
                            <ul className="space-y-1">
                              {feature.capabilities.map((capability, index) => (
                                <li key={index} className="text-sm text-blue-700 flex items-center">
                                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                  {capability}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-8" />

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Technical Architecture Overview</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="text-blue-600 font-bold">IoT</span>
                      </div>
                      <h4 className="font-medium text-gray-800">IoT Sensors</h4>
                      <p className="text-xs text-gray-600 mt-1">Temperature, GPS, Engine monitoring</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="text-green-600 font-bold">BC</span>
                      </div>
                      <h4 className="font-medium text-gray-800">Blockchain</h4>
                      <p className="text-xs text-gray-600 mt-1">Immutable traceability records</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="text-purple-600 font-bold">AI</span>
                      </div>
                      <h4 className="font-medium text-gray-800">AI Analytics</h4>
                      <p className="text-xs text-gray-600 mt-1">Predictive insights, optimization</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="text-orange-600 font-bold">API</span>
                      </div>
                      <h4 className="font-medium text-gray-800">Integration</h4>
                      <p className="text-xs text-gray-600 mt-1">Third-party systems, markets</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Traceability */}
          <TabsContent value="traceability" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Supply Chain Traceability Framework</CardTitle>
                <CardDescription>End-to-end transparency from catch to consumer with current vs. target digitization levels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {traceabilityFlow.map((step, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{step.step}</h3>
                            <Badge 
                              variant={step.digitization < 30 ? "destructive" : step.digitization < 60 ? "secondary" : "default"}
                            >
                              {step.digitization}% Digital
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-3">{step.description}</p>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${step.digitization}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      {index < traceabilityFlow.length - 1 && (
                        <div className="ml-5 mt-4 mb-4 w-0.5 h-8 bg-gray-300"></div>
                      )}
                    </div>
                  ))}
                </div>

                <Separator className="my-8" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Traceability Technologies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-semibold text-blue-900 mb-2">QR Code System</h4>
                          <p className="text-sm text-blue-700">Consumer-facing codes linking to complete product history, catch location, and quality metrics</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-semibold text-green-900 mb-2">Blockchain Records</h4>
                          <p className="text-sm text-green-700">Immutable ledger of transactions from boat to market, ensuring data integrity and preventing fraud</p>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-semibold text-purple-900 mb-2">RFID Tracking</h4>
                          <p className="text-sm text-purple-700">Radio frequency tags on containers and boxes for automated scanning throughout the supply chain</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Consumer Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-medium">Product Authenticity</h4>
                            <p className="text-sm text-gray-600">Verify genuine Algerian seafood with complete catch documentation</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-medium">Freshness Assurance</h4>
                            <p className="text-sm text-gray-600">Real-time freshness indicators based on temperature history and catch date</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-medium">Sustainability Information</h4>
                            <p className="text-sm text-gray-600">Fishing method, vessel efficiency, and environmental impact data</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-medium">Origin Verification</h4>
                            <p className="text-sm text-gray-600">GPS coordinates, fishing zone, and vessel information for complete transparency</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Economic Impact */}
          <TabsContent value="impact" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Projection Analysis</CardTitle>
                  <CardDescription>Expected growth with digital transformation implementation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={roiProjections}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip formatter={(value, name) => [`$${value}M`, name === 'traditional' ? 'Traditional Approach' : 'Digital Transformation']} />
                      <Area type="monotone" dataKey="traditional" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
                      <Area type="monotone" dataKey="digital" stackId="2" stroke="#22c55e" fill="#22c55e" fillOpacity={0.6} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Efficiency Gains Timeline</CardTitle>
                  <CardDescription>Operational efficiency improvements over 5-year period</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={roiProjections}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value}%`, 'Efficiency Improvement']} />
                      <Line type="monotone" dataKey="efficiency" stroke="#3b82f6" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Blue Economy Impact Assessment</CardTitle>
                <CardDescription>Comprehensive analysis of economic benefits and productivity improvements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">$650M</div>
                    <div className="text-sm font-medium text-blue-800 mb-1">Additional Revenue</div>
                    <div className="text-xs text-blue-600">Over 5-year period</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">15,000</div>
                    <div className="text-sm font-medium text-green-800 mb-1">New Jobs Created</div>
                    <div className="text-xs text-green-600">Direct and indirect employment</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                    <div className="text-sm font-medium text-purple-800 mb-1">Export Increase</div>
                    <div className="text-xs text-purple-600">Premium market access</div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Detailed Economic Benefits</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium text-blue-900">Direct Economic Impact</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                          <span className="text-sm">Reduced operational costs</span>
                          <Badge>$180M saved</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                          <span className="text-sm">Premium pricing access</span>
                          <Badge>25% price increase</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                          <span className="text-sm">Waste reduction</span>
                          <Badge>$95M recovered</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                          <span className="text-sm">Export market expansion</span>
                          <Badge>$200M new revenue</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium text-green-900">Indirect Economic Impact</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                          <span className="text-sm">Technology sector growth</span>
                          <Badge variant="secondary">$45M investment</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                          <span className="text-sm">Logistics improvements</span>
                          <Badge variant="secondary">$30M efficiency</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                          <span className="text-sm">Skills development</span>
                          <Badge variant="secondary">8,000 trained</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                          <span className="text-sm">Tourism boost</span>
                          <Badge variant="secondary">$25M additional</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg">
                  <h4 className="font-medium text-cyan-900 mb-3">Sustainability Benefits</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-sm text-cyan-800">30% reduction in fuel consumption through optimized routing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-sm text-cyan-800">60% decrease in food waste through better cold chain management</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-sm text-cyan-800">Enhanced marine conservation through data-driven fishing practices</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-sm text-cyan-800">Improved compliance with international sustainability standards</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Implementation Roadmap */}
          <TabsContent value="roadmap" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Implementation Roadmap</CardTitle>
                <CardDescription>Phased approach for El Bahri APP deployment and digital transformation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Phase 1 */}
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-blue-900">Phase 1: Foundation (Months 1-6)</h3>
                        <Badge className="bg-blue-100 text-blue-800">Planning & Setup</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-900 mb-2">Infrastructure Development</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Cloud platform setup and security configuration</li>
                            <li>• Basic IoT sensor deployment (100 vessels)</li>
                            <li>• Mobile app development and testing</li>
                            <li>• Staff training and change management</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-900 mb-2">Core Features</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Digital catch logging system</li>
                            <li>• Basic vessel tracking</li>
                            <li>• Simple reporting dashboard</li>
                            <li>• User authentication and access control</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-gray-600">Investment:</span>
                        <Badge variant="outline">$2.5M</Badge>
                        <span className="text-gray-600">Expected ROI:</span>
                        <Badge variant="outline">15% efficiency gain</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="relative pl-8 border-l-2 border-green-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-green-600 rounded-full"></div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-green-900">Phase 2: Expansion (Months 7-18)</h3>
                        <Badge className="bg-green-100 text-green-800">Scale & Integrate</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-900 mb-2">Advanced Features</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Supply chain traceability implementation</li>
                            <li>• Quality monitoring with IoT sensors</li>
                            <li>• Market intelligence dashboard</li>
                            <li>• Integration with port authorities</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-900 mb-2">Fleet Coverage</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Expand to 1,000 vessels (30% of fleet)</li>
                            <li>• Major ports integration</li>
                            <li>• Processing facilities connection</li>
                            <li>• Export documentation automation</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-gray-600">Investment:</span>
                        <Badge variant="outline">$5.8M</Badge>
                        <span className="text-gray-600">Expected ROI:</span>
                        <Badge variant="outline">35% efficiency gain</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="relative pl-8 border-l-2 border-purple-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-purple-900">Phase 3: Optimization (Months 19-36)</h3>
                        <Badge className="bg-purple-100 text-purple-800">AI & Analytics</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-900 mb-2">AI Implementation</h4>
                          <ul className="text-sm text-purple-700 space-y-1">
                            <li>• Predictive analytics for catch optimization</li>
                            <li>• Automated quality assessment</li>
                            <li>• Dynamic pricing algorithms</li>
                            <li>• Maintenance prediction systems</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-900 mb-2">Full Integration</h4>
                          <ul className="text-sm text-purple-700 space-y-1">
                            <li>• Complete fleet coverage (3,500 vessels)</li>
                            <li>• Blockchain traceability full deployment</li>
                            <li>• International market integration</li>
                            <li>• Consumer-facing transparency portal</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-gray-600">Investment:</span>
                        <Badge variant="outline">$8.2M</Badge>
                        <span className="text-gray-600">Expected ROI:</span>
                        <Badge variant="outline">60% efficiency gain</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="my-8" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Critical Success Factors</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-medium">Stakeholder Engagement</h4>
                            <p className="text-sm text-gray-600">Active participation from fishermen, port authorities, and market operators</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-medium">Government Support</h4>
                            <p className="text-sm text-gray-600">Policy framework, funding, and regulatory alignment</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-medium">Technology Adoption</h4>
                            <p className="text-sm text-gray-600">Training programs and user-friendly interface design</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-medium">Data Quality</h4>
                            <p className="text-sm text-gray-600">Accurate and consistent data collection from all sources</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Risk Mitigation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="p-3 bg-red-50 rounded-lg">
                          <h4 className="font-medium text-red-800">Technology Resistance</h4>
                          <p className="text-sm text-red-600">Comprehensive training and gradual implementation approach</p>
                        </div>
                        <div className="p-3 bg-yellow-50 rounded-lg">
                          <h4 className="font-medium text-yellow-800">Infrastructure Limitations</h4>
                          <p className="text-sm text-yellow-600">Satellite connectivity backup and offline capabilities</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800">Data Security</h4>
                          <p className="text-sm text-blue-600">End-to-end encryption and regular security audits</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800">Market Volatility</h4>
                          <p className="text-sm text-green-600">Diversified revenue streams and flexible pricing models</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Expected Outcomes & KPIs</CardTitle>
                <CardDescription>Measurable targets for digital transformation success</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">90%</div>
                    <div className="text-sm text-blue-800">Fleet Digitization</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">75%</div>
                    <div className="text-sm text-green-800">Cost Reduction</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">60%</div>
                    <div className="text-sm text-purple-800">Export Growth</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">95%</div>
                    <div className="text-sm text-orange-800">Traceability Coverage</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="mt-8 bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Ready to Transform Algeria's Fishing Industry?</CardTitle>
            <CardDescription className="text-blue-200">
              El Bahri APP represents a comprehensive solution for digitalizing the fishing sector, 
              improving efficiency, and unlocking the full potential of Algeria's blue economy.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="space-y-4">
              <p className="text-blue-100">
                Join the digital transformation movement and position Algeria as a leader in sustainable fishing practices.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  Download Full Report
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  Request Demo
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}