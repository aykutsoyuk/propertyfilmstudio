// Every portfolio video is its own entry. To feature a video in "Selected Works":
//   1. set `selectedWork: true`
//   2. set `order` (lowest first)
//   3. add its copy under `selectedWork.items.<id>` in content/translations/{pt,en}.json
// Entries with `selectedWork: false` are kept here but not shown.
export type WorkVideo = {
  id: string;
  video: string;
  poster: string;
  orientation: "horizontal" | "vertical";
  selectedWork: boolean;
  order: number;
};

export const videos: WorkVideo[] = [
  {
    id: "bom-jesus-walkthrough",
    video: "/videos/bom-jesus-film.mp4",
    poster: "/images/projects/bom-jesus-poster.jpeg",
    orientation: "horizontal",
    selectedWork: true,
    order: 3,
  },
  {
    id: "amares-reel",
    video: "/videos/amares-social-s.mp4",
    poster: "/images/projects/amares-poster.png",
    orientation: "vertical",
    selectedWork: true,
    order: 1,
  },
  {
    id: "bom-jesus-drone",
    video: "/videos/bom-jesus-aerial.mp4",
    poster: "/images/projects/bom-jesus-aerial-poster.png",
    orientation: "horizontal",
    selectedWork: true,
    order: 2,
  },
  {
    id: "bom-jesus-reel",
    video: "/videos/bom-jesus-social.mp4",
    poster: "/images/projects/bom-jesus-social-poster.png",
    orientation: "vertical",
    selectedWork: false,
    order: 5,
  },
  {
    id: "duplex-flavia-reel",
    video: "/videos/duplex-flavia-social-s.mp4",
    poster: "/images/projects/duplex-flavia-poster.png",
    orientation: "vertical",
    selectedWork: true,
    order: 4,
  },
];

export const selectedWorks = videos
  .filter((video) => video.selectedWork)
  .sort((a, b) => a.order - b.order);
