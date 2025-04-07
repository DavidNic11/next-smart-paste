import { SmartPaste } from "./components/smart-paste/smart-paste";

export default function Home() {
  return (
    <>
      <form className="space-y-4">
        <SmartPaste />

        <input name="name" placeholder="Name" className="w-full p-2 border" />
        <input name="title" placeholder="Title" className="w-full p-2 border" />
        <input name="location" placeholder="Location" className="w-full p-2 border" />
        <input type="submit" />
      </form>
      <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">New Employee Onboarding</h1>
        <form className="space-y-6 bg-white p-6 shadow-md rounded-lg border">
          <SmartPaste />
          <div>
            <label className="block font-medium">Full Name</label>
            <input name="fullName" className="w-full p-2 border rounded" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Email</label>
              <input type="email" name="email" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block font-medium">Phone</label>
              <input name="phone" className="w-full p-2 border rounded" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Start Date</label>
              <input type="date" name="startDate" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block font-medium">Department</label>
              <select name="department" className="w-full p-2 border rounded">
                <option value="">Choose…</option>
                <option value="engineering">Engineering</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="sales">Sales</option>
                <option value="hr">HR</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-medium">Role</label>
            <select name="role" className="w-full p-2 border rounded">
              <option value="">Choose…</option>
              <option value="frontend">Frontend Engineer</option>
              <option value="backend">Backend Engineer</option>
              <option value="pm">Product Manager</option>
              <option value="designer">UX Designer</option>
              <option value="qa">QA Analyst</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Employment Type</label>
            <div className="space-x-4">
              <label>
                <input type="radio" name="employmentType" value="full-time" /> Full-time
              </label>
              <label>
                <input type="radio" name="employmentType" value="part-time" /> Part-time
              </label>
              <label>
                <input type="radio" name="employmentType" value="contractor" /> Contractor
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium">Laptop Required</label>
            <input type="checkbox" name="laptopRequired" className="mr-2" />
            <span>Yes</span>
          </div>

          <div>
            <label className="block font-medium">Emergency Contact Name</label>
            <input name="emergencyContactName" className="w-full p-2 border rounded" />
          </div>

          <div>
            <label className="block font-medium">Emergency Contact Phone</label>
            <input name="emergencyContactPhone" className="w-full p-2 border rounded" />
          </div>

          <div>
            <label className="block font-medium">Additional Notes</label>
            <textarea name="notes" rows={4} className="w-full p-2 border rounded" />
          </div>

          <div>
            <label className="block font-medium">Resume (upload only)</label>
            <input type="file" name="resume" className="w-full" />
          </div>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
      <div className="max-w-xl mx-auto p-8">
        <h1 className="text-2xl font-semibold mb-4">Create Job Listing</h1>
        <form className="space-y-4 border rounded p-6 shadow bg-white">
          <SmartPaste />

          <div>
            <label className="block font-medium">Job Title</label>
            <input name="title" className="w-full p-2 border rounded" />
          </div>

          <div>
            <label className="block font-medium">Location</label>
            <input name="location" className="w-full p-2 border rounded" />
          </div>

          <div>
            <label className="block font-medium">Salary Range</label>
            <input name="salary" className="w-full p-2 border rounded" />
          </div>

          <div>
            <label className="block font-medium">Remote Friendly?</label>
            <input type="checkbox" name="remote" className="mr-2" />
            <span>Yes</span>
          </div>

          <div>
            <label className="block font-medium">Contract Type</label>
            <select name="contractType" className="w-full p-2 border rounded">
              <option value="">Select...</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Start Date</label>
            <input
              type="date"
              name="startDate"
              className="w-full p-2 border rounded"
              data-sp-description="Must be in yyyy-MM-dd format"
            />
          </div>

          <div>
            <label className="block font-medium">Contact Email</label>
            <input type="email" name="email" className="w-full p-2 border rounded" />
          </div>

          <div>
            <label className="block font-medium">Job Description</label>
            <input
              name="description"
              className="w-full p-2 border rounded"
              data-sp-description="This is the job description, the more information the better"
            />
          </div>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
