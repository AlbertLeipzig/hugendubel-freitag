import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

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
  const [buttonStatus, setButtonStatus] = useState(true);
  return (
    <header>
      <button
        style={{ backgroundColor: buttonStatus ? 'green' : 'red' }}
        onClick={() => setButtonStatus(!buttonStatus)}
      >
        Click Me
      </button>
      <nav>
        <ul>
          <li>
            <AiOutlineUser />
            <NavLink>Bücher versandkostenfrei*</NavLink>
          </li>
          <li>
            <NavLink>100 Tage Rückgaberecht</NavLink>
          </li>
          <li>
            <NavLink>Abholung in der Wunschfiliale</NavLink>
          </li>
        </ul>
        <button>X</button>
      </nav>
      <div>
        <a>Hungedubel</a>
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                <div>Home</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <div>Contact</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/books">
                <div>Bücher</div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
