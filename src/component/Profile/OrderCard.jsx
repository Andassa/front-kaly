import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>

            <img className="h-16 w-16"
             src="https://img.freepik.com/photos-gratuite/delicieux-repas-restauration-rapide-bokeh_23-2148374919.jpg?t=st=1717602452~exp=1717606052~hmac=8e1ace9cd6609fad6297b2fe74264f29a74839ba3466e217b88abaefe21914af&w=360" alt="" />
            <div>
                <p>Frites</p>
                <p>10.000ar</p>
            </div>
        </div>
        <div>
           <Button  className="cursor-not-allowed">Achevé</Button> 
        </div>
    </Card>
  )
}
