import type { Metadata } from "next";

import Container from "@/components/ui/Container";

import Button from "@/components/ui/Button";



export const metadata: Metadata = {

  title:
    "Commercial & Industrial Worksites | AI Safety Monitoring Solutions | Youyang Intelligent Control",

  description:
    "Youyang Intelligent Control provides AI-powered intelligent sensing solutions for commercial and industrial worksites, supporting safety monitoring, hazard detection, operational visibility, and large-area perception.",

};

const challenges = [
  "Maintaining safety across complex industrial environments",
  "Monitoring large operational areas efficiently",
  "Reducing workplace risks and unsafe activities",
  "Improving security and operational visibility",
];


const capabilities = [
  "Industrial safety monitoring",
  "Hazard detection",
  "AI-powered visual analysis",
  "Large-area perception",
  "Operational environment awareness",
];


const applications = [
  "Factories",
  "Logistics parks",
  "Construction sites",
  "Industrial facilities",
];


export default function IndustrialPage() {

  return (

    <main>


      <section className="bg-space-navy py-24 text-white">

        <Container>


          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">


            <div>


              <p className="text-sm uppercase tracking-[0.3em] text-tech-cyan">
                Industry Solution
              </p>


              <h1 className="mt-5 text-5xl font-bold">
                Commercial & Industrial Worksites
              </h1>


              <p className="mt-6 text-lg text-slate-300">

                AI-powered visual intelligence solutions for
                factories, logistics facilities, construction
                sites, and industrial environments.

              </p>


              <div className="mt-8">

                <Button href="/contact">
                  Request Demo →
                </Button>

              </div>


            </div>



            <div className="overflow-hidden rounded-3xl">

              <img
                src="/solutions/industrial-worksite.jpg"
                alt="Industrial Worksite"
                className="h-[420px] w-full object-cover"
              />

            </div>


          </div>


        </Container>

      </section>





      <section className="py-20">

        <Container>

          <h2 className="text-3xl font-bold text-navy">
            Solution Overview
          </h2>


          <p className="mt-6 max-w-4xl text-lg text-text-muted">

            Industrial environments require reliable monitoring
            systems to improve safety, protect assets, and
            optimize operations. Youyang intelligent perception
            solutions provide continuous visual awareness
            through AI-powered monitoring technology.

          </p>


        </Container>

      </section>





      <section className="bg-gray-bg py-20">

        <Container>

          <h2 className="text-3xl font-bold text-navy">
            Key Challenges
          </h2>


          <div className="mt-10 grid gap-5 md:grid-cols-2">


            {challenges.map(item => (

              <div
                key={item}
                className="rounded-2xl bg-white p-6"
              >

                ✓ {item}

              </div>

            ))}


          </div>


        </Container>

      </section>





      <section className="py-20">

        <Container>


          <h2 className="text-3xl font-bold text-navy">
            Intelligent Capabilities
          </h2>


          <div className="mt-10 grid gap-6 md:grid-cols-2">


            {capabilities.map(item => (

              <div
                key={item}
                className="rounded-2xl border p-6 font-semibold text-navy"
              >

                ✓ {item}

              </div>

            ))}


          </div>


        </Container>

      </section>





      <section className="bg-gray-bg py-20">

        <Container>


          <h2 className="text-3xl font-bold text-navy">
            Application Areas
          </h2>


          <div className="mt-8 grid gap-5 md:grid-cols-2">


            {applications.map(item => (

              <div
                key={item}
                className="rounded-xl bg-white p-6 font-semibold"
              >

                {item}

              </div>

            ))}


          </div>


        </Container>

      </section>





      <section className="py-20">

        <Container>


          <h2 className="text-3xl font-bold text-navy">
            Recommended Products
          </h2>


          <div className="mt-8 grid gap-6 md:grid-cols-3">


            {[
              "360 Sentinel",
              "Dome Watch",
              "Wide-area Guardian",
            ].map(item => (

              <div
                key={item}
                className="rounded-2xl bg-gray-bg p-7 font-bold text-navy"
              >

                {item}

              </div>

            ))}


          </div>


        </Container>

      </section>





      <section className="pb-20">

        <Container>


          <div className="rounded-3xl bg-navy p-10 text-white">


            <h2 className="text-3xl font-bold">
              Smarter Industrial Safety With AI
            </h2>


            <p className="mt-4 text-slate-300">

              Improve workplace safety and operational
              visibility with intelligent sensing solutions.

            </p>


            <div className="mt-6">

              <Button href="/contact">
                Contact Us →
              </Button>

            </div>


          </div>


        </Container>

      </section>


    </main>

  );

}