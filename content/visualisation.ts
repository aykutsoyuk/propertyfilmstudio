// "From Still Images to Moving Stories" examples. Add your own files at these
// paths (or change the paths). Copy lives under `visualisation.items.<id>` in
// content/translations/{pt,en}.json.
//   layout "side"    → vertical media, image left / video right
//   layout "stacked" → horizontal media, image on top / video below
export type StillToMotion = {
  id: string;
  image: string;
  video: string;
  layout: "side" | "stacked";
  featured?: boolean;
};

export const stillToMotion: StillToMotion[] = [
  {
    id: "render-to-reality",
    image: "/images/visualisation/amares-bina.jpg",
    video: "/videos/visualisation/amares-bina-vid.mp4",
    layout: "side",
    featured: true,
  },
  {
    id: "interior-in-motion",
    image: "/images/visualisation/amares-room.jpg",
    video: "/videos/visualisation/amares-room-vid.mp4",
    layout: "side",
  },
  {
    id: "fireplace",
    image: "/images/visualisation/fire-place.png",
    video: "/videos/visualisation/fire-place-vid.mp4",
    layout: "stacked",
  },
  {
    id: "day-to-night",
    image: "/images/visualisation/villa.png",
    video: "/videos/visualisation/villa-vid.mp4",
    layout: "stacked",
  },
];
