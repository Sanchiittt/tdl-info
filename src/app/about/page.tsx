



// 'use client';

// import { motion } from "framer-motion";
// import { ArrowRight, BrainCog, Lightbulb, Settings2 } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// export default function AboutPage() {
//   return (
//     <div className="max-w-5xl mx-auto px-6 py-12">
//       {/* Heading */}
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 text-center"
//       >
//         About TDL – Tally Definition Language
//       </motion.h1>

//       {/* Subheading */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto"
//       >
//         TDL (Tally Definition Language) is a powerful way to customize, extend,
//         and automate TallyPrime or Tally ERP 9. Whether you’re a developer,
//         accountant, or business owner — TDL gives you full control over how
//         Tally behaves.
//       </motion.p>

//       {/* Info Grid */}
//       <div className="grid md:grid-cols-2 gap-10">
//         {/* What is TDL */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="bg-white/70 dark:bg-white/10 backdrop-blur rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
//         >
//           <h2 className="flex items-center text-2xl font-semibold text-gray-800 dark:text-white gap-2 mb-3">
//             <BrainCog className="text-blue-600" /> What is TDL?
//           </h2>
//           <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//             TDL is a domain-specific programming language created by Tally
//             Solutions. It lets users customize the interface, reports, input
//             fields, and workflows of Tally without modifying the core software.
//             It is easy to learn, especially for those with basic programming
//             knowledge.
//           </p>
//         </motion.section>

//         {/* Why use TDL */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="bg-white/70 dark:bg-white/10 backdrop-blur rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
//         >
//           <h2 className="flex items-center text-2xl font-semibold text-gray-800 dark:text-white gap-2 mb-3">
//             <Lightbulb className="text-yellow-500" /> Why use TDL?
//           </h2>
//           <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
//             <li>Add custom fields to vouchers and ledgers</li>
//             <li>Build tailored invoices and reports</li>
//             <li>Automate repetitive accounting tasks</li>
//             <li>Integrate with external tools (Excel, DBs, web apps)</li>
//           </ul>
//         </motion.section>

//         {/* How TDL Works */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="md:col-span-2 bg-white/70 dark:bg-white/10 backdrop-blur rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
//         >
//           <h2 className="flex items-center text-2xl font-semibold text-gray-800 dark:text-white gap-2 mb-3">
//             <Settings2 className="text-green-600" /> How does TDL work?
//           </h2>
//           <p className="text-gray-700 dark:text-gray-300 mb-3">
//             TDL is compiled and loaded into Tally using either the built-in
//             Tally Developer or by attaching `.tdl` files. Once added, it can:
//           </p>
//           <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
//             <li>Display custom columns in existing reports</li>
//             <li>Trigger extra input prompts during voucher entry</li>
//             <li>Auto-calculate taxes, commissions, or discounts</li>
//           </ul>
//         </motion.section>
//       </div>

//       {/* Diagram/Image */}
//       <motion.section
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6 }}
//         className="mt-16"
//       >
//         <h2 className="text-2xl font-semibold text-gray-800 dark:text-white text-center mb-4">
//           TDL + Tally Integration Overview
//         </h2>
//         <p className="text-gray-700 dark:text-gray-300 text-center mb-6 max-w-2xl mx-auto">
//           Here’s how TDL works behind the scenes with Tally ERP or TallyPrime to customize workflows and add features.
//         </p>
//         <div className="flex justify-center">
//           <Image
//             src="/images/tally_tdl_integration.png" // update this with your actual image
//             alt="TDL and Tally Integration Diagram"
//             width={800}
//             height={400}
//             className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
//           />
//         </div>
//       </motion.section>

//       {/* CTA */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.7 }}
//         className="mt-20 text-center"
//       >
//         <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
//           Ready to explore real-world use cases?
//         </h3>
//         <Link
//           href="/applications"
//           className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
//         >
//           See TDL Use Cases <ArrowRight size={18} />
//         </Link>
//       </motion.div>
//     </div>
//   );
// }




// 'use client';

// import { motion } from "framer-motion";
// import { ArrowRight, BrainCog, Lightbulb, Settings2 } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// export default function AboutPage() {
//   return (
//     <div className="max-w-5xl mx-auto px-6 py-12">
//       {/* Heading */}
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 text-center"
//       >
//         About TDL – Tally Definition Language
//       </motion.h1>

//       {/* Subheading */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto"
//       >
//         TDL (Tally Definition Language) is a powerful way to customize, extend,
//         and automate TallyPrime or Tally ERP 9. Whether you’re a developer,
//         accountant, or business owner — TDL gives you full control over how
//         Tally behaves.
//       </motion.p>

//       {/* Info Grid */}
//       <div className="grid md:grid-cols-2 gap-10">
//         {/* What is TDL */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="bg-white dark:bg-white/10 backdrop-blur rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
//         >
//           <h2 className="flex items-center text-2xl font-semibold text-gray-800 dark:text-white gap-2 mb-3">
//             <BrainCog className="text-blue-600" /> What is TDL?
//           </h2>
//           <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//             TDL is a domain-specific programming language created by Tally
//             Solutions. It lets users customize the interface, reports, input
//             fields, and workflows of Tally without modifying the core software.
//             It is easy to learn, especially for those with basic programming
//             knowledge.
//           </p>
//         </motion.section>

//         {/* Why use TDL */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="bg-white dark:bg-white/10 backdrop-blur rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
//         >
//           <h2 className="flex items-center text-2xl font-semibold text-gray-800 dark:text-white gap-2 mb-3">
//             <Lightbulb className="text-yellow-500" /> Why use TDL?
//           </h2>
//           <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
//             <li>Add custom fields to vouchers and ledgers</li>
//             <li>Build tailored invoices and reports</li>
//             <li>Automate repetitive accounting tasks</li>
//             <li>Integrate with external tools (Excel, DBs, web apps)</li>
//           </ul>
//         </motion.section>

//         {/* How TDL Works */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="md:col-span-2 bg-white dark:bg-white/10 backdrop-blur rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
//         >
//           <h2 className="flex items-center text-2xl font-semibold text-gray-800 dark:text-white gap-2 mb-3">
//             <Settings2 className="text-green-600" /> How does TDL work?
//           </h2>
//           <p className="text-gray-700 dark:text-gray-300 mb-3">
//             TDL is compiled and loaded into Tally using either the built-in
//             Tally Developer or by attaching `.tdl` files. Once added, it can:
//           </p>
//           <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
//             <li>Display custom columns in existing reports</li>
//             <li>Trigger extra input prompts during voucher entry</li>
//             <li>Auto-calculate taxes, commissions, or discounts</li>
//           </ul>
//         </motion.section>
//       </div>

//       {/* Diagram/Image */}
//       <motion.section
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6 }}
//         className="mt-16"
//       >
//         <h2 className="text-2xl font-semibold text-gray-800 dark:text-white text-center mb-4">
//           TDL + Tally Integration Overview
//         </h2>
//         <p className="text-gray-700 dark:text-gray-300 text-center mb-6 max-w-2xl mx-auto">
//           Here’s how TDL works behind the scenes with Tally ERP or TallyPrime
//           to customize workflows and add features.
//         </p>
//         <div className="flex justify-center">
//           <Image
//             src="/images/tally_tdl_integration.png"
//             alt="TDL and Tally Integration Diagram"
//             width={800}
//             height={400}
//             className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
//           />
//         </div>
//       </motion.section>

//       {/* CTA */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.7 }}
//         className="mt-20 text-center"
//       >
//         <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
//           Ready to explore real-world use cases?
//         </h3>
//         <Link
//           href="/applications"
//           className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
//         >
//           See TDL Use Cases <ArrowRight size={18} />
//         </Link>
//       </motion.div>
//     </div>
//   );
// }





'use client';

import { motion } from "framer-motion";
import { ArrowRight, BrainCog, Lightbulb, Settings2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 text-center"
      >
        About TDL – Tally Definition Language
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-800 dark:text-gray-200 text-center mb-12 max-w-3xl mx-auto"
      >
        TDL (Tally Definition Language) is a powerful way to customize, extend,
        and automate TallyPrime or Tally ERP 9. Whether you’re a developer,
        accountant, or business owner — TDL gives you full control over how
        Tally behaves.
      </motion.p>

      {/* Info Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* What is TDL */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
        >
          <h2 className="flex items-center text-2xl font-semibold text-gray-800 dark:text-gray-100 gap-2 mb-3">
            <BrainCog className="text-blue-600" /> What is TDL?
          </h2>
          <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
            TDL is a domain-specific programming language created by Tally
            Solutions. It lets users customize the interface, reports, input
            fields, and workflows of Tally without modifying the core software.
            It is easy to learn, especially for those with basic programming
            knowledge.
          </p>
        </motion.section>

        {/* Why use TDL */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
        >
          <h2 className="flex items-center text-2xl font-semibold text-gray-800 dark:text-gray-100 gap-2 mb-3">
            <Lightbulb className="text-yellow-500" /> Why use TDL?
          </h2>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1">
            <li>Add custom fields to vouchers and ledgers</li>
            <li>Build tailored invoices and reports</li>
            <li>Automate repetitive accounting tasks</li>
            <li>Integrate with external tools (Excel, DBs, web apps)</li>
          </ul>
        </motion.section>

        {/* How TDL Works */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="md:col-span-2 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
        >
          <h2 className="flex items-center text-2xl font-semibold text-gray-800 dark:text-gray-100 gap-2 mb-3">
            <Settings2 className="text-green-600" /> How does TDL work?
          </h2>
          <p className="text-gray-800 dark:text-gray-300 mb-3">
            TDL is compiled and loaded into Tally using either the built-in
            Tally Developer or by attaching `.tdl` files. Once added, it can:
          </p>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1">
            <li>Display custom columns in existing reports</li>
            <li>Trigger extra input prompts during voucher entry</li>
            <li>Auto-calculate taxes, commissions, or discounts</li>
          </ul>
        </motion.section>
      </div>

      {/* Diagram/Image */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-4">
          TDL + Tally Integration Overview
        </h2>
        <p className="text-gray-800 dark:text-gray-300 text-center mb-6 max-w-2xl mx-auto">
          Here’s how TDL works behind the scenes with Tally ERP or TallyPrime
          to customize workflows and add features.
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/tally_tdl_integration.png"
            alt="TDL and Tally Integration Diagram"
            width={800}
            height={400}
            className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
          />
        </div>
      </motion.section>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-20 text-center"
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Ready to explore real-world use cases?
        </h3>
        <Link
          href="/applications"
          className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
        >
          See TDL Use Cases <ArrowRight size={18} />
        </Link>
      </motion.div>
    </div>
  );
}
