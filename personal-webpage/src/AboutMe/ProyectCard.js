import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProyectCard({image,title,description}) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor:'white', color:'black' }}>
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        {  title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">SlideShow</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
