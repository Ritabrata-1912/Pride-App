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
// import Image13 from './ImageContain/G13.JPG'
// import Image14 from './ImageContain/G14.JPG'
// import Image15 from './ImageContain/G15.JPG'
// import Image16 from './ImageContain/G16.JPG'
// import Image17 from './ImageContain/G17.JPG'
// import Image18 from './ImageContain/G18.JPG'
// import Image19 from './ImageContain/G19.JPG'
// import Image20 from './ImageContain/G20.JPG'
// import Image21 from './ImageContain/G21.JPG'

const itemData = [
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
  },
  {
    image:`${Image6}`,
    caption: '',
  },
  {
    image:`${Image7}`,
    caption: '',
  },
  {
    image:`${Image8}`,
    caption: '',
  },
  {
    image:`${Image9}`,
    caption: '',
  },
  {
    image:`${Image10}`,
    caption: '',
  },
  {
    image:`${Image11}`,
    caption: '',
  },
  {
    image:`${Image12}`,
    caption: '',
  }
];
export default function ImageCol(){
    return(
    <Container>
      <Box sx={{textAlign:"center",fontSize:"38px",fontWeight:"900",marginBottom:"1em",marginTop:"3em"}}>Photo Gallery</Box>
      <ImageList sx={{height:{xs:"15em",sm:"30em"}}} cols={3} rowHeight={{xs:164,sm:200}} >
    {itemData.map((item) => (
      <ImageListItem key={item.image}>
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
