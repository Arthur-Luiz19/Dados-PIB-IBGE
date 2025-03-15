import React, { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/utils";
import { usePIB } from "../../context/PIBContext";

const DOLLAR_EXCHANGE_RATE = 5.80;

const PibTabela = () => {
    const { selectedYears, setSelectedYears, pibData } = usePIB();
    const [localPibData, setLocalPibData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Recupera anos selecionados do localStorage
    useEffect(() => {
        const anosSalvos = localStorage.getItem("selectedYears");
        if (anosSalvos && selectedYears.length === 0) {
            setSelectedYears(JSON.parse(anosSalvos));
        }
    }, [setSelectedYears, selectedYears]);

    // Filtra os dados com base nos anos selecionados
    const filterBySelectedYears = (data) => {
        if (selectedYears.length === 0) return data;
        return data.filter((item) => selectedYears.includes(item.anos));
    };

    // Converte os dados da API em um formato adequado
    const parsePibData = (pibTotalData, pibPerCapita) => {
        return Object.keys(pibTotalData).map((ano) => ({
            anos: ano,
            pibTotal: pibTotalData[ano],
            pibPerCapita: pibPerCapita[ano],
        }));
    };

    // Busca e processa os dados do PIB
    useEffect(() => {
        const getPibData = async () => {
            try {
                if (!pibData) return;

                const pibTotalData = pibData[0].resultados[0].series[0].serie;
                const pibPerCapita = pibData[1].resultados[0].series[0].serie;

                let parsedData = parsePibData(pibTotalData, pibPerCapita);
                parsedData = filterBySelectedYears(parsedData);
                parsedData.sort((a, b) => a.anos - b.anos);

                setLocalPibData(parsedData);
            } catch (error) {
                setError("Erro ao buscar os dados");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getPibData();
    }, [selectedYears, pibData]);

    if (loading) return <p>Carregando...</p>;
    if (error) return <div>{error}</div>;

    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Ano</th>
                        <th>PIB Total (em dólares)</th>
                        <th>PIB per capita (em dólares)</th>
                    </tr>
                </thead>
                <tbody>
                    {localPibData.map((item) => (
                        <tr key={item.anos}>
                            <td>{item.anos}</td>
                            <td>{formatCurrency(item.pibTotal / DOLLAR_EXCHANGE_RATE)}</td>
                            <td>{formatCurrency(item.pibPerCapita / DOLLAR_EXCHANGE_RATE)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PibTabela;
