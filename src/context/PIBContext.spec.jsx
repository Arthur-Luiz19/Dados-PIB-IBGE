import React from "react";
import { render, waitFor } from "@testing-library/react";
import { PIBProvider, usePIB } from "./PIBContext";

describe("PIBContext", () => {
  test("should correctly provide the PIB data", async () => {
    const mockData = [{ resultados: [{ series: [{ serie: { "2020": 1000 } }] }] }];
    mockFetchComDados(mockData);

    const { getByTestId } = render(
      <PIBProvider>
        <ComponenteTesteDadosPIB />
      </PIBProvider>
    );

    await waitFor(() => {
      expect(getByTestId("pib-data").textContent).toBe(JSON.stringify(mockData));
    });
  });

  test("should handle data fetch errors correctly", async () => {
    mockFetchComErro();

    const { getByTestId } = render(
      <PIBProvider>
        <ComponenteTesteErroBuscaDados />
      </PIBProvider>
    );

    await waitFor(() => {
      expect(getByTestId("error").textContent).toBe("Erro de rede");
    });
  });
});

// Funções auxiliares para melhorar a legibilidade e evitar duplicação
function mockFetchComDados(dados) {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(dados),
    })
  );
}

function mockFetchComErro() {
  global.fetch = jest.fn(() => Promise.reject(new Error("Erro de rede")));
}

function ComponenteTesteDadosPIB() {
  const { pibData } = usePIB();
  return <div data-testid="pib-data">{JSON.stringify(pibData)}</div>;
}

function ComponenteTesteErroBuscaDados() {
  const { error } = usePIB();
  return <div data-testid="error">{error}</div>;
}