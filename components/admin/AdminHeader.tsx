"use client";

import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";


export default function AdminHeader({
  name
}:{
  name:string
}){


  const [greeting,setGreeting] = useState("");
  const [time,setTime] = useState("");



  useEffect(()=>{


    const updateTime = ()=>{


      const now = new Date();

      const hour = now.getHours();



      if(hour < 12){

        setGreeting("Good Morning");

      }
      else if(hour < 18){

        setGreeting("Good Afternoon");

      }
      else{

        setGreeting("Good Evening");

      }



      setTime(
        now.toLocaleString()
      );


    };



    updateTime();



    const timer = setInterval(
      updateTime,
      1000
    );



    return ()=>clearInterval(timer);



  },[]);





  return (

    <div
      className="
      flex
      justify-between
      items-center
      "
    >



      <div>



        <p
          className="
          text-sm
          uppercase
          tracking-[0.4em]
          text-cyan-400
          "
        >

          Youyang AI Command Center

        </p>





        <h1
          className="
          mt-4
          text-5xl
          font-bold
          text-white
          "
        >

          {greeting}, {name}

        </h1>





        <p
          className="
          mt-3
          text-slate-400
          "
        >

          {time}

        </p>



      </div>






      <div
        className="
        flex
        items-center
        gap-5
        "
      >




        <div
          className="
          rounded-2xl
          border
          border-green-400/30
          bg-green-400/10
          px-8
          py-5
          "
        >

          <p
            className="
            text-green-400
            font-semibold
            "
          >

            ● ALL SYSTEMS ONLINE

          </p>


        </div>






        <button

          onClick={()=>
            signOut({
              callbackUrl:"/admin/login"
            })
          }

          className="
          rounded-xl
          border
          border-red-400/30
          bg-red-500/10
          px-6
          py-4
          text-red-400
          font-semibold
          transition
          hover:bg-red-500
          hover:text-white
          "

        >

          Logout

        </button>





      </div>





    </div>

  );

}