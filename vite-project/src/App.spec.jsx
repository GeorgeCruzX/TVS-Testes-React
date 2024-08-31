/* eslint-disable no-undef */
// importa funções da biblioteca de testes
import { render, screen, fireEvent } from "@testing-library/react";
// Importa o componente App será testado
import App from "./App";
import test from "node:test";

// Teste para verificar se o título "Hello World" é renderizado corretamente
test("renderiza o título 'Hello World'", () => {
    // Renderiza o componente App na árvore de componentes para teste
    render(<App />);
    // Seleciona o elemento do título que deve conter o texto "Hello World"
    const heading = screen.getByText(/Hello World/i);
    // Verifica se o título está presente no documento
    expect(heading).toBeInTheDocument();
    });

    // Teste para verificar se o contador é incrementado quando o botão é clicado
    test("incrementa o contador quando o botão é clicado", () => {
        // Renderiza o componente App na árvore de componentes para teste
        render(<App />);
        // Seleciona o botão que exibe  "Contagem 0"
        const button = screen.getByText(/Contagem 0/i);
        // Simula um clique no botão
        fireEvent.click(button);
        // Verefica se o botão agora exibe "Contagem 1"
        expect(screen.getByText(/Contagem 1/i)).toBeInTheDocument();
    })