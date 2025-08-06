














'use client';

import { useState } from "react";
import {
  Download,
  Code2,
  UploadCloud,
  FileCode,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Settings2,
  Play,
  Copy,
  X
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function GettingStartedPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const steps = [
    {
      title: "Download Tally Developer",
      icon: Download,
      description: (
        <div>
          <p className="mb-2">
            Tally provides a free tool called Tally Developer. Download it from
            the official Tally website.
          </p>
          <p className="mb-2">
            👉{' '}
            <Link
              href="https://tallysolutions.com/download/"
              target="_blank"
              className="text-blue-600 underline font-medium"
            >
              Click here to download Tally Developer
            </Link>
          </p>
          <Image
            src="/images/tallydeveloperdownload.png"
            alt="Download TDL Screenshot"
            width={600}
            height={400}
            onClick={() => setModalImage("/images/tallydeveloperdownload.png")}
            className="rounded-lg mt-4 shadow cursor-pointer hover:scale-105 transition-transform duration-200"
          />
        </div>
      ),
    },
    {
      title: "Install Tally Developer",
      icon: Settings2,
      description: (
        <div>
          <p className="mb-2">Once downloaded, run the installer.</p>
          <ul className="list-decimal list-inside">
            <li>Accept the license agreement</li>
            <li>Select the destination folder</li>
            <li>Complete installation steps as prompted</li>
          </ul>
          <p className="mt-2">You will find the Tally Developer shortcut on your desktop after installation.</p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {[1, 2, 3].map((num) => (
              <Image
                key={num}
                src={`/images/tdlinstall${num}.png`}
                alt={`Install Step ${num}`}
                width={600}
                height={400}
                onClick={() => setModalImage(`/images/tdlinstall${num}.png`)}
                className="rounded-lg shadow cursor-pointer hover:scale-105 transition-transform duration-200"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Open Tally Developer & Write Code",
      icon: Code2,
      description: (
        <div>
          <p className="mb-2">Follow these steps to write and test TDL code:</p>
          <ol className="list-decimal pl-6 mb-4">
            <li>Open Tally Developer</li>
            <li>Click File → New → Save as <code>MyFirstCode.tdl</code></li>
            <li>Paste the following code:</li>
          </ol>
          <div className="relative bg-gray-900 text-green-300 font-mono text-sm rounded-lg p-4 overflow-x-auto">
            <button
              onClick={() => {
                navigator.clipboard.writeText(`[#Menu: Gateway of Tally]

    Add: Button: MyCustomButton

[Button: MyCustomButton]
    Title       : \"Say Hello\"
    Key         : Alt + H
    Action      : Display: My Hello Report
    Background  : Blue

[Report: My Hello Report]
    Form        : My Hello Form

[Form: My Hello Form]
    Parts       : My Hello Part
    Width       : 100% Screen
    Height      : 100% Screen
    Background  : Red

[Part: My Hello Part]
    Lines       : My Hello Line

[Line: My Hello Line]
    Fields      : My Hello Field

[Field: My Hello Field]
    Set As      : \"Hello, welcome to TDL world!\"
    Align       : Center
    Style       : Normal`);
              }}
              className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white text-xs px-3 py-1 rounded"
            >
              <Copy className="inline-block mr-1 w-3 h-3" /> Copy
            </button>
            <pre>{`[#Menu: Gateway of Tally]

    Add: Button: MyCustomButton

[Button: MyCustomButton]
    Title       : "Say Hello"
    Key         : Alt + H
    Action      : Display: My Hello Report
    Background  : Blue

[Report: My Hello Report]
    Form        : My Hello Form

[Form: My Hello Form]
    Parts       : My Hello Part
    Width       : 100% Screen
    Height      : 100% Screen
    Background  : Red

[Part: My Hello Part]
    Lines       : My Hello Line

[Line: My Hello Line]
    Fields      : My Hello Field

[Field: My Hello Field]
    Set As      : "Hello, welcome to TDL world!"
    Align       : Center
    Style       : Normal`}</pre>
          </div>
          <Image
            src="/images/tdlcode.png"
            alt="Write TDL Screenshot"
            width={600}
            height={400}
            onClick={() => setModalImage("/images/tdlcode.png")}
            className="rounded-lg mt-4 shadow cursor-pointer hover:scale-105 transition-transform duration-200"
          />
        </div>
      ),
    },
    {
      title: "Load the TDL File in Tally Software",
      icon: UploadCloud,
      description: (
        <div>
          <ul className="list-decimal list-inside">
            <li>Open TallyPrime</li>
            <li>Go to F1 (Help) → TDL & Add-On → F4 (Manage Local TDL)</li>
            <li>Set “Load TDLs on Startup” to Yes</li>
            <li>Give full path to your .tdl file</li>
            <li>Example: <code>C:\\Users\\YourName\\Documents\\MyFirstCode.tdl</code></li>
            <li>Press Ctrl + A to save</li>
          </ul>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {["tdlsandaddon", "managelocaltdls", "loadtdlfile", "output"].map((img) => (
              <Image
                key={img}
                src={`/images/${img}.png`}
                alt={img}
                width={600}
                height={400}
                onClick={() => setModalImage(`/images/${img}.png`)}
                className="rounded-lg shadow cursor-pointer hover:scale-105 transition-transform duration-200"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Run and Verify Your Code",
      icon: Play,
      description: (
        <div>
          <p>
            After reloading Tally, check the Gateway of Tally screen.
            You should see a new button: <strong>Say Hello (Alt + H)</strong>.
          </p>
          <ul className="list-disc pl-4 mt-2 text-sm text-gray-700">
            <li>Press Alt + H to open the screen</li>
            <li>Verify if your custom screen appears correctly</li>
            <li>Take a screenshot for submission</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Getting Started with TDL
      </h1>
      <p className="mb-8 text-gray-700 text-lg">
        Getting started with TDL is simple if you follow the right steps.
        Here is a beginner-friendly path to help you dive in.
      </p>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {index + 1}. {step.title}
                  </h2>
                </div>
                <span className="text-blue-500">
                  {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t">
                  {step.description}
                </div>
              )}
            </div>
          );
        })}
      </div>

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

      <div className="mt-16 border-t pt-6 text-center text-sm text-gray-400">
        🚀 Keep experimenting with TDL – every line of code makes you better!
      </div>

      {modalImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-3/4">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/70 rounded-full p-1"
            >
              <X className="w-6 h-6" />
            </button>
            <Image
              src={modalImage}
              alt="Zoomed Screenshot"
              width={1000}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
