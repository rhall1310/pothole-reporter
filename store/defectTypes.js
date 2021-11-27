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
          img: "/pothole-icon.png",
        },
        {
          category: "other",
          text: "Other Footway Issue",
          link: "footways/other",
          img: "/other-icon.png",
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
          img: "/pothole-icon.png",
        },
        {
          category: "damage",
          text: "General road damage",
          link: "roads/damage",
          img: "/road-damage-icon.png",
        },
        {
          category: "other",
          text: "Other Road Issue",
          link: "roads/other",
          img: "/other-icon.png",
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
          img: "/blocked-icon.png",
        },
        {
          category: "other",
          text: "Other Drainage Issue",
          link: "/drainage/other",
          img: "/other-icon.png",
        },
      ],
    },
    {
      category: "streetlighting",
      text: "Street Lighting",
      link: "streetlighting",
      img: "/streetlight-icon.png",
      subCategories: [
        {
          category: "broken",
          text: "Broken Streetlight",
          link: "streetlighting/broken",
          img: "/broken-light-icon.png",
        },
        {
          category: "other",
          text: "Other Street Light Issue",
          link: "streetlighting/other",
          img: "/other-icon.png",
        },
      ],
    },
  ],
});
