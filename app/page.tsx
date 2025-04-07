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
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Home() {
  const socialLinks = [
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-6 w-6 text-[#ededed]" />,
      href: "https://github.com",
    },
    {
      title: "Twitter",
      icon: <IconBrandTwitter className="h-6 w-6 text-[#ededed]" />,
      href: "https://twitter.com",
    },
    
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-6 w-6 text-[#ededed]" />,
      href: "https://instagram.com",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-6 w-6 text-[#ededed]" />,
      href: "https://linkedin.com",
    },
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
          </NavigationMenuList>
        </NavigationMenu>
        
        <Button 
          asChild 
          variant="outline" 
          className="rounded-full border-[#ededed] text-[#ededed] bg-transparent hover:bg-[#222222]"
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
          <div className="flex items-center mt-2">
            <span className="text-[#cccccc] mr-2">return</span>
            <Button 
              asChild 
              size="sm"
              className="bg-[#333333] hover:bg-[#444444] text-[#ededed] px-3 py-1"
            >
              <Link href="/resume.pdf" target="_blank">resume</Link>
            </Button>
          </div>
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
            I am data analyst based in Michigan, USA with a passion for
            creating data-driven solutions. With a strong foundation in 
            statistics, data analysis, and data visualization, 
            I specialize in turning complex data into actionable 
            insights and intuitive visual stories. 
            Currently, I'm channeling my expertise into an exciting startup 
            that leverages AI agents to help users seamlessly plan and 
            optimize their entire travel experience from itinerary creation 
            to real-time adjustments on the go.
            As an aspiring machine learning engineer, I'm constantly exploring innovative 
            ways to bridge data and intelligence. 
          </p>
        </motion.div>
        
        {/* Experience section with decorative elements */}
        <div className="relative">
          {/* Decorative formulas for Experience section */}
          <div className="absolute left-0 top-1/3 opacity-25 font-serif text-xs max-w-xs hidden md:block">
            <div className="text-[#aaaaaa]">
              <p className="my-2">accuracy = (TP + TN) / (TP + TN + FP + FN)</p>
              <p className="my-2">precision = TP / (TP + FP)</p>
              <p className="my-2">recall = TP / (TP + FN)</p>
              <p className="my-2">F1 = 2 * (precision * recall) / (precision + recall)</p>
              <p className="my-2">MSE = (1/n) * Σ(y_i - ŷ_i)²</p>
              <p className="my-2">RMSE = √[(1/n) * Σ(y_i - ŷ_i)²]</p>
            </div>
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
                <h4 className="font-medium text-sm">Data Scientist</h4>
                <p className="text-xs text-[#888888]">Tech Startup • 2023 - Present</p>
                <p className="text-xs mt-2">
                  Leading data analytics initiatives and building machine learning models 
                  to optimize trip planning for users.
                </p>
              </div>
              
              <div className="border-l border-[#888888] pl-4">
                <h4 className="font-medium text-sm">Data Analyst</h4>
                <p className="text-xs text-[#888888]">Research Institute • 2022 - 2023</p>
                <p className="text-xs mt-2">
                  Analyzed large datasets to extract insights and presented findings
                  to stakeholders.
                </p>
              </div>
              
              <div className="border-l border-[#888888] pl-4">
                <h4 className="font-medium text-sm">Research Assistant</h4>
                <p className="text-xs text-[#888888]">University • 2020 - 2022</p>
                <p className="text-xs mt-2">
                  Assisted in research projects, data collection, and analysis for
                  academic publications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        
        
        {/* Projects section */}
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
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="border border-[#333333] rounded-md p-4 h-48 flex flex-col">
                  <h4 className="font-medium text-sm">AI Trip Planner</h4>
                  <p className="text-xs text-[#888888] mb-2">2023</p>
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
                    <Link href="/projects/ai-trip-planner">View Project</Link>
                  </Button>
                </div>
              </CarouselItem>
              
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="border border-[#333333] rounded-md p-4 h-48 flex flex-col">
                  <h4 className="font-medium text-sm">Data Visualization Dashboard</h4>
                  <p className="text-xs text-[#888888] mb-2">2022</p>
                  <p className="text-xs flex-grow">
                    Interactive dashboard to visualize and analyze complex datasets for business intelligence.
                  </p>
                  <Button 
                    asChild
                    variant="outline" 
                    size="sm" 
                    className="mt-2 w-full border-[#333333] hover:bg-[#333333] bg-[#ededed] text-black hover:text-[#ededed]"
                  >
                    <Link href="/projects/data-visualization">View Project</Link>
                  </Button>
                </div>
              </CarouselItem>
              
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="border border-[#333333] rounded-md p-4 h-48 flex flex-col">
                  <h4 className="font-medium text-sm">Predictive Analysis Model</h4>
                  <p className="text-xs text-[#888888] mb-2">2022</p>
                  <p className="text-xs flex-grow">
                    Machine learning model that predicts future trends based on historical data patterns.
                  </p>
                  <Button 
                    asChild
                    variant="outline" 
                    size="sm" 
                    className="mt-2 w-full border-[#333333] hover:bg-[#333333] bg-[#ededed] text-black hover:text-[#ededed]"
                  >
                    <Link href="/projects/predictive-analysis">View Project</Link>
                  </Button>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-transparent border-[#333333] text-[#ededed] hover:bg-[#222222]" />
            <CarouselNext className="right-0 bg-transparent border-[#333333] text-[#ededed] hover:bg-[#222222]" />
          </Carousel>
        </motion.div>
        
        {/* Interests section */}
        <motion.div 
          id="interests"
          className="md:max-w-md md:mr-auto mt-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-bold mb-4">INTERESTS</h3>
          <p className="text-sm">
            I enjoy playing chess and soccer in my free time. More details about my interests will be added later.
          </p>
        </motion.div>
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
