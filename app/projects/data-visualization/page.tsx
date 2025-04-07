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
          <h1 className="text-4xl font-bold mb-2">Data Visualization Dashboard</h1>
          <p className="text-[#888888] mb-6">2022 | Business Intelligence, Data Analytics, UX/UI</p>
          
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
              The Data Visualization Dashboard is a comprehensive business intelligence platform that transforms 
              complex datasets into intuitive, interactive visual representations. The platform enables stakeholders 
              across all organizational levels to gain actionable insights from data through a user-friendly 
              interface that requires minimal technical expertise.
            </p>
            
            <h2 className="text-xl font-bold mb-4 mt-8">Challenge</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Modern organizations collect vast amounts of data, but many struggle to extract meaningful insights due to 
              data complexity, technical barriers, and difficulty integrating multiple data sources. Decision-makers 
              often lack the tools to quickly analyze information and identify patterns, resulting in missed opportunities 
              and reactive rather than proactive business strategies.
            </p>
            
            <h2 className="text-xl font-bold mb-4 mt-8">Solution</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Our Data Visualization Dashboard addresses these challenges with several key innovations:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 mb-4">
              <li>Unified Data Integration: Seamlessly combines data from multiple sources including SQL databases, NoSQL databases, APIs, and flat files.</li>
              <li>Intuitive Visual Builder: Allows users to create visualizations through a drag-and-drop interface without requiring coding skills.</li>
              <li>Interactive Exploration: Enables users to filter, drill down, and manipulate visualizations in real-time to explore different dimensions of the data.</li>
              <li>Automated Insights: Uses statistical algorithms to automatically highlight significant patterns, anomalies, and trends in the data.</li>
              <li>Customizable Dashboards: Allows stakeholders to create personalized views with the metrics and visualizations most relevant to their roles.</li>
              <li>Collaboration Features: Enables teams to share insights, annotate visualizations, and collaborate on data analysis in real-time.</li>
            </ul>
            
            <h2 className="text-xl font-bold mb-4 mt-8">Technical Implementation</h2>
            <p className="text-sm mb-4 leading-relaxed">
              The dashboard is built with a focus on performance, security, and scalability:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li>Frontend: React.js with D3.js for custom visualizations and Chart.js for standard charts</li>
              <li>Backend: Python with FastAPI for efficient data processing and API endpoints</li>
              <li>Data Processing: Apache Spark for handling large-scale data transformations</li>
              <li>Storage: Combination of PostgreSQL for structured data and Amazon S3 for raw data files</li>
              <li>Authentication: OAuth 2.0 with role-based access control for secure data access</li>
              <li>Deployment: Containerized with Docker and deployed on AWS ECS for scalability</li>
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
                <p className="text-sm">Data Analyst & Visualization Specialist</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">DURATION</h4>
                <p className="text-sm">6 months</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">TEAM</h4>
                <p className="text-sm">4 members (Data Analysts, Frontend Developer, Backend Developer)</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">D3.js</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Chart.js</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">FastAPI</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Apache Spark</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">AWS</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-xs text-[#888888] mb-1">OUTCOME</h4>
                <p className="text-sm">Deployed for a financial services client, resulting in 40% faster decision-making and 25% improvement in operational efficiency</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 