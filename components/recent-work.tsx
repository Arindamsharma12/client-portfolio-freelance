import { MoveRight } from "lucide-react";

const arr = [
  {
    id: 1,
    url: "/img/1.png",
    title: "An app for electric adventures",
  },
  {
    id: 2,
    url: "/img/2.png",
    title: "Making invoicing easy for all",
  },
];

export default function RecentWork() {
  return (
    <div className="mb-10 p-5">
      {/* Section Title */}
      <h1 className="mb-5 mt-10 text-5xl font-bold sm:text-6xl md:mt-20 md:text-7xl lg:mt-35">
        Recent Work
      </h1>

      {/* Work Items */}
      {arr.map((item) => (
        <div
          key={item.id}
          className="relative my-5 flex h-[50vh] w-full items-center overflow-hidden rounded-xl bg-cover bg-center md:h-[70vh] lg:h-[90vh]"
          style={{
            backgroundImage: `url(${item.url})`,
          }}
        >
          {/* Optional dark overlay */}
          <div className="absolute inset-0 z-10 bg-black/20" />

          {/* Text on top */}
          <div className="relative z-20 px-6 text-white md:ml-15 md:px-4">
            <h1 className="w-full text-2xl font-bold sm:text-3xl md:w-130 md:text-5xl">
              {item.title}
            </h1>
            <button
              className="mt-2 w-32 rounded-full bg-gray-300 px-4 py-2 opacity-70 text-gray-900 md:mt-4 md:w-40"
              disabled
            >
              Coming Soon
            </button>
          </div>
        </div>
      ))}

      {/* See All Work Button */}
      <div className="group mt-10 hidden cursor-pointer items-center justify-between rounded-xl bg-black p-4 text-white hover:pr-8 md:flex lg:p-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          See all work
        </h1>
        <MoveRight
          size={60}
          className="transition-all group-hover:translate-x-2 lg:size-80"
        />
      </div>
    </div>
  );
}
