import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
export const EventCard = () => {
  return (
    <div>
        <Card sx={{width:345}}>
            <CardMedia
            sx={{height:345}} 
            image='https://img.freepik.com/photos-gratuite/nourriture-preparee-presentant-repas-delicieux-prets-emploi-deplacement_23-2151246066.jpg?t=st=1717603357~exp=1717606957~hmac=ff5b068fdbc027d9efde54591ede88f749a9c2176318c377e2080904b94d1184&w=360'/>

            <CardContent>
                <Typography variant='h5'>
                    La gastronomie Pizza
                </Typography>
                <Typography variant='body2'>
                50% de réduction sur votre première commande 
                </Typography>
                <div className='py-2 space-y-2'>

                    <p>{"gastro"}</p>
                    <p className="txt-sm text-blue-500">Juin 10, 2024 12:00 </p>
                    <p className="txt-sm text-red-500">Juin 11, 2024 12:00 </p>

                </div>

            </CardContent>

                {false && <CardActions>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                </CardActions>}

        </Card>

    </div>
  )
}
