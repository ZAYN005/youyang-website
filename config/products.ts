export interface Product {

  name: string;

  model: string;

  description: string;

  image: string;

  link: string;

}



export const products: Product[] = [

  {

    name: "360 Sentinel",

    model: "YYZK-Sentry-6L-V1.0",

    description:
      "All-scenario intelligent surveillance camera based on compound-eye imaging technology, delivering panoramic perception and intelligent recognition.",

    image: "/products/360-sentinel.png",

    link: "/products/360-sentinel",

  },


  {

    name: "Dome Watch",

    model: "YYZK-SkyView-6L-V1.0",

    description:
      "Panoramic monitoring camera designed for intelligent scene awareness with edge AI recognition capabilities.",

    image: "/products/dome-watch.png",

    link: "/products/dome-watch",

  },


  {

    name: "Wide-area Guardian",

    model: "YYZK-PANO-52L-V1.0",

    description:
      "Wide-area situation awareness camera integrating panoramic imaging, AI recognition, and intelligent perception technology.",

    image: "/products/wide-area-guardian.jpg",

    link: "/products/wide-area-guardian",

  },

];