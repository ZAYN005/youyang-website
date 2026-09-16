import type { Metadata } from "next";

import Link from "next/link";

import Container from "@/components/ui/Container";

import { products } from "@/config/products";

import { getTranslations, getLocale } from "next-intl/server";


export const metadata: Metadata = {

  title:
    "AI Intelligent Vision Products | 360 Sentinel, Dome Watch & Wide-area Guardian",

  description:
    "Explore Youyang Intelligent Control's intelligent vision products including panoramic sensing systems.",

};



export default async function ProductsPage() {


  const t = await getTranslations("products");

  const locale = await getLocale();



  return (

    <section className="bg-gray-bg py-20">


      <Container>



        {/* Header */}


        <div className="max-w-3xl">



          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue">

            {t("label")}

          </p>





          <h1 className="mt-4 text-4xl font-bold text-navy lg:text-5xl">

            {t("title")}

          </h1>





          <p className="mt-6 text-lg leading-relaxed text-text-muted">

            {t("description")}

          </p>



        </div>







        {/* Products */}


        <div className="mt-14 grid gap-10 lg:grid-cols-3">





          {products.map((product) => (



            <Link
  key={product.key}

              href={`/${locale}${product.link}`}

              className="group rounded-3xl bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl"

            >





              {/* Image */}


              <div className="flex h-[260px] items-center justify-center rounded-2xl bg-gray-50 p-8">



                <img

                  src={product.image}

                  alt={t(`${product.key}.name`)}

                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105"

                />



              </div>







              {/* Product Name */}



              <h2 className="mt-8 text-2xl font-bold text-navy">


                {t(`${product.key}.name`)}


              </h2>







              {/* Model */}



              <p className="mt-2 text-sm text-brand-blue">


                {product.model}


              </p>







              {/* Description */}



              <p className="mt-5 leading-relaxed text-text-muted">


                {t(`${product.key}.description`)}


              </p>







              {/* Button */}



              <p className="mt-6 font-semibold text-brand-blue">


                {t("explore")} →


              </p>






            </Link>



          ))}





        </div>





      </Container>



    </section>

  );

}