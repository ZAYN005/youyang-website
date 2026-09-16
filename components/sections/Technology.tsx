import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";


export default function Technology() {


  const t = useTranslations("technology");


  const technologies = [

    {
      number:"01",
      title:t("items.one.title"),
      description:t("items.one.description")
    },

    {
      number:"02",
      title:t("items.two.title"),
      description:t("items.two.description")
    },

    {
      number:"03",
      title:t("items.three.title"),
      description:t("items.three.description")
    },

    {
      number:"04",
      title:t("items.four.title"),
      description:t("items.four.description")
    },

  ];



  return (


    <main>



      {/* Core Technology */}


      <section className="bg-space-navy py-24 text-white">


        <Container>


          <p className="text-sm uppercase tracking-[0.3em] text-tech-cyan">

            {t("label")}

          </p>



          <h1 className="mt-5 max-w-4xl text-4xl font-bold lg:text-5xl">

            {t("title")}

          </h1>



          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">

            {t("description")}

          </p>


        </Container>


      </section>







      {/* Capability Cards */}


      <section className="py-20">


        <Container>


          <h2 className="text-3xl font-bold text-navy">

            {t("capabilities")}

          </h2>




          <div className="mt-12 grid gap-8 md:grid-cols-2">



            {technologies.map((item)=>(


              <div
                key={item.number}
                className="
                rounded-3xl
                border
                bg-white
                p-8
                shadow-sm
                "
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

              {t("architecture.label")}

            </p>



            <h2 className="mt-4 text-4xl font-bold text-navy">


              {t("architecture.title")}


            </h2>




            <p className="mx-auto mt-5 max-w-3xl text-text-muted">

              {t("architecture.description")}

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



    </main>


  );

}