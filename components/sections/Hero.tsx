import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 text-white">


      {/* Full Background Image */}

      <img
        src="/solutions/airport.png"
        alt="Airport intelligent monitoring"
        className="absolute inset-0 h-full w-full object-cover"
      />


      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-space-navy/95 via-navy/90 to-brand-blue/80" />


      {/* Background Glow */}

      <div className="absolute right-[-120px] top-20 h-[420px] w-[420px] rounded-full bg-tech-cyan/20 blur-3xl" />



      <Container>


        <div className="relative z-10 grid min-w-0 items-center gap-10 lg:grid-cols-2">



          {/* LEFT CONTENT */}

          <div className="min-w-0">


            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-tech-cyan">

              Optoelectronic Intelligent Sensing

            </p>




            <h1 className="text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-5xl">


              Compound-Eye Imaging.

              <br />

              AI-Powered Wide-Area Intelligence.


            </h1>





            <p className="mt-6 w-full max-w-xl break-words text-base leading-relaxed text-slate-200 lg:text-lg">


              Advanced panoramic sensing systems combining
              compound-eye imaging technology, edge AI computing,
              and intelligent recognition for complex environments.


            </p>





            <div className="mt-8 flex flex-col gap-4 sm:flex-row">


              <a
                href="/contact"
                className="rounded-md bg-gold px-8 py-4 font-semibold text-navy transition hover:opacity-90"
              >

                Request Demo →

              </a>





              <a
                href="#products"
                className="rounded-md border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-navy"
              >

                Explore Products

              </a>



            </div>







            {/* Technology Indicators */}


            <div className="mt-10 grid grid-cols-3 gap-4 text-sm text-slate-300">



              <div>

                <p className="text-xl font-bold text-white">

                  360°

                </p>


                <p>

                  Panoramic View

                </p>


              </div>





              <div>

                <p className="text-xl font-bold text-white">

                  AI

                </p>


                <p>

                  Intelligent Recognition

                </p>


              </div>





              <div>

                <p className="text-xl font-bold text-white">

                  24/7

                </p>


                <p>

                  Situation Awareness

                </p>


              </div>



            </div>



          </div>







          {/* RIGHT VISUAL */}

<div className="flex justify-center">


  <div className="relative h-[340px] w-[340px] overflow-hidden rounded-3xl border border-tech-cyan/30 md:h-[420px] md:w-[420px]">


    {/* Airport Background */}

    <img
      src="/solutions/port.png"
      alt="Airport intelligent monitoring"
      className="absolute inset-0 h-full w-full object-cover"
    />



    {/* Dark Blue Overlay */}

    <div className="absolute inset-0 bg-space-navy/60" />





    {/* Radar Circles */}

    <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-tech-cyan/30" />


    <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-tech-cyan/25" />


    <div className="absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-tech-cyan/20" />






    {/* Product Circle Background */}

    <div className="absolute left-1/2 top-1/2 z-10 flex h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur-md md:h-[240px] md:w-[240px]">


      <img
        src="/products/360-sentinel bg.png"
        alt="360 Sentinel"
        className="h-[180px] w-[180px] rounded-full object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
      />


    </div>







    {/* Product Text */}

    <div className="absolute bottom-8 left-0 right-0 z-20 text-center">


      <h2 className="text-3xl font-bold text-white">

        360 Sentinel

      </h2>


      <p className="mt-2 text-sm text-slate-200">

        AI Panoramic Intelligent Perception

      </p>


    </div>



  </div>


</div>




        </div>



      </Container>



    </section>
  );
}