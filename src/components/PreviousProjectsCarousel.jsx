import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function ExperienceCarousel(props)
{
    var items = [
        {
name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Card variant="outlined">
        <CardContent>
          <Typography variant="h5">{props.item.name}</Typography>
          <Typography variant="body1">University of Arizona</Typography>
        </CardContent>
      </Card>
    )
}

export default ExperienceCarousel;