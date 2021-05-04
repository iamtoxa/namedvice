const copy = {
  ru: {
    title: 'Василий Неретин - молодой музыкант, более известный под псевдонимом Namedvice.',
    text: "Мне нравится создавать музыку. В поисках красивого звука я смешиваю даркфолк с электронной музыкой."+
    "\nНачал со школьной группы, давая несколько местных кавер-концертов. Потом поступил в университет и выиграл местный рок-фестиваль."+
    "\nВ юном возрасте я слушал Rammstein со своим братом, а чуть позже я открыл для себя Linkin Park. В целом, я вырос на тяжелой музыке, потому что я чувствую в ней больше эмоций и смысла. Наверное, это и привело меня туда, где я нахожусь теперь.",
  
    quote: 'Ничто так не трогает наши сердца, как наша история. Чем эти эмоции, которые мы получаем, глядя в прошлое. И эти эмоции я хочу ощутить на себе.'+
    '\nВы со мной?'
  },
  en: {
    title: 'Vasily (Namedvice) Neretin, Russian creator, composer, north-thinker. Writing dark-folk, experimental, indie. Solo.',

    text: "Started out with a school band, doing some local cover gigs. Then entered the university and won local rock-festival."+
    "\nThe idea of project is to mix dark folk motives and electronic music features.",

    quote: null
  },
};

const data = (copy) => ({
  Background: {
    src: [
      {
        media: 0,
        src: "/images/Background/image.png",
        type: 'image'
      },

    ],
    alt: "Namedvice",
  },

  content: [
    {
      component: 'AboutBlock',
      content: {
        blocks: [
          {
            className: 'title',
            content: copy.title
          },
          { 
            className: 'text',
            content: copy.text
          },
          {
            className: "quote",
            content: copy.quote
          }
        ]
      }
    }
  ] 
});

export default (lang) => {
  return data(copy[lang]);
};