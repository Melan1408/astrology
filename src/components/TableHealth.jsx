import React from "react";
import { Typography, Box} from '@mui/material';
import { Margin } from "@mui/icons-material";

function TableHealth({data}) {

    const [
        physics,
        energy,
        emotion
    ] = data;

    return (
        <Box sx={{ width:{ xl: '750px', lg: '500px', md: '400px', sm:'350px', xs:'350px' }, margin:"auto" }}>  
        
        <Typography variant="h5" component="h5" textAlign="center" marginBottom="10px" 
         sx={{ fontSize: { xl: '28px', lg: '28px', md: '22px', sm: '18px', xs: '18px' }, fontWeight: 'bold' }}>
        КАРТА ЗДОРОВЬЯ
    </Typography>
        <table id="results_table" cellSpacing="0" cellPadding="0">
<tbody>
<tr id="results_table_caption">
<td className="td_caption">ФИЗИКА</td>
<td className="td_caption">ЭНЕРГИЯ</td>
<td className="td_caption">ЭМОЦИИ</td>
<td className="td_caption">НАЗВАНИЕ ЧАКР</td>
</tr>
<tr>
<td className="sahasrara" data-label="Физика">{physics[0]}</td>
<td className="sahasrara" data-label="Энергия">{energy[0]}</td>
<td className="sahasrara" data-label="Эмоции">{emotion[0]}</td>
<td className="sahasrara" data-label="Название чакр">7. САХАСРАРА</td>
</tr><tr>
<td className="adjna" data-label="Физика">{physics[1]}</td>
<td className="adjna" data-label="Энергия">{energy[1]}</td>
<td className="adjna" data-label="Эмоции">{emotion[1]}</td>
<td className="adjna" data-label="Название чакр">6. АДЖНА</td>
</tr><tr>
<td className="vishudha" data-label="Физика">{physics[2]}</td>
<td className="vishudha" data-label="Энергия">{energy[2]}</td>
<td className="vishudha" data-label="Эмоции">{emotion[2]}</td>
<td className="vishudha" data-label="Название чакр">5. ВИШУДХА</td>
</tr><tr>
<td className="anahata" data-label="Физика">{physics[3]}</td>
<td className="anahata" data-label="Энергия">{energy[3]}</td>
<td className="anahata" data-label="Эмоции">{emotion[3]}</td>
<td className="anahata" data-label="Название чакр">4. АНАХАТА</td>
</tr><tr>
<td className="manipura" data-label="Физика">{physics[4]}</td>
<td className="manipura" data-label="Энергия">{energy[4]}</td>
<td className="manipura" data-label="Эмоции">{emotion[4]}</td>
<td className="manipura" data-label="Название чакр">3. МАНИПУРА</td>
</tr><tr>
<td className="svadhistana" data-label="Физика">{physics[5]}</td>
<td className="svadhistana" data-label="Энергия">{energy[5]}</td>
<td className="svadhistana" data-label="Эмоции">{emotion[5]}</td>
<td className="svadhistana" data-label="Название чакр">2. СВАДХИСТАНА</td>
</tr><tr>
<td className="muladhara" data-label="Физика">{physics[6]}</td>
<td className="muladhara" data-label="Энергия">{energy[6]}</td>
<td className="muladhara" data-label="Эмоции">{emotion[6]}</td>
<td className="muladhara" data-label="Название чакр">1. МУЛАДХАРА</td>
</tr><tr>
<td className="itogo" data-label="Физика">{physics[7]}</td>
<td className="itogo" data-label="Энергия">{energy[7]}</td>
<td className="itogo" data-label="Эмоции">{emotion[7]}</td>
<td className="itogo" data-label="Название чакр">ИТОГО</td>
</tr>
</tbody>
</table>
</Box>
    );
}

export default TableHealth;