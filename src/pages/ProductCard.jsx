// src/components/ProductCard.js

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function ProductCard({ image, title, price, callback }) {
  const [hover, setHover] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Card className="bg-blue-100 relative" sx={{ maxWidth: 400, maxHeight: 400 }}>
        {hover && (
          <div className="absolute inset-0 bg-white opacity-90 z-10 pointer-events-none"></div>
        )}
        
        <CardMedia sx={{ height: 300 }} image={image} title={title} />
        <CardContent className="mx-5 flex justify-between -mt-1 relative z-20">
          <span>{title}</span>
          <span>{price}</span>
        </CardContent>

        {hover && (
          <CardActions className="absolute -mt-72 flex flex-col ml-20 gap-7 z-20 rounded-md">
            <Button  className="text-white bg-green-300 hover:bg-green-400 font-bold">
              Commander
            </Button>
            <Button  className="text-white bg-red-300 hover:bg-red-400 font-bold" >
              Preferences
            </Button>
            <Button onClick={callback} className="text-white bg-yellow-300 hover:bg-yellow-400 font-bold" >
              Details
            </Button>
          </CardActions>
        )}
      </Card>
    </div>
  );
}
