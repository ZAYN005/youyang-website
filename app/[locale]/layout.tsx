import {NextIntlClientProvider} from "next-intl";
import {notFound} from "next/navigation";
import {getMessages} from "next-intl/server";


export default async function LocaleLayout({

  children,

  params

}: {

  children: React.ReactNode;

  params: Promise<{locale:string}>;

}) {


  const {locale} = await params;


  if(!["en","zh"].includes(locale)){

    notFound();

  }


  const messages = await getMessages();


  return (

    <NextIntlClientProvider

      locale={locale}

      messages={messages}

    >

      {children}

    </NextIntlClientProvider>

  );

}