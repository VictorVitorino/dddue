# B3 — Dossiê de PRODUTOS de M&A da Deloitte com foco em tecnologia (global e Brasil)

**Data:** 06/10/2026 · **Idioma:** pt-BR · **Autor:** agente B3 (benchmark de produto para o novo deck A&M IT/Tech M&A)
**Orçamento usado:** 20/20 WebSearch + GitHub (espelho `mcjuh/BT4103-Scrape-and-Tag`, snapshot 2026, lido na íntegra via raw.githubusercontent.com).
**Acesso:** deloitte.com e cfotech.news responderam 403 no proxy (1 tentativa cada; não insisti). Firecrawl não usado.
**Escopo respeitado:** nada sobre preço, forma de cobrança, prazo de implementação ou timeline. Números aparecem só como **prova de bastidor**; o deck não deve exibi-los.

**Legenda de evidência**
- `EV-integral` = trecho literal lido na página inteira (espelho GitHub da página oficial, snapshot 2026). Arquivos em `v2/research/dl/` e `v2/research/dl_deloitte/`.
- `EV-snippet` = trecho devolvido pelo buscador a partir da página nomeada (não aberta). Muitos vêm resumidos ou traduzidos pelo buscador: **verificar o literal antes de citar entre aspas no deck**.
- `EV-R2` = achado já registrado em `research/R2_big_four.md` (snippet), reaproveitado sem nova busca.
- `HIP` = inferência minha.
- **não encontrado** = procurado e não achado.

Complementa (sem repetir) `research/R2_big_four.md` (achados 1–12 sobre Deloitte), `v2/research/L0_lideres.md` (Deloitte top 4–5 por número de transações), `v2/research/B1_PwC.md` e `v2/research/B2_EYEYParthenon.md`.

---

## 1. Resumo

1. **A Deloitte vende M&A como "escala + ferramentas proprietárias com marca + plataforma agêntica".** Em 22/09/2026 lançou o **"M&A Platform"**, uma solução "purpose-built" que "embeds AI across the entire deal lifecycle", com **"agentic harness"** para governar agentes. A plataforma é entregue via **Ascend** (plataforma de entrega de serviços da Deloitte) e já roda em mais de 1.000 engajamentos. (EV-snippet)
2. **Por trás da plataforma há uma "caixa de ferramentas" nomeada, anterior à onda agêntica.** Os itens são:
   - **iDeal**: M&A analytics, "insights behind the numbers".
   - **M&A Central**: gestão de programa de integração e separação e captura de valor, em nuvem.
   - **DataMAAP**: separação e transferência de dados com IA, com função self-service de TSA.
   - **Digital Deal Room**: preparação para transação.
   - **Divestiture Readiness SelfAssess™**: autoavaliação gratuita do vendedor.
   - **ValueD™**: valuation com IA.
   - **Portfolio Valuation Operate Services**.
   - **Synapse**: citada só no Brasil.

   A Alemanha publica isso como página "M&A Tools". (EV-snippet + EV-integral)
3. **O portfólio de tecnologia em M&A tem nomes por país, não uma marca global única.** Exemplos:
   - Reino Unido e Holanda: "M&A Technology" (Technology Due Diligence, Cybersecurity Diligence, AI Due Diligence, Digital Footprint Analysis).
   - Alemanha: "Software Due Diligence" (com CAST).
   - Bélgica e Brasil: "IT M&A".
   - EUA: "AI in Private Equity" (AI due diligence com roteiro de value creation), mais a página "M&A Technology Platform & Tools".

   (EV-snippet / EV-R2 / EV-integral)
4. **A promessa central é "do início ao fim, com IA e escala".** As frases-chave são:
   - "end-to-end merger, acquisition and restructuring services"
   - "powered by deep analytics and AI"
   - "GenAI-enabled end-to-end M&A platform"
   - "faster decisions, deeper insights, and greater value at every stage"

   A prova de escala é "28K+ M&A practitioners" e "7,000+ AI professionals". (EV-integral)
5. **Separação e desinvestimento são o "DNA" declarado.** A Deloitte diz: "After doing many of the top 10 divestitures in the world, we have developed the ability to 'see around the corner'". Também afirma que desinvestimentos são "harder than integrations due to the complexity of pulling systems and go-to-market actions apart". A Global Divestiture Survey 2026 prega o vendedor "less transactional and more transformational". Há um case público (Francisco Partners) de separação "blue-sky" **sem TSA**. (EV-integral + EV-snippet)
6. **A IA entrou como objeto da diligência, não só como ferramenta.** Duas ofertas tratam disso:
   - **AI Due Diligence** (NL) e **AI in Private Equity** (EUA) avaliam se IA, dados e talentos do alvo "are strong enough to defend its position before capital is committed". Convertem isso em "an actionable value creation roadmap" para o período de investimento.
   - O artigo "Racing to capability" defende que, em deals de IA, "the acquisition is people, code, and compute contracts".

   (EV-snippet)
7. **Alianças de IA são da firma, não do produto de M&A.** A Deloitte levou o Claude (Anthropic) a 470 mil profissionais e criou um "Claude Center of Excellence" (out/2025). Também criou uma prática agêntica sobre Gemini Enterprise (Google Cloud, abr/2026) e tem os agentes **Zora AI** e os produtos **Converge**. **Não encontrei** declaração de qual LLM ou parceiro alimenta o M&A Platform, nem parceria Harvey, ToltIQ ou Palantir em M&A (o oposto da PwC). Em Tech DD, o parceiro nomeado é a **CAST** (análise de código não invasiva). (EV-snippet + **não encontrado**)
8. **O Brasil é o ponto mais forte da Deloitte entre as três líderes, mas a oferta é genérica.** O site em português tem páginas próprias:
   - "IT M&A" (com "Due Diligence de TI")
   - "Integração pós-fusão" ("Day One")
   - "Fusões & Aquisições"
   - "Strategy & Transactions"
   - "Transaction services"
   - "Tecnologia em M&A" (série "Tech @ the Heart of M&A")
   - a pesquisa "O futuro estratégico das fusões e aquisições no Brasil"

   **Não encontrei** em português: AI DD, Software DD, M&A Platform, DataMAAP ou M&A Central. (EV-snippet + **não encontrado**)
9. **Leitura para a A&M (HIP).** A Deloitte é a concorrente direta da A&M no Brasil em "IT M&A", e a mais "produtizada" no mundo. A brecha está em três pontos:
   - **dono da execução**: operador sênior que assume o Dia 1, a TSA e o Value Creation;
   - **profundidade de produto/código ligada à tese do fundo**;
   - **nomes claros em português** para AI/Tech DD, Separação de dados e TSA, e Tech Value Creation.

   Nesses pontos o site brasileiro da Deloitte é raso.

---

## 2. Mapa de produtos (tabela)

| # | Produto (nome exato) | País/escopo | Problema do cliente | O que entrega / estrutura | Tecnologia / IA | Resultado prometido (qualitativo; número = bastidor) | Fonte (data) | Evid. |
|---|---|---|---|---|---|---|---|---|
| D1 | **M&A Platform** | Global/EUA | Ferramentas de IA isoladas por tarefa; decisões de deal sem visão cruzada entre capacidades | "purpose-built solution that embeds AI across the entire deal lifecycle, enabling deeper due diligence, stronger transaction structuring, and end-to-end integration". Agentes executam "structured, interconnected workflows ... from strategy and diligence through integration". Funções listadas pela imprensa: "automated document parsing, red flag detection, insight extraction, smart risk scoring, dynamic forecasting, synergy modeling, scenario planning, value driver analysis, automated risk analysis, smart document review" | "agentic harness that helps scale, govern, and manage AI agents"; "available now through Ascend"; dados do cliente "ringfenced" no Ascend; LLM/parceiro **não divulgado** | "smarter, cross-capability informed deal decisions"; "move with greater confidence, make smarter decisions, and achieve stronger outcomes" (Adam Reilly). Bastidor: ">1,000 client engagements" | deloitte.com/us/en/about/press-room/deloitte-announces-ma-platform.html; prnewswire 302886177; accountingtoday; cfotech (22/09/2026) | EV-snippet |
| D2 | **M&A technology solutions** (página "M&A Technology Platform & Tools") | EUA | Velocidade e profundidade de decisão em todas as fases | "GenAI-powered platforms and advanced digital tools"; "advanced analytics, AI-powered insights, and real-time collaboration"; "multidisciplinary teams ... working alongside you" | "GenAI-enabled end-to-end M&A platform" | "faster decisions, deeper insights, and greater value at every stage"; "reducing risk, and unlocking value faster, from start to finish". Bastidor: "7,000+ AI professionals globally"; "$1.4B in global AI revenue" | deloitte.com/us/en/what-we-do/capabilities/mergers-acquisitions/services/total-mergers-and-acquisitions-solution.html (snapshot 2026) | EV-integral |
| D3 | **iDeal** ("defining M&A analytics") | Global (LU, AU, US) | Achar "what's really going on" nos dados dentro da janela curta do deal | "combination of tools, processes, and techniques integrated to provide big-picture insights with a microscopic level of detail"; capacidades de "strategy, implementation, analysis and decision support, integration, and synergy capture" | Analytics proprietário ("for exclusive client use") | "insights behind the numbers"; "uncover the story behind the numbers". Bastidor: clientes chegaram a "deal insights in half the time" em buy-side | deloitte.com/global/en/services/consulting-financial/services/ideal-defining-merger-and-acquisitions.html; deloitte.com/us/.../mergers-and-acquisitions-data-analytics-ideal.html; prnewswire 300325862 (data do release não verificada) | EV-snippet + EV-R2 |
| D4 | **M&A Central** | Global (produto; DE, GR, CBC) | Pilotar programas complexos e multinacionais de integração e separação e provar o valor capturado | "proprietary, market-leading, cloud-based program management tool that accelerates merger, acquisition, and divestiture transactions ... while tracking value realized in real time"; "built-in value capture capabilities" (iniciativas de economia e custos one-time); dashboard "across all project milestones, risks, actions, issues, and decisions" | SaaS em nuvem da Deloitte | Controle e visibilidade em tempo real do programa. Bastidor: "US$200 billion in historical deal value", "informed by 15,000 executed deals", "10+ countries" | deloitte.com/global/en/products/m-and-a-central.html; brochure 2024 (assets-shared/docs/products/2024/m-and-a-central.pdf) | EV-snippet |
| D5 | **DataMAAP** | Global (produto; AU) | Dados misturados ("commingled") entre vendedor e ativo vendido; risco de transferir dado proprietário ou sigiloso | "intelligent platform designed to assist you as you scope, plan, manage risk, execute, and track organizational asset transfers during a transaction". Visões por papel: SMO/IMO ("single view of the data transfer process"), TI ("automatically populate inventories, separate comingled data assets and transfer data via built-in API integrations"), Jurídico ("filter intellectual property or commercially sensitive information prior to transfer") | "machine learning, artificial intelligence (AI), and a codified methodology"; "transition service agreement (TSA) self-service function" | Separação de dados mais rápida e segura; menor risco de vazar dado proprietário | deloitte.com/global/en/products/datamaap.html; deloitte.com/au/en/services/risk-advisory/services/deloitte-data-maap-mergers-acquisitions-ai-platform.html; brochure 2024 | EV-snippet |
| D6 | **Digital Deal Room** | AU; citado no BR | Empresa despreparada para a próxima oportunidade de M&A | "online platform coupled with customized virtual sessions with M&A specialists" | Plataforma online | Prontidão para a transação; no BR, "aceleram blueprinting e due diligence" (junto com Synapse) | deloitte.com/au/en/services/financial-advisory/services/digital-deal-room.html; deloitte.com/br/pt/.../tecnologia-fusoes-aquisicoes.html | EV-snippet + EV-R2 |
| D7 | **Synapse** | BR (menção) | — | "ferramentas proprietárias como Digital Deal Room e Synapse, que aceleram blueprinting e due diligence" | **não encontrado** (sem página própria) | — | deloitte.com/br/pt/services/financial-advisory/perspectives/tecnologia-fusoes-aquisicoes.html | EV-R2 |
| D8 | **Divestiture Readiness SelfAssess™** | EUA | Vendedor entra no processo sem saber onde está exposto | Ferramenta gratuita, cinco áreas: "Accounting and finance, Tax, Carve-out transaction considerations, Working capital optimization, and Value creation"; comentário de "leading practice" e "common pitfalls" | Autoavaliação online (selfassess.deloitte.com/divestiture/us) | Isca de pré-venda que gera pipeline de sell-side | selfassess.deloitte.com/divestiture/us; deloitte.com/us/en/services/consulting/articles/divestiture-planning-and-assessment-tool.html | EV-snippet + EV-integral (link "Accelerate your divestiture with our readiness tool") |
| D9 | **ValueD™** | EUA | Valuation lento e manual | "powered by artificial intelligence (AI) can help you generate insightful valuations and make informed decisions" | IA | Valuation "insightful" | deloitte.com/us/en/services/consulting/articles/transforming-valuations-with-valued.html (link na página de M&A, snapshot 2026) | EV-integral (texto do link) |
| D10 | **Portfolio Valuation Operate Services** | EUA | Valuation de portfólio complexo e custoso | "embedding innovative technologies and valuation professionals" em modelo "Operate" (serviço contínuo) | Tecnologia + profissionais | "continuous clarity and confidence to your valuation operations ... drive efficiency, reduce risk and free resources" | deloitte.com/us/en/services/consulting/services/mergers-acquisitions.html (snapshot 2026) | EV-integral |
| D11 | **M&A Technology** → **Technology Due Diligence**, **Cybersecurity Diligence**, **AI Due Diligence**, **Digital Footprint Analysis** | Reino Unido (e NL "M&A Technology") | TI e tecnologia do alvo sustentam ou não a tese de investimento? | Tech DD cobre "technology landscape, architecture, technology delivery operating model, technology spend, key projects, future investments, strategy, applications, infrastructure, security and management information"; esclarece "extensibility, maintainability, reliability, scalability, upgradability and security of the target's technology to understand the feasibility of the technology to support the investment thesis" | Rede global de especialistas | Tecnologia avaliada contra a tese. Bastidor: "global network of over 1,200 specialists" | deloitte.com/uk/en/services/consulting-financial/services/m-and-a-technology.html; deloitte.com/nl/en/services/consulting/services/m-a-technology.html | EV-R2 + EV-snippet |
| D12 | **Software Due Diligence** | Alemanha | Qualidade, escalabilidade e dívida técnica do software do alvo; confidencialidade do código | Dois focos: "deep dive into the technology and architecture USP" (stack, desenho arquitetural, "past or future scalability issues") e análise de "scalability and technical debt", com eficiência e composição dos times de P&D comparadas a "industry best practices" | **CAST** ("software intelligence"): "non-invasive", roda "locally without the source code ever leaving the computer from the target"; mede "quality, robustness, modularity, and maintainability" | Evidência de código, não só entrevistas. Bastidor: case CAST, Tech DD de e-commerce com "over 300K lines of code" em "less than 10 days" | deloitte.com/de/de/services/consulting-financial/services/software-due-diligence.html; learn.castsoftware.com (case) | EV-snippet + EV-R2 |
| D13 | **AI Due Diligence** | Holanda | IA como risco ou alavanca de valor do alvo | "evaluates AI-driven risks and readiness across technology, data and talent to protect deal value and identify actionable AI use cases that drive revenue uplift and cost efficiency" | — | Proteger valor e achar casos de uso. Bastidor: exemplos "20% reduction in software development costs and 10–15% savings in supply chain and customer management" | deloitte.com/nl/en/services/consulting/services/ai-due-diligence.html | EV-R2 + EV-snippet |
| D14 | **AI in Private Equity** (AI due diligence + value creation + execução) | EUA | Sponsor precisa saber se a IA acelera ou corrói o ativo, e capturar valor no período de investimento | AI DD "assesses both how AI is reshaping a company's market and whether the company's own AI capabilities, data, and talent are strong enough to defend its position before capital is committed"; vira "actionable value creation roadmap, including priority AI use cases, required platform and data investments, operating model changes"; casos de uso "across sales, finance, and operations" | IA aplicada a diligência, portfólio e "scalable execution across deals and portfolio companies" | "turn disruption into an advantage across diligence, the hold period, and exit"; "measurable EBITDA gains within the hold period rather than one-off pilots that never scale" | deloitte.com/us/en/services/consulting/services/ai-due-diligence-private-equity-services.html | EV-snippet |
| D15 | **IT M&A** | Bélgica; Brasil | TI como maior custo e maior risco do deal; continuidade no Dia 1 | BE: DD/pré-deal → "high-level IT integration/separation blueprint that stipulates required action items to keep business running on Day 1" → "IT synergies (creating cost baselines, commitments and tracking processes) and drafting of IT essentials in the Transition Service Agreement (TSA)". BR: preparação de "Day 1" (planejamento e estabilização), escritório de gestão de integração/separação, metas de sinergia, desenho organizacional, transição de lideranças e força de trabalho, suporte a TSAs, gestão de mudança | — | Continuidade e captura de sinergia. Bastidor (BR): TI pode chegar a "70% do custo total" da transação | deloitte.com/be/en/services/consulting-risk/services/it-m-and-a.html; deloitte.com/br/pt/services/consulting/services/ti-fusoes-aquisicoes.html | EV-R2 + EV-snippet |
| D16 | **Digital Footprint Analysis (DFA)** | Reino Unido | Risco cibernético do alvo é transferido junto com o ativo | Análise "outside-in" de "websites, domains, hosted infrastructure, social media activity, leaked credentials, and content relating to key employees" | Varredura de exposição externa | Visão do risco cyber antes de assinar, sem acesso interno | deloitte.com/uk/en/services/consulting/perspectives/digital-footprint-analysis-due-diligence-for-m-and-a-cyber-risks.html; deloitte.com/global/en/services/consulting-risk/blogs/due-diligence-for-mergers-and-acquisitions-through-a-cybersecurity-lens.html | EV-snippet |
| D17 | **M&A Services for private equity investors and portfolio companies**: "Diligence and Pre-deal Services" + "Value Creation and Exit Services" | EUA | Ciclo completo do PE | Pré-deal: "Due diligence, including finance, IT, HR, operational, cyber, accounting, and tax"; "Operational Day 1 planning, including carve-out assistance and transition service agreements (TSAs)". Value creation e exit: "Digital transformation and sustainable value creation through AI, automation, and other technologies"; "Sell-side support including IPO and SPAC readiness" | — | "uncover, create, and drive new value". Bastidor: "28K+ M&A practitioners", "150+ countries" | deloitte.com/us/en/what-we-do/capabilities/mergers-acquisitions/services/private-equity-services.html (snapshot 2026) | EV-integral |
| D18 | **Merger & Acquisition Services**: "M&A strategy", "Transaction readiness", "Transaction diligence and execution", "Integration strategy", "Divestiture strategy" | EUA | Do primeiro questionamento ao pós-integração | "create and execute a Day 1 plan, and address your future-state entity's long-term integration needs"; "become prepared sellers, aligning goals and planning to maximize deal value" | "unrivaled capabilities and technologies ... and alliances" | "The vision to picture it. The power to make it real." | deloitte.com/us/en/what-we-do/capabilities/mergers-acquisitions/services/mergers-acquisitions-restructuring-services.html (snapshot 2026) | EV-integral |
| D19 | **Integration & Divestiture**; **Transaction Strategy and Diligence**; **Valuation & Modeling**; **Corporate Finance** (menus da Consulting) | EUA | — | Tiles de serviço; "Deloitte Corporate Finance: A preeminent investment banking adviser to family- and founder-owned businesses" | — | — | deloitte.com/us/en/services/consulting/services/mergers-acquisitions.html (snapshot 2026) | EV-integral |
| D20 | **Clean room com GenAI** ("5 ways GenAI can elevate the value of your M&A clean room") | EUA | Planejamento pré-fechamento limitado por regras antitruste e dados brutos | Clean room analytics com GenAI: "improving data quality, automating task workflows, and surfacing new insights from complex data at the scale required in large-deal M&A" | GenAI | "accelerating financial value capture"; mais tempo para "pre-close planning" | deloitte.com/us/en/what-we-do/capabilities/mergers-acquisitions-restructuring/articles/reimagine-your-m-and-a-clean-room-with-gen-ai.html | EV-snippet |
| D21 | **Banking M&A integration: Hidden deal accelerators** (playbook) | EUA (bancos) | Integração bancária longa; risco de ruptura em canais | 8 técnicas: "Bring tech in early", "Leverage secure clean rooms", "Don't start from scratch", "Keep Legal Day 1 simple", "Engage key vendors early", "Minimize customer disruptions", "Protect the employee experience", "Strengthen readiness with realistic rehearsals" | Clean rooms seguros | "lower integration costs, faster synergy capture, stronger customer experiences, and reduced risk". Bastidor: "IT drives more than half of the synergies in many banking M&A deals" | deloitte.com/us/en/industries/financial-services/articles/banking-ma-integration-accelerators.html (snapshot 2026) | EV-integral |
| D22 | **Exit readiness** (Deloitte Private) | Austrália | Saída com perda de valor por narrativa fraca | "articulating credible market-facing investment narratives that showcase growth trajectory and associated value creation opportunities"; "maximising value potential and minimising value leakage" | — | Valor máximo na saída | deloitte.com/au/en/services/deloitte-private/services/exit-readiness.html | EV-snippet |
| D23 | **Integração pós-fusão** | Brasil | Integração/separação com custo, cronograma e ruptura de negócio | Planejamento final e requisitos para o "Day One"; gestão de mudança; contratos de serviços de transição; realização de sinergias; desinvestimento | "advanced analytics" para mapear sinergias e monitorar resultados (snippet traduzido) | Transição suave e objetivos estratégicos atingidos | deloitte.com/br/pt/services/consulting-financial/services/integracao-pos-fusao.html | EV-snippet (resumo do buscador) |
| D24 | **Converge by Deloitte** (não é M&A) | EUA | Tecnologia que falha por não entender o problema setorial | "Software and data products that converge with services to accelerate outcomes"; "forward deployed engineering" | "AI, generative and agentic, is embedded across our products" | Mostra a postura de "produtizar" serviços | deloitte.com/us/en/what-we-do/capabilities/converge/services/converge.html (snapshot 2026) | EV-integral |
| D25 | **Zora AI** (não é M&A) | Global | — | "portfolio of AI agents for finance, human capital, supply chain, procurement, sales and marketing, and customer service" | Agentes | — | cio.com (mar/2025) | EV-R2 |
| D26 | **M&A Sensing** | Antilhas Holandesas (deloitte.com/an) | **não verificado** | Página encontrada no buscador, sem conteúdo lido | — | — | deloitte.com/an/en/services/financial-advisory/perspectives/mergers-and-acquisitions-sensing.html | só título |

**Thought leadership usado como produto de venda (bastidor):** 2026 Generative AI in M&A Pulse Study; 2025 M&A Generative AI Study (n=1.000); 2026 M&A Trends Survey "A tale of two markets"; 2026 Global Divestiture Survey ("Five moves to reshape long-term value in divestiture strategy"); "Racing to capability: How AI companies are rewriting M&A"; livro "The Synergy Solution" (Mark Sirower e Jeff Weirens); "The art of TSA negotiation: A guide for financial buyers". (EV-integral nos títulos; EV-R2/snippet no conteúdo)

---

## 3. Tecnologia e IA (como a Deloitte "embala")

### 3.1 Arquitetura da oferta (HIP sobre EV)
```
           [ Thought leadership: GenAI in M&A Pulse · Divestiture Survey · Racing to capability ]
                                          │
   [ M&A Platform (agentic harness) — entregue via ASCEND, dados "ringfenced" ]   ← camada nova (09/2026)
        │             │              │                 │                  │
     iDeal       Software DD      M&A Central       DataMAAP        ValueD™ / Digital Deal Room / SelfAssess™
  (analytics)    (CAST scan)    (PMO + valor)   (dados + TSA)       (valuation / prontidão do vendedor)
        │
   [ Ofertas de serviço por país: M&A Technology (UK/NL) · Software DD (DE) · IT M&A (BE/BR) · AI in PE (US) ]
```
- **Plataforma e governança.** O "agentic harness" é o argumento de governança: "scale, govern, and manage AI agents". Responde à principal objeção do comprador, segurança de dados (67% no Pulse 2026, EV-R2). A entrega via **Ascend** ringfence os dados do cliente e do deal. (EV-snippet)
- **Fluxos conectados, não tarefas soltas.** A mensagem é: "structured, interconnected workflows across the entire deal lifecycle ... rather than just addressing isolated M&A tasks". Isso se contrapõe a ferramentas pontuais de terceiros. (EV-snippet)
- **Dez funções de IA citadas na imprensa:** parsing de documentos, red flags, extração de insights, risk scoring, forecasting dinâmico, modelagem de sinergia, cenários, value drivers, análise automática de risco, revisão de documentos. (EV-snippet, accountingtoday/welcome.ai). **Nomes de módulos ou agentes: não encontrado.**
- **Código.** Parceria declarada com **CAST**: scan "non-invasive", com o código que não sai do ambiente do alvo. É o mesmo modelo "scan dentro do target" visto em R4. (EV-snippet + EV-R2)
- **Dados de separação.** O **DataMAAP** usa ML/IA para classificar e segregar dados misturados e filtrar PI ou informação sensível antes da transferência. Tem "TSA self-service function". É a peça mais "tech" de carve-out da Deloitte. (EV-snippet)
- **Gestão de programa e valor.** O **M&A Central** é um PMO em nuvem com rastreio de sinergias e custos one-time em tempo real. É o equivalente ao Junction da PwC e ao Capital Edge da EY. (EV-snippet; comparação HIP)
- **Clean rooms com GenAI** para planejamento pré-fechamento, e "Leverage secure clean rooms" no playbook bancário. (EV-snippet + EV-integral)
- **Alianças de IA da firma, não específicas de M&A:**
  - **Anthropic/Claude**: "470,000" pessoas, "Claude Center of Excellence", certificação de "15,000 professionals" (out/2025).
  - **Google Cloud**: "Agentic Transformation Practice" sobre Gemini Enterprise (22/04/2026).
  - **UiPath**: testes agênticos via Ascend.
  - **Zora AI** (agentes) e **Converge** (produtos de software e dados com "forward deployed engineering").

  (EV-snippet / EV-integral). **Vínculo explícito entre essas alianças e o M&A Platform: não encontrado.** Harvey, ToltIQ e Palantir em M&A da Deloitte: **não encontrado** nas fontes lidas (não houve busca dedicada).
- **IA como objeto da DD:** AI Due Diligence (NL) e AI in Private Equity (US), além da tese "Racing to capability". Em deals de IA, o ativo é "people, code, and compute contracts", e as transações devem ser vistas como "integrated execution challenges, not sequential phase-gate processes". (EV-snippet)

### 3.2 Papel declarado da IA por fase (HIP de síntese sobre EV)
| Fase | Ferramenta/oferta Deloitte | Papel da IA |
|---|---|---|
| Estratégia e triagem | M&A Platform; iDeal | Forecast, cenários, value drivers |
| Diligência | M&A Platform; Software DD (CAST); AI DD; DFA; Clean room | Parsing do data room, red flags, risk scoring; scan de código; exposição cyber outside-in |
| Estruturação | M&A Platform; ValueD™ | Valuation com IA, modelagem de sinergia |
| Integração | M&A Central; M&A Platform; playbook bancário | PMO, captura de valor em tempo real |
| Separação/TSA | DataMAAP; Divestiture Readiness SelfAssess™; Digital Deal Room | Segregação de dados com ML, TSA self-service, prontidão do vendedor |
| Value creation/saída | AI in Private Equity; Exit readiness | Casos de uso de IA com EBITDA no período de investimento; narrativa de saída |

---

## 4. Mensagens de venda literais (para contraste no deck A&M)

**EV-integral (espelho 2026 de deloitte.com/us):**
1. "Guiding businesses through their most complex transactions, delivering and optimizing value as the leading provider of end-to-end merger, acquisition and restructuring services."
2. "We provide high-quality, objective commercial, financial, synergy identification, and equity advice, powered by deep analytics and AI."
3. "We also specialize in divestitures, which are often described as harder than integrations due to the complexity of pulling systems and go-to-market actions apart. After doing many of the top 10 divestitures in the world, we have developed the ability to 'see around the corner'."
4. "The vision to picture it. The power to make it real."
5. "Where flexibility meets focus, our comprehensive, highly customized M&A services become high-impact M&A solutions."
6. "Let's make this work."
7. "From early deal questions to post-integration goals, our M&A Services team helps you move forward, tackling your top issues, sweating the details, getting things done."
8. (PE) "Buttoned up on the outside. Fired up on the inside." / "This isn't the private equity market any of us grew up in."
9. (Tech) "Where human ingenuity meets groundbreaking technology."
10. (Tech) "Accelerate your M&A journey with GenAI-powered platforms and advanced digital tools that can deliver faster decisions, deeper insights, and greater value at every stage."
11. (Tech) "With our GenAI-enabled end-to-end M&A platform, you set the pace—making smarter moves, reducing risk, and unlocking value faster, from start to finish."
12. (AI M&A) "If your M&A playbook was built for an era of defined perimeters and preclose certainty, it needs an update. The AI M&A playbook is being written right now. The question is whether your team is writing it or reading someone else's."
13. (Divestiture) "Discover how leading sellers are rethinking their divestiture strategy to be less transactional and more transformational."
14. (Bancos) "value is created not only by the strategy of the deal, but by the foresight applied to the work behind the scenes."
15. (Converge) "When outcomes are anticipated in months, not years, it's only natural we'd codify our deep sector experience into products and platforms to unlock faster, stronger outcomes."

**EV-snippet (verificar literal):**
16. (M&A Platform) "purpose-built solution that embeds AI across the entire deal lifecycle, enabling deeper due diligence, stronger transaction structuring, and end-to-end integration."
17. (Adam Reilly, 22/09/2026) "With demonstrated capabilities already in market, we are helping clients activate AI to move with greater confidence, make smarter decisions, and achieve stronger outcomes."
18. (AI in PE) "turn disruption into an advantage across diligence, the hold period, and exit."
19. (AI in PE) "measurable EBITDA gains within the hold period rather than one-off pilots that never scale."
20. (iDeal) "uncover the story behind the numbers."
21. (Divestiture Survey 2026) "Outperformers treat divestitures as intentionally designed transformation events, embedding separation design, value-story development, and functional readiness well before they go to market."

**Padrão retórico (HIP):** escala ("largest professional services organization in the world"), completude ("end-to-end", "every stage") e tecnologia ("GenAI-enabled", "agentic"). Quase não aparece **quem assume o resultado** na operação. A promessa é de insight e velocidade, não de execução com dono.

---

## 5. Brasil

| Página (nome exato) | URL | O que diz | Evid. |
|---|---|---|---|
| **IT M&A** | https://www.deloitte.com/br/pt/services/consulting/services/ti-fusoes-aquisicoes.html | "A Due Diligence de TI exige um exame dos ativos, sistemas, processos, políticas e procedimentos de TI antes de uma transação". Objetivos: riscos materiais, mapear ambiente de TI, impactos pós-transação, investimentos e sinergias, "fatores de design para integração ou separação". Também: preparação de "day 1", escritório de integração/separação, metas de sinergia, desenho organizacional, transição de força de trabalho, suporte a TSAs e gestão de mudança. Claim: TI pode chegar a "70% of the total business cost" | EV-R2 + EV-snippet |
| **Integração pós-fusão** | https://www.deloitte.com/br/pt/services/consulting-financial/services/integracao-pos-fusao.html | Integração e desinvestimento "envolvem desafios, custos, cronogramas e rupturas"; preparar o "Day One"; contratos de serviços de transição; realização de sinergias; analytics para mapear sinergias | EV-snippet (resumo do buscador) |
| **Fusões & Aquisições** | https://www.deloitte.com/br/pt/services/consulting/services/fusoes-e-aquisicoes.html | Soluções da estratégia ao desinvestimento; DD "multidimensional" (financeira, comercial, tributária, **cibersegurança** e sustentabilidade) | EV-snippet |
| **Strategy & Transactions** | https://www.deloitte.com/br/pt/services/consulting/services/strategy-transactions.html | Estratégia, M&A, valuation, infraestrutura e sustentabilidade; "more than 6,000 M&A professionals in over 150 countries" (diverge dos "28K+" dos EUA; usar só como bastidor e checar) | EV-snippet |
| **Transaction services** | https://www.deloitte.com/br/pt/services/consulting-financial/services/transaction-services.html | Página existe (conteúdo não lido) | só título |
| **Tecnologia em M&A** (série "Tech @ the Heart of M&A") | https://www.deloitte.com/br/pt/services/consulting-financial/perspectives/tecnologia-fusoes-aquisicoes.html | Insights "da gestão de custos à separação de contratos, incluindo proteção de privacidade e componentes de entrega de serviços de infraestrutura"; "ferramentas proprietárias como Digital Deal Room e Synapse, que aceleram blueprinting e due diligence" | EV-snippet + EV-R2 |
| **O futuro estratégico das fusões e aquisições no Brasil** (pesquisa) | https://www.deloitte.com/br/pt/services/consulting/research/estrategias-crescimento-empresas-brasil.html ; press: https://www.deloitte.com/br/pt/about/press-room/estrategia-fusoes-brasil.html | "O uso de tecnologias como IA (Inteligência Artificial) e Analytics no apoio às etapas das operações de M&A, especialmente de modo preditivo, é uma tendência". Bastidor: 122 empresas; 61% usaram IA/Analytics | EV-snippet + EV-R2 |
| Páginas legadas (www2) | www2.deloitte.com/br/pt/pages/finance/solutions/ma-strategy-advisory.html ("Assessoria completa em uma transação de M&A"); www2.deloitte.com/br/pt/pages/strategy-operations/articles/tecnologia-fusao-aquisicao.html ("Tecnologia em processos de fusão e aquisição") | Ainda indexadas | só título |

**Não encontrado em português (Brasil):** M&A Platform (anúncio local), AI Due Diligence, Software DD, Cyber DD como página própria, DFA, M&A Central, DataMAAP, iDeal, ValueD. Também não achei case público de Tech M&A da Deloitte Brasil em 2025–2026. Sobre IA no Brasil, a fala pública que apareceu é genérica: Ronaldo Fragoso, sócio-líder de TMT, sobre agentes de IA em 2026 (portalerp.com). (EV-snippet)

**Leitura (HIP):** a Deloitte é a **única das três líderes com vitrine própria de "IT M&A" em português**, e por isso é a concorrente a ser superada no Brasil. A vitrine, porém, é de escopo, não de produto: não tem nomes de ferramenta (exceto Digital Deal Room e Synapse), nem a camada de IA e agentes, nem AI DD ou análise de código.

---

## 6. Pontos fortes e lacunas

### 6.1 Pontos fortes (EV + HIP)
1. **A caixa de ferramentas com marca mais ampla das três.** M&A Platform, iDeal, M&A Central, DataMAAP, Digital Deal Room, SelfAssess™, ValueD™ e Synapse cobrem estratégia → DD → integração → separação → valuation. (EV)
2. **Plataforma agêntica com governança explícita** ("agentic harness", dados "ringfenced" no Ascend) e prova de uso em escala (">1,000 engagements"). (EV-snippet)
3. **DNA de separação e carve-out.** "many of the top 10 divestitures", DataMAAP para dados, case sem TSA, playbook de Day 1 bancário e a pesquisa global de divestiture. (EV)
4. **Evidência de código em Tech DD (CAST, não invasivo)** e **AI DD conectada a value creation** (roteiro de casos de uso com EBITDA no período de investimento). (EV-snippet)
5. **Escala e capilaridade:** "28K+ M&A practitioners", "150+ countries", "7,000+ AI professionals". (EV-integral)
6. **Presença em português** com páginas de IT M&A e Integração pós-fusão. (EV)

### 6.2 Lacunas e vulnerabilidades (HIP, salvo indicação)
1. **Nomenclatura fragmentada por país.** UK "M&A Technology", DE "Software Due Diligence", BE/BR "IT M&A", US "AI in Private Equity". Não há uma suíte de Tech M&A com marca única como as "Edge" da EY. O M&A Platform tenta unificar, mas sem módulos nomeados publicamente. (EV: módulos **não encontrados**)
2. **Ferramentas antigas reembaladas.** O iDeal vem de um release antigo (data não verificada), e M&A Central e DataMAAP têm brochures de 2024. A "plataforma agêntica" pode ser a costura desses ativos. (HIP)
3. **Opacidade sobre o motor de IA.** Não diz que LLM ou parceiro usa no M&A Platform. Para um comitê de investimento, rastreabilidade e "citation-backed" (que a PwC/Harvey explora) não aparecem no discurso da Deloitte. (EV: **não encontrado**)
4. **Promessa de insight e velocidade, não de execução com dono.** Não há oferta pública de CIO interino, de dono do Dia 1 ou da saída da TSA, nem de responsabilidade por EBITDA. (HIP)
5. **Brasil raso em produto.** Nada em português de AI DD, Software DD, DataMAAP ou M&A Platform. A página "IT M&A" é de escopo genérico. (EV: **não encontrado**)
6. **Independência de auditoria.** Como Big Four auditora, a Deloitte tem restrições em clientes de auditoria. A A&M não tem esse conflito. (HIP estrutural)
7. **Value creation tech para PE pouco "produtizado" fora dos EUA.** "AI in Private Equity" é página dos EUA. Não achei produto de Tech Value Creation com nome próprio. (EV: **não encontrado**)

---

## 7. O que diferencia a Deloitte das outras duas líderes (PwC e EY) — HIP sobre EV

| Eixo | Deloitte | PwC (B1) | EY‑Parthenon (B2) |
|---|---|---|---|
| Como embala a IA | **Plataforma proprietária agêntica** ("M&A Platform" + "agentic harness" via Ascend), costurando ferramentas com marca (iDeal, M&A Central, DataMAAP) | **Alianças best-of-breed** (Harvey, ToltIQ, Palantir) + hub Junction | **Plataformas "Edge"** proprietárias sobre Microsoft (Diligence/Capital/Competitive Edge) |
| Peça mais forte | Separação/carve-out (DataMAAP, "top 10 divestitures", case sem TSA) + PMO de valor (M&A Central) | Separação de TI com IA (app de separação, Step Plan) + velocidade de red flags | Catálogo de DD tech mais nítido (AI, IT, P&T, Cyber) + ex‑CTOs |
| Tech DD | M&A Technology (UK), Software DD com CAST (DE), AI DD (NL), DFA (UK) | AI and Technology Diligence (US) | AI / IT / Product & Technology / Cyber DD |
| Mensagem‑mãe | "end-to-end", "see around the corner", "GenAI-enabled end-to-end M&A platform" | "deal speed", red flags com citação | "investor mindset", "solutions that work in practice" |
| Brasil | **Mais forte**: "IT M&A", "Integração pós-fusão", "Tech @ the Heart of M&A" em português | Fraca em tech | Média (traduções) |

---

## 8. Implicações para a A&M (produto e venda, sem números nos slides) — HIP

1. **No Brasil, a Deloitte é o alvo de comparação em "IT M&A"; supere em especificidade, não em escala.** Cada produto A&M deve ter nome, problema, entrega e tecnologia em uma linha, coisa que a página "IT M&A" da Deloitte não faz. Mantenha os nomes oficiais da A&M: "IT Due Diligence", "Software Product and Technology Diligence", "Merger Integration & Carve-Out", "A&M Data Intelligence Gateway (A&M DIG)", "A&M Global Transaction Analytics", o grupo "Generative AI" de PE, PEPI e Value Management Office.
2. **Contra a "plataforma agêntica" da Deloitte, venda "IA governada com dono sênior".** Mensagem sugerida: "a IA lê o data room; o operador A&M assina o risco e assume o Dia 1". O "agentic harness" governa agentes; a A&M governa o resultado.
3. **Produtos-espelho que a A&M precisa ter (nomes de trabalho):**
   - **Deal Command Center**: equivalente ao M&A Central e ao Junction. Riscos, sinergias, marcos e TSA visíveis ao cliente, ancorado em A&M Global Transaction Analytics e DIG.
   - **Separation Data Factory**: equivalente ao DataMAAP. Inventário e segregação de dados misturados, filtro de PI e LGPD, dono da TSA até a saída.
   - **Code & Architecture Scan**: equivalente ao Software DD com CAST. Scan dentro do ambiente do alvo, ligado à tese do fundo.
   - **AI Exposure & Readiness Diligence**: equivalente a AI DD e AI in PE. Mede se a IA acelera ou corrói o valor e vira roteiro de value creation.
   - **Cyber Outside-In**: equivalente ao DFA. Exposição externa antes da assinatura.
   - **Exit Tech Readiness**: equivalente a Digital Deal Room, SelfAssess™ e Exit readiness. Evidência técnica testável para o comprador, evoluindo o "IT Due Diligence (Sell Side)" do deck v7.
4. **Separação "blue-sky", com pouca ou nenhuma TSA, como promessa qualitativa.** A Deloitte tem case público de separação sem TSA. A A&M deve vender "separar para transformar": stand-up do negócio novo já modernizado, com operadores que executam. A mensagem ecoa a pesquisa "less transactional and more transformational", mas com dono.
5. **Day 1 como produto, com ensaio geral.** O playbook bancário da Deloitte ("Keep Legal Day 1 simple", "realistic rehearsals", "Leverage secure clean rooms") mostra que clean room e ensaio de Dia 1 são vendáveis. O deck A&M v7 tem checklist de tomada de controle, mas não fala de **clean team/clean room** nem de **ensaio geral**. Vale incluir como componentes nomeados.
6. **Deals de IA ("people, code, and compute contracts").** Abra uma frente de produto para aquisições de capacidade de IA e acqui-hires: diligência de talentos-chave, código e contratos de compute/inferência, integração sem destruir a equipe. A Deloitte só tem artigo sobre isso, não produto nomeado.
7. **Remover do deck A&M o que a Deloitte já transformou em commodity.** Exemplos: "Importância da TI em M&A" com percentuais genéricos (a Deloitte BR já usa "TI até 70% do custo") e barras de número de transações TTR. Abra espaço para produtos, IA e prova operacional.
8. **Independência como argumento de venda (com cuidado).** A A&M não audita, então pode atuar em ativos e clientes onde Big Four auditoras têm restrição. Use como frase de posicionamento, não como ataque.

---

## 9. Lista de achados com fonte (para verificação)

| # | Achado | Tipo | URL | Data | Trecho literal |
|---|---|---|---|---|---|
| 1 | M&A Platform: IA em todo o ciclo, >1.000 engajamentos | evidence (snippet) | https://www.deloitte.com/us/en/about/press-room/deloitte-announces-ma-platform.html ; https://www.prnewswire.com/news-releases/deloitte-expands-ai-and-agentic-ai-capabilities-with-ma-platform-enabling-smarter-more-streamlined-deal-execution-302886177.html | 22/09/2026 | "purpose-built solution that embeds AI across the entire deal lifecycle, enabling deeper due diligence, stronger transaction structuring, and end-to-end integration"; "agentic harness that helps scale, govern, and manage AI agents"; "available now through Ascend" |
| 2 | M&A Platform: funções de IA | evidence (snippet, imprensa) | https://www.accountingtoday.com/list/deloitte-touts-ai-enabled-m-a-platform ; https://www.welcome.ai/content/deloitte-launches-ai-platform-to-transform-mergers-and-acquisitions | 09/2026 | "automated document parsing, red flag detection, insight extraction, smart risk scoring, dynamic forecasting, synergy modeling, scenario planning, value driver analysis, automated risk analysis, smart document review" |
| 3 | M&A Platform: fluxos conectados; dados ringfenced | evidence (snippet) | https://cfotech.news/story/deloitte-launches-ai-m-a-platform-used-in-1-000-deals | 09/2026 | "structured, interconnected workflows across the entire deal lifecycle ... rather than just addressing isolated M&A tasks"; "protect and ringfence client and deal data" |
| 4 | Citação de Adam Reilly | evidence (snippet) | https://www.prnewswire.com/news-releases/deloitte-expands-ai-and-agentic-ai-capabilities-with-ma-platform-enabling-smarter-more-streamlined-deal-execution-302886177.html | 22/09/2026 | "With demonstrated capabilities already in market, we are helping clients activate AI to move with greater confidence, make smarter decisions, and achieve stronger outcomes." |
| 5 | Página M&A technology solutions | evidence (integral) | https://www.deloitte.com/us/en/what-we-do/capabilities/mergers-acquisitions/services/total-mergers-and-acquisitions-solution.html | snapshot 2026 | "Accelerate your M&A journey with GenAI-powered platforms and advanced digital tools..."; "GenAI-enabled end-to-end M&A platform"; "7,000+ AI professionals globally"; "$1.4B in global AI revenue" |
| 6 | M&A US: end-to-end, divestitures "see around the corner" | evidence (integral) | https://www.deloitte.com/us/en/services/consulting/services/mergers-acquisitions.html | snapshot 2026 | "the leading provider of end-to-end merger, acquisition and restructuring services"; "After doing many of the top 10 divestitures in the world, we have developed the ability to 'see around the corner'" |
| 7 | M&A Services: 5 serviços + escala | evidence (integral) | https://www.deloitte.com/us/en/what-we-do/capabilities/mergers-acquisitions/services/mergers-acquisitions-restructuring-services.html | snapshot 2026 | "M&A strategy", "Transaction readiness", "Transaction diligence and execution", "Integration strategy", "Divestiture strategy"; "28K+ M&A practitioners"; "150+ Countries" |
| 8 | PE services: DD inclui IT e cyber; Day 1 com carve-out e TSA; value creation com IA | evidence (integral) | https://www.deloitte.com/us/en/what-we-do/capabilities/mergers-acquisitions/services/private-equity-services.html | snapshot 2026 | "Due diligence, including finance, IT, HR, operational, cyber, accounting, and tax"; "Operational Day 1 planning, including carve-out assistance and transition service agreements (TSAs)"; "Digital transformation and sustainable value creation through AI, automation, and other technologies" |
| 9 | iDeal | evidence (snippet) | https://www.deloitte.com/global/en/services/consulting-financial/services/ideal-defining-merger-and-acquisitions.html ; https://www.prnewswire.com/news-releases/ideal-deloittes-new-ma-analytics-solution-delivers-insights-behind-the-numbers-300325862.html | release (data não verificada); página ativa | "combination of tools, processes, and techniques integrated to provide big-picture insights with a microscopic level of detail"; "deal insights in half the time" |
| 10 | M&A Central | evidence (snippet) | https://www.deloitte.com/global/en/products/m-and-a-central.html ; https://www.deloitte.com/content/dam/assets-shared/docs/products/2024/m-and-a-central.pdf | 2024 (brochure) | "proprietary, market-leading, cloud-based program management tool"; "tracking value realized in real time"; "US$200 billion in historical deal value"; "15,000 executed deals"; "10+ countries" |
| 11 | DataMAAP | evidence (snippet) | https://www.deloitte.com/global/en/products/datamaap.html ; https://www.deloitte.com/au/en/services/risk-advisory/services/deloitte-data-maap-mergers-acquisitions-ai-platform.html | 2024 (brochure) | "intelligent platform designed to assist you as you scope, plan, manage risk, execute, and track organizational asset transfers during a transaction"; "transition service agreement (TSA) self-service function"; "separate comingled data assets" |
| 12 | M&A Tools (DE) agrega as ferramentas | evidence (snippet) | https://www.deloitte.com/de/de/issues/growth-competition/m-and-a-tools.html | s.d. | lista M&A Central, iDeal, DataMAAP, Digital Deal Room; "automated contract analysis and automated processing of relevant financial data in due diligence" |
| 13 | Digital Deal Room | evidence (snippet) | https://www.deloitte.com/au/en/services/financial-advisory/services/digital-deal-room.html | s.d. | "online platform coupled with customized virtual sessions with M&A specialists" |
| 14 | Divestiture Readiness SelfAssess™ | evidence (snippet + integral) | https://selfassess.deloitte.com/divestiture/us ; https://www.deloitte.com/us/en/services/consulting/articles/divestiture-planning-and-assessment-tool.html | s.d. | "Accounting and finance, Tax, Carve-out transaction considerations, Working capital optimization, and Value creation" |
| 15 | Software DD com CAST | evidence (snippet) | https://www.deloitte.com/de/de/services/consulting-financial/services/software-due-diligence.html | s.d. | "non-invasive"; "without the source code ever leaving the computer from the target"; "scalability and technical debt"; P&D vs "industry best practices" |
| 16 | M&A Technology (UK): viabilidade da tecnologia vs. tese | evidence (snippet) | https://www.deloitte.com/uk/en/services/consulting-financial/services/m-and-a-technology.html | s.d. | "extensibility, maintainability, reliability, scalability, upgradability and security of the target's technology to understand the feasibility of the technology to support the investment thesis" |
| 17 | AI in Private Equity (US) | evidence (snippet) | https://www.deloitte.com/us/en/services/consulting/services/ai-due-diligence-private-equity-services.html | 2026 | "assesses both how AI is reshaping a company's market and whether the company's own AI capabilities, data, and talent are strong enough to defend its position before capital is committed"; "actionable value creation roadmap"; "measurable EBITDA gains within the hold period rather than one-off pilots that never scale" |
| 18 | Digital Footprint Analysis | evidence (snippet) | https://www.deloitte.com/uk/en/services/consulting/perspectives/digital-footprint-analysis-due-diligence-for-m-and-a-cyber-risks.html | s.d. | "websites, domains, hosted infrastructure, social media activity, leaked credentials, and content relating to key employees" |
| 19 | Clean room com GenAI | evidence (snippet) | https://www.deloitte.com/us/en/what-we-do/capabilities/mergers-acquisitions-restructuring/articles/reimagine-your-m-and-a-clean-room-with-gen-ai.html | s.d. | "improving data quality, automating task workflows, and surfacing new insights from complex data at the scale required in large-deal M&A" |
| 20 | Banking M&A integration: 8 aceleradores | evidence (integral) | https://www.deloitte.com/us/en/industries/financial-services/articles/banking-ma-integration-accelerators.html | 2025 (PDF 2025) | "Bring tech in early"; "Leverage secure clean rooms"; "Keep Legal Day 1 simple"; "Strengthen readiness with realistic rehearsals"; "IT drives more than half of the synergies in many banking M&A deals" |
| 21 | 2026 Global Divestiture Survey | evidence (snippet + integral) | https://www.deloitte.com/us/en/what-we-do/capabilities/mergers-acquisitions/articles/global-corporate-divestiture-survey.html | 2026 | "less transactional and more transformational"; "Outperformers treat divestitures as intentionally designed transformation events"; "stranded costs, transition service agreement (TSA) complexity" |
| 22 | Case Francisco Partners: separação blue-sky sem TSA | evidence (snippet) | https://www.deloitte.com/us/en/what-we-do/case-studies/a-blue-sky-approach-to-separation-and-transformation.html | 2024 (PDF) | "Francisco Partners engaged Deloitte"; "lead-to-cash and record-to-report"; bastidor: "under five months", sem TSAs, "approximately 500 products" racionalizados |
| 23 | Racing to capability (deals de IA) | evidence (snippet + integral) | https://www.deloitte.com/us/en/what-we-do/capabilities/mergers-acquisitions-restructuring/articles/how-ai-companies-rewriting-m-and-a.html | 2026 | "defined perimeters and preclose certainty"; "people, code, and compute contracts"; "integrated execution challenges, not sequential phase-gate processes" |
| 24 | Aliança Anthropic | evidence (snippet) | https://www.anthropic.com/news/deloitte-anthropic-partnership ; https://www.cnbc.com/2025/10/06/anthropic-deloitte-enterprise-ai.html | 06/10/2025 | "470,000"; "Claude Center of Excellence"; "15,000 professionals" (não específico de M&A) |
| 25 | Google Cloud Agentic Transformation Practice | evidence (snippet, título) | https://www.googlecloudpresscorner.com/2026-04-22-Deloitte-Accelerates-AI-Transformation-on-Gemini-Enterprise-With-Dedicated-Google-Cloud-Agentic-Transformation-Practice | 22/04/2026 | título (não específico de M&A) |
| 26 | Converge by Deloitte | evidence (integral) | https://www.deloitte.com/us/en/what-we-do/capabilities/converge/services/converge.html | snapshot 2026 | "Software and data products that converge with services to accelerate outcomes"; "forward deployed engineering" |
| 27 | Brasil: IT M&A | evidence (R2 + snippet) | https://www.deloitte.com/br/pt/services/consulting/services/ti-fusoes-aquisicoes.html | ativa 2026 | "A Due Diligence de TI exige um exame dos ativos, sistemas, processos, políticas e procedimentos de TI antes de uma transação" |
| 28 | Brasil: Integração pós-fusão | evidence (snippet, resumo) | https://www.deloitte.com/br/pt/services/consulting-financial/services/integracao-pos-fusao.html | ativa 2026 | "Day One"; TSA; sinergias; desinvestimento |
| 29 | Brasil: Fusões & Aquisições — DD multidimensional com cyber | evidence (snippet) | https://www.deloitte.com/br/pt/services/consulting/services/fusoes-e-aquisicoes.html | ativa 2026 | DD "financeira, comercial, tributária, cibersegurança e sustentabilidade" (resumo do buscador) |
| 30 | Brasil: Tecnologia em M&A, Digital Deal Room e Synapse | evidence (R2) | https://www.deloitte.com/br/pt/services/financial-advisory/perspectives/tecnologia-fusoes-aquisicoes.html | s.d. | "ferramentas proprietárias como Digital Deal Room e Synapse, que aceleram blueprinting e due diligence" |
| 31 | Brasil: pesquisa Futuro Estratégico de M&A | evidence (snippet) | https://www.deloitte.com/br/pt/services/consulting/research/estrategias-crescimento-empresas-brasil.html | c. 2024–25 | "O uso de tecnologias como IA (Inteligência Artificial) e Analytics no apoio às etapas das operações de M&A, especialmente de modo preditivo, é uma tendência" |
| 32 | Liderança de PE M&A ligada a carve-outs e data analytics | evidence (integral) | https://www.deloitte.com/us/en/about/people/profiles.andrew-wright+9df7e801.html | snapshot 2026 | "deep technical specialization in deal execution, particularly carve-outs"; "instrumental in developing Deloitte's M&A Data Analytics offering" |
| 33 | Líder de High Tech M&A Integration & Divestitures | evidence (integral) | https://www.deloitte.com/us/en/about/people/profiles.jkrikhaar+1452ba73.html | snapshot 2026 | "Joost leads Deloitte's High Technology M&A Integration and Divestitures practice"; "synergy planning and capture, overall integration management, Day 1 readiness" |

---

## 10. Lacunas desta pesquisa
- **Nenhuma página da Deloitte foi aberta diretamente** (403). As páginas dos EUA foram lidas na íntegra via espelho GitHub (2026); as demais são snippet.
- **Nomes de módulos e agentes do M&A Platform e LLM/parceiro usado: não encontrado.**
- **Synapse (BR):** sem descrição própria. **M&A Sensing:** conteúdo não verificado.
- **Data de lançamento do iDeal:** não verificada.
- **Disponibilidade do M&A Platform no Brasil e cases de Tech M&A da Deloitte Brasil 2025–2026:** não encontrado.
- **Harvey, ToltIQ e Palantir em M&A da Deloitte:** não encontrado (sem busca dedicada).
- **Divergência de escala:** "28K+ M&A practitioners" (US) vs. "6,000 M&A professionals" (BR Strategy & Transactions, snippet). Provavelmente perímetros distintos; não usar no deck.
- **"Technology Divestiture Readiness, Separation and Carve-out"** (citado em R2): página não identificada.
