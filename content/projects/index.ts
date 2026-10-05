export type ProjectCategory = "property-films" | "social-reels" | "agent-content";

export type Project = {
  id: string;
  location: string;
  category: ProjectCategory;
  thumbnail: string;
  video: string;
  videoType: "horizontal" | "vertical";
  featured: boolean;
  aerial: { thumbnail: string; video: string };
  social: { thumbnail: string; video: string };
};

export const projects: Project[] = [
  {
    id: "bom-jesus-braga",
    location: "Bom Jesus, Braga",
    category: "property-films",
    thumbnail: "/images/projects/bom-jesus-poster.jpeg",
    video: "/videos/bom-jesus-film.mp4",
    videoType: "horizontal",
    featured: true,
    aerial: {
      thumbnail: "/images/projects/bom-jesus-aerial-poster.png",
      video: "/videos/bom-jesus-aerial.mp4",
    },
    social: {
      thumbnail: "/images/projects/bom-jesus-social-poster.png",
      video: "/videos/bom-jesus-social.mp4",
    },
  },
];

export const featuredProject = projects.find((project) => project.featured)!;
