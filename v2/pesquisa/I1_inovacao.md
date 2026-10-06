# I1 — Inovação de produto em M&A ligada a tecnologia (2025-2026): o que o mercado já vende, a tecnologia por trás e o espaço para a A&M

**Data:** 06/10/2026. **Autor:** subagente I1 (analista sênior de inovação em produtos de M&A e tecnologia).
**Escopo:** 10 temas de inovação (diligência agêntica, AI DD, outside-in, code intelligence, entanglement/TSA com IA, clean room, synergy cockpit, exit readiness, playbooks para compradores seriais, AI value creation no hold). **Fora de escopo por pedido do usuário:** preço, forma de cobrança, prazo e timeline de implementação (números desse tipo que apareceram em snippets foram descartados).

## 0. Método e grau de confiança (ler antes de usar)

- **WebSearch:** 22 buscas (teto respeitado). Os trechos vêm de resumos do buscador, por isso o rótulo é **evidence (snippet)**: atribuídos à fonte nomeada, mas exigem conferência literal antes de uso externo.
- **Leitura integral (evidence-integral):** páginas lidas por inteiro via espelho GitHub `mcjuh/BT4103-Scrape-and-Tag` (snapshot 2026) e via raw.githubusercontent.com: A&M (AI-ZBO, NA Value Creation Report 2026, perfis de Anil Kumar, Jeffrey Klein e Jeff Shaffer, Bernd Oehring, página PE pt-BR, Navigating the Tech Terrain, Value Creation europeu), West Monroe (M&A, DD, AI Services), KPMG US (Divestitures; GenAI for PE), FTI (Contract Fusion), conector Datasite (claude.com), plugin open-source `anthropics/claude-for-legal`, Cisco AI BOM (README). Cópias locais em `scratchpad/v2/research/dl_inov/`.
- **Reaproveitado (não refeito):** R2, R4, B1 (PwC), B2 (EY), B3 (Deloitte), R3 (MBB/Accenture), X2 (IA em DD no Brasil). Quando um achado vem desses arquivos, está marcado "(R2)", "(B2)" etc.
- **hypothesis** = inferência minha. Nenhum nome de produto foi inventado; propostas de produto para a A&M estão na seção 5 e são explicitamente hipóteses de nome.

---

## 1. Resumo executivo

1. **Ler o data room com IA virou "infra", não diferencial.** Em 2026 o próprio VDR expõe o conteúdo do deal a agentes: a Datasite lançou um **MCP Server** ("first VDR provider to connect AI assistants directly to live deal content", 28/04/2026), a Blueflame AI (unidade da Datasite) lançou o agente **Amp** (23/06/2026), a Hebbia conectou o **Matrix** ao **SS&C Intralinks DealCentre AI** (mai/2026) e um plugin open-source da Anthropic já lê VDRs de Box/Intralinks/Datasite com "every cell cited to source". O que diferencia passa a ser **a tese, o playbook e quem executa depois** — não o leitor de PDF.
2. **A A&M já tem ativo próprio nesse jogo e o subutiliza no deck:** **A&M DiligenceGPT** (plataforma GenAI para diligência de PE, movida pelo framework proprietário **"Private Equity Chain of Thought"**, usada em "over 100 engagements"), o **A&M DIG** (OSINT + machine learning), **A&M Global Transaction Analytics** e, desde 30/06/2026, o serviço **AI-Enabled Zero-Based Optimization (AI-ZBO)**. O deck comercial v7 não menciona nenhum deles.
3. **"AI Due Diligence" bifurcou em dois produtos:** (a) **IA como ferramenta** da diligência (velocidade, citação) e (b) **IA como objeto** da diligência — a IA do alvo é real? quanto custa servir (inferência/token)? de qual modelo depende? o produto é replicável por IA? Bain usa "vibecoding" para construir réplicas do software do alvo e testar o fosso; West Monroe vende "AI diligence" para "make sure you're buying what they're selling".
4. **Outside-in virou etapa pré-LOI padrão:** Deloitte UK vende **Digital Footprint Analysis** ("hands-off integrity due diligence"), Kroll vende **Cyber Due Diligence** com "threat hunting, vulnerability scanning and dark web monitoring"; ratings (Bitsight, SecurityScorecard) e varredura de superfície de ataque sustentam a camada. A A&M tem o motor (A&M DIG) mas não o produto de M&A tecnológico.
5. **Evidência de código substitui entrevista:** Black Duck publica o OSSRA 2026 com base em auditorias "primarily in support of M&A transactions" (947 codebases, 197 transações); Sema vende **Comprehensive Codebase Scans** e criou o **Generative AI Bill of Materials**; Cisco publicou o **AI BOM** open-source (inventário de modelos, agentes, MCP servers, prompts). A nova pergunta de diligência é **"quanto deste código foi escrito por IA e quem revisou?"**.
6. **Separação/TSA é onde a IA mais "produtizou":** KPMG US anuncia "Agentic capabilities for TSA drafting, contract review, and separation risk modeling"; PwC tem app de separação de aplicações (R2/B1); EY Capital Edge acompanha TSA "in real time" (B2); Deloitte tem **DataMAAP** para separação de dados (B3). A tecnologia de base é **grafo de dependências** + **digital twin da organização** (Celonis é Líder no Gartner MQ 2026 de "Digital Twin of an Organization Platforms"; Celonis + Ardoq lançaram solução conjunta EA + process intelligence).
7. **Clean room com GenAI é a fronteira pré-closing de sinergia:** Deloitte publica "Reimagine Your M&A Clean Room with GenAI"; GEP vende "M&A Clean Room Services". O espaço é antecipar sinergias de receita e custo sem "gun-jumping".
8. **Sinergia precisa ser auditável:** BCG tem **Post-Merger Integration Ignite by BCG X**, **Synergy Builder by BCG** e **KEY Impact Management by BCG X** (R3); West Monroe opera um **Value Management Office (VMO)**; KPMG promete "TSA exit acceleration, stranded-cost reduction, and KPI tracking". O comprador quer sinergia com dono, evidência e trilha.
9. **Exit readiness ganhou camada de dados e IA:** EY ("Be exit-ready, not exit-reactive"; compradores distinguem "AI activity" de "AI strategy"), PwC UK ("evidence they can test"), West Monroe (**Exit Readiness and Sell-Side Advisory** e **Hold Period Health Check**), Datasite MCP ("audit data room readiness").
10. **AI value creation no hold é a demanda mais explícita dos próprios clientes da A&M:** pesquisa europeia A&M (19/05/2026) — uso de IA em value creation saltou para a maioria dos fundos; a barreira nº 1 é custo e ROI incerto. A&M NA (28/05/2026): a maioria espera que IA aumente o valor do portfólio, mas pouquíssimos se dizem "leading". A A&M publicou **"AI Token Economics: A Practical Guide for Managing AI Spend"** (12/08/2026) — base para um produto de economia de IA (custo por tarefa concluída) no portfólio.
11. **Implicação central (hypothesis):** o diferencial defensável da A&M não é "ter IA", é **ligar a evidência técnica (código, IA, cyber, dependências) à execução com dono** — o mesmo time que acha o entanglement escreve a TSA e opera a saída; o mesmo time que mede o custo de IA implanta o AI-ZBO. Concorrentes vendem plataforma; a A&M pode vender **plataforma + operador**.

---

## 2. Ativos de inovação que a A&M JÁ TEM (e que o deck v7 não usa)

| Ativo (nome exato) | O que é (trecho literal) | Data | Fonte | Tipo |
|---|---|---|---|---|
| **A&M DiligenceGPT** | "Developed and deployed A&M's Generative AI product suite, DiligenceGPT"; "leading the development and deployment of A&M's generative AI toolset, DiligenceGPT, for private equity diligences" | perfil 2026 | https://www.alvarezandmarsal.com/our-people/anil-kumar | evidence-integral |
| A&M DiligenceGPT — framework | "powered by the firm's proprietary Private Equity Chain of Thought framework, which mirrors the question sets PE professionals typically ask"; "Used in over 100 engagements"; "hypothesis formulation, issue identification, data visualization, past project analysis, contract analysis, and web research" | lançamento jan/2024 | https://www.alvarezandmarsal.com/insights/alvarez-marsal-launches-generative-ai-accelerator-optimizing-efficiency-and-creating | evidence (snippet) |
| "The A&M Diligence GPT Platform: Gen AI Solutions for Private Equity" | título de thought leadership listado no perfil | 15/11/2023 | https://www.alvarezandmarsal.com/insights/am-diligencegpt-platform-genai-solutions-private-equity (via perfil de Jeffrey Klein) | evidence-integral (título) |
| **GenAI PE and Software, Technology & Services industry group** | Jeffrey Klein "leads the PEPI M&A Services practice responsible for the GenAI PE and Software, Technology & Services industry group"; especialista em "IT pre-acquisition diligence ... and Transitional Service Agreement (TSA) creation and analysis" e "100-day IT plans" | perfil 2026 | https://www.alvarezandmarsal.com/our-people/jeffrey-klein | evidence-integral |
| **Generative AI** (grupo de PE) | "The Private Equity Generative AI group at A&M is actively working on a comprehensive suite of products and solutions" | 2026 | https://www.alvarezandmarsal.com/pt-br/expertise/private-equity-services | evidence-integral |
| **A&M Data Intelligence Gateway (A&M DIG)** | "a proprietary technology that utilizes the active collection of unstructured government data through open source intelligence (OSINT) and machine learning" | 2026 | idem | evidence-integral |
| **A&M Global Transaction Analytics** / **RAP Rapid Analytics** | "Leverage data and analytics to maximize actionable insights" | 2026 | idem | evidence-integral |
| **AI-Enabled Zero-Based Optimization (AI-ZBO)** | "redesigning workflows with targeted use of AI across high-frequency, decision-heavy processes"; 4 fases: "Profitability Transparency", "Clean-Sheet Redesign", "Value Sizing & Sequencing", "Execute Value Realization"; "We don't treat AI as a bolt-on or generic platform roll-out" | 30/06/2026 | https://www.alvarezandmarsal.com/press-release/alvarez-marsal-launches-ai-enabled-zero-based-optimization-ai-zbo-to-accelerate-ebitda-improvement-for-private-equity | evidence-integral |
| **Navigating the Tech Terrain** (série de casos) | GenAI no SDLC de portfólio: "Rather than focusing on code generation alone ... improve knowledge sharing, enhance implementation, reduce defect resolution time" | 07/04/2026 | https://www.alvarezandmarsal.com/case-study/navigating-the-tech-terrain-case-study-series | evidence-integral |
| **AI Token Economics: A Practical Guide for Managing AI Spend** | teaser: "AI adoption has reached near-universal levels in engineering, yet a clear gap between perception and measured impact"; snippet: recomenda "cost per completed task instead of cost per API call" | 12/08/2026 | https://www.alvarezandmarsal.com/thought-leadership/ai-token-economics-a-practical-guide-for-managing-ai-spend | teaser: evidence-integral; conteúdo: evidence (snippet) |
| **Merger Integration & Carve-Out** | "Our robust, structured transaction process builds on your vision to drive successful outcomes"; reforço europeu de carve-out/PMI em 2026 (Parkinson, Agarwal, Oehring) | 14/07/2026 | https://www.alvarezandmarsal.com/press-release/alvarez-marsal-appoints-bernd-oehring-to-expand-carve-out-and-merger-intergration-capabilities-in-private-equity-performance-improvement-team-pepi | evidence-integral |
| Execução de carve-out com dono | Jeff Shaffer: "negotiating nearly 100 transition services points and developing Day 1 and Day 100 plans"; Anil Kumar: "technology carve-out ... separation of 10+business systems, two data centers" | perfis 2026 | https://www.alvarezandmarsal.com/our-people/jeff-shaffer ; .../anil-kumar | evidence-integral |

**Prova de bastidor (pesquisas A&M 2026, não vão para o slide como número):**
- Europa (19/05/2026, n=200): "nearly two thirds of respondents (63%) now use AI as part of their value creation activity, up from 41% in 2025"; "60% of respondents cite high cost and uncertain return on investment as the main obstacle"; Bob Rajan: "AI ... has to be tied to clear earnings and cash levers". https://www.alvarezandmarsal.com/press-release/private-equity-firms-turn-to-operational-value-creation-as-geopolitical-shocks-derail-deal-recovery (evidence-integral)
- América do Norte (28/05/2026, n=100): "73% expect AI to increase portfolio value over the next 12 months, yet only 8% describe their firm as 'leading'"; "fewer than one-quarter" embutem value creation antes da LOI. https://www.alvarezandmarsal.com/press-release/alvarez-marsal-north-america-value-creation-report-2026 (evidence-integral)
- European Due Diligence Report 2026 (A&M, divulgado 11/08/2026; imprensa alemã 15/09/2026): "80% of respondents are already using AI tools in due diligence processes"; usos: contratos, mercado, benchmarks operacionais, riscos, cenários; quatro em cinco PEs consideram IA na tese de investimento; risco geopolítico superou disrupção por IA e cyber como prioridade. https://www.presseportal.de/pm/118051/6352594 (evidence snippet)

---

## 3. Os 10 temas — quem oferece, o que promete, tecnologia, demanda, diferenciador A&M

### Tema 1 — Diligência agêntica sobre o data room, com citação de evidência

**Quem oferece (nomes exatos)**
| Oferta | Fonte | Data | Tipo |
|---|---|---|---|
| **Datasite MCP Server** — "Datasite® Becomes the First VDR Provider to Connect AI Assistants Directly to Live Deal Content with MCP Server Launch" | https://www.globenewswire.com/news-release/2026/04/28/3282724/0/en/datasite-becomes-the-first-vdr-provider-to-connect-ai-assistants-directly-to-live-deal-content-with-mcp-server-launch.html | 28/04/2026 | evidence (snippet: título) |
| Conector Datasite no Claude: "set up folder structures, invite users, search documents, track buyer Q&A, and audit data room readiness, all through natural language"; ferramentas `searchDocuments`, `getQAStatus`, `manageQuestion`, `getAccessControl`, `setupProject` | https://claude.com/connectors/datasite (espelho GitHub ai-native-engineer/anthropic-mirror) | 2026 | evidence-integral |
| **Blueflame AI Amp** (unidade da Datasite) — "next-generation dealmaking agent"; atende "screening a CIM, drafting diligence questions, preparing investment committee materials"; disponível no "Blueflame Platform, Excel Add-In, and Datasite data rooms" | https://blueflame.ai/news/blueflame-ai-launches-amp-the-next-generation-ai-agent-for-dealmaking | 23/06/2026 | evidence (snippet) |
| **Hebbia Matrix** — "inline citations linking every output to its source"; integração com **SS&C Intralinks DealCentre AI** para "live deal content" | https://www.hebbia.com/resources/ai-solutions-for-due-diligence ; https://media.inflxd.com/article/hebbia-connects-to-ss-c-intralinks-dealcentre-ai-for-live-data-r | mai/2026 | evidence (snippet; 2ª fonte) |
| **SS&C Intralinks DealCentre AI** ("Link" assistant) — "agent-assisted prep, marketing, and diligence" | https://www.corpdev.ai/research/intralinks-alternatives | 2026 | evidence (snippet, fonte secundária) |
| PwC + Harvey (workflow de DD ">10,000 times"); PwC + ToltIQ (exclusividade Big Four); Deloitte **M&A Platform** ("agentic harness"); EY **Diligence Edge** / **Digital Diligence Assistant**; KPMG **Workbench** | R2 (#1, #16, #19, #32, #39) | 2025-2026 | evidence (R2) |
| Open-source: `anthropics/claude-for-legal` — skill **diligence-issue-extraction** ("Read VDR docs, extract issues in house format"), **tabular-review** ("every cell cited to source, Excel output"), agente **dataroom-watcher** (Box/Intralinks/Datasite via MCP); princípio: "Every output is a draft for attorney review — cited, flagged, and gated" | https://github.com/anthropics/claude-for-legal/tree/main/corporate-legal | 2026 | evidence-integral |
| Open-source de DD multiagente (13 agentes, 9 domínios, citação por página; "credibility gate" humano) | R4 (#24, #27) | 2026 | evidence (R4) |

**O que prometem:** velocidade de red flag logo após a abertura do VDR, resposta com link para a página-fonte, perguntas de diligência e material de IC rascunhados, Q&A de comprador sob controle.
**Tecnologia:** LLMs com RAG sobre o VDR; **MCP** (Model Context Protocol) como ponte VDR→agente com permissão herdada do data room; orquestração multiagente; extração tabular com citação; gate humano antes do memo. Barreira declarada do comprador: segurança e qualidade de dados (R2 #3).
**Sinais de demanda:** A&M Europa: "80% ... already using AI tools in due diligence" (snippet); Deloitte: 86%/90% usam GenAI em M&A (R2).
**Diferenciador para a A&M (hypothesis):** o leitor de VDR virou commodity (está no próprio VDR e em plugins abertos). O diferencial é (i) **a taxonomia própria** — o "Private Equity Chain of Thought" do DiligenceGPT + as 6 competências do IT DD da A&M como esquema de findings; (ii) **findings que já nascem com dono e ação** (entram direto no 100-day plan, no entanglement log e no AI-ZBO); (iii) **gate de sênior operador**, não só de analista. Mensagem: "a IA lê; o operador decide e executa".

### Tema 2 — AI Due Diligence (avaliar a IA do alvo)

**Quem oferece**
| Oferta | Trecho | Fonte | Tipo |
|---|---|---|---|
| **West Monroe — AI for M&A Value Creation** | "Validate the tech you're buying with West Monroe's AI diligence — assess models, data quality, IP, and scalability to make sure you're buying what they're selling" | https://www.westmonroe.com/services/ai-services-solutions (snapshot 2026) | evidence-integral |
| **Bain — "vibecoding" de réplicas** | "to show what a software company can and can't do, to understand where it fits in the value chain and to understand whether it is the actual code that is the defensible part of the business or something else"; "hundreds of rough prototypes" | https://www.privateequitywire.co.uk/bain-uses-ai-vibecoding-to-build-software-replicas-in-pe-due-diligence-shift/ ; https://the-decoder.com/vibecoding-is-becoming-a-deal-breaker-test-for-software-acquisitions/ (2026; data exata não confirmada) | evidence (snippet) |
| Bain — AI diligence muda decisões | "Most acquirers tell us that AI diligence has convinced them to walk away from deals"; "Diligence must adapt to consider not only the market risks posed by AI-native insurgents but also the costs for incumbents to raise their AI game" | https://www.bain.com/insights/software-investing-in-the-age-of-ai-and-slower-growth-technology-report-2026/ ; https://www.bain.com/insights/private-equity-midyear-report-2026/ (atribuição exata entre as páginas Bain 2026 não confirmada) | evidence (snippet) |
| Deloitte **AI Due Diligence** (NL) / **AI in Private Equity** (EUA); PwC **AI and Technology Diligence**; EY DD com "AI" na lista | B3, B1, R2 | evidence (B1/B3/R2) |
| KPMG — "the AI blind spot": dívida técnica e de IA pouco investigada pré-deal | R2 #27 | evidence (R2) |
| Mercado/advogados: unit economics de IA — "gross margins with AI costs fully loaded", "which models are depended on"; "thin wrapper over a public API has high model dependency" | https://www.feinternational.com/blog/ai-ma-trend ; https://www.papermark.com/blog/ai-due-diligence ; https://valutico.com/ai-vulnerability-in-ma-due-diligence-a-2026-buyers-framework/ | 2026 | evidence (snippet, fontes secundárias) |
| AI-washing como risco regulatório: ações da SEC contra "AI-washing" (2024-2025) | https://delfen.ai/articles/ai-due-diligence-acquisition | 2026 | evidence (snippet, fonte secundária) |
| Governança: ISO/IEC 42001 como evidência de AIMS para o EU AI Act ("does not cover all quality management requirements of the AI Act") | https://www.brightdefense.com/news/eu-ai-act-pushes-iso-iec-42001-into-ai-compliance-planning/ | 2026 | evidence (snippet) |
| Datasite: primeiro VDR com certificação ISO/IEC 42001 | X2 | evidence (X2) |
| Brasil: due diligence de empresas com "IA embarcada" exige validar "modelos proprietários", SLAs de nuvem/processamento, "vieses algorítmicos", LGPD e "trilhas de auditoria dos sistemas de IA" | https://startups.com.br/exclusivo/com-regua-mais-alta-mas-caem-no-1o-semestre-de-2026/ | 2026 | evidence (snippet) |

**O que prometem:** separar IA real de "AI washing", medir dependência de modelo e custo de servir, testar se o produto é replicável por IA (fosso), mapear risco regulatório (EU AI Act, ISO 42001, LGPD) e transformar isso em plano de value creation.
**Tecnologia:** AI-BOM (ver Tema 4), análise de logs/contas de inferência (token economics), réplica funcional por agentes de código ("vibecoding"), testes de avaliação de modelo (evals), frameworks NIST AI RMF / ISO 42001.
**Diferenciador A&M (hypothesis):** juntar três peças que a A&M já tem e ninguém junta numa oferta: **(1)** o guia **AI Token Economics** (custo por tarefa concluída) aplicado ao P&L do alvo, **(2)** o lado operador (**AI-ZBO**) que diz o que a IA do alvo pode render no hold, e **(3)** o teste de réplica como "prova de fosso". Produto: "a IA do alvo é ativo, passivo ou fantasia?" — com recomendação de preço/estrutura a cargo do fundo.

### Tema 3 — Outside-in diligence (OSINT, ratings de cyber, superfície de ataque, dark web)

| Oferta | Trecho | Fonte | Tipo |
|---|---|---|---|
| **Deloitte UK — Digital Footprint Analysis** | "uses hands-off integrity due diligence methodologies to assist in understanding the cyber risks of a target"; cobre "dormant, redundant or forgotten infrastructure such as old subdomains, outdated plugins, backdoor developer tools, and unpatched systems" e "leaked credentials" | https://www.deloitte.com/uk/en/services/consulting/perspectives/digital-footprint-analysis-due-diligence-for-m-and-a-cyber-risks.html | evidence (snippet) |
| **Kroll — Cyber Due Diligence** | "insights into cybersecurity risks and potential financial impact to help deal teams and investment committees make informed decisions"; "threat hunting, vulnerability scanning and dark web monitoring" | https://www.kroll.com/en/services/cyber/cybersecurity-due-diligence | evidence (snippet) |
| **Bitsight** | "real-time cyber threat intelligence integrated across clear, deep, and dark web sources"; API de "ratings, assets, findings" (R4) | https://www.bitsight.com/compare/bitsight-vs-security-scorecard ; R4 #21 | evidence (snippet / R4) |
| Prática de mercado pré-LOI: superfície de ataque externa (Bitsight, SecurityScorecard, CyCognito) + busca em corpora de vazamento (HaveIBeenPwned, DeHashed, Bitsight Underground, BreachSense) | https://www.peony.ink/blog/cybersecurity-due-diligence | 2026 | evidence (snippet, fonte secundária) |
| EY **Cybersecurity Due Diligence in M&A and Divestitures**; KPMG **Cybersecurity Due Diligence** | R2 | evidence (R2) |
| **A&M DIG** — OSINT + machine learning sobre dados governamentais não estruturados | https://www.alvarezandmarsal.com/pt-br/expertise/private-equity-services | evidence-integral |

**O que prometem:** visão de risco sem acesso ao alvo, antes da exclusividade; evidência de "due care" do comprador; pauta de perguntas para a gestão.
**Tecnologia:** varredura passiva de DNS/certificados/portas, ratings de cyber, inteligência de ameaças em deep/dark web, OSINT (inclusive dados públicos de governo, processos, licitações), ML para correlação.
**Diferenciador A&M (hypothesis):** estender o **A&M DIG** de "dados de governo" para **"pegada digital e tecnológica do alvo"** (cyber + tecnologia usada + vagas de TI + contratos públicos + reputação digital) num único **pré-LOI tech screen**, e — diferente de Kroll/Deloitte — já sair com a **pauta de remediação e a estimativa operacional** que alimenta o 100-day plan. Atenção: no Brasil, OSINT de pessoas tem limites de LGPD (hypothesis — validar com jurídico).

### Tema 4 — Code/software intelligence e "digital twin" do parque de TI

| Oferta | Trecho | Fonte | Tipo |
|---|---|---|---|
| **Black Duck Audit Services** + relatório **OSSRA 2026** | dados "primarily in support of merger and acquisition (M&A) transactions"; "947 codebases ... representing 197 M&A transactions"; vulnerabilidades por codebase "rising 107%"; "Two-thirds of audited codebases contain license conflicts"; "while 76% of organizations check AI-generated code for security risks, only 54% evaluate it for IP and license risks" | https://www.blackduck.com/content/dam/black-duck/en-us/reports/rep-ossra.pdf ; white paper "2026 Open Source Risk in M&A by the Numbers": https://www.blackduck.com/content/dam/black-duck/en-us/whitepapers/wp-risk-ma-numbers.pdf | evidence (snippet) |
| **Sema — Comprehensive Codebase Scans**; **Generative AI Bill of Materials** | "used to evaluate $1T worth of software organizations for globally-leading software investors and acquirers"; "inventor of the Generative AI Bill of Materials, which tracks how much Generative AI code has been included inside a codebase" | https://www.semasoftware.com/comprehensive-codebase-scans ; https://www.semasoftware.com/blog/18-technical-due-diligence-tdd-questions-to-assess-genai-code-risk | evidence (snippet) |
| **Cisco AI BOM** (open-source) | "scans codebases, container images, and cloud environments to produce an AI Bill of Materials — a structured inventory of models, agents, tools, MCP servers/clients, datasets, prompts, guardrails, secrets"; "LLM-powered agentic classification" | https://github.com/cisco-ai-defense/aibom | evidence-integral |
| **CycloneDX** — especificação de BOM com tipo de componente "machine-learning-model" (ML-BOM) | https://github.com/CycloneDX/specification (schema bom-1.6/1.7) | evidence (GitHub code search) |
| **SIG Sigrid** (Tech DD para consultorias; AI Governance; AI Transformation View), **CAST Highlight** (case Deloitte), **CodeScene** (Code Health; MCP server "Safeguard AI-Generated Code") | R4 #1-15 | evidence (R4) |
| **Celonis** — "Leader in 2026 Gartner® Magic Quadrant™ for Digital Twin of an Organization Platforms"; **Celonis + Ardoq** — "Process Intelligence with Enterprise Architecture to create a comprehensive digital twin of your organization (DTO)" | https://www.celonis.com/news/press/celonis-named-a-leader-in-2026-gartner-magic-quadrant-for-digital-twin-of-an-organization-platforms ; https://www.ardoq.com/news/celonis-and-ardoq-launch-joint-business-transformation-solution | 2026 | evidence (snippet) |

**O que prometem:** risco de licença, vulnerabilidade e manutenibilidade medido no código (não na entrevista), proveniência de código gerado por IA, inventário de ativos de IA, e uma "réplica digital" do ambiente (aplicações, processos, integrações) para planejar integração/separação.
**Tecnologia:** SCA (composição de software), SAST, métricas ISO 25010, análise comportamental de git, estilometria para detectar código de IA, SBOM/AI-BOM (SPDX, CycloneDX), EA (Ardoq/LeanIX), process mining (Celonis).
**Diferenciador A&M (hypothesis):** a A&M não precisa construir scanner; precisa **orquestrar o "raio-X" com parceiros (Sigrid/CAST/CodeScene + Black Duck/Sema + AI BOM)**, rodar **dentro do ambiente do alvo** (modelo já validado por Deloitte/CAST e Sigrid Local) e — o que os vendors não fazem — **traduzir o achado em decisão de deal e em plano de remediação com dono** no 100-day plan. O mesmo inventário vira a base do digital twin usado na integração/separação (Tema 5): "o raio-X da DD é o mapa do Dia 1".

### Tema 5 — Mapeamento automático de entanglements e TSA com IA

| Oferta | Trecho | Fonte | Tipo |
|---|---|---|---|
| **KPMG US — Divestitures, Carve-outs & Separations** | "Agentic capabilities for TSA drafting, contract review, and separation risk modeling"; "Common ingestion, harmonization, and audit-ready traceability across phases"; "Cross-functional workflows, RAID management, and Day-1 readiness"; "TSA exit acceleration, stranded-cost reduction, and KPI tracking" | https://kpmg.com/us/en/capabilities-services/advisory-services/transactions/divestitures.html (snapshot 2026) | evidence-integral |
| KPMG "Winning the carve-out relay": IA reduz esforço do workstream de tecnologia e do desenho de TSA | R2 #30 | evidence (R2) |
| PwC — app de IA de separação de aplicações; **Junction** ("digital command center"); "AI-driven playbooks" | R2 #17, B1 | evidence (R2/B1) |
| EY **Capital Edge** — TSA "in real time"; "automatically generating Day 1 and end state operating models" | B2 | evidence (B2) |
| Deloitte **DataMAAP** — separação/transferência de dados com IA e TSA self-service | B3 | evidence (B3) |
| **West Monroe** — "We assess risks, opportunities, and entanglements across operations, technology, and people" | https://www.westmonroe.com/services/due-diligence-transaction-advisory | evidence-integral |
| **FTI Technology Contract Solutions** — revisão de contratos de "600 vendors"; "baseball cards" por fornecedor; "avoidance of payments for contracts under a transition services agreement" | https://www.fticonsulting.com/insights/case-studies/contract-fusion-optimizing-vendor-relationships-merged-technology-company | 14/12/2023 | evidence-integral |
| Mercado: "AI-powered dependency mapping can identify which systems, data flows, contracts, and people are shared between entities" | https://www.blott.com/blog/post/carve-outs-in-2026-why-separation-demands-integration-discipline | 2026 | evidence (snippet, fonte secundária) |
| Celonis/Ardoq digital twin (Tema 4) | — | evidence (snippet) |

**O que prometem:** inventário de dependências (sistemas, dados, contratos, pessoas) gerado por máquina, TSA rascunhada por agentes, risco de separação modelado, saída de TSA acelerada e custo encalhado sob controle.
**Tecnologia:** grafo de dependências alimentado por CMDB/ITSM (ServiceNow), EA (Ardoq/LeanIX), process mining (Celonis), extração de contratos por LLM, geração de TSA a partir de catálogo de serviços, torre de controle de TSA.
**Diferenciador A&M (hypothesis):** a A&M já tem o método (Entanglement Log, Major/Minor, cenários To-Be, heatmap, suporte à TSA — deck v7) e cases de carve-out. Inovação: transformar o Entanglement Log em **grafo vivo assistido por IA** e, principalmente, **operar a TSA e a saída** (CIO interino, SMO) — algo que plataformas da Big Four acompanham, mas não executam com responsabilidade de resultado.

### Tema 6 — Clean team / clean room de dados para sinergias pré-closing

| Oferta | Trecho | Fonte | Tipo |
|---|---|---|---|
| **Deloitte — "Reimagine Your M&A Clean Room with GenAI"** | "Recent advances in generative AI can improve organizations' ability to accelerate and deepen clean room analytics by improving data quality, automating task workflows, and surfacing new insights from complex data at the scale required in large-deal M&A" | https://www.deloitte.com/us/en/what-we-do/capabilities/mergers-acquisitions/articles/reimagine-your-m-and-a-clean-room-with-gen-ai.html | evidence (snippet) |
| Deloitte — "Leveraging clean rooms and clean teams to accelerate synergy capture" (top-line após anúncio, antes do closing) | https://www2.deloitte.com/us/en/pages/mergers-and-acquisitions/articles/leveraging-clean-rooms-and-clean-teams-to-accelerate-synergy-capture.html | evidence (snippet) |
| **GEP — M&A Clean Room Services** (procurement) | https://www.gep.com/strategy/procurement-consulting/mergers-acquisition-services/mergers-acquisition-clean-room | evidence (snippet: nome) |
| EY M&A Integration — "Is a clean team needed" dentro de "Value creation and synergy identification" | B2 | evidence (B2) |

**O que prometem:** quantificar sinergias de receita/custo com dado sensível (preço, margem por cliente, contratos de fornecedor) sem violar antitruste ("gun-jumping"), e começar a captura no Dia 1.
**Tecnologia:** ambientes isolados com controle de acesso e trilha de auditoria; pseudonimização; data clean rooms (Snowflake/AWS/Databricks — hypothesis, não pesquisado); GenAI para limpar, casar e classificar dados (cliente, SKU, fornecedor).
**Diferenciador A&M (hypothesis):** combinar o **clean room** com a experiência de compras/pricing do PEPI (AI-ZBO cita pricing, procurement-to-pay) e de TI (custo de aplicações, contratos de software): sinergias de **TI e de compras de tecnologia** calculadas linha a linha antes do closing e entregues como backlog do IMO no Dia 1. Pouquíssimos concorrentes falam de clean room para **sinergia de TI**.

### Tema 7 — Synergy tracking e "value creation cockpit" com IA

| Oferta | Trecho | Fonte | Tipo |
|---|---|---|---|
| **BCG — Post-Merger Integration Ignite by BCG X**, **Synergy Builder by BCG**, **KEY Impact Management by BCG X** | R3 #13 | evidence (R3) |
| **West Monroe — Value Management Office (VMO)** | "Post-close, our Value Management Office (VMO) ensures synergy objectives stay on track, refining and prioritizing efforts to deliver measurable ROI" | https://www.westmonroe.com/services/due-diligence-transaction-advisory | evidence-integral |
| **EY Capital Edge** (PMO, sinergias, TSA); **PwC Junction**; **Deloitte iDeal**; KPMG "KPI tracking" | B1, B2, B3; KPMG divestitures | evidence |
| Plataformas PE: "Planr ... AI Operating System for Private Equity" (portfolio monitoring, value creation) | https://planr.com/ | evidence (snippet) |
| Conceito "AI Value Creation Offices" | https://bceconsulting.com/insights/ai-value-creation-offices-are-private-equitys-next-operating-edge | evidence (snippet; boutique) |
| Demanda: PwC Integration Survey 2026 — sinergias "real and auditable"; dono/prazo/verba por iniciativa | R2 #20 | evidence (R2) |

**O que prometem:** sinergia rastreável da tese ao P&L, com dono, evidência e alerta precoce; visão única de IMO/SMO/VMO.
**Tecnologia:** dados conectados ao ERP/BI da investida, agentes que reconciliam baseline × realizado, alertas, narrativa automática para o comitê.
**Diferenciador A&M (hypothesis):** a A&M já vende "IT Synergies & Value Creation (Value Creation as a Service)" e IMO/SMO (deck v7). A evolução é um **cockpit de valor** em que cada sinergia tem **dono, evidência e trilha auditável**, alimentado pelos achados da DD (Temas 1-4) e conectado ao AI-ZBO. Mensagem: "a sinergia que o comitê aprovou é a que aparece no EBITDA".

### Tema 8 — Exit readiness / vendor DD com copiloto de data room

| Oferta | Trecho | Fonte | Tipo |
|---|---|---|---|
| **EY — Exit Readiness** / "data exit readiness" | "Be exit-ready, not exit-reactive"; "buyers are likely to distinguish between AI activity and AI strategy. A list of pilots or isolated productivity tools may not be enough to support valuation" | B2 (EY Global PE Exit Readiness Study 2026) | evidence (B2) |
| **PwC UK — Exit readiness** | "buyers increasingly wanting evidence they can test" | B1 | evidence (B1) |
| **West Monroe — Exit Readiness and Sell-Side Advisory**; **Hold Period Health Check** | "Our proven sell-side model uncovers gaps that could erode value and works fast to close them"; Health Check "uncovers technical debt, cyber vulnerabilities, and operational inefficiencies" | https://www.westmonroe.com/services/due-diligence-transaction-advisory | evidence-integral |
| **Deloitte — Divestiture Readiness SelfAssess™** | B3 | evidence (B3) |
| **KPMG — Strategic Divestitures**: "a business that has a clear value story, is ready for diligence" | https://kpmg.com/us/en/capabilities-services/advisory-services/transactions/divestitures.html | evidence-integral |
| **Datasite** (conector MCP: "audit data room readiness"); **Ansarada** ("AI-Sort", bulk AI redaction, "readiness scores") | claude.com/connectors/datasite ; https://www.ansarada.com/article/best-ai-data-rooms-due-diligence-2026 ; https://investordatarooms.com/ansarada/ | evidence-integral / evidence (snippet, review de terceiro) |
| A&M — **Sell-side and vendor due diligence**; deck v7 "IT Due Diligence (Sell Side)" | página PE pt-BR; deck | evidence-integral |

**O que prometem:** chegar ao processo de venda com dados, tecnologia e história de IA testáveis; data room organizado e redigido por IA; menos desconto de preço por risco técnico.
**Tecnologia:** classificação e indexação automática de documentos, redação automática de dados sensíveis, score de prontidão, varreduras sell-side (código/cyber/AI-BOM) e Q&A antecipado por IA.
**Diferenciador A&M (hypothesis):** "**fazer a DD do comprador antes do comprador**" — o vendedor roda o mesmo raio-X tecnológico (Temas 2-4) e **corrige** (não só reporta) antes de abrir o VDR, com a A&M operando a remediação. Ponto forte: provar "AI strategy" e não "AI activity" — o que conversa com o AI-ZBO executado no hold.

### Tema 9 — Playbooks digitais e copilotos para compradores seriais e buy-and-build

| Oferta | Trecho | Fonte | Tipo |
|---|---|---|---|
| **BCG — "The 2026 M&A Report: The Playbook for AI Deals Is Still Being Written"** | "Acquirers should build integration muscle before making platform deals" (snippet) | https://www.bcg.com/publications/2026/ai-m-and-a-no-consolidation-yet | evidence (snippet) |
| BCG — "AI Is Turning M&A into a High-Impact Learning Machine": "dealmaking is evolving from a fragmented, experience-driven process into a connected system" | R3 | evidence (R3) |
| McKinsey — adquirentes programáticos | R3 #23 | evidence (R3) |
| PwC — "AI-powered playbooks" | B1 | evidence (B1) |
| Open-source: `claude-for-legal` skill **integration-management** ("Post-closing integration workplan, consents tracker, contract assignment, status reports") e **closing-checklist** ("Self-updating: ingests from diligence") | https://github.com/anthropics/claude-for-legal | evidence-integral |
| Mercado: "Playbooks are most valuable to serial acquirers ... A platform that integrates several bolt-ons a year cannot afford to relearn integration each time" | https://www.v7labs.com/blog/buy-and-build-add-on-integration-private-equity | evidence (snippet, fonte secundária) |

**O que prometem:** cada add-on integrado mais rápido e com menos risco que o anterior; memória institucional do comprador; checklists que se atualizam a partir da DD.
**Tecnologia:** playbook como código (templates + regras), agentes que geram plano de integração a partir dos achados da DD, base de lições aprendidas consultável (RAG), painel multi-add-on.
**Diferenciador A&M (hypothesis):** a A&M tem cases de buy-and-build no deck (ex.: plano de 100 dias com iniciativas de várias investidas). Produto: um **"sistema operacional de add-on"** para plataformas de PE — a DD de cada add-on já sai no formato do playbook da plataforma, e o time A&M opera as primeiras integrações e transfere o playbook para a equipe interna.

### Tema 10 — AI value creation no hold (AI readiness, token economics, AI CoE)

| Oferta | Trecho | Fonte | Tipo |
|---|---|---|---|
| **A&M — AI-ZBO** | ver seção 2; "hardwire the right oversight controls into core workflows so the impact is durable well beyond our project engagement" | press release 30/06/2026 | evidence-integral |
| **A&M — AI Token Economics** | "cost per completed task instead of cost per API call" (snippet) | 12/08/2026 | evidence (snippet) |
| **BCG** — "portfolio-wide AI Centers of Excellence by function" | https://www.bcg.com/assets/2025/executive-perspectives-ai-first-companies-private-equity.pdf | evidence (snippet) |
| **EY — GenAI services for PE**: "value accelerator models that show where, how and when a GenAI use case could deliver value and at what cost" | https://www.ey.com/en_gl/industries/private-equity/generative-ai-services-for-private-equity (cópia local dl_ey) | evidence-integral |
| **KPMG — Generative AI for Private Equity** (perguntas de "Portfolio impact" e "Technology adoption") | https://kpmg.com/us/en/capabilities-services/private-equity/generative-ai.html | evidence-integral |
| **West Monroe — Intellio® Agent** ("Identify and fix broken processes ... turning them into build-ready AI workflows in minutes"), **Intellio® Insights** (benchmarks), "Capture value post-close — redesign work and deploy agents" | https://www.westmonroe.com/services/ai-services-solutions | evidence-integral |
| Deloitte **AI in Private Equity** (AI DD → value creation roadmap) | B3 | evidence (B3) |
| Demanda A&M: IA em value creation (Europa) e lacuna "leading" (NA) | seção 2 | evidence-integral |

**O que prometem:** sair de pilotos para rotinas que mexem no EBITDA; priorizar casos de uso; governar custo e risco da IA no portfólio.
**Tecnologia:** agentes em processos de alta frequência (O2C, P2P, pricing, atendimento), FinOps de IA (medição de tokens, roteamento de modelos, cache), governança (ISO 42001), CoE compartilhado entre investidas.
**Diferenciador A&M (hypothesis):** é aqui que a A&M já tem **produto lançado (AI-ZBO)** e **conteúdo proprietário (Token Economics)**. A peça que falta no portfólio de tecnologia é a ponte **DD → hold**: o que a AI DD descobriu no alvo vira o backlog do AI-ZBO e o orçamento de IA é governado por custo por tarefa concluída.

---

## 4. Catálogo de produtos e tecnologias citados (nomes exatos)

| Firma / vendor | Produto (nome exato) | Tema | URL |
|---|---|---|---|
| A&M | A&M DiligenceGPT ("Private Equity Chain of Thought") | 1 | https://www.alvarezandmarsal.com/insights/alvarez-marsal-launches-generative-ai-accelerator-optimizing-efficiency-and-creating |
| A&M | A&M Data Intelligence Gateway (A&M DIG) | 3 | https://www.alvarezandmarsal.com/pt-br/expertise/private-equity-services |
| A&M | AI-Enabled Zero-Based Optimization (AI-ZBO) | 10 | https://www.alvarezandmarsal.com/press-release/alvarez-marsal-launches-ai-enabled-zero-based-optimization-ai-zbo-to-accelerate-ebitda-improvement-for-private-equity |
| A&M | AI Token Economics: A Practical Guide for Managing AI Spend | 2, 10 | https://www.alvarezandmarsal.com/thought-leadership/ai-token-economics-a-practical-guide-for-managing-ai-spend |
| Datasite | Datasite MCP Server; Datasite Diligence | 1, 8 | https://www.globenewswire.com/news-release/2026/04/28/3282724/0/en/datasite-becomes-the-first-vdr-provider-to-connect-ai-assistants-directly-to-live-deal-content-with-mcp-server-launch.html |
| Blueflame AI (Datasite) | Amp | 1 | https://blueflame.ai/news/blueflame-ai-launches-amp-the-next-generation-ai-agent-for-dealmaking |
| Hebbia | Matrix | 1 | https://www.hebbia.com/resources/ai-solutions-for-due-diligence |
| SS&C Intralinks | DealCentre AI | 1, 8 | https://media.inflxd.com/article/hebbia-connects-to-ss-c-intralinks-dealcentre-ai-for-live-data-r |
| Ansarada | AI-Sort; AI redaction; readiness score | 8 | https://www.ansarada.com/article/best-ai-data-rooms-due-diligence-2026 |
| Anthropic (open-source) | claude-for-legal / corporate-legal (diligence-issue-extraction, tabular-review, dataroom-watcher, integration-management) | 1, 9 | https://github.com/anthropics/claude-for-legal |
| West Monroe | AI diligence; Hold Period Health Check; Exit Readiness and Sell-Side Advisory; Value Management Office (VMO); Intellio® Agent/Insights | 2, 7, 8, 10 | https://www.westmonroe.com/services/ai-services-solutions |
| Bain | AI due diligence com réplicas "vibecoded" | 2 | https://www.privateequitywire.co.uk/bain-uses-ai-vibecoding-to-build-software-replicas-in-pe-due-diligence-shift/ |
| Deloitte | Digital Footprint Analysis; Reimagine Your M&A Clean Room with GenAI; DataMAAP; M&A Platform; AI Due Diligence | 3, 6, 5, 1, 2 | https://www.deloitte.com/uk/en/services/consulting/perspectives/digital-footprint-analysis-due-diligence-for-m-and-a-cyber-risks.html |
| Kroll | Cyber Due Diligence | 3 | https://www.kroll.com/en/services/cyber/cybersecurity-due-diligence |
| Bitsight | ratings / threat intelligence (clear, deep, dark web) | 3 | https://www.bitsight.com/compare/bitsight-vs-security-scorecard |
| Black Duck | Black Duck Audit Services; OSSRA 2026 | 4 | https://www.blackduck.com/content/dam/black-duck/en-us/reports/rep-ossra.pdf |
| Sema | Comprehensive Codebase Scans; Generative AI Bill of Materials | 4 | https://www.semasoftware.com/comprehensive-codebase-scans |
| Cisco | AI BOM | 2, 4 | https://github.com/cisco-ai-defense/aibom |
| Celonis + Ardoq | Digital Twin of an Organization (process intelligence + EA) | 4, 5 | https://www.ardoq.com/news/celonis-and-ardoq-launch-joint-business-transformation-solution |
| KPMG | Strategic Divestitures (agentic TSA drafting, contract review, separation risk modeling); Generative AI for Private Equity | 5, 10 | https://kpmg.com/us/en/capabilities-services/advisory-services/transactions/divestitures.html |
| FTI | FTI Technology Contract Solutions ("baseball cards" de fornecedores) | 5, 7 | https://www.fticonsulting.com/insights/case-studies/contract-fusion-optimizing-vendor-relationships-merged-technology-company |
| GEP | M&A Clean Room Services | 6 | https://www.gep.com/strategy/procurement-consulting/mergers-acquisition-services/mergers-acquisition-clean-room |
| BCG | Post-Merger Integration Ignite by BCG X; Synergy Builder by BCG; KEY Impact Management by BCG X | 7, 9 | https://www.bcg.com/capabilities/mergers-acquisitions-transactions-pmi/post-merger-integration |
| EY | Capital Edge; Diligence Edge; Exit Readiness; GenAI services for PE ("value accelerator models") | 5, 7, 8, 10 | https://www.ey.com/en_gl/industries/private-equity/generative-ai-services-for-private-equity |
| PwC | AI and Technology Diligence; Junction; app de separação de TI; Harvey/ToltIQ/Palantir | 1, 2, 5 | ver B1/R2 |
| Planr | AI Operating System for Private Equity | 7 | https://planr.com/ |

### Pilha de tecnologia (síntese — hypothesis organizada sobre as evidências acima)
1. **Acesso ao dado do deal:** VDR com MCP (Datasite), conectores (Intralinks DealCentre AI ↔ Hebbia), agentes por permissão.
2. **Leitura e raciocínio:** LLM + RAG + extração tabular com citação + orquestração multiagente + gate humano.
3. **Evidência técnica:** SCA/SAST, métricas de manutenibilidade, SBOM/AI-BOM (CycloneDX ML-BOM), detecção de código de IA, ratings de cyber, OSINT/dark web.
4. **Modelo do ambiente:** grafo de dependências (CMDB/EA), process mining, digital twin da organização.
5. **Execução e valor:** torre de controle de TSA, cockpit de sinergia/valor, clean room, FinOps de IA (custo por tarefa).

---

## 5. Hipóteses de produto para a A&M (inspiração; nomes são propostas, não existentes)

| # | Nome proposto (hypothesis) | Tema | Base que a A&M já tem | Tecnologia | Promessa qualitativa |
|---|---|---|---|---|---|
| P1 | **A&M DiligenceGPT · Deal Room Agents** (evolução do ativo existente) | 1 | DiligenceGPT, PE Chain of Thought, 6 competências do IT DD | MCP para VDR, multiagente, citação por página, gate do sênior | "Do data room ao red flag com fonte — e ao plano de ação" |
| P2 | **AI Asset Diligence** ("A IA do alvo é ativo, passivo ou fantasia?") | 2 | AI Token Economics, AI-ZBO, GenAI group | AI-BOM, análise de custo de inferência, teste de réplica, ISO 42001/EU AI Act/LGPD | Separar IA real de AI washing e medir o custo de servir |
| P3 | **Outside-In Tech & Cyber Screen** (pré-LOI) | 3 | A&M DIG (OSINT + ML) | superfície de ataque, ratings, dark web, pegada digital | Ver o risco antes da exclusividade, sem acesso ao alvo |
| P4 | **Code & AI X-Ray** | 4 | IT DD / Software Product and Technology Diligence | Sigrid/CAST/CodeScene, Black Duck/Sema, AI BOM, scan no ambiente do alvo | Evidência no código, não na entrevista |
| P5 | **Separation Twin & TSA Command** | 5 | Entanglement Log, carve-outs, TSA, SMO | grafo de dependências, EA + process mining, TSA rascunhada por agente | Saber o que se separa — e operar a saída |
| P6 | **Clean Room Synergy Lab** (TI e compras de tecnologia) | 6 | IMO, PEPI procurement/pricing | ambiente isolado + GenAI para casar dados | Sinergia calculada antes do closing, pronta no Dia 1 |
| P7 | **Value Cockpit** (IMO/SMO/VMO com IA) | 7 | IT Synergies & Value Creation (VMaaS) | baseline × realizado conectado ao ERP/BI, agentes de reconciliação | Sinergia com dono, evidência e trilha |
| P8 | **Exit Tech & AI Readiness** | 8 | Sell-side and vendor due diligence; IT DD Sell Side | raio-X sell-side + readiness do VDR + narrativa de IA | Fazer a DD do comprador antes do comprador — e corrigir |
| P9 | **Add-On Playbook OS** (buy-and-build) | 9 | cases de 100 dias multi-investida | playbook como código, RAG de lições, checklist auto-atualizável | Cada add-on integra melhor que o anterior |
| P10 | **Portfolio AI Factory** (DD → hold) | 10 | AI-ZBO, Token Economics, Navigating the Tech Terrain | CoE compartilhado, FinOps de IA, governança | IA que aparece no EBITDA, não no slide de pilotos |

### O que tende a não fazer mais sentido no deck atual (hypothesis, para a reconstrução)
- **IA ausente do discurso**: o deck v7 não cita DiligenceGPT, A&M DIG nem AI-ZBO; em 2026 isso soa defasado frente a Deloitte M&A Platform, EY Edge, PwC/Harvey/Palantir, KPMG Workbench.
- **"Light Pentest" como destaque de cyber**: o mercado migrou para outside-in contínuo (Digital Footprint Analysis, Kroll, ratings) + evidência de código; o pentest leve vira item de checklist, não produto.
- **Maturidade 0-5 baseada só em entrevista/questionário**: concorrentes ancoram em scan de código, SBOM/AI-BOM e ratings. Manter as 6 competências como taxonomia, mas com evidência por ferramenta.
- **Argumentos datados**: estatísticas de M&A 2017-2022, prêmios de 2022 e o claim de multa por software não licenciado — substituir por risco de licença OSS medido em auditoria de M&A (Black Duck) e risco de IP de código gerado por IA.
- **"Plataforma de integração" genérica**: o mercado nomeia plataformas (Junction, Capital Edge, DataMAAP, BCG Ignite). Ou se nomeia o ativo A&M, ou se vende o operador (dono da execução) como o diferencial.
- **Preço/semana, prazo e timeline**: removidos por pedido do usuário.

---

## 6. Lacunas
- Não verificado literalmente (só snippet): textos de Datasite/Blueflame, Hebbia/Intralinks, Bain vibecoding, Deloitte DFA e Clean Room GenAI, Kroll Cyber DD, Black Duck OSSRA 2026, Sema, Celonis/Ardoq, BCG 2026 M&A Report, A&M European DD Report 2026, conteúdo do guia A&M AI Token Economics e do release do DiligenceGPT.
- Data exata da reportagem sobre Bain "vibecoding": não encontrada (2026).
- Atribuição exata da frase "AI diligence has convinced them to walk away from deals" entre as páginas Bain 2026: não confirmada.
- Data clean room (tecnologia específica, ex.: Snowflake/AWS Clean Rooms) aplicada a M&A: não pesquisado (orçamento).
- Ofertas brasileiras com nome de produto em clean room, AI DD, outside-in ou TSA com IA: não encontrado.
- Produto M&A nomeado da SecurityScorecard / Bitsight para due diligence: não encontrado nesta rodada.
- Ferramentas MBB para serial acquirers com nome de produto (além das BCG listadas em R3): não encontrado.
