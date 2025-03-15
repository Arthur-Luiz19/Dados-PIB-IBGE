import { useEffect, useState } from "react";
import { usePIB } from "../../context/PIBContext";
import Header from "../../components/Layout/Header";

const FiltrarAnos = () => {
    const { selectedYears, setSelectedYears, pibData } = usePIB();
    const [availableYears, setAvailableYears] = useState([]);

    // Carregar os anos do LocalStorage quando a página iniciar
    useEffect(() => {
        const storedYears = localStorage.getItem("selectedYears");
        if (storedYears) {
            setSelectedYears(JSON.parse(storedYears));
        }
    }, [setSelectedYears]);

    // Extrai os anos disponíveis da API
    useEffect(() => {
        if (!pibData) return;

        try {
            const years = Object.keys(pibData[0]?.resultados[0]?.series[0]?.serie || {});
            setAvailableYears(years);
        } catch (error) {
            console.error("Erro ao extrair anos da API:", error);
        }
    }, [pibData]);

    // Checar se os dados do PIB estão carregados
    if (!pibData) return <p>Carregando dados...</p>;

    // Função para alterar o estado dos anos selecionados
    const handleCheckboxChange = (e, year) => {
        const updatedYears = e.target.checked
            ? [...selectedYears, year]
            : selectedYears.filter((y) => y !== year);

        setSelectedYears(updatedYears);
        localStorage.setItem("selectedYears", JSON.stringify(updatedYears));
    };

    return (
        <div>
            <Header />
            <div className="filtro_container">
                <h2>Selecione os anos para análise</h2>

                <div className="filtro w-[60%] md:w-[70%] lg:w-[100%] flex justify-center">
                    {availableYears.length === 0 ? (
                        <p>Nenhum ano disponível.</p>
                    ) : (
                        availableYears.map((year) => (
                            <label key={year}>
                                <input
                                    type="checkbox"
                                    value={year}
                                    checked={selectedYears.includes(year)}
                                    onChange={(e) => handleCheckboxChange(e, year)}
                                />
                                {year}
                            </label>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default FiltrarAnos;
