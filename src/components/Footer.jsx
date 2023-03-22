import React from 'react';
import { Box, Container, Grid, Typography, Button, Icon, Avatar } from "@mui/material";

function Footer() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "primary.main",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                marginTop: "auto"
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            target="_blank"
                            sx={{                             
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'white',
                                textDecoration: 'none',
                                fontSize: { xs: '1rem', md: '1.25rem' }
                            }}
                        >
                           <Avatar alt="Logo" src="images/logo.png" sx={{ width: {xs: 55, md: 75}, height: {xs: 55, md: 75} }}/>
                        </Typography>
                    </Grid>
                    <Grid item>
                    <Button href="https://www.instagram.com/turchaninova_olha/?igshid=YmMyMTA2M2Y%3D" target="_blank" variant="outlined" sx={{ width: {xs: 55, md: 75}, height: {xs: 55, md: 75} }}>
        <img src="images/instagramLogo.svg" alt="instargamLogo" width={"100%"}/>
                        </Button>
                        <Button href="https://t.me/Olha_Turchaninova" target="_blank" variant="outlined" sx={{ width: {xs: 55, md: 75}, height: {xs: 55, md: 75} }}>
        <img src="images/telegramLogo.svg" alt="telegramLogo" width={"100%"}/>
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;