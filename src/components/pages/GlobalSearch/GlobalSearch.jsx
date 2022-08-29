import React from "react"
import SearchListItem from "../../common/SearchListItem/SearchListItem"
import YandexMap from "../../common/YandexMap"
import "./GlobalSearch.scss"
import Footer from "../../UI/Footer/Footer"
import Header from "../../UI/Header/Header"

const GlobalSearch = () => {


  return (
    <>
      <Header />
      <main>
        <section className="search-results">
          <ul className="section__top">
            <li>location</li>
            <li>date</li>
            <li>category</li>
          </ul>
          <div className="section__bottom list">
            <SearchListItem />
            <SearchListItem />
            <SearchListItem />
            <SearchListItem />
            <SearchListItem />
            <SearchListItem />
            <SearchListItem />
            <SearchListItem />
            <SearchListItem />
          </div>
        </section>
        <YandexMap placemarksArray={[{
          id: 1,
          defaultGeometry: [55.75, 37.57],
          balloonContentBody: "<a href = \"/users\">здесь можно указать ссылку</a>",
        }, {
          id: 2,
          defaultGeometry: [56.75, 37.57],
          balloonContentBody: "<a href = \"/users\">здесь можно указать ссылку</a>",
        }]} />
      </main>
      <Footer />
    </>

  )
}

export default GlobalSearch