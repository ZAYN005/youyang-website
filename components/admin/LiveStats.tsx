"use client";

import {useEffect,useState} from "react";


export default function LiveStats(){


const [data,setData]=useState<any>(null);



useEffect(()=>{


fetch("/api/admin/stats")

.then(res=>res.json())

.then(setData);


},[]);



if(!data){

return (

<div className="text-white">
Loading system data...
</div>

)

}



const cards=[

{
title:"Total Inquiries",
value:data.total
},

{
title:"New Leads",
value:data.newLeads
},

{
title:"System",
value:"ONLINE"
}

];


return (

<div className="
grid
md:grid-cols-3
gap-6
">


{cards.map(card=>(

<div
key={card.title}
className="
rounded-3xl
border
border-cyan-400/20
bg-white/5
backdrop-blur-xl
p-8
text-white
"
>


<p className="text-slate-400">

{card.title}

</p>


<h2 className="
mt-4
text-5xl
font-bold
">

{card.value}

</h2>


</div>


))}


</div>

)

}