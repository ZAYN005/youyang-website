"use client";


const stats=[

{
 title:"AI Systems Online",
 value:"128"
},

{
 title:"New Inquiries",
 value:"24"
},

{
 title:"Active Projects",
 value:"18"
},

{
 title:"Detection Status",
 value:"ONLINE"
}

];


export default function StatPanel(){


return (

<div className="
grid
gap-6
md:grid-cols-4
">


{stats.map((item)=>(

<div
key={item.title}
className="
rounded-3xl
border
border-cyan-400/20
bg-white/5
p-6
backdrop-blur-xl
"
>


<p className="
text-sm
text-slate-400
">

{item.title}

</p>


<h2 className="
mt-4
text-4xl
font-bold
text-white
">

{item.value}

</h2>


</div>

))}


</div>

);


}