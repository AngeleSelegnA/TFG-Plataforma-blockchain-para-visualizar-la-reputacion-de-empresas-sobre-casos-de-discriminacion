import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'
import image from '../../Images/fdi_logo.png'

const HeaderExampleUsersIcon = () => (
  <div>
    <Header as='h2' icon textAlign='center' block >
      <Header.Content>Plataforma Blockchain para visualizar la Reputación de empresas sobre casos de Discriminación</Header.Content>
    </Header>
    <Image
      centered
      size='large'
      src={image}
    />
  </div>
)

export default HeaderExampleUsersIcon