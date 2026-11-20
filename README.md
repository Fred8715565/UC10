# UC10 — repositório organizado

Cada missão fica em sua própria pasta, sem a duplicação de diretórios criada ao extrair os ZIPs originais.

## Missões
- `Missao-161/`
- `Missao-164/`
- `Missao-166/`
- `Missao-167/`
- `Missao-168/`
- `Missao-171/`

## Observações da revisão
- Nos arquivos recebidos, `validation.js` já está dentro de `src/` nas missões 161, 164, 166, 167 e 168.
- A missão 171 contém `src/operacoes.js` e `tests/operacoes.test.js`; ela não tem `validation.js`.
- Foi encontrado um `validation.test.js` extra na raiz da Missao-167, além do teste que já está em `src/tests/`. Ele foi mantido em `revisao-arquivos/` para não apagar conteúdo sem autorização. Confira se deve ser removido ou incorporado.
- Pastas `coverage/` foram omitidas porque são relatórios gerados por testes e podem ser recriadas executando os testes.
- Os bancos de dados e arquivos de dependências existentes foram preservados.

## Sugestão de branches no GitHub
Se a professora quer cada missão separada por branch, use nomes como `missao-161`, `missao-164`, `missao-166`, `missao-167`, `missao-168` e `missao-171`. O ZIP não publica nada automaticamente no GitHub; é preciso enviar cada missão para a branch correspondente.
