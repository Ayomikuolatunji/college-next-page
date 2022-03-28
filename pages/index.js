import Head from 'next/head';
import DefaultHeader from '../layout/Default';
import Services from '../components/services/Services';
import Hero from '../components/hero/Hero';
import BoxFloating from '../layout/BoxFloating';
import Process from '../components/process/Process';
import Downlaod from '../components/dowload/Downlaod';
import Learn from '../components/Learn/Learn';
import Tutor from '../components/tutor/Tutor';
import Course from '../components/courses/Course';
import Testimonial from '../components/testimonial/Testimonial';
import Footer from '../components/footer/Footer';
import ScrollToUp from "../layout/ScrollToUp"



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
            <Learn/>
            <Process/>
            <Downlaod/>
            <Tutor/>
            <Course/>
            <Testimonial/>
            <ScrollToUp/>
            <Footer/>
               {/* floating containers */}
            <BoxFloating/>
          </DefaultHeader>
         </body>
    </div>
  )
}
