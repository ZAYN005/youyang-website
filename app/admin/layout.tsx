import AuthProvider from "@/components/providers/SessionProvider";


export default function AdminLayout({
children
}:{
children:React.ReactNode
}){


return (

<AuthProvider>

{children}

</AuthProvider>

);

}