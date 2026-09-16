import type { Metadata } from "next";

import Container from "@/components/ui/Container";

import Button from "@/components/ui/Button";



export const metadata: Metadata = {

  title:
    "Urban Public Spaces | AI Public Safety Solutions | Youyang Intelligent Control",

  description:
    "Youyang Intelligent Control provides AI-powered intelligent sensing solutions for urban public spaces, supporting crowd monitoring, abnormal activity detection, emergency response, and public safety management.",

};


const challenges = [
  "Crowd management in large public areas",
  "Difficulty detecting abnormal activities in real time",
  "Limited awareness caused by traditional monitoring blind spots",
  "Need for faster emergency response and public safety management",
];


const capabilities = [
  "Crowd-density monitoring and abnormal gathering alerts",
  "Fall and loitering detection",
  "Dangerous-object recognition",
  "Wide-area intelligent perception",
  "Real-time AI-assisted security analysis",
];


const applications = [
  "City squares",
  "Sports venues",
  "Urban parks",
  "Municipal streets",
];


export default function UrbanPublicSpacesPage() {

  return (

    <main>


      {/* Hero */}

      <section className="relative overflow-hidden bg-space-navy py-24 text-white">

        <Container>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">


            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-tech-cyan">
                Industry Solution
              </p>


              <h1 className="mt-5 text-5xl font-bold leading-tight">

                Urban Public Spaces

              </h1>


              <p className="mt-6 text-lg leading-relaxed text-slate-300">

                Intelligent visual sensing solutions for civic spaces,
                public venues, and urban environments requiring
                continuous awareness and efficient safety management.

              </p>


              <div className="mt-8">

                <Button href="/contact">
                  Request Demo →
                </Button>

              </div>

            </div>



            <div className="overflow-hidden rounded-3xl">

              <img
                src="/solutions/urban-public-space.jpg"
                alt="Urban Public Spaces"
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


          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-text-muted">

            Urban public spaces require intelligent monitoring
            capabilities to maintain safety, improve emergency
            response efficiency, and understand complex crowd
            environments. Youyang Intelligent Control combines
            panoramic sensing and AI-powered perception technology
            to provide continuous visual awareness across large
            public areas.

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


            {challenges.map((item) => (

              <div
                key={item}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >

                <p className="font-medium text-navy">
                  ✓ {item}
                </p>

              </div>

            ))}


          </div>


        </Container>

      </section>





      {/* Intelligent Capabilities */}

      <section className="py-20">

        <Container>


          <h2 className="text-3xl font-bold text-navy">
            Intelligent Capabilities
          </h2>


          <div className="mt-10 grid gap-6 md:grid-cols-2">


            {capabilities.map((item) => (

              <div
                key={item}
                className="rounded-2xl border p-7"
              >

                <h3 className="font-bold text-navy">
                  {item}
                </h3>

              </div>

            ))}


          </div>


        </Container>

      </section>





      {/* Application Areas */}

      <section className="bg-gray-bg py-20">

        <Container>


          <h2 className="text-3xl font-bold text-navy">
            Application Areas
          </h2>


          <div className="mt-8 grid gap-5 md:grid-cols-2">


            {applications.map((item) => (

              <div
                key={item}
                className="rounded-xl bg-white p-6 font-semibold text-navy"
              >

                ✓ {item}

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


            <div className="rounded-2xl bg-gray-bg p-7">

              <h3 className="text-xl font-bold text-navy">
                360 Sentinel
              </h3>

              <p className="mt-3 text-text-muted">
                Wide-area panoramic perception with AI-powered
                intelligent recognition.
              </p>

            </div>



            <div className="rounded-2xl bg-gray-bg p-7">

              <h3 className="text-xl font-bold text-navy">
                Dome Watch
              </h3>

              <p className="mt-3 text-text-muted">
                Intelligent panoramic monitoring for complex scenes.
              </p>

            </div>



            <div className="rounded-2xl bg-gray-bg p-7">

              <h3 className="text-xl font-bold text-navy">
                Wide-area Guardian
              </h3>

              <p className="mt-3 text-text-muted">
                Large-scale situation awareness solution.
              </p>

            </div>


          </div>


        </Container>

      </section>





      {/* CTA */}

      <section className="pb-20">

        <Container>


          <div className="rounded-3xl bg-navy p-10 text-white">


            <h2 className="text-3xl font-bold">
              Build Safer Urban Environments
            </h2>


            <p className="mt-4 text-slate-300">

              Deploy intelligent perception solutions for
              modern public safety management.

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