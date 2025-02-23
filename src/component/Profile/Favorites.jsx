import React from 'react'
import RestaurantCard from '../Restaurant/RestaurantCard'

export const Favorites = () => {
  return (
    <div>
        <h1 className="py-5 text-xl font-semibold text-center">Mes favoris</h1>

        <div className='flex flex-wrap gap-3 justify-center'>

            {[1,1,1].map((item)=><RestaurantCard/>)}

        </div>

    </div>
  )
}
