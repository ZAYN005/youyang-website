import type { Metadata } from "next";

import Container from "@/components/ui/Container";

import Button from "@/components/ui/Button";



export const metadata: Metadata = {

  title:
    "Campuses & Educational Institutions | AI Safety Solutions | Youyang Intelligent Control",

  description:
    "Youyang Intelligent Control provides AI-powered intelligent sensing solutions for campuses and educational institutions, supporting safety monitoring, abnormal event detection, and intelligent facility protection.",

};


const challenges = [
  "Ensuring safety across large campus environments",
  "Difficulty monitoring multiple areas simultaneously",
  "Need for faster response to abnormal events",
  "Protecting students, staff, and campus facilities",
];


const capabilities = [
  "Campus-wide intelligent monitoring",
  "Perimeter intrusion detection",
  "Abnormal behavior recognition",
  "Wide-area situation awareness",
  "AI-assisted security management",
];


const applications = [
  "Universities",
  "Schools",
  "Training institutions",
  "Educational campuses",
];


export default function CampusesPage() {

  return (

    <main>


      {/* Hero */}

      <section className="bg-space-navy py-24 text-white">

        <Container>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">


            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-tech-cyan">
                Industry Solution
              </p>


              <h1 className="mt-5 text-5xl font-bold">
                Campuses & Educational Institutions
              </h1>


              <p className="mt-6 text-lg leading-relaxed text-slate-300">

                Intelligent sensing solutions designed to create
                safer learning environments through continuous
                monitoring and AI-powered security awareness.

              </p>


              <div className="mt-8">

                <Button href="/contact">
                  Request Demo →
                </Button>

              </div>

            </div>



            <div className="overflow-hidden rounded-3xl">

              <img
                src="/solutions/campus.jpg"
                alt="Campus Security"
                className="h-[420px] w-full object-cover"
              />

            </div>


          </div>

        </Container>

      </section>





      {/* Overview */}

      <section className="py-20">

        <Container>


          <h2 className="text-3xl font-bold text-navy">
            Solution Overview
          </h2>


          <p className="mt-6 max-w-4xl text-lg text-text-muted">

            Educational institutions require reliable security
            systems to protect students, staff, and campus
            infrastructure. Youyang intelligent perception
            technology provides continuous monitoring,
            intelligent analysis, and rapid awareness of
            security events.

          </p>


        </Container>

      </section>





      {/* Challenges */}

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





      {/* Capabilities */}

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





      {/* Applications */}

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





      {/* Products */}

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





      {/* CTA */}

      <section className="pb-20">

        <Container>


          <div className="rounded-3xl bg-navy p-10 text-white">


            <h2 className="text-3xl font-bold">
              Building Safer Learning Environments
            </h2>


            <p className="mt-4 text-slate-300">

              Improve campus security with intelligent
              perception and AI-powered monitoring solutions.

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