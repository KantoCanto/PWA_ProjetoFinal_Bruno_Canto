import React from 'react';
import HeroSlide from '../components/common/HeroSlide';
import tmdbConfig from "../api/configs/tmdb.config";
import { Box } from '@mui/material';
import uiConfig from "../configs/ui.config";
import Container from "../components/common/Container";
//import MediaSlide from "../components/common/MediaSlide";


const HomePage = () => {
   return(
        <>
            <HeroSlide mediaType={tmdbConfig.mediaType.movie} mediaCategory={tmdbConfig.mediaCategory.popular}/>

            <Box marginTop="-4rem" sx={{...uiConfig.style.mainContent}}>
                <Container></Container>
            </Box>
        </>
   )
}

export default HomePage;