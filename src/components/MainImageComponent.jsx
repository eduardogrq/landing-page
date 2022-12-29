
import Box from '@mui/material/Box';
import BackgroundImage from '../img/SISGR_fondo.jpg'

const MainImage = () => {
    return(
        <Box
        component="img"
        sx={{
          height: '100%',
          width: '100%',
          maxHeight: { xs: 400, md: 700 },
        }}
        alt="The house from the offer."
        src={BackgroundImage}
      />
    )
}

export default MainImage;