import type { Metadata } from "next";

import Container from "@/components/ui/Container";



export const metadata: Metadata = {

  title:
    "Resources | FAQ, Technical Documents & Knowledge Center | Youyang Intelligent Control",

  description:
    "Explore Youyang Intelligent Control resources including frequently asked questions, technical information, product documents, and knowledge about intelligent vision systems.",

};


const faqGroups = [
  {
    category: "AI Edge Computing Capability",
    questions: [
      {
        question:
          "Are AI target detection and recognition calculations performed at the device side or backend platform?",
        answer:
          "Target detection, classification, and positioning calculations are completed on the camera edge side. The AI system outputs structured recognition results in real time, reducing transmission latency and improving operational efficiency. Local AI analysis and alert functions remain available even during network interruption.",
      },
      {
        question:
          "How does the system reduce AI false alarms and missed detections?",
        answer:
          "The system supports confidence threshold adjustment, region masking, time filtering, and target size filtering. Edge-side processing filters invalid alerts and only delivers effective events and structured data.",
      },
    ],
  },

  {
    category: "Access & Operation Management",
    questions: [
      {
        question:
          "Does accessing the device require dedicated client software?",
        answer:
          "No dedicated client software is required. Users can remotely preview video, configure parameters, and manage playback through a web browser on computers and tablets.",
      },
      {
        question:
          "How can multiple devices be managed centrally?",
        answer:
          "Devices support permission management and integration with standard security platforms, enabling centralized management, scheduling, and coordinated alarm handling.",
      },
      {
        question:
          "How are device firmware and algorithms upgraded?",
        answer:
          "Firmware and algorithm packages can be upgraded remotely through the web interface without on-site disassembly. Version rollback is supported to maintain system stability.",
      },
    ],
  },

  {
    category: "Platform Integration & Protocols",
    questions: [
      {
        question:
          "Can Youyang devices integrate with existing security monitoring platforms?",
        answer:
          "Yes. The system supports integration with existing security platforms. Video streams, alarm events, and AI structured data can be transmitted to existing platforms without major system modifications.",
      },
      {
        question:
          "Does private protocol platform integration require extensive development?",
        answer:
          "Standard protocol integration allows direct platform registration in most cases. Private protocol platforms require only limited adaptation instead of extensive secondary development.",
      },
    ],
  },

  {
    category: "Video Storage & Retrieval",
    questions: [
      {
        question:
          "What storage methods are supported? Can recordings be searched by AI events?",
        answer:
          "The system supports NVR and server-based storage. Original video and AI structured metadata are stored together, allowing fast searches by target type, time, and alarm events.",
      },
      {
        question:
          "Will panoramic devices consume excessive network bandwidth?",
        answer:
          "AI alarm structured data requires very low bandwidth. Video supports multiple stream configurations and adjustable bitrate settings according to network conditions.",
      },
    ],
  },

  {
    category: "Deployment & Hardware Performance",
    questions: [
      {
        question:
          "How large an area can one panoramic device cover and where can it be deployed?",
        answer:
          "High-position installation supports large outdoor environments such as ports, open mines, airports, industrial parks, and public areas. One device can replace multiple traditional cameras and reduce blind spots.",
      },
      {
        question:
          "Does panoramic imaging have stitching gaps? Does it support PTZ camera linkage?",
        answer:
          "The system uses multi-camera real-time stitching correction algorithms to output seamless panoramic images. It supports ROI selection and linkage with PTZ cameras for detailed viewing.",
      },
    ],
  },

  {
    category: "Troubleshooting",
    questions: [
      {
        question:
          "What are the troubleshooting steps when the device goes offline?",
        answer:
          "Check power supply and network connections first. Restart the device, verify IP address and VLAN configuration, and restore factory settings if necessary.",
      },
      {
        question:
          "What should be checked if alarm events exist but cannot be received by the platform?",
        answer:
          "Check platform registration status, alarm configuration settings, and whether network firewall rules are blocking event transmission.",
      },
    ],
  },
];


export default function ResourcesPage() {

  return (

    <main>


      {/* Hero */}

      <section className="bg-space-navy py-24 text-white">

        <Container>

          <p className="text-sm uppercase tracking-[0.3em] text-tech-cyan">
            Resources
          </p>

          <h1 className="mt-5 text-5xl font-bold">
            Knowledge Center
            For Intelligent Vision Systems
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Explore frequently asked questions and technical
            information about Youyang intelligent sensing solutions.
          </p>

        </Container>

      </section>




      {/* FAQ */}

      <section className="py-20">

        <Container>

          <h2 className="text-3xl font-bold text-navy">
            Frequently Asked Questions
          </h2>


          <div className="mt-12 space-y-12">


            {faqGroups.map((group) => (

              <div key={group.category}>


                <h3 className="mb-6 text-xl font-bold text-brand-blue">
                  {group.category}
                </h3>


                <div className="space-y-5">


                  {group.questions.map((faq) => (

                    <div
                      key={faq.question}
                      className="rounded-2xl border bg-white p-8"
                    >

                      <h4 className="text-lg font-bold text-navy">
                        {faq.question}
                      </h4>


                      <p className="mt-4 leading-relaxed text-text-muted">
                        {faq.answer}
                      </p>


                    </div>

                  ))}


                </div>


              </div>

            ))}


          </div>


        </Container>

      </section>




      {/* Resources Placeholder */}

      <section className="bg-gray-bg py-20">

        <Container>

          <div className="grid gap-8 lg:grid-cols-2">


            <div className="rounded-2xl bg-white p-8">

              <h3 className="text-2xl font-bold text-navy">
                Downloads
              </h3>

              <p className="mt-4 text-text-muted">
                Product brochures, manuals, and technical documents
                will be available here.
              </p>

              <p className="mt-5 font-semibold text-brand-blue">
                Coming Soon
              </p>

            </div>



            <div className="rounded-2xl bg-white p-8">

              <h3 className="text-2xl font-bold text-navy">
                White Papers
              </h3>

              <p className="mt-4 text-text-muted">
                Technical insights and industry research
                documents will be published here.
              </p>

              <p className="mt-5 font-semibold text-brand-blue">
                Coming Soon
              </p>

            </div>


          </div>

        </Container>

      </section>


    </main>

  );
}