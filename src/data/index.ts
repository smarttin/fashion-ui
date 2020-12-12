// slides info
export const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description: 'Confused about your outfit? Don’t worry! Find the best outfit here!',
    color: '#BFEAF5',
    picture: {
      src: require('../../assets/images/1.png'),
      width: 2513,
      height: 3744,
    },
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: '#BEECC4',
    picture: {
      src: require('../../assets/images/2.png'),
      width: 2791,
      height: 3744,
    },
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your Way',
    description: ' Create your individual & unique style and look amazing everyday',
    color: '#FFE4D9',
    picture: {
      src: require('../../assets/images/3.png'),
      width: 2738,
      height: 3244,
    },
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Feel Good',
    description: 'Discover the latest trends in fashion and explore your personality',
    color: '#FFDDDD',
    picture: {
      src: require('../../assets/images/4.png'),
      width: 1757,
      height: 2551,
    },
  },
];

export const welcomePicture = {
  src: require('../../assets/images/5.png'),
  width: 3383,
  height: 5074,
};

const slidePictures = slides.map((slide) => slide.picture.src);
export const authAssets = [welcomePicture.src, ...slidePictures];
