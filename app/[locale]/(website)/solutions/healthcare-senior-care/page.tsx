import type { Metadata } from "next";

import Container from "@/components/ui/Container";

import Button from "@/components/ui/Button";



export const metadata: Metadata = {

  title:
    "Healthcare & Senior Care Facilities | AI Monitoring Solutions | Youyang Intelligent Control",

  description:
    "Youyang Intelligent Control provides AI-powered intelligent sensing solutions for healthcare and senior care facilities, supporting continuous monitoring, abnormal event detection, patient safety, and facility protection.",

};


const challenges = [
  "Maintaining safety in sensitive healthcare environments",
  "Monitoring critical areas continuously",
  "Responding quickly to unexpected situations",
  "Protecting patients, visitors, and staff",
];


const capabilities = [
  "Critical-area intelligent monitoring",
  "Abnormal event detection",
  "AI-based situation awareness",
  "Large-area visual perception",
  "Security management support",
];


const applications = [
  "Hospitals",
  "Medical centers",
  "Clinics",
  "Senior care facilities",
];


export default function HealthcarePage() {

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

                Healthcare & Senior Care Facilities

              </h1>


              <p className="mt-6 text-lg text-slate-300">

                Intelligent monitoring solutions designed for
                healthcare environments requiring reliable
                awareness, safety management, and continuous
                protection.

              </p>


              <div className="mt-8">

                <Button href="/contact">
                  Request Demo →
                </Button>

              </div>


            </div>



            <div className="rounded-3xl overflow-hidden">

              <img
                src="/solutions/healthcare.jpg"
                alt="Healthcare Facility"
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

            Healthcare and senior care facilities require
            dependable monitoring systems to support safety,
            operational management, and emergency response.
            Youyang intelligent sensing solutions provide
            comprehensive visual awareness through AI-powered
            perception technology.

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
              Intelligent Healthcare Protection
            </h2>


            <p className="mt-4 text-slate-300">

              Enhance healthcare safety through intelligent
              sensing and visual awareness technology.

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