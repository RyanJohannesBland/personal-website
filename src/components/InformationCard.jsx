import React from 'react';
import Grid from "@mui/material/Grid"
import { Card, CardContent, CardHeader } from '@mui/material';
import Collapse from "@mui/material/Collapse"
import Typography from "@mui/material/Typography";
import Carousel from 'react-material-ui-carousel';
import { Avatar } from '@mui/material';
import { Paper } from '@mui/material';


function InformationCard(props)
{
  if(props.item.title){
    return (
      <Grid item xs={6} md={4} lg={3}>
        <Card>
        <CardHeader
          avatar={<Avatar alt="Apple" src={props.item.icon} />}
          title={props.item.title}
          subheader={props.item.subtitle}
        />
            <Collapse in={true}>
            <Carousel
              navButtonsAlwaysInvisible
              indicators={false}
            >
              {props.item.dropdownItems.map(function(item, i){
                return (<Item text={item} key={i}></Item>)
              })}
            </Carousel>
          </Collapse>
        </Card>
      </Grid>
    )
  } else {
    return (
      <Grid item xs={6} md={4} lg={3}>
      </Grid>
    )
  }
}


function Item(props) {
  return (
    <Paper elevation={0} sx={{paddingLeft: "1em"}}>
        <Typography paragraph>
          {props.text}
        </Typography>
    </Paper>

  )
}

export default InformationCard;