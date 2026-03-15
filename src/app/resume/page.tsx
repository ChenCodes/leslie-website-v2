import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <Header />
      <main className="pt-24 md:pt-28 px-6 md:px-10 max-w-4xl mx-auto pb-16">
        <h1 className="text-2xl font-semibold mb-4">Resume</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Resume page content coming soon.
        </p>
      </main>
      <Footer />
    </div>
  );
}
