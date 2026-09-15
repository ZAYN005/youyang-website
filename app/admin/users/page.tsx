"use client";


import {useEffect,useState} from "react";



export default function UsersPage(){


const [users,setUsers]=useState<any[]>([]);


const [form,setForm]=useState({

name:"",
email:"",
password:"",
role:"SALES"

});




async function load(){


const res=
await fetch("/api/admin/users");


setUsers(
await res.json()
);


}



useEffect(()=>{

load();

},[]);






async function createUser(){


await fetch(
"/api/admin/users",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(form)

}

);


setForm({

name:"",
email:"",
password:"",
role:"SALES"

});


load();


}







async function remove(id:string){


await fetch(

`/api/admin/users/${id}`,

{

method:"DELETE"

}

);


load();

}





return (

<div className="
min-h-screen
bg-[#020617]
p-10
text-white
">



<h1 className="
text-4xl
font-bold
">

User Management Center

</h1>


<p className="
text-slate-400
mt-2
">

Manage Admin Access & Roles

</p>






<div className="
mt-10
rounded-3xl
border
border-cyan-400/20
bg-white/5
p-8
">


<h2 className="
text-2xl
font-bold
">

Create User

</h2>




<div className="
grid
gap-4
mt-5
">


<input
className="input"
placeholder="Name"
value={form.name}
onChange={
e=>setForm({
...form,
name:e.target.value
})
}
/>



<input
className="input"
placeholder="Email"
value={form.email}
onChange={
e=>setForm({
...form,
email:e.target.value
})
}
/>




<input
className="input"
placeholder="Password"
value={form.password}
onChange={
e=>setForm({
...form,
password:e.target.value
})
}
/>




<select

className="input"

value={form.role}

onChange={
e=>setForm({
...form,
role:e.target.value
})
}

>

<option>ADMIN</option>

<option>MANAGER</option>

<option>SALES</option>

<option>VIEWER</option>


</select>





<button

onClick={createUser}

className="
rounded-xl
bg-cyan-400
py-3
font-bold
text-black
"

>

Create User

</button>



</div>


</div>








<div className="
mt-10
space-y-5
">


{

users.map(user=>(


<div

key={user.id}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-6
flex
justify-between
"

>


<div>

<h2 className="
text-xl
font-bold
">

{user.name}

</h2>


<p className="
text-slate-400
">

{user.email}

</p>


</div>



<div>

<p className="text-cyan-400">

{user.role}

</p>


<p>

{user.status}

</p>


</div>



<button

onClick={()=>remove(user.id)}

className="
bg-red-500
px-4
py-2
rounded-xl
"

>

Delete

</button>



</div>


))

}



</div>





</div>

)

}