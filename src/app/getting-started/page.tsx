






// 'use client';

// import { motion } from "framer-motion";
// import {
//   Download,
//   BookOpen,
//   Code2,
//   UploadCloud,
//   SearchCheck,
//   FileCode,
//   HelpCircle,
// } from "lucide-react";

// export default function GettingStartedPage() {
//   const steps = [
//     {
//       title: "Install Tally Developer",
//       icon: Download,
//       description:
//         "Tally provides a free tool called Tally Developer. Download it from the official Tally website. This is where you will write and test your `.tdl` files.",
//     },
//     {
//       title: "Learn TDL Basics",
//       icon: BookOpen,
//       description:
//         "TDL uses simple syntax and is easy to learn. Start with basic commands like adding fields, creating reports, or customizing invoices.",
//     },
//     {
//       title: "Write Your First TDL Program",
//       icon: Code2,
//       description:
//         "Try writing a small `.tdl` file that adds a new text field in the sales voucher. This will help you understand how TDL modifies Tally’s behavior.",
//     },
//     {
//       title: "Load the TDL File in Tally",
//       icon: UploadCloud,
//       description: (
//         <ul className="list-decimal list-inside">
//           <li>Open Tally</li>
//           <li>
//             Go to <strong>F12 → Product & Features → F4 (Manage Local TDLs)</strong>
//           </li>
//           <li>Set “Load TDL on Startup” to Yes</li>
//           <li>Enter the path to your `.tdl` file</li>
//         </ul>
//       ),
//     },
//     {
//       title: "Explore Further",
//       icon: SearchCheck,
//       description:
//         "Once comfortable, explore more advanced TDL concepts like collections, actions, ODBC, and integration with external systems.",
//     },
//   ];

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-blue-700 mb-6">
//         Getting Started with TDL
//       </h1>
//       <p className="mb-8 text-gray-700 text-lg">
//         Getting started with TDL is simple if you follow the right steps.
//         Here is a beginner-friendly path to help you dive in.
//       </p>

//       <div className="space-y-8">
//         {steps.map((step, index) => {
//           const Icon = step.icon;
//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white border border-gray-200 rounded-2xl p-5 shadow hover:shadow-md transition-shadow duration-300"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
//                   <Icon className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <h2 className="text-lg font-semibold text-gray-900">
//                     {index + 1}. {step.title}
//                   </h2>
//                   <div className="text-gray-700 mt-2 text-sm leading-relaxed">
//                     {step.description}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* Code Snippet Block */}
//       <div className="mt-12">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
//           <FileCode className="w-5 h-5 text-purple-600" />
//           Sample TDL Code
//         </h2>
//         <div className="bg-gray-900 text-green-300 font-mono text-sm rounded-lg p-4 overflow-x-auto">
//           <pre>
// {`[#Form: Sales Color]
//     Add: Part: Simple Color Part

// [Part: Simple Color Part]
//     Line: Simple Color Line

// [Line: Simple Color Line]
//     Field: Simple Color Field

// [Field: Simple Color Field]
//     Set as: "TDL is powerful!"
//     Background: Red`}
//           </pre>
//         </div>
//       </div>

//       {/* Download Button */}
//       <div className="mt-10 text-center">
//         <a
//           href="https://tallysolutions.com"
//           target="_blank"
//           className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
//         >
//           <Download className="w-5 h-5" />
//           Download Tally Developer
//         </a>
//       </div>

//       {/* Video/GIF Placeholder */}
//       {/* Video Walkthrough */}
// <div className="mt-12">
//   <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Walkthrough</h2>
//   <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
//     <iframe
//       className="w-full h-full"
//       src="https://www.youtube.com/embed/n-v9DPJVl6w"
//       title="Quick TDL Walkthrough"
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       allowFullScreen
//     ></iframe>
//   </div>
// </div>



//       {/* Help Section */}
//       <div className="mt-12 bg-blue-50 border border-blue-100 p-5 rounded-xl flex items-start gap-4">
//         <HelpCircle className="text-blue-500 w-6 h-6 mt-1" />
//         <div>
//           <p className="text-gray-800 font-medium mb-1">Need help getting started?</p>
//           <p className="text-gray-600 text-sm">
//             Check out the official TDL documentation or join the Tally community forums for more help.
//           </p>
//           <a
//             href="https://help.tallysolutions.com"
//             target="_blank"
//             className="inline-block mt-2 text-blue-600 hover:underline text-sm"
//           >
//             Visit Tally Docs →
//           </a>
//         </div>
//       </div>

//       {/* CTA Footer */}
//       <div className="mt-16 border-t pt-6 text-center text-sm text-gray-400">
//         🚀 Keep experimenting with TDL – every line of code makes you better!
//       </div>
//     </div>
//   );
// }






// 'use client';
// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Download,
//   BookOpen,
//   Code2,
//   UploadCloud,
//   SearchCheck,
//   FileCode,
//   HelpCircle,
// } from "lucide-react";

// import Image from "next/image";

// export default function GettingStartedPage() {
//   const steps = [
//     {
//       title: "Install Tally Developer",
//       icon: Download,
//       description: (
//         <div>
//           <p>
//             Tally provides a free tool called Tally Developer. Download it from
//             the official Tally website. This is where you will write and test
//             your <code>.tdl</code> files.
//           </p>
//           <Image
//             src="/images/download-tdl.png"
//             alt="Download TDL Screenshot"
//             width={600}
//             height={400}
//             className="rounded-lg mt-4 shadow"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Learn TDL Basics",
//       icon: BookOpen,
//       description: (
//         <div>
//           <p>
//             TDL uses simple syntax and is easy to learn. Start with basic
//             commands like adding fields, creating reports, or customizing
//             invoices.
//           </p>
//           <ul className="list-disc pl-4 mt-2 text-sm text-gray-700">
//             <li>Understand basic syntax</li>
//             <li>Explore object structure</li>
//             <li>Use simple fields and forms</li>
//           </ul>
//         </div>
//       ),
//     },
//     {
//       title: "Write Your First TDL Program",
//       icon: Code2,
//       description: (
//         <div>
//           <p>
//             Try writing a small <code>.tdl</code> file that adds a new text
//             field in the sales voucher. This helps you understand how TDL
//             modifies Tally’s behavior.
//           </p>
//           <Image
//             src="/images/write-tdl.png"
//             alt="Write TDL Screenshot"
//             width={600}
//             height={400}
//             className="rounded-lg mt-4 shadow"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Load the TDL File in Tally",
//       icon: UploadCloud,
//       description: (
//         <div>
//           <ul className="list-decimal list-inside">
//             <li>Open Tally</li>
//             <li>
//               Go to <strong>F12 → Product & Features → F4 (Manage Local TDLs)</strong>
//             </li>
//             <li>Set “Load TDL on Startup” to Yes</li>
//             <li>Enter the path to your <code>.tdl</code> file</li>
//           </ul>
//           <Image
//             src="/images/load-tdl.png"
//             alt="Load TDL in Tally Screenshot"
//             width={600}
//             height={400}
//             className="rounded-lg mt-4 shadow"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Explore Further",
//       icon: SearchCheck,
//       description: (
//         <div>
//           <p>
//             Once comfortable, explore more advanced TDL concepts like
//             collections, actions, ODBC, and integration with external systems.
//           </p>
//           <ul className="list-disc pl-4 mt-2 text-sm text-gray-700">
//             <li>Using buttons and menus</li>
//             <li>Working with reports and objects</li>
//             <li>Triggering TDL from external tools</li>
//           </ul>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-blue-700 mb-6">
//         Getting Started with TDL
//       </h1>
//       <p className="mb-8 text-gray-700 text-lg">
//         Getting started with TDL is simple if you follow the right steps.
//         Here is a beginner-friendly path to help you dive in.
//       </p>

//       <div className="space-y-8">
//         {steps.map((step, index) => {
//           const Icon = step.icon;
//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white border border-gray-200 rounded-2xl p-5 shadow hover:shadow-md transition-shadow duration-300"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
//                   <Icon className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <h2 className="text-lg font-semibold text-gray-900">
//                     {index + 1}. {step.title}
//                   </h2>
//                   <div className="text-gray-700 mt-2 text-sm leading-relaxed">
//                     {step.description}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>

//       <div className="mt-12">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
//           <FileCode className="w-5 h-5 text-purple-600" />
//           Sample TDL Code
//         </h2>
//         <div className="bg-gray-900 text-green-300 font-mono text-sm rounded-lg p-4 overflow-x-auto">
//           <pre>
// {`[#Form: Sales Color]
//     Add: Part: Simple Color Part

// [Part: Simple Color Part]
//     Line: Simple Color Line

// [Line: Simple Color Line]
//     Field: Simple Color Field

// [Field: Simple Color Field]
//     Set as: "TDL is powerful!"
//     Background: Red`}
//           </pre>
//         </div>
//       </div>

//       <div className="mt-10 text-center">
//         <a
//           href="https://tallysolutions.com"
//           target="_blank"
//           className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
//         >
//           <Download className="w-5 h-5" />
//           Download Tally Developer
//         </a>
//       </div>

//       <div className="mt-12">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Walkthrough</h2>
//         <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
//           <iframe
//             className="w-full h-full"
//             src="https://www.youtube.com/embed/n-v9DPJVl6w"
//             title="Quick TDL Walkthrough"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>

//       <div className="mt-12 bg-blue-50 border border-blue-100 p-5 rounded-xl flex items-start gap-4">
//         <HelpCircle className="text-blue-500 w-6 h-6 mt-1" />
//         <div>
//           <p className="text-gray-800 font-medium mb-1">Need help getting started?</p>
//           <p className="text-gray-600 text-sm">
//             Check out the official TDL documentation or join the Tally community forums for more help.
//           </p>
//           <a
//             href="https://help.tallysolutions.com"
//             target="_blank"
//             className="inline-block mt-2 text-blue-600 hover:underline text-sm"
//           >
//             Visit Tally Docs →
//           </a>
//         </div>
//       </div>

//       <div className="mt-16 border-t pt-6 text-center text-sm text-gray-400">
//         🚀 Keep experimenting with TDL – every line of code makes you better!
//       </div>
//     </div>
//   );
// }






// 'use client';
// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Download,
//   BookOpen,
//   Code2,
//   UploadCloud,
//   SearchCheck,
//   FileCode,
//   HelpCircle,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";

// import Image from "next/image";

// export default function GettingStartedPage() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const steps = [
//     {
//       title: "Install Tally Developer",
//       icon: Download,
//       description: (
//         <div>
//           <p>
//             Tally provides a free tool called Tally Developer. Download it from
//             the official Tally website. This is where you will write and test
//             your <code>.tdl</code> files.
//           </p>
//           <Image
//             src="/images/download-tdl.png"
//             alt="Download TDL Screenshot"
//             width={600}
//             height={400}
//             className="rounded-lg mt-4 shadow"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Learn TDL Basics",
//       icon: BookOpen,
//       description: (
//         <div>
//           <p>
//             TDL uses simple syntax and is easy to learn. Start with basic
//             commands like adding fields, creating reports, or customizing
//             invoices.
//           </p>
//           <ul className="list-disc pl-4 mt-2 text-sm text-gray-700">
//             <li>Understand basic syntax</li>
//             <li>Explore object structure</li>
//             <li>Use simple fields and forms</li>
//           </ul>
//         </div>
//       ),
//     },
//     {
//       title: "Write Your First TDL Program",
//       icon: Code2,
//       description: (
//         <div>
//           <p>
//             Try writing a small <code>.tdl</code> file that adds a new text
//             field in the sales voucher. This helps you understand how TDL
//             modifies Tally’s behavior.
//           </p>
//           <Image
//             src="/images/write-tdl.png"
//             alt="Write TDL Screenshot"
//             width={600}
//             height={400}
//             className="rounded-lg mt-4 shadow"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Load the TDL File in Tally",
//       icon: UploadCloud,
//       description: (
//         <div>
//           <ul className="list-decimal list-inside">
//             <li>Open Tally</li>
//             <li>
//               Go to <strong>F12 → Product & Features → F4 (Manage Local TDLs)</strong>
//             </li>
//             <li>Set “Load TDL on Startup” to Yes</li>
//             <li>Enter the path to your <code>.tdl</code> file</li>
//           </ul>
//           <Image
//             src="/images/load-tdl.png"
//             alt="Load TDL in Tally Screenshot"
//             width={600}
//             height={400}
//             className="rounded-lg mt-4 shadow"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Explore Further",
//       icon: SearchCheck,
//       description: (
//         <div>
//           <p>
//             Once comfortable, explore more advanced TDL concepts like
//             collections, actions, ODBC, and integration with external systems.
//           </p>
//           <ul className="list-disc pl-4 mt-2 text-sm text-gray-700">
//             <li>Using buttons and menus</li>
//             <li>Working with reports and objects</li>
//             <li>Triggering TDL from external tools</li>
//           </ul>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-blue-700 mb-6">
//         Getting Started with TDL
//       </h1>
//       <p className="mb-8 text-gray-700 text-lg">
//         Getting started with TDL is simple if you follow the right steps.
//         Here is a beginner-friendly path to help you dive in.
//       </p>

//       <div className="space-y-4">
//         {steps.map((step, index) => {
//           const Icon = step.icon;
//           const isOpen = openIndex === index;

//           return (
//             <div
//               key={index}
//               className="bg-white border border-gray-200 rounded-2xl shadow"
//             >
//               <button
//                 onClick={() => setOpenIndex(isOpen ? null : index)}
//                 className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
//                     <Icon className="h-6 w-6" />
//                   </div>
//                   <h2 className="text-lg font-semibold text-gray-900">
//                     {index + 1}. {step.title}
//                   </h2>
//                 </div>
//                 <span className="text-blue-500">
//                   {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
//                 </span>
//               </button>
//               {isOpen && (
//                 <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t">
//                   {step.description}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>

//       <div className="mt-12">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
//           <FileCode className="w-5 h-5 text-purple-600" />
//           Sample TDL Code
//         </h2>
//         <div className="bg-gray-900 text-green-300 font-mono text-sm rounded-lg p-4 overflow-x-auto">
//           <pre>
// {`[#Form: Sales Color]
//     Add: Part: Simple Color Part

// [Part: Simple Color Part]
//     Line: Simple Color Line

// [Line: Simple Color Line]
//     Field: Simple Color Field

// [Field: Simple Color Field]
//     Set as: "TDL is powerful!"
//     Background: Red`}
//           </pre>
//         </div>
//       </div>

//       <div className="mt-10 text-center">
//         <a
//           href="https://tallysolutions.com"
//           target="_blank"
//           className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
//         >
//           <Download className="w-5 h-5" />
//           Download Tally Developer
//         </a>
//       </div>

//       <div className="mt-12">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Walkthrough</h2>
//         <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
//           <iframe
//             className="w-full h-full"
//             src="https://www.youtube.com/embed/n-v9DPJVl6w"
//             title="Quick TDL Walkthrough"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>

//       <div className="mt-12 bg-blue-50 border border-blue-100 p-5 rounded-xl flex items-start gap-4">
//         <HelpCircle className="text-blue-500 w-6 h-6 mt-1" />
//         <div>
//           <p className="text-gray-800 font-medium mb-1">Need help getting started?</p>
//           <p className="text-gray-600 text-sm">
//             Check out the official TDL documentation or join the Tally community forums for more help.
//           </p>
//           <a
//             href="https://help.tallysolutions.com"
//             target="_blank"
//             className="inline-block mt-2 text-blue-600 hover:underline text-sm"
//           >
//             Visit Tally Docs →
//           </a>
//         </div>
//       </div>

//       <div className="mt-16 border-t pt-6 text-center text-sm text-gray-400">
//         🚀 Keep experimenting with TDL – every line of code makes you better!
//       </div>
//     </div>
//   );
// }







// 'use client';
// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Download,
//   BookOpen,
//   Code2,
//   UploadCloud,
//   SearchCheck,
//   FileCode,
//   HelpCircle,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";

// import Image from "next/image";
// import Link from "next/link";

// export default function GettingStartedPage() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const steps = [
//     {
//       title: "Install Tally Developer",
//       icon: Download,
//       description: (
//         <div>
//           <p className="mb-2">
//             Tally provides a free tool called Tally Developer. Download it from
//             the official Tally website. This is where you will write and test
//             your <code>.tdl</code> files.
//           </p>
//           <p className="mb-2">
//             👉{' '}
//             <Link
//               href="https://tallysolutions.com/download/"
//               target="_blank"
//               className="text-blue-600 underline font-medium"
//             >
//               Click here to download Tally Developer
//             </Link>
//           </p>
//           <p className="mb-4">
//             After downloading, follow the on-screen installation instructions. Make sure your system
//             meets the requirements mentioned on the download page.
//           </p>
//           <Image
//             src="/images/download-tdl.png"
//             alt="Download TDL Screenshot"
//             width={600}
//             height={400}
//             className="rounded-lg mt-4 shadow"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Learn TDL Basics",
//       icon: BookOpen,
//       description: (
//         <div>
//           <p>
//             TDL uses simple syntax and is easy to learn. Start with basic
//             commands like adding fields, creating reports, or customizing
//             invoices.
//           </p>
//           <ul className="list-disc pl-4 mt-2 text-sm text-gray-700">
//             <li>Understand basic syntax</li>
//             <li>Explore object structure</li>
//             <li>Use simple fields and forms</li>
//           </ul>
//         </div>
//       ),
//     },
//     {
//       title: "Write Your First TDL Program",
//       icon: Code2,
//       description: (
//         <div>
//           <p>
//             Try writing a small <code>.tdl</code> file that adds a new text
//             field in the sales voucher. This helps you understand how TDL
//             modifies Tally’s behavior.
//           </p>
//           <Image
//             src="/images/write-tdl.png"
//             alt="Write TDL Screenshot"
//             width={600}
//             height={400}
//             className="rounded-lg mt-4 shadow"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Load the TDL File in Tally",
//       icon: UploadCloud,
//       description: (
//         <div>
//           <ul className="list-decimal list-inside">
//             <li>Open Tally</li>
//             <li>
//               Go to <strong>F12 → Product & Features → F4 (Manage Local TDLs)</strong>
//             </li>
//             <li>Set “Load TDL on Startup” to Yes</li>
//             <li>Enter the path to your <code>.tdl</code> file</li>
//           </ul>
//           <Image
//             src="/images/load-tdl.png"
//             alt="Load TDL in Tally Screenshot"
//             width={600}
//             height={400}
//             className="rounded-lg mt-4 shadow"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Explore Further",
//       icon: SearchCheck,
//       description: (
//         <div>
//           <p>
//             Once comfortable, explore more advanced TDL concepts like
//             collections, actions, ODBC, and integration with external systems.
//           </p>
//           <ul className="list-disc pl-4 mt-2 text-sm text-gray-700">
//             <li>Using buttons and menus</li>
//             <li>Working with reports and objects</li>
//             <li>Triggering TDL from external tools</li>
//           </ul>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-blue-700 mb-6">
//         Getting Started with TDL
//       </h1>
//       <p className="mb-8 text-gray-700 text-lg">
//         Getting started with TDL is simple if you follow the right steps.
//         Here is a beginner-friendly path to help you dive in.
//       </p>

//       <div className="space-y-4">
//         {steps.map((step, index) => {
//           const Icon = step.icon;
//           const isOpen = openIndex === index;

//           return (
//             <div
//               key={index}
//               className="bg-white border border-gray-200 rounded-2xl shadow"
//             >
//               <button
//                 onClick={() => setOpenIndex(isOpen ? null : index)}
//                 className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
//                     <Icon className="h-6 w-6" />
//                   </div>
//                   <h2 className="text-lg font-semibold text-gray-900">
//                     {index + 1}. {step.title}
//                   </h2>
//                 </div>
//                 <span className="text-blue-500">
//                   {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
//                 </span>
//               </button>
//               {isOpen && (
//                 <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t">
//                   {step.description}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>

//       <div className="mt-12">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
//           <FileCode className="w-5 h-5 text-purple-600" />
//           Sample TDL Code
//         </h2>
//         <div className="bg-gray-900 text-green-300 font-mono text-sm rounded-lg p-4 overflow-x-auto">
//           <pre>
// {`[#Form: Sales Color]
//     Add: Part: Simple Color Part

// [Part: Simple Color Part]
//     Line: Simple Color Line

// [Line: Simple Color Line]
//     Field: Simple Color Field

// [Field: Simple Color Field]
//     Set as: "TDL is powerful!"
//     Background: Red`}
//           </pre>
//         </div>
//       </div>

//       <div className="mt-10 text-center">
//         <a
//           href="https://tallysolutions.com/download/"
//           target="_blank"
//           className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
//         >
//           <Download className="w-5 h-5" />
//           Download Tally Developer
//         </a>
//       </div>

//       <div className="mt-12">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Walkthrough</h2>
//         <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
//           <iframe
//             className="w-full h-full"
//             src="https://www.youtube.com/embed/n-v9DPJVl6w"
//             title="Quick TDL Walkthrough"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>

//       <div className="mt-12 bg-blue-50 border border-blue-100 p-5 rounded-xl flex items-start gap-4">
//         <HelpCircle className="text-blue-500 w-6 h-6 mt-1" />
//         <div>
//           <p className="text-gray-800 font-medium mb-1">Need help getting started?</p>
//           <p className="text-gray-600 text-sm">
//             Check out the official TDL documentation or join the Tally community forums for more help.
//           </p>
//           <a
//             href="https://help.tallysolutions.com"
//             target="_blank"
//             className="inline-block mt-2 text-blue-600 hover:underline text-sm"
//           >
//             Visit Tally Docs →
//           </a>
//         </div>
//       </div>

//       <div className="mt-16 border-t pt-6 text-center text-sm text-gray-400">
//         🚀 Keep experimenting with TDL – every line of code makes you better!
//       </div>
//     </div>
//   );
// }





// 'use client';
// import { useState } from "react";
// import {
//   Download,
//   Code2,
//   UploadCloud,
//   FileCode,
//   HelpCircle,
//   ChevronDown,
//   ChevronUp,
//   Settings2,
//   Play,
// } from "lucide-react";

// import Image from "next/image";
// import Link from "next/link";

// export default function GettingStartedPage() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const steps = [
//     {
//       title: "Download Tally Developer",
//       icon: Download,
//       description: (
//         <div>
//           <p className="mb-2">
//             Tally provides a free tool called Tally Developer. Download it from
//             the official Tally website.
//           </p>
//           <p className="mb-2">
//             👉{' '}
//             <Link
//               href="https://tallysolutions.com/download/"
//               target="_blank"
//               className="text-blue-600 underline font-medium"
//             >
//               Click here to download Tally Developer
//             </Link>
//           </p>
//           <Image
//             src="/images/tallydeveloperdownload.png"
//             alt="Download TDL Screenshot"
//             width={600}
//             height={400}
//             className="rounded-lg mt-4 shadow"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Install Tally Developer",
//       icon: Settings2,
//       description: (
//         <div>
//           <p className="mb-2">Once downloaded, run the installer.</p>
//           <ul className="list-decimal list-inside">
//             <li>Accept the license agreement</li>
//             <li>Select the destination folder</li>
//             <li>Complete installation steps as prompted</li>
//           </ul>
//           <p className="mt-2">You will find the Tally Developer shortcut on your desktop after installation.</p>
//           <Image
//             src="/images/tdlinstall1.png"
//             alt="Install TDL Screenshot"
//             width={600}
//             height={400}
//             className="rounded-lg mt-4 shadow"
//           />
//           <Image
//             src="/images/tdlinstall2.png"
//             alt="Install TDL Screenshot"
//             width={600}
//             height={400}
//             className="rounded-lg mt-4 shadow"
//           />
//            <Image
//             src="/images/tdlinstall3.png"
//             alt="Install TDL Screenshot"
//             width={600}
//             height={400}
//             className="rounded-lg mt-4 shadow"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Open Tally Developer & Write Code",
//       icon: Code2,
//       description: (
//         <div>
//           <p>
//             Open Tally Developer and create a new file with the extension <code>.tdl</code>.
//           </p>
//           <ul className="list-disc pl-4 mt-2 text-sm text-gray-700">
//             <li>File → New → Save as <code>sample.tdl</code></li>
//             <li>Write basic TDL code to customize vouchers or forms</li>
//             <li>Use the sample code provided below to begin</li>
//           </ul>
//           <Image
//             src="/images/tdlcode.png"
//             alt="Write TDL Screenshot"
//             width={600}
//             height={400}
//             className="rounded-lg mt-4 shadow"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Load the TDL File in Tally Software",
//       icon: UploadCloud,
//       description: (
//         <div>
//           <ul className="list-decimal list-inside">
//             <li>Open the Tally application</li>
//             <li>
//               Navigate to <strong>F12 → Product & Features → F4 (Manage Local TDLs)</strong>
//             </li>
//             <li>Set “Load TDL on Startup” to Yes</li>
//             <li>Enter the full path to your <code>.tdl</code> file and save</li>
//             <li>Restart Tally to see your TDL applied</li>
//           </ul>
//           <Image
//             src="/images/tdlsandaddon.png"
//             alt="Load TDL in Tally Screenshot"
//             width={600}
//             height={400}
//             className="rounded-lg mt-4 shadow"
//           />
//           <Image
//             src="/images/managelocaltdls.png"
//             alt="Load TDL in Tally Screenshot"
//             width={600}
//             height={400}
//             className="rounded-lg mt-4 shadow"
//           />
//             <Image
//             src="/images/loadtdlfile.png"
//             alt="Load TDL in Tally Screenshot"
//             width={600}
//             height={400}
//             className="rounded-lg mt-4 shadow"
//           />
//             <Image
//             src="/images/output.png"
//             alt="Load TDL in Tally Screenshot"
//             width={600}
//             height={400}
//             className="rounded-lg mt-4 shadow"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Run and Verify Your Code",
//       icon: Play,
//       description: (
//         <div>
//           <p>
//             After loading the TDL file in Tally, open the corresponding section (e.g., sales voucher)
//             and verify your customization.
//           </p>
//           <ul className="list-disc pl-4 mt-2 text-sm text-gray-700">
//             <li>Check for added fields or changes</li>
//             <li>Test if inputs and logic work as expected</li>
//             <li>Take a screenshot for submission</li>
//           </ul>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-blue-700 mb-6">
//         Getting Started with TDL
//       </h1>
//       <p className="mb-8 text-gray-700 text-lg">
//         Getting started with TDL is simple if you follow the right steps.
//         Here is a beginner-friendly path to help you dive in.
//       </p>

//       <div className="space-y-4">
//         {steps.map((step, index) => {
//           const Icon = step.icon;
//           const isOpen = openIndex === index;

//           return (
//             <div
//               key={index}
//               className="bg-white border border-gray-200 rounded-2xl shadow"
//             >
//               <button
//                 onClick={() => setOpenIndex(isOpen ? null : index)}
//                 className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
//                     <Icon className="h-6 w-6" />
//                   </div>
//                   <h2 className="text-lg font-semibold text-gray-900">
//                     {index + 1}. {step.title}
//                   </h2>
//                 </div>
//                 <span className="text-blue-500">
//                   {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
//                 </span>
//               </button>
//               {isOpen && (
//                 <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t">
//                   {step.description}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>

//       <div className="mt-12">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
//           <FileCode className="w-5 h-5 text-purple-600" />
//           Sample TDL Code
//         </h2>
//         <div className="bg-gray-900 text-green-300 font-mono text-sm rounded-lg p-4 overflow-x-auto">
//           <pre>
// {`[#Form: Sales Color]
//     Add: Part: Simple Color Part

// [Part: Simple Color Part]
//     Line: Simple Color Line

// [Line: Simple Color Line]
//     Field: Simple Color Field

// [Field: Simple Color Field]
//     Set as: "TDL is powerful!"
//     Background: Red`}
//           </pre>
//         </div>
//       </div>

//       <div className="mt-10 text-center">
//         <a
//           href="https://tallysolutions.com/download/"
//           target="_blank"
//           className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
//         >
//           <Download className="w-5 h-5" />
//           Download Tally Developer
//         </a>
//       </div>

//       <div className="mt-12 bg-blue-50 border border-blue-100 p-5 rounded-xl flex items-start gap-4">
//         <HelpCircle className="text-blue-500 w-6 h-6 mt-1" />
//         <div>
//           <p className="text-gray-800 font-medium mb-1">Need help getting started?</p>
//           <p className="text-gray-600 text-sm">
//             Check out the official TDL documentation or join the Tally community forums for more help.
//           </p>
//           <a
//             href="https://help.tallysolutions.com/release-notes-tally-prime-developer-release-6/#release-notes-for-tallyprime-developer-release-6-0-what%e2%80%99s-new-in-tdl"
//             target="_blank"
//             className="inline-block mt-2 text-blue-600 hover:underline text-sm"
//           >
//             Visit Tally Docs →
//           </a>
//         </div>
//       </div>

//       <div className="mt-16 border-t pt-6 text-center text-sm text-gray-400">
//         🚀 Keep experimenting with TDL – every line of code makes you better!
//       </div>
//     </div>
//   );
// }







// 'use client';

// import { useState } from "react";
// import {
//   Download,
//   Code2,
//   UploadCloud,
//   FileCode,
//   HelpCircle,
//   ChevronDown,
//   ChevronUp,
//   Settings2,
//   Play,
//   Copy
// } from "lucide-react";

// import Image from "next/image";
// import Link from "next/link";

// export default function GettingStartedPage() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const steps = [
//     {
//       title: "Download Tally Developer",
//       icon: Download,
//       description: (
//         <div>
//           <p className="mb-2">
//             Tally provides a free tool called Tally Developer. Download it from
//             the official Tally website.
//           </p>
//           <p className="mb-2">
//             👉{' '}
//             <Link
//               href="https://tallysolutions.com/download/"
//               target="_blank"
//               className="text-blue-600 underline font-medium"
//             >
//               Click here to download Tally Developer
//             </Link>
//           </p>
//           <Image
//             src="/images/tallydeveloperdownload.png"
//             alt="Download TDL Screenshot"
//             width={600}
//             height={400}
//             className="rounded-lg mt-4 shadow cursor-pointer hover:scale-105 transition-transform duration-200"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Install Tally Developer",
//       icon: Settings2,
//       description: (
//         <div>
//           <p className="mb-2">Once downloaded, run the installer.</p>
//           <ul className="list-decimal list-inside">
//             <li>Accept the license agreement</li>
//             <li>Select the destination folder</li>
//             <li>Complete installation steps as prompted</li>
//           </ul>
//           <p className="mt-2">You will find the Tally Developer shortcut on your desktop after installation.</p>
//           <div className="grid md:grid-cols-2 gap-4 mt-4">
//             <Image src="/images/tdlinstall1.png" alt="Install Step 1" width={600} height={400} className="rounded-lg shadow cursor-pointer hover:scale-105 transition-transform duration-200" />
//             <Image src="/images/tdlinstall2.png" alt="Install Step 2" width={600} height={400} className="rounded-lg shadow cursor-pointer hover:scale-105 transition-transform duration-200" />
//             <Image src="/images/tdlinstall3.png" alt="Install Step 3" width={600} height={400} className="rounded-lg shadow cursor-pointer hover:scale-105 transition-transform duration-200" />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Open Tally Developer & Write Code",
//       icon: Code2,
//       description: (
//         <div>
//           <p className="mb-2">Follow these steps to write and test TDL code:</p>
//           <ol className="list-decimal pl-6 mb-4">
//             <li>Open Tally Developer</li>
//             <li>Click File → New → Save as <code>MyFirstCode.tdl</code></li>
//             <li>Paste the following code:</li>
//           </ol>
//           <div className="relative bg-gray-900 text-green-300 font-mono text-sm rounded-lg p-4 overflow-x-auto">
//             <button
//               onClick={() => {
//                 navigator.clipboard.writeText(`[#Menu: Gateway of Tally]

//     Add: Button: MyCustomButton

// [Button: MyCustomButton]
//     Title       : \"Say Hello\"
//     Key         : Alt + H
//     Action      : Display: My Hello Report
//     Background  : Blue

// [Report: My Hello Report]
//     Form        : My Hello Form

// [Form: My Hello Form]
//     Parts       : My Hello Part
//     Width       : 100% Screen
//     Height      : 100% Screen
//     Background  : Red

// [Part: My Hello Part]
//     Lines       : My Hello Line

// [Line: My Hello Line]
//     Fields      : My Hello Field

// [Field: My Hello Field]
//     Set As      : \"Hello, welcome to TDL world!\"
//     Align       : Center
//     Style       : Normal`);
//               }}
//               className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white text-xs px-3 py-1 rounded"
//             >
//               <Copy className="inline-block mr-1 w-3 h-3" /> Copy
//             </button>
//             <pre>{`[#Menu: Gateway of Tally]

//     Add: Button: MyCustomButton

// [Button: MyCustomButton]
//     Title       : "Say Hello"
//     Key         : Alt + H
//     Action      : Display: My Hello Report
//     Background  : Blue

// [Report: My Hello Report]
//     Form        : My Hello Form

// [Form: My Hello Form]
//     Parts       : My Hello Part
//     Width       : 100% Screen
//     Height      : 100% Screen
//     Background  : Red

// [Part: My Hello Part]
//     Lines       : My Hello Line

// [Line: My Hello Line]
//     Fields      : My Hello Field

// [Field: My Hello Field]
//     Set As      : "Hello, welcome to TDL world!"
//     Align       : Center
//     Style       : Normal`}</pre>
//           </div>
//           <Image
//             src="/images/tdlcode.png"
//             alt="Write TDL Screenshot"
//             width={600}
//             height={400}
//             className="rounded-lg mt-4 shadow cursor-pointer hover:scale-105 transition-transform duration-200"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Load the TDL File in Tally Software",
//       icon: UploadCloud,
//       description: (
//         <div>
//           <ul className="list-decimal list-inside">
//             <li>Open TallyPrime</li>
//             <li>Go to F1 (Help) → TDL & Add-On → F4 (Manage Local TDL)</li>
//             <li>Set “Load TDLs on Startup” to Yes</li>
//             <li>Give full path to your .tdl file</li>
//             <li>Example: <code>C:\\Users\\YourName\\Documents\\MyFirstCode.tdl</code></li>
//             <li>Press Ctrl + A to save</li>
//           </ul>
//           <div className="grid md:grid-cols-2 gap-4 mt-4">
//             <Image src="/images/tdlsandaddon.png" alt="TDL Addon" width={600} height={400} className="rounded-lg shadow cursor-pointer hover:scale-105 transition-transform duration-200" />
//             <Image src="/images/managelocaltdls.png" alt="Manage TDLs" width={600} height={400} className="rounded-lg shadow cursor-pointer hover:scale-105 transition-transform duration-200" />
//             <Image src="/images/loadtdlfile.png" alt="Load File" width={600} height={400} className="rounded-lg shadow cursor-pointer hover:scale-105 transition-transform duration-200" />
//             <Image src="/images/output.png" alt="TDL Output" width={600} height={400} className="rounded-lg shadow cursor-pointer hover:scale-105 transition-transform duration-200" />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Run and Verify Your Code",
//       icon: Play,
//       description: (
//         <div>
//           <p>
//             After reloading Tally, check the Gateway of Tally screen.
//             You should see a new button: <strong>Say Hello (Alt + H)</strong>.
//           </p>
//           <ul className="list-disc pl-4 mt-2 text-sm text-gray-700">
//             <li>Press Alt + H to open the screen</li>
//             <li>Verify if your custom screen appears correctly</li>
//             <li>Take a screenshot for submission</li>
//           </ul>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-blue-700 mb-6">
//         Getting Started with TDL
//       </h1>
//       <p className="mb-8 text-gray-700 text-lg">
//         Getting started with TDL is simple if you follow the right steps.
//         Here is a beginner-friendly path to help you dive in.
//       </p>

//       <div className="space-y-4">
//         {steps.map((step, index) => {
//           const Icon = step.icon;
//           const isOpen = openIndex === index;

//           return (
//             <div
//               key={index}
//               className="bg-white border border-gray-200 rounded-2xl shadow"
//             >
//               <button
//                 onClick={() => setOpenIndex(isOpen ? null : index)}
//                 className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
//                     <Icon className="h-6 w-6" />
//                   </div>
//                   <h2 className="text-lg font-semibold text-gray-900">
//                     {index + 1}. {step.title}
//                   </h2>
//                 </div>
//                 <span className="text-blue-500">
//                   {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
//                 </span>
//               </button>
//               {isOpen && (
//                 <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t">
//                   {step.description}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>

//       <div className="mt-12 bg-blue-50 border border-blue-100 p-5 rounded-xl flex items-start gap-4">
//         <HelpCircle className="text-blue-500 w-6 h-6 mt-1" />
//         <div>
//           <p className="text-gray-800 font-medium mb-1">Need help getting started?</p>
//           <p className="text-gray-600 text-sm">
//             Check out the official TDL documentation or join the Tally community forums for more help.
//           </p>
//           <a
//             href="https://help.tallysolutions.com"
//             target="_blank"
//             className="inline-block mt-2 text-blue-600 hover:underline text-sm"
//           >
//             Visit Tally Docs →
//           </a>
//         </div>
//       </div>

//       <div className="mt-16 border-t pt-6 text-center text-sm text-gray-400">
//         🚀 Keep experimenting with TDL – every line of code makes you better!
//       </div>
//     </div>
//   );
// }







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
