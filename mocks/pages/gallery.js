import fs from "fs";
const sizeOf = require('image-size')

var files = [];
const dir = fs.readdirSync('./public/images/Gallery')

files = dir.map(path => {
    const dimensions = sizeOf(`./public/images/Gallery/${path}`);
    return {
      src: `/images/Gallery/${path}`,
      width: dimensions.width,
      height: dimensions.height
    }
  });
console.log(files)

export default {
  Background: {
    src: [
      {
        src: "#2B2A26",
        type: 'color'
      },

    ],
    alt: "Namedvice",
  },

  
  content: [
    {
      component: 'GalleryBlock',
      content: {
        photos:[
          ...files
          // {
          //   src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
          //   width: 4,
          //   height: 3
          // },
          // {
          //   src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
          //   width: 1,
          //   height: 1
          // },
          // {
          //   src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
          //   width: 3,
          //   height: 4
          // },
          // {
          //   src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
          //   width: 3,
          //   height: 4
          // },
          // {
          //   src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
          //   width: 3,
          //   height: 4
          // },
          // {
          //   src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
          //   width: 4,
          //   height: 3
          // },
          // {
          //   src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
          //   width: 3,
          //   height: 4
          // },
          // {
          //   src: "https://source.unsplash.com/PpOHJezOalU/800x599",
          //   width: 4,
          //   height: 3
          // },
          // {
          //   src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
          //   width: 4,
          //   height: 3
          // },
          // {
          //   src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
          //   width: 3,
          //   height: 4
          // },
          // {
          //   src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
          //   width: 4,
          //   height: 3
          // },
          // {
          //   src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
          //   width: 4927,
          //   height: 1000
          // },
          // {
          //   src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
          //   width: 4,
          //   height: 3
          // },
          // {
          //   src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
          //   width: 4,
          //   height: 3
          // },
          // {
          //   src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
          //   width: 4,
          //   height: 3
          // },
          // {
          //   src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
          //   width: 4,
          //   height: 3
          // },
          // {
          //   src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
          //   width: 4,
          //   height: 3
          // }
        ]
      }
    }
  ]  
};
