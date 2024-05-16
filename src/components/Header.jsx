import React from "react"
import world from "/assets/world-logo.png"

export default function Header() {
    return (
        <div id = "head">
            <img src={world} alt = "Globe Image" />
            <h3 className="title">my travel journal.</h3>
        </div>
    )
}