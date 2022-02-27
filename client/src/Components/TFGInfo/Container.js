/* eslint-disable max-len */

import React from 'react'
import { Container, Header, Grid } from 'semantic-ui-react'

const ContainerExampleText = () => (
  <Container text>
      <Grid>
            <Grid.Row>
                <Header as='h2'>Descripción del Proyecto</Header>
            </Grid.Row>
            <Grid.Row>
                <p>
                    Hoy en día, por desgracia aún está muy presente la discriminación en las empresas por sexismo, racismo, homofobia, transfobia, u otras muchas discriminaciones. Esta situación lleva a casos de mobbing o acoso contra empleados/as. 
                
                </p>
                <p>
                    ¿Cómo saber antes de entrar si una empresa tiene un historial problemático de discriminación? Este TFG va a explorar el potencial de la tecnología blockchain para crear una plataforma transparente y no censurable, que permita a las personas conocer la reputación de empresas antes de aceptar trabajar para ellas. A través de esta plataforma, se podrán:
                </p>
                <p>
                    (1) buscar denuncias a entidades por discriminaciones sociales (por edad, género, etnia, nacionalidad, orientación sexual, etc)
                </p>
                <p>
                    (2) realizar denuncias anónimas compartiendo relatos sobre situaciones vividas
                </p>
                <p>
                    (3) aportar información de la propia empresa sobre sus esfuerzos para paliar la discriminación
                </p>
                <p>
                    (4) proporcionar la reputación acumulada de las empresas con la información disponible
                </p>

            </Grid.Row>
                    
        </Grid>
    </Container>
)

export default ContainerExampleText