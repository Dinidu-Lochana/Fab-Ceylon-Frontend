'use client';
import Image from 'next/image';
import Home_back_image from '../components/Assets/Home_back_image.png';
import NavBar from '@/components/NavBar';
import Hero_bugger from "@/components/Assets/Hero_bugger.png";
import Cafe_Nuwara_logo from "@/components/Assets/Cafe_Nuwara_logo.png";
import Fabceylon_logo from "@/components/Assets/Fabceylon_logo.png";
import Fabceylon_Grand_logo from "@/components/Assets/Fabceylon_Grand_logo.png";
import Fab_logo_inner from '@/components/Assets/Fab_logo_inner.png';
import Fab_logo_outer from "@/components/Assets/Fab_logo_outer.png";
import Back_image_middle from "@/components/Assets/Back_image_middle.png";
import { InfiniteMovingCardsDemo } from '@/components/InfiniteMovingCardDemo';
import '@/app/CSS/HomePage.css';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 ">
        <Image
          src={Home_back_image}
          fill
          style={{ objectFit: 'cover' }}
          alt="Background Image"
          priority
        />
      </div>
      <NavBar />

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-20 pt-24 md:pt-32 pb-10 md:pb-0 text-white">
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h1 className="font-bold tracking-wider text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-poppins mb-6">
            CHOOSE THE <br />
            <span className="text-orange-500">BEST</span> AMONG <br />
            BEST <span className="text-orange-500">FOODS...</span>
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
          <Image
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96"
            src={Hero_bugger}
            alt="Burger image"
          />
        </div>
      </section>

      {/* Logos Grid Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-4 md:mx-20 my-8 p-4 md:p-12 bg-[#111010] rounded-3xl md:rounded-[60px]">
        {/* Cafe Nuwara */}
        <div className="relative flex flex-col items-center">
          <Image
            className="transition-transform duration-300 transform hover:scale-105 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40"
            src={Cafe_Nuwara_logo}
            alt="Cafe Nuwara Logo"
            width={160}
            height={160}
          />
          <span className="mt-4 text-base sm:text-lg md:text-2xl font-bold text-white font-poppins">Cafe Nuwara</span>
        </div>
        {/* Fab Ceylon Kandy */}
        <div className="relative flex flex-col items-center">
          <Image
            className="transition-transform duration-300 transform hover:scale-105 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40"
            src={Fabceylon_logo}
            alt="Fab Ceylon Kandy Logo"
            width={160}
            height={160}
          />
          <span className="mt-4 text-base sm:text-lg md:text-2xl font-bold text-white font-poppins">Fab Ceylon</span>
          <span className="text-base sm:text-lg md:text-2xl font-bold text-white font-poppins">Kandy</span>
        </div>
        {/* Fab Ceylon Grand */}
        <div className="relative flex flex-col items-center">
          <Image
            className="transition-transform duration-300 transform hover:scale-105 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40"
            src={Fabceylon_Grand_logo}
            alt="Fab Ceylon Grand Logo"
            width={160}
            height={160}
          />
          <span className="mt-4 text-base sm:text-lg md:text-2xl font-bold text-white font-poppins">Fab Ceylon</span>
          <span className="text-base sm:text-lg md:text-2xl font-bold text-white font-poppins">Grand</span>
        </div>
        {/* Fab Ceylon Kurunegala */}
        <div className="relative flex flex-col items-center">
          <Image
            className="transition-transform duration-300 transform hover:scale-105 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40"
            src={Fabceylon_logo}
            alt="Fab Ceylon Kurunegala Logo"
            width={160}
            height={160}
          />
          <span className="mt-4 text-base sm:text-lg md:text-2xl font-bold text-white font-poppins text-center">Fab Ceylon Kurunegala</span>
        </div>
      </section>

      {/* Background Image Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[250px] md:min-h-[350px] lg:min-h-[400px] my-8">
        <div className="relative w-full md:w-1/2 h-40 md:h-72 lg:h-96">
          <Image
            src={Back_image_middle}
            fill
            style={{ objectFit: 'cover', borderRadius: '1.5rem' }}
            alt="Background Image"
            className="rounded-2xl"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-12 mt-4 md:mt-0">
          <p className="text-white text-lg sm:text-xl md:text-2xl font-bold font-poppins">
            Fab Ceylon Cafe and Restaurant offers a unique culinary experience with authentic Sri Lankan cuisine. The cozy restaurant features traditional recipes and fresh ingredients, serving flavorful curries, aromatic rice dishes, and delectable desserts. Guests enjoy warm hospitality in a modern setting.
          </p>
        </div>
      </section>

      {/* Title Section */}
      <div className="py-10">
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-center headline">
          F A B C E Y L O N
        </h1>
      </div>

      {/* Cafe Nuwara Section */}
      <section className="flex flex-col md:flex-row items-center text-white my-12 px-4 md:px-20">
        <Image
          className="w-40 h-40 md:w-60 md:h-60 mb-6 md:mb-0 md:mr-12 rounded-xl"
          src={Cafe_Nuwara_logo}
          width={240}
          height={240}
          alt="Cafe Nuwara Logo"
        />
        <article>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4">CAFE NUWARA</h2>
          <p className="text-base sm:text-lg md:text-xl font-bold tracking-wider">
            Cafe Nuwara is a cozy, charming spot that offers a delightful blend of rich coffee and delicious bites in a warm, inviting atmosphere. Whether you're looking to catch up with friends or enjoy some quiet time, this cafe provides the perfect setting with its comfortable seating and friendly service. A hidden gem for coffee lovers and food enthusiasts alike.
          </p>
        </article>
      </section>

      {/* Fab Ceylon Kandy Section */}
      <section className="flex flex-col md:flex-row-reverse items-center text-white my-12 px-4 md:px-20">
        <Image
          className="w-40 h-40 md:w-60 md:h-60 mb-6 md:mb-0 md:ml-12 rounded-xl"
          src={Fab_logo_inner}
          width={240}
          height={240}
          alt="Fab Ceylon Kandy Logo"
        />
        <article>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4">FAB CEYLON KANDY</h2>
          <p className="text-base sm:text-lg md:text-xl font-bold tracking-wider">
            Cafe Nuwara is a cozy, charming spot that offers a delightful blend of rich coffee and delicious bites in a warm, inviting atmosphere. Whether you're looking to catch up with friends or enjoy some quiet time, this cafe provides the perfect setting with its comfortable seating and friendly service. A hidden gem for coffee lovers and food enthusiasts alike.
          </p>
        </article>
      </section>

      {/* Fab Ceylon Grand Section */}
      <section className="flex flex-col md:flex-row items-center text-white my-12 px-4 md:px-20">
        <Image
          className="w-40 h-40 md:w-60 md:h-60 mb-6 md:mb-0 md:mr-12 rounded-xl"
          src={Fabceylon_Grand_logo}
          width={240}
          height={240}
          alt="Fab Ceylon Grand Logo"
        />
        <article>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4">FAB CEYLON GRAND</h2>
          <p className="text-base sm:text-lg md:text-xl font-bold tracking-wider">
            Fab Ceylon Grand is where culinary elegance meets vibrant Sri Lankan hospitality. Our upscale dining experience celebrates both the richness of traditional Sri Lankan cuisine and the allure of global flavors, all crafted with the finest ingredients. At Fab Ceylon Grand, we strive to create a warm, welcoming atmosphere that suits everything from intimate gatherings to larger celebrations. Our chefs’ specialties, including gourmet renditions of local classics, are complemented by an array of signature drinks and desserts, ensuring every visit is memorable. Step into Fab Ceylon Grand and enjoy a truly elevated dining journey.
          </p>
        </article>
      </section>

      {/* Fab Ceylon Kurunegala Section */}
      <section className="flex flex-col md:flex-row-reverse items-center text-white my-12 px-4 md:px-20">
        <Image
          className="w-40 h-40 md:w-60 md:h-60 mb-6 md:mb-0 md:ml-12 rounded-xl"
          src={Fab_logo_inner}
          width={240}
          height={240}
          alt="Fab Ceylon Kurunegala Logo"
        />
        <article>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4">FAB CEYLON KURUNEGALA</h2>
          <p className="text-base sm:text-lg md:text-xl font-bold tracking-wider">
            Located in the heart of Kurunegala, Fab Ceylon offers a unique blend of Sri Lankan flavors with a modern twist. Our welcoming ambiance, paired with a wide variety of authentic Sri Lankan and international dishes, provides an ideal setting for friends, families, and food enthusiasts alike. Known for our signature offerings, such as the Biriyani Bucket and the popular Fab Monster Boat, we are passionate about delivering not only delicious food but a memorable dining experience. Whether you're here for a quick bite or a leisurely meal, Fab Ceylon Kurunegala promises quality, flavor, and exceptional service.
          </p>
        </article>
      </section>

      {/* Cards Demo */}
      <div className="my-12">
        <InfiniteMovingCardsDemo />
      </div>
    </div>
  );
}