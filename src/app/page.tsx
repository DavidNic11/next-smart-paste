import SmartPaste from "./components/smart-paste";
import ClickToCopy from "./components/click-to-copy/click-to-copy";

const prompts = [
  `hey can you post a job for us?

we need a Senior DevOps Engineer based in Chicago, IL, remote is fine.
salary range is $130k–$150k, full-time.
start date ideally 2024-07-22

description: someone strong with AWS, Terraform, CI/CD pipelines, and observability tools like Datadog or Prometheus.

have candidates send resumes to ops-hiring@infraworks.com

thanks!`,

  `can you whip up a quick job post?

role: Marketing Lead
location: Remote or LA
contract type: Contract
pay range: $75–90/hour
start date: 2024-06-03

they’ll run campaigns, track performance, and help build our brand from the ground up. early stage, so must be scrappy.

hit up founders@stealthstack.xyz for applications.`,

  `We're looking to hire a Frontend Developer in Austin, TX, offering a salary of $85,000 - $105,000. This position is full-time and remote-friendly. We're hoping to start on 2024-07-01. Interested candidates should email their applications to hr@techpulse.com.

Job Description: You'll be responsible for building beautiful, responsive interfaces using React, Next.js, and Tailwind CSS. Experience collaborating with design and backend teams is essential.`,

  `We have an open Product Manager Internship based in New York, NY. The internship is paid at $30/hour. Candidates must be local (not remote-friendly). Expected start date is 2024-06-10. Apply via internships@productify.io.

Job Description: As an intern, you’ll assist the PM team with market research, writing product specifications, and coordinating with developers and designers. Ideal candidates have excellent communication skills and a keen interest in product development.`,

  `We're hiring a UX Designer contractor located in Seattle, WA. This contract role pays $60 - $85 per hour, is remote-friendly, and begins on 2024-08-15. Email your portfolio and resume to careers@uxheroes.com.

Job Description: You'll craft intuitive user experiences and user interfaces for mobile apps and websites. Must have a strong portfolio showcasing wireframes, prototypes, and user flows.`,

  `Seeking a Part-Time Senior Data Analyst in Denver, CO, earning between $65,000 and $75,000 annually. This position allows hybrid/remote work options. Start date: 2024-09-01. Contact email: datajobs@quantivio.com.

Job Description: Responsible for analyzing customer data to uncover trends, creating comprehensive dashboards, and working closely with product teams to provide insights. Proficiency in SQL, Python, and BI tools (e.g., Tableau, PowerBI) required.`,
];

export default function Forms() {
  return (
    <div className="px-4 py-10">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">Next.js + Vercel AI SDK Smart Paste Demo</h1>
        <p className="text-neutral-600 text-base">
          Copy and Paste job descriptions and watch the form fill itself using AI. Curious how it&apos;s built?{" "}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 underline hover:text-violet-500"
          >
            Read the blog post →
          </a>
        </p>
        <p className="mt-2 text-lg text-orange-600 font-medium">
          ⚠️ Please don&apos;t abuse this demo — usage is rate-limited to avoid excessive API costs.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-start w-full gap-8 p-6 ">
        <div className="w-full lg:w-[600px]">
          <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-100">
            <div className="h-1.5 w-full bg-neutral-100">
              <div className="h-full w-full bg-gradient-to-r from-violet-400 to-blue-500 rounded-r-full"></div>
            </div>
            <form className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="title" className="block text-sm font-medium text-neutral-700">
                    Job Title
                  </label>
                  <input
                    id="title"
                    name="title"
                    className="w-full h-12 px-4 bg-neutral-50 border border-neutral-200 rounded-lg focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-colors placeholder-neutral-400"
                    placeholder="e.g. Senior Frontend Developer"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="block text-sm font-medium text-neutral-700">
                    Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    className="w-full h-12 px-4 bg-neutral-50 border border-neutral-200 rounded-lg focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-colors placeholder-neutral-400"
                    placeholder="e.g. San Francisco, CA"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="salary" className="block text-sm font-medium text-neutral-700">
                    Salary Range
                  </label>
                  <input
                    id="salary"
                    name="salary"
                    className="w-full h-12 px-4 bg-neutral-50 border border-neutral-200 rounded-lg focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-colors placeholder-neutral-400"
                    placeholder="e.g. $80,000 - $120,000"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contractType" className="block text-sm font-medium text-neutral-700">
                    Contract Type
                  </label>
                  <div className="relative">
                    <select
                      id="contractType"
                      name="contractType"
                      className="w-full h-12 px-4 bg-neutral-50 border border-neutral-200 rounded-lg focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-colors appearance-none"
                    >
                      <option value="" selected disabled>
                        Select contract type
                      </option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                      <option value="internship">Internship</option>
                    </select>
                    <div className="absolute right-3 top-3.5 text-neutral-400 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="startDate" className="block text-sm font-medium text-neutral-700">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    data-sp-description="All responses must be in YYYY-mm-dd format"
                    className="w-full h-12 px-4 bg-neutral-50 border border-neutral-200 rounded-lg focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-colors text-neutral-700"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-neutral-700 mb-3">Remote Friendly?</label>
                  <label className="inline-flex items-center cursor-pointer">
                    <span className="mr-3 text-sm text-neutral-600">No</span>
                    <div className="relative">
                      <input type="checkbox" id="remote" name="remote" className="sr-only peer" />
                      <div className="w-11 h-6 bg-neutral-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-violet-100 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-500"></div>
                    </div>
                    <span className="ml-3 text-sm text-neutral-600">Yes</span>
                  </label>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full h-12 px-4 bg-neutral-50 border border-neutral-200 rounded-lg focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-colors placeholder-neutral-400"
                    placeholder="contact@company.com"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="description" className="block text-sm font-medium text-neutral-700">
                    Job Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    data-sp-description="Contains details about what the hired employee will do at the job. Responses should be full sentences about job starting with an ideal candidate..."
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-colors placeholder-neutral-400 resize-none"
                    placeholder="Describe the role, responsibilities, and requirements..."
                  ></textarea>
                </div>
              </div>

              <div className="mt-10 flex justify-between items-center border-t border-neutral-100 pt-6">
                <SmartPaste />

                <button
                  type="submit"
                  className="px-8 py-3 bg-violet-500 text-white font-medium rounded-lg shadow-sm hover:bg-blue-600 transition-colors hover:cursor-pointer"
                >
                  Post Job
                </button>
              </div>
            </form>
          </div>
          <div className="mt-6 text-center text-neutral-500 text-sm">
            Your job posting will be reviewed within 24 hours
          </div>
        </div>
        <div className="w-full lg:w-[700px] max-h-[818px] overflow-auto">
          <h2 className="text-lg font-semibold mb-4 sticky top-0 z-10 bg-white pb-4">Example Smart Paste Prompts</h2>
          <div className="space-y-4">
            {prompts.map((text, i) => (
              <ClickToCopy key={i} text={text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
