import Link from "next/link";
import Container from "@/components/ui/Container";
import { products } from "@/config/products";


export default function Products() {

  const mainProduct = products[0];
  const otherProducts = products.slice(1);


  return (

    <section
      id="products"
      className="bg-gray-bg py-20"
    >

      <Container>


        {/* Header */}

        <div className="max-w-2xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue">
            Intelligent Sensing Products
          </p>


          <h2 className="mt-4 text-3xl font-bold text-navy lg:text-4xl">

            Advanced Panoramic Systems
            For Wide-Area Intelligence

          </h2>


          <p className="mt-5 text-lg text-text-muted">

            High-performance sensing platforms combining
            compound-eye imaging, AI recognition,
            and intelligent perception technologies.

          </p>


        </div>





        {/* Featured Product */}

        <div className="mt-12 overflow-hidden rounded-3xl bg-white p-8 shadow-sm lg:p-10">


          <div className="grid items-center gap-10 lg:grid-cols-2">



            {/* Information */}

            <div>


              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">

                01 / Flagship System

              </p>



              <h3 className="mt-4 text-4xl font-bold text-navy">

                {mainProduct.name}

              </h3>



              <p className="mt-2 text-sm text-text-muted">

                {mainProduct.model}

              </p>




              <p className="mt-6 text-lg leading-relaxed text-text-muted">

                {mainProduct.description}

              </p>





              <div className="mt-8">


                <p className="font-semibold text-navy">

                  Key Capabilities

                </p>



                <ul className="mt-4 space-y-2 text-text-muted">

                  <li>✓ Panoramic perception</li>
                  <li>✓ AI-powered recognition</li>
                  <li>✓ Wide-area monitoring</li>
                  <li>✓ Intelligent situation awareness</li>

                </ul>


              </div>





              <Link
                href={mainProduct.link}
                className="mt-8 inline-flex rounded-md bg-gold px-6 py-3 font-semibold text-navy transition hover:opacity-90"
              >

                Explore Product →

              </Link>


            </div>







            {/* Product Image */}

            <div className="flex justify-center">


              <div className="flex h-[380px] w-[380px] items-center justify-center rounded-3xl bg-gray-50 p-10">


                <img
                  src={mainProduct.image}
                  alt={mainProduct.name}
                  className="h-full w-full object-contain"
                />


              </div>


            </div>



          </div>


        </div>







        {/* Other Products */}

        <div className="mt-10 grid gap-8 lg:grid-cols-2">


          {otherProducts.map((product, index) => (


            <Link
              key={product.name}
              href={product.link}
              className="rounded-2xl bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >



              <div className="mb-6 flex h-[220px] items-center justify-center rounded-xl bg-gray-50 p-8">


                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />


              </div>





              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">

                0{index + 2} / System

              </p>





              <h3 className="mt-4 text-2xl font-bold text-navy">

                {product.name}

              </h3>





              <p className="mt-2 text-sm text-text-muted">

                {product.model}

              </p>





              <p className="mt-4 leading-relaxed text-text-muted">

                {product.description}

              </p>





              <p className="mt-6 text-sm font-semibold text-brand-blue">

                Explore Product →

              </p>



            </Link>


          ))}


        </div>




      </Container>


    </section>

  );

}