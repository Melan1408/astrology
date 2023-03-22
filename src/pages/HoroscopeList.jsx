import React , { useState } from "react";
import { DatePicker } from '@mui/x-date-pickers';
import Grid from '@mui/material/Grid'; // Grid version 1
import { spacing } from '@mui/system';
import {Box, Typography} from '@mui/material';
import Matrix from "../components/Matrix";
import TableHealth from "../components/TableHealth";
import PurposeContent from "../components/PurposeContent";

function calcEveryNumber(number) {
    let result = 0;
    (""+number).split("").map(Number).forEach((item) => result+=item);
    return result;
}

function chooseNumber(number) {
    if(number > 22) return calcEveryNumber(number);
    else return number;
}

function calcYearPoints(pointStart, pointEND) {
    const points = [];

    points[3] = chooseNumber(pointStart + pointEND);
    points[1] = chooseNumber(points[3] + pointStart);
    points[0] = chooseNumber(points[1] + pointStart);
    points[2] = chooseNumber(points[3] + points[1]);
    points[5] = chooseNumber(points[3] + pointEND);
    points[6] = chooseNumber(points[5] + pointEND);
    points[4] = chooseNumber(points[5] + points[3]);

    return(points)
}

function calcTableHealth(point1, point2, point3, point4, point5, point6, point7) {
    return [point1, point2, point3, point4, point5, point6, point7, chooseNumber(point1 + point2 + point3 + point4 + point5 + point6 + point7)];
}

function calcFullYear({$d}) {
    if($d){
        let ageDifMs = Date.now() - $d;
        let ageDate = new Date(ageDifMs);  
        let result = ageDate.getUTCFullYear() - 1970;
        return result > 0 ? result : 0;
    }
    return 0;
}

export default function HoroscopeList() {

    const [dayOfBirth, setValue] = useState([]);

    let pointA = 0, pointB = 0, pointV = 0;

    if(dayOfBirth.$D) {
        pointA = chooseNumber(dayOfBirth.$D);
        pointB = dayOfBirth.$M + 1; //месяцы считает с 0
        pointV = calcEveryNumber(dayOfBirth.$y);
        pointV = chooseNumber(pointV);
    }

    let pointG = chooseNumber(pointA + pointB + pointV);
    let pointZK = chooseNumber(pointA + pointB + pointV + pointG);
    let pointD = chooseNumber(pointA + pointB);
    let pointE = chooseNumber(pointB + pointV);
    let pointGE = chooseNumber(pointV + pointG);
    let pointZ = chooseNumber(pointA + pointG);
    let pointM = chooseNumber(pointZK + pointG);
    let pointL = chooseNumber(pointZK + pointV);
    let pointK = chooseNumber(pointM + pointL);
    let pointH = chooseNumber(pointK + pointM);
    let pointO = chooseNumber(pointK + pointL);
    let pointA_ZK = chooseNumber(pointA + pointZK);
    let pointGE_ZK = chooseNumber(pointGE + pointZK)
    let pointD_ZK = chooseNumber(pointD + pointZK);
    let pointE_ZK = chooseNumber(pointE + pointZK);
    let pointZ_ZK = chooseNumber(pointZ + pointZK);
    let pointB_ZK = chooseNumber(pointB + pointZK);
    let pointANext = chooseNumber(pointA + pointA_ZK);
    let pointDNext = chooseNumber(pointD + pointD_ZK);
    let pointBNext = chooseNumber(pointB + pointB_ZK);
    let pointENext = chooseNumber(pointE + pointE_ZK);
    let pointVNext = chooseNumber(pointV + pointL);
    let pointGENext = chooseNumber(pointGE + pointGE_ZK);
    let pointGNext = chooseNumber(pointG + pointM);
    let pointZNext = chooseNumber(pointZ + pointZ_ZK);
    let pointALast = chooseNumber(pointZK + pointA_ZK);
    let pointBLast = chooseNumber(pointZK + pointB_ZK);
    const points0_10 = calcYearPoints(pointA, pointD);
    const points10_20 = calcYearPoints(pointD, pointB);
    const points20_30 = calcYearPoints(pointB, pointE);
    const points30_40 = calcYearPoints(pointE, pointV);
    const points40_50 = calcYearPoints(pointV, pointGE);
    const points50_60 = calcYearPoints(pointGE, pointG);
    const points60_70 = calcYearPoints(pointG, pointZ);
    const points70_0 = calcYearPoints(pointZ, pointA);


    const matrixData = [
        pointA, 
        pointB, 
        pointV, 
        pointG, 
        pointZK, 
        pointD, 
        pointE, 
        pointGE, 
        pointZ, 
        pointM, 
        pointL, 
        pointK, 
        pointH, 
        pointO, 
        pointA_ZK, 
        pointGE_ZK, 
        pointD_ZK, 
        pointE_ZK, 
        pointZ_ZK, 
        pointB_ZK, 
        pointANext, 
        pointDNext, 
        pointBNext, 
        pointENext, 
        pointVNext, 
        pointGENext, 
        pointGNext,
        pointZNext,
        pointALast,
        pointBLast,
        points10_20,
        points20_30,
        points30_40,
        points40_50,
        points50_60,
        points60_70,
        points70_0,
        points0_10
    ];

    const sky = chooseNumber(pointB + pointG);
    const earth = chooseNumber(pointA + pointV);
    const s_e = chooseNumber(sky + earth);
    const man = chooseNumber(pointD + pointGE);
    const woman = chooseNumber(pointZ + pointE);
    const m_w = chooseNumber(man + woman);
    const spirit = chooseNumber(s_e + m_w);
    const planet = chooseNumber(m_w + spirit);

    const tablePurposedata = [
        sky,
        earth,
        s_e,
        man,
        woman,
        m_w,
        spirit,
        planet
    ];


    const physics = calcTableHealth(pointA, pointANext, pointA_ZK, pointALast, pointZK, pointL, pointV);
    const energy = calcTableHealth(pointB, pointBNext, pointB_ZK, pointBLast, pointZK, pointM, pointG);
    const emotion = calcTableHealth(
        chooseNumber(physics[0] + energy[0]),
        chooseNumber(physics[1] + energy[1]),
        chooseNumber(physics[2] + energy[2]),
        chooseNumber(physics[3] + energy[3]),
        chooseNumber(physics[4] + energy[4]),
        chooseNumber(physics[5] + energy[5]),
        chooseNumber(physics[6] + energy[6]),
        );

    const tableHealthdata = [
        physics,
        energy,
        emotion
    ];

    return (       
            <div className="pad-30">
                <Box sx={{ mb: 5 }}>
                    <DatePicker
                        xs={{ m: 'auto' }}
                        label="Дата рождения"
                        value={dayOfBirth}
                        onChange={(newValue) => setValue(newValue)}
                        inputFormat="dd-MMMM-yyyyy"
                        inputVariant="outlined"
                    />
                    <Typography variant="h6" component="h6"
                        sx={{ fontSize: { xl: '22px', lg: '22px', md: '16px', sm: '14px', xs: '14px', fontWeight: 'bold' }, marginTop:"10px" }}
                    >
                       Полных лет: {calcFullYear(dayOfBirth)}
                    </Typography>                    
                     </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={6}>
                        <Box className="matrix_container"><Matrix data={matrixData} /></Box>
                    </Grid>
                    <Grid container item xs={12} lg={6}>
                       
                            <Grid item xs={12} md={6} lg={12}>
                                <PurposeContent data={tablePurposedata} />
                            </Grid>
                            <Grid item xs={12} md={6} lg={12}>
                                <TableHealth data={tableHealthdata} />
                            </Grid>
                        
                    </Grid>
                </Grid>
            </div>
    )
}