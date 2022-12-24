import {Stack,Box } from "@mui/material";
import {Carousel} from "react-carousel-minimal";
import Image1 from './ImageContain/Image1.jpeg'
import Image2 from './ImageContain/Image2.jpeg'
import Image3 from './ImageContain/Image3.jpeg'
import Image4 from './ImageContain/Image4.jpeg'
import Image5 from './ImageContain/Image5.jpeg'

const data = [
    {
      image: `${Image1}`,
      caption: '',
    },
    {
      image: `${Image2}`,
      caption: '',
    },
    {
      image: `${Image3}`,
      caption: '',
    },
    {
      image:`${Image4}`,
      caption: '',
    },
    {
      image:`${Image5}`,
      caption: '',
    }
  ];
  export default function ImageSlider(){
    return(
          <Stack alignItems="center">
            <Box sx={{height:{xs:"10px",md:"20px"}}}></Box>
            <Carousel
            data={data}
            time={3000}
            width="1200px"
            height="550px"
            radius="10px"
            slideNumber={false}
            automatic={true}
            dots={true}
            slideImageFit="cover"
            thumbnails={false}
            />
          </Stack>
      )
  }