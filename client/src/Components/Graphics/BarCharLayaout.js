
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import './graphics.css';
import BarChart from './ComposedChart';

import {
  Box,
  Card,
  CardContent,
  Typography,
  CardHeader, 
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
const COLORES = [ '#7fb3d5' , '#2980b9' , '#1f618d' , '#154360' ];
const ColoresGraficas=['#5566F3'];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main
  }
}));

  export default function BarChartLayaout({titulo}){
    const theme = useStyles();
  
  
    const data1 = [
      {
        name: 'Telefónica',
        value: 123,
        color: COLORES[0]
      },
      {
        name: 'Deloitte',
        value: 25,
        color: COLORES[1]
      },
      {
        name: 'KPMG',
        value: 25,
        color: COLORES[2]
      },
      {
        name: 'MS',
        value: 17,
        color: COLORES[3]
      }
    ];
  
    return (
      <Card>
        <CardHeader title={titulo} />
        <CardContent>
          <Box class = 'Box'
            sx={{
              height: 300,
              position: 'relative'
            }}
          >
            <BarChart colorBarra={ColoresGraficas[0]} colorLinea={COLORES[1]} />
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