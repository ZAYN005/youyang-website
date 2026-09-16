"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const menu = [

{
name:"Command Center",
link:"/admin/dashboard"
},

{
name:"Inquiries",
link:"/admin/inquiries"
},

{
name:"Products",
link:"/admin/products"
},

{
name:"Analytics",
link:"/admin/analytics"
},

{
name:"Users",
link:"/admin/users"
},

{
name:"Settings",
link:"/admin/settings"
}

];



export default function AdminSidebar(){


const pathname = usePathname();



return (

<aside
className="
fixed
left-0
top-0
h-screen
w-72
bg-[#020617]/90
border-r
border-cyan-400/20
backdrop-blur-xl
p-8
text-white
z-50
flex
flex-col
"
>


{/* Logo */}

<div>

<h1
className="
text-3xl
font-black
tracking-wider
text-cyan-400
"
>
YOUYANG
</h1>


<p
className="
mt-2
text-sm
text-slate-400
"
>
AI Command Center
</p>


</div>





{/* Menu */}

<nav
className="
mt-12
space-y-3
flex-1
"
>


{

menu.map((item)=>(


<Link

key={item.name}

href={item.link}

className={`
block
rounded-xl
p-4
transition-all
duration-300
border
${
pathname === item.link
?
"bg-cyan-400/20 border-cyan-400 text-cyan-400"
:
"border-transparent text-slate-300 hover:bg-white/5 hover:text-cyan-400"
}
`}

>


<div className="
flex
items-center
justify-between
">


<span>
{item.name}
</span>


{
pathname === item.link &&
<span>
●
</span>
}


</div>


</Link>


))

}


</nav>





{/* Footer */}

<div
className="
rounded-2xl
border
border-green-400/20
bg-green-400/5
p-5
"
>


<p
className="
text-xs
text-slate-400
uppercase
tracking-widest
"
>
System Status
</p>



<p
className="
mt-3
text-green-400
font-bold
"
>
● ONLINE
</p>


<p
className="
mt-2
text-xs
text-slate-500
"
>
Youyang AI Infrastructure
</p>


</div>




</aside>


);


}