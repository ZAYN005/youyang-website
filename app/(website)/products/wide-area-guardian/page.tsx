import type { Metadata } from "next";

import Container from "@/components/ui/Container";

import Button from "@/components/ui/Button";



export const metadata: Metadata = {

  title:
    "Wide-area Guardian | Large-Scale AI Perception System | Youyang Intelligent Control",

  description:
    "Wide-area Guardian is a large-scale intelligent sensing solution from Youyang Intelligent Control, delivering panoramic imaging, AI-powered perception, and continuous monitoring for complex environments.",

};


const advantages = [
  {
    title: "Wide-Area Situation Awareness",
    description:
      "Provides large-scale visual awareness through panoramic imaging technology, supporting continuous monitoring of complex environments.",
  },
  {
    title: "AI-Powered Perception",
    description:
      "Combines AI recognition algorithms with intelligent sensing technology for real-time analysis and scene understanding.",
  },
  {
    title: "Panoramic Imaging Technology",
    description:
      "Uses advanced panoramic imaging capabilities to improve coverage and reduce monitoring blind spots.",
  },
  {
    title: "Intelligent Security Applications",
    description:
      "Designed for smart city, public safety, and critical infrastructure environments requiring reliable visual intelligence.",
  },
];



const applications = [
  {
    title: "Smart City Security",
    image: "/solutions/street.png",
  },
  {
    title: "Critical Infrastructure",
    image: "/solutions/airport.png",
  },
  {
    title: "Transportation Environment",
    image: "/solutions/port.png",
  },
  {
    title: "Large Area Public Safety",
    image: "/solutions/mine.jpg",
  },
];





export default function WideAreaGuardianPage() {


  return (

    <main>




      {/* Hero */}


      <section className="bg-space-navy py-20 text-white">


        <Container>



          <div className="grid items-center gap-12 lg:grid-cols-2">



            {/* Text */}


            <div>


              <p className="text-sm uppercase tracking-[0.3em] text-tech-cyan">

                Wide-Area Intelligent Sensing System

              </p>




              <h1 className="mt-5 text-5xl font-bold">

                Wide-area Guardian

              </h1>




              <p className="mt-3 text-lg text-slate-300">

                YYZK-PANO-52L-V1.0

              </p>





              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">


                A wide-area situation awareness camera
                integrating panoramic imaging, AI recognition,
                and intelligent perception technologies for
                large-scale monitoring environments.


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
                  src="/products/wide-area-guardian.jpg"
                  alt="Wide-area Guardian"
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


            Wide-area Guardian is an intelligent vision
            system developed for large-area perception
            scenarios. By combining panoramic imaging,
            AI recognition, and intelligent sensing
            technologies, it delivers comprehensive
            situation awareness and monitoring capability.


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
                value: "YYZK-PANO-52L-V1.0",
              },
              {
                parameter: "Imaging Technology",
                value: "Panoramic imaging technology",
              },
              {
                parameter: "AI Capability",
                value: "AI recognition and intelligent perception",
              },
              {
                parameter: "Application",
                value: "Large-area intelligent monitoring scenarios",
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

            Traditional Monitoring vs Wide-area Guardian

          </h2>






          <div className="mt-10 overflow-hidden rounded-2xl border bg-white">



            <div className="grid grid-cols-2 bg-navy p-5 text-white">


              <p>
                Traditional Solutions
              </p>


              <p>
                Wide-area Guardian
              </p>


            </div>






            {[
              {
                traditional:
                  "Limited monitoring range requiring multiple cameras",
                guardian:
                  "Wide-area panoramic perception with expanded coverage",
              },
              {
                traditional:
                  "Basic video monitoring without intelligent analysis",
                guardian:
                  "AI recognition and intelligent situation awareness",
              },
              {
                traditional:
                  "Difficult to monitor large and complex areas",
                guardian:
                  "Designed for large-scale intelligent monitoring scenarios",
              },
              {
                traditional:
                  "Higher deployment complexity",
                guardian:
                  "Integrated panoramic sensing solution",
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

                  {item.guardian}

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

                    Intelligent wide-area sensing solutions
                    for complex monitoring environments.

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

              Intelligent Wide-Area Protection

            </h2>





            <p className="mt-4 text-slate-300">

              Deploy advanced visual intelligence
              solutions for complex monitoring needs.

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