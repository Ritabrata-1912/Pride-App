import { Container,Box} from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image1 from './ImageContain/Image1.jpeg'
import Image2 from './ImageContain/Image2.jpeg'
import Image3 from './ImageContain/Image3.jpeg'
import Image4 from './ImageContain/Image4.jpeg'
import Image5 from './ImageContain/Image5.jpeg'
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
