import React from "react"
import { Route, Routes } from "react-router-dom"
import "./App.scss"
import Auth from "./components/pages/Auth/Auth"
import GlobalSearch from "./components/pages/GlobalSearch/GlobalSearch"
import Main from "./components/pages/Main/Main"
import CompanyProfile from "./components/pages/Profile/Company/CompanyProfile"
import ConsumerProfile from "./components/pages/Profile/Consumer/ConsumerProfile"
import Business from "./components/pages/Registration/Business/Business"
import Consumer from "./components/pages/Registration/Consumer/Consumer"
import ReservationPage from "./components/pages/ReservationPage/ReservationPage"
import Footer from "./components/UI/Footer/Footer"

// import Header from './components/UI/Header/Header'

function App() {
  return (
    <div className="wrapper">
      {/*<Header/>*/}
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"auth"} element={<Auth />} />
        <Route path={"auth/registration/consumer"} element={<Consumer />} />
        <Route path={"auth/registration/company"} element={<Business />} />
        <Route path={"global-search"} element={<GlobalSearch />} />
        {/*<Route path={"company"} element={<CompanyProfile />} />*/}
        {/*<Route path={"consumer"} element={<ConsumerProfile />} />*/}
        <Route path={"reservation"} element={<ReservationPage />} />
        {/*<Route path={'test-page'} element={}/>*/}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
