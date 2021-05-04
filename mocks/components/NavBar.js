const copy = {
  ru: {
    music: 'Музыка',
    about: 'Обо мне',
    contact: 'Контакты',
    gallery: 'Фото'
  },
  en: {
    music: 'Music',
    about: 'About',
    contact: 'Contacts',
    gallery: 'Gallery'
  },
};

const data = (copy) => ({
  items: [
    {
      caption: copy.music,
      link: '/music'
    },
    {
      caption: copy.about,
      link: '/about'
    },
    {
      caption: copy.contact,
      link: '/contact'
    },
    {
      caption: copy.gallery,
      link: '/gallery'
    }
  ]
});

export default (lang) => {
  return data(copy[lang]);
};
