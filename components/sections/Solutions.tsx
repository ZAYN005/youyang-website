import Container from "@/components/ui/Container";


const solutions = [
  {
    number: "01",
    title: "Public Safety",
    description:
      "Intelligent surveillance solutions supporting city security, emergency response, and large-area situational awareness.",
  },

  {
    number: "02",
    title: "Smart Transportation",
    description:
      "Advanced perception systems enabling traffic monitoring, road intelligence, and transportation management.",
  },

  {
    number: "03",
    title: "Critical Infrastructure",
    description:
      "Reliable monitoring solutions designed for airports, energy facilities, ports, and other essential assets.",
  },

  {
    number: "04",
    title: "Industrial Security",
    description:
      "AI-powered vision systems improving operational safety and intelligent industrial monitoring.",
  },

  {
    number: "05",
    title: "Smart City",
    description:
      "Integrated intelligent sensing platforms supporting connected urban environments.",
  },
];


export default function Solutions() {

  return (

    <section className="bg-white py-24">


      <Container>


        <div className="max-w-3xl">


          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue">

            Industry Solutions

          </p>


          <h2 className="mt-4 text-4xl font-bold text-navy">

            Intelligent Vision Applications Across Industries

          </h2>


          <p className="mt-5 text-lg text-text-muted">

            Deploying panoramic sensing and AI perception
            technologies across critical environments.

          </p>


        </div>




        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">


          {solutions.map((item) => (

            <div
              key={item.number}
              className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:shadow-lg"
            >


              <p className="text-sm font-bold text-tech-cyan">

                {item.number}

              </p>


              <h3 className="mt-5 text-2xl font-bold text-navy">

                {item.title}

              </h3>


              <p className="mt-4 leading-relaxed text-text-muted">

                {item.description}

              </p>


              <button className="mt-6 text-sm font-semibold text-brand-blue">

                Learn More →

              </button>


            </div>

          ))}


        </div>


      </Container>


    </section>

  );

}