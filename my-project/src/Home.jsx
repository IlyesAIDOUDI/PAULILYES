import { useState } from 'react'
import './App.css'
import Produit from "./Produit";
import Protec from './Protec'
import Piece from './Piece'
import Acces from './Acces'


function Home() {
    const [choix, setChoix] = useState("");

    const handleChange = (event) => {
        setChoix(event.target.value);
    };

    return (
        <div>
            <div className='text-cyan-400' >
                <h1>Bienvenue sur notre site ecommerce !</h1>
                <p>Choisissez des options pour accéder à la page de produits :</p>
            </div>
            <h2> <br /></h2>
            <select value={choix} onChange={handleChange}>
                <option value=""> Que recherchez-vous ? </option>
                <option value="option1">Protections</option>
                <option value="option2">Accesoires</option>
                <option value="option3">Pièces détachées</option>
            </select>
            {choix === "option1" && (
                <div><br />
                    <h3>Voici nos Protections : </h3>
                    <Protec />
                </div>
            )}
            {choix === "option2" && (
                <div><br />
                    <h3>Voici nos Accesoires : </h3>
                    <Acces />
                </div>
            )}
            {choix === "option3" && (
                <div><br />
                    <h3>Voici nos Pièces détachées : </h3>
                    <Piece />
                </div>
            )}
        </div>
    );
}

export default Home;
