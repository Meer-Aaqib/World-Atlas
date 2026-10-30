import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { featuredCountries } from "../../api/FeaturedData";

export const FeaturedCountries = () => {
  return (
    <section className="mx-auto max-w-[95%] py-4">
      <h2 className="mb-2 text-xl font-bold text-gray-900 md:text-2xl">
        Featured Countries
      </h2>

      <Swiper
        modules={[FreeMode, Scrollbar]}
        freeMode
        grabCursor
        slidesPerView={2}
        spaceBetween={10}
        scrollbar={{
          draggable: true,
          hide: false,
        }}
        breakpoints={{
          768: { slidesPerView: 4, spaceBetween: 14 }, // tablet
          1024: { slidesPerView: 6, spaceBetween: 16 }, // desktop
        }}
        className="pb-4! pt-2!"
      >
        {featuredCountries.map((country) => (
          <SwiperSlide key={country.id}>
            <Link
              to={`/countrydetail/${country.flag.toUpperCase()}`}
              draggable={false}
              className="group block overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image + flag corner pe */}
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={country.bgImage}
                  alt={country.name}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <img
                  src={`https://flagcdn.com/w320/${country.flag}.png`}
                  className="absolute left-1.5 top-1.5 flex h-8 w-10 items-center justify-center rounded-sm bg-white/90 text-base shadow-md  md:text-xl"
                />
              </div>

              {/* Name + region neeche */}
              <div className="p-2 md:p-3">
                <h3 className="truncate text-xs font-semibold text-gray-900 md:text-sm">
                  {country.name}
                </h3>
                <p className="truncate text-[10px] text-gray-500 md:text-xs">
                  {country.region}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
