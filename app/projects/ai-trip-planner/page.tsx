"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <div className="mb-10">
          <Button 
            asChild 
            variant="outline" 
            className="border-[#333333] text-[#ededed] bg-transparent hover:bg-[#222222]"
            size="sm"
          >
            <Link href="/#portfolio">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-2">AI Trip Planner</h1>
          <p className="text-[#888888] mb-6">2023 | Machine Learning, User Experience, Travel</p>
          
          <div className="h-60 bg-[#111111] rounded-md mb-8 flex items-center justify-center">
            <p className="text-[#666666]">Project Image Placeholder</p>
          </div>
        </motion.div>

        {/* Project Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl font-bold mb-4">Overview</h2>
            <p className="text-sm mb-4 leading-relaxed">
              The AI Trip Planner is an innovative application designed to revolutionize how users plan their trips. 
              By leveraging advanced machine learning algorithms, natural language processing, and personalized 
              recommendation systems, the platform creates customized travel itineraries based on user preferences, 
              constraints, and real-time data.
            </p>
            
            <h2 className="text-xl font-bold mb-4 mt-8">Challenge</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Travel planning is often a time-consuming and overwhelming process for many travelers. They face 
              difficulties in finding the right balance between exploring popular attractions and discovering hidden gems, 
              managing time efficiently, staying within budget, and adapting to unexpected changes. Traditional travel 
              planning tools lack the personalization and adaptability needed to create truly satisfying itineraries.
            </p>
            
            <h2 className="text-xl font-bold mb-4 mt-8">Solution</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Our AI Trip Planner addresses these challenges by implementing several key features:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 mb-4">
              <li>Personalized Recommendation Engine: Analyzes user preferences, past travels, and feedback to suggest destinations and activities aligned with their interests.</li>
              <li>Natural Language Interaction: Allows users to describe their ideal trip in plain language, which our system interprets to create customized plans.</li>
              <li>Adaptive Itinerary Optimization: Continuously refines the travel plan based on real-time factors like weather, opening hours, crowd levels, and transportation availability.</li>
              <li>Budget Management: Helps users optimize their spending by suggesting alternatives and balancing costs across the entire trip.</li>
              <li>Collaborative Planning: Enables groups to contribute preferences and vote on options, simplifying the group travel planning process.</li>
            </ul>
            
            <h2 className="text-xl font-bold mb-4 mt-8">Technical Implementation</h2>
            <p className="text-sm mb-4 leading-relaxed">
              The application is built using a modern tech stack:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li>Frontend: React with Next.js for server-side rendering and SEO optimization</li>
              <li>Backend: Node.js with Express, connected to PostgreSQL for structured data and MongoDB for unstructured data</li>
              <li>Machine Learning: Python with TensorFlow and scikit-learn for recommendation engines and natural language processing</li>
              <li>DevOps: Docker containers orchestrated with Kubernetes, deployed on AWS</li>
              <li>APIs: Integration with various travel APIs for real-time data on flights, accommodations, attractions, and weather</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-[#111111] p-6 rounded-md">
              <h3 className="text-lg font-bold mb-4">Project Details</h3>
              
              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">ROLE</h4>
                <p className="text-sm">Lead Data Scientist</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">DURATION</h4>
                <p className="text-sm">8 months</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">TEAM</h4>
                <p className="text-sm">5 members (Data Scientists, UI/UX Designers, Full-stack Developers)</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">TensorFlow</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Next.js</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Node.js</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">MongoDB</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">AWS</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-xs text-[#888888] mb-1">OUTCOME</h4>
                <p className="text-sm">Beta version launched with 5,000+ users and 92% satisfaction rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 