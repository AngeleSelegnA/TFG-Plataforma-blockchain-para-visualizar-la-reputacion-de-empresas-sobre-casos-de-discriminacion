
import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'
import telefonica from '../Home/telefonica.png';

const HeaderCompany = () => (
  <div>
    <Header as='h2' icon textAlign='center' block >
      <Header.Content>
         Company 
      </Header.Content>
    </Header>
    <Image
      centered
      size='large'
      src={telefonica}
    />
  </div>
)

export default  HeaderCompany 
