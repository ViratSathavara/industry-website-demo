"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  RotateCcw
} from "lucide-react";
import confetti from "canvas-confetti";

interface Question {
  id: number;
  question: string;
  category: string;
  options: {
    text: string;
    points: number;
    description: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "How do prospective buyers currently submit technical inquiries & RFQs to your factory?",
    category: "Inbound Discovery",
    options: [
      {
        text: "Paper visits, direct calls, or forwarded personal emails",
        points: 5,
        description: "Zero structured metadata; high likelihood of lost drawings."
      },
      {
        text: "Standard contact forms or IndiaMART email alerts",
        points: 12,
        description: "Captures basic text, but lacks 2D/3D CAD and tolerances."
      },
      {
        text: "Automated multi-step RFQ wizard with CAD uploads & instant acknowledgment",
        points: 20,
        description: "Industry standard for Tier-1 engineering suppliers."
      }
    ]
  },
  {
    id: 2,
    question: "What is your typical turnaround time to deliver a formal commercial quotation?",
    category: "Commercial Velocity",
    options: [
      {
        text: "4 to 7 business days (manual engineer review on Excel)",
        points: 5,
        description: "Loses 40%+ of export and OEM bids to faster competitors."
      },
      {
        text: "24 to 48 hours for standard catalog parts",
        points: 12,
        description: "Acceptable for local jobs, but lags international benchmarks."
      },
      {
        text: "Under 4 hours (CPQ pre-configured BOM & automated GST calculations)",
        points: 20,
        description: "Top 5% speed in precision engineering globally."
      }
    ]
  },
  {
    id: 3,
    question: "How do your enterprise customers check the manufacturing & dispatch status of their batch?",
    category: "Customer Transparency",
    options: [
      {
        text: "They call our plant supervisor or sales representative repeatedly",
        points: 5,
        description: "Wastes 10+ hours per week of supervisory shopfloor time."
      },
      {
        text: "We send periodic manual WhatsApp or email dispatch spreadsheets",
        points: 10,
        description: "Better, but requires manual daily maintenance."
      },
      {
        text: "Self-service Customer Portal with real-time shopfloor milestones & docket tracking",
        points: 20,
        description: "Eliminates status inquiries and increases buyer retention by 70%."
      }
    ]
  },
  {
    id: 4,
    question: "Do prospective buyers have instant access to 3D CAD models (STEP/IGES) & Material Test Certs?",
    category: "Technical Enablement",
    options: [
      {
        text: "No, we only email static PDFs upon multiple follow-up requests",
        points: 5,
        description: "Severely delays procurement approvals by design engineers."
      },
      {
        text: "We have basic product photos and general brochure PDFs on our website",
        points: 12,
        description: "Shows capability, but fails engineering dimension checks."
      },
      {
        text: "Interactive 3D CAD viewer, chemical spectroscopy, and CMM metrology reports available on catalog",
        points: 20,
        description: "Accelerates First Article Approval (FAIR) by 3.4x."
      }
    ]
  },
  {
    id: 5,
    question: "How are your machine capacities, cycle times, and shopfloor lead times tracked?",
    category: "Operational Governance",
    options: [
      {
        text: "Whiteboards on the shopfloor and informal verbal check-ins",
        points: 5,
        description: "High variance in promised delivery dates; zero predictive telemetry."
      },
      {
        text: "Daily batch Excel logs updated at end-of-shift",
        points: 12,
        description: "Standard practice, but historical rather than real-time."
      },
      {
        text: "Connected digital ERP/MES telemetry with automated capacity utilization and machine runout tracking",
        points: 20,
        description: "World-class OEE monitoring required for aerospace & automotive OEM contracts."
      }
    ]
  }
];

export default function DigitalAuditPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId: number, points: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: points
    }));
  };

  const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
  const maxScore = QUESTIONS.length * 20;
  const scorePercent = Math.round((totalScore / maxScore) * 100);

  const getMaturityTier = (score: number) => {
    if (score < 40) {
      return {
        level: "Level 1: Offline Machine Shop",
        bg: "bg-red-500/10 text-red-400 border-red-500/30",
        summary:
          "Your operations rely heavily on manual paper trails, email threads, and verbal updates. You are likely losing 30-45% of potential high-value export contracts due to slow quote turnarounds and lack of digital transparency.",
        lossEstimate: "₹25L – ₹50L",
        recommendations: [
          "Deploy an automated 6-step CAD RFQ wizard on your web catalog.",
          "Adopt a CPQ quote generator to compress proposal delivery from 5 days to 4 hours.",
          "Provide buyers with a self-service status portal to eliminate redundant status calls."
        ]
      };
    } else if (score < 75) {
      return {
        level: "Level 2: Digitally Assisted Manufacturer",
        bg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
        summary:
          "You have solid foundational software in place, but fragmented workflows cause bottlenecks between inbound sales, engineering estimations, and customer dispatches.",
        lossEstimate: "₹10L – ₹25L",
        recommendations: [
          "Standardize CAD model previews directly on your online component catalog.",
          "Implement automated SMS and WhatsApp milestone alerts for batch dispatches.",
          "Empower sales with real-time machine capacity filters to prevent under-quoting lead times."
        ]
      };
    } else {
      return {
        level: "Level 3: Connected Industry 4.0 Digital Factory",
        bg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
        summary:
          "Your plant operates at top-tier international standards. Your digital workflows match or exceed global contract precision engineering requirements.",
        lossEstimate: "< ₹5L",
        recommendations: [
          "Integrate real-time IoT MES machine telemetry into buyer portals.",
          "Expand trilingual export marketing for European and Middle Eastern defense/aerospace buyers.",
          "Leverage executive natural language analytics for automated EBITDA margin optimization."
        ]
      };
    }
  };

  const maturity = getMaturityTier(scorePercent);

  const handleSubmit = () => {
    if (Object.keys(answers).length < QUESTIONS.length) {
      alert("Please answer all questions to calculate your Digital Factory Maturity Score.");
      return;
    }
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#20272b] text-[#f5f0e7]">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10 space-y-8">
          {!submitted ? (
            <div className="space-y-8">
              {/* Intro Hero */}
              <div className="text-center space-y-3 max-w-2xl mx-auto">
                <span className="eyebrow text-[#e7a45c]">
                  5-Minute Diagnostic Assessment
                </span>
                <h1 className="text-3xl sm:text-5xl font-display tracking-tight text-[#f5f0e7]">
                  How Much Revenue Is Your Factory Losing to <em className="text-[#e7a45c]">Offline Friction?</em>
                </h1>
                <p className="text-xs sm:text-sm text-[#aeb5b2] leading-relaxed">
                  Answer these 5 diagnostic questions about your current customer inquiry, quotation, and dispatch workflows to receive your customized Digital Factory Maturity Score and ROI roadmap.
                </p>
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {QUESTIONS.map((q, idx) => (
                  <div
                    key={q.id}
                    className="bg-[#171c1e] p-6 sm:p-8 border border-white/10 shadow-xl space-y-4"
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#e7a45c] font-bold">QUESTION 0{idx + 1} OF 0{QUESTIONS.length}</span>
                      <span className="px-2.5 py-0.5 bg-[#20272b] text-[#aeb5b2] border border-white/10">
                        {q.category}
                      </span>
                    </div>

                    <h2 className="text-base sm:text-lg font-semibold text-[#f5f0e7]">
                      {q.question}
                    </h2>

                    <div className="space-y-2.5 pt-2">
                      {q.options.map((opt, oIdx) => {
                        const isSelected = answers[q.id] === opt.points;

                        return (
                          <div
                            key={oIdx}
                            onClick={() => handleSelect(q.id, opt.points)}
                            className={`p-4 border cursor-pointer transition-all ${
                              isSelected
                                ? "bg-[#20272b] border-[#e7a45c] shadow-md"
                                : "bg-[#20272b]/50 hover:bg-[#20272b] border-white/10"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-[#f5f0e7]">
                                {opt.text}
                              </span>
                              <div
                                className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                                  isSelected ? "border-[#e7a45c] bg-[#e7a45c]" : "border-white/30"
                                }`}
                              >
                                {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#171c1e]" />}
                              </div>
                            </div>
                            <p className="text-xs text-[#aeb5b2] mt-1.5">
                              {opt.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Submit Action */}
              <div className="pt-4 text-center">
                <button
                  onClick={handleSubmit}
                  className="px-8 py-4 bg-[#e46e2e] hover:bg-[#bb5b2c] text-[#f5f0e7] font-semibold text-xs tracking-wider uppercase shadow-xl inline-flex items-center gap-2 mx-auto transition-all"
                >
                  <Sparkles size={14} />
                  <span>Calculate Digital Factory Maturity Score</span>
                  <ArrowRight size={14} />
                </button>
                <p className="text-[11px] font-mono text-[#7e8989] mt-3">
                  Confidential assessment. Instant on-screen report and recommendations.
                </p>
              </div>
            </div>
          ) : (
            /* Results Stage */
            <div className="space-y-8">
              {/* Top Score Banner */}
              <div className="bg-[#171c1e] p-8 sm:p-12 border border-white/10 shadow-2xl text-center space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#20272b] text-[#e7a45c] text-xs font-mono font-bold border border-[#e7a45c]/30">
                  DIAGNOSTIC AUDIT RESULTS
                </div>

                <div className="space-y-2">
                  <div className="text-6xl sm:text-7xl font-mono font-bold text-[#e7a45c]">
                    {scorePercent}%
                  </div>
                  <div className="text-xs font-mono uppercase tracking-[.15em] text-[#aeb5b2]">
                    Digital Factory Maturity Score ({totalScore} / {maxScore} Points)
                  </div>
                </div>

                <div className="inline-block">
                  <span className={`px-4 py-1.5 text-xs font-mono uppercase font-bold border ${maturity.bg}`}>
                    {maturity.level}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#aeb5b2] max-w-xl mx-auto leading-relaxed pt-2">
                  {maturity.summary}
                </p>

                {/* Preventable Loss Box */}
                <div className="p-5 bg-[#20272b] border border-[#e7a45c]/30 max-w-md mx-auto text-center space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#aeb5b2]">
                    Estimated Annual Lost Revenue from Offline Delays:
                  </div>
                  <div className="text-3xl font-mono font-bold text-[#e7a45c]">
                    {maturity.lossEstimate}
                  </div>
                  <div className="text-[11px] text-[#7e8989]">
                    Recoverable through rapid 2.4-hour CPQ quote turnaround & automated inquiry capture.
                  </div>
                </div>
              </div>

              {/* Actionable Recommendations */}
              <div className="bg-[#171c1e] p-6 sm:p-8 border border-white/10 shadow-xl space-y-4">
                <h3 className="text-xl font-display text-[#f5f0e7]">
                  Tailored Modernization <em className="text-[#e7a45c]">Action Plan:</em>
                </h3>
                <div className="space-y-3">
                  {maturity.recommendations.map((rec, idx) => (
                    <div key={idx} className="p-4 bg-[#20272b] border border-white/10 flex items-start gap-3.5 text-xs">
                      <div className="w-5 h-5 bg-[#e7a45c]/20 text-[#e7a45c] flex items-center justify-center shrink-0 mt-0.5 border border-[#e7a45c]/40">
                        <CheckCircle2 size={13} />
                      </div>
                      <div>
                        <strong className="text-[#f5f0e7] font-mono text-xs block mb-1">ACTION 0{idx + 1}</strong>
                        <span className="text-[#aeb5b2] leading-relaxed">{rec}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps CTA Strip */}
              <div className="p-8 bg-[#171c1e] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
                <div>
                  <h4 className="text-xl font-display text-[#f5f0e7]">
                    Ready to deploy Industria for your manufacturing plant?
                  </h4>
                  <p className="text-xs text-[#aeb5b2] mt-1">
                    Launch the complete digital factory experience with your team.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => {
                      setAnswers({});
                      setSubmitted(false);
                    }}
                    className="px-4 py-2.5 border border-white/20 hover:bg-white/5 text-[#aeb5b2] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                  >
                    <RotateCcw size={13} />
                    <span>Retake Audit</span>
                  </button>
                  <Link
                    href="/book-demo"
                    className="px-5 py-2.5 bg-[#e46e2e] hover:bg-[#bb5b2c] text-[#f5f0e7] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-md"
                  >
                    <Sparkles size={13} />
                    <span>Book Implementation Review</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
