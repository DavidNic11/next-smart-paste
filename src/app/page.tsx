import SmartPaste from "./components/smart-paste";
import Prompts from "./components/prompts";
import Header from "./components/header";

export default function Forms() {
  return (
    <div className="px-4 py-10">
      <Header />
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
          <Prompts />
        </div>
      </div>
    </div>
  );
}
