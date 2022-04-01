import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';




const CompanyItem =({ name, reputation }) =>{

  return(
    <Card>
      <Image fluid src={`./Images/${ name }.jpg`}/>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>Reputación: <strong>{reputation}</strong></Card.Meta>
      </Card.Content>
      <Card.Content extra>
          <NavLink to={`/company/${name}`}>
          <Button basic color='blue'>Ver empresa</Button>
          </NavLink>
      </Card.Content>
    </Card>
  )
}

export default CompanyItem;
