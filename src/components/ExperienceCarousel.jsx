import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import Typography from "@mui/material/Typography";
import SendIcon from '@mui/icons-material/Send';



function ExperienceCarousel(props){

    var items = [
        {
            employer: "University of Arizona FNSV",
            title: "Applications Developer",
            accomplishments: ["Probably the most random thing you have ever seen!"]
        },
        {
            employer: "University of Arizona RII",
            title: "Applications Developer",
            accomplishments: ["Did all kinds of stuff", "Also some other stuff"]
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>
    )
}


function CarouselItem(props)
{
    return (
        <Card variant="outlined">
        <CardContent>
          <Typography variant="h5">{props.item.employer}</Typography>
          <Typography variant="body1">{props.item.title}</Typography>
          <List>

          </List>
            {props.item.accomplishments.map(function(item){
              return (<AccomplishmentItem item={item}></AccomplishmentItem>)
            })}
        </CardContent>
      </Card>
    )
}


function AccomplishmentItem(props){
  return (
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText>{props.item}</ListItemText>
      </ListItemButton>

  )
}

export default ExperienceCarousel;