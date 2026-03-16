import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ABOUT_IMAGES = [
  { src: "/about/about-1.png", alt: "Outdoor portrait on a city street", cursorLabel: "THIS IS ME!" },
  { src: "/about/about-2.png", alt: "Making candles at a workshop", cursorLabel: "CANDLE MAKING" },
  { src: "/about/about-3.png", alt: "Pokémon Trunk or Treat display", cursorLabel: "POKEMON THEMED TRUNK OR TREAT" },
  { src: "/about/about-4.png", alt: "Friends at a celebratory dinner", cursorLabel: "GALENTINES DAY" },
  { src: "/about/about-5.png", alt: "Hobbit-themed food spread", cursorLabel: "LORD OF THE RINGS PARTY" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <Header />
      <main className="flex-1 pt-24 md:pt-28 px-6 md:px-10 max-w-4xl mx-auto pb-16">
        <h1 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6 leading-tight">
          I&apos;m a designer, builder, and a mom to a kitty cat—
          <br />
          always seeking new adventures.
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          I think deeply about people, products, and the future of technology.
          Currently rabbit-holing into the world of human-AI interaction.
        </p>

        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          Open to contract and freelance opportunities. If you&apos;re working on
          something cool,{" "}
          <a
            href="mailto:leslieleechen@gmail.com"
            className="font-medium text-[#0866ff] hover:underline"
          >
            let&apos;s chat!
          </a>
        </p>

        <p className="text-zinc-600 dark:text-zinc-400 mb-2">
          Outside of content design and being a mom to a kitty cat, I&apos;m:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-6">
          <li>figuring out how to best serve my community</li>
          <li>searching for delicious sushi spots</li>
          <li>on the prowl for coffee shops with a great vibe</li>
        </ul>

        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          To befriend me or hire me, reach out on{" "}
          <a
            href="https://www.linkedin.com/in/leslie-lee7777/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-label="View my past experience"
            className="font-medium text-[#0866ff] hover:underline"
          >
            LinkedIn
          </a>
          , X, or by{" "}
          <a
            href="mailto:leslieleechen@gmail.com"
            data-cursor-label="Say hi!"
            className="font-medium text-[#0866ff] hover:underline"
          >
            email
          </a>
          —can&apos;t wait to meet you!
        </p>
      </main>

      {/* Image row fixed at bottom, right above footer */}
      <section className="w-full px-6 md:px-10 py-8 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {ABOUT_IMAGES.map(({ src, alt, cursorLabel }) => (
            <div
              key={src}
              data-cursor-label={cursorLabel}
              className="relative aspect-square rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 cursor-pointer"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
