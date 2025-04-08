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
          <h1 className="text-4xl font-bold mb-2">Movie Recommendation System</h1>
          <p className="text-[#888888] mb-6">2024 | Machine Learning, Data Science, Streamlit</p>
          
          <div className="relative w-full h-60 rounded-md overflow-hidden mb-8">
            <Image 
              src="/movie.png" 
              alt="movie"
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
            <Link href="https://github.com/AdityaManojMenon/Movie-Recommendation-System" className="text-white-500 hover:text-blue-600">Project Link</Link>
            <p className="text-sm mb-4 leading-relaxed">
            This movie recommendation system offers personalized suggestions by analyzing user ratings and movie metadata using 
            content-based filtering with a KNN model and cosine similarity. It features secure user authentication with MongoDB and 
            bcrypt encryption, ensuring safe data handling. The interactive Streamlit interface provides a smooth and engaging user 
            experience, while trained models are efficiently stored and loaded using Pickle for real-time performance. 
            All user data and recommendations are securely managed within a MongoDB database. 
            </p>
            
            <h2 className="text-xl font-bold mb-4 mt-8">Challenge</h2>
            <p className="text-sm mb-4 leading-relaxed">
            Users often struggle to find movies that match their unique tastes, especially in large streaming libraries. 
            How can we help users quickly discover movies they'll enjoy based on their past preferences and similar content features?
            </p>
            
            <h2 className="text-xl font-bold mb-4 mt-8">Solution</h2>
            <p className="text-sm mb-4 leading-relaxed">
              The Movie Recommendation System tackles the challenge of personalized content discovery through several core innovations:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 mb-4">
              <li>Personalized Content Filtering: Utilizes a content-based filtering approach with K-Nearest Neighbors (KNN) and cosine similarity to suggest movies closely aligned with user preferences.</li>
              <li>Feature-Weighted Metadata Analysis: Enhances recommendation accuracy by assigning custom weights to genres, directors, and actors—prioritizing the most influential aspects of a movie's profile.</li>
              <li>Secure User Authentication: Implements user registration and login using MongoDB and bcrypt hashing, ensuring secure and scalable data handling.</li>
              <li>Interactive Web Interface: Built with Streamlit, the system provides a clean and intuitive UI, allowing users to easily rate movies and view tailored recommendations in real-time.</li>
              <li>Persistent User Data & Recommendations: Stores user preferences, sessions, and recommendations in a centralized MongoDB database, enabling a seamless personalized experience across sessions.</li>
              <li>Model Serialization for Performance: Uses Pickle to efficiently save and load trained models, allowing fast and reliable real-time inference without retraining.</li>
            </ul>
            
            <h2 className="text-xl font-bold mb-4 mt-8">Technical Implementation</h2>
            <p className="text-sm mb-4 leading-relaxed">
              The Movie Recommendation System is built with a focus on performance and security:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2">
            <li><strong>Frontend:</strong> Streamlit for creating an interactive and dynamic user interface</li>
            <li><strong>Backend:</strong> Python with Streamlit and Flask for handling application logic and routing</li>
            <li><strong>Data Processing:</strong> Pandas and Scikit-learn for feature engineering, data transformation, and model training</li>
            <li><strong>Storage:</strong> MongoDB for storing user profiles, ratings, and personalized recommendations</li>
            <li><strong>Authentication:</strong> bcrypt for secure password hashing and session state management in Streamlit</li>
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
                <p className="text-sm">Data Scientist</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">DURATION</h4>
                <p className="text-sm">2 weeks</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">TEAM</h4>
                <p className="text-sm">4 members (Data Scientist, Frontend Developer, Backend Developer)</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs bg-[#222222] px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-[#222222] px-2 py-1 rounded">Streamlit</span>
                <span className="text-xs bg-[#222222] px-2 py-1 rounded">Scikit-learn</span>
                <span className="text-xs bg-[#222222] px-2 py-1 rounded">Pandas</span>
                <span className="text-xs bg-[#222222] px-2 py-1 rounded">NumPy</span>
                <span className="text-xs bg-[#222222] px-2 py-1 rounded">MongoDB</span>
                <span className="text-xs bg-[#222222] px-2 py-1 rounded">bcrypt</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-xs text-[#888888] mb-1">OUTCOME</h4>
                <p className="text-sm">Learnt alot about the importance of data preprocessing and feature engineering in building a recommendation system.
                  More importantly, I learnt about the KNN model and how it can be used to build a recommendation system. 
                  I also learnt to intergrate the model with a web application using Streamlit and MongoDB for storing user profiles, ratings, and personalized recommendations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 