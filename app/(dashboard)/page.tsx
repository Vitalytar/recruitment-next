import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import heroBannerImage from '@/app/assets/hero-banner-image.png';

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Create HR forms and approval workflows
                <span className="block text-accent">in minutes - not weeks</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Design job applications, vacation requests, onboarding flows, and internal approvals without developers, complex tools, or endless back-and-forth.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a
                  href="https://vercel.com/templates/next.js/next-js-saas-starter"
                  target="_blank"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <Image src={heroBannerImage} alt="Hero Banner" width={500} height={500} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" aria-hidden="true">
                  <path d="M7 7h10M7 17h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                  <path d="M9 7v10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                  <circle cx="7" cy="7" r="2" stroke="currentColor" stroke-width="1.8" />
                  <circle cx="17" cy="7" r="2" stroke="currentColor" stroke-width="1.8" />
                  <circle cx="9" cy="17" r="2" stroke="currentColor" stroke-width="1.8" />
                  <path d="M11 17h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                  <circle cx="19" cy="17" r="2" stroke="currentColor" stroke-width="1.8" />
                </svg>
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Approval Workflows Built In
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Route requests through reviewers and managers with clear approve / reject steps — no emails or spreadsheets needed.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" aria-hidden="true">
                  <path
                    d="M7 3h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 3v5h5"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 12h6M9 15h6M9 18h4"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  HR Templates Out of the Box
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Start from proven templates for job applications, vacation requests, onboarding, and internal approvals.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" aria-hidden="true">
                  <path d="M12 3l7 4v6c0 5-3.2 8.2-7 9-3.8-.8-7-4-7-9V7l7-4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
                  <path d="M9.5 12.5l1.8 1.8 3.8-3.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Full Submission History & Audit Trail
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Track who submitted, reviewed, approved, or rejected every request — all in one place.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" aria-hidden="true">
                  <circle
                    cx="8"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    stroke-width="1.8"
                  />
                  <path
                    d="M12 12h8M16 12v3M19 12v2"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Role-Based Access Control
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  HR, managers, and reviewers only see what they need — keeping employee data secure and private.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" aria-hidden="true">
                  <path d="M12 22a2.2 2.2 0 0 0 2.1-1.6H9.9A2.2 2.2 0 0 0 12 22z" fill="currentColor" opacity="0.2" />
                  <path d="M18 9a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
                  <path d="M9.5 20h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                </svg>
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Automatic Status Notifications
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Employees and reviewers are notified when actions are needed or decisions are made.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" aria-hidden="true">
                  <path d="M12 3v10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                  <path d="M8.5 10.5L12 13.9l3.5-3.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M6 17v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Easy Export & Reporting
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Download submissions as CSV for payroll, audits, or internal reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Ready to hire professionals?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Our template provides everything you need to get your SaaS up
                and running quickly. Don't waste time on boilerplate - focus on
                what makes your product unique.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <a href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg"
                >
                  View Pricing Options
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
