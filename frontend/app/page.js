'use client';
import Image from 'next/image';
import Home_back_image from '../components/Assets/Home_back_image.png';
import { NavBar } from '@/components/NavBar';
import Hero_bugger from "@/components/Assets/Hero_bugger.png";
import Cafe_Nuwara_logo from "@/components/Assets/Cafe_Nuwara_logo.png";
import Fabceylon_logo from "@/components/Assets/Fabceylon_logo.png";
import Fabceylon_Grand_logo from "@/components/Assets/Fabceylon_Grand_logo.png";
import Back_image_2 from "@/components/Assets/Back_image_2.png";
import Side_back_image from "@/components/Assets/Side_back_image.png";

import { Footer } from '@/components/Footer';
import { HeroHighlight, HeroHighlightDemo } from '@/components/HeroHighlight';
import '@/app/CSS/HomePage.css'
import Fab_logo_inner from '@/components/Assets/Fab_logo_inner.png';
import Fab_logo_outer from "@/components/Assets/Fab_logo_outer.png";
import Back_image_middle from "@/components/Assets/Back_image_middle.png"
import { InfiniteMovingCardsDemo } from '@/components/InfiniteMovingCardDemo';


export default function Home() {
  
  return (
    <div className="relative h-screen bg-black ">
      
      <Image 
      className='lgs:w-80 lgs:h-80
               mds:w-65 mds:h-65 
               sms:w-30 sms:h-30'
        src={Home_back_image}
        layout="fill"
        objectFit="cover"
        alt="Background Image"
      />
      <NavBar />

      {/* Hero Section */}
      <div className="relative flex items-center h-screen grid-cols-2 gap-2 text-left text-white justify-left -mt-28 sms:ml-64">
        <div style={{ marginLeft: '100px' }}>
          <h1 className="p-20 font-bold tracking-wider text-7xl font-poppins ml-100 mds:text-5xl sms:text-xl sms:ml-10 ">
            CHOOSE THE <br />
            <span className="text-orange-500 ">BEST</span> AMONG <br />
            BEST <span className="text-orange-500">FOODS...</span>
          </h1>
        </div>

        <div className="right-0 flex items-center justify-between sms:-ml-16">
          <Image
            className="right-0 flex items-center justify-between 
           
               lgs:w-80 lgs:h-80
               mds:w-65 mds:h-65 
               sms:w-32 sms:h-32 "
            
            src={Hero_bugger}
            alt="Burger image"
          />
        </div>
      </div>

      {/* Logos Grid Section */}
      <div className="relative grid grid-cols-4 gap-6 m-20 p-12 h-[30rem] bg-[#111010] rounded-[60px] mx-32 px-12 animate-fadeIn">
  <div className="relative">
    <article className="delay-100 animate-slideUp">
      <Image 
        className="absolute transition-transform duration-300 transform hover:scale-105"
        style={{ top: '30px', left: '30px' }}
        src={Cafe_Nuwara_logo}
        alt="Cafe Nuwara Logo"
        height={200}
        width={200}
      />
      <a 
        className="absolute text-3xl font-bold text-white transition-transform duration-300 font-poppins hover:scale-105"
        style={{ top: '250px', left: '40px' }}
      >
        Cafe Nuwara
      </a>
    </article>
  </div>

  <div className="relative">
    <article className="delay-200 animate-slideUp">
      <Image 
        className="absolute transition-transform duration-300 transform hover:scale-105"
        style={{ top: '30px', left: '40px' }}
        src={Fabceylon_logo}
        alt="Fab Ceylon Kandy Logo"
        height={200}
        width={200}
      />
      <a 
        className="absolute text-3xl font-bold text-white transition-transform duration-300 font-poppins hover:scale-105"
        style={{ top: '250px', left: '40px' }}
      >
        Fab Ceylon
      </a>
      <a 
        className="absolute text-3xl font-bold text-white transition-transform duration-300 font-poppins hover:scale-105"
        style={{ top: '290px', left: '60px' }}
      >
        Kandy
      </a>
    </article>
  </div>

  <div className="relative">
    <article className="delay-300 animate-slideUp">
      <Image 
        className="absolute transition-transform duration-300 transform hover:scale-105"
        style={{ top: '30px', left: '60px' }}
        src={Fabceylon_Grand_logo}
        alt="Fab Ceylon Grand Logo"
        height={200}
        width={200}
      />
      <a 
        className="absolute text-3xl font-bold text-white transition-transform duration-300 font-poppins hover:scale-105"
        style={{ top: '250px', left: '80px' }}
      >
        Fab Ceylon
      </a>
      <a 
        className="absolute text-3xl font-bold text-white transition-transform duration-300 font-poppins hover:scale-105"
        style={{ top: '290px', left: '100px' }}
      >
        Grand
      </a>
    </article>
  </div>

  <div className="relative">
    <article className="animate-slideUp delay-400">
      <Image 
        className="absolute transition-transform duration-300 transform hover:scale-105"
        style={{ top: '30px', left: '60px' }}
        src={Fabceylon_logo}
        alt="Fab Ceylon Kurunegala Logo"
        height={200}
        width={200}
      />
      <a 
        className="absolute text-3xl font-bold text-white transition-transform duration-300 font-poppins hover:scale-105"
        style={{ top: '250px', left: '70px' }}
      >
        Fab Ceylon Kurunegala
      </a>
    </article>
  </div>
</div>



      {/* Background Image Section */}
      <div className="relative flex items-center justify-center h-2/3 ">
        <Image 
          src={Back_image_middle}
          layout="fill"
          objectFit="cover"
          alt="Background Image"
        /> 
        <div className="absolute z-10 text-white ml-[400px] mr-20 ">
        <p className="items-center justify-between p-20 text-4xl font-bold tracking-wider opacity-100 font-poppins ml-30 ">
          Fab Ceylon Cafe and Restaurant offers a unique culinary experience
          with authentic Sri Lankan cuisine. The cozy restaurant features 
          traditional recipes and fresh ingredients, serving flavorful curries,
          aromatic rice dishes, and delectable desserts. Guests enjoy warm hospitality in
        </p>

        </div>
         
      </div>

      {/* Title Section */}
      <div>
        <div style={{ paddingTop: '120px' }}></div>
        <div className='font-serif text-4xl font-bold text-center'>
          <h1 className="headline">
          F A B C E Y L O N
          </h1>
          </div>
      </div>


      {/* Cafe Nuwara Section */}
      <div className="relative flex items-center text-left text-white mt-36 justify-left">
      <Image 
    className="flex items-center justify-between h-80 w-80 ml-28 zoom-animation"
    src={Cafe_Nuwara_logo}
    height={600}
    width={600}
    alt="Cafe Nuwara Logo"
  />
        <article>
          <h1 className="font-serif text-4xl font-bold text-center">
            CAFE NUWARA
          </h1>
          <p className="p-10 ml-48 mr-20 font-serif text-2xl font-bold tracking-wider">
            Cafe Nuwara is a cozy, charming spot that offers a delightful blend 
            of rich coffee and delicious bites in a warm, inviting atmosphere. 
            Whether you're looking to catch up with friends or enjoy some quiet 
            time, this cafe provides the perfect setting with its comfortable 
            seating and friendly service. A hidden gem for coffee lovers and 
            food enthusiasts alike.
          </p>
        </article>
      </div>

      {/* Fab Ceylon Kandy Section */}
      <div className="relative flex items-center h-full m-8 -mt-20 text-left text-white h-2/3 justify-left ">
        <article>
          <h1 className="text-4xl text-center font-serif font-bold mb-10 mr-[570px]">
            FAB CEYLON KANDY
          </h1>
          <p className="text-2xl font-serif font-bold mr-28 ml-28 tracking-wider mr-[600px]">
            Cafe Nuwara is a cozy, charming spot that offers a delightful blend 
            of rich coffee and delicious bites in a warm, inviting atmosphere. 
            Whether you're looking to catch up with friends or enjoy some quiet 
            time, this cafe provides the perfect setting with its comfortable 
            seating and friendly service. A hidden gem for coffee lovers and 
            food enthusiasts alike.
          </p>
        </article>
        <Image 
          className="absolute top-0 left-0 h-80 w-80 rotate-with-pause-counterclockwise"
          style={{ top: '180px', left: '1030px' }}
          src={Fab_logo_inner}
          alt="Fab Ceylon Kandy Logo"
        />
        <Image 
          className="absolute top-0 left-0 h-80 w-80 rotate-with-pause-clockwise"
          src={Fab_logo_outer}
          alt="Fab Ceylon Kandy Logo"
          style={{ top: '180px', left: '1030px',animationDelay: '0.5s' }}
        />
      </div>

      {/* Fab Ceylon Grand Section */}
      <div className="relative flex items-center m-8 -mt-12 text-left text-white h-2/3 justify-left ">
        <Image 
          className="flex items-center justify-between ml-20 -mt-12 h-80 w-80 zoom-animation"
          src={Fabceylon_Grand_logo}
          alt="Fab Ceylon Grand Logo"
        />
        <article>
          <h1 className="mt-16 font-serif text-4xl font-bold text-center">
            FAB CEYLON GRAND
          </h1>
          <p className="p-10 mb-40 ml-48 font-serif text-2xl font-bold tracking-wider">
          Fab Ceylon Grand is where culinary elegance meets vibrant Sri Lankan 
          hospitality. Our upscale dining experience celebrates both the richness 
          of traditional Sri Lankan cuisine and the allure of global flavors, all 
          crafted with the finest ingredients. At Fab Ceylon Grand, we strive to create 
          a warm, welcoming atmosphere that suits everything from intimate gatherings to 
          larger celebrations. Our chefs’ specialties, including gourmet renditions of local 
          classics, are complemented by an array of signature drinks and desserts, ensuring 
          every visit is memorable. Step into Fab Ceylon Grand and enjoy a truly elevated dining journey.
          </p>
        </article>
      </div>

      {/* Fab Ceylon Kurunegala Section */}
      <div className="relative flex items-center h-full m-8 -mt-20 text-left text-white h-2/3 justify-left">
        <article className=" slide-in-left">
          <h1 className="text-4xl text-center font-serif font-bold mb-10 mr-[570px]">
            FAB CEYLON KURUNEGALA
          </h1>
          <p className="text-2xl font-serif font-bold mr-28 ml-28 tracking-wider mr-[600px] ">
          Located in the heart of Kurunegala, Fab Ceylon offers a unique blend
          of Sri Lankan flavors with a modern twist. Our welcoming ambiance, 
          paired with a wide variety of authentic Sri Lankan and international dishes, 
          provides an ideal setting for friends, families, and food enthusiasts alike. 
          Known for our signature offerings, such as the Biriyani Bucket and the popular 
          Fab Monster Boat, we are passionate about delivering not only delicious food but 
          a memorable dining experience. Whether you're here for a quick bite or a leisurely 
          meal, Fab Ceylon Kurunegala promises quality, flavor, and exceptional service.
          </p>
        </article>
        <Image 
          className="absolute top-0 left-0 h-80 w-80 rotate-with-pause-clockwise"
          style={{ top: '190px', left: '1030px' }}
          src={Fab_logo_inner}
          alt="Fab Ceylon Kandy Logo"
        />
        <Image 
          className="absolute top-0 left-0 h-80 w-80 rotate-with-pause-counterclockwise"
          src={Fab_logo_outer}
          alt="Fab Ceylon Kandy Logo"
          style={{ top: '190px', left: '1030px' }}
        />
        
      </div>
      
      <div className='-mt-60'>
        <InfiniteMovingCardsDemo />
      </div>

    </div>
    
  );
}
