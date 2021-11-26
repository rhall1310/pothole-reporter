export const state = () => ({
  categories: [
    {
      category: "footways",
      text: "Footways",
      link: "footways",
      img: "/footway-icon.png",
      subCategories: [
        {
          category: "pothole",
          text: "Pothole",
          link: "footways/pothole",
        },
        {
          category: "other",
          text: "Other Footway Issue",
          link: "footways/other",
        },
      ],
    },
    {
      category: "roads",
      text: "Roads",
      link: "roads",
      img: "/road-icon.png",
      subCategories: [
        {
          category: "pothole",
          text: "Pothole",
          link: "footways/pothole",
        },
        {
          category: "damage",
          text: "General road damage",
          link: "roads/damage",
        },
        {
          category: "other",
          text: "Other Road Issue",
          link: "roads/other",
        },
      ],
    },
    {
      category: "drainage",
      text: "Drainage",
      link: "drainage",
      img: "/drainage-icon.png",
      subCategories: [
        {
          category: "blocked",
          text: "Blocked drain",
          link: "drainage/blocked",
        },
        {
          category: "other",
          text: "Other Drainage Issue",
          link: "drainage/other",
        },
      ],
    },
    {
      category: "streetlighting",
      text: "Street Lighting",
      link: "streetlighting",
      img: "streetlight-icon.png",
      subCategories: [
        {
          category: "broken",
          text: "Broken Streetlight",
          link: "streetlighting/broken",
        },
        {
          category: "other",
          text: "Other Street Light Issue",
          link: "streetlighting/other",
        },
      ],
    },
  ],
});
