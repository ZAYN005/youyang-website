import type { Metadata } from "next";
import Container from "@/components/ui/Container";


export const metadata: Metadata = {

  title:
    "Privacy Policy | Youyang Intelligent Control",

  description:
    "Privacy policy for Youyang Intelligent Control website and services.",

};


export default function PrivacyPolicyPage() {

  return (

    <main>

      <section className="bg-space-navy py-20 text-white">

        <Container>

          <h1 className="text-5xl font-bold">
            Privacy Policy
          </h1>

          <p className="mt-5 text-slate-300">
            How Youyang Intelligent Control collects, uses,
            and protects information.
          </p>

        </Container>

      </section>


      <section className="py-20">

        <Container>

          <div className="max-w-4xl space-y-8 text-text-muted">


            <div>

              <h2 className="text-2xl font-bold text-navy">
                Information We Collect
              </h2>

              <p className="mt-3">
                We may collect information submitted through
                contact forms, business inquiries, and
                communication requests.
              </p>

            </div>



            <div>

              <h2 className="text-2xl font-bold text-navy">
                How We Use Information
              </h2>

              <p className="mt-3">
                Information is used to respond to inquiries,
                provide technical consultation, and improve
                our services.
              </p>

            </div>



            <div>

              <h2 className="text-2xl font-bold text-navy">
                Data Protection
              </h2>

              <p className="mt-3">
                We take reasonable measures to protect
                submitted information and maintain data security.
              </p>

            </div>



            <div>

              <h2 className="text-2xl font-bold text-navy">
                Contact
              </h2>

              <p className="mt-3">
                For privacy-related questions, please contact
                baol@yyteck.cn.
              </p>

            </div>


          </div>

        </Container>

      </section>

    </main>

  );

}