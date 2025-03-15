import React, { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { usePIB } from "../../context/PIBContext";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, BarElement, Title, Tooltip, Legend);

const DOLLAR_EXCHANGE_RATE = 5.80;

const PibChart = () => {
    const { selectedYears, setSelectedYears, pibData } = usePIB();
    const [chartData, setChartData] = useState(null);

    //Recupera os anos filtrados do LocalStorage ao carregar a página
    useEffect(() => {
        const getAnosSelecionados = () => {
            const anosSalvos = localStorage.getItem("selectedYears");
            if (anosSalvos) {
                setSelectedYears(JSON.parse(anosSalvos));
            }
        };
        getAnosSelecionados();
    }, [setSelectedYears]);

    useEffect(() => {
        if (!pibData) return;

        const processarPibDados = () => {
            const anosOrdenados = (selectedYears.length > 0
                ? selectedYears
                : Object.keys(pibData[0].resultados[0].series[0].serie)
            ).sort((a, b) => parseInt(a) - parseInt(b));

            const pibTotalInDollars = anosOrdenados.map(
                (ano) => pibData[0].resultados[0].series[0].serie[ano] / DOLLAR_EXCHANGE_RATE
            );

            const pibPerCapitaInDollars = anosOrdenados.map(
                (ano) => pibData[1].resultados[0].series[0].serie[ano] / DOLLAR_EXCHANGE_RATE
            );

            setChartData({
                labels: anosOrdenados,
                datasets: [
                    {
                        label: "PIB Total (em dólares)",
                        data: pibTotalInDollars,
                        borderColor: "rgba(75, 192, 192, 1)",
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                        tension: 0.4,
                        yAxisID: "y",
                    },
                    {
                        label: "PIB renda per capita (em dólares)",
                        data: pibPerCapitaInDollars,
                        borderColor: "rgba(255, 99, 132, 1)",
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        tension: 0.4,
                        yAxisID: "y1",
                    },
                ],
            });
        };

        processarPibDados();
    }, [pibData, selectedYears]);

    if (!chartData) return <p>Carregando gráfico...</p>;

    return (
        <div className="grafico_container">
            <Line
                data={chartData}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "top", labels: {
                                padding: 10,
                                boxHeight: 10,
                                font: {
                                    size: 13,
                                },
                            }
                        },
                        title: {
                            display: true,
                            text: "PIB total e PIB per capita (em dólares)",
                            font: { size: 15 },
                        },
                    },
                    scales: {
                        y: {
                            type: "linear",
                            display: true,
                            position: "left",
                            grid: { drawOnChartArea: false },
                            ticks: {
                                color: "rgba(75, 192, 192, 1)"
                            }
                        },
                        y1: {
                            type: "linear",
                            display: true,
                            position: "left",
                            grid: { drawOnChartArea: false },
                            ticks: {
                                color: "rgba(255, 99, 132, 1)"
                            }
                        },
                    },
                }}
            />
        </div>
    );
};

export default PibChart;