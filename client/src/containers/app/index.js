/*eslint-disable */

import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Home from '../home'
import PatientList from '../patientlist';
import PatientView from '../patientview';
import Settings from '../settings';
import PrintView from '../print'

const App = () => (
  <div style={{ padding: 20 }}>
    <main>
      <Switch>
        <Route exact path="/" component={PatientList} />
        <Route exact path="/patient/:id" component={PatientView} />
        <Route exact path="/patient/:id/printview/:orderId" component={PrintView} />
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </main>
  </div>
)

export default App
