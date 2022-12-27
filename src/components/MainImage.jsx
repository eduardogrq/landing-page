
import Box from '@mui/material/Box';

const MainImage = () => {
    return(
        <Box
        component="img"
        sx={{
          height: '100%',
          width: '100%',
          maxHeight: { xs: 400, md: 700 },
        //   minHeight: { xs: 350},
        }}
        alt="The house from the offer."
        src="https://picsum.photos/1920/1080"
      />
    )
}

export default MainImage;