import fs from "fs";
const sizeOf = require("image-size");

var files = [];
const dir = fs.readdirSync("./public/images/Gallery");

files = dir.map((path) => {
  const dimensions = sizeOf(`./public/images/Gallery/${path}`);
  return {
    src: `/images/Gallery/${path}`,
    width: dimensions.width,
    height: dimensions.height,
  };
});

const copy = {
  ru: {},
  en: {},
};

const data = (copy) => ({
  Background: {
    src: [
      {
        src: "#2B2A26",
        type: "color",
      },
    ],
    alt: "Namedvice",
  },

  content: [
    {
      component: "GalleryBlock",
      content: {
        photos: [...files],
      },
    },
  ],
});

export default (lang) => {
  return data(copy[lang]);
};
