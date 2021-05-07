const copy = {
  ru: {
    button_video: "Смотреть клип",
    spotyfy_btn: "Открыть в Spotify",
    prop_name: 'Название',
    prop_album: 'Альбом',
    prop_year: 'Год выпуска'
  },
  en: {
    button_video: 'Watch the clip',
    spotyfy_btn: "Open with Spotify",
    prop_name: 'Name',
    prop_album: 'Album',
    prop_year: 'Year'
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
      component: "MusicBlock",
      content: {
        button: {
          caption: copy.spotyfy_btn
        },
        button_video: {
          caption: copy.button_video
        },
        playlist: [
          {
            caption: "Rebirth",
            slug: "rebirth",
            image: "/images/Tracks/rebirth.jpg",
            spotify_slug: "4GfwrzTviKyj1Ttb729Pws",
            info: [
              {
                label: copy.prop_name,
                value: "Rebirth",
              },
              {
                label: copy.prop_year,
                value: "2021",
              },
            ],
            video_url: 'https://youtu.be/c-gOgX9k6pM'
          },
          {
            caption: "Little Empire",
            slug: "little_empire",
            image: "/images/Tracks/namedvice.png",
            spotify_slug: "21WUzn13FnN3kHdDTTKc7d",
            info: [
              {
                label: copy.prop_name,
                value: "Little Empire",
              },
              {
                label: copy.prop_album,
                value: "The New Horizon",
              },
              {
                label: copy.prop_year,
                value: "2020",
              },
            ],
          },
          {
            caption: "The new Horizon",
            slug: "new_horizon",
            image: "/images/Tracks/namedvice.png",
            spotify_slug: "24Gdope7MwQmBSA3HDEDDm",
            info: [
              {
                label: copy.prop_name,
                value: "The new Horizon",
              },
              {
                label: copy.prop_album,
                value: "The New Horizon",
              },
              {
                label: copy.prop_year,
                value: "2020",
              },
            ],
          },
          {
            caption: "Próf",
            slug: "prof",
            image: "/images/Tracks/prof.png",
            spotify_slug: "55fGbM1jGiLZVJ0MWKagIw",
            info: [
              {
                label: copy.prop_name,
                value: "Próf",
              },
              {
                label: copy.prop_album,
                value: "Próf",
              },
              {
                label: copy.prop_year,
                value: "2020",
              },
            ],
          },
          {
            caption: "Emotions",
            slug: "emotions",
            image: "/images/Tracks/namedvice.png",
            spotify_slug: "5gQGp219NUE4uQsTxxmWXv",
            info: [
              {
                label: copy.prop_name,
                value: "Emotions",
              },
              {
                label: copy.prop_album,
                value: "The New Horizon",
              },
              {
                label: copy.prop_year,
                value: "2020",
              },
            ],
          },
        ],
      },
    },
  ],
});

export default (lang) => {
  return data(copy[lang]);
};
