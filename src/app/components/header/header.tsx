export default function Header() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight sm:text-5xl">
        <span className="text-violet-600">Smart Paste</span> for Your Forms
      </h1>
      <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
        Drop a job description into your clipboard — watch your form fill itself using{" "}
        <a href="https://nextjs.org/" target="_blank" className="text-violet-500 font-medium">
          Next.js
        </a>
        ,{" "}
        <a href="https://sdk.vercel.ai/" target="_blank" className="text-violet-500 font-medium">
          Vercel AI SDK
        </a>
        , and a bit of frontend magic. This demo uses real API calls via the Vercel AI SDK and is rate-limited to avoid
        running up a bill. Please be mindful when testing!
      </p>
      <p className="mt-2 text-sm text-neutral-500">
        Curious how it works?{" "}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-600 font-medium underline underline-offset-2 hover:text-violet-500"
        >
          Read the blog post →
        </a>
      </p>
    </div>
  );
}
