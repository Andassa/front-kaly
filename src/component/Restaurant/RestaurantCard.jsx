import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const RestaurantCard = () => {
  return (
    <Card className="w-[18rem]">
        <div className={`${true?'cursor-pointer':"cursor-not-allowed"}`}>
        <img className="w-full h-[10rem] rounded-t-md object-cover" src="https://lagastronomiepizza.com/slides/b5f9cb2049cf8c529f3f98570e972b1717e16b03.jpeg" alt="" />
        <Chip 
        size='small'
        className="absolute top-2 left-2"
        color={true?"success":"error"}
        label={true?"open":'closed'}
        />
        </div>
        <div className="p-4 textPart lg:flex w-full justify-between">
           <div className="space-y-1">
            <p className="font-semibold text-lg">La Gastronomie pizza</p>
              <p className="text-gray-500 text-sm">
              Vous avez envie de tout ? Conduisez-le dans notre fla...
              </p>

            </div>
            <div>
              <IconButton>
                {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
              </IconButton>
            </div> 
        </div>
    </Card>

  )
}

export default RestaurantCard
