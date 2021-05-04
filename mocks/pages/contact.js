const copy = {
  ru: {
    email: "Для сотрудничества",
  },
  en: {
    email: "Cooperation",
  },
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
      component: "ContactsBlock",
      content: {
        socials: [
          {
            caption: "Vk",
            url: "https://vk.com/namedvicemusic",
          },
          {
            caption: "Spotify",
            url: "https://open.spotify.com/artist/08xJNDoTyqvDkHXMUP2Tc8",
          },
          {
            caption: "Youtube",
            url:
              "https://vk.com/away.php?to=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCy3b59BmaO87KiN5b49iggA%2Ffeatured&cc_key=",
          },
          {
            caption: "Instagram",
            url: "https://www.instagram.com/namedvice/",
          },
          {
            caption: "Yandex Music",
            url: "https://music.yandex.ru/artist/9998143",
          },
          {
            caption: "Apple Music",
            url: "https://music.apple.com/us/artist/namedvice/1531866825",
          },
        ],
        contacts: {
          blocks: [
            {
              title: copy.email,
              items: [
                {
                  content: "namedvicemusic@gmail.com",
                },
              ],
            },
          ],
        },
      },
    },
  ],
});

export default (lang) => {
  return data(copy[lang]);
};
