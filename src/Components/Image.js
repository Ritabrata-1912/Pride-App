import { Container,Box} from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image1 from './ImageContain/G1.JPG'
import Image2 from './ImageContain/G2.JPG'
import Image3 from './ImageContain/G3.JPG'
import Image4 from './ImageContain/G4.JPG'
import Image5 from './ImageContain/G5.JPG'
import Image6 from './ImageContain/G6.JPG'
import Image7 from './ImageContain/G7.JPG'
import Image8 from './ImageContain/G8.JPG'
import Image9 from './ImageContain/G9.JPG'
import Image10 from './ImageContain/G10.JPG'
import Image11 from './ImageContain/G11.JPG'
import Image12 from './ImageContain/G12.JPG'
// import {useMediaQuery,useTheme} from '@mui/material';
const itemData = [
  {
    image: `${Image1}`,
    caption: '`1',
  },
  {
    image: `${Image2}`,
    caption: '2',
  },
  {
    image: `${Image3}`,
    caption: '3',
  },
  {
    image:`${Image4}`,
    caption: '4',
  },
  {
    image:`${Image5}`,
    caption: '5',
  },
  {
    image:`${Image6}`,
    caption: '6',
  },
  {
    image:`${Image7}`,
    caption: '7',
  },
  {
    image:`${Image8}`,
    caption: '8',
  },
  {
    image:`${Image9}`,
    caption: '9',
  },
  {
    image:`${Image10}`,
    caption: '10',
  },
  {
    image:`${Image11}`,
    caption: '11',
  },
  {
    image:`${Image12}`,
    caption: '12',
  }
];
export default function ImageCol(){
    return(
    <Container>
      <Box sx={{textAlign:"center",fontSize:"38px",fontWeight:"900",marginBottom:"1em",marginTop:"3em"}}>Photo Gallery</Box>
      <ImageList sx={{height:{xs:"15em",sm:"30em"}}} cols={3} rowHeight={{xs:164,sm:200}} >
    {itemData.map((item) => (
      <ImageListItem key={item.caption}>
        <img
          src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={item.caption}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
   <span id="members"></span>
    </Container>
    )
}
