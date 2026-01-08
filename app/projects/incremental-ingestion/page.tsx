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
            Backfill-Safe Incremental Ingestion
          </h1>
          <p className="text-[#888888] mb-6">
            Nov 2025 – Present | Incremental Loads, Late-Arriving Data, Cost-Aware Backfills
          </p>

          <div className="relative w-full h-60 rounded-md overflow-hidden mb-8">
            <Image
              src="/backfill.png"
              alt="Backfill safe incremental ingestion architecture"
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
              Designed and implemented a backfill-safe incremental ingestion framework for
              analytics workloads, enabling reliable historical reprocessing without data
              duplication or full table reloads. The system supports late-arriving updates,
              selective recomputation, and predictable SLAs while minimizing warehouse cost.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">Challenge</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Analytics pipelines often require historical reprocessing due to late-arriving
              corrections, schema changes, or updated business logic. Naive backfills can
              double-count records, violate downstream consistency, and cause large,
              unnecessary compute spikes. The challenge was to enable safe reprocessing
              while preserving freshness guarantees and cost efficiency.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">Solution</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Built a unified incremental + backfill architecture with the following design:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 mb-4">
              <li>
                <strong>Incremental ingestion:</strong> Range-based loads driven by
                <em> event time</em> and <em>updated_at</em> watermarks to capture both new
                events and late-arriving changes.
              </li>
              <li>
                <strong>Backfill strategy:</strong> Windowed, partition-aware reprocessing
                that runs alongside daily loads, recomputing only affected time ranges.
              </li>
              <li>
                <strong>Data correctness:</strong> Idempotent writes using primary-key
                deduplication and MERGE semantics to prevent duplication during retries
                and historical rebuilds.
              </li>
              <li>
                <strong>Cost control:</strong> Partitioning and clustering to limit scanned
                data and avoid full table rewrites during backfills.
              </li>
              <li>
                <strong>Orchestration & observability:</strong> DAG-driven execution with
                checkpointed progress, backfill tracking, and anomaly detection.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-4 mt-8">
              Technical Implementation
            </h2>
            <p className="text-sm mb-4 leading-relaxed">
              Core components and tooling used in the pipeline:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li>Python services to compute incremental and backfill ranges</li>
              <li>Google BigQuery with partitioned and clustered analytical tables</li>
              <li>dbt incremental models using MERGE logic for late-arriving data</li>
              <li>Apache Airflow DAGs for daily incrementals and targeted backfill workflows</li>
              <li>Cloud Run for stateless, scalable ingestion workers</li>
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
                <p className="text-sm">Nov 2025 - Present</p>
              </div>

              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">TEAM</h4>
                <p className="text-sm">1 member (solo project)</p>
              </div>

              <div className="mb-4">
                <h4 className="text-xs text-[#888888] mb-1">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">SQL</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">BigQuery</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">dbt</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">Airflow</span>
                  <span className="text-xs bg-[#222222] px-2 py-1 rounded">GCP</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs text-[#888888] mb-1">OUTCOME</h4>
                <p className="text-sm">
                  Enabled accurate historical backfills without duplication, reduced
                  warehouse compute costs, and maintained predictable SLAs through
                  checkpointed, partition-aware reprocessing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
