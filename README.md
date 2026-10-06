# A&M DTS · Tech M&A · Portfólio de produtos (v2)

A versão atual está em **`v2/index.html`**: uma apresentação de produto e venda com 15 telas, construída a partir do deck comercial de IT M&A da DTS e de uma nova rodada de pesquisa (06/10/2026). Ela segue o Guia de Design DTS: paleta A&M, tipografia Inter e JetBrains Mono, e um efeito do guia por tela, na dose indicada.

## Como abrir a v2

Abra `v2/index.html` em um navegador moderno. Não precisa de servidor.

- Setas ou espaço: avançar e voltar · `G`: índice · `I`: "sobre este slide" (descrição, efeito usado e fontes) · `F`: tela cheia
- Os produtos são clicáveis no mapa de riscos, no de-para, no sistema de produtos e nas jornadas por cliente

## Estrutura (15 telas)

| Capítulo | Telas | Conteúdo | Efeito do guia |
|---|---|---|---|
| Abertura | 1 | Capa: "Da diligência à execução, no mesmo fio" | 40 Shader (intensa) |
| 01 · Contexto | 2–4 | Desafio, riscos e impactos (10 riscos ligados a 5 impactos), mercado e concorrência (PwC, EY-Parthenon, Deloitte) | 10 Mask Reveal · 39 Node Network · 21 Flip Card |
| 02 · Portfólio | 5–6 | De serviços a produtos (mantido, remodelado, fundido, removido, novo) e o sistema de produtos em uma página | 37 Before/After · 18 Connector |
| 03 · Produtos | 7–13 | Tech M&A Playbook · IT Due Diligence (Red Flag e 360) · Software Product & Technology, AI e Cyber & Data Due Diligence · IT Separation & TSA Design e Day One Blueprint · Integration & Separation Office · Tech Value Creation e Exit Tech Readiness · A&M Deal Twin | 03 Hologram · 22 Expandable · 29 Morphing · 06 Glow · 38 Timeline · 04 Tilt |
| 04 · Resultados | 14–15 | O que muda para fundos, consolidadores e vendedores, com cases da DTS; por que A&M e por onde começar | 33 Card Stack · 40 Shader (sutil) |

Regras atendidas: sem números de mercado nos slides, sem gráficos de barras, sem formas de cobrança, sem tempo ou timeline de implementação. Os números da pesquisa ficam só nos relatórios, como prova de bastidor.

## Pesquisa da v2 (`v2/pesquisa/`)

- `L0_lideres.md`: escolha dos três benchmarks pela fatia de mercado em M&A
- `B1_PwC.md`, `B2_EYEYParthenon.md`, `B3_Deloitte.md`: dossiês de produto, nomes, tecnologia e IA de cada líder
- `A1_am_global.md`: nomes oficiais e ativos de IA da A&M global (DiligenceGPT, A&M Assist, Rapid Analytics, AI-ZBO)
- `I1_inovacao.md`: inovação em produtos de M&A com tecnologia em 2025–2026
- `M1_brasil.md`: sinais do mercado brasileiro (ANPD, reforma tributária, carve-outs, compradores seriais)
- `verify_*.md`: verificação cética de cada relatório (nenhum item refutado)

Limites: a política de rede do ambiente bloqueou a maior parte dos sites; a pesquisa usou buscas e espelhos públicos de páginas oficiais no GitHub. Trechos marcados como "snippet" devem ser conferidos antes de uso externo. A disponibilidade do DiligenceGPT, do A&M Assist e do Rapid Analytics para o time do Brasil não foi confirmada publicamente.

## Como editar a v2

Cada tela é um arquivo em `v2/build/slides/`. Depois de editar, gere a apresentação com `python3 v2/build/assemble.py v2/index.html`. Os testes de navegação e de layout usam Playwright (`node shot.js`, `node nav_test.js`).

---

# Versão anterior (v1)

## A&M · IT M&A 2027 · Portfólio renovado com IA (v1)

Revisão estratégica do portfólio de IT M&A e due diligence de tecnologia da Alvarez & Marsal Brasil (Digital & Technology Services), construída como apresentação HTML interativa no padrão visual A&M.

## Como abrir

Abra `index.html` em um navegador moderno (Chrome, Edge, Safari ou Firefox). Não precisa de servidor.

- Setas ou espaço: avançar e voltar
- `G`: índice de páginas · `I`: "sobre este slide" · `F`: tela cheia
- Na one page (tela 11), clique em qualquer produto para abrir a página de detalhe; o botão "voltar à one page" retorna
- Imprimir em PDF: `Ctrl/Cmd + P` (uma página por tela, 1600 × 900)

## Estrutura da narrativa (31 telas)

| Parte | Telas | Conteúdo |
|---|---|---|
| Contexto | 1–3 | Capa, resumo executivo em quatro atos, método e limites da pesquisa |
| 1 · Desafios & riscos | 4–5 | Os 10 desafios holísticos de 2023 revistos com fatos de 2026 (+1 transversal); 5 riscos atualizados e 5 novos, cada um com dado |
| 2 · Mercado & concorrência | 6–10 | Mercado brasileiro em números, o que o mercado pede, como as consultorias fazem DD (nomes, estruturas, ferramentas, IA), o stack de plataformas, diagnóstico do portfólio atual |
| 3 · Portfólio renovado | 11–23 | One page executiva (12 produtos: 2 manter · 5 aprimorar · 5 criar) com hiperlinks para 12 páginas de detalhe |
| 4 · Capacidades 2027 | 24–26 | Seis capacidades, roadmap em três ondas, hipóteses a testar |
| Anexos | 27–31 | Registro de 67 evidências com fonte, data, link e nível de confiança |

## Como ler as evidências

- **Evidência**: número ou trecho literal atribuído a uma fonte nomeada, com data e URL (confiança alta = 2+ fontes; média = 1 trecho literal; baixa = fonte secundária ou divergência).
- **Hipótese**: inferência nossa, dado de fonte secundária ou número a confirmar.
- **Lei · conferir**: artigo de lei citado; conferir no Planalto antes de uso externo.

Limite declarado: a pesquisa (06/10/2026) usou motor de busca em pt e en; nesta sessão as páginas-fonte não puderam ser abertas por política de rede, e os números vêm de trechos literais atribuídos às fontes. Nada foi inventado; o que não foi encontrado está marcado. A tela 26 lista os 12 claims a confirmar antes de uso externo e as frentes para a segunda rodada.

## Arquivos

- `index.html` — a apresentação (autocontida; só carrega fontes do Google Fonts)
- `dados/products.json` — definição dos 12 produtos (público, problema, entregáveis, método, sistema/IA, produtização, esforço, indicadores, evidências)
- `dados/evidence.json` — registro das 67 evidências
- `pesquisa/` — os 7 relatórios de pesquisa (mercado, Big Four, estratégia e Accenture, boutiques e plataformas, software e roll-ups, IA em DD no Brasil, pessoas/legado/cloud/licenças)
- `build/` — scripts que geram as telas de produto e de fontes a partir dos JSON (`python3 build/assemble.py index.html`)
