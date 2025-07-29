//bawal chiz

// "use client";

// import { DownloadIcon, VideoIcon } from "lucide-react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const Button = ({
//   children,
//   ...props
// }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
//   <button
//     {...props}
//     className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition duration-200"
//   >
//     {children}
//   </button>
// );

// const applications = [
//   {
//     title: "Customization",
//     description:
//       "Tailor Tally to specific business needs by modifying default behavior, creating custom reports, or defining workflows.",
//     icon: "⚙️",
//   },
//   {
//     title: "Automation",
//     description:
//       "Automate tasks like voucher creation, invoice printing, or report generation using TDL scripts.",
//     icon: "🤖",
//   },
//   {
//     title: "Data Validation",
//     description:
//       "Implement custom validation rules to ensure data accuracy before saving entries.",
//     icon: "✅",
//   },
//   {
//     title: "Integration",
//     description:
//       "TDL enables integration with external systems, REST APIs, or other software for data exchange.",
//     icon: "🔗",
//   },
//   {
//     title: "UI Enhancements",
//     description:
//       "Add new screens, buttons, menus, or input fields to enhance user experience inside Tally.",
//     icon: "🖥️",
//   },
//   {
//     title: "Report Generation",
//     description:
//       "Design and generate customized reports such as GST summaries, sales analytics, or expense breakdowns.",
//     icon: "📊",
//   },
// ];

// export default function GettingStartedPage() {
//   return (
//     <div className="min-h-screen bg-white px-4 sm:px-8 py-10">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-6">
//           Applications of TDL
//         </h1>
//         <p className="text-gray-700 mb-10">
//           Explore real-world use cases where TDL is applied to extend and customize Tally's behavior.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
//           {applications.map((app, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -4, scale: 1.01 }}
//               transition={{ type: "spring", stiffness: 300, damping: 20 }}
//               className="p-6 bg-blue-50 border border-blue-100 rounded-2xl shadow-sm hover:shadow-md transition"
//             >
//               <div className="text-3xl mb-3">{app.icon}</div>
//               <h2 className="text-xl font-semibold text-blue-800 mb-2">
//                 {app.title}
//               </h2>
//               <p className="text-gray-600">{app.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* --- Live Code Block Placeholder --- */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold text-blue-700 mb-4">
//             Try a Sample TDL Snippet
//           </h2>
//           <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 font-mono text-sm text-gray-800 whitespace-pre-wrap">
// {`[#Part: VCH Narration]
//     Add: Line: Custom Line

// [Line: Custom Line]
//     Field: Simple Prompt

// [Field: Simple Prompt]
//     Set As: "This is a custom field"`}
//           </div>
//         </section>

//         {/* --- Download Button & Video Placeholder --- */}
//         <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//           <Link
//             href="https://tallysolutions.com/download/developer/"
//             target="_blank"
//           >
//             <Button>
//               <DownloadIcon className="mr-2 h-4 w-4 inline" />
//               Download Tally Developer
//             </Button>
//           </Link>

//           <div className="flex items-center gap-2 text-gray-600">
//             <VideoIcon className="h-5 w-5" />
//             <span>Watch demo (Coming soon)</span>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }







// 'use client';

// import { motion } from "framer-motion";
// import {
//   BadgeCheck,
//   FileText,
//   Repeat2,
//   BarChart,
//   IndianRupee,
//   Link as LinkIcon,
//   AlertTriangle,
//   Users,
// } from "lucide-react";
// import Link from "next/link";

// const useCases = [
//   {
//     title: "Invoice Customization",
//     description:
//       "Design invoices with your branding. Example: Add GST, QR codes, or multiple languages.",
//     icon: FileText,
//   },
//   {
//     title: "GST Compliance",
//     description:
//       "Auto-calculate GST, validate entries, and generate ready-to-file reports.",
//     icon: IndianRupee,
//   },
//   {
//     title: "Business Automation",
//     description:
//       "Auto-send reminders, schedule backups, or generate reports with one click.",
//     icon: Repeat2,
//   },
//   {
//     title: "Advanced Reporting",
//     description:
//       "Create custom dashboards and track KPIs like profits, inventory, and receivables.",
//     icon: BarChart,
//   },
//   {
//     title: "Workflow Approvals",
//     description:
//       "Set approval levels for purchase orders or journal entries.",
//     icon: BadgeCheck,
//   },
//   {
//     title: "Integration with External Systems",
//     description:
//       "Sync Tally with Excel, websites, or CRMs via XML/ODBC. Example: Push sales to a cloud dashboard.",
//     icon: LinkIcon,
//   },
//   {
//     title: "Error Prevention",
//     description:
//       "Add smart validations to avoid wrong ledger selections or data entry mistakes.",
//     icon: AlertTriangle,
//   },
//   {
//     title: "User Management",
//     description:
//       "Restrict features based on roles, track activity logs, and ensure accountability.",
//     icon: Users,
//   },
// ];

// export default function ApplicationsPage() {
//   return (
//     <main className="min-h-screen px-4 sm:px-8 md:px-16 py-10">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl md:text-5xl font-bold text-blue-600 text-center mb-6"
//       >
//         Real-Life Applications of TDL
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         className="text-center text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12"
//       >
//         Explore practical use cases where TDL empowers businesses to customize Tally,
//         improve accuracy, and increase efficiency.
//       </motion.p>

//       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {useCases.map((useCase, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.03 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg"
//           >
//             <useCase.icon className="text-blue-500 w-8 h-8 mb-4" />
//             <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
//               {useCase.title}
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300 text-sm">
//               {useCase.description}
//             </p>
//           </motion.div>
//         ))}
//       </section>

       
//     </main>
//   );
// }








// 'use client';

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   BadgeCheck,
//   FileText,
//   Repeat2,
//   BarChart,
//   IndianRupee,
//   Link as LinkIcon,
//   AlertTriangle,
//   Users,
//   X,
// } from "lucide-react";
// import Link from "next/link";
// import clsx from "clsx";

// const useCases = [
//   {
//     title: "Invoice Customization",
//     description:
//       "Design invoices with your branding. Example: Add GST, QR codes, or multiple languages.",
//     icon: FileText,
//     details:
//       "Step-by-step guide to customize invoices:\n1. Open Tally Developer.\n2. Create a new TDL file.\n3. Define Invoice Format.\n4. Add QR code, logo, or GST.\n5. Save and reload in Tally.",
//   },
//   {
//     title: "GST Compliance",
//     description:
//       "Auto-calculate GST, validate entries, and generate ready-to-file reports.",
//     icon: IndianRupee,
//     details:
//       "Guide for GST Compliance:\n1. Create tax ledgers.\n2. Add GST rates to items.\n3. Use predefined TDLs or write your own.\n4. Export GSTR reports.",
//   },
//   {
//     title: "Business Automation",
//     description:
//       "Auto-send reminders, schedule backups, or generate reports with one click.",
//     icon: Repeat2,
//     details:
//       "Automation Steps:\n1. Write a TDL with scheduler logic.\n2. Use `[#Form]` and `[#Button]` to trigger events.\n3. Test using Tally Developer.",
//   },
//   {
//     title: "Advanced Reporting",
//     description:
//       "Create custom dashboards and track KPIs like profits, inventory, and receivables.",
//     icon: BarChart,
//     details:
//       "Advanced Reporting Guide:\n1. Use Collections and Reports.\n2. Customize Layout using `[#Line]`, `[#Field]`.\n3. Filter based on periods.",
//   },
//   {
//     title: "Workflow Approvals",
//     description:
//       "Set approval levels for purchase orders or journal entries.",
//     icon: BadgeCheck,
//     details:
//       "Steps to Enable Approvals:\n1. Write TDL logic for role check.\n2. Use Conditions like `If $$IsUser...`\n3. Add notification triggers.",
//   },
//   {
//     title: "Integration with External Systems",
//     description:
//       "Sync Tally with Excel, websites, or CRMs via XML/ODBC.",
//     icon: LinkIcon,
//     details:
//       "Integration Guide:\n1. Use XML request/response format.\n2. Write API in TDL using `HTTPPost`.\n3. Use Excel macros or third-party connectors.",
//   },
//   {
//     title: "Error Prevention",
//     description:
//       "Add smart validations to avoid wrong ledger selections or data entry mistakes.",
//     icon: AlertTriangle,
//     details:
//       "Steps:\n1. Write validation logic using `Validate` attribute.\n2. Example: Block entries without GST.\n3. Provide custom error messages.",
//   },
//   {
//     title: "User Management",
//     description:
//       "Restrict features based on roles, track activity logs, and ensure accountability.",
//     icon: Users,
//     details:
//       "User Management Steps:\n1. Create Role-wise logic in TDL.\n2. Track user actions using Logs.\n3. Use $$IsUser and $$IsAdmin checks.",
//   },
// ];

// export default function ApplicationsPage() {
//   const [activeModal, setActiveModal] = useState<number | null>(null);

//   return (
//     <main className="min-h-screen px-4 sm:px-8 md:px-16 py-10 bg-white text-gray-800">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl md:text-5xl font-bold text-blue-600 text-center mb-6"
//       >
//         Real-Life Applications of TDL
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         className="text-center text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12"
//       >
//         Explore practical use cases where TDL empowers businesses to customize Tally,
//         improve accuracy, and increase efficiency.
//       </motion.p>

//       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {useCases.map((useCase, index) => (
//           <motion.button
//             key={index}
//             whileHover={{ scale: 1.03 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             onClick={() => setActiveModal(index)}
//             className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg text-left border border-gray-200"
//           >
//             <useCase.icon className="text-blue-500 w-8 h-8 mb-4" />
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               {useCase.title}
//             </h3>
//             <p className="text-gray-600 text-sm">
//               {useCase.description}
//             </p>
//           </motion.button>
//         ))}
//       </section>

//       {/* Modal */}
//       {activeModal !== null && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
//           <div className="bg-white max-w-lg w-full p-6 rounded-xl relative shadow-xl">
//             <button
//               onClick={() => setActiveModal(null)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
//             >
//               <X className="w-6 h-6" />
//             </button>
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">
//               {useCases[activeModal].title}
//             </h2>
//             <pre className="whitespace-pre-wrap text-gray-700 text-sm">
//               {useCases[activeModal].details}
//             </pre>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }




// 'use client';

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   BadgeCheck,
//   FileText,
//   Repeat2,
//   BarChart,
//   IndianRupee,
//   Link as LinkIcon,
//   AlertTriangle,
//   Users,
//   X,
// } from "lucide-react";

// const useCases = [
//   {
//     title: "Invoice Customization",
//     description:
//       "Design invoices with your branding. Example: Add GST, QR codes, or multiple languages.",
//     icon: FileText,
//     details: [
//       "Open Tally Developer.",
//       "Create a new TDL file.",
//       "Define Invoice Format.",
//       "Add QR code, logo, or GST fields.",
//       "Save and reload in Tally.",
//     ],
//     usedIn: "Custom Invoice Printing Module",
//     image: "/images/invoice.png", // You can add real screenshots later
//   },
//   {
//     title: "GST Compliance",
//     description:
//       "Auto-calculate GST, validate entries, and generate ready-to-file reports.",
//     icon: IndianRupee,
//     details: [
//       "Create tax ledgers in Tally.",
//       "Add GST rates to items.",
//       "Write validation TDL logic.",
//       "Generate GSTR reports.",
//     ],
//     usedIn: "GSTR-1 & GSTR-3B Auto Reports",
//     image: "/examples/gst.png",
//   },
//   {
//     title: "Business Automation",
//     description:
//       "Auto-send reminders, schedule backups, or generate reports with one click.",
//     icon: Repeat2,
//     details: [
//       "Write TDL using scheduler logic.",
//       "Use [#Form] and [#Button] for events.",
//       "Schedule automated triggers.",
//     ],
//     usedIn: "Auto Backup Scheduler in Retail Setup",
//     image: "/examples/automation.png",
//   },
//   // Add more similarly...
// ];

// export default function ApplicationsPage() {
//   const [activeModal, setActiveModal] = useState<number | null>(null);

//   return (
//     <main className="min-h-screen px-4 sm:px-8 md:px-16 py-10 bg-white text-gray-800">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl md:text-5xl font-bold text-blue-600 text-center mb-6"
//       >
//         Real-Life Applications of TDL
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         className="text-center text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12"
//       >
//         Explore practical use cases where TDL empowers businesses to customize Tally,
//         improve accuracy, and increase efficiency.
//       </motion.p>

//       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {useCases.map((useCase, index) => (
//           <motion.button
//             key={index}
//             whileHover={{ scale: 1.03 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             onClick={() => setActiveModal(index)}
//             className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg text-left border border-gray-200"
//           >
//             <useCase.icon className="text-blue-500 w-8 h-8 mb-4" />
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               {useCase.title}
//             </h3>
//             <p className="text-gray-600 text-sm">{useCase.description}</p>
//           </motion.button>
//         ))}
//       </section>

//       {activeModal !== null && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
//           <div className="bg-white max-w-xl w-full p-6 rounded-xl relative shadow-xl overflow-y-auto max-h-[90vh]">
//             <button
//               onClick={() => setActiveModal(null)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
//             >
//               <X className="w-6 h-6" />
//             </button>
//             <h2 className="text-2xl font-bold text-blue-600 mb-3">
//               {useCases[activeModal].title}
//             </h2>

//             <p className="mb-2 text-gray-700">{useCases[activeModal].description}</p>

//             <h4 className="font-semibold text-gray-800 mt-4 mb-2">Used In:</h4>
//             <p className="text-sm text-gray-600 italic mb-4">
//               {useCases[activeModal].usedIn}
//             </p>

//             <h4 className="font-semibold text-gray-800 mb-2">Steps:</h4>
//             <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
//               {useCases[activeModal].details.map((step, i) => (
//                 <li key={i}>{step}</li>
//               ))}
//             </ul>

//             {useCases[activeModal].image && (
//               <img
//                 src={useCases[activeModal].image}
//                 alt={useCases[activeModal].title}
//                 className="mt-4 rounded-lg shadow object-contain w-full"
//               />
//             )}

//             <button
//               onClick={() => setActiveModal(null)}
//               className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }







'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  FileText,
  Repeat2,
  BarChart,
  IndianRupee,
  Link as LinkIcon,
  AlertTriangle,
  Users,
  X,
  ClipboardCopy,
  Check
} from "lucide-react";

const useCases = [
  {
    title: "Invoice Customization",
    description:
      "Design invoices with your branding. Example: Add GST, QR codes, or multiple languages.",
    icon: FileText,
    details: [
      "Open Tally Developer.",
      "Create a new TDL file.",
      "Define Invoice Format with Transport Details field.",
      "Add fields like Lorry No., Transporter Name.",
      "Save and reload in Tally.",
    ],
    usedIn: "Custom Invoice Printing Module",
    example: `[#Part: EI Consignee]
    Add: Line: After: EI Consignee Name: TransportLine

[Line: TransportLine]
    Fields: Simple TransportField

[Field: Simple TransportField]
    Use: Short Prompt
    Set as: ""
    Storage: TransportDetails
    Width: 30
    Max: 50
    Prompt: "Transport Details:"`,
    stepsToTest: [
      "Open Tally Prime Developer and save the above code in a .tdl file.",
      "Open Tally Prime → Press F1: Help → TDL & Add-On → F4: Manage Local TDL → Set 'Load TDL on Startup' to Yes and add the file path.",
      "Press F8: Sales → Select Party & Sales Ledger.",
      "Look for the Transport Details field in the invoice screen.",
      "Enter any text (e.g., 'RJ14-TRK-9087') and complete the invoice.",
    ],
    useCaseExample:
      "ABC Ltd. adds a Lorry Number field to track shipments against each invoice for compliance and logistics tracking.",
    image: "/images/invoice_customization.png",
  },
];

export default function ApplicationsPage() {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  return (
    <main className="min-h-screen px-4 sm:px-8 md:px-16 py-10 bg-white text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-blue-600 text-center mb-6"
      >
        Real-Life Applications of TDL
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12"
      >
        Explore practical use cases where TDL empowers businesses to customize Tally,
        improve accuracy, and increase efficiency.
      </motion.p>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {useCases.map((useCase, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setActiveModal(index)}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg text-left border border-gray-200"
          >
            <useCase.icon className="text-blue-500 w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {useCase.title}
            </h3>
            <p className="text-gray-600 text-sm">{useCase.description}</p>
          </motion.button>
        ))}
      </section>

      {activeModal !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white max-w-2xl w-full p-6 rounded-xl relative shadow-xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-blue-600 mb-3">
              {useCases[activeModal].title}
            </h2>

            <p className="mb-2 text-gray-700">{useCases[activeModal].description}</p>

            <h4 className="font-semibold text-gray-800 mt-4 mb-1">Used In:</h4>
            <p className="text-sm text-gray-600 italic mb-3">
              {useCases[activeModal].usedIn}
            </p>

            <div className="flex items-center justify-between mb-1">
              <h4 className="font-semibold text-gray-800">TDL Code Snippet:</h4>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(useCases[activeModal].example);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                }}
                className="flex items-center text-xs px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-1" /> Copied
                  </>
                ) : (
                  <>
                    <ClipboardCopy className="w-4 h-4 mr-1" /> Copy
                  </>
                )}
              </button>
            </div>

            <pre className="text-sm bg-gray-100 p-3 rounded-md whitespace-pre-wrap overflow-x-auto mb-4">
              {useCases[activeModal].example}
            </pre>

            <h4 className="font-semibold text-gray-800 mb-1">Steps to Implement:</h4>
            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mb-4">
              {useCases[activeModal].details.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>

            <h4 className="font-semibold text-gray-800 mb-1">How to Test in Tally:</h4>
            <ul className="list-decimal pl-5 text-gray-700 text-sm space-y-1 mb-4">
              {useCases[activeModal].stepsToTest?.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>

            {useCases[activeModal].image && (
              <img
                src={useCases[activeModal].image}
                alt={useCases[activeModal].title}
                className="mt-4 rounded-lg shadow object-contain w-full"
              />
            )}

            <h4 className="font-semibold text-gray-800 mt-4 mb-1">Use Case Example:</h4>
            <p className="text-sm text-gray-700 mb-4">
              {useCases[activeModal].useCaseExample}
            </p>

            <button
              onClick={() => setActiveModal(null)}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}





