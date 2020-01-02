import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landing';
import About from './about';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path = "/" component = {Landing} />
        <Route path = "/about" component = {About} />
        <Route path = "/resume" component = {Resume} />
        <Route path = "/projects" component = {Projects} />
        <Route path = "/Contact" component = {Contact} />
    </Switch>
)

export default Main;