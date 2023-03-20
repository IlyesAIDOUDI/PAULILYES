import { useState } from 'react'
import './App.css'
import Produit from "./Produit";


function Home() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <h1>Bienvenue sur notre site ecommerce !</h1>
            <p>Cliquez sur le lien ci-dessous pour accéder à la page de produits :</p>
            <div className='' >
                <h2>Protections</h2>
                <h2>Accesoires</h2>
                <h2>Pièce détachée</h2>
            </div>



        </div>

    )
}


export default Home



