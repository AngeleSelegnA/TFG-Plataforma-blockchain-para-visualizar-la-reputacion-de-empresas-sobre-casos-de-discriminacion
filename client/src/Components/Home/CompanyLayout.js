import React, { useState } from 'react';
import { CardGroup } from 'semantic-ui-react';
import CompanyItem from './CompanyItem';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
//import SearchBar from 'material-ui-search-bar';
import { Button } from 'semantic-ui-carousel-react';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.primary.main
    }
  }));

export default function CompanyLayout( {cards, showList}) {
    

    return  (
     <>
      {showList &&(
          <Grid padding={50} className="Company-List">
         
          <CardGroup itemsPerRow={3} centered={true}>
            {
              cards.map((item,index)=>(
                <CompanyItem key={index} name={item[0]} reputation={item[1]} logo = {item[2]}/>
              ))
            }
          </CardGroup>
      </Grid >
      
      )}
      </>
    )
      
}