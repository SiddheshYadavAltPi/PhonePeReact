import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Swiper js
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

function Home() {
  return (
    <div className="p-2 pb-16">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="rounded-lg"
            src="https://www.phonepe.com/webstatic/static/6341d1762ac4ed98d04996c9b03b5eb5/5707d/hp-banner4wt.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-lg"
            src="https://www.phonepe.com/webstatic/static/a90935c34b42d0c15c4e8c975558d876/5707d/hp-banner1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-lg"
            src="https://www.phonepe.com/webstatic/static/86b8d43049f74fc5eeaa67dba014e12b/5707d/hp-banner3.png"
          />
        </SwiperSlide>
      </Swiper>
      <section className="bg-[white] dark:bg-dark_background rounded-md p-2 mt-2 font-[Roboto] dark:text-dark_ternary">
        <header className="font-black text-lg">Transfer Money</header>
        <div className="mx-3">
          <ul className="flex justify-between text-[white] mt-1">
            <li className="text-center">
              <div className="bg-primary dark:bg-dark_secondary rounded-2xl p-3 w-max m-auto">
                <FontAwesomeIcon size="lg" className="mx-1" icon={['far','user']} />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">To Mobile<br/>Number</div>
            </li>

            <li className="text-center">
              <div className="bg-primary dark:bg-dark_secondary  rounded-2xl p-3 w-max m-auto">
                <FontAwesomeIcon
                  size="lg"
                  className="mx-1"
                  icon="building-columns"
                />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">To Bank/<br/>UPI ID</div>
            </li>

            <li className="text-center">
              <div className="bg-primary dark:bg-dark_secondary  rounded-2xl p-3 w-max m-auto">
                <FontAwesomeIcon
                  size="lg"
                  className=""
                  icon="rotate-left"
                />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">To Self<br/>Account</div>
            </li>

            <li className="text-center">
              <div className="bg-primary dark:bg-dark_secondary  rounded-2xl p-3 w-max m-auto">
                <FontAwesomeIcon
                  size="lg"
                  className="mx-1"
                  icon="landmark"
                />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">Check<br/>Balance</div>
            </li>
          </ul>
        </div>
      </section>

      <section className="flex justify-between mt-2 font-[Roboto] text-[white]">
        <div className="text-center rounded-md p-1 w-28 text-[white] bg-[#3b82f6] dark:bg-[#2a66c5] dark:text-dark_ternary">
          <FontAwesomeIcon size="lg" className="m-1" icon="wallet" />
          <div className="text-xs">PhonePe Wallet</div>
        </div>
        <div className="text-center rounded-md p-1 w-28 bg-[#3b82f6] dark:bg-[#2a66c5] dark:text-dark_ternary">
          <FontAwesomeIcon size="lg" className="m-1" icon="gift" />
          <div className="text-xs">Rewards</div>
        </div>
        <div className="text-center rounded-md p-1 w-28 bg-[#3b82f6] dark:bg-[#2a66c5] dark:text-dark_ternary">
          <FontAwesomeIcon size="lg" className="m-1" icon="bullhorn" />
          <div className="text-xs">Refer & Earn</div>
        </div>
      </section>

      <section className="bg-[white] dark:bg-dark_background rounded-md p-2 mt-2 font-[Roboto] dark:text-dark_ternary">
        <header className="font-black text-lg">Recharge and Pay Bills</header>
        <div className="mx-3">
          <ul className="flex justify-between text-primary dark:text-dark_secondary mt-1">
            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon size="lg" className="mx-1" icon={['far','user']} />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">To Mobile<br/>Number</div>
            </li>

            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon
                  size="lg"
                  className="mx-1"
                  icon="building-columns"
                />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">To Bank/<br/>UPI ID</div>
            </li>

            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon
                  size="lg"
                  className=""
                  icon="rotate-left"
                />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">To Self<br/>Account</div>
            </li>

            <li className="text-center">  
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon
                  size="lg"
                  className="mx-1"
                  icon="landmark"
                />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">Check<br/>Balance</div>
            </li>
          </ul>
          <ul className="flex justify-between text-primary mt-1 dark:text-dark_secondary">
            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon size="lg" className="mx-1" icon={['far','user']} />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">To Mobile<br/>Number</div>
            </li>

            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon
                  size="lg"
                  className="mx-1"
                  icon="building-columns"
                />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">To Bank/<br/>UPI ID</div>
            </li>

            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon
                  size="lg"
                  className=""
                  icon="rotate-left"
                />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">To Self<br/>Account</div>
            </li>

            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon
                  size="lg"
                  className="mx-1"
                  icon="landmark"
                />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">Check<br/>Balance</div>
            </li>
          </ul>
        </div>
      </section>
      
      <section className="bg-[white] dark:bg-dark_background rounded-md p-2 mt-2 font-[Roboto] dark:text-dark_ternary">
        <header className="font-black text-lg">Recharge and Pay Bills</header>
        <div className="mx-3">
          <ul className="flex justify-between text-primary mt-1 dark:text-dark_secondary">
            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon size="lg" className="mx-1" icon={['far','user']} />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">To Mobile<br/>Number</div>
            </li>

            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon
                  size="lg"
                  className="mx-1"
                  icon="building-columns"
                />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">To Bank/<br/>UPI ID</div>
            </li>

            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon
                  size="lg"
                  className=""
                  icon="rotate-left"
                />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">To Self<br/>Account</div>
            </li>

            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon
                  size="lg"
                  className="mx-1"
                  icon="landmark"
                />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">Check<br/>Balance</div>
            </li>
          </ul>
          <ul className="flex justify-between text-primary mt-1 dark:text-dark_secondary">
            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon size="lg" className="mx-1" icon={['far','user']} />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">To Mobile<br/>Number</div>
            </li>

            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon
                  size="lg"
                  className="mx-1"
                  icon="building-columns"
                />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">To Bank/<br/>UPI ID</div>
            </li>

            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon
                  size="lg"
                  className=""
                  icon="rotate-left"
                />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">To Self<br/>Account</div>
            </li>

            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon
                  size="lg"
                  className="mx-1"
                  icon="landmark"
                />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">Check<br/>Balance</div>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-[white] dark:bg-dark_background rounded-md p-2 mt-2 font-[Roboto] dark:text-dark_ternary">
        <header className="font-black text-lg">Recharge and Pay Bills</header>
        <div className="mx-3">
          <ul className="flex justify-between text-primary mt-1 dark:text-dark_secondary">
            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon size="lg" className="mx-1" icon={['far','user']} />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">To Mobile<br/>Number</div>
            </li>

            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon
                  size="lg"
                  className="mx-1"
                  icon="building-columns"
                />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">To Bank/<br/>UPI ID</div>
            </li>

            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon
                  size="lg"
                  className=""
                  icon="rotate-left"
                />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">To Self<br/>Account</div>
            </li>

            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon
                  size="lg"
                  className="mx-1"
                  icon="landmark"
                />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">Check<br/>Balance</div>
            </li>
          </ul>
          <ul className="flex justify-between text-primary mt-1 dark:text-dark_secondary">
            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon size="lg" className="mx-1" icon={['far','user']} />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">To Mobile<br/>Number</div>
            </li>

            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon
                  size="lg"
                  className="mx-1"
                  icon="building-columns"
                />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">To Bank/<br/>UPI ID</div>
            </li>

            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon
                  size="lg"
                  className=""
                  icon="rotate-left"
                />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">To Self<br/>Account</div>
            </li>

            <li className="text-center">
              <div className="p-3 w-max m-auto">
                <FontAwesomeIcon
                  size="lg"
                  className="mx-1"
                  icon="landmark"
                />
              </div>
              <div className="text-[black] dark:text-dark_ternary mt-1 text-xs">Check<br/>Balance</div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
