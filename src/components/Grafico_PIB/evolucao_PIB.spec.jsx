import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { PIBProvider, usePIB } from "../../context/PIBContext";
import PibChart from "../../components/Grafico_PIB/evolucao_PIB";




describe("PibChart Component", () => {
  test("should render loading message when pibData is null", () => {
    render(
      <PIBProvider value={{ pibData: null, selectedYears: [], setSelectedYears: jest.fn() }}>
        <PibChart />
      </PIBProvider>
    );
    expect(screen.getByText("Carregando gráfico...")).toBeInTheDocument();
  });

  test("should provide PIB data correctly through context", async () => {
    const mockData = [{ resultados: [{ series: [{ serie: { "2020": 1000 } }] }] }];
    mockFetchWithData(mockData);

    const { getByTestId } = render(
      <PIBProvider>
        <TestComponentWithPibData />
      </PIBProvider>
    );

    await waitFor(() => {
      expect(getByTestId("pib-data").textContent).toBe(JSON.stringify(mockData));
    });
  });
});

// Funções auxiliares para melhorar a legibilidade e evitar duplicação
function mockFetchWithData(data) {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(data),
    })
  );
}

function TestComponentWithPibData() {
  const { pibData } = usePIB();
  return <div data-testid="pib-data">{JSON.stringify(pibData)}</div>;
}
