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
          <h1 className="text-4xl font-bold mb-2">Predictive Analysis Model</h1>
          <p className="text-[#888888] mb-6">2022 | Machine Learning, Time Series Analysis, Forecasting</p>
          
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
              The Predictive Analysis Model is an advanced machine learning system designed to forecast future trends 
              and patterns based on historical data. This powerful tool enables organizations to anticipate market 
              changes, customer behaviors, and operational needs with remarkable accuracy, allowing for more 
              informed strategic planning and proactive decision-making.
            </p>
            
            <h2 className="text-xl font-bold mb-4 mt-8">Challenge</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Traditional forecasting methods often struggle with complex, multidimensional data and frequently fail 
              to account for subtle patterns and non-linear relationships. Organizations face increasing pressure to 
              predict future trends accurately in volatile markets, but most lack the sophisticated tools necessary 
              to leverage their historical data effectively for forward-looking insights.
            </p>
            
            <h2 className="text-xl font-bold mb-4 mt-8">Solution</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Our Predictive Analysis Model tackles these challenges through several innovative approaches:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 mb-4">
              <li>Multi-modal Learning: Combines multiple predictive algorithms (ARIMA, Prophet, LSTM networks) to form ensemble predictions with higher accuracy than any single model.</li>
              <li>Feature Engineering Automation: Automatically identifies and transforms relevant variables from raw data to optimize predictive power.</li>
              <li>Anomaly Detection: Identifies outliers and unusual patterns that might skew predictions, improving model robustness.</li>
              <li>Confidence Intervals: Provides statistical confidence levels for all predictions, helping users understand forecast reliability.</li>
              <li>Scenario Modeling: Allows users to model different "what-if" scenarios by adjusting input parameters.</li>
              <li>Continuous Learning: Automatically retrains on new data, ensuring the model's accuracy improves over time.</li>
            </ul>
            
            <h2 className="text-xl font-bold mb-4 mt-8">Technical Implementation</h2>
            <p className="text-sm mb-4 leading-relaxed">
              The model leverages cutting-edge technologies for maximum performance and scalability:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li>Core ML Algorithms: Python with scikit-learn, TensorFlow, and Facebook Prophet for diverse prediction approaches</li>
              <li>Data Processing: PySpark for distributed preprocessing of large datasets</li>
              <li>Feature Store: MLflow for storing, versioning, and sharing engineered features</li>
              <li>Model Management: Kubeflow for orchestrating model training, evaluation, and deployment pipelines</li>
              <li>API Layer: Flask for serving predictions via RESTful endpoints</li>
              <li>Infrastructure: Containerized with Docker and deployed on Google Cloud Platform with autoscaling</li>
            </ul>
            
            <h2 className="text-xl font-bold mb-4 mt-8">Results and Impact</h2>
            <p className="text-sm mb-4 leading-relaxed">
              The model has demonstrated exceptional performance in real-world applications:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li>85% reduction in forecast error compared to previous methods</li>
              <li>Successfully predicted market demand fluctuations 3-6 months in advance</li>
              <li>Enabled inventory optimization that reduced carrying costs by 22%</li>
              <li>Identified emerging customer behavior trends before they became apparent through conventional analysis</li>
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
                <p className="text-sm">9 months</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">TEAM</h4>
                <p className="text-sm">3 members (Data Scientists & ML Engineers)</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">TensorFlow</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">scikit-learn</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Prophet</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">PySpark</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">MLflow</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Kubeflow</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">GCP</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-xs text-[#888888] mb-1">OUTCOME</h4>
                <p className="text-sm">Model achieved 92% forecast accuracy, exceeding client expectations and resulting in estimated annual savings of $2.4M</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 