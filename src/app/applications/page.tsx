



'use client';

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
} from "lucide-react";
import Link from "next/link";

const useCases = [
  {
    title: "Invoice Customization",
    description:
      "Design invoices with your branding. Example: Add GST, QR codes, or multiple languages.",
    icon: FileText,
  },
  {
    title: "GST Compliance",
    description:
      "Auto-calculate GST, validate entries, and generate ready-to-file reports.",
    icon: IndianRupee,
  },
  {
    title: "Business Automation",
    description:
      "Auto-send reminders, schedule backups, or generate reports with one click.",
    icon: Repeat2,
  },
  {
    title: "Advanced Reporting",
    description:
      "Create custom dashboards and track KPIs like profits, inventory, and receivables.",
    icon: BarChart,
  },
  {
    title: "Workflow Approvals",
    description:
      "Set approval levels for purchase orders or journal entries.",
    icon: BadgeCheck,
  },
  {
    title: "Integration with External Systems",
    description:
      "Sync Tally with Excel, websites, or CRMs via XML/ODBC. Example: Push sales to a cloud dashboard.",
    icon: LinkIcon,
  },
  {
    title: "Error Prevention",
    description:
      "Add smart validations to avoid wrong ledger selections or data entry mistakes.",
    icon: AlertTriangle,
  },
  {
    title: "User Management",
    description:
      "Restrict features based on roles, track activity logs, and ensure accountability.",
    icon: Users,
  },
];

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen px-4 sm:px-8 md:px-16 py-10">
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
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg"
          >
            <useCase.icon className="text-blue-500 w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {useCase.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {useCase.description}
            </p>
          </motion.div>
        ))}
      </section>

       
    </main>
  );
}













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



