import React from 'react';
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function TechStackCard(props)
{
    return (
      <Card variant="outlined">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="body1">Django</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="body1">VueJs</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="body1">Postgres</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="body1">AWS</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="body1">Docker</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="body1">Github</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    )
}

export default TechStackCard;