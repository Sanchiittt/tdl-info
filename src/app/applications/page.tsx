











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
  {
    title: "GST Compliance",
    description:
      "Auto-calculate GST, validate entries, and generate ready-to-file reports.",
    icon: IndianRupee,
    details: [
      "Enable GST in Company Features.",
      "Create GST Classifications and Ledger Accounts.",
      "Apply validation checks for tax entries.",
    ],
    usedIn: "GST Filing and Reporting",
    example: `[Field: TaxValue]
Set as: $$GSTAmount:CurrentLine`,
    stepsToTest: [
      "Create a Sales Voucher.",
      "Apply GST classification.",
      "Ensure correct GST is calculated.",
    ],
    useCaseExample:
      "Retailer automates GST calculations to avoid manual tax entry errors.",
    image: "/images/gst_compliance.png",
  },
  {
    title: "Business Automation",
    description:
      "Auto-send reminders, schedule backups, or generate reports with one click.",
    icon: Repeat2,
    details: [
      "Write background routines in TDL.",
      "Schedule voucher reports.",
      "Auto-email reminders for due payments.",
    ],
    usedIn: "Routine Automation Module",
    example: `[System: Event]
On Start: Execute Report AutoBackup`,
    stepsToTest: [
      "Create auto-report TDL.",
      "Link to startup event.",
      "Check if report generates on start.",
    ],
    useCaseExample:
      "An accountant schedules daily backups at login time.",
    image: "/images/business_automation.png",
  },
  {
    title: "Advanced Reporting",
    description:
      "Create custom dashboards and track KPIs like profits, inventory, and receivables.",
    icon: BarChart,
    details: [
      "Design report formats.",
      "Fetch ledgers and inventory data.",
      "Display in graphical dashboards.",
    ],
    usedIn: "KPI Dashboard",
    example: `[Report: KPI Dashboard]
Form: KPI Form

[Form: KPI Form]
Parts: KPI Line`,
    stepsToTest: [
      "Build report and form.",
      "Add test KPIs.",
      "Run via GoTo menu.",
    ],
    useCaseExample:
      "Management uses custom dashboard to view real-time sales data.",
    image: "/images/advanced_reporting.png",
  },
  {
    title: "Workflow Approvals",
    description:
      "Set approval levels for purchase orders or journal entries.",
    icon: BadgeCheck,
    details: [
      "Create fields to mark 'Approved By'.",
      "Restrict modification access based on user.",
    ],
    usedIn: "Approval Process",
    example: `[Field: PO Approval]
Use: Logical Field
Storage: POApproval
Set as: No`,
    stepsToTest: [
      "Submit PO.",
      "Login from admin to approve.",
    ],
    useCaseExample:
      "Approvals ensure only verified POs are processed.",
    image: "/images/workflow_approval.png",
  },
  {
    title: "Integration with External Systems",
    description:
      "Sync Tally with Excel, websites, or CRMs via XML/ODBC. Example: Push sales to a cloud dashboard.",
    icon: LinkIcon,
    details: [
      "Use ODBC or XML request handlers.",
      "Push and pull data with third-party systems.",
    ],
    usedIn: "CRM Sync",
    example: `[System: HTTP Request Handler]
Request Name: GetSales
Procedure: GetSalesData`,
    stepsToTest: [
      "Run handler from browser.",
      "Check external system for response.",
    ],
    useCaseExample:
      "Sales data is synced live to CRM dashboard.",
    image: "/images/integration_crm.png",
  },
  {
    title: "Error Prevention",
    description:
      "Add smart validations to avoid wrong ledger selections or data entry mistakes.",
    icon: AlertTriangle,
    details: [
      "Add conditions in field validations.",
      "Block wrong data entries.",
    ],
    usedIn: "Data Validation",
    example: `[Field: Amount Field]
Validate: $$IsNum:$$Value`,
    stepsToTest: [
      "Try entering alphabet in amount field.",
      "Error should show.",
    ],
    useCaseExample:
      "Prevents wrong values during data entry by junior staff.",
    image: "/images/error_prevention.png",
  },
  {
    title: "User Management",
    description:
      "Restrict features based on roles, track activity logs, and ensure accountability.",
    icon: Users,
    details: [
      "Create user roles in TDL.",
      "Apply permission filters.",
    ],
    usedIn: "Role-Based Access",
    example: `[System: UDF]
Name: UserLog
Type: String
Scope: Global`,
    stepsToTest: [
      "Login with different user roles.",
      "Try restricted features.",
    ],
    useCaseExample:
      "Prevents unauthorized edits in vouchers.",
    image: "/images/user_management.png",
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

      {/* ✅ Inserted Section Starts Here */}
      <section className="mt-20 bg-gray-50 p-6 sm:p-10 rounded-xl shadow-md border border-gray-200"> 
        <h2 className="text-2xl font-bold text-gray-800 mb-3">📂 Sample TDL Files</h2>
        <p className="text-gray-600 mb-6">
          Explore the directory of pre-written TDL samples to help you get started quickly. You can view or download them from the GitHub repository.
        </p>
        <a
          href="https://github.com/Sanchiittt/tdl-info/tree/main/sample-files"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
        >
          🔗 View Sample Files on GitHub
        </a>
      </section>
      {/* ✅ Inserted Section Ends Here */}

    </main>
  );
}
