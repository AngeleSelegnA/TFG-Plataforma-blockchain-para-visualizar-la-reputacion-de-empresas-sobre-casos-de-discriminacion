import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'


const HeaderCompany = ({ name }) => (
  <div>
    <Header as='h1' icon textAlign='center' block>
      <Header.Content>
         {name} 
      </Header.Content>
    </Header>
    <Image size = "large" centered src={`/Images/${ name }.jpg`}/>
  </div>
)

export default  HeaderCompany 
