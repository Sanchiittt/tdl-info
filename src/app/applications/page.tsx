// export default function ApplicationsPage() {
//   return (
//     <section className="max-w-4xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold text-purple-700 mb-6">Real-Life Applications of TDL</h1>

//       <div className="space-y-6 text-gray-700 leading-relaxed">
//         <div>
//           <h2 className="text-xl font-semibold text-gray-800">1. Customized Invoice Formats</h2>
//           <p>
//             Businesses can design invoices in their preferred style — adding logos, GST details, bank information,
//             terms, QR codes, and more. TDL makes it easy to match invoices to a company’s branding.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold text-gray-800">2. Auto SMS or Email Alerts</h2>
//           <p>
//             Using TDL, Tally can automatically send an SMS or email when a sale is made, payment is received, or stock
//             is low. This improves communication and saves manual effort.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold text-gray-800">3. Extra Fields in Vouchers</h2>
//           <p>
//             TDL can add custom fields like delivery date, transporter name, vehicle number, or salesperson name in
//             vouchers, purchase orders, or sales bills — useful for tracking.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold text-gray-800">4. Data Entry Automation</h2>
//           <p>
//             If you do the same entries daily, TDL can automate that. Example: Automatically create a journal voucher
//             every day for expenses — reducing manual work.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold text-gray-800">5. Third-Party Integration</h2>
//           <p>
//             TDL can connect Tally to other software like CRM, e-commerce sites, or inventory apps. Example: Send sales
//             data from Tally to a mobile app or website dashboard.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold text-gray-800">6. Advanced Reports</h2>
//           <p>
//             Companies can create their own reports — like profit by product, region-wise sales, payment due reminders,
//             etc. TDL lets you build reports that are not available in default Tally.
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }


// export default function ApplicationsPage() {
//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-purple-700 mb-4">Real-Life Applications of TDL</h1>

//       <p className="mb-6 text-gray-700">
//         TDL is widely used by businesses and developers to extend Tally's features and automate tasks. Here are some real-world use cases:
//       </p>

//       <div className="space-y-6 text-gray-800">
//         <div>
//           <h2 className="text-xl font-semibold">1. Custom Invoice Formats</h2>
//           <p>
//             Many companies want invoices that match their brand style, with logos, terms, or multiple tax columns. TDL lets you fully customize how invoices look in Tally.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold">2. Auto Data Entry</h2>
//           <p>
//             Repetitive entries like salary, rent, or monthly bills can be automated using TDL, saving hours of manual work every month.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold">3. Custom Reports</h2>
//           <p>
//             TDL can generate custom reports for things like region-wise sales, product-wise profitability, or outstanding payables with aging.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold">4. GST & Tax Configurations</h2>
//           <p>
//             Businesses often need region-specific or industry-specific tax calculations. TDL can modify tax handling, round-offs, and formats.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold">5. Integration with External Systems</h2>
//           <p>
//             TDL allows Tally to connect with Excel, websites, or third-party CRMs/ERPs using XML or ODBC. Example: Pushing sales data to a cloud dashboard.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold">6. Alerts and Validations</h2>
//           <p>
//             You can build validations like “Don’t allow sales below cost” or alerts like “Stock going below minimum level”.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold">7. User Role Customization</h2>
//           <p>
//             Control what each user can see or do. For example, allow sales staff to create invoices but not change pricing.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }




// src/app/applications/page.tsx
// "use client";

// import { CheckCircle, Layers, FileText, Database, AlertCircle, UserCheck, ReceiptText } from "lucide-react";
// import { motion } from "framer-motion";

// const features = [
//   {
//     icon: <ReceiptText className="h-6 w-6 text-purple-600" />,
//     title: "Custom Invoice Formats",
//     description:
//       "Match your brand with custom invoices — include logos, extra columns, or unique terms using TDL.",
//   },
//   {
//     icon: <CheckCircle className="h-6 w-6 text-purple-600" />,
//     title: "Auto Data Entry",
//     description:
//       "Automate repetitive entries like salaries or rent to save hours of manual work every month.",
//   },
//   {
//     icon: <FileText className="h-6 w-6 text-purple-600" />,
//     title: "Custom Reports",
//     description:
//       "Generate detailed reports like region-wise sales, product profitability, or payment aging effortlessly.",
//   },
//   {
//     icon: <Layers className="h-6 w-6 text-purple-600" />,
//     title: "GST & Tax Configurations",
//     description:
//       "Customize tax handling, round-offs, or formats as per region or industry-specific requirements.",
//   },
//   {
//     icon: <Database className="h-6 w-6 text-purple-600" />,
//     title: "External System Integrations",
//     description:
//       "Connect Tally with Excel, websites, or CRMs using XML or ODBC for real-time data exchange.",
//   },
//   {
//     icon: <AlertCircle className="h-6 w-6 text-purple-600" />,
//     title: "Alerts and Validations",
//     description:
//       "Set up validations like ‘Don’t allow sales below cost’ or alerts when stock dips below minimum.",
//   },
//   {
//     icon: <UserCheck className="h-6 w-6 text-purple-600" />,
//     title: "User Role Customization",
//     description:
//       "Define what each user can view or edit. Let sales teams invoice but restrict pricing changes.",
//   },
// ];

// export default function ApplicationsPage() {
//   return (
//     <div className="max-w-6xl mx-auto px-6 py-12">
//       <motion.h1
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-4xl font-bold text-center text-purple-700 mb-4"
//       >
//         Real-Life Applications of TDL
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//         className="text-gray-600 text-center mb-10 max-w-2xl mx-auto"
//       >
//         TDL is used by businesses to customize Tally, automate tasks, and integrate it with other systems. Below are some real-world examples:
//       </motion.p>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {features.map((feature, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 * idx }}
//             className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition"
//           >
//             <div className="flex items-center gap-3 mb-3">
//               {feature.icon}
//               <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
//             </div>
//             <p className="text-sm text-gray-600">{feature.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }



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



