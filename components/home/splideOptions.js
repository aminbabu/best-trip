export const options = {
  type: "loop",
  perPage: 1.5,
  perMove: 1,
  gap: 16,
  arrows: false,
  pagination: false,
  autoplay: true,
  interval: 3000,
  speed: 1000,
  mediaQuery: "min",
  breakpoints: {
    640: {
      perPage: 2.5,
    },
    768: {
      perPage: 3.5,
    },
    1024: {
      perPage: 4,
      arrows: true,
    },
    1280: {
      gap: 32,
    },
  },
};
