import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";


const technologies = [
  {
    number: "01",
    title: "Compound-Eye Imaging",
    description:
      "Multi-camera optical architecture inspired by compound-eye vision enables wide-area panoramic perception with reduced blind spots and improved environmental awareness.",
  },

  {
    number: "02",
    title: "AI Recognition Algorithms",
    description:
      "Advanced AI algorithms analyze visual information in real time, supporting intelligent detection, classification, recognition, and situation awareness.",
  },

  {
    number: "03",
    title: "3D Image Stitching",
    description:
      "High-precision image fusion technology combines multiple camera views into seamless panoramic visual information for large-scale monitoring.",
  },

  {
    number: "04",
    title: "Digital Twin Modeling",
    description:
      "Digital representation technologies support intelligent monitoring, environment analysis, and data-driven decision making.",
  },
];


export default function TechnologyPage() {


  return (

    <main>


      {/* Hero */}

      <section className="bg-space-navy py-24 text-white">

        <Container>


          <p className="text-sm uppercase tracking-[0.3em] text-tech-cyan">
            Core Technology
          </p>


          <h1 className="mt-5 max-w-4xl text-5xl font-bold">
            Engineering Intelligent
            Perception Systems
          </h1>


          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">

            Youyang combines optical innovation,
            AI computing, and intelligent sensing
            technologies to create next-generation
            wide-area perception solutions.

          </p>


        </Container>


      </section>





      {/* Technology Cards */}

      <section className="py-20">


        <Container>


          <h2 className="text-3xl font-bold text-navy">
            Core Technology Capabilities
          </h2>



          <div className="mt-12 grid gap-8 md:grid-cols-2">


            {technologies.map((item)=>(


              <div
                key={item.number}
                className="rounded-3xl border bg-white p-8 shadow-sm"
              >


                <p className="text-sm font-bold text-brand-blue">
                  {item.number}
                </p>


                <h3 className="mt-4 text-2xl font-bold text-navy">
                  {item.title}
                </h3>


                <p className="mt-4 leading-relaxed text-text-muted">
                  {item.description}
                </p>


              </div>


            ))}


          </div>


        </Container>


      </section>





      {/* Architecture */}

      <section className="bg-gray-bg py-20">


        <Container>


          <div className="text-center">


            <p className="text-sm uppercase tracking-[0.3em] text-brand-blue">
              Intelligent Architecture
            </p>


            <h2 className="mt-4 text-4xl font-bold text-navy">

              From Perception To Intelligence

            </h2>


            <p className="mx-auto mt-5 max-w-3xl text-text-muted">

              Integrating advanced sensing hardware,
              edge AI computing, and intelligent analysis
              platforms to support complex application scenarios.

            </p>


          </div>




          <div className="mt-12 overflow-hidden rounded-3xl bg-white p-6 shadow-sm">


            <img
              src="/solutions/architecture.png"
              alt="Intelligent Perception Architecture"
              className="w-full object-contain"
            />


          </div>


        </Container>


      </section>





      {/* Application */}

      <section className="py-20">


        <Container>


          <div className="rounded-3xl bg-navy p-10 text-white">


            <h2 className="text-3xl font-bold">

              Advanced Technology For Intelligent Vision

            </h2>


            <p className="mt-4 max-w-3xl text-slate-300">

              Discover how Youyang technology helps
              organizations achieve wider awareness,
              faster analysis, and smarter decision making.

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