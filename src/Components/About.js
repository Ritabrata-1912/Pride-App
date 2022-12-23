import { Box, Grid } from '@mui/material'
function About() {
  return (
    <Box sx={{ paddingBottom: '20px' }}>
      <Box sx={{ textAlign: 'center', fontSize: "38px", fontWeight: "900" }}>ABOUT</Box>
      <Box sx={{ padding: '5px 5px 20px 5px', fontSize: '1.2em' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius sequi illo nobis, officiis nostrum aliquid soluta at est
        voluptatum hic voluptates enim ducimus quaerat pariatur sit dolorem dolore sunt? Doloribus?</Box>
      <Grid container spacing={2} sx={{ fontSize: '1.2em' }}>
        <Grid item>Date:dd/mm/yyyy</Grid>
        <Grid item>Time:hh:mm</Grid>
        <Grid item>Venue:Siliguri</Grid>
      </Grid>
    </Box>
  )
}
export default About;