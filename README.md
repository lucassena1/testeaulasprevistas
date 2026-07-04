# Sistema 21ª GRE - Registro de Aulas

Projeto ajustado para rodar na Vercel.

## Como subir
1. Envie todos os arquivos deste ZIP para o GitHub.
2. Na Vercel, importe o repositório.
3. Configure:
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. Deploy.

## Onde atualizar os arquivos
- Escolas: `public/dados/` com arquivos `.xlsx`
- Professores: `public/professores/` com arquivos `.csv`
- Dados gerais da GRE: `public/gre/` com o Excel geral

Durante o deploy, o script `scripts/gerar-index.js` gera automaticamente as listas dos arquivos.


## Ajustes incluídos
- Cabeçalho institucional completo: Clarisse, Iraci, Joanne, Luiz e Du Carmo.
- Indicador alterado para “Aguardando confirmação pela coordenação”.
- Ranking de professores com faixas: acima de 90% conforme, 70% a 89,9% atenção, abaixo de 70% risco.
- Nova pasta `public/evasao/` para CSV de alunos em risco de evasão, associado automaticamente à escola pelo nome.
