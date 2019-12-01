import React, { Component } from 'react';
import { AppHeader } from '../AppHeader/index';
import { Container } from '../../blocks/Container/Container';
import { Main } from '../Main/index';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Auth } from '../Auth';
import { Reg } from '../Reg';
import { Restore } from '../Restore';
import {Count} from '../Count/index';
import { NewCount } from '../NewCount/index';
import { Tasks } from '../Tasks';
import { NewTask } from '../NewTask';
import { CurrentTask } from '../CurrentTask';
import { Partners } from '../Partners';
import { NewPartner } from '../NewPartner';


const compWithHeader:Function = (Component:any) => (props:any) => {
  return(
    <>
      <AppHeader/>
      <div className="container container_comp_wrapper">
        <Component {...props}></Component>
      </div>
    </>
    )
}

export const App: React.FC = () => {
  return(
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={compWithHeader(Main)} exact/>
        <Route path="/auth/login" component={Auth} exact/>
        <Route path="/auth/reg" component={Reg} exact/>
        <Route path="/auth/restore" component={Restore} exact/>
        <Route path="/count/:type" component={compWithHeader(Count)}/>
        <Route path="/new/count/:type" component={compWithHeader(NewCount)}/>
        <Route path="/tasks" component={compWithHeader(Tasks)}/>
        <Route path="/new/tasks" component={compWithHeader(NewTask)}/>
        <Route path="/current" component={compWithHeader(CurrentTask)}/>
        <Route path="/partners" component={compWithHeader(Partners)}/>
        <Route path="/new/partner" component={compWithHeader(NewPartner)}/>
      </Switch>
    </BrowserRouter>
    </>)
}
