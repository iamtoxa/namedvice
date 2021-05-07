
const copy = {
  ru: {
    alertBtn_text: "Новый сингл"
  },
  en: {
    alertBtn_text: 'New single'
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
  },
  
  content: [
    {
      component: 'AlertBlock',
      content: {
        icon: '/images/fire.svg',
        text: copy.alertBtn_text,
        url: '/music'
      }
    }
  ]
});

export default (lang) => {
  return data(copy[lang]);
};