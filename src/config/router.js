import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from "../components/templates/Home/home"
import Login from '../components/templates/Login'
import NavBar from "../components/organisms/NavBar/NavBar"
import AuthRoute from '../components/molecules/AuthRoute'

const AppRouter = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route exact path='' element={<Home />} />
      {/*<Route exact path='/' element={<AuthRoute />} />*/}
      <Route exact path='login' element={<Login />} />
    </Routes>
  </Router>
)

export default AppRouter