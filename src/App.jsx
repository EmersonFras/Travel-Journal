import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data.jsx"

import "./styles/Header.css"
import "./styles/Card.css"
import "./styles/index.css"

export default function App() {
    const cards = data.map(item => <React.Fragment key={item.id}><Card {...item}  /> {item.id !== data.length && <hr />}</React.Fragment>)
    return (
        <div id = "Page">
            <Header />
            <div id ="CardList">
                {cards}
            </div>
        </div>
    )
}