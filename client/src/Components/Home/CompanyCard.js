import React from 'react'
import { Card } from 'semantic-ui-react'

const empresas = [
    {
        header: 'Telefonica',
        meta: 'Reputation = 30',
        description: 'Empresa gay'
    },
    {
        header: 'Telefonica',
        meta: 'Reputation = 20',
        description: 'Empresa guy'
    },
    {
        header: 'Telefonica',
        meta: 'Reputation = 0',
        description: 'Empresa gua'
    },
    {
        header: 'Telefonica',
        meta: 'Reputation = 100',
        description: 'Empresa buena'
    },
    {
        header: 'Telefonica',
        meta: 'Reputation = 10',
        description: 'Empresa mala',
        image: './girls-around-me-screen.png'
    }

];
const CompanyCard = () => <Card.Group items={empresas} />

export default CompanyCard;