import { NavLink } from "react-router-dom"
/* top nav bar with 3 links : [Bücher versandkostenfrei*100 Tage RückgaberechtAbholung in der Wunschfiliale]
company logo
search field
nav bar with icons and 4 links : [Filiale
Konto
Merkzettel
Warenkorb]
nav bar with Bücher
eBooks
tolino
Schule & Lernen
English Books
Kalender
Weihnachten
Hörbücher
Spielwaren
Schreibwaren
Geschenke & Trends
SALE² */

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink>Bücher versandkostenfrei</NavLink>
                    </li>
                    <li>
                        <NavLink>Bücher versandkostenfrei</NavLink>
                    </li>
                    <li>
                        <NavLink>Bücher versandkostenfrei</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
