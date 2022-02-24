import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
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
            accomplishments: [
              {
                byline: "Leadership",
                expanded: "Led a small team of developers"
              }
            ]
        },
        {
            employer: "University of Arizona RII",
            title: "Applications Developer",
            accomplishments: [
              {byline: "Leadership", expanded: "Led a small team of developers"}, {byline: "Leadership", expanded: "Led a small team of developers"}]
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
          {props.item.accomplishments.map(function(item, i){
              return (<AccomplishmentItem item={item} key={i}></AccomplishmentItem>)
            })}
          </List>

        </CardContent>
      </Card>
    )
}


function AccomplishmentItem(props){
  const [expanded, setExpanded] = React.useState(false)

  let changeExpanded = () => setExpanded(!expanded)

  return (
    <div>
      <ListItemButton onClick={changeExpanded}>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText>{props.item.byline}</ListItemText>
      </ListItemButton>
      <Collapse in={expanded}>
        <List>
          <ListItem>
            <ListItemText>
              <Typography paragraph>
                {props.item.expanded}
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Collapse>
    </div>
  )
}

export default ExperienceCarousel;