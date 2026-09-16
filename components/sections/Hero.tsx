import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";


export default function Hero() {

  const t = useTranslations("hero");


  return (

    <section
      className="
      relative
      overflow-hidden
      bg-[#f4f8ff]
      py-20
      lg:py-28
      "
    >


      {/* Background Shape */}

      <div
        className="
        absolute
        right-0
        top-0
        h-full
        w-[45%]
        bg-gradient-to-br
        from-blue-100
        via-blue-200
        to-blue-300
        rounded-l-[120px]
        "
      />



      <Container>


        <div
          className="
          relative
          z-10
          grid
          items-center
          gap-12
          lg:grid-cols-2
          "
        >



          {/* LEFT CONTENT */}


          <div>


            <p
              className="
              mb-5
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-blue-700
              "
            >

              {t("label")}

            </p>





            <h1
              className="
              max-w-xl
              text-3xl
              font-semibold
              leading-tight
              text-slate-900
              lg:text-4xl
              "
            >

              {t("title")}

            </h1>





            <p
              className="
              mt-6
              max-w-xl
              text-base
              leading-relaxed
              text-slate-600
              lg:text-lg
              "
            >

              {t("description1")}

            </p>





            <p
              className="
              mt-4
              max-w-xl
              text-base
              leading-relaxed
              text-slate-600
              "
            >

              {t("description2")}

            </p>



          </div>







          {/* RIGHT IMAGE */}


          <div
            className="
            relative
            flex
            justify-center
            "
          >



            <div
              className="
              absolute
              -right-10
              top-10
              h-[380px]
              w-[380px]
              rounded-full
              bg-blue-400/30
              blur-3xl
              "
            />





            <div
              className="
              relative
              h-[380px]
              w-full
              overflow-hidden
              rounded-2xl
              shadow-xl
              lg:h-[460px]
              "
            >


              <img
                src="/home/building.jpg"
                alt="Youyang Intelligent Control Building"
                className="
                h-full
                w-full
                object-cover
                "
              />



              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-blue-900/20
                to-transparent
                "
              />


            </div>


          </div>





        </div>


      </Container>


    </section>

  );

}