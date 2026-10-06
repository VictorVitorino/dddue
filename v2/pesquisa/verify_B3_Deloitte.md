# Verificação cética · Frente bench:Deloitte (B3)

Data: 06/10/2026. Método, na ordem pedida:
1. **Espelhos GitHub.** No mcjuh/BT4103-Scrape-and-Tag (commit f72d55c, snapshot 2026) baixei de novo, via raw.githubusercontent.com, as 4 páginas Deloitte US de M&A. Estão em `v2/research/verifyB3/` e são idênticas às de `v2/research/dl/`. O search_code no repositório não acha iDeal, Synapse, M&A Central, Digital Deal Room nem DataMAAP. Na busca global, só `Aman-web2000/Gliner_NER/dict.py` traz uma taxonomia de ofertas Deloitte com "M&A Central - SW" e "Mgd Svc-DataMaaP". Isso corrobora os nomes, não as descrições. "deloitte-announces-ma-platform" e "agentic harness" + Deloitte M&A não aparecem em nenhum espelho.
2. **Relatórios anteriores:** `research/R2_big_four.md` (achados 5, 6, 8–12) e `v2/research/B3_Deloitte.md` (seção 9).
3. **Três WebSearch, todas usadas:**
   - (a) lançamento do M&A Platform;
   - (b) DataMAAP + M&A Central;
   - (c) Digital Deal Room + Synapse (BR).

**Acesso direto:** prnewswire.com e channellife.news recusados pelo proxy (403, 1 tentativa cada). deloitte.com já dava 403 na rodada anterior.

**Legenda**
- **confirmed**: vi o texto literal (espelho ou trecho de busca feito por mim).
- **partially_confirmed**: só parte do claim foi vista, ou a única fonte é o snippet de relatório anterior.
- **unverifiable**: não há como checar.

| # | Item | Veredito | Como | Correção |
|---|---|---|---|---|
| 1 | M&A Platform | confirmed | Busca (a): título na URL exata, "Deloitte Expands AI and Agentic AI Capabilities With M&A Platform Enabling Smarter, More Streamlined Deal Execution". Mesmo título no prnewswire 302886177. | — |
| 2 | M&A technology solutions (M&A Technology Platform & Tools) | confirmed | Espelho mcjuh: `Title: M&A Technology Platform & Tools \| Deloitte US` e H1 "M&A technology solutions" na URL exata. | — |
| 3 | iDeal | partially_confirmed | Só snippets de R2 #12 e B3 #9: "iDeal is an M&A analytics solution that provides deeper, more meaningful insights from data". Nenhum espelho, nenhuma busca própria. | R2 cita o caminho /global/en/services/financial-advisory/…; o item usa /consulting-financial/…. A data do release (prnewswire 300325862) não foi verificada: não chamar de novidade. |
| 4 | M&A Central | confirmed | Busca (b): páginas de produto "m and a central" em /cbc/en/products/ e /gr/en/products/, com o texto citado no item 21. O dict.py do GitHub lista "M&A Central - SW". | A busca não devolveu a URL /global/; ela só aparece em B3. |
| 5 | DataMAAP | confirmed | Busca (b): título "DataMAAP" na URL exata /global/en/products/datamaap.html, mais "DataMAAP: AI for M&A Data Transfers" (www2, US) e a página AU. | — |
| 6 | Digital Deal Room | partially_confirmed | Busca (c): na URL exata da AU, o título da página é **"M&A Virtual Deal Room"**, com "online platform coupled with customized virtual sessions with M&A specialists". O nome "Digital Deal Room" aparece no texto em português (BR) e no slug da URL. | Na AU o nome exibido é "M&A Virtual Deal Room". É prontidão e consultoria virtual pré-deal, não um VDR/data room tech. |
| 7 | Synapse | partially_confirmed | Busca (c) devolveu a menção "ferramentas proprietárias como Digital Deal Room e Synapse, que aceleram blueprinting e due diligence" (resumida/traduzida). A fonte provável é outra URL: /br/pt/services/consulting/services/mergers-and-aquisitions.html. | Não tem página própria nem descrição. Citar só como "menção" e não descrever funcionalidade. A URL do item (financial-advisory/perspectives/tecnologia-fusoes-aquisicoes) não foi vista por mim. |
| 8 | Divestiture Readiness SelfAssess™ | confirmed | Espelho mcjuh (página PE): "Our Divestiture Readiness SelfAssessTM tool is here to help you navigate yours", com link para /us/en/services/consulting/articles/divestiture-planning-and-assessment-tool.html. | Não verifiquei a URL selfassess.deloitte.com/divestiture/us. A URL confirmada é a do artigo. |
| 9 | ValueD™ | confirmed | Espelho mcjuh (página Consulting M&A): "Learn how ValueD™, powered by artificial intelligence (AI) can help you generate insightful valuations…", com link para a URL exata. | — |
| 10 | M&A Technology (Tech DD, Cyber Diligence, AI DD, Digital Footprint Analysis), UK | partially_confirmed | Só snippet de R2 #8: "global network of over 1,200 specialists" e as 4 linhas nomeadas. Nenhum espelho, nenhuma busca própria. | — |
| 11 | Software Due Diligence (DE) | partially_confirmed | R2 diz que a URL existe no buscador, mas que o "conteúdo não [foi] verificado". O conteúdo (CAST, "non-invasive") só existe como snippet em B3 #15. O case da CAST (R2 #11) confirma que a Deloitte usa CAST Highlight em Tech DD. | Não atribuir as frases sobre a CAST à página DE sem ver o literal. Atribuí-las ao case da CAST. |
| 12 | AI Due Diligence / AI in Private Equity (US) | partially_confirmed | Só snippet de B3 #17. A página PE (espelho 2026) traz "Digital transformation and sustainable value creation through AI…", mas não o nome "AI due diligence". | — |
| 13 | IT M&A (BR) | partially_confirmed | Só snippet de R2 #5: "A Due Diligence de TI exige um exame dos ativos, sistemas, processos, políticas e procedimentos de TI…". O "70%" vem de um trecho em inglês. | — |
| 14 | Integração pós-fusão (BR) | partially_confirmed | Só snippet de B3 #28, marcado lá como "resumo do buscador". O slug da URL bate com o nome, mas não há texto literal. | Não citar frases da página entre aspas. |
| 15 | Lançamento do M&A Platform: IA em todo o ciclo, "agentic harness", Ascend, >1.000 engajamentos | confirmed | Busca (a) devolveu os trechos: "In use across more than 1,000 client engagements… purpose-built solution that embeds AI across the entire deal lifecycle, enabling deeper due diligence, stronger transaction structuring, and end-to-end integration"; "Supported by an agentic harness that helps scale, govern and manage AI agents"; "available now through Ascend, Deloitte's service delivery platform". Data: 22/09/2026. | O texto diz "client engagements", não "deals". A manchete "used in 1,000 deals" é da cfotech/channellife. |
| 16 | Funções de IA listadas pela imprensa; nomes de módulos não divulgados | partially_confirmed | Busca (a) devolveu só o título da accountingtoday na URL exata ("Tech news: Deloitte debuts AI-enabled M&A platform"). A lista de 10 funções está só no snippet de B3 #2. "Nomes não divulgados" é uma ausência, impossível de provar. | — |
| 17 | Citação do líder de M&A da Deloitte US | confirmed | Busca (a): "Adam Reilly, national managing partner, Merger & Acquisition Services, Deloitte": "activate AI to move with greater confidence, make smarter decisions, and achieve stronger outcomes". | Vi só esse fragmento. O início ("With demonstrated capabilities already in market, we are helping clients…") está só em B3. Cargo exato: national managing partner, Merger & Acquisition Services. |
| 18 | Página "M&A Technology Platform & Tools": plataforma GenAI end-to-end; escala de IA como prova | confirmed | Espelho mcjuh: "With our GenAI-enabled end-to-end M&A platform, you set the pace…"; "7,000+ AI professionals globally"; "$1.4B in global AI revenue". | — |
| 19 | Líder end-to-end e especialista em desinvestimentos ("see around the corner") | confirmed | Espelho mcjuh (/us/en/services/consulting/services/mergers-acquisitions.html): "as the leading provider of end-to-end merger, acquisition and restructuring services"; "We also specialize in divestitures… After doing many of the top 10 divestitures in the world, we have developed the ability to 'see around the corner'". | — |
| 20 | Serviços de PE: DD com TI e cyber; Day 1 com carve-out e TSAs; value creation com IA; 28K+ | confirmed | Espelho mcjuh (página PE): "Due diligence, including finance, IT, HR, operational, cyber, accounting, and tax"; "Operational Day 1 planning, including carve-out assistance and transition service agreements (TSAs)"; "Digital transformation and sustainable value creation through AI, automation, and other technologies"; "28K+ M&A practitioners serving clients globally". | — |
| 21 | M&A Central: gestão de programa proprietária em nuvem com captura de valor em tempo real | confirmed | Busca (b): "Deloitte's proprietary, market-leading, cloud-based program management tool accelerates merger, acquisition, and divestiture transactions… while tracking value realized in real time"; "built-in value capture capabilities… savings initiatives and one-time costs". | Os trechos vieram das páginas CBC/GR do produto, não da /global/. |
| 22 | DataMAAP: IA/ML para segregar e transferir dados na separação, com TSA self-service | confirmed | Busca (b): "applies machine learning, AI and a codified methodology to accelerate business data scoping, segregation, transfer and integration, including a transition Services agreement (TSA) self-service function to help reduce stranded costs and risk"; "segregate commingled data stores". | — |

## Resumo
- confirmed: 13 (itens 1, 2, 4, 5, 8, 9, 15, 17, 18, 19, 20, 21, 22).
- partially_confirmed: 9 (itens 3, 6, 7, 10, 11, 12, 13, 14, 16).
- refuted: 0. unverifiable: 0.

## Correções relevantes para o deck
1. A métrica do M&A Platform é ">1.000 client engagements". A Deloitte não fala em "deals".
2. "Digital Deal Room" aparece na Austrália como "M&A Virtual Deal Room": prontidão com sessões virtuais, não data room tecnológico.
3. "Synapse" é só uma menção no site BR, sem página nem descrição. Não descrever funcionalidade no deck.
4. As frases sobre CAST e código "non-invasive" devem ser atribuídas ao case da CAST, não à página alemã de Software DD, que não foi vista.
5. Para SelfAssess™, usar a URL do artigo, que o espelho confirma.
6. Cargo de Adam Reilly: national managing partner, Merger & Acquisition Services. Citar só o fragmento confirmado.

## Fontes das buscas próprias
- https://www.deloitte.com/us/en/about/press-room/deloitte-announces-ma-platform.html
- https://www.prnewswire.com/news-releases/deloitte-expands-ai-and-agentic-ai-capabilities-with-ma-platform-enabling-smarter-more-streamlined-deal-execution-302886177.html
- https://www.accountingtoday.com/list/deloitte-touts-ai-enabled-m-a-platform
- https://cfotech.news/story/deloitte-launches-ai-m-a-platform-used-in-1-000-deals
- https://www.deloitte.com/global/en/products/datamaap.html
- https://www2.deloitte.com/us/en/pages/financial-advisory/solutions/deloitte-mergers-and-acquisitions-ai-platform.html
- https://www.deloitte.com/cbc/en/products/m-and-a-central.html ; https://www.deloitte.com/gr/en/products/m-and-a-central.html
- https://www.deloitte.com/au/en/services/consulting-financial/services/digital-deal-room.html
- https://www.deloitte.com/br/pt/services/consulting/services/mergers-and-aquisitions.html
- Espelho: https://github.com/mcjuh/BT4103-Scrape-and-Tag/tree/f72d55c061836dd112cff4ce167aa1960a37bd04/docs/ignore
