import { Box } from "@mui/material";
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper/core';
import {Swiper as SwiperReact} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const NavigationSwiper = ({ children }) => {
  return (
    <Box sx={{
      "& .swiper-slide": {
        width: "100%",
        opacity: "0.6",
        paddingBottom: "3rem"
      },
      "& .swiper-slide-active": { opacity: 1 },
      "& .swiper-pagination-bullet": {
        backgroundColor: "text.primary"
      },
      "& .swiper-button-next, & .swiper-button-prev": {
        color: "text.primary",
        "&::after": {
          fontSize: { xs: "1rem", md: "2rem" }
        }
      },
      "& .swiper": {
        paddingX: { xs: "1rem", md: "4rem" }
      }
    }}>
      <SwiperReact
        spaceBetween={10}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        style={{ width: "100%", height: "max-content" }}
      >
        {children}
      </SwiperReact>
    </Box>
  );
};

export default NavigationSwiper;