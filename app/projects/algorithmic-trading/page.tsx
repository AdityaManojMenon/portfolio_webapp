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
          <h1 className="text-4xl font-bold mb-2">Algorithmic Trading System</h1>
          <p className="text-[#888888] mb-6">2024 | Machine Learning, Time Series Analysis, Unsupervised Clustering</p>
          
          <div className="relative w-full h-60 rounded-md overflow-hidden mb-8">
            <Image 
              src="/algo.png" 
              alt="algo"
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
            <Link href="https://github.com/AdityaManojMenon/Algorithmic-Trading-Model-using-Unsupervised-Learning" className="text-white-500 hover:text-blue-600">Project Link</Link>
            <p className="text-sm mb-4 leading-relaxed">
              This Algorithmic Trading System was developed to identify, cluster, and optimize
              trading opportunities within the S&#38;P 500 universe. By using advanced techniques
              like Rolling Ordinary Least Squares (OLS), factor modeling, and K-Means clustering,
              the system dynamically ranks equities based on technical indicators and fundamental
              factors. It then constructs an optimized portfolio that adapts to market conditions
              on a monthly basis.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">Challenge</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Traders and investment firms are often overwhelmed by the complexity of financial
              markets, especially when analyzing large datasets from thousands of securities.
              Traditional approaches struggle to handle complex factor modeling and the volatility
              inherent in high-frequency market data. The challenge was to systematically
              incorporate multiple data sources (technical, fundamental, and factor-based) into
              a cohesive framework that delivers actionable trading signals.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">Solution</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Our Algorithmic Trading System addresses these challenges through several innovative
              steps:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 mb-4">
              <li><strong>Rolling Factor Regression:</strong> Uses RollingOLS from statsmodels to calculate time-varying betas against the Fama-French factors, capturing the evolving risk exposure of each security.</li>
              <li><strong>Technical Feature Engineering:</strong> Computes RSI, Bollinger Bands, ATR, and Garman-Klass Volatility to capture both volatility and momentum indicators.</li>
              <li><strong>K-Means Clustering:</strong> Groups stocks with similar RSI profiles or volatility regimes to differentiate between momentum-driven and mean-reverting securities.</li>
              <li><strong>Monthly Liquidity Filter:</strong> Retains only the top 150 most liquid stocks to ensure viable trade execution with minimal slippage.</li>
              <li><strong>Portfolio Optimization:</strong> Leverages PyPortfolioOpt to generate maximum Sharpe ratio allocations within user-defined constraints.</li>
              <li><strong>Continuous Adaptation:</strong> Uses a rolling window of 12 months for optimization, retraining every month to respond rapidly to market shifts.</li>
            </ul>

            <h2 className="text-xl font-bold mb-4 mt-8">Technical Implementation</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Built on a robust Python ecosystem, this project incorporates several libraries for
              data retrieval, feature calculation, clustering, and optimization:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li><strong>Data Retrieval:</strong> yfinance for seamless downloading of historical prices and volumes</li>
              <li><strong>Factor Modeling:</strong> Fama-French factors from <code>pandas_datareader</code> to compute rolling betas</li>
              <li><strong>Clustering:</strong> Scikit-learn KMeans for grouping stocks by common technical or fundamental patterns</li>
              <li><strong>Optimization:</strong> PyPortfolioOpt for efficient frontier-based portfolio construction</li>
              <li><strong>Visualization:</strong> Matplotlib to chart cluster allocations and compare portfolio returns to benchmarks</li>
            </ul>

            <h2 className="text-xl font-bold mb-4 mt-8">Results and Impact</h2>
            <p className="text-sm mb-4 leading-relaxed">
              The system has shown promising performance in backtests and experimental live trading:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li>Delivered returns that outperformed the S&#38;P 500 over multiple test periods</li>
              <li>Maintained a more favorable risk profile by dynamically reducing exposure to volatile or illiquid stocks</li>
              <li>Identified hidden factor exposures through rolling regressions, minimizing potential drawdowns</li>
              <li>Provided a scalable framework that can be extended to include alternative data sources or new market factors</li>
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
                <p className="text-sm">Quantitative Analyst</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">DURATION</h4>
                <p className="text-sm">2 months</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">TEAM</h4>
                <p className="text-sm">solo (Data Scientists)</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">statsmodels</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">scikit-learn</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">yfinance</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">PyPortfolioOpt</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Pandas</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Numpy</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-xs text-[#888888] mb-1">OUTCOME</h4>
                <p className="text-sm">
                  The algorithmic strategy outperformed the S&#38;P 500 during economic growth period. Learnt alot about the importance of data preprocessing and feature engineering in building a trading strategy. Morever, I learnt alot about financial modelling and the importance of risk management in trading.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
