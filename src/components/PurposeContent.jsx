import React from "react";
import { Box, Typography, Grid } from '@mui/material';

function PurposeContent({ data }) {

    const [
        sky,
        earth,
        s_e,
        man,
        woman,
        m_w,
        spirit,
        planet
    ] = data;

    return (
        <Box marginBottom="20px" textAlign="center">
            <Typography variant="h4" component="h4" textAlign="center" marginBottom="10px"
                sx={{ fontSize: { xl: '28px', lg: '28px', md: '22px', sm: '18px', xs: '18px' }, fontWeight: 'bold' }}
            >
                ПРЕДНАЗНАЧЕНИЯ
            </Typography>

            <Grid container direction="row" justifyContent="space-around" marginBottom="10px" spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="h5" component="h5"
                        sx={{ fontSize: { xl: '22px', lg: '22px', md: '16px', sm: '14px', xs: '14px', fontWeight: 'bold' } }}
                    >
                        Личное:
                    </Typography>
                    <Typography variant="h6" component="h6"
                        sx={{ fontSize: { xl: '20px', lg: '20px', md: '14px', sm: '12px', xs: '12px' } }}
                    >
                        Создание отношений, рождение детей, формирование нужных качеств.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5" component="h5"
                        sx={{ fontSize: { xl: '22px', lg: '22px', md: '16px', sm: '14px', xs: '14px', fontWeight: 'bold' } }}
                    >
                        Социальное:
                    </Typography>
                    <Typography variant="h6" component="h6"
                        sx={{ fontSize: { xl: '20px', lg: '20px', md: '14px', sm: '12px', xs: '12px' } }}
                    >
                        В чем моя польза для людей? Поиск дела по душе.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="space-around" marginBottom="20px" spacing={2}>

                <Grid container item xs={6} direction="row" wrap="nowrap" justifyContent="center" alignItems="center" >
                    <Grid item  >

                        <Typography variant="h6" component="h6" marginBottom="10px"
                            sx={{
                                fontSize: { xl: '22px', lg: '22px', md: '16px', sm: '14px', xs: '14px' }, fontWeight: 'bold',
                                marginBottom: { xl: "10px", md: "15px", xs: "20px" }
                            }}
                        >
                            Небо:<span className="circle" >{sky}</span>
                        </Typography>
                        <Typography variant="h6" component="h6"
                            sx={{ fontSize: { xl: '22px', lg: '22px', md: '16px', sm: '14px', xs: '14px' }, fontWeight: 'bold' }}
                        >
                            Земля:<span className="circle">{earth}</span>
                        </Typography>
                    </Grid>

                    <Grid item display="inline-flex" alignItems="center">
                        <img
                            src="images/separator.png"
                        ></img>
                        <span className="circle">{s_e}</span>
                    </Grid>
                </Grid>
                <Grid container item xs={6} direction="row" wrap="nowrap" justifyContent="center" alignItems="center" >
                    <Grid item  >

                        <Typography variant="h6" component="h6" marginBottom="10px"
                            sx={{
                                fontSize: { xl: '22px', lg: '22px', md: '16px', sm: '14px', xs: '14px' }, fontWeight: 'bold',
                                marginBottom: { xl: "10px", md: "15px", xs: "20px" }
                            }}
                        >
                            М:<span className="circle" >{man}</span>
                        </Typography>

                        <Typography variant="h6" component="h6"
                            sx={{ fontSize: { xl: '22px', lg: '22px', md: '16px', sm: '14px', xs: '14px' }, fontWeight: 'bold' }}
                        >
                            Ж:<span className="circle">{woman}</span>
                        </Typography>
                    </Grid>

                    <Grid item display="inline-flex" alignItems="center">
                        <img
                            src="images/separator.png"
                        ></img>
                        <span className="circle">{m_w}</span>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="space-around" marginBottom="10px" spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="h5" component="h5"
                        sx={{ fontSize: { xl: '22px', lg: '22px', md: '16px', sm: '14px', xs: '14px', fontWeight: 'bold' } }}
                    >
                        Духовное:
                    </Typography>
                    <Typography variant="h6" component="h6"
                        sx={{ fontSize: { xl: '20px', lg: '20px', md: '14px', sm: '12px', xs: '12px' }, marginBottom: "15px" }}
                    >
                        Через что мой путь к богу? Где бог во мне?
                    </Typography>
                    <span className="circle" >{spirit}</span>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5" component="h5"
                        sx={{ fontSize: { xl: '22px', lg: '22px', md: '16px', sm: '14px', xs: '14px', fontWeight: 'bold' } }}
                    >
                        Планетарное:
                    </Typography>
                    <Typography variant="h6" component="h6"
                        sx={{ fontSize: { xl: '20px', lg: '20px', md: '14px', sm: '12px', xs: '12px' }, marginBottom: "15px" }}
                    >
                        Чем я могу быть полезен своей планете?
                    </Typography>
                    <span className="circle" >{planet}</span>
                </Grid>
            </Grid>
        </Box>
    );
}

export default PurposeContent;