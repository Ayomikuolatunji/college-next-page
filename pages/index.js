import Head from 'next/head'
import DefaultHeader from '../layout/Default'
import DesignImg from "../public/img/element.png"
import Image from 'next/image';


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
          
           </DefaultHeader>
           <div className="design-box absolute sm:top-0 sm:left-0 right-0 top-0 -z-10 sm:mt-64 mt-80">
              <Image src={DesignImg} alt={"design-img"} className="abolute"/>
          </div>
         </body>
    </div>
  )
}
