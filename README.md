# A&M · IT M&A 2027 · Portfólio renovado com IA

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
