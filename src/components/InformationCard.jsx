import React from 'react';
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// Returns either
function Item(props)
{
  if(props.item.title){
    return (
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <Typography variant="body1">{props.item.title}</Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }else{
    return (
      <Grid item xs={4}>
      </Grid>
    )
  }

}

export default Item;