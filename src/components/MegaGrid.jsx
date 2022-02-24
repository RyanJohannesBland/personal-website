import React from 'react';
import { useState, useEffect } from 'react';
import Grid from "@mui/material/Grid"
import Item from "./InformationCard"

function MegaGrid(props){
  // Constant that defines how much empty space will be present on page.
  const separation = 100
  const [array, setArray] = useState([])
  useEffect(() => {
    let new_array = []
    for (let i = 0; i < separation; i++) {
      new_array.push({})
    }
    for(let item of props.items){
      let index = Math.floor(Math.random() * separation)
      new_array.splice(index, 0, item)
    }
    setArray(new_array)
  }, [props.items])


  return (
    <Grid container spacing={2}>
      {/* Have one of these for each type of information */}
      {
        array.map( (item, i) => <Item key={i} item={item}/> )
      }
    </Grid>
  )
}

export default MegaGrid;
