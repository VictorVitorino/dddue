# Verificação cética · Frente Inovação em produtos (I1)

Data: 06/10/2026. Método, na ordem pedida:
1. **Espelhos GitHub.**
   - Clone local de `mcjuh/BT4103-Scrape-and-Tag` (snapshot 2026, em `v2/a1/repo/docs`), com o release do AI-ZBO, o release do NA Value Creation Report 2026, o release europeu de Value Creation (19/05/2026), a página PE Services pt-BR (A&M DIG), a bio de Anil Kumar e as páginas de West Monroe. Cópias também em `v2/research/dl_inov/`.
   - search_code (frase exata), com estes resultados:
     - "Private Equity Chain of Thought": 0 resultados.
     - "Token Economics" + "Managing AI Spend": 40 bios A&M no mcjuh, só com o título e o link.
     - "DealCentre AI": blog da Hebbia espelhado em `kzinmr/ai-topics`.
     - "947 codebases": OSSRA 2026 convertido em Markdown, em `jacobdjwilson/awesome-annual-security-reports`.
     - "Generative AI Bill of Materials": bio de Matt Van Itallie, em `madajaju/podcast-guests`.
     - "Comprehensive Codebase Scans": `Alex-lop/venture`.
     - Bain + vibecoding: manchete do FT em briefings de HN, em `yoselabs/insights-trail` e `Turi-Labs/Newsletter-Editor-Agents`.
     - Datasite MCP: `capitalthought/agentsfirst` e `swaylq/master-skill`.
     - Blueflame + Amp: `Mehedi-dev-2404/Stratify`.
     - kroll "cybersecurity-due-diligence": páginas Kroll no mcjuh.
     - "European Due Diligence Report 2026": bios A&M no mcjuh.
     - Hebbia + Matrix: `ballyc/company-brief`, `joanmarcriera/Home-office-automations` e `marius-bughiu/ooligo`.
     - "Digital Footprint Analysis" deloitte: nada da Deloitte.
   - Raw lido via curl: README de `cisco-ai-defense/aibom`, blog Hebbia/Intralinks e OSSRA 2026. Cópias em `v2/research/verifyI1/`.
2. **Relatórios anteriores:** `v2/research/I1_inovacao.md`, `verify_A1_am_global.md`, `B3_Deloitte.md`, `verify_B3_Deloitte.md` e `research/R2_big_four.md`.
3. **WebSearch, 3 de 3 usadas:**
   - (a) DiligenceGPT + Private Equity Chain of Thought;
   - (b) AI Token Economics + "cost per completed task";
   - (c) European Due Diligence Report 2026 + IA.

Limitação: a WebSearch devolve um resumo do buscador, que não é o texto bruto da página. Marquei **confirmed** quando o resumo traz a frase atribuída à página certa (título e URL batem), como no verify_A1. Marquei **partially_confirmed** quando só parte foi vista, quando a fonte é só snippet de relatório anterior ou quando o texto encontrado diverge do item.

## A. Nomes de produto

| # | Item | Veredito | Como | Correção |
|---|---|---|---|---|
| 1 | A&M · A&M DiligenceGPT | confirmed | Bio de Anil Kumar (mcjuh): "Developed and deployed A&M's Generative AI product suite, DiligenceGPT". WebSearch (a): o título do release na URL do item é "ALVAREZ & MARSAL LAUNCHES GENERATIVE AI ACCELERATOR…", e existe a página "/insights/am-diligencegpt-platform-genai-solutions-private-equity". | O release se chama "Generative AI Accelerator"; o produto se chama "A&M DiligenceGPT". |
| 2 | A&M · A&M Data Intelligence Gateway (A&M DIG) | confirmed | PE Services pt-BR (mcjuh), linha 102: "A&M Data Intelligence Gateway (A&M DIG) is a proprietary technology that utilizes the active collection of unstructured government data through open source intelligence (OSINT) and machine learning." | — |
| 3 | A&M · AI-Enabled Zero-Based Optimization (AI-ZBO) | confirmed | Release no mcjuh (source = URL do item), de 30/06/2026: "a new A&M Private Equity Performance Improvement (A&M PEPI) service". | É serviço PEPI, não plataforma. Beetz: "We don't treat AI as a bolt-on or generic platform roll-out". |
| 4 | Datasite · Datasite MCP Server | confirmed | `dl_inov/datasite_connector.md` (claude.com/connectors/datasite): connector `https://mcp.global.datasite.com/mcp`, documentação em `/dev-portal/guides/mcp-server`. `capitalthought/agentsfirst`: "Datasite shipped the first VDR (virtual data room) MCP server". | Não li o corpo do release da GlobeNewswire; o título só aparece no slug da URL. "First VDR provider" é autodeclaração da Datasite. A data diverge: a URL diz 28/04/2026 e o post @DatasiteGlobal citado diz 05/05/2026. |
| 5 | Blueflame AI (Datasite) · Amp | confirmed | `Mehedi-dev-2404/Stratify`: "Blueflame's core product is Amp, an AI agent with 40+ finance-specific skills…"; "Blueflame has been acquired by Datasite". | A fonte é terceira. Não li o release de lançamento ("launches Amp…"). A data de 23/06/2026 do I1 continua sem verificação. |
| 6 | Hebbia · Matrix | confirmed | `ballyc/company-brief`: "Matrix is Hebbia's flagship platform"; `joanmarcriera/...`: "Hebbia Matrix Workspace"; `marius-bughiu/ooligo`: "Una columna de Matrix…". | Fontes de terceiros; não li a página hebbia.com do item. O blog da integração com a Intralinks fala em "Hebbia" e "its AI platform", sem citar "Matrix". O I1 diz "Hebbia conectou o Matrix" e deve passar a dizer "Hebbia integrou a Intralinks". |
| 7 | SS&C Intralinks · DealCentre AI | confirmed | Blog da Hebbia (raw de `kzinmr/ai-topics`, 05.26.26): "Intralinks DealCentre AI, the AI-enabled dealmaking platform built for secure, high-stakes financial transactions". | Citar a fonte primária: hebbia.com/blog/hebbia-integrates-with-ss-and-c-intralinks-to-connect-live-deal-data-to-ai-workflows (em vez de media.inflxd.com). Extra: existe "DealCentre MCP" (blog Intralinks de 24/04/2026, em `api-evangelist/intralinks`). |
| 8 | West Monroe · AI diligence / Hold Period Health Check / Exit Readiness and Sell-Side Advisory / VMO / Intellio® Agent | confirmed | Os cinco nomes aparecem literalmente (mcjuh, `dl_inov`). `ai-services-solutions`: "West Monroe's AI diligence", "Intellio® Agent". `due-diligence-transaction-advisory`: "## Hold Period Health Check", "## Exit Readiness and Sell-Side Advisory", "our Value Management Office (VMO)". | Três nomes não estão na URL do item. Hold Period Health Check, Exit Readiness e VMO ficam em /services/due-diligence-transaction-advisory; citar as duas URLs. |
| 9 | Bain · AI due diligence com réplicas "vibecoded" | confirmed | Manchete do FT "Bain tests software takeover targets by vibecoding AI replicas" (ft.com/content/e5bac4d1-…), espelhada em briefings de HN de 22-24/06/2026 (`yoselabs/insights-trail`, `Turi-Labs/...`). | É prática relatada pela imprensa, não produto com marca. Data: jun/2026. As citações literais do I1 ("hundreds of rough prototypes"…) e a URL da PrivateEquityWire não foram vistas. |
| 10 | Deloitte · Digital Footprint Analysis | partially_confirmed | Só aparece em snippets de relatórios anteriores (R2 #8, B3 D16, I1): "websites, domains, hosted infrastructure, social media activity, leaked credentials…". O search_code não achou espelho Deloitte. Não sobrou WebSearch. | Usar como "Digital Footprint Analysis (Deloitte UK)" com ressalva, ou validar a página antes de citar texto literal. |
| 11 | Kroll · Cyber Due Diligence | partially_confirmed | mcjuh (bios e case Kroll): "[Cybersecurity Due Diligence Services](https://www.kroll.com/en/services/cyber/cybersecurity-due-diligence) Evaluate the cybersecurity risks associated with business transactions." | O nome oficial é **"Cybersecurity Due Diligence Services"**, não "Cyber Due Diligence". O trecho "threat hunting, vulnerability scanning and dark web monitoring" do I1 não foi visto. |
| 12 | Black Duck · Black Duck Audit Services / OSSRA 2026 | confirmed | OSSRA 2026 (raw de `jacobdjwilson/...`): "commercial codebases audited by the Black Duck Audit Services team"; "2026 OSSRA Report"; "Codebases scanned 947"; "M&A transactions represented 197"; "Vulnerabilities per codebase increased 107%"; "Two-thirds of audited codebases contain license conflicts"; "76%… only 54% evaluate it for IP and license risks". | O I1 erra ao dizer que os dados são "primarily in support of M&A transactions". O OSSRA 2026 diz que os codebases foram auditados "for M&A transactions, regulatory compliance, and internal risk assessment". O par 76%/54% vem da pesquisa de supply chain da Black Duck, não das auditorias. |
| 13 | Sema · Comprehensive Codebase Scans / Generative AI Bill of Materials | confirmed | `madajaju/podcast-guests` (bio do CEO): "Sema has developed Comprehensive Codebase Scans…"; "the GenAI Code Monitor and the Generative AI Bill of Materials". `Alex-lop/venture`: "\"Comprehensive Codebase Scans\" + … \"Comprehensive GenAI Bill of Materials\"". | Fontes de terceiros; não li a página semasoftware.com. O termo "inventor" do I1 não foi visto. Nota de terceiro: a Sema teria migrado o foco para "Liz"/"ARIA". |
| 14 | Cisco · AI BOM | confirmed | README raw de cisco-ai-defense/aibom: "Cisco AI BOM scans codebases, container images, and cloud environments to produce an AI Bill of Materials — a structured inventory of models, agents, tools, MCP servers/clients, datasets, prompts, guardrails, secrets…"; "LLM-powered agentic classification". | — |

## B. Claims

| # | Claim | Veredito | Como | Correção |
|---|---|---|---|---|
| 15 | DiligenceGPT: plataforma GenAI própria, movida pelo "Private Equity Chain of Thought", usada em mais de 100 engajamentos | confirmed | WebSearch (a), na URL do release: "launched A&M DiligenceGPT on January 9, 2024, a generative artificial intelligence (GenAI) platform developed by A&M's PEPI group"; "The foundation of A&M's Generative AI solutions is A&M's bespoke Private Equity Chain of Thought framework"; "employed in over 100 engagements within A&M". O search_code não achou espelho. | O número "over 100 engagements" é de jan/2024 (lançamento); apresentar com a data. O framework é "bespoke" e é a base das "Generative AI solutions" da A&M, não só do DiligenceGPT. |
| 16 | Anil Kumar desenvolveu e implantou o DiligenceGPT e lidera AI value creation e readiness | confirmed | Bio (mcjuh): "Managing Director and Generative AI Leader with Alvarez & Marsal's Private Equity Services New York"; "Developed and deployed A&M's Generative AI product suite, DiligenceGPT"; "leading generative AI value creation plans, readiness assessment and implementation planning". | O release NA 2026 o apresenta como "Managing Director, A&M PEPI North America". |
| 17 | AI-ZBO é serviço PEPI que redesenha workflows com IA em 4 fases | confirmed | Release (mcjuh): "redesigning workflows with targeted use of AI"; "delivered through four integrated phases": Profitability Transparency, Clean-Sheet Redesign, Value Sizing & Sequencing e Execute Value Realization. | — (o release traz prazo e percentuais; estão fora do escopo do deck, por pedido do usuário). |
| 18 | A&M DIG é OSINT proprietário com ML, base possível para diligência outside-in | partially_confirmed | "proprietary technology… OSINT and machine learning" é literal (PE Services pt-BR). | "Base possível para outside-in" é inferência. O texto restringe o DIG a "unstructured government data". Estender para pegada digital/cyber/tech do alvo é hipótese a validar internamente. |
| 19 | O guia de token economics da A&M recomenda medir custo por tarefa concluída | partially_confirmed | Título literal em 40 bios A&M (mcjuh): "AI Token Economics: A Practical Guide for Managing AI Spend" (/thought-leadership/ai-token-economics-a-practical-guide-for-managing-ai-spend). A recomendação "cost per completed task instead of cost per API call" só aparece no resumo da WebSearch (b), que parece derivado de um Substack de terceiro (francescomasera), não da página A&M. | Não citar como texto literal da A&M sem ler o guia. O teaser que acompanha o link nas bios ("AI adoption has reached near-universal levels in engineering…") é cópia do teaser de outro paper ("AI in Software Development…"); não usar. Data: ago/2026. |
| 20 | Clientes PE europeus da A&M ampliaram o uso de IA em value creation; a principal barreira é custo e ROI incerto | partially_confirmed | Release de 19/05/2026 (mcjuh): "nearly two thirds of respondents (63%) now use AI as part of their value creation activity, up from 41% in 2025"; "60% of respondents cite high cost and uncertain return on investment as the main obstacle". | Não são "clientes da A&M". São 200 investidores PE e C-levels de portfolio companies de 10 países europeus, pesquisados pela Statista Q "on behalf of Alvarez & Marsal". |
| 21 | Na América do Norte, a maioria espera que a IA aumente o valor do portfólio, mas poucos se veem como líderes | confirmed | Release de 28/05/2026 (mcjuh): "73% expect AI to increase portfolio value over the next 12 months, yet only 8% describe their firm as 'leading'". | Base: 100 investidores PE, operating partners e executivos. |
| 22 | European DD Report 2026: a maioria dos respondentes já usa IA em due diligence | partially_confirmed | A existência do relatório é literal no mcjuh ("European Due Diligence Report 2026", 11/08/2026, "the tools redefining PE due diligence"). Os números vêm só do resumo da WebSearch (c) sobre presseportal/finanzen.net, que é ambíguo: "80% of respondents are already using AI tools" e também "over 80%… using AI regularly… or are currently testing". O uso regular é de 70% nos fundos Tier-1 e 28% no mid-market. | Redigir como "mais de 80% já usam ou testam IA na due diligence". Não afirmar que "a maioria usa regularmente": no mid-market, o uso regular é minoria. |

## Resumo
- confirmed: 16 (itens 1-9, 12-17 e 21).
- partially_confirmed: 6 (itens 10, 11, 18, 19, 20 e 22).
- refuted: 0. unverifiable: 0.
- Refutação parcial embutida: a frase "primarily in support of M&A" (Black Duck, no I1) não está no OSSRA 2026.

## Correções relevantes para o deck
1. Kroll: usar "Cybersecurity Due Diligence Services".
2. Hebbia: a integração é "Hebbia × Intralinks DealCentre AI", sem afirmar "Matrix". Citar o blog da Hebbia (26/05/2026).
3. Black Duck: OSSRA 2026 = 947 codebases e 197 transações de M&A, mas a amostra mistura M&A, compliance e risco interno.
4. DiligenceGPT: "100+ engajamentos" é número de jan/2024. Atribuir o "Private Equity Chain of Thought" às soluções GenAI da A&M como um todo.
5. Pesquisas A&M: são respondentes de survey, não clientes. Uso de IA na DD: "mais de 80% usam ou testam".
6. Token economics: o título é seguro; "custo por tarefa concluída" vira "a confirmar no guia" até a leitura integral.
7. West Monroe: citar /services/due-diligence-transaction-advisory para Hold Period Health Check, Exit Readiness e VMO.
8. A&M DIG como motor outside-in de tecnologia é hipótese. O texto oficial fala em dados governamentais.

## Fontes WebSearch
- [A&M — Generative AI Accelerator (DiligenceGPT)](https://www.alvarezandmarsal.com/insights/alvarez-marsal-launches-generative-ai-accelerator-optimizing-efficiency-and-creating)
- [A&M — The A&M DiligenceGPT Platform](https://www.alvarezandmarsal.com/insights/am-diligencegpt-platform-genai-solutions-private-equity)
- [Francesco Masera — The price per token is half the bill](https://francescomasera.substack.com/p/the-price-per-token-is-half-the-bill)
- [Presseportal — A&M European Due Diligence Report 2026](https://www.presseportal.de/pm/118051/6352594)
- [finanzen.net — OTS A&M European DD Report 2026](https://www.finanzen.net/nachricht/aktien/ots-alvarez-marsal-alvarez-marsal-european-due-diligence-report-2026-15934815)
