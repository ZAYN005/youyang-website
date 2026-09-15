import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import AdminSidebar from "@/components/admin/AdminSidebar";
import VisionCore from "@/components/admin/VisionCore";
import LiveStats from "@/components/admin/LiveStats";
import RecentActivity from "@/components/admin/RecentActivity";
import AdminHeader from "@/components/admin/AdminHeader";
import SystemMonitor from "@/components/admin/SystemMonitor";

import { authOptions } from "@/lib/auth";


export default async function Dashboard(){


  const session = await getServerSession(authOptions);


  if(!session){

    redirect("/admin/login");

  }


  return (

    <div
      className="
      min-h-screen
      bg-[#020617]
      text-white
      "
    >


      <AdminSidebar />



      <main
        className="
        ml-72
        p-10
        "
      >


        {/* HEADER */}

        <AdminHeader
          name={session.user?.name || "Admin"}
        />



        {/* 3D VISION CORE */}

        <section className="mt-12">

          <VisionCore />

        </section>



        {/* LIVE STATISTICS */}

        <section className="mt-12">


          <h2
            className="
            mb-6
            text-2xl
            font-bold
            "
          >

            Intelligence Overview

          </h2>


          <LiveStats />


        </section>




        {/* SYSTEM MONITOR */}

        <section className="mt-12">

          <SystemMonitor />

        </section>




        {/* RECENT ACTIVITY */}

        <section className="mt-12">

          <RecentActivity />

        </section>




        {/* FUTURE MODULES */}

        <section
          className="
          mt-12
          grid
          gap-6
          md:grid-cols-3
          "
        >


          <div
            className="
            rounded-3xl
            border
            border-cyan-400/20
            bg-white/5
            p-8
            "
          >

            <h3 className="text-xl font-bold">
              Inquiries
            </h3>


            <p className="mt-3 text-slate-400">
              Manage customer requests and leads.
            </p>


          </div>




          <div
            className="
            rounded-3xl
            border
            border-yellow-400/20
            bg-white/5
            p-8
            "
          >

            <h3 className="text-xl font-bold">
              Products
            </h3>


            <p className="mt-3 text-slate-400">
              Monitor intelligent vision products.
            </p>


          </div>




          <div
            className="
            rounded-3xl
            border
            border-purple-400/20
            bg-white/5
            p-8
            "
          >

            <h3 className="text-xl font-bold">
              Analytics
            </h3>


            <p className="mt-3 text-slate-400">
              Track system performance and users.
            </p>


          </div>


        </section>


      </main>


    </div>

  );

}