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
      href: "https://www.instagram.com/fumz03/",
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
      label: "Years of Experience",
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
              <Link href="#experience" legacyBehavior passHref>
                <NavigationMenuLink className="text-[#ededed] bg-transparent hover:bg-transparent hover:text-[#888888] px-4 py-2 text-sm font-medium transition-colors">
                  Experience
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#portfolio" legacyBehavior passHref>
                <NavigationMenuLink className="text-[#ededed] bg-transparent hover:bg-transparent hover:text-[#888888] px-4 py-2 text-sm font-medium transition-colors">
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#interests" legacyBehavior passHref>
                <NavigationMenuLink className="text-[#ededed] bg-transparent hover:bg-transparent hover:text-[#888888] px-4 py-2 text-sm font-medium transition-colors">
                  Interests
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="https://drive.google.com/file/d/13Mc4R2GPGTPRfJkK3RPlCEMe-BWKLFXo/view?usp=share_link" legacyBehavior passHref>
                <NavigationMenuLink 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ededed] bg-transparent hover:bg-transparent hover:text-[#888888] px-4 py-2 text-sm font-medium transition-colors"
                >
                  Resume
                </NavigationMenuLink>
              </Link>
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
            <span className="block">ANALYST</span>
          </h2>
          
          {/* Subheading */}
          <div className="text-xs md:text-sm mt-4">
            <p>2023 - Present</p>
          </div>
        </div>
        
        {/* Algorithm visualization positioned to the left of About section */}
        <div className="absolute left-6 md:left-10 top-[300px] opacity-40 font-mono text-xs">
          <pre className="text-[#cccccc]">
            {`
            
            
            
            
            
            
            
            
            
            
            
            
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

def train_model(df):
    # Feature engineering
    X = df.drop('target', axis=1)
    y = df['target']
    
    # Split dataset
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42)
    
    # Train model
    model = RandomForestClassifier(n_estimators=100)
    model.fit(X_train, y_train)
    
    # Evaluate
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    
    return model, accuracy`}
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
            I am a data analyst based in Michigan, USA with a passion for
            creating data-driven solutions. With a strong foundation in 
            statistics, data analysis, and data visualization, 
            I specialize in turning complex data into actionable 
            insights and intuitive visual stories. 
            Currently, I'm channeling my expertise into an exciting startup 
            that leverages AI agents to help users seamlessly plan and 
            optimize their entire travel experience from itinerary creation 
            to real-time adjustments on the go.
            As an aspiring machine learning engineer and founder, I'm constantly exploring innovative 
            ways to bridge data and intelligence. 
          </p>
        </motion.div>
        
        {/* Experience section with skills chart */}
        <div className="relative">
          {/* Skills Chart (Horizontal - Vertical Bars) - Adjusted Axes */}
          <div className="absolute left-0 top-1/4 w-80 h-80 opacity-70 hidden md:block"> 
            <ChartContainer config={chartConfig} className="w-full h-full">
              <BarChart 
                accessibilityLayer 
                data={skillsData}
                layout="vertical" // Changed back to vertical layout for horizontal bars
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
                <h4 className="font-medium text-sm">Co-Founder of Voyagen.ai</h4>
                <p className="text-xs text-[#888888]">Tech Startup • 2025 - Present</p>
                <p className="text-xs mt-2">
                  Developing an AI-powered travel agent that 
                  uses natural language processing and machine learning 
                  to help users plan and budget their trips.
                </p>
              </div>
              
              <div className="border-l border-[#888888] pl-4">
                <h4 className="font-medium text-sm">Data Analyst at Board of Water and Light (Lansing)</h4>
                <p className="text-xs text-[#888888]">Intership• May 2025 - August 2025</p>
                <p className="text-xs mt-2">
                  Upcoming
                </p>
              </div>
              
              <div className="border-l border-[#888888] pl-4">
                <h4 className="font-medium text-sm">Data Analyst at Adnoc Distribution</h4>
                <p className="text-xs text-[#888888]">Internship • May 2024 - August 2024</p>
                <p className="text-xs mt-2">
                  I analyzed large retail department datasets using SQL and 
                  Python to uncover customer behavior and sales trends, and
                  developed interactive Power BI dashboards to effectively
                  present actionable insights to senior stakeholders.
                </p>
              </div>
              
              <div className="border-l border-[#888888] pl-4">
                <h4 className="font-medium text-sm">Researcher at Wikicharties </h4>
                <p className="text-xs text-[#888888]">Internship • May 2023 - August 2023</p>
                <p className="text-xs mt-2">
                  Conducted in-depth research and edited articles for the Journal of Nonprofit Innovation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Projects section - Added two more projects */}
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
                  <h4 className="font-medium text-sm">Voyagen.ai</h4>
                  <p className="text-xs text-[#888888] mb-2">2025</p>
                  <p className="text-xs flex-grow">
                    An application that uses AI to help users plan personalized trips based on
                    their preferences and constraints.
                  </p>
                  <Button 
                    asChild
                    variant="outline" 
                    size="sm" 
                    className="mt-2 w-full border-[#333333] hover:bg-[#333333] bg-[#ededed] text-black hover:text-[#ededed]"
                  >
                    <Link href="/projects/voyagen-ai">View Project</Link>
                  </Button>
                </div>
              </CarouselItem>
              
              {/* Existing Project 2 */}
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="border border-[#333333] rounded-md p-4 h-48 flex flex-col">
                  <h4 className="font-medium text-sm">Movie Recommendation System</h4>
                  <p className="text-xs text-[#888888] mb-2">2024</p>
                  <p className="text-xs flex-grow">
                    Created a movie recommendation system using kmeans clustering machine learning model and cosine similarity
                    to recommend movies to users based on their preferences.                  
                  </p>
                  <Button 
                    asChild
                    variant="outline" 
                    size="sm" 
                    className="mt-2 w-full border-[#333333] hover:bg-[#333333] bg-[#ededed] text-black hover:text-[#ededed]"
                  >
                    <Link href="/projects/movie-recommendation-system">View Project</Link>
                  </Button>
                </div>
              </CarouselItem>
              
              {/* Existing Project 3 */}
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="border border-[#333333] rounded-md p-4 h-48 flex flex-col">
                  <h4 className="font-medium text-sm">Algorithmic Trading</h4>
                  <p className="text-xs text-[#888888] mb-2">2024</p>
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

              {/* New Project 4 */}
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="border border-[#333333] rounded-md p-4 h-48 flex flex-col">
                  <h4 className="font-medium text-sm">Data Visualization</h4>
                  <p className="text-xs text-[#888888] mb-2">2023</p>
                  <p className="text-xs flex-grow">
                    The project focuses on tracking key performance indicators (KPIs), comparing regional performance, analyzing 
                    product-level trends, and identifying high-value customers.
                  </p>
                  <Button 
                    asChild
                    variant="outline" 
                    size="sm" 
                    className="mt-2 w-full border-[#333333] hover:bg-[#333333] bg-[#ededed] text-black hover:text-[#ededed]"
                  >
                    {/* Placeholder link - replace if you create a page */}
                    <Link href="/projects/data-visualization">View Project</Link> 
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
            className="md:flex-1 flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-md mx-auto">
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
