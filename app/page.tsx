"use client";

import Image from "next/image"; 
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ImageRotator } from "@/components/ui/image-rotator";

export default function Home() {
  const socialLinks = [
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-6 w-6 text-[#ededed]" />,
      href: "https://github.com/AdityaManojMenon?tab=repositories",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-6 w-6 text-[#ededed]" />,
      href: "https://x.com/AMFitt",
    },
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-6 w-6 text-[#ededed]" />,
      href: "https://www.instagram.com/amfitt11/",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-6 w-6 text-[#ededed]" />,
      href: "https://www.linkedin.com/in/adityamanojmenon/",
    },
  ];

  // Data for the skills chart
  const skillsData = [
    { skill: "SQL", experience: 4 },
    { skill: "Python", experience: 5 },
    { skill: "R", experience: 3 },
    { skill: "Tableau", experience: 2 },
    { skill: "Power BI", experience: 3 },
    { skill: "Excel", experience: 4 }, 
    { skill: "Stats", experience: 3 },
    { skill: "ML", experience: 3 }, 
  ];

  // Configuration for the chart
  const chartConfig = {
    experience: {
      label: "Years of Experience : ",
      color: "#ffffff", // White color for bars
    },
  } satisfies ChartConfig;
  
  // Hobby images for the image rotator
  const hobbyImages = [
    {
      src: "/chess.png",
      alt: "Chess - My Mental Gym"
    },
    {
      src: "/atv.png",
      alt: "ATV - Off-road Adventures"
    },
    {
      src: "/travel.png",
      alt: "Traveling - Global Explorer"
    },
    {
      src: "/gym.png",
      alt: "Fitness - Staying Active"
    },
    {
      src: "/surfing.png",
      alt: "Surfing - Catching Waves"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-[#ededed] p-6 md:p-10">
      {/* Header */}
      <header className="flex justify-between items-center py-4">
        <div className="text-sm md:text-base">
          <h1 className="font-semibold-semibold">Aditya</h1>
          <h2 className="font-semibold-semibold">Menon</h2>
        </div>
        
        {/* Navigation Menu */}
        <NavigationMenu className="bg-transparent">
          <NavigationMenuList className="bg-transparent">
            
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="#experience"
                  className="text-[#ededed] bg-transparent hover:bg-transparent hover:text-[#888888] px-4 py-2 text-sm font-medium transition-colors"
                >
                  Experience
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="#portfolio"
                  className="text-[#ededed] bg-transparent hover:bg-transparent hover:text-[#888888] px-4 py-2 text-sm font-medium transition-colors"
                >
                  Portfolio
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="#interests"
                  className="text-[#ededed] bg-transparent hover:bg-transparent hover:text-[#888888] px-4 py-2 text-sm font-medium transition-colors"
                >
                  Interests
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="https://drive.google.com/file/d/1kzNPDebLzqQEfPo9UfrEWBIDxBXcIqCi/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ededed] bg-transparent hover:bg-transparent hover:text-[#888888] px-4 py-2 text-sm font-medium transition-colors"
                >
                  Resume
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <Button 
          asChild 
          variant="outline" 
          className="rounded-full border-[#ededed] text-[#ededed] bg-transparent hover:bg-transparent hover:text-[#888888]"
        >
          <Link href="#contact">CONTACT</Link>
        </Button>
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col justify-center">
        {/* Giant text */}
        <div className="py-12 md:py-20">
          <h2 className="text-[#888888] text-5xl md:text-9xl font-bold leading-none">
            DATA
            <span className="block">ENGINEER</span>
          </h2>
          
          {/* Subheading */}
          <div className="text-xs md:text-sm mt-4">
            <p>2024 - Present</p>
          </div>
        </div>
        
        {/* Algorithm visualization positioned to the left of About section */}
        <div className="absolute left-6 md:left-10 top-[300px] opacity-40 font-mono text-xs">
          <pre className="text-[#cccccc]">
            {String.raw`
            
            
            
            
            
            
            
            
            
            
            
            
import requests
from datetime import datetime, timezone
import pandas as pd
from google.cloud import bigquery

def ingest_properties():
    # Extract: pull property listings from external API
    resp = requests.get("https://api.example.com/properties", timeout=30)
    resp.raise_for_status()
    data = resp.json()
    df = pd.json_normalize(data)

    # Transform: rename, types, metadata
    df.rename(columns={"priceUsd": "price_usd"}, inplace=True)
    df["ingested_at"] = datetime.now(tz=timezone.utc).isoformat()
    df["price_usd"] = pd.to_numeric(df["price_usd"], errors="coerce")

    # Load: append to BigQuery partitioned table
    client = bigquery.Client()
    table_id = "my_project.analytics.properties_raw"
    job = client.load_table_from_dataframe(
        df,
        table_id,
        job_config=bigquery.LoadJobConfig(write_disposition="WRITE_APPEND"),
    )
    job.result()
    return "loaded " + str(len(df)) + " rows"`}
          </pre>
        </div>
        
        {/* About section */}
        <motion.div 
          id="about" 
          className="md:max-w-md md:ml-auto mt-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-bold mb-2">ABOUT</h3>
          <p className="text-sm leading-relaxed">
          I’m a Computer Science student at Michigan State University focused on data engineering and analytics at the intersection of finance, real estate, and technology.
          My work centers on building scalable data pipelines, backend systems, and analytics platforms that transform complex, real-world data into reliable inputs for decision-making. I’ve worked across the full data lifecycle from ingestion and transformation to modeling and analytic on financial, operational, and large-scale datasets.
          As the Backend Software Engineering Lead for an industry-sponsored capstone project with Magna International, I led the design of backend services for a VR platform integrating natural language interfaces with data-driven CAD workflows, focusing on system architecture, APIs, and reliability. Previously, at Lansing Board of Water & Light, I automated data workflows and built analytics dashboards to improve operational visibility and decision-making.
          Beyond industry and academic roles, I’ve built CDC-style analytics pipelines, backfill-safe incremental systems, and property analytics workflows spanning global real-estate data. I’m particularly interested in how data engineering, machine learning, and software systems enable smarter financial and real-estate intelligence.
          My goal is to build reliable data systems that power high-impact decisions in fintech, proptech, and data-driven technology companies.
          </p>
        </motion.div>
        
        {/* Experience section with skills chart */}
        <div className="relative">
          {/* Skills Chart */}
          <div className="absolute left-0 top-1/4 w-80 h-80 opacity-70 hidden md:block"> 
            <ChartContainer config={chartConfig} className="w-full h-full">
              <BarChart 
                accessibilityLayer 
                data={skillsData}
                layout="vertical" 
                margin={{ left: -10, right: 10, top: 10, bottom: 10 }} // Adjusted margins for vertical layout
              >
                <CartesianGrid horizontal={false} strokeDasharray="3 3" stroke="#555555" /> 
                <YAxis
                  dataKey="skill" // Y-axis now shows skills
                  type="category"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: '#FFFFFF', fontSize: 12 }} // Ensure white fill for skills
                  width={60} // Adjusted width for skill names
                  interval={0} 
                />
                <XAxis 
                  dataKey="experience" // X-axis now shows experience
                  type="number"
                  hide={true} // Keep X-axis line/labels hidden
                />
                <ChartTooltip
                  cursor={{ fill: '#333333' }} 
                  content={<ChartTooltipContent indicator="line" nameKey="experience" labelKey="skill" style={{ backgroundColor: '#1a1a1a', borderColor: '#444444' }} itemStyle={{ color: '#ededed' }} />} 
                />
                <Bar dataKey="experience" fill="var(--color-experience)" radius={3} barSize={12} /> 
              </BarChart>
            </ChartContainer>
          </div>
          
          <motion.div 
            id="experience" 
            className="md:max-w-md md:ml-auto mt-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-bold mb-4">EXPERIENCE</h3>
            <div className="space-y-4">
              
              <div className="border-l border-[#888888] pl-4">
                <h4 className="font-medium text-sm">
                  Backend Software Engineering Lead (Capstone) · Magna International
                </h4>
                <p className="text-xs text-[#888888]">2025 – Present</p>
                <p className="text-xs mt-2">
                  Led backend architecture and API design for a VR platform integrating natural-language
                  interfaces with CAD workflows, focusing on reliability, data handling, and scalable services.
                </p>
              </div>

              <div className="border-l border-[#888888] pl-4">
                <h4 className="font-medium text-sm">
                  Analytics Engineer · Lansing Board of Water & Light
                </h4>
                <p className="text-xs text-[#888888]">Internship • May 2025 – Aug 2025</p>
                <p className="text-xs mt-2">
                  Automated and reconciled operational data across enterprise systems using Python and
                  Power Platform tools, improving reporting reliability and reducing manual correction effort.
                </p>
              </div>

              <div className="border-l border-[#888888] pl-4">
                <h4 className="font-medium text-sm">
                  Data Engineer · ADNOC Distribution
                </h4>
                <p className="text-xs text-[#888888]">Internship • May 2024 – Aug 2024</p>
                <p className="text-xs mt-2">
                  Built analytics-ready tables and data models on Oracle Cloud data warehouses, developed Python-based data validation workflows, and delivered Power BI dashboards enabling cross-functional teams to monitor operational and performance KPIs.
                </p>
              </div>

            </div>
          </motion.div>
          
          </div>
        
        {/* Projects section*/}
        <motion.div 
          id="portfolio" 
          className="w-full mt-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-bold mb-4">Portfolio</h3>
          
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {/* Existing Project 1 */}
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="border border-[#333333] rounded-md p-4 h-48 flex flex-col">
                  <h4 className="font-medium text-sm">Real Estate Market Intelligence Pipeline</h4>
                  <p className="text-xs text-[#888888] mb-2">Jul 2025 - Dec 2025</p>
                  <p className="text-xs flex-grow">
                  Developed a scalable ELT system for property data, combining batch and streaming ingestion, automated quality testing, and cost-efficient warehouse design in BigQuery.
                  </p>
                  <Button 
                    asChild
                    variant="outline" 
                    size="sm" 
                    className="mt-2 w-full border-[#333333] hover:bg-[#333333] bg-[#ededed] text-black hover:text-[#ededed]"
                  >
                    <Link href="/projects/real-estate">View Project</Link>
                  </Button>
                </div>
              </CarouselItem>
              
              {/* CDC Pipeline */}
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="border border-[#333333] rounded-md p-4 h-48 flex flex-col">
                  <h4 className="font-medium text-sm">Change Data Capture (CDC) Pipeline</h4>
                  <p className="text-xs text-[#888888] mb-2">Nov 2025 - Present</p>
                  <p className="text-xs flex-grow">
                    Built a CDC pipeline to stream row-level changes from OLTP systems into the warehouse,
                    enabling near-real-time analytics with idempotent upserts and schema-evolution handling.
                  </p>
                  <Button 
                    asChild
                    variant="outline" 
                    size="sm" 
                    className="mt-2 w-full border-[#333333] hover:bg-[#333333] bg-[#ededed] text-black hover:text-[#ededed]"
                  >
                    <Link href="/projects/cdc-pipeline">View Project</Link>
                  </Button>
                </div>
              </CarouselItem>

              {/* Backfill-Safe Incremental Ingestion */}
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="border border-[#333333] rounded-md p-4 h-48 flex flex-col">
                  <h4 className="font-medium text-sm">Backfill‑Safe Incremental Ingestion</h4>
                  <p className="text-xs text-[#888888] mb-2">Dec 2025 - Present</p>
                  <p className="text-xs flex-grow">
                    Designed an incremental loader with bookmark/watermark checkpoints, windowed backfills,
                    and deduplication to ensure accuracy while minimizing compute costs.
                  </p>
                  <Button 
                    asChild
                    variant="outline" 
                    size="sm" 
                    className="mt-2 w-full border-[#333333] hover:bg-[#333333] bg-[#ededed] text-black hover:text-[#ededed]"
                  >
                    <Link href="/projects/incremental-ingestion">View Project</Link> 
                  </Button>
                </div>
              </CarouselItem>
              
              {/* Existing Project 3 */}
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="border border-[#333333] rounded-md p-4 h-48 flex flex-col">
                  <h4 className="font-medium text-sm">Algorithmic Trading System</h4>
                  <p className="text-xs text-[#888888] mb-2">May 2024 - July 2024</p>
                  <p className="text-xs flex-grow">
                    The project employs machine learning techniques, particularly unsupervised learning, 
                    to extract insights from financial data, such as patterns and relationships that are not predefined.
                  </p>
                  <Button 
                    asChild
                    variant="outline" 
                    size="sm" 
                    className="mt-2 w-full border-[#333333] hover:bg-[#333333] bg-[#ededed] text-black hover:text-[#ededed]"
                  >
                    <Link href="/projects/algorithmic-trading">View Project</Link>
                  </Button>
                </div>
              </CarouselItem>

            </CarouselContent>
            <CarouselPrevious className="left-0 bg-transparent border-[#333333] text-[#ededed] hover:bg-[#222222]" />
            <CarouselNext className="right-0 bg-transparent border-[#333333] text-[#ededed] hover:bg-[#222222]" />
          </Carousel>
        </motion.div>
        
        {/* Interests section and Hobby Images */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mt-8 mb-20">
          <motion.div 
            id="interests"
            className="md:max-w-md md:flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-bold mb-4">INTERESTS</h3>
            <div className="text-sm">
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>Playing Chess : This is my mental gym. I love playing fast paced chess game as it improves my sharpness and time management.</li>
                <li>Playing Soccer : I love playing soccer as it helps me stay fit and active. I also love to watch soccer games.</li>
                <li>ATV : I love to go on ATV rides in the mountains. It is a great way to enjoy nature and get some exercise.</li>
                <li>Traveling : I love to travel and explore new places. Currently, been to over 20 countries (majorly in Europe and Asia).</li>
                <li>Gymming : I love to gym as it helps me stay fit and active. I also love to watch gym videos and learn new exercises.</li>
                <li>Surfing : I love to surf as it is a great way to enjoy nature and get some exercise.</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            className="md:flex-1 flex justify-end items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-md mx-auto md:mr-0">
              <ImageRotator 
                images={hobbyImages}
                interval={3000}
                className="shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer with Connect section */}
      <footer id="contact" className="py-8 border-t border-[#222222] mt-10">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-bold mb-6">CONNECT WITH ME</h3>
          <FloatingDock 
            items={socialLinks} 
            desktopClassName="bg-[#0a0a0a] mb-4" 
            mobileClassName="fixed bottom-4 right-4"
          />
        </motion.div>
      </footer>
    </div>
  );
}
