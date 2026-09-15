import type { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {


  const baseUrl = "https://yyteck.cn";


  return [

    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },


    {
      url: `${baseUrl}/company`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },


    {
      url: `${baseUrl}/company/technology`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },



    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },


    {
      url: `${baseUrl}/products/360-sentinel`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },


    {
      url: `${baseUrl}/products/dome-watch`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },


    {
      url: `${baseUrl}/products/wide-area-guardian`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },



    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },


    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },


    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },


  ];

}