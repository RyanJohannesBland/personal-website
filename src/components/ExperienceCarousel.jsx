import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import Collapse from "@mui/material/Collapse"
import Typography from "@mui/material/Typography";
import SendIcon from '@mui/icons-material/Send';



function ExperienceCarousel(props){

    var items = [
        {
            employer: "University of Arizona FNSV",
            title: "Applications Developer",
            accomplishments: [{byline: "Leadership", expanded: "Led a small team of developers"}]
        },
        {
            employer: "University of Arizona RII",
            title: "Applications Developer",
            accomplishments: [{byline: "Leadership", expanded: "Led a small team of developers"}]
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
            {props.item.accomplishments.map(function(item, i){
              return (<AccomplishmentItem item={item} key={i}></AccomplishmentItem>)
            })}
        </CardContent>
      </Card>
    )
}


function AccomplishmentItem(props){
  const [expanded, setExpanded] = React.useState(false)

  let changeExpanded = () => setExpanded(!expanded)

  return (
      <ListItemButton onClick={changeExpanded}>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText>{props.item.byline}</ListItemText>
        <Collapse in={expanded}>
          <ListItemText>
            <Typography paragraph>
              {props.item.expanded}
            </Typography>
            </ListItemText>
        </Collapse>
      </ListItemButton>
  )
}

export default ExperienceCarousel;