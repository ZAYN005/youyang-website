"use client";

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function SettingsPage(){


const [language,setLanguage] = useState("English");


const { data: session, status } = useSession();

const router = useRouter();



if(status === "loading"){

return (
<p className="text-white p-10">
Loading...
</p>
);

}



if(session?.user?.role !== "ADMIN"){

router.push("/admin/dashboard");

return null;

}


return (

<main className="
min-h-screen
bg-[#020617]
p-10
text-white
">


<h1 className="
text-5xl
font-bold
">
Settings
</h1>


<p className="
mt-3
text-slate-400
">
Manage system preferences and account settings
</p>





<div className="
mt-10
grid
gap-8
max-w-5xl
">



{/* Account */}

<section className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
">


<h2 className="
text-2xl
font-bold
">
Account
</h2>


<div className="
mt-6
space-y-4
">


<div className="
rounded-xl
bg-black/30
p-5
">

<p className="text-slate-400 text-sm">
Name
</p>

<p className="text-lg">
Youyang Admin
</p>

</div>



<div className="
rounded-xl
bg-black/30
p-5
">

<p className="text-slate-400 text-sm">
Email
</p>

<p className="text-lg">
admin@yyteck.cn
</p>

</div>


</div>


</section>







{/* Security */}

<section className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
">


<h2 className="
text-2xl
font-bold
">
Security
</h2>



<p className="
mt-3
text-slate-400
">
Manage your admin session
</p>



<button

onClick={()=>signOut({
callbackUrl:"/admin/login"
})}

className="
mt-6
rounded-xl
bg-red-500
px-8
py-4
font-bold
hover:bg-red-600
"

>

Logout

</button>



</section>







{/* Language */}

<section className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
">


<h2 className="
text-2xl
font-bold
">
Language
</h2>


<p className="
mt-3
text-slate-400
">
Choose dashboard language
</p>



<select

value={language}

onChange={(e)=>setLanguage(e.target.value)}

className="
mt-6
w-full
rounded-xl
bg-black/30
border
border-white/10
p-4
text-white
"

>


<option>
English
</option>


<option>
中文
</option>


</select>



</section>







{/* System */}

<section className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
">


<h2 className="
text-2xl
font-bold
">
System
</h2>



<div className="
mt-6
rounded-xl
bg-black/30
p-5
">


<p className="
text-green-400
font-semibold
">
● System Online
</p>


<p className="
mt-2
text-slate-400
">
Youyang AI Command Center
</p>


</div>



</section>





</div>



</main>

);

}