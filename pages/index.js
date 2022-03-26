import Head from 'next/head';
import DefaultHeader from '../layout/Default';
import Services from '../components/services/Services';
import Hero from '../components/hero/Hero';
import BoxFloating from '../layout/BoxFloating';
import Process from '../components/process/Process';
export default function Home() {
  return (
    <div>
      <Head>
        <title>College</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
         <body>
          <DefaultHeader>
            <Hero/>
            <Services/>
            <Process/>
               {/* floating containers */}
            <BoxFloating/>
          </DefaultHeader>
         </body>
    </div>
  )
}
