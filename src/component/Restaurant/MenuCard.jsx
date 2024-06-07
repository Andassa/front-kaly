import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// const ingredients=[
//     {
//         categorie:"Noix et graines",
//         ingredients:"Noix de cajou"
//     },
//     {
//         categorie:"Protéine",
//         ingredients:"Protéine"
//     },
//     {
//         categorie:"Protéine",
//         ingredients:"Hena omby"
//     }
// ]

const demo = [
    {
        categorie: "Noix et graines",
        ingredients: ["Noix de cajou"]
    },
    {
        categorie: "Protéine",
        ingredients: ["Hen'omby", "Protéine"]
    },
];

const MenuCard = () => {

    const handleCheckBoxChange=(value)=>{
        console.log("value")
    }
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div className="lg:flex items-center justify-between">
                    <div className="lg:flex items-center lg:gap-5">
                        <img className="w-[7rem] h-[7rem] object-cover" src="https://img.freepik.com/photos-gratuite/burger-aux-frites_181624-2761.jpg?t=st=1717507002~exp=1717510602~hmac=7878c5814afd351d83776e3f0462449b8840b85dfd1b6f5e45c8ef9f30b19e43&w=360" alt="" />
                        <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                            <p className="font-semibold text-xl">Burger king</p>
                            <p>10.000 Ar</p>
                            <p className="text-gray-400">Miam be</p>
                        </div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form>
                    <div className="flex gap-5 flex-wrap">
                        {demo.map((item) => (
                            <div>
                                <p>{item.categorie}</p>
                                <FormGroup>
                                    {item.ingredients.map((item) => (
                                        <FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>} label={item} />
                                    ))}
                                </FormGroup>
                            </div>
                        ))}
                    </div>
                    <div className="pt-5">
                        <Button variant="contained" disabled={false} type="submit">{true?"Add to Cart":"en rupture de stock"}</Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    );
}

export default MenuCard;
