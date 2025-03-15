import React from "react";
import PibChart from "../../components/Grafico_PIB/evolucao_PIB";
import Header from "../../components/Layout/Header";

function EvolucaoPIB() {
    return (
        <div>
            <Header />
            <div className='container'>
                <h2>Gráfico da evolução do PIB</h2>
                <PibChart />
            </div>
        </div>
    )
}

export default EvolucaoPIB;