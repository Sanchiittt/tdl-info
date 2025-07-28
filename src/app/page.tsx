


'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex flex-col justify-between">
      {/* Hero Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl w-full mx-auto px-6 md:px-16 py-16 gap-12">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4 leading-tight">
            Master TDL – Tally Definition Language
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto lg:mx-0">
            Customize Tally, automate data entry, and build smart business tools with the power of TDL.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button
              onClick={() => router.push('/getting-started')}
              className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow"
            >
              🚀 Get Started
            </button>
            <button
              onClick={() => router.push('/about')}
              className="bg-white hover:bg-indigo-50 text-indigo-700 border border-indigo-700 font-medium px-6 py-3 rounded-full transition duration-300 shadow"
            >
              📘 Learn More
            </button>
          </div>

          {/* Trusted By Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.5 }}
  className="mt-16 text-center"
>
  <p className="text-gray-600 text-sm uppercase tracking-wider mb-4">Used For</p>
  <div className="flex justify-center flex-wrap gap-10 items-center">
    <div className="flex flex-col items-center">
      <Image src="/images/invoice.png" alt="Invoicing" width={64} height={64} />
      <span className="mt-2 text-sm text-gray-600">Invoicing</span>
    </div>
    <div className="flex flex-col items-center">
      <Image src="/images/gst.png" alt="GST" width={64} height={64} />
      <span className="mt-2 text-sm text-gray-600">GST Filing</span>
    </div>
    <div className="flex flex-col items-center">
      <Image src="/images/report.png" alt="Reports" width={64} height={64} />
      <span className="mt-2 text-sm text-gray-600">Reports</span>
    </div>
    <div className="flex flex-col items-center">
      <Image src="/images/automation.png" alt="Automation" width={64} height={64} />
      <span className="mt-2 text-sm text-gray-600">Automation</span>
    </div>
  </div>
</motion.div>


          
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="lg:w-1/2 flex justify-center"
        >
          <Image
            src="/images/download.jpeg"
            alt="TDL Illustration"
            width={480}
            height={320}
            className="w-full max-w-md drop-shadow-xl rounded-xl"
          />
        </motion.div>
      </div>

      {/* Highlights Section */}
<section className="mt-16 bg-indigo-50 py-10 px-6 rounded-xl max-w-5xl mx-auto shadow">
  <div className="grid md:grid-cols-3 gap-6 text-center">
    <div>
      <h3 className="text-xl font-semibold text-indigo-800">📦 Built Into Tally</h3>
      <p className="text-gray-700 mt-2 text-sm">
        TDL runs natively inside Tally, no external tools or plugins needed — fast, secure, and stable.
      </p>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-indigo-800">🧠 Designed for Business Logic</h3>
      <p className="text-gray-700 mt-2 text-sm">
        TDL is purpose-built for business rules — perfect for accounting, inventory, payroll, and compliance.
      </p>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-indigo-800">📊 Real-Time Customization</h3>
      <p className="text-gray-700 mt-2 text-sm">
        Changes reflect instantly without restarting Tally — making development quick and responsive.
      </p>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 text-center text-gray-600 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} TDL Mastery. Built with ❤️ using Next.js & TypeScript.</p>
          <p className="mt-1">
            Designed for educational purposes. All TDL trademarks belong to Tally Solutions Pvt. Ltd.
          </p>
        </div>
      </footer>
    </section>
  );
}


