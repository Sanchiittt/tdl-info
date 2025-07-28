






'use client';

import { motion } from "framer-motion";
import {
  Download,
  BookOpen,
  Code2,
  UploadCloud,
  SearchCheck,
  FileCode,
  HelpCircle,
} from "lucide-react";

export default function GettingStartedPage() {
  const steps = [
    {
      title: "Install Tally Developer",
      icon: Download,
      description:
        "Tally provides a free tool called Tally Developer. Download it from the official Tally website. This is where you will write and test your `.tdl` files.",
    },
    {
      title: "Learn TDL Basics",
      icon: BookOpen,
      description:
        "TDL uses simple syntax and is easy to learn. Start with basic commands like adding fields, creating reports, or customizing invoices.",
    },
    {
      title: "Write Your First TDL Program",
      icon: Code2,
      description:
        "Try writing a small `.tdl` file that adds a new text field in the sales voucher. This will help you understand how TDL modifies Tally’s behavior.",
    },
    {
      title: "Load the TDL File in Tally",
      icon: UploadCloud,
      description: (
        <ul className="list-decimal list-inside">
          <li>Open Tally</li>
          <li>
            Go to <strong>F12 → Product & Features → F4 (Manage Local TDLs)</strong>
          </li>
          <li>Set “Load TDL on Startup” to Yes</li>
          <li>Enter the path to your `.tdl` file</li>
        </ul>
      ),
    },
    {
      title: "Explore Further",
      icon: SearchCheck,
      description:
        "Once comfortable, explore more advanced TDL concepts like collections, actions, ODBC, and integration with external systems.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Getting Started with TDL
      </h1>
      <p className="mb-8 text-gray-700 text-lg">
        Getting started with TDL is simple if you follow the right steps.
        Here's a beginner-friendly path to help you dive in.
      </p>

      <div className="space-y-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {index + 1}. {step.title}
                  </h2>
                  <div className="text-gray-700 mt-2 text-sm leading-relaxed">
                    {step.description}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Code Snippet Block */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FileCode className="w-5 h-5 text-purple-600" />
          Sample TDL Code
        </h2>
        <div className="bg-gray-900 text-green-300 font-mono text-sm rounded-lg p-4 overflow-x-auto">
          <pre>
{`[#Form: Sales Color]
    Add: Part: Simple Color Part

[Part: Simple Color Part]
    Line: Simple Color Line

[Line: Simple Color Line]
    Field: Simple Color Field

[Field: Simple Color Field]
    Set as: "TDL is powerful!"
    Background: Red`}
          </pre>
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-10 text-center">
        <a
          href="https://tallysolutions.com"
          target="_blank"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          <Download className="w-5 h-5" />
          Download Tally Developer
        </a>
      </div>

      {/* Video/GIF Placeholder */}
      {/* Video Walkthrough */}
<div className="mt-12">
  <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Walkthrough</h2>
  <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/n-v9DPJVl6w"
      title="Quick TDL Walkthrough"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>



      {/* Help Section */}
      <div className="mt-12 bg-blue-50 border border-blue-100 p-5 rounded-xl flex items-start gap-4">
        <HelpCircle className="text-blue-500 w-6 h-6 mt-1" />
        <div>
          <p className="text-gray-800 font-medium mb-1">Need help getting started?</p>
          <p className="text-gray-600 text-sm">
            Check out the official TDL documentation or join the Tally community forums for more help.
          </p>
          <a
            href="https://help.tallysolutions.com"
            target="_blank"
            className="inline-block mt-2 text-blue-600 hover:underline text-sm"
          >
            Visit Tally Docs →
          </a>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="mt-16 border-t pt-6 text-center text-sm text-gray-400">
        🚀 Keep experimenting with TDL – every line of code makes you better!
      </div>
    </div>
  );
}
