import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";



export const metadata: Metadata = {

  title:
    "Dome Watch | Intelligent Panoramic Monitoring System | Youyang Intelligent Control",

  description:
    "Dome Watch is an intelligent panoramic monitoring system from Youyang Intelligent Control, providing AI-powered scene awareness, visual analysis, and reliable monitoring for complex environments.",

};

const advantages = [
  {
    title: "Panoramic Monitoring",
    description:
      "Provides wide-area visual monitoring through panoramic imaging technology, enabling comprehensive scene awareness.",
  },
  {
    title: "Edge AI Recognition",
    description:
      "Integrated AI algorithms support intelligent target recognition, analysis, and real-time monitoring.",
  },
  {
    title: "Intelligent Scene Awareness",
    description:
      "Designed to understand complex environments and improve monitoring efficiency through intelligent perception.",
  },
  {
    title: "Flexible Platform Integration",
    description:
      "Supports remote preview, configuration, playback, and integration with intelligent management platforms.",
  },
];



const applications = [
  {
    title: "Public Security Monitoring",
    image: "/solutions/street.png",
  },
  {
    title: "Smart City Environment",
    image: "/solutions/airport.png",
  },
  {
    title: "Large Area Surveillance",
    image: "/solutions/port.png",
  },
  {
    title: "Industrial Monitoring",
    image: "/solutions/mine.jpg",
  },
];



export default function DomeWatchPage() {

  return (

    <main>



      {/* Hero */}

      <section className="bg-space-navy py-20 text-white">

        <Container>


          <div className="grid items-center gap-12 lg:grid-cols-2">


            {/* Text */}

            <div>


              <p className="text-sm uppercase tracking-[0.3em] text-tech-cyan">
                Intelligent Monitoring System
              </p>



              <h1 className="mt-5 text-5xl font-bold">
                Dome Watch
              </h1>



              <p className="mt-3 text-lg text-slate-300">
                YYZK-SkyView-6L-V1.0
              </p>




              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">

                A panoramic monitoring camera designed for
                intelligent scene awareness, combining
                advanced imaging technology and edge AI
                recognition capabilities.

              </p>




              <div className="mt-8">

                <Button href="/contact">
                  Request Demo →
                </Button>

              </div>



            </div>





            {/* Product Image */}

            <div className="flex justify-center">


              <div className="flex h-[380px] w-[380px] items-center justify-center rounded-3xl bg-white/5 p-10 backdrop-blur">


                <img
                  src="/products/dome-watch.png"
                  alt="Dome Watch"
                  className="h-full w-full object-contain"
                />


              </div>


            </div>



          </div>



        </Container>

      </section>







      {/* Overview */}

      <section className="py-20">


        <Container>


          <h2 className="text-3xl font-bold text-navy">
            Product Overview
          </h2>




          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-text-muted">


            Dome Watch is an intelligent panoramic monitoring
            system developed for complex surveillance
            environments. It combines panoramic imaging,
            AI recognition, and intelligent perception
            technologies to provide efficient monitoring
            and situation awareness.


          </p>



        </Container>


      </section>







      {/* Advantages */}

      <section className="bg-gray-bg py-20">


        <Container>



          <h2 className="text-3xl font-bold text-navy">
            Core Advantages
          </h2>




          <div className="mt-10 grid gap-6 md:grid-cols-2">



            {advantages.map((item) => (


              <div
                key={item.title}
                className="rounded-2xl bg-white p-8 shadow-sm"
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
            {/* Technical Specifications */}

      <section className="py-20">

        <Container>


          <h2 className="text-3xl font-bold text-navy">

            Technical Specifications

          </h2>



          <div className="mt-10 overflow-hidden rounded-2xl border bg-white">



            <div className="grid grid-cols-2 bg-navy p-5 text-white">

              <p>
                Parameter
              </p>


              <p>
                Specification
              </p>

            </div>




            {[
              {
                parameter: "Product Model",
                value: "YYZK-SkyView-6L-V1.0",
              },
              {
                parameter: "Imaging Technology",
                value: "Panoramic imaging technology",
              },
              {
                parameter: "AI Capability",
                value: "Edge AI recognition and intelligent analysis",
              },
              {
                parameter: "Application",
                value: "Complex monitoring and intelligent sensing scenarios",
              },
            ].map((item) => (

              <div
                key={item.parameter}
                className="grid grid-cols-2 border-t p-5 text-sm"
              >

                <p className="text-text-muted">

                  {item.parameter}

                </p>



                <p className="font-medium text-navy">

                  {item.value}

                </p>


              </div>

            ))}



          </div>


        </Container>


      </section>







      {/* Comparison */}

      <section className="bg-gray-bg py-20">


        <Container>



          <h2 className="text-3xl font-bold text-navy">

            Traditional Monitoring vs Dome Watch

          </h2>





          <div className="mt-10 overflow-hidden rounded-2xl border bg-white">


            <div className="grid grid-cols-2 bg-navy p-5 text-white">


              <p>
                Traditional Solutions
              </p>


              <p>
                Dome Watch
              </p>


            </div>





            {[
              {
                traditional:
                  "Requires multiple monitoring devices for wider coverage",
                dome:
                  "Panoramic monitoring capability with improved scene coverage",
              },
              {
                traditional:
                  "Limited intelligent analysis capability",
                dome:
                  "Built-in AI recognition for intelligent perception",
              },
              {
                traditional:
                  "Higher dependence on backend processing",
                dome:
                  "Edge AI computing reduces response delay",
              },
              {
                traditional:
                  "Complex monitoring management",
                dome:
                  "Integrated intelligent monitoring solution",
              },
            ].map((item) => (


              <div
                key={item.traditional}
                className="grid grid-cols-2 border-t p-5 text-sm"
              >


                <p className="text-text-muted">

                  {item.traditional}

                </p>



                <p className="font-medium text-navy">

                  {item.dome}

                </p>


              </div>


            ))}



          </div>



        </Container>


      </section>







      {/* Application Scenarios */}

      <section className="py-20">


        <Container>



          <h2 className="text-3xl font-bold text-navy">

            Application Scenarios

          </h2>





          <div className="mt-10 grid gap-8 md:grid-cols-2">



            {applications.map((item) => (



              <div
                key={item.title}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >



                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />



                <div className="p-6">


                  <h3 className="text-xl font-bold text-navy">

                    {item.title}

                  </h3>


                  <p className="mt-3 text-text-muted">

                    Intelligent monitoring solutions for
                    complex environments.

                  </p>


                </div>



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

              Intelligent Monitoring For Complex Environments

            </h2>




            <p className="mt-4 text-slate-300">

              Discover how Dome Watch improves visual
              awareness and intelligent surveillance.

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