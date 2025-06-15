import ImageOverlay from "./image-overlay";
import { MoveRight } from "lucide-react";
const arr = [
  {
    id: 1,
    url: "/img/project-image.jpg",
    title: "An app for electric adventures",
  },
  {
    id: 2,
    url: "/img/project-image.jpg",
    title: "An app for electric adventures",
  },
  {
    id: 3,
    url: "/img/project-image.jpg",
    title: "An app for electric adventures",
  },
];

export default function RecentWork() {
  return (
    <div className="mb-10">
      <h1 className="text-7xl mb-5 mt-35">Recent Work</h1>
      {arr.map((item) => (
        <div
          key={item.id}
          className="relative h-[90vh] w-full bg-cover bg-center my-5 flex items-center rounded-xl overflow-hidden"
          style={{
            backgroundImage: `url(${item.url})`, // Replace with your image
          }}
        >
          {/* Optional dark overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />

          {/* Text on top */}
          <div className="relative z-20 ml-15 text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold w-130">
              {item.title}
            </h1>
            <button className="mt-2 md:mt-4 bg-white text-black py-2 px-4 rounded-full w-40">
              View now
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-between text-white hover:pr-10 cursor-pointer bg-black p-6 rounded-xl">
        <h1 className="text-7xl">See all work</h1>
        <MoveRight size={80} />
      </div>
    </div>
  );
}
