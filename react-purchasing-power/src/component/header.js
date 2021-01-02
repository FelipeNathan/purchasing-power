import React from 'react'
import { Link } from '@reach/router'
export default function Header() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Comparador de poder de compra |</Link>
            <small className="text-light">  O objetivo deste site é fazer a comparação do poder de compra entre os países através do Índice
                Big Mac (<em>Big Mac Index</em>) e também através da quantidade de Big Mac por salário mínimo. </small>
        </nav>
    )
}