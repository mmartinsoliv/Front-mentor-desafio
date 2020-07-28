import React from 'react'

import {Container, Card} from './styles'


const Main = () => {
    return (
        <Container>
            <Card>
               <li>
               <h3>Username</h3>
                <h2>1987</h2>
                <span>Followers</span>
                <span>-10% today</span>
               </li>
               <li>
               <h3>Username</h3>
                <h2>1987</h2>
                <span>Followers</span>
                <span>today</span>
               </li>
               <li>
               <h3>Username</h3>
                <h2>1987</h2>
                <span>Followers</span>
                <span>-10% today</span>
               </li>
               <li>
               <h3>Username</h3>
                <h2>1987</h2>
                <span>Followers</span>
                <span>-10% today</span>
               </li>
            </Card>
        </Container>
    )
}

export default Main
