import type { Metadata } from "next";

import Container from "@/components/ui/Container";

import Button from "@/components/ui/Button";



export const metadata: Metadata = {

  title:
    "About Youyang Intelligent Control | AI Vision Technology Company",

  description:
    "Learn about Youyang Intelligent Control, an intelligent vision technology company developing panoramic sensing systems, AI recognition technologies, and advanced perception solutions.",

};


const capabilities = [
  {
    title: "Compound-Eye Imaging",
    description:
      "Advanced optical architecture enabling panoramic visual perception and wide-area monitoring.",
  },
  {
    title: "AI Recognition Technology",
    description:
      "Intelligent algorithms provide real-time recognition and situation awareness capabilities.",
  },
  {
    title: "Intelligent Sensing Systems",
    description:
      "Integrated sensing solutions combining imaging, AI computing, and intelligent perception.",
  },
];


export default function CompanyPage() {

  return (

    <main>


      {/* Hero */}

      <section className="bg-space-navy py-24 text-white">

        <Container>

          <p className="text-sm uppercase tracking-[0.3em] text-tech-cyan">
            About Youyang
          </p>


          <h1 className="mt-5 text-5xl font-bold">
            Intelligent Vision Systems
            For Wide-Area Intelligence
          </h1>


          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">

            Youyang Intelligent Control develops
            advanced panoramic sensing and intelligent
            surveillance solutions powered by optical
            innovation, AI computing, and intelligent
            perception technologies.

          </p>

        </Container>

      </section>




      {/* About */}

      <section className="py-20">

        <Container>


          <div className="grid gap-12 lg:grid-cols-2">


            <div>

              <h2 className="text-3xl font-bold text-navy">
                Company Overview
              </h2>


              <p className="mt-6 leading-relaxed text-text-muted">

                Established in 2018, Youyang Intelligent
                Control focuses on developing intelligent
                visual sensing systems for complex
                monitoring environments.

                <br /><br />

                Through the integration of panoramic
                imaging, AI recognition, and intelligent
                sensing technologies, the company provides
                advanced solutions for wide-area perception
                applications.

              </p>


            </div>



            <div className="rounded-3xl bg-gray-bg p-10">

              <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">
                Established
              </p>


              <p className="mt-4 text-6xl font-bold text-navy">
                2018
              </p>


              <p className="mt-3 text-text-muted">
                Building intelligent perception systems
                for next-generation visual applications.
              </p>


            </div>


          </div>


        </Container>

      </section>




      {/* Mission Vision Values */}

<section className="bg-gray-bg py-20">

  <Container>


    <div className="grid gap-8 lg:grid-cols-3">


      {/* Mission */}

      <div className="rounded-2xl bg-white p-8">

        <h3 className="text-2xl font-bold text-navy">
          Mission
        </h3>


        <p className="mt-5 leading-relaxed text-text-muted">

          Technology leads development,
          and innovation creates excellence.

          <br /><br />

          We leverage advanced technologies
          and continuous innovation to develop
          intelligent sensing solutions that
          create value for industries and society.

        </p>

      </div>





      {/* Vision */}

      <div className="rounded-2xl bg-white p-8">

        <h3 className="text-2xl font-bold text-navy">
          Vision
        </h3>


        <p className="mt-5 leading-relaxed text-text-muted">

          Become a high-quality
          high-tech brand enterprise.

          <br /><br />

          We aim to build a trusted technology
          brand through advanced innovation,
          reliable products, and commitment
          to quality.

        </p>

      </div>





      {/* Values */}

      <div className="rounded-2xl bg-white p-8">

        <h3 className="text-2xl font-bold text-navy">
          Values
        </h3>


        <p className="mt-5 leading-relaxed text-text-muted">

          Global Perspective.

          <br /><br />

          We embrace a worldwide vision,
          continuously exploring technological
          progress and creating intelligent
          solutions for global applications.

        </p>

      </div>



    </div>


  </Container>


</section>




      {/* Technology Capability */}

      <section className="py-20">

        <Container>


          <h2 className="text-3xl font-bold text-navy">
            Core Technology Capability
          </h2>


          <div className="mt-10 grid gap-6 lg:grid-cols-3">


            {capabilities.map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border bg-white p-8"
              >

                <h3 className="text-xl font-bold text-navy">
                  {item.title}
                </h3>


                <p className="mt-4 text-text-muted">
                  {item.description}
                </p>


              </div>

            ))}


          </div>


        </Container>

      </section>




      {/* CTA */}

      <section className="py-20">

        <Container>


          <div className="rounded-3xl bg-navy p-10 text-white">


            <h2 className="text-3xl font-bold">
              Partner With Youyang Intelligent Control
            </h2>


            <p className="mt-4 text-slate-300">
              Explore intelligent sensing solutions
              designed for future applications.
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