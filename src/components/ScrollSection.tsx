import React, { useState } from 'react';

interface ScrollSectionProps {
  sectionRef: React.RefObject<HTMLDivElement | null>;
}

const stepContents = [
  {
    stage: 'Iterate',
    title: 'Prompt engineering that feels like magic',
    description:
      'Test prompts across datasets, compare models side‑by‑side, and collaborate seamlessly—all with automatic versioning and prompt management that actually works.',
    steps: [
      {
        title: 'Prompt management across providers',
        content:
          'Centralize your prompts for all LLM providers in one intuitive workspace, eliminating fragmentation and ensuring consistency across your AI applications.',
      },
      {
        title: 'Multi‑modal and dynamic variables',
        content:
          'Use different types of inputs and outputs like text, image, or structured data in a single interface.',
      },
      {
        title: 'Automatic versioning and history',
        content:
          'Track every change and compare versions over time seamlessly.',
      },
    ],
  },
  {
    stage: 'Evaluate',
    title: 'AI‑powered testing that writes itself',
    description:
      'Generate comprehensive evaluations with AI, visualize performance trends, and debug failed cases instantly in your most complicated workflows.',
    steps: [
      {
        title: 'Magical test set up',
        content:
          'Create robust test suites in seconds with AI‑assisted generation that identifies edge cases and potential failure modes you might have missed.',
      },
      {
        title: 'Historical performance trends',
        content:
          'Track and compare past performance across prompt versions.',
      },
      {
        title: 'Rollback to any prompt version',
        content:
          'Instantly revert to a stable prompt with full history view.',
      },
    ],
  },
  {
    stage: 'Deploy',
    title: 'Production‑ready deployment',
    description:
      'Ship prompts with confidence. Integrate into CI/CD pipelines with real‑time validation and rollback support.',
    steps: [
      {
        title: 'CI/CD integration',
        content:
          'Ensure quality and prevent regressions before production.',
      },
      {
        title: 'Safe deployment',
        content:
          'Push updates without downtime and automatic fallbacks.',
      },
      {
        title: 'Instant recovery',
        content:
          'Revert broken updates instantly with smart history.',
      },
    ],
  },
  {
    stage: 'Monitor',
    title: 'Real‑time Monitoring and Feedback',
    description:
      'Turn production data into a competitive edge. Visualize complex AI workflows, run real‑time evaluations, collect real‑world performance data, and optimize for cost, latency, and quality at scale.',
    steps: [
      {
        title: 'Full traces and spans',
        content:
          'Understand the complete journey of each request through your AI system with detailed visualization of execution paths, helping you identify bottlenecks and optimization opportunities.',
      },
      {
        title: 'Continuous evaluations',
        content:
          'Keep monitoring your workflows continuously to catch regressions early.',
      },
      {
        title: 'Human annotations',
        content:
          'Leverage expert feedback to improve AI outputs.',
      },
    ],
  },
];

export default function ScrollSection({ sectionRef }: ScrollSectionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const current = stepContents[activeStep];

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-[#f8f9f3] text-[#102610] transition-all duration-500"
    >
      {/* Progress Navigation */}
      <div className="flex justify-around py-6 border-b border-dashed border-gray-300 cursor-pointer">
        {stepContents.map((step, i) => (
          <div key={step.stage} className="text-center" onClick={() => setActiveStep(i)}>
            <div
              className={`w-10 h-10 rounded-full border-2 ${
                i === activeStep
                  ? 'border-[#102610] font-bold bg-[#e7eadd]'
                  : 'border-gray-300 text-gray-400'
              } flex items-center justify-center`}
            >
              {`0${i + 1}`}
            </div>
            <div className={`mt-2 text-sm ${i === activeStep ? 'text-[#102610]' : 'text-gray-400'}`}>
              {step.stage}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
        {/* Left Section */}
        <div className="space-y-10 max-w-md">
          <h2 className="text-2xl font-semibold">{current.title}</h2>
          <p className="text-gray-700">{current.description}</p>

          {current.steps.map((step, i) => (
            <div key={i} className="transition-opacity duration-300 opacity-100">
              <div className="font-medium text-lg">
                {i + 1}. {step.title}
              </div>
              <p className="text-sm text-gray-600 mt-1">{step.content}</p>
            </div>
          ))}
        </div>

        {/* Right Sidebar – Iteration Panel */}
       {activeStep === 0 && (
    <div className="border-l border-dashed border-gray-300 pl-8 relative flex flex-col px-4 py-4">
        {/* Grid background lines */}
        <div className="absolute inset-0 -z-10">
            {/* Horizontal lines */}
            {[...Array(5)].map((_, i) => (
                <div key={i} className="absolute w-full border-t border-dashed border-[#264013] opacity-10" style={{ top: `${i * 25}%` }} />
            ))}
            {/* Vertical lines */}
            {[...Array(5)].map((_, i) => (
                <div key={i} className="absolute h-full border-l border-dashed border-[#264013] opacity-10" style={{ left: `${i * 25}%` }} />
            ))}
        </div>

        {/* Top right "Learn more" */}
        <div className="flex justify-end mb-4">
            <div className="bg-[#e7eadd] text-[#102610] text-xs rounded px-3 py-1 font-semibold uppercase flex gap-4 items-center">
                Learn more
                <span className="text-[10px] font-medium text-[#546b40]">EDITOR</span>
                <span className="text-[10px] font-medium text-[#546b40]">DATASETS</span>
            </div>
        </div>

        {/* Shared Section */}
        <div className="text-xs text-[#102610] font-medium mb-2">Shared</div>

        {/* File structure list */}
        <div className="flex flex-col text-sm text-[#102610] gap-1">
            <div className="flex items-center gap-2">
                <span role="img" aria-label="Customer Service">🧑‍💼</span>
                <span>Customer Service</span>
            </div>
            <div className="ml-5 flex items-center gap-2">
                <span role="img" aria-label="AI rep">📄</span>
                <span>AI representative</span>
            </div>
            <div className="ml-5 flex items-center gap-2">
                <span role="img" aria-label="Test Cases">📄</span>
                <span>Test Cases</span>
            </div>
            <div className="ml-5 flex items-center gap-2">
                <span role="img" aria-label="May Logs">🗂️</span>
                <span>May Production Logs</span>
            </div>
            <div className="ml-5 flex items-center gap-2">
                <span role="img" aria-label="June Logs">🗂️</span>
                <span>June Production Logs</span>
            </div>
            <div className="flex items-center gap-2">
                <span role="img" aria-label="Home">✈️</span>
                <span>Home</span>
            </div>
        </div>
    </div>
)}


        {/* Right Sidebar – Evaluate Panel */}
       {activeStep === 1 && (
    <div className="border-l border-dashed border-gray-300 pl-8 relative flex flex-col px-4 py-4">
        {/* Grid background lines */}
        <div className="absolute inset-0 -z-10">
            {[...Array(5)].map((_, i) => (
                <div key={`h-${i}`} className="absolute w-full border-t border-dashed border-[#264013] opacity-10" style={{ top: `${i * 25}%` }} />
            ))}
            {[...Array(5)].map((_, i) => (
                <div key={`v-${i}`} className="absolute h-full border-l border-dashed border-[#264013] opacity-10" style={{ left: `${i * 25}%` }} />
            ))}
        </div>

        {/* Learn More Header */}
        <div className="flex justify-end mb-4">
            <div className="bg-[#e7eadd] text-[#102610] text-xs rounded px-3 py-1 font-semibold uppercase flex gap-4 items-center">
                Learn more
                <span className="text-[10px] font-medium text-[#546b40]">EVALUATIONS</span>
            </div>
        </div>

        {/* Prompt Header Bar */}
        <div className="flex items-center mb-2 text-xs text-[#546b40] font-semibold space-x-4">
            <div className="rounded bg-[#d7e2c9] text-[#546b40] p-1 select-none">{'<>'}</div>
            <div>How many chicken are there in the farm?</div>
            <div className="flex space-x-4 font-normal text-green-700">
                <a href="#" className="hover:underline">May Production Logs</a>
                <a href="#" className="hover:underline">LLM Rubric</a>
            </div>
        </div>

        {/* Code Block */}
        <pre className="bg-white text-[#31462a] border border-[#cbd5b1] rounded p-4 text-xs leading-relaxed font-mono overflow-x-auto max-h-[400px] whitespace-pre-wrap">
{`async function evaluate(prompt, completion, responseTime) {
  const words = completion.trim().split(/\\s+/);

  if (words.length > 0 && words[0] === words[words.length - 1]) {
    return {
      result: "pass",
      reason: "The first and last words are the same."
    };
  } else {
    return {
      result: "fail",
      reason: "The first and last words are different."
    };
  }
}`}
        </pre>
    </div>
)}


        {/* Right Sidebar – Deploy Panel */}
       {activeStep === 3 && (
    <div className="border-l border-dashed border-gray-300 pl-8 relative flex flex-col px-4 py-4">
        {/* Grid background */}
        <div className="absolute inset-0 -z-10">
            {[...Array(5)].map((_, i) => (
                <div key={`h-${i}`} className="absolute w-full border-t border-dashed border-[#264013] opacity-10" style={{ top: `${i * 25}%` }} />
            ))}
            {[...Array(5)].map((_, i) => (
                <div key={`v-${i}`} className="absolute h-full border-l border-dashed border-[#264013] opacity-10" style={{ left: `${i * 25}%` }} />
            ))}
        </div>

        {/* Environment Cards */}
        <div className="flex justify-start gap-6 mb-6">
            {['Production', 'Experimental', 'Staging'].map((env) => (
                <div
                    key={env}
                    className="border border-gray-300 rounded-md px-4 py-2 text-[#102610] text-sm font-medium bg-white"
                >
                    <div className="text-[10px] font-normal text-gray-500 mb-1">Environment</div>
                    <div className="text-lg font-semibold">{env}</div>
                </div>
            ))}
        </div>

        {/* Dashed Vertical Arrow (from Experimental) */}
        <div className="relative mb-6 h-10">
            <svg
                viewBox="0 0 20 40"
                className="absolute left-[33%] w-6 h-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10 0 L10 30"
                    stroke="#a7b28f"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    markerEnd="url(#arrowhead)"
                />
                <defs>
                    <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="7"
                        refX="0"
                        refY="3.5"
                        orient="auto"
                    >
                        <polygon points="0 0, 10 3.5, 0 7" fill="#a7b28f" />
                    </marker>
                </defs>
            </svg>
        </div>

        {/* From Experimental and Code */}
        <div className="max-w-lg">
            <div className="text-xs text-gray-500 mb-1">From Experimental</div>
            <pre className="bg-white border border-gray-300 text-[#31462a] rounded p-3 text-xs leading-relaxed font-mono whitespace-pre-wrap">
{`import {prompt} from "Adaline"`}
            </pre>
        </div>
    </div>
)}


        {/* Right Sidebar – Monitor Panel */}
       {activeStep === 2 && (
    <div className="border-l border-dashed border-gray-300 pl-8 relative flex flex-col px-4 py-4">
        {/* Grid background lines */}
        <div className="absolute inset-0 -z-10">
            {[...Array(5)].map((_, i) => (
                <div key={`h-${i}`} className="absolute w-full border-t border-dashed border-[#264013] opacity-10" style={{ top: `${i * 25}%` }} />
            ))}
            {[...Array(5)].map((_, i) => (
                <div key={`v-${i}`} className="absolute h-full border-l border-dashed border-[#264013] opacity-10" style={{ left: `${i * 25}%` }} />
            ))}
        </div>

        {/* Environment Boxes */}
        <div className="flex justify-start gap-6 mb-6">
            {['Production', 'Experimental', 'Staging'].map((env) => (
                <div
                    key={env}
                    className="border border-gray-300 rounded-md px-4 py-2 text-[#102610] text-sm font-medium bg-white"
                >
                    <div className="text-[10px] font-normal text-gray-500 mb-1">Environment</div>
                    <div className="text-lg font-semibold">{env}</div>
                </div>
            ))}
        </div>

        {/* Curved Dashed Arrow */}
        <div className="relative mb-6 h-10">
            <svg
                viewBox="0 0 200 60"
                className="absolute left-0 w-48 h-16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10 10 C 90 50, 110 10, 190 50"
                    stroke="#a7b28f"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                />
                <defs>
                    <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="7"
                        refX="0"
                        refY="3.5"
                        orient="auto"
                    >
                        <polygon points="0 0, 10 3.5, 0 7" fill="#a7b28f" />
                    </marker>
                </defs>
            </svg>
        </div>

        {/* From Production and Code */}
        <div className="max-w-lg">
            <div className="text-xs text-gray-500 mb-1">From Production</div>
            <pre className="bg-white border border-gray-300 text-[#31462a] rounded p-3 text-xs leading-relaxed font-mono whitespace-pre-wrap">
{`import {prompt} from "Adaline"`}
            </pre>
        </div>
    </div>
)}

      </div>
    </div>
  );
}
