
const copy = {
  ru: {
  },
  en: {
  },
};

const data = (copy) => ({
  Background: {
    src: [
      {
        media: 0,
        src: "/images/Background/video_bg_ed.mp4",
        type: 'video'
      },

    ],
    alt: "Namedvice",
  }
});

export default (lang) => {
  return data(copy[lang]);
};