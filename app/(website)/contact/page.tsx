"use client";

import { useState } from "react";
import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";



const benefits = [
  {
    title: "Engineering Expertise",
    description:
      "Work with our technical team to evaluate your environment and identify suitable intelligent sensing solutions.",
  },
  {
    title: "Customized Solutions",
    description:
      "Receive deployment recommendations based on your application scenarios, coverage requirements, and project goals.",
  },
  {
    title: "End-to-End Support",
    description:
      "From initial consultation to implementation planning, our team supports your intelligent vision projects.",
  },
];


const solutions = [
  "Urban Public Spaces",
  "Transportation Hubs & Critical Sites",
  "Campuses & Educational Institutions",
  "Healthcare & Senior Care Facilities",
  "High-Security Facilities",
  "Commercial & Industrial Worksites",
];


const products = [
  "360 Sentinel",
  "Dome Watch",
  "Wide-area Guardian",
];



export default function ContactPage() {


  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState({

  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  solutionInterest: "",
  productInterest: "",
  message: "",

});



  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();


    setLoading(true);


    try {


      const response = await fetch("/api/contact", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),

      });



      if (response.ok) {


        alert(
          "Thank you. Our team will contact you soon."
        );


        setFormData({

        name: "",
        company: "",
        email: "",
        phone: "",
        country: "",
        solutionInterest: "",
        productInterest: "",
        message: "",

});

      } else {

        alert(
          "Submission failed. Please try again."
        );

      }



    } catch (error) {


      console.error(error);


      alert(
        "Something went wrong."
      );


    }



    setLoading(false);


  };




  return (

    <main>


      {/* Hero */}

      <section className="bg-space-navy py-24 text-white">


        <Container>


          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">



            <div>


              <div className="flex items-center gap-3">


                <img
                  src="/logo.png"
                  alt="Youyang Intelligent Control"
                  className="h-14 w-auto object-contain"
                />


                <div className="leading-tight">


                  <p className="text-2xl font-bold">
                    YOUYANG
                  </p>


                  <p className="text-sm text-slate-300">
                    Intelligent Control
                  </p>


                </div>


              </div>



              <p className="mt-10 text-sm uppercase tracking-[0.3em] text-tech-cyan">
                Contact Us
              </p>



              <h1 className="mt-5 text-5xl font-bold leading-tight">

                Build Intelligent
                Vision Solutions Together

              </h1>



              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">

                Connect with Youyang Intelligent Control for
                intelligent sensing solutions, technical
                consultation, and customized deployment support.

              </p>



              <div className="mt-8 flex gap-4">


                <a
                  href="#contact-form"
                  className="rounded-md bg-gold px-7 py-3 font-semibold text-navy"
                >
                  Request Demo →
                </a>


              </div>


            </div>





            <div className="rounded-3xl border border-white/10 bg-white/5 p-10">


              <h2 className="text-2xl font-bold">
                Why Work With Us?
              </h2>


              <div className="mt-8 space-y-6">


                {benefits.map((item)=>(

                  <div key={item.title}>


                    <h3 className="font-bold text-white">
                      {item.title}
                    </h3>


                    <p className="mt-2 text-slate-300">
                      {item.description}
                    </p>


                  </div>

                ))}


              </div>


            </div>


          </div>


        </Container>


      </section>





      {/* Contact Information */}

      <section className="py-20">


        <Container>


          <div className="grid gap-10 lg:grid-cols-3">


            <div>

              <h3 className="font-bold text-navy">
                Email
              </h3>

              <p className="mt-2 text-text-muted">
                {siteConfig.contact.email}
              </p>

            </div>



            <div>

              <h3 className="font-bold text-navy">
                Phone
              </h3>

              <p className="mt-2 text-text-muted">
                {siteConfig.contact.phone}
              </p>

            </div>
            
            


            <div>

              <h3 className="font-bold text-navy">
                Address
              </h3>

              <p className="mt-2 text-text-muted">
                {siteConfig.contact.address}
              </p>

            </div>


          </div>


        </Container>


      </section>





      {/* Form */}

      <section
        id="contact-form"
        className="bg-gray-bg py-20"
      >


        <Container>


          <div className="grid gap-12 lg:grid-cols-2">



            <div>


              <h2 className="text-3xl font-bold text-navy">

                Request A Demo

              </h2>



              <p className="mt-4 text-text-muted">

                Tell us about your project requirements.
                Our team will contact you with suitable
                solution recommendations.

              </p>




              <div className="mt-8 rounded-2xl bg-white p-6">


                <h3 className="font-bold text-navy">
                  Support Includes
                </h3>


                <ul className="mt-5 space-y-3 text-text-muted">

                  <li>
                    ✓ Application requirement analysis
                  </li>

                  <li>
                    ✓ Product recommendation
                  </li>

                  <li>
                    ✓ Deployment consultation
                  </li>

                  <li>
                    ✓ Project implementation support
                  </li>


                </ul>


              </div>


            </div>





            <div className="rounded-3xl bg-white p-8 shadow-xl">


              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >


                <input
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e)=>setFormData({
                    ...formData,
                    name:e.target.value
                  })}
                  className="w-full rounded-lg border px-4 py-3"
                />



                <input
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e)=>setFormData({
                    ...formData,
                    company:e.target.value
                  })}
                  className="w-full rounded-lg border px-4 py-3"
                />



                <input
                  placeholder="Business Email"
                  value={formData.email}
                  onChange={(e)=>setFormData({
                    ...formData,
                    email:e.target.value
                  })}
                  className="w-full rounded-lg border px-4 py-3"
                />



                <input
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e)=>setFormData({
                    ...formData,
                    phone:e.target.value
                  })}
                  className="w-full rounded-lg border px-4 py-3"
                />
                
                <input
                 placeholder="Country / Region"
                 value={formData.country}
                 onChange={(e)=>setFormData({
                   ...formData,
                  country:e.target.value
                 })}
                  className="w-full rounded-lg border px-4 py-3"
                 />


                <select
  value={formData.solutionInterest}
  onChange={(e) =>
    setFormData({
      ...formData,
      solutionInterest: e.target.value,
    })
  }
  className="w-full rounded-lg border px-4 py-3"
>

  <option value="">
    Select Solution Interest
  </option>


  {solutions.map((item) => (

    <option key={item} value={item}>
      {item}
    </option>

  ))}


</select>



<select
  value={formData.productInterest}
  onChange={(e) =>
    setFormData({
      ...formData,
      productInterest: e.target.value,
    })
  }
  className="w-full rounded-lg border px-4 py-3"
>

  <option value="">
    Select Product Interest
  </option>


  {products.map((item) => (

    <option key={item} value={item}>
      {item}
    </option>

  ))}


</select>



<textarea

  rows={5}

  placeholder="Tell us about your requirements"

  value={formData.message}

  onChange={(e) =>
    setFormData({
      ...formData,
      message: e.target.value,
    })
  }

  className="w-full rounded-lg border px-4 py-3"

/>



<button

  type="submit"

  disabled={loading}

  className="w-full rounded-lg bg-gold py-3 font-semibold text-navy"

>

  {loading
    ? "Sending..."
    : "Submit Request →"
  }


</button>


              </form>


            </div>



          </div>


        </Container>


      </section>


    </main>

  );

}