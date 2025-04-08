"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <div className="mb-10">
          <Button
            asChild
            variant="outline"
            className="border-[#333333] text-[#ededed] bg-transparent hover:bg-[#222222] hover:text-[#888888]"
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
          <h1 className="text-4xl font-bold mb-2">AdventureWorks Business Intelligence</h1>
          <p className="text-[#888888] mb-6">2023 | Data Visualization, Power BI, SQL</p>
          
          <div className="relative w-full h-60 rounded-md overflow-hidden mb-8">
            <Image 
              src="/adventureworks.png" 
              alt="adventureworks"
              layout="fill" 
              objectFit="cover" 
              className="bg-[#111111]"
            />
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
            <Link href="https://github.com/AdityaManojMenon/AdventureWorks-PowerBI" className="text-white-500 hover:text-blue-600">Project Link</Link>
            <p className="text-sm mb-4 leading-relaxed">
              This project leverages the AdventureWorks dataset to design end-to-end Business 
              Intelligence solutions. By transforming raw transactional data into professional-quality 
              reports and interactive dashboards, the solution delivers actionable insights into 
              sales performance, product trends, customer segmentation, and regional breakdowns. 
              With advanced data modeling in Power BI, SQL-driven data extraction, and Excel for 
              light data cleaning, the project offers a consolidated view of key metrics that empower 
              strategic decision-making and operational efficiencies.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">Challenge</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Organizations using AdventureWorks-type data often struggle to integrate disparate 
              datasets and generate meaningful business insights. Manual reporting processes, 
              limited visualization options, and inconsistent data quality can hamper leadership’s 
              ability to respond to evolving market conditions. The challenge was to create 
              a streamlined, scalable Business Intelligence solution that visualizes complex KPIs 
              in a user-friendly format.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">Solution</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Our AdventureWorks solution addresses these challenges through:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 mb-4">
              <li><strong>SQL-Driven Data Extraction:</strong> Consolidates multiple tables within the AdventureWorks database to create a unified dataset for reporting.</li>
              <li><strong>Data Cleaning and Transformation:</strong> Uses Excel for initial data scrubbing and Power Query in Power BI to refine, merge, and enrich the data model.</li>
              <li><strong>Interactive Dashboards:</strong> Builds intuitive Power BI dashboards, such as the Executive Dashboard, Customer Detail Dashboard, Product Detail Dashboard, and a Map visualization for geographical insights.</li>
              <li><strong>Advanced DAX Expressions:</strong> Implements calculated measures, time intelligence, and KPIs to uncover trends and highlight critical performance metrics.</li>
              <li><strong>Scalable Architecture:</strong> Optimizes database connections and data refresh schedules to accommodate frequent updates and enterprise demands.</li>
            </ul>

            <h2 className="text-xl font-bold mb-4 mt-8">Technical Implementation</h2>
            <p className="text-sm mb-4 leading-relaxed">
              The project integrates multiple tools and practices to ensure reliable and efficient data analysis:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li><strong>Data Source:</strong> AdventureWorks SQL database for transactional records</li>
              <li><strong>Data Exploration & Cleaning:</strong> SQL queries and Excel transformations to filter noise, correct inconsistencies, and unify schemas</li>
              <li><strong>Data Modeling:</strong> Power BI Data Model with relationships and DAX for calculations</li>
              <li><strong>Dashboard Design:</strong> Multiple Power BI dashboards (Executive, Customer, Product, Map) for different stakeholder needs</li>
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
                <p className="text-sm">Data Analyst</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">DURATION</h4>
                <p className="text-sm">1 month</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">TEAM</h4>
                <p className="text-sm">Solo (Data Analyst)</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Power BI</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">SQL</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Excel</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">DAX</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">ETL</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Data Modeling</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-xs text-[#888888] mb-1">OUTCOME</h4>
                <p className="text-sm">
                  The consolidated BI solution enabled data-driven decisions, reducing guesswork 
                  and aligning the organization's operations with strategic KPIs. I learnt alot about data modelling and DAX expressions.
                  Moreover, I also sharped my excel and sql skills.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

