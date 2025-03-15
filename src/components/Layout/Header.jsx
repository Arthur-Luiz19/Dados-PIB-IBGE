import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();

    const getNavButtonInfo = (path, label) => ({
        label: location.pathname === path ? "Início" : label,
        link: location.pathname === path ? "/" : path,
    });

    const grafico = getNavButtonInfo("/grafico", "Gerar gráfico");
    const tabela = getNavButtonInfo("/tabela", "Gerar tabela");

    const buttonClass = "px-6 py-3 font-semibold rounded-lg shadow-md transition-all hover:scale-105";


    return (
        <div>
            <header className="bg-[#FF9800] py-4 shadow-md">
                <nav className="w-full flex flex-wrap justify-between items-center px-6">
                    {/* Título */}
                    <Link className="text-4xl md:text-5xl lg:text-6xl text-[#b22222] font-bold font_titulo" to="/">
                        Dados PIB do IBGE
                    </Link>

                    {/* Menu de Navegação */}
                    <ul className="flex flex-wrap justify-center items-center gap-5 md:gap-7 mt-3 md:mt-0">
                        <li>
                            <Link
                                className={`${buttonClass} bg-blue-500 text-white hover:bg-blue-600`}
                                to={grafico.link}
                            >
                                {grafico.label}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`${buttonClass} bg-[#eb1919] text-white hover:bg-[#b22222]`}
                                to={tabela.link}
                            >
                                {tabela.label}
                            </Link>
                        </li>

                    </ul>
                </nav>
            </header>

        </div>
    )
}

export default Header;