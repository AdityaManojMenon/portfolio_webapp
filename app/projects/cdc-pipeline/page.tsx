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
          <h1 className="text-4xl font-bold mb-2">
            Change Data Capture (CDC) Analytics Pipeline
          </h1>
          <p className="text-[#888888] mb-6">
            2025 | Streaming Ingestion, Idempotent Upserts, Analytics-Ready Warehousing
          </p>

          <div className="relative w-full h-60 rounded-md overflow-hidden mb-8">
            <Image
              src="/cdc.png"
              alt="CDC analytics pipeline architecture"
              fill
              className="object-cover bg-[#111111]"
            />
          </div>
        </motion.div>

        {/* Project Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            className="col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl font-bold mb-4">Overview</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Designed and implemented a CDC-style analytics pipeline to reliably capture
              <strong> insert, update, and delete</strong> events from an OLTP system and
              materialize them into analytics-ready warehouse tables. The pipeline supports
              replayability, fault tolerance, and historical correctness, enabling near
              real-time analytics without sacrificing data integrity.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">Challenge</h2>
            <p className="text-sm mb-4 leading-relaxed">
              CDC systems must handle out-of-order events, late-arriving updates, retries,
              and deletes while maintaining a consistent downstream state. Naive ingestion
              approaches can lead to duplicated records, missed deletes, or broken history.
              The challenge was to build a system that remained correct under replays and
              failures while supporting scalable analytics workloads.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">Solution</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Built a fault-tolerant CDC architecture with the following design:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 mb-4">
              <li>
                <strong>Event ingestion:</strong> Insert, update, and delete events are
                published to Kafka and consumed with checkpointing to support replayability
                and exactly-once semantics at the analytics layer.
              </li>
              <li>
                <strong>Bronze → Silver → Gold modeling:</strong> Raw CDC events are staged,
                deduplicated, and transformed into analytics-ready tables with preserved
                historical state where required.
              </li>
              <li>
                <strong>Idempotent processing:</strong> Primary-key-aware deduplication and
                deterministic MERGE logic prevent duplication during retries and reprocessing.
              </li>
              <li>
                <strong>History preservation:</strong> Slowly Changing Dimension (SCD Type-2)
                models maintain a full record of state changes for customer and subscription
                analytics.
              </li>
              <li>
                <strong>Observability:</strong> Pipeline lag, freshness, and failure modes are
                monitored to ensure reliable downstream consumption.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-4 mt-8">
              Technical Implementation
            </h2>
            <p className="text-sm mb-4 leading-relaxed">
              Core components and tooling used:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li>Apache Kafka for durable CDC event transport</li>
              <li>Python-based consumers for ingestion, validation, and staging</li>
              <li>Google BigQuery as the analytical warehouse</li>
              <li>dbt incremental models using MERGE semantics and SCD Type-2 dimensions</li>
              <li>Apache Airflow for orchestration, monitoring, and replay workflows</li>
              <li>Cloud Run / Cloud Functions for scalable, stateless processing</li>
            </ul>
          </motion.div>

          {/* Sidebar */}
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
                <p className="text-sm">Data Engineer</p>
              </div>

              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">DURATION</h4>
                <p className="text-sm">Nov 2025 – Present</p>
              </div>

              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">TEAM</h4>
                <p className="text-sm">1 member (solo project)</p>
              </div>

              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Kafka</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">BigQuery</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">dbt</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Airflow</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">GCP</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs text-[#888888] mb-1">OUTCOME</h4>
                <p className="text-sm">
                  Delivered a replayable, fault-tolerant CDC pipeline with reliable upserts
                  and deletes, preserved historical state, and near real-time freshness for
                  downstream analytics and dashboards.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
