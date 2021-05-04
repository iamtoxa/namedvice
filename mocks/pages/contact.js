import moment from "moment";

export default {
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
            url: "#",
          },
          {
            caption: "Spotify",
            url: "#",
          },
          {
            caption: "Youtube",
            url: "#",
          },
          {
            caption: "Instagram",
            url: "#",
          },
          {
            caption: "Soundcloud",
            url: "#",
          },
          {
            caption: "Facebook",
            url: "#",
          },
        ],
        contacts: {
          blocks: [{ title: "Для сотрудничества", items: [{
            content: "example@mail.com"
          }] }],
        },
      },
    },
  ],
};
