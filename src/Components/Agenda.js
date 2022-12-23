import { Box, Stack, Typography } from '@mui/material';
// import {Add} from '@mui/icons-material';
function Agenda() {
    return (
        <Box sx={{ paddingBottom: '20px' }}>
            <Typography sx={{ textAlign: 'center', fontSize: '38px', fontWeight: "900" }}>Agenda</Typography>
            <Stack direction="column" spacing={2} justifyContent="space-around" sx={{ fontSize: '1.2em' }}>
                <Box sx={{ textAlign: 'center' }}>
                    List Number 1
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    List Number 2
                </Box>
            </Stack>
        </Box>
    )
}
export default Agenda;