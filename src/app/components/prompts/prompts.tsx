import ClickToCopy from "./click-to-copy";

export default function Prompts() {
  return (
    <>
      <h2 className="text-lg font-semibold mb-4 sticky top-0 z-10 bg-white pb-4">Example Smart Paste Prompts</h2>
      <div className="space-y-4">
        {prompts.map((text, i) => (
          <ClickToCopy key={i} text={text} />
        ))}
      </div>
    </>
  );
}

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
