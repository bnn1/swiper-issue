import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import "swiper/css";
const App = () => {
  // store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <main>
      {/* Main Swiper -> pass thumbs swiper instance */}
      <Swiper modules={[Thumbs]} thumbs={{ [swiper]: thumbsSwiper }}>
        {/* ... */}
      </Swiper>

      {/* Thumbs Swiper -> store swiper instance */}
      {/* It is also required to set watchSlidesProgress prop */}
      <Swiper modules={[Thumbs]} watchSlidesProgress onSwiper={setThumbsSwiper}>
        {/* ... */}
      </Swiper>
    </main>
  );
};

export default function A() {
  return <App />;
}
