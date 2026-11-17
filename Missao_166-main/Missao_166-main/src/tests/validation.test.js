const { validateLead } = require("../validation");

describe("Aplicação de testes unitários na função validateLead", () => {

    // Testa se os dados preenchidos corretamente são aceitos
    test("Deve aceitar um cadastro válido", () => {
        const resultado = validateLead({
            name: "João da Silva",
            email: "joao@gmail.com",
            phone: "1234567890",
            interest: "Online"
        });

        // Verifica se o cadastro foi aceito
        expect(resultado.valid).toBe(true);
        expect(resultado.errors.length).toBe(0);
    });

    // Testa se o sistema identifica um nome inválido
    test("Verifica nome inválido", () => {
        const resultado = validateLead({
            name: "J",
            email: "joao@gmail.com"
        });

        // Verifica se o cadastro foi rejeitado
        expect(resultado.valid).toBe(false);

        // Verifica se a mensagem de erro foi retornada
        expect(resultado.errors).toContain(
            "Informe seu nome (mínimo de 2 caracteres)."
        );
    });

});