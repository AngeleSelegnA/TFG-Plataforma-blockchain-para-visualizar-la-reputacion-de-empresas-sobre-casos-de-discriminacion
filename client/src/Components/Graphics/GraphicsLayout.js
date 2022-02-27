


import { useState } from 'react';
import { styled } from '@mui/material/styles';
import './graphics.css';
import CircularGraph from "./CircularGraph";

import {
  Box,
  Card,
  CardContent,
  Typography,
  CardHeader, 
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
const COLORES = [ '#7fb3d5' , '#2980b9' , '#1f618d' , '#154360' ];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main
  }
}));

  export default function GraphicsLayout(){
    const theme = useStyles();
  
  
    const data1 = [
      {
        name: 'Mujeres',
        value: 33,
        color: COLORES[0]
      },
      {
        name: 'Hombres',
        value: 25,
        color: COLORES[1]
      },
      {
        name: 'No binario',
        value: 25,
        color: COLORES[2]
      },
      {
        name: 'Otros',
        value: 17,
        color: COLORES[3]
      }
    ];
  
    return (
      <Card>
        <CardHeader title="Gráfica" />
        <CardContent>
          <Box class = 'Box'
            sx={{
              height: 300,
              position: 'relative'
            }}
          >
            <CircularGraph/>
          </Box>
          <Box 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 2
            }}
          >
            {data1.map(({
              color,
              name,
              value
            }) => (
              <Box 
                key={name}
                sx={{
                  p: 1,
                  textAlign: 'center'
                }}
              >
                <Typography
                  color="textPrimary"
                  variant="body1"
                >
                  {name}
                </Typography>
                <Typography
                  style={{ color }}
                  variant="h4"
                >
                  {value}
                  %
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    );
  }