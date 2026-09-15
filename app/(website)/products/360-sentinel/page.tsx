import type { Metadata } from "next";

import Container from "@/components/ui/Container";

import Button from "@/components/ui/Button";



export const metadata: Metadata = {

  title:
    "360 Sentinel | Panoramic AI Vision System | Youyang Intelligent Control",

  description:
    "360 Sentinel is a panoramic intelligent sensing system from Youyang Intelligent Control, providing wide-area perception, AI recognition, and advanced monitoring capabilities for complex environments.",

};

const advantages = [
  {
    title: "360° Panoramic Perception",
    description:
      "Provides wide-area panoramic monitoring through advanced imaging technology, reducing blind spots and improving overall situational awareness.",
  },
  {
    title: "Front-End AI Intelligence",
    description:
      "Target detection, classification, and intelligent analysis are completed at the device edge, reducing latency and improving response efficiency.",
  },
  {
    title: "Integrated Intelligent System",
    description:
      "Combines panoramic imaging, AI recognition, and monitoring capabilities into one integrated intelligent sensing solution.",
  },
  {
    title: "Wide-Area Situation Awareness",
    description:
      "Designed for complex environments requiring continuous perception, multi-target detection, and intelligent monitoring.",
  },
];



const applications = [
  {
    title: "Street Monitoring",
    image: "/solutions/street.png",
  },
  {
    title: "Airport Security",
    image: "/solutions/airport.png",
  },
  {
    title: "Port Monitoring",
    image: "/solutions/port.png",
  },
  {
    title: "Large Area Protection",
    image: "/solutions/mine.jpg",
  },
];




export default function SentinelPage() {


  return (

    <main>



      {/* Hero */}

      <section className="bg-space-navy py-20 text-white">

        <Container>


          <div className="grid items-center gap-12 lg:grid-cols-2">



            {/* Text */}

            <div>


              <p className="text-sm uppercase tracking-[0.3em] text-tech-cyan">
                Intelligent Surveillance System
              </p>



              <h1 className="mt-5 text-5xl font-bold">
                360 Sentinel
              </h1>



              <p className="mt-3 text-lg text-slate-300">
                YYZK-Sentry-6L-V1.0
              </p>




              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">

                An all-scenario intelligent surveillance camera
                integrating compound-eye imaging technology,
                precision optical design, and AI recognition
                algorithms for wide-area intelligent perception.

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
                  src="/products/360-sentinel.png"
                  alt="360 Sentinel"
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


            360 Sentinel is a self-developed intelligent
            surveillance system designed for wide-area
            perception scenarios. By combining panoramic
            imaging, AI recognition, and intelligent sensing
            technologies, it provides comprehensive visual
            awareness and real-time monitoring capabilities.


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
                value: "YYZK-Sentry-6L-V1.0",
              },
              {
                parameter: "Imaging Technology",
                value: "Compound-eye panoramic imaging technology",
              },
              {
                parameter: "AI Capability",
                value: "Edge AI recognition and intelligent analysis",
              },
              {
                parameter: "Application",
                value: "Wide-area intelligent monitoring scenarios",
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

            Traditional Solutions vs 360 Sentinel

          </h2>





          <div className="mt-10 overflow-hidden rounded-2xl border bg-white">



            <div className="grid grid-cols-2 bg-navy p-5 text-white">


              <p>
                Traditional Solutions
              </p>


              <p>
                360 Sentinel
              </p>


            </div>






            {[
              {
                traditional:
                  "Limited field of view with monitoring blind spots",
                sentinel:
                  "360° panoramic coverage with wide-area monitoring",
              },
              {
                traditional:
                  "Backend dependent analysis with higher delay",
                sentinel:
                  "Front-end AI computing with real-time response",
              },
              {
                traditional:
                  "Requires multiple devices for large areas",
                sentinel:
                  "Integrated intelligent sensing solution",
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

                  {item.sentinel}

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

                    Intelligent sensing solutions for complex monitoring environments.

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

              Build Intelligent Wide-Area Awareness

            </h2>



            <p className="mt-4 text-slate-300">

              Contact Youyang Intelligent Control for
              intelligent sensing solutions.

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