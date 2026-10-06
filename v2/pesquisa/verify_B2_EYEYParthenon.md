# Verificação cética: B2, bench EY (EY-Parthenon)

**Data:** 06/10/2026

**Fontes usadas, na ordem pedida:**

1. **Espelho GitHub `mcjuh/BT4103-Scrape-and-Tag`** (`docs/ignore/`). Baixei de novo via raw.githubusercontent.com. As cópias ficam em `v2/research/verifyB2/`.
   - Páginas: DD Services, Edge Platforms (connected-capital-technologies), buy-integrate, cybersecurity e EY-Parthenon.
   - As cópias de DD e Edge são idênticas byte a byte às de `dl/` e `dl_ey/`.
2. **Outro espelho público:** `afterpartyai/llms_txt_store` (`com/e/y/llms.txt`, cópia do llms.txt da EY).
3. **Cópias locais da rodada anterior:** `dl/` (M&A Integration) e `dl_ey/` (sell-separate, data readiness, value creation, GenAI for PE).
4. **WebSearch (3 de 3):**
   - OneEdge + "90 countries";
   - Capital Edge;
   - OneEdge "agents that work alongside you".

**Legenda:**
- **confirmed:** vi o texto literal.
- **partially_confirmed:** a fonte confirma só parte.
- **unverifiable:** não há como checar.

## Itens de produto

| # | Item | Veredito | Evidência / correção |
|---|------|----------|----------------------|
| 1 | AI due diligence | confirmed | Página DD (espelho), cabeçalho literal "###  AI due diligence" |
| 2 | IT due diligence | confirmed | Página DD, "###  IT due diligence" |
| 3 | Product and technology due diligence | confirmed | Página DD, "###  Product and technology due diligence" |
| 4 | Cybersecurity Due Diligence in M&A and Divestitures | confirmed | Rótulo literal de link nas páginas buy-integrate e cybersecurity do espelho. **Correção:** o link visto é a versão en_gl (`/en_gl/services/strategy-transactions/cybersecurity-mergers-acquisitions-divestments`); a en_us não foi aberta. O conteúdo da página própria não foi lido; o conteúdo cyber vem da aba "Cybersecurity due diligence" da página DD |
| 5 | Diligence Edge: AI Diligence Platform | confirmed | Cabeçalho literal na página Edge Platforms. O link para `/en_gl/services/strategy/dilligence-edge` (com "ll", grafia da própria EY) é literal |
| 6 | Capital Edge: M&A transaction platform | confirmed | Cabeçalho literal na página Edge Platforms. A WebSearch devolve a URL en_us com o título "Capital Edge: M&A Transaction Platform" |
| 7 | Competitive Edge: AI-led M&A and strategic intelligence platform | confirmed | Cabeçalho literal na página Edge Platforms, com link para `/en_gl/services/strategy/competitive-edge` |
| 8 | OneEdge | confirmed | "OneEdge is coming soon" e "Explore OneEdge" com link para `/en_gl/services/strategy/one-edge-platform`. A WebSearch devolve a página com o título "AI for Strategy, Deals and Transformation: OneEdge" (en_gl, en_us, en_id, en_cz, en_jo) |
| 9 | M&A Integration Consulting | confirmed | H1 literal "M&A Integration Consulting", também listado em buy-integrate |
| 10 | Divestment Strategy Consulting (Sell and Separate) | confirmed | H1 literal "Divestment Strategy Consulting". "Sell and Separate" aparece literal nos cargos ("EY-Parthenon Global Sell and Separate Leader"). **Correção:** a tag title da página é "Divestment Strategy and Carve-out Consulting Services" |
| 11 | Transaction Strategy and Execution | partially_confirmed | Nome literal no cargo "EY-Parthenon Western Europe and Maghreb Transaction Strategy and Execution Leader" e no llms.txt, como página `/en_ca/services/strategy/transaction-strategy-execution`. **Correção:** a URL en_uk não foi vista e o conteúdo da página não foi lido |
| 12 | Exit Readiness / data exit readiness (deep-dive data diagnostic) | partially_confirmed | As três expressões são literais no artigo: link "Exit Readiness" (para `/en_gl/industries/private-equity/exit-readiness-ipo`), "data exit readiness" e o subtítulo "The first step: a deep-dive data diagnostic". **Correção:** a URL é um artigo (insight), não a página de serviço. "Deep-dive data diagnostic" é um passo recomendado, não um produto com marca. A página de serviço é `exit-readiness-ipo` |
| 13 | Private equity portfolio company value creation services | confirmed | H1 literal, title "Private Equity Portfolio Company Value Creation Services" |
| 14 | Generative AI services for private equity | confirmed | H1 literal. Marca "EY", não EY-Parthenon especificamente |

## Claims

| # | Claim | Veredito | Evidência / correção |
|---|-------|----------|----------------------|
| 15 | A página global de DD lista 10 tipos, incluindo AI, IT, P&T e cyber | confirmed | São 10 abas: AI, Commercial, Cybersecurity, Financial, Human resources, IT, Operational, P&T, Sustainability e Transaction tax advisory. A 2ª enumeração do texto também tem 10. **Nuance:** a frase de abertura enumera 11 ("financial, tax, …, transaction tax"), e o resumo em buy-integrate cita 9 (omite P&T). Use "10 frentes" |
| 16 | A AI DD é entregue pelo Software Strategy Group, com 4 lentes e um AI CoE | confirmed | "EY-Parthenon's Software Strategy Group provides AI due diligence services…". As lentes são AI in the market, AI in product, AI in R&D e AI in operations. Também literal: "EY-Parthenon has established a dedicated AI Center of Excellence (CoE)" |
| 17 | A IT DD é orientada por hipóteses do deal e tem 3 dimensões | confirmed | "hypothesis-driven technical diligence focused on the factors most critical to the deal thesis" e "typically focuses on three core dimensions": Operational resilience and risk; Strategic alignment and future readiness; Value creation and cost efficiency |
| 18 | A P&T DD se diz líder em large-cap PE, é liderada por ex-CTOs e tem benchmark de P&D proprietário | confirmed | Trechos literais: "becoming the leading provider for large-cap private equity over the last 10 years", "led by a team of former tech executives, including a roster of ex-CTOs" e "R&D benchmarking program that aggregates proprietary data from a quarterly survey of 2,000+ CTOs and Software CFOs". **Nota:** é autodeclaração da EY |
| 19 | A Cyber DD inclui o esforço para integrar ou sair de TSAs | confirmed | "Level of effort required to integrate with the parent company, or exit TSAs, if applicable." |
| 20 | OneEdge aparece como "coming soon" e unifica as 3 Edge com workflows agênticos | confirmed | Trechos literais (Edge Platforms): "OneEdge is coming soon", "embedded AI capabilities and agentic workflows" e "OneEdge unifies the three Edge platforms across strategy, transactions and transformation". **Cautela:** a página própria do OneEdge, já indexada em vários países, descreve a plataforma no presente. O status "coming soon" pode estar desatualizado; evite usá-lo no slide |
| 21 | No OneEdge, agentes assumem a análise repetitiva; a plataforma diz estar presente em mais de 90 países | partially_confirmed | Vi apenas o resumo da WebSearch, não a página bruta. Os textos vistos são "agents that work alongside you, shifting repeatable analysis to agentic AI" e "trusted by organizations in over 90 countries". **Correção:** a página não diz "presente em 90+ países", e sim "usada (trusted) por organizações em mais de 90 países". Também não diz que agentes "assumem", e sim que "trabalham ao lado" do time, que segue no controle |
| 22 | O Diligence Edge é uma suíte de ponta a ponta com IA para red flags e insights de deal | confirmed | "Diligence Edge is an end-to-end integrated suite of tools used across the transaction lifecycle, utilizing automation and AI to accelerate data review and analysis, surface key risks, red flag items and highlight tailored deal insights." |

## Fontes

- https://raw.githubusercontent.com/mcjuh/BT4103-Scrape-and-Tag/HEAD/docs/ignore/ey.com__en_gl_services_strategy-transactions_mergers-acquisitions-due-diligence.md
- https://raw.githubusercontent.com/mcjuh/BT4103-Scrape-and-Tag/HEAD/docs/ignore/ey.com__en_gl_services_strategy-transactions_connected-capital-technologies.md
- https://raw.githubusercontent.com/mcjuh/BT4103-Scrape-and-Tag/HEAD/docs/ignore/ey.com__en_gl_services_strategy-transactions_buy-integrate.md
- https://raw.githubusercontent.com/mcjuh/BT4103-Scrape-and-Tag/HEAD/docs/ignore/ey.com__en_gl_services_cybersecurity.md
- https://raw.githubusercontent.com/mcjuh/BT4103-Scrape-and-Tag/HEAD/docs/ignore/ey.com__en_gl_services_strategy_parthenon.md
- https://raw.githubusercontent.com/afterpartyai/llms_txt_store/HEAD/com/e/y/llms.txt
- [AI for Strategy, Deals and Transformation: OneEdge](https://www.ey.com/en_gl/services/strategy/one-edge-platform)
- [OneEdge (en_us)](https://www.ey.com/en_us/services/strategy/one-edge-platform)
- [Capital Edge: M&A Transaction Platform](https://www.ey.com/en_us/services/strategy/ey-capital-edge-mergers-acquisitions-transaction-platform)
- Cópias locais da rodada anterior: `v2/research/dl/`, `v2/research/dl_ey/`
