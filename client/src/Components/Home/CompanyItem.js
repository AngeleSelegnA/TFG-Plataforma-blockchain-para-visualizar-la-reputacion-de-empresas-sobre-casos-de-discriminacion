import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import telefonica from '../../Images/telefonica.png';
import { useHistory } from "react-router-dom";
const CompanyItem =({name,reputation,urlimg}) =>{
  let history = useHistory();

  const company = () => {
    history.push('/company')
  }
  return(
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='small'
          src={telefonica}
        />
        <Card.Header>{name}</Card.Header>
        <Card.Meta>Reputación: <strong>{reputation}</strong></Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='blue' onClick = {company}>
            Ver empresa
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default CompanyItem;