import { FaBullseye, FaEye } from "react-icons/fa";

const cards = [
  {
    title: "Our Mission",
    description:
      "To deliver premium beauty services that enhance confidence and help every client look and feel their absolute best.",
    icon: FaBullseye,
  },
  {
    title: "Our Vision",
    description:
      "To become the most trusted beauty destination by combining creativity, innovation, and exceptional customer care.",
    icon: FaEye,
  },
];

export default function MissionVision() {
  return (
    <section className="bg-[#FFF8FA] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-[5px] text-pink-600">
            Our Purpose
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Mission & Vision
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-3xl border border-pink-100 bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 inline-flex rounded-full bg-pink-100 p-5">
                  <Icon className="text-3xl text-pink-600" />
                </div>

                <h3 className="mb-4 text-3xl font-bold">{card.title}</h3>

                <p className="leading-8 text-gray-600">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
