import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './pages/Main/index'

const Router = () => {
    return (
       <BrowserRouter>
         <Switch>
             <Route path="/"  exact component={Main} />
         </Switch>
       </BrowserRouter>
    )
}

export default Router