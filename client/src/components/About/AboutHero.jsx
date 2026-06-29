import site from "../../config/site";

export default function AboutHero() {
  return (
    <section className="relative flex h-[500px] items-center justify-center overflow-hidden">
      <img
        src="/images/about-banner.jpg"
        alt="Beauty Parlour"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 px-6 text-center text-white">
        <h1 className="mb-6 text-5xl font-bold md:text-6xl">
          About {site.brand.first} {site.brand.second}
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-gray-200">
          Passionate about beauty, committed to excellence, and dedicated to
          making every client feel confident.
        </p>
      </div>
    </section>
  );
}
