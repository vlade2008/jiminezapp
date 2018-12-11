// eslint-disable-next-line

import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Home from '../home'
import PatientList from '../patientlist';
import PatientView from '../patientview';

const App = () => (
  <div style={{ padding: 20 }}>
    <main>
      <Switch>
        <Route exact path="/" component={PatientList} />
        <Route exact path="/patient/:id" component={PatientView} />
      </Switch>
    </main>
  </div>
)

export default App
