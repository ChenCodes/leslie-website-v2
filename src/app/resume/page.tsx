import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <Header />
      <main className="flex-1 pt-24 md:pt-28 px-6 md:px-10 max-w-2xl mx-auto pb-16">
        <h1 className="text-2xl font-semibold mb-4">Resume</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          You can view or download my resume as a PDF.
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
        >
          Open resume (PDF)
        </a>
      </main>
      <Footer />
    </div>
  );
}
