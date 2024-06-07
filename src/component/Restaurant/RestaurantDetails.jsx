import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from './MenuCard';

const categories=[
    "pizza",
    "tsaky tsaky",
    "burger",
    "chiken",
    "rice"
  ]
  const menu=[1,1,1,1,1,1]
  
const nourritureTypes=[
    {label:"All",value:"all"},
    {label:"Vegetarian seulement",value:"vegetarian"},
    {label:"Non-Vegetarian",value:"non_vegetarian"},
    {label:"Seasonal",value:"seasonal"}
]

const RestaurantDetails = () => {

    const [nourritureType,setNourritureType]=useState("all")
    
    const handleFilter=(e)=>{
        console.log(e.target.value,e.target.name)
    }

    return (
    <div className='px-5 lg:px-20'>

        <section>
            <h3 className="text-gray-500 py-2 mt-10">Home/tana/gastro/3</h3>
            <div>
            <Grid container spacing={2}>
            
            <Grid item xs={12}>

                <img className="w-full h-[40vh] object-cover"
                 src="https://www.bikini.re/wp-content/uploads/jet-engine-forms/37/2020/12/La-Gastronomie-Pizza_pizzeria_restaurant_patisserie_glace_Tana_Madagascar-1.jpg" alt=""/>

            </Grid>
            <Grid item xs={12} lg={6}>

            <img className="w-full h-[40vh] object-cover"
            src="https://www.bikini.re/wp-content/uploads/jet-engine-forms/37/2020/12/La-Gastronomie-Pizza_pizzeria_restaurant_patisserie_glace_Tana_Madagascar-1.jpg" alt=""/>

            </Grid>
            <Grid item xs={12} lg={6}>

            <img className="w-full h-[40vh] object-cover"
            src="https://www.bikini.re/wp-content/uploads/jet-engine-forms/37/2020/12/La-Gastronomie-Pizza_pizzeria_restaurant_patisserie_glace_Tana_Madagascar-1.jpg" alt=""/>

            </Grid>

        </Grid>
            </div>
            <div className="pt-3 pb-5">
                <h1 className="text-4xl font-semibold">Tanà Kaly</h1>
                 <p className="text-gray-500 mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Magnam odit placeat porro sequi tempore nesciunt temporibus mollitia fugit qui veniam?
                 </p>
                 <div className="space-y-3 mt-3">
                 <p className="text-gray-500 flex items-center gap-3">
                   <LocationOnIcon/>
                    <span>
                        Analakely,Antananarivo 101
                    </span>
                 </p>
                 <p className="text-gray-500 flex items-center gap-3">
                   <CalendarTodayIcon/>
                    <span>
                        Mon-Sun: 9:00 AM -9:00 PM (Today)
                    </span>
                 </p>

                 </div>
                 
            </div>
        </section>

        <Divider/>
        <section className="pt-[2rem] lg:flex relative">

            <div className="space-y-10 lg:w-[20%] filter">
                
                <div className="box space-y-5 lg:sticky top-28 p-5 shadow-md">

                    <div>
                        <Typography variant="h5" sx={{paddingBottom:"1rem"}}>
                            Type de Nourriture
                        </Typography>
                        
                        <FormControl className="py-10 space-y-5" component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="nourriture_type" value={nourritureType}>
                                {nourritureTypes.map((item) =>
                                (<FormControlLabel 
                                   key={item.value} 
                                    value={item.value} 
                                control={<Radio />}
                                 label={item.label}
                                  />
                                  ))}
                            </RadioGroup>
                        </FormControl>

                    </div>
                    <Divider/>
                    <div>
                        <Typography variant="h5" sx={{paddingBottom:"1rem"}}>
                            Catégories de Nourritures
                        </Typography>
                        
                        <FormControl className="py-10 space-y-5" component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="nourriture_type" value={nourritureType}>
                                {categories.map((item) =>
                                (<FormControlLabel 
                                   key={item} 
                                    value={item} 
                                control={<Radio />}
                                 label={item}
                                  />
                                  ))}
                            </RadioGroup>
                        </FormControl>

                    </div>


                </div>

            </div>

            
            <div className="space-y-5 lg:w-[80%] lg:pl-10">

               {menu.map((item)=><MenuCard/>)}

            </div>


        </section>

    </div>
  )
}

export default RestaurantDetails