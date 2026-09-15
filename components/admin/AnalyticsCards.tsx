"use client";

import { motion } from "framer-motion";


const data=[
{
title:"Total Inquiries",
value:"124",
icon:"📩"
},
{
title:"New Leads",
value:"35",
icon:"⚡"
},
{
title:"Contacted",
value:"56",
icon:"🤝"
},
{
title:"Completed",
value:"33",
icon:"✓"
}
];


export default function AnalyticsCards(){


return (

<div className="grid md:grid-cols-4 gap-6">

{data.map((item)=>(

<motion.div

key={item.title}

whileHover={{
scale:1.05
}}

className="
rounded-3xl
border
border-cyan-400/20
bg-white/5
backdrop-blur-xl
p-6
text-white
"

>


<div className="text-3xl">
{item.icon}
</div>


<p className="mt-4 text-slate-400">
{item.title}
</p>


<h2 className="text-5xl font-bold mt-2">
{item.value}
</h2>


</motion.div>

))}

</div>

)

}