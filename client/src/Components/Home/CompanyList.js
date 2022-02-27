import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import CompanyItem from './CompanyItem'

const CompanyList =(companies)=>{
    const cardsArray=companies.map(company=>(
        <CompanyItem {company}/>
        ))
    return(
        
    );

}