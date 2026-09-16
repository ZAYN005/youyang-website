export interface Product {

  key: string;

  name: string;

  model: string;

  image: string;

  link: string;

}


export const products: Product[] = [

  {
    key: "sentinel",
    name: "360 Sentinel",
    model: "YYZK-Sentry-6L-V1.0",
    image: "/products/360-sentinel.png",
    link: "/products/360-sentinel",
  },


  {
    key: "dome",
    name: "Dome Watch",
    model: "YYZK-SkyView-6L-V1.0",
    image: "/products/dome-watch.png",
    link: "/products/dome-watch",
  },


  {
    key: "guardian",
    name: "Wide-area Guardian",
    model: "YYZK-PANO-52L-V1.0",
    image: "/products/wide-area-guardian.jpg",
    link: "/products/wide-area-guardian",
  }

];