import type { Metadata } from "next";

import Link from "next/link";

import Container from "@/components/ui/Container";

import Button from "@/components/ui/Button";

export const metadata: Metadata = {

  title:
    "AI Intelligent Vision Solutions | Public Safety, Transportation & Smart City Applications | Youyang Intelligent Control",

  description:
    "Explore Youyang Intelligent Control's intelligent vision solutions for urban public spaces, transportation hubs, critical infrastructure, healthcare, high-security facilities, and industrial environments.",

};

const solutions = [

  {
    title: "Urban Public Spaces",
    image: "/solutions/plaza.png",
    description:
      "Intelligent visual sensing solutions designed for civic spaces, public venues, and urban environments requiring continuous safety awareness.",
    coverage:
      "Civic squares, sports venues, city parks, municipal streets",
    value:
      "Supports crowd management, abnormal activity detection, emergency response, and intelligent public safety monitoring.",
    features: [
      "Crowd-density monitoring",
      "Abnormal behavior detection",
      "AI-powered situation awareness",
    ],
    link: "/solutions/urban-public-spaces",
  },


  {
    title: "Transportation Hubs & Critical Sites",
    image: "/solutions/airport.png",
    description:
      "Advanced perception systems for airports, railway stations, metro stations, and other high-traffic transportation environments.",
    coverage:
      "Airports, railway stations, metro stations, coach stations",
    value:
      "Provides intelligent monitoring, restricted-area protection, personnel tracking, and operational safety management.",
    features: [
      "Restricted-area intrusion detection",
      "Personnel trajectory analysis",
      "Large-area monitoring",
    ],
    link: "/solutions/transportation-hubs-critical-sites",
  },


  {
    title: "Campuses & Educational Institutions",
    image: "/solutions/campus.jpg",
    description:
      "Intelligent protection solutions supporting safer learning environments through proactive visual awareness.",
    coverage:
      "Kindergartens, schools, universities",
    value:
      "Enhances campus security through perimeter protection, abnormal event detection, and intelligent safety management.",
    features: [
      "Campus perimeter protection",
      "Safety event detection",
      "Intelligent monitoring",
    ],
    link: "/solutions/campuses-educational-institutions",
  },


  {
    title: "Healthcare & Senior Care Facilities",
    image: "/solutions/healthcare.jpg",
    description:
      "Reliable intelligent monitoring solutions for healthcare facilities and environments requiring continuous protection.",
    coverage:
      "Hospitals, clinics, senior care facilities",
    value:
      "Supports critical-area monitoring, patient safety, emergency alerts, and intelligent healthcare protection.",
    features: [
      "Critical-area monitoring",
      "Safety risk detection",
      "Patient protection awareness",
    ],
    link: "/solutions/healthcare-senior-care",
  },


  {
    title: "High-Security Facilities",
    image: "/solutions/high-security.jpg",
    description:
      "Advanced sensing solutions designed for sensitive environments requiring strict security management.",
    coverage:
      "Prisons, detention centers, museums, archives, libraries",
    value:
      "Provides intrusion detection, behavior analysis, and multi-layer intelligent security protection.",
    features: [
      "Intrusion detection",
      "Behavior analysis",
      "Asset protection",
    ],
    link: "/solutions/high-security-facilities",
  },


  {
    title: "Commercial & Industrial Worksites",
    image: "/solutions/industrial-worksite.jpg",
    description:
      "AI-powered visual intelligence solutions for factories, logistics parks, construction sites, and industrial environments.",
    coverage:
      "Factories, construction sites, logistics parks, commercial facilities",
    value:
      "Improves production safety, operational efficiency, and asset protection through intelligent perception.",
    features: [
      "Safety compliance monitoring",
      "Hazard detection",
      "Industrial security awareness",
    ],
    link: "/solutions/commercial-industrial-worksites",
  },

];



const products = [
  {
    name: "360 Sentinel",
    image: "/products/360-sentinel.png",
    description:
      "Compound-eye panoramic sensing system providing wide-area intelligent perception.",
    link: "/products/360-sentinel",
  },

  {
    name: "Dome Watch",
    image: "/products/dome-watch.png",
    description:
      "Panoramic monitoring system combining imaging technology and AI recognition.",
    link: "/products/dome-watch",
  },

  {
    name: "Wide-area Guardian",
    image: "/products/wide-area-guardian.jpg",
    description:
      "Large-scale intelligent sensing solution for complex monitoring environments.",
    link: "/products/wide-area-guardian",
  },
];



export default function SolutionsPage() {

  return (

    <main>


      {/* Hero */}

      <section className="bg-space-navy py-24 text-white">

        <Container>


          <p className="text-sm uppercase tracking-[0.3em] text-tech-cyan">
            Industry Solutions
          </p>


          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight">

            Intelligent Vision Solutions
            Across Critical Environments

          </h1>


          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">

            Youyang Intelligent Control combines panoramic sensing,
            edge AI computing, and intelligent recognition technology
            to support security, transportation, healthcare,
            education, and industrial applications.

          </p>


        </Container>

      </section>





      {/* Solutions */}

      <section className="py-20">

        <Container>


          <div className="grid gap-10 lg:grid-cols-2">


            {solutions.map((solution,index)=>(


              <Link
                key={solution.title}
                href={solution.link}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >


                <div className="h-72 overflow-hidden">

                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>




                <div className="p-8">


                  <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">
                    0{index+1} / Solution
                  </p>


                  <h2 className="mt-4 text-3xl font-bold text-navy">

                    {solution.title}

                  </h2>


                  <p className="mt-4 text-text-muted">

                    {solution.description}

                  </p>



                  <div className="mt-6 border-t pt-5">


                    <h3 className="font-bold text-navy">
                      Coverage
                    </h3>


                    <p className="mt-2 text-sm text-text-muted">

                      {solution.coverage}

                    </p>


                  </div>



                  <div className="mt-5">


                    <h3 className="font-bold text-navy">
                      Core Value
                    </h3>


                    <p className="mt-2 text-sm text-text-muted">

                      {solution.value}

                    </p>


                  </div>



                  <ul className="mt-6 space-y-2 text-sm text-text-muted">

                    {solution.features.map(feature=>(

                      <li key={feature}>
                        ✓ {feature}
                      </li>

                    ))}

                  </ul>



                  <p className="mt-7 font-semibold text-brand-blue">

                    Explore Solution →

                  </p>



                </div>


              </Link>


            ))}


          </div>


        </Container>

      </section>






      {/* Architecture */}

      <section className="bg-gray-bg py-20">

        <Container>


          <div className="text-center">


            <p className="text-sm uppercase tracking-[0.3em] text-brand-blue">
              Intelligent Ecosystem
            </p>


            <h2 className="mt-4 text-4xl font-bold text-navy">

              Intelligent Perception Architecture

            </h2>


          </div>



          <div className="mt-12 rounded-3xl bg-white p-6 shadow-sm">

            <img
              src="/solutions/architecture.png"
              alt="Intelligent Perception Architecture"
              className="w-full object-contain"
            />

          </div>


        </Container>

      </section>





      {/* Products */}

      <section className="py-20">

        <Container>


          <h2 className="text-center text-4xl font-bold text-navy">

            Solutions Powered By Our Products

          </h2>



          <div className="mt-12 grid gap-8 md:grid-cols-3">


            {products.map(product=>(


              <Link
                key={product.name}
                href={product.link}
                className="rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl"
              >


                <img
                  src={product.image}
                  alt={product.name}
                  className="h-52 w-full object-contain"
                />


                <h3 className="mt-6 text-2xl font-bold text-navy">

                  {product.name}

                </h3>


                <p className="mt-3 text-text-muted">

                  {product.description}

                </p>


              </Link>


            ))}


          </div>


        </Container>

      </section>






      {/* CTA */}

      <section className="pb-20">

        <Container>


          <div className="rounded-3xl bg-navy p-10 text-white">


            <h2 className="text-3xl font-bold">

              Build Intelligent Systems For Your Environment

            </h2>


            <p className="mt-4 text-slate-300">

              Contact Youyang Intelligent Control for customized
              intelligent sensing solutions.

            </p>


            <div className="mt-6">

              <Button href="/contact">
                Request Demo →
              </Button>

            </div>


          </div>


        </Container>

      </section>


    </main>

  );

}