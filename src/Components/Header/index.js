import React, {useState} from 'react'
import {Container,  Title,  ModoDark} from './styles'


const Header = ({themeToggler}) => {


    return (   

        <Container>
            <Title>
                 <h1>
                 Social Media Dashboard
                 </h1>
                <span>
                   Total Followers: 24566
                </span>
            </Title>
            <ModoDark>
                <button onClick={themeToggler} >Mode Dark</button>
            </ModoDark>
        </Container>
    )
}

export default Header