import Image from "next/image";
import plate_0 from "@/assets/home.png";
import aboutPic from "@/assets/about.jpg";
import Button from "@/components/elements/Button";
import { PiBowlFood } from "react-icons/pi";
import { GiFullPizza } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import plate1 from "@/assets/plate1.png";
import plate2 from "@/assets/plate2.png";
import plate3 from "@/assets/plate3.png";
import mobileAppPic from "@/assets/movil-app.png";
import appStorePic from "@/assets/app1.png";
import playStorePic from "@/assets/app2.png";
import { IoCartOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <header className="mt-20 flex flex-col sm:flex-row sm:justify-between sm:items-center sm:mt-48 md:mt-24 bd-container">
        <div className="space-y-7">
          <h1 className="text-[36px] text-[#069C54] font-bold md:text-[64px]">
            Tasty food
          </h1>
          <p className="text-[24px] font-bold header_text md:text-[36px]">
            Try the best food of <br /> the week.
          </p>
          <Button text="View Menu" />
        </div>
        <Image
          src={plate_0}
          alt="Picture of a plate of food"
          width={300}
          height={300}
          className="w-[300px] self-center lg:w-[440px]"
        />
      </header>
      <section
        className="sm:mt-48 mt-24 flex sm:flex-row sm:gap-x-8 gap-y-8 sm:justify-between flex-col-reverse text-center w-[100%] bd-container"
        id="about"
      >
        <Image
          src={aboutPic}
          width={300}
          height={300}
          alt="About image"
          className="w-[280px] sm:w-[400px] rounded-2xl justify-center mx-auto sm:mx-0"
        />
        <div className="space-y-10 text-center sm:text-left sm:w-[40%]">
          <h4 className="text-[16px] font-semibold text-[#069C54]">About us</h4>
          <h2 className="text-[24px] md:text-[36px] header_text font-bold">
            We cook the best <br /> tasty food
          </h2>
          <p className="normal_text">
            We cook the best food in the entire city, with excellent customer
            service, the best meals and at the best price, visit us.
          </p>
          <Button text="Explore history" />
        </div>
      </section>
      <section className="text-center mt-28 bd-container" id="services">
        <div className="space-y-4">
          <h3 className="text-[#069C54] font-bold">Offering</h3>
          <h2 className="font-extrabold text-[24px] md:text-[36px] header_text">
            Our amazing services
          </h2>
        </div>
        <div className="mt-10 space-y-5 services__container grid gap-6">
          <div className="space-y-3">
            <PiBowlFood className="text-[64px] text-[#069C54] mx-auto" />
            <p className="text-[16px] md:text-[20px] header_text font-bold">
              Excellent food
            </p>
            <p className="normal_text">
              We offer our clients excellent quality services for many years,
              with the best and delicious food in the city.
            </p>
          </div>
          <div className="space-y-3">
            <GiFullPizza className="text-[64px] text-[#069C54] mx-auto" />
            <p className="text-[16px] header_text md:text-[20px] font-bold">
              Fast food
            </p>
            <p className="normal_text">
              We offer our clients excellent quality services for many years,
              with the best and delicious food in the city.
            </p>
          </div>
          <div className="space-y-3">
            <TbTruckDelivery className="text-[64px] text-[#069C54] mx-auto" />
            <p className="text-[16px] header_text md:text-[20px] font-bold">
              Excellent food
            </p>
            <p className="normal_text">
              We offer our clients excellent quality services for many years,
              with the best and delicious food in the city.
            </p>
          </div>
        </div>
      </section>
      <section className="text-center mt-28 bd-container" id="menu">
        <div className="space-y-3">
          <h3 className="font-bold text-[#069C54] text-[16px]">Special</h3>
          <h2 className="header_text font-extrabold text-[24px] md:text-[36px]">
            Menu of the week
          </h2>
        </div>
        <div className="mt-10 text-left menu__container grid gap-6">
          <div className="p-3 food__bg dark_shadow rounded-xl relative">
            <Image
              src={plate1}
              height={150}
              width={150}
              alt="A plate of food"
              className="w-[100px] md:w-[150px] mx-auto"
            />
            <div className="mt-10 space-y-1">
              <h3 className="header_text font-bold">Barbecue salad</h3>
              <p className="normal_text">Delicious dish</p>
              <h3 className="header_text font-bold">$22.00</h3>
            </div>
            <div className="bg-[#069C45] text-[#F1F3F2] p-3 absolute bottom-0 right-0 rounded-l-xl">
              <IoCartOutline className="text-16px" />
            </div>
          </div>
          <div className="p-6 food__bg dark_shadow relative rounded-xl">
            <Image
              src={plate2}
              height={150}
              width={150}
              alt="A plate of food"
              className="w-[100px] md:w-[150px] mx-auto"
            />
            <div className="mt-10 space-y-1">
              <h3 className="header_text font-bold">Salad with fish</h3>
              <p className="normal_text">Delicious dish</p>
              <h3 className="header_text font-bold">$12.00</h3>
            </div>
            <div className="bg-[#069C45] text-[#F1F3F2] p-3 absolute bottom-0 right-0 rounded-l-xl">
              <IoCartOutline className="text-16px" />
            </div>
          </div>
          <div className="p-6 food__bg dark_shadow relative rounded-xl">
            <Image
              src={plate3}
              height={150}
              width={150}
              alt="A plate of food"
              className="w-[100px] md:w-[150px] mx-auto"
            />
            <div className="mt-10 space-y-1">
              <h3 className="header_text font-bold">Spinach salad</h3>
              <p className="normal_text">Delicious dish</p>
              <h3 className="header_text font-bold">$9.50</h3>
            </div>
            <div className="bg-[#069C45] text-[#F1F3F2] p-3 absolute bottom-0 right-0 rounded-l-xl">
              <IoCartOutline className="text-16px" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col-reverse mt-28 sm:flex-row gap-16 sm:grid sm:gap-6 app__container bd-container">
        <Image
          src={mobileAppPic}
          alt="Picture of our mobile app"
          width={230}
          height={230}
          className="w-[230px] self-center sm:w-[275px] md:w-[400px]"
        />

        <div className="text-center space-y-6 sm:text-left">
          <h4 className="text-[#069C54] text-[16px] font-bold">App</h4>
          <h2 className="header_text text-[24px] md:text-[36px] font-extrabold">
            App is available
          </h2>
          <p className="normal_text">
            Find our application and download it, you can make reservations,
            food orders, see your deliveries on the way and much more.
          </p>
          <div className="flex justify-center items-center sm:justify-start gap-6">
            <Image
              src={appStorePic}
              width={120}
              height={120}
              alt="App store"
              className="w-[120px]"
            />
            <Image
              src={playStorePic}
              width={120}
              height={120}
              alt="Play store"
              className="w-[120px]"
            />
          </div>
        </div>
      </section>
      <section
        className="bd-container flex flex-col sm:flex-row text-center space-y-10 sm:text-left items-center justify-between mt-28 gap-10"
        id="contact"
      >
        <div className="space-y-5 sm:w-[60%]">
          <h4 className="text-[#069C54] text-[16px] font-bold">Let's talk</h4>
          <h2 className="header_text text-[24px] md:text-[36px] font-extrabold">
            Contact us
          </h2>
          <p className="normal_text text-wrap">
            If you want to reserve a table in our restaurant, contact us and we
            will attend you quickly, with our 24/7 chat service.
          </p>
        </div>
        <Button text="Contact us now" />
      </section>
      <footer className="bd-container pt-16 pb-8">
        <div className="footer__container grid gap-6">
          <div className="space-y-3">
            <h4 className="text-[#069C54] text-[16px] md:text-[20px] font-bold">
              Tasty Food
            </h4>
            <p className="normal_text">Restaurant</p>
            <div className="flex gap-5 normal_text text-[25px]">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] md:text-[24px] header_text font-extrabold">
              Services
            </h3>
            <ul className="normal_text space-y-2">
              <li>Delivery</li>
              <li>Pricing</li>
              <li>Fast food</li>
              <li>Reserve your spot</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] md:text-[24px] header_text font-extrabold">
              Information
            </h3>
            <ul className="normal_text space-y-2">
              <li>Event</li>
              <li>Contact us</li>
              <li>Privacy policy</li>
              <li>Terms of services</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] md:text-[24px] header_text font-extrabold">
              Address
            </h3>
            <ul className="normal_text space-y-2">
              <li>Lima - Peru</li>
              <li>Jr Union #999</li>
              <li>999 - 888 - 777</li>
              <li>tastyfood@email.com</li>
            </ul>
          </div>
        </div>
        <p className="text-[14px] text-[#A6A6A6] text-center">
          © 2020 Bedimcode. All right reserved
        </p>
      </footer>
    </main>
  );
}
