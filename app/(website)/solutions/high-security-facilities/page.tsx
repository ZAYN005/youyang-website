import type { Metadata } from "next";

import Container from "@/components/ui/Container";

import Button from "@/components/ui/Button";



export const metadata: Metadata = {

  title:
    "High-Security Facilities | AI Security Monitoring Solutions | Youyang Intelligent Control",

  description:
    "Youyang Intelligent Control provides AI-powered intelligent sensing solutions for high-security facilities, supporting perimeter protection, behavior analysis, critical asset monitoring, and advanced security management.",

};


const challenges = [
  "Protecting sensitive areas from unauthorized access",
  "Monitoring complex security environments continuously",
  "Reducing blind spots in traditional surveillance systems",
  "Improving response efficiency for security events",
];


const capabilities = [
  "Perimeter intrusion detection",
  "AI-powered behavior analysis",
  "Wide-area security monitoring",
  "Critical asset protection",
  "Intelligent situation awareness",
];


const applications = [
  "Museums",
  "Archives",
  "Government facilities",
  "High-security protected areas",
];


export default function HighSecurityPage() {

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
                High-Security Facilities
              </h1>


              <p className="mt-6 text-lg text-slate-300">

                Advanced intelligent sensing solutions designed
                for sensitive environments requiring reliable
                security protection and continuous monitoring.

              </p>


              <div className="mt-8">

                <Button href="/contact">
                  Request Demo →
                </Button>

              </div>


            </div>


            <div className="overflow-hidden rounded-3xl">

              <img
                src="/solutions/high-security.jpg"
                alt="High Security Facility"
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

            High-security environments require accurate
            perception, rapid response, and reliable protection.
            Youyang intelligent sensing systems combine
            panoramic imaging and AI analysis to provide
            continuous security awareness.

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
              Strengthening Security Through Intelligence
            </h2>


            <p className="mt-4 text-slate-300">

              Deploy intelligent perception technology for
              advanced security management.

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