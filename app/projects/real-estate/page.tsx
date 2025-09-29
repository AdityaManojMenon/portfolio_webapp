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
          <h1 className="text-4xl font-bold mb-2">Real Estate Market Intelligence</h1>
          <p className="text-[#888888] mb-6">2025 | ELT, Data Engineering, BigQuery</p>
          
          <div className="relative w-full h-60 rounded-md overflow-hidden mb-8">
            <Image 
              src="/voyagen.png" 
              alt="Real Estate Market Intelligence"
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
            <p className="text-sm mb-4 leading-relaxed">
              Built a production-ready ELT platform for property market data. The system combines batch and
              streaming ingestion, automated quality checks, and cost-efficient warehouse design in BigQuery
              to power analytics, dashboards, and downstream applications.
            </p>
            
            <h2 className="text-xl font-bold mb-4 mt-8">Challenge</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Real estate data arrives from many sources at different cadences and formats (APIs, files,
              scrapers). The pipeline needed to support frequent updates, automatic validation, and a
              warehouse model optimized for fast and inexpensive queries at scale.
            </p>
            
            <h2 className="text-xl font-bold mb-4 mt-8">Solution</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Designed a unified ELT architecture:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 mb-4">
              <li>Ingestion: Scheduled batch loads for large historical pulls and a lightweight streaming
                path for incremental updates.</li>
              <li>Quality: Automated validation on ingest (schema, nulls, ranges) with failure alerts and
                quarantining of bad records.</li>
              <li>Transform: Modeled raw data into clean, analytics-friendly tables with partitioning and
                clustering to reduce cost and improve query speed.</li>
              <li>Orchestration & Monitoring: End-to-end jobs with observability on freshness, volume, and
                failures.</li>
            </ul>
            
            <h2 className="text-xl font-bold mb-4 mt-8">Technical Implementation</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Core components and tools:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li>Python services for ingestion (batch + streaming) and transformation logic</li>
              <li>Google BigQuery as the warehouse with partitioned + clustered tables</li>
              <li>dbt for modeling and documentation of the semantic layer</li>
              <li>Apache Airflow for orchestration and SLA/freshness monitoring</li>
              <li>Cloud Run / Cloud Functions for stateless ingestion jobs</li>
              <li>Pub/Sub pipeline for streaming updates from scrapers and webhooks</li>
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
                <p className="text-sm">Analytics Engineer</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">DURATION</h4>
                <p className="text-sm">2025</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">TEAM</h4>
                <p className="text-sm">1 member (Analytics Engineer)</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">BigQuery</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">dbt</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Airflow</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Cloud Run</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Pub/Sub</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-xs text-[#888888] mb-1">OUTCOME</h4>
                <p className="text-sm">Reduced query costs via partitioning/clustering, improved data freshness to hourly
                  updates, and added automated data-quality gates to keep analytics trustworthy.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 