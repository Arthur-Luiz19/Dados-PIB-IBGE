import React, { createContext, useContext, useState, useEffect } from "react";

// Extraindo a URL da API para facilitar manutenção e reutilização
const API_URL = "https://servicodados.ibge.gov.br/api/v3/agregados/6784/periodos/1996|1997|1998|1999|2000|2001|2002|2003|2004|2005|2006|2007|2008|2009|2010|2011|2012|2013|2014|2015|2016|2017|2018|2019|2020|2021|2022/variaveis/9808|9812?localidades=N1[all]";

const PIBContext = createContext();

export const PIBProvider = ({ children }) => {
    const [selectedYears, setSelectedYears] = useState([]);
    const [pibData, setPibData] = useState(null);
    const [error, setError] = useState(null);

    // Função responsável por buscar os dados da API
    const fetchPibData = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error("Erro ao buscar os dados do PIB");
            }
            const data = await response.json();
            setPibData(data);
        } catch (err) {
            setError(err.message);
            
        }
    };

    useEffect(() => {
        fetchPibData();
    }, []);

    return (
        <PIBContext.Provider value={{ selectedYears, setSelectedYears, pibData, error }}>
            {children}
        </PIBContext.Provider>
    );
};

// Hook customizado para acessar o contexto
export const usePIB = () => useContext(PIBContext);
