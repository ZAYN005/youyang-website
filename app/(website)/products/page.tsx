import type { Metadata } from "next";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { products } from "@/config/products";



export const metadata: Metadata = {

  title:
    "AI Intelligent Vision Products | 360 Sentinel, Dome Watch & Wide-area Guardian",

  description:
    "Explore Youyang Intelligent Control's intelligent vision products including 360 Sentinel, Dome Watch, and Wide-area Guardian panoramic sensing systems designed for large-area monitoring and AI perception applications.",

};


export default function ProductsPage() {

  return (

    <section className="bg-gray-bg py-20">


      <Container>


        {/* Header */}

        <div className="max-w-3xl">


          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue">
            Intelligent Sensing Products
          </p>



          <h1 className="mt-4 text-4xl font-bold text-navy lg:text-5xl">

            Advanced Panoramic
            Intelligence Systems

          </h1>



          <p className="mt-6 text-lg leading-relaxed text-text-muted">

            Youyang intelligent sensing platforms combine
            compound-eye imaging technology, edge AI computing,
            and panoramic perception for complex environments.

          </p>


        </div>





        {/* Products */}

        <div className="mt-14 grid gap-10 lg:grid-cols-3">



          {products.map((product) => (


            <Link
              key={product.name}
              href={product.link}
              className="group rounded-3xl bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl"
            >



              {/* Image */}

              <div className="flex h-[260px] items-center justify-center rounded-2xl bg-gray-50 p-8">


                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                />


              </div>





              {/* Content */}

              <h2 className="mt-8 text-2xl font-bold text-navy">

                {product.name}

              </h2>




              <p className="mt-2 text-sm text-brand-blue">

                {product.model}

              </p>





              <p className="mt-5 leading-relaxed text-text-muted">

                {product.description}

              </p>





              <p className="mt-6 font-semibold text-brand-blue">

                Explore Product →

              </p>



            </Link>


          ))}



        </div>



      </Container>


    </section>

  );

}