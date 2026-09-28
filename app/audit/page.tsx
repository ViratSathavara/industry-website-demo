"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Download,
  Printer,
  ShieldCheck,
  Building,
  RotateCcw,
  Zap
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
        text: "No, we only share drawings after NDA via manual email",
        points: 5,
        description: "High friction; engineers abandon discovery before inquiring."
      },
      {
        text: "We provide 2D PDF spec sheets on request",
        points: 10,
        description: "Basic, but does not allow CAD simulation in OEM designs."
      },
      {
        text: "Instant interactive 3D inspection with gated secure CAD downloads",
        points: 20,
        description: "Enables design-in during the OEM's CAD modeling phase."
      }
    ]
  },
  {
    id: 5,
    question: "How are inbound WhatsApp inquiries managed across your sales engineers?",
    category: "Omnichannel CRM",
    options: [
      {
        text: "Personal mobile phones with zero central visibility",
        points: 5,
        description: "Critical leads are lost whenever a sales rep leaves."
      },
      {
        text: "Shared WhatsApp group chat for the sales team",
        points: 10,
        description: "No SLA tracking; leads slip through the cracks."
      },
      {
        text: "Integrated WhatsApp Business API feeding an omnichannel CRM inbox",
        points: 20,
        description: "Every inquiry is assigned, tracked, and archived automatically."
      }
    ]
  }
];

export default function DigitalFactoryAuditPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const handleSelect = (questionId: number, points: number) => {
    setAnswers({ ...answers, [questionId]: points });
  };

  const totalScore = Object.values(answers).reduce((acc, pts) => acc + pts, 0);
  const maxScore = QUESTIONS.length * 20;
  const scorePercent = Math.round((totalScore / maxScore) * 100);

  const getMaturityTier = (pct: number) => {
    if (pct < 40) {
      return {
        level: "Level 1: Traditional Offline Workshop",
        color: "text-rose-500",
        bg: "bg-rose-50 border-rose-200 text-rose-800",
        summary: "High vulnerability to domestic and overseas competition. Significant manual friction causes lead abandonment and slow turnaround.",
        lossEstimate: "₹45L - ₹80L",
        recommendations: [
          "Deploy digital technical catalog with structured specifications.",
          "Implement CPQ quotation engine to compress quote turnaround under 4 hours.",
          "Centralize inbound WhatsApp inquiries into an omnichannel CRM."
        ]
      };
    } else if (pct < 75) {
      return {
        level: "Level 2: Semi-Digitalized Plant",
        color: "text-amber-500",
        bg: "bg-amber-50 border-amber-200 text-amber-800",
        summary: "Good operational foundation, but friction remains in customer status inquiries and quote-to-order conversion.",
        lossEstimate: "₹20L - ₹35L",
        recommendations: [
          "Launch branded self-service Customer Portal to eliminate status phone calls.",
          "Provide secure 3D CAD/STEP downloads to get designed into OEM prototypes.",
          "Sync sales quotations directly with shopfloor operations."
        ]
      };
    } else {
      return {
        level: "Level 3: Industry 4.0 Digital Factory Leader",
        color: "text-emerald-500",
        bg: "bg-emerald-50 border-emerald-200 text-emerald-800",
        summary: "World-class digital procurement experience. You operate at high velocity and command premium pricing from Tier-1 clients.",
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
    <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-primary selection:text-white">
      {/* Top Bar */}
      <header className="px-6 py-4 bg-white border-b border-neutral-200 flex items-center justify-between sticky top-0 z-50 shadow-xs">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold font-mono text-white text-base"
          >
            IN
          </Link>
          <div>
            <h1 className="font-bold text-sm tracking-tight font-heading flex items-center gap-2">
              <span>DIGITAL FACTORY MATURITY AUDIT</span>
              <span className="text-[10px] px-2 py-0.2 rounded-full bg-primary/10 text-primary font-mono font-bold">
                DIAGNOSTIC TOOL
              </span>
            </h1>
            <p className="text-[11px] text-neutral-500">
              Benchmark your manufacturing plant against world-class Industry 4.0 standards
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/demo"
            className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-neutral-300 hover:bg-neutral-100 text-neutral-700 transition-colors"
          >
            Demo Pitch Deck
          </Link>
          <Link
            href="/request-quote"
            className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-primary hover:bg-primary-hover text-white transition-colors shadow-sm"
          >
            Request Custom RFQ
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        {!submitted ? (
          <div className="space-y-8 animate-fade-in">
            {/* Intro Hero */}
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider font-mono">
                5-Minute Diagnostic Assessment
              </span>
              <h2 className="text-3xl font-bold tracking-tight font-heading text-neutral-900">
                How Much Revenue Is Your Factory Losing to Offline Friction?
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Answer these 5 diagnostic questions about your current customer inquiry, quotation, and dispatch workflows to receive your customized Digital Factory Maturity Score and ROI roadmap.
              </p>
            </div>

            {/* Questions List */}
            <div className="space-y-6">
              {QUESTIONS.map((q, idx) => (
                <div
                  key={q.id}
                  className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-4"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-primary">QUESTION 0{idx + 1} OF 0{QUESTIONS.length}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600 font-medium">
                      {q.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 font-heading">
                    {q.question}
                  </h3>

                  <div className="space-y-2.5 pt-1">
                    {q.options.map((opt, oIdx) => {
                      const isSelected = answers[q.id] === opt.points;

                      return (
                        <div
                          key={oIdx}
                          onClick={() => handleSelect(q.id, opt.points)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            isSelected
                              ? "bg-primary/5 border-primary shadow-xs"
                              : "bg-neutral-50/50 hover:bg-neutral-50 border-neutral-200"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-neutral-900">
                              {opt.text}
                            </span>
                            <div
                              className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                                isSelected ? "border-primary bg-primary" : "border-neutral-300"
                              }`}
                            >
                              {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </div>
                          <p className="text-xs text-neutral-500 mt-1">
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
                className="px-8 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm tracking-wide shadow-lg shadow-primary/20 flex items-center gap-2 mx-auto transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Calculate Digital Factory Maturity Score</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-neutral-400 mt-2">
                Confidential assessment. No credit card required. Instant on-screen report.
              </p>
            </div>
          </div>
        ) : (
          /* Results Stage */
          <div className="space-y-8 animate-fade-in">
            {/* Top Score Banner */}
            <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-xl text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-mono font-bold">
                DIAGNOSTIC AUDIT RESULTS
              </div>

              <div className="space-y-1">
                <div className="text-6xl font-extrabold font-mono text-primary">
                  {scorePercent}%
                </div>
                <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                  Digital Factory Maturity Score ({totalScore} / {maxScore} Points)
                </div>
              </div>

              <div className="inline-block">
                <span className={`px-4 py-1.5 rounded-full text-sm font-bold border ${maturity.bg}`}>
                  {maturity.level}
                </span>
              </div>

              <p className="text-sm text-neutral-600 max-w-xl mx-auto leading-relaxed pt-2">
                {maturity.summary}
              </p>

              {/* Preventable Loss Box */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 max-w-md mx-auto text-center space-y-1">
                <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                  Estimated Annual Lost Revenue from Offline Delays:
                </div>
                <div className="text-2xl font-bold font-mono text-amber-900">
                  {maturity.lossEstimate}
                </div>
                <div className="text-[11px] text-amber-600">
                  Recoverable through rapid 2.4-hour CPQ quote turnaround & automated inquiry capture.
                </div>
              </div>
            </div>

            {/* Actionable Recommendations */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-neutral-900 font-heading">
                Tailored Modernization Action Plan:
              </h3>
              <div className="space-y-3">
                {maturity.recommendations.map((rec, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 flex items-start gap-3 text-xs">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-neutral-900 font-semibold text-sm block">Action 0{idx + 1}</strong>
                      <span className="text-neutral-600 leading-normal">{rec}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps CTA Strip */}
            <div className="p-6 rounded-2xl bg-neutral-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold font-heading">
                  Ready to deploy Industria for your manufacturing plant?
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Launch the complete 18-vertical digital factory experience in under 14 days.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setAnswers({});
                    setSubmitted(false);
                  }}
                  className="px-4 py-2.5 rounded-lg border border-neutral-700 hover:bg-neutral-800 text-neutral-300 text-xs font-semibold flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Retake Audit
                </button>
                <Link
                  href="/book-demo"
                  className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Book Implementation Scoping
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
