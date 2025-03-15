import React from "react";
import PibTabela from "../../components/Tabela_PIB/tabela_PIB";
import Header from "../../components/Layout/Header";

function TabelaPIB() {

    return (
        <div>
            <Header />
            <div className="container">
                <h2>Tabela do PIB</h2>
                <PibTabela />
            </div>
        </div>
    )
}

export default TabelaPIB;