"use client";


import {useEffect,useState} from "react";



export default function ProductsAdmin(){


const [products,setProducts]=useState<any[]>([]);


const [form,setForm]=useState<any>({

name:"",
slug:"",
category:"",
shortDescription:"",
description:"",
features:"",
image:"",
status:"Published"

});



const [edit,setEdit]=useState<any>(null);




async function load(){


const res=
await fetch("/api/admin/products");


setProducts(
await res.json()
);


}



useEffect(()=>{

load();

},[]);







async function save(){



const payload={

...form,

features:
form.features
.split(",")

};



if(edit){


await fetch(

`/api/admin/products/${edit.id}`,

{

method:"PATCH",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(payload)

}

);


}
else{


await fetch(

"/api/admin/products",

{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(payload)

}

);


}



setEdit(null);


setForm({

name:"",
slug:"",
category:"",
shortDescription:"",
description:"",
features:"",
image:"",
status:"Published"

});


load();


}






async function remove(id:string){


if(!confirm("Delete product?"))
return;



await fetch(

`/api/admin/products/${id}`,

{

method:"DELETE"

}

);


load();


}






function editProduct(item:any){


setEdit(item);


setForm({

...item,

features:
item.features.join(",")

});


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

Product Intelligence Center

</h1>


<p className="
text-slate-400
mt-2
">

Manage Youyang products

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

{
edit
?
"Edit Product"
:
"Add Product"
}

</h2>





<div className="
grid
gap-4
mt-6
">


<input
className="input"
placeholder="Product Name"
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
placeholder="Slug"
value={form.slug}
onChange={
e=>setForm({
...form,
slug:e.target.value
})
}
/>




<input
className="input"
placeholder="Category"
value={form.category}
onChange={
e=>setForm({
...form,
category:e.target.value
})
}
/>



<input
className="input"
placeholder="Short Description"
value={form.shortDescription}
onChange={
e=>setForm({
...form,
shortDescription:e.target.value
})
}
/>



<textarea

className="input"

placeholder="Description"

value={form.description}

onChange={
e=>setForm({
...form,
description:e.target.value
})
}

/>



<input

className="input"

placeholder="Features comma separated"

value={form.features}

onChange={
e=>setForm({
...form,
features:e.target.value
})
}

/>





<select

className="input"

value={form.status}

onChange={
e=>setForm({
...form,
status:e.target.value
})
}

>


<option>
Published
</option>


<option>
Hidden
</option>


</select>




<button

onClick={save}

className="
rounded-xl
bg-cyan-400
py-3
text-black
font-bold
"

>

Save Product

</button>


</div>


</div>








<div className="
mt-10
grid
md:grid-cols-3
gap-6
">



{

products.map(item=>(


<div

key={item.id}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-6
"

>


<h2 className="
text-xl
font-bold
">

{item.name}

</h2>



<p className="
text-slate-400
mt-2
">

{item.category}

</p>



<p className="
mt-3
">

{item.status}

</p>




<div className="
flex
gap-3
mt-5
">


<button

onClick={()=>editProduct(item)}

className="
bg-yellow-400
text-black
px-4
py-2
rounded-lg
"

>

Edit

</button>



<button

onClick={()=>remove(item.id)}

className="
bg-red-500
px-4
py-2
rounded-lg
"

>

Delete

</button>


</div>



</div>


))

}



</div>




</div>


)

}