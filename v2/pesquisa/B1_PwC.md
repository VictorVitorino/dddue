# B1 — Dossiê de PRODUTOS de M&A da PwC com foco em tecnologia (global e Brasil)

**Data:** 06/10/2026 · **Idioma:** pt-BR · **Autor:** agente B1 (benchmark de produto para o novo deck A&M IT/Tech M&A)
**Orçamento usado:** 20/20 WebSearch + GitHub (espelhos `mcjuh/BT4103-Scrape-and-Tag`, snapshot 2026, e `sql-sith/cdc-results`, httrack de pwc.com/us de 2024, lidos na íntegra via raw.githubusercontent.com).
**Acesso:** pwc.com e r.jina.ai responderam 403 no proxy (1 tentativa cada; não insisti). Firecrawl não usado.
**Escopo respeitado:** nada sobre preço, forma de cobrança, prazo ou timeline de implementação. Números aparecem só como **prova de bastidor**; o deck não deve exibi-los.

**Legenda de evidência**
- `EV-integral` = trecho literal lido na página inteira (espelho GitHub da página oficial). Indico o ano do snapshot.
- `EV-snippet` = trecho devolvido pelo buscador a partir da página nomeada (não aberta). Verifique antes de citar literalmente.
- `HIP` = inferência minha.
- **não encontrado** = procurado e não achado.

Complementa (sem repetir) os dossiês anteriores: `research/R2_big_four.md` (achados 13–24 e 47 sobre PwC), `research/R3_estrategia_accenture.md` (Strategy&), `v2/research/L0_lideres.md` (PwC nº 1 por número de transações).

---

## 1. Resumo

1. **A PwC vende M&A como "plataforma + alianças + volume".** O discurso de 2024 era "The Complete Deal" e "Digital Deals Experience": tudo em torno do **Junction**, o hub digital do cliente. Em 2025–2026 isso virou uma pilha de IA montada com parceiros nomeados: **Harvey** (leitura de data room e red flags, licenciada ao cliente como "Harvey, powered by PwC"), **ToltIQ** (DD de private markets, com exclusividade entre as Big Four), **Palantir Foundry/AIP** (o "AI-native deals platform", lançado em 03/09/2026) e LLMs **Google e Microsoft Azure** (app de separação de TI). (EV)
2. **O portfólio de tecnologia em M&A tem nomes claros, mas variam por país.** Nos EUA: "AI and Technology Diligence" (dentro de "Deals Strategy and Value Creation"), "M&A technology", "Divestitures & Separations", "Integrations". Na Suíça: "Technology and IT M&A". Na Bélgica: "Technology due diligence". Na Áustria: "IT Due Diligence". No Reino Unido: cyber em M&A com "dedicated cyber deals team". (EV)
3. **A promessa central é velocidade com rastreabilidade.** As frases recorrentes são "deal speed", "red flags" logo após a abertura do data room, "citation-backed insights", "secure AI environment", "AI-powered playbooks" e "digital command center". (EV)
4. **Separação/carve-out é onde a PwC mais "produtizou" a IA.** Tem app de IA para planejamento de separação de aplicações, playbooks de IA para desembaraço funcional e o Junction como "digital command center" com visão viva da separação. Também tem tecnologia proprietária para demonstrações financeiras carve-out e IA no "Step Plan". (EV)
5. **Na diligência, a PwC trouxe a IA para o objeto do deal.** A "AI and technology due diligence" avalia maturidade de IA, stack de produto ("modularity, AI extensibility, and data architecture") e capacidade de execução. A tese "acceleration vs. erosion of value" mede se a IA acelera ou corrói o valor do alvo. (EV)
6. **Integração mantém a metodologia de marca "The Accelerated Transition®"** (snapshot 2024), com IMO, plano Dia 1 e "AI-enabled post-merger integration". A pesquisa 2026 M&A Integration Survey é a prova de mercado. (EV)
7. **Brasil é o ponto fraco da PwC em tech M&A.** O pwc.com.br tem "Assessoria em Transações", "Serviços para transações" e "Estratégia de M&A e captura do valor da transação" (integração, carve-outs, plano de Dia 1 a Dia 100). DD de TI aparece só como menção em "Tecnologia da informação". Não achei página pt-BR de Tech/AI DD nem anúncio local de Harvey, ToltIQ ou Palantir em deals. (EV + **não encontrado**)
8. **Leitura para a A&M (HIP).** A PwC compete por escala, plataforma e ecossistema de IA. A brecha está em execução operacional com dono (operadores que assumem o Dia 1, a TSA e o Value Creation), em profundidade técnica de produto/código e em presença local em português. Também há espaço para uma camada de IA própria, ancorada em ativos que a A&M já tem (A&M DIG, Global Transaction Analytics, Generative AI group de PE).

---

## 2. Mapa de produtos (tabela)

| # | Produto (nome exato) | País/escopo | Problema do cliente | O que entrega / estrutura | Tecnologia / IA | Resultado prometido (qualitativo; número = bastidor) | Fonte (data) | Evid. |
|---|---|---|---|---|---|---|---|---|
| P1 | **AI and Technology Diligence** (capacidade de "Deals Strategy and Value Creation") | EUA | Entender o valor e o risco de IA, produto e TI do alvo, além do que a DD padrão vê | "deal-focused evaluation of AI, product technology, and IT systems"; "AI maturity and readiness benchmarking, evaluating strategy, talent, technology, governance, and data foundations"; "Deep-dive evaluations of product tech stacks for modularity, AI extensibility, and data architecture" | "proven frameworks built from hundreds of engagements"; benchmarks de pares | "uncover insights that standard due diligence overlooks"; "judge strategic fit, size the business impact, and test management's ability to execute"; "Capture the value of AI—quickly and responsibly" | pwc.com/us/.../strategy-value-creation/ai-technology-diligence.html (2025–26); pwc.com/us/.../portfolio-company-value-creation.html (snapshot 2026) | EV-snippet + EV-integral |
| P2 | **Deals Strategy and Value Creation** (guarda-chuva: Commercial Diligence; Operations and Analytics Diligence; AI and Technology Diligence; Contract Analytics; ESG Due Diligence) | EUA | Decidir investir, crescer ou vender com plano antes e depois do fechamento | "integrated diligence and value creation capabilities"; "build actionable plans before close and execute them post-close"; GTM, pricing, new market entry | "powered by data, analytics, and AI" | Tagline: "Faster market entry, stronger cash flow, improved deal value". Bastidor: "25% EBITDA uplift" (caso consumo), "50-70% incremental EBITDA improvement opportunities identified" (caso PE) | pwc.com/us/en/services/consulting/deals/portfolio-company-value-creation.html (snapshot 2026) | EV-integral |
| P3 | **Contract Analytics** | EUA | Riscos e sinergias espalhados na base de contratos | "collecting and analyzing contracts to identify risks, drive synergies across customer and supplier landscapes and support business continuity at close" | Análise de contratos (o ToltIQ cobre "full contract population") | "surface value and risk across the contract base" | idem P2; release ToltIQ (15/06/2026) | EV-integral + EV-snippet |
| P4 | **M&A technology** | EUA | TI como gargalo do deal, do diligence ao TSA exit | "technology-first lens, from diligence to integration, separation, and post-close stabilization, ensuring Day 1 readiness through TSA exit"; TSA Management ("defining and managing TSAs, renegotiating contracts and implementing tailored roadmaps") | Junction; "AI-powered playbooks" | "fast-track functional disentanglement across IT, finance, HR, supply chain". Bastidor: separação "up to 35%" menor, "TSA exits 6–12 months earlier" | pwc.com/us/en/services/consulting/deals/technology-mergers-and-acquisitions.html (2026) | EV-snippet |
| P5 | **Divestitures & Separations** | EUA | Vender, cindir ou fazer spin-off sem vazar valor | 2024: workstreams Structuring; Strategy; Separation and TSAs; Carve-out financial statements; Org design and communications; Business diligence; Transition management office; Transformation and stand up. Componentes: "Divestiture Management Office (DMO)", "Transition operating model design", "Stranded and separation costs", "Contract separation", "Day One readiness and functional separation", "Legal entity separation", TSAs, "Parent optimization" | "human insight, AI-driven playbooks, and their digital hub, Junction"; "PwC has proprietary technology to automate" carve-out financials; "pre-defined future state IT architectures" | "turn divestitures into strategic growth engines"; "emerge stronger, leaner and grow". Bastidor: Junction "20-30% better milestone adherence and 50% fewer delays"; IA "4x faster with over 90% accuracy"; 2024: "We lead more than 650 divestitures annually" | pwc.com/us/.../divestitures-separations.html (2026); httrack 2024 de /deals/divestitures.html | EV-snippet + EV-integral (2024) |
| P6 | **IT separation** (componente de P5) + **AI-powered IT separation planning for deal execution** (app) | EUA | "IT is the most complex area for many divestitures" | App: "turn complex IT separation data into structured planning outputs"; foco inicial "application-level separation planning", expansão para "infrastructure and cyber" | LLMs "from Google and Microsoft Azure"; desenhado para casos de separação de TI | Bastidor: "complete key tasks 4x faster with over 90% accuracy" | pwc.com/us/en/tech-effect/innovation/ai-powered-it-separation-for-deals.html (2025); httrack 2024 | EV-snippet + EV-integral (2024) |
| P7 | **Integrations** / **M&A Integration** com a metodologia **The Accelerated Transition®** | EUA | Capturar sinergias e manter o negócio rodando | IMO (planning, readiness, execution); plano pré-fechamento a partir da DD; compêndio de 17 frentes, entre elas "Information technology integration", "Integration management office", "Capturing synergies to deliver deal value" e "Seven fundamental tenets of successful integration" | "AI-enabled post-merger integration to align systems, processes, and teams"; Junction "across integration workstreams—from finance and IT to change management and workforce planning" | "Confident integration that delivers deal value"; "realize deal value faster and reduce friction across functions" | pwc.com/us/.../acquisitions-integrations/integrations.html (2026); httrack 2024 de /acquisitions/merger-acquisition-integration.html | EV-snippet + EV-integral (2024) |
| P8 | **Junction** (plataforma) | EUA, Reino Unido, Alemanha | Fragmentação de informação e comunicação no deal | "Data-fueled, digital M&A deal platform, connecting your team with ours in real time"; "central, cloud-based platform"; cenários interativos; comunicação com o time PwC; achados em andamento visíveis | Cloud; visualização; criado no "PwC Digital Labs" | "Junction. Insight driven. Tech accelerated."; "single source of truth for deal parties" (ALM 2021); IDC Spotlight 2022; TBR 2021 | httrack 2024 de /digital-deals/junction.html; pwc.co.uk e pwc.de/en/deals/junction.html (s.d.) | EV-integral (2024) + EV-snippet |
| P9 | **Harvey, powered by PwC** / **Harvey for M&A** (PwC Store Bélgica) | Global; Reino Unido; Bélgica; Austrália | Revisão manual de VDR lenta e pouco repetível | Leitura e interrogação de VDR no "Harvey Vault"; relatórios iniciais de DD com red flags; workflows co-desenvolvidos; licenciado a clientes | Harvey (LLM jurídico/deals); "AI customised models trained on the essence of deal making" (UK, 2023) | "get to an informed perspective in an hour" (antes, um dia); "citation-backed insights"; "secure AI environment". Bastidor: workflow ">10,000 times" | pwc.com/gx press release 31/07/2025; pwc.co.uk press release (dez/2023); harvey.ai/blog (2025–26); store.pwc.be/en/solutions/harvey-by-pwc | EV-snippet |
| P10 | **ToltIQ** (relação estratégica; PwC "sole professional services advisor") | EUA/global | DD de private markets limitada pelo tempo (só contratos materiais) | Cobertura de toda a população de contratos na DD comercial; PwC ajuda PE, corporates, LPs e family offices a "adopting and responsibly governing" o ToltIQ; co-desenvolvimento de infraestrutura | ToltIQ | "extending AI support beyond initial due diligence to more interconnected and autonomous deal processes". Bastidor: ">4,000 PwC Deals practitioners on 5,000+ deals", ">2 million documents" | pwc.com/us/.../reimagining-deals-for-the-age-of-ai.html; toltiq.com/newsroom (15/06/2026) | EV-snippet |
| P11 | **AI-native deals platform** (PwC + Palantir) | EUA | Custo e lentidão de M&A, integração e separação | Plataforma para "mergers, acquisitions and divestitures"; alcance de deal execution, integração e separação | Palantir Foundry + AIP | "industry's first AI-native deals platform". Bastidor: "up to 50% faster", custos one-time "up to 45%" menores | PwC US newsroom (03/09/2026); stocktitan; theconsultingreport | EV-snippet |
| P12 | **Cyber due diligence** ("dedicated cyber deals team", UK) | Reino Unido, EUA, Oriente Médio | Passivos cibernéticos ocultos no alvo | Avaliação de riscos, passivos e custo de remediação; "threat exposure and attack surface analysis"; abordagem baseada em risco sobre atores de ameaça | Análise de superfície de ataque externa | "key inputs to support negotiation"; "maximize value at each stage of the deal lifecycle" | pwc.co.uk/.../mergers-and-acquisitions.html; pwc.com/us/.../understanding-cyber-due-diligence.html | EV-snippet |
| P13 | **Technology and IT M&A** (technology due diligence, vendor assistance, IT integration, IT separation) | Suíça | TI na transação, de comprador e de vendedor | IT DD em 6 dimensões: estratégia/organização, sistemas, infraestrutura, segurança/resiliência, criação de valor, complexidade de separação/integração | — | — | pwc.ch (s.d.) — ver R2 #15 | EV-snippet |
| P14 | **Technology due diligence**: "red-flag analysis" vs "full-scope due diligence" | Bélgica | Profundidade proporcional à complexidade | Dois formatos | — | — | pwc.be (s.d.) — ver R2 #13 | EV-snippet |
| P15 | **IT Due Diligence** | Áustria | Visibilidade da pegada de TI | "a deep dive into an organisation's IT footprint" | — | — | pwc.at/en/it-due-diligence.html (s.d.) | EV-snippet |
| P16 | **Deal Analytics** | Singapura (e EUA) | Teses de deal sem base de dados | Analytics no ciclo inteiro (preparação para venda, sell-side, buy-side, value creation pós-deal, IPO); técnicas: cohort, market basket, geoespacial, cenários, market mix, CLV | "Alteryx and Tableau"; "Common Data Model (CDM)" (EUA 2024) | "Tech-powered value creation through the deal lifecycle" | pwc.com/sg/.../deal-analytics.html (snapshot 2026) | EV-integral |
| P17 | **Merger and Acquisitions Operations** | Singapura | Riscos e sinergias operacionais e de TI | Pré-deal: "Functional due diligence report across finance and control, human resources, operations and technology"; "Synergy assessment and business case modelling"; "Carve out readiness and/ or integration day one strategy". Pós-deal: "Day one operating model and value creation plan"; "Post-merger integration/ separation project management office" | — | "identify, quantify, and deliver full deal value, with greater speed, insight, and confidence"; caso "Project Protect" (carve-out e TSA de negócio de cibersegurança) | pwc.com/sg/.../merger-and-acquisitions-operations.html (snapshot 2026) | EV-integral |
| P18 | **People in Deals** (LTO; HR due diligence; HR pre-close; HR post close) | Global | Pessoas, cultura e organização como risco de valor | LTO DD para PE; HR DD com ajustes de QoE/QoA; pós-fechamento inclui "HR technology" e "smooth Day One" | — | "Delivering deal value through people". Bastidor: "more than 7,500 people in 117 countries" | pwc.com/gx/en/services/workforce/people-in-deals.html (snapshot 2026) | EV-integral |
| P19 | **Exit readiness** / sell-side diligence | Reino Unido / EUA | Compradores querem evidência testável | Equity story + "trusted deal model"; "data cubes"; sell-side diligence com QoE e "standalone cost structures" | Dados preparados cedo | "sustainability, technology, AI and cyber security now playing a bigger role in buyer confidence and value" | pwc.co.uk/private-equity/assets/exit-readiness.pdf (set/2026); pwc.com/us divestitures | EV-snippet |
| P20 | **Data and AI for PE portcos** ("5 data-driven trends to unlock PE portcos' AI-enabled potential") | EUA | Portcos de middle market com sistemas fragmentados e dados ruins | "phased, repeatable approach"; base "AI-ready" para crescimento e exit | Dados + IA | "grow margins, revenue and exit value" | pwc.com/us/en/industries/financial-services/private-equity/data-ai-pe-portcos.html (2026) | EV-snippet |
| P21 | **PwC One** (plataforma de agentes) | EUA | Trabalho de consultoria repetitivo | Cliente descreve o problema; "autonomous agents perform the work" com revisão de profissionais PwC; casos incluem "early-stage financial due diligence" | Agentes autônomos | — | thenewstack.io (s.d., 2026) | EV-snippet (secundária) |
| P22 | **AI Step Plan** ("PwC Deals reimagines Step Plan operationalization with AI") | EUA | Reestruturação societária/fiscal na separação | Operacionalização do step plan com IA | IA | conteúdo **não obtido** (só o título) | pwc.com/us/en/tech-effect/innovation/ai-step-plan.html | EV-snippet (título) |

**Marcas "guarda-chuva" da oferta (como a PwC embala):**
- "The Complete Deal" (2024): "an insights-driven approach, a transparent and connected experience, and digitally-enabled deals specialists".
- "Digital Deals Experience" (2024): pilares Talent / Experience / Insights. Plataformas: Junction, Generative AI, Digital Lab, Deal Analytics, Data and benchmarking, Alliances.
- "PwC's One Deals Advisory" e "The One Deals journey" (Singapura).
- "AI-powered deals" (seção atual em pwc.com/us/en/services/consulting/deals/ai-powered-deals/…).
- Licenciamento como produto: "Harvey, powered by PwC … licensed to clients" e "Harvey for M&A" na PwC Store da Bélgica.

---

## 3. Tecnologia e IA

### 3.1 Pilha de tecnologia declarada
| Camada | Nome | Papel | Data | Evid. |
|---|---|---|---|---|
| Hub do cliente | **Junction** | Plataforma em nuvem do deal; cenários; comunicação; "digital command center" na separação; "AI and automation across integration workstreams" | desde 2021; ativo em 2026 | EV-integral (2024) + EV-snippet (2026) |
| Leitura de documentos / VDR | **Harvey** (Harvey Vault) | Red flags, relatórios iniciais de DD, perguntas ao data room com citação | aliança UK dez/2023; global jul/2025 | EV-snippet |
| DD de private markets | **ToltIQ** | Cobertura de toda a população de contratos; adoção e governança no cliente | 15/06/2026 | EV-snippet |
| Plataforma de dados do deal | **Palantir Foundry + AIP** | "AI-native deals platform" para M&A, integração e separação | 03/09/2026 (PwC UK–Palantir já eram "preferred partners", 18/11/2025) | EV-snippet |
| LLMs | **Google** e **Microsoft Azure** | App de planejamento de separação de TI | 2025 | EV-snippet |
| Agentes | **PwC One**; ecossistema de agentes com **Google Cloud**; "coding agents to accelerate analysis"; co-criação de "deal agents" com clientes | Execução autônoma com revisão humana | 2025–2026 | EV-snippet |
| Analytics | **Alteryx**, **Tableau**; "Common Data Model (CDM)"; "Over 700 deployable deals assets" (2024) | Analytics de deal, benchmarks | 2024–2026 | EV-integral |
| Ativos proprietários | Tecnologia para "carve-out financial statements"; "pre-defined future state IT architectures"; "AI-driven playbooks"; "AI Step Plan" | Separação | 2024–2026 | EV-integral (2024) + EV-snippet |

### 3.2 Papel da IA, em quatro usos
1. **IA como acelerador do trabalho de DD.** Harvey e ToltIQ leem VDR e contratos, citam a fonte e geram o primeiro rascunho. Mensagem: "move beyond checklist-driven diligence toward faster, more judgment-led conversations" (PwC Austrália, blog Harvey). (EV-snippet)
2. **IA como objeto da diligência.** AI and Technology Diligence avalia a maturidade de IA e o stack de produto. A tese "AI in deals, acceleration vs. erosion of value" usa quatro determinantes: "proprietary advantages", "pricing power", "competitive position", "execution capability". Recomendação: "model acceleration through growth assumptions and erosion through margin pressure". (EV-snippet)
3. **IA na execução da separação e integração.** "AI-powered playbooks" e o app de separação de TI no nível de aplicação, com expansão para infraestrutura e cyber. No Junction, "AI and automation across integration workstreams". (EV-snippet)
4. **IA como produto para o cliente.** Licença Harvey, adoção do ToltIQ pelo cliente, plataforma Palantir e co-criação de "their own deal agents". Visão: "The tipping point for AI in deals will come when AI agents are trusted to exercise judgement at key stages" (atribuição provável: Global M&A Trends 2026 mid-year). (EV-snippet; atribuição de URL a confirmar)

### 3.3 Mensagem de mercado que a PwC usa para criar demanda (prova de bastidor)
- "Dealmakers should make AI due diligence a core part of every deal" (Global M&A Trends 2026 mid-year; ver R2 #21). (EV-snippet)
- PE 2026: "AI is simultaneously disrupting legacy software assets and unlocking new value creation levers across the portfolio"; "they are proving value creation, not simply claiming it"; "SaaS-pocalypse" citado como cenário de credores privados. (EV-integral, snapshot 2026)
- 2026 M&A Integration Survey (n=530): sinergias "real and auditable" 27% vs 62% (ver R2 #20). (EV-snippet)

---

## 4. Mensagens de venda literais (para inspirar o tom, não para copiar)

| Tema | Frase literal | Fonte | Evid. |
|---|---|---|---|
| Velocidade | "Move at deal speed with integrated diligence and value creation capabilities." | PwC US, Deals Strategy and Value Creation (snapshot 2026) | EV-integral |
| Promessa | "Faster market entry, stronger cash flow, improved deal value" | idem | EV-integral |
| IA | "Capture the value of AI—quickly and responsibly." | idem (AI and Technology Diligence) | EV-integral |
| Tech DD | "uncover insights that standard due diligence overlooks" | PwC US, AI and technology due diligence | EV-snippet |
| Tech-first | "technology-first lens, from diligence to integration, separation, and post-close stabilization, ensuring Day 1 readiness through TSA exit" | PwC US, M&A technology | EV-snippet |
| Separação | "fuses human insight, AI-driven playbooks, and their digital hub, Junction, to turn divestitures into strategic growth engines" | PwC US, Divestitures & Separations | EV-snippet |
| Separação | "so both parent company and divesting company can emerge stronger, leaner and grow" | idem | EV-snippet |
| TI na separação | "IT is the most complex area for many divestitures and its success is critical to getting the deal done." | PwC US Divestitures (snapshot 2024) | EV-integral |
| Integração | "Confident integration that delivers deal value" | PwC US M&A Integration (snapshot 2024) | EV-integral |
| Plataforma | "Junction. Insight driven. Tech accelerated." | PwC US Junction (snapshot 2024) | EV-integral |
| Plataforma | "Data-fueled, digital M&A deal platform, connecting your team with ours in real time" | idem | EV-integral |
| Digital | "At PwC, digital is not about tools. What differentiates us is our people…" | PwC US Digital Deals Experience (snapshot 2024) | EV-integral |
| DD | "tech-enabled human thinking. One that transforms assumptions into facts." | PwC US Due diligence (snapshot 2024) | EV-integral |
| Analytics | "Tech-powered value creation through the deal lifecycle" | PwC SG Deal Analytics (snapshot 2026) | EV-integral |
| Ops M&A | "identify, quantify, and deliver full deal value, with greater speed, insight, and confidence" | PwC SG M&A Operations (snapshot 2026) | EV-integral |
| Pessoas | "Delivering deal value through people" | PwC Global People in Deals (snapshot 2026) | EV-integral |
| IA no deal | "get to an informed perspective in an hour" | Harvey blog sobre PwC Deals | EV-snippet |
| IA no deal | "conviction-led advice grounded in comprehensive, citation-backed insights" | Harvey blog sobre PwC Deals | EV-snippet |
| Plataforma IA | "industry's first AI-native deals platform" | PwC + Palantir (03/09/2026) | EV-snippet |
| Exit | "buyers increasingly wanting evidence they can test" | PwC UK Exit readiness (set/2026) | EV-snippet |
| PE | "The firms winning today aren't waiting for markets to normalize. They're creating their own exit opportunities through value creation, operational transformation and AI enablement." | PwC US PE Deals 2026 midyear outlook | EV-integral |

**Padrão de linguagem (HIP):** verbos de velocidade e confiança ("move at deal speed", "confident decisions"), substantivos de plataforma ("hub", "command center", "single source of truth") e prova por escala ("thousands of deals", "hundreds of engagements"). Quase não há promessa de execução com dono, como "nós assumimos o Dia 1" ou "operamos a TSA".

---

## 5. Brasil

| Item | Achado | Fonte | Evid. |
|---|---|---|---|
| Linha de serviço | "Assessoria em Transações": fusões, aquisições, desinvestimentos e reestruturações | https://www.pwc.com.br/pt/assessoria-transacoes.html | EV-snippet (resumo do buscador traduzido) |
| Integração/carve-out | Página "Estratégia de M&A e captura do valor da transação": integração de M&A e "desinvestimentos e cisões (carve-outs)"; "acelerar a transição e obter integrações rápidas que realizam plenamente as sinergias desejadas"; "planos robustos de sinergia de receita e custos"; plano "de Dia 1 a Dia 100 da integração"; "sinergias não capturadas ou atrasos na integração podem comprometer a tese de investimento" | https://www.pwc.com.br/pt/assessoria-transacoes/estrategia-de-ma-e-captura-do-valor-do-deal.html | EV-snippet (PT) |
| DD | "Serviços para transações": "combinação inigualável de insights para todos os tipos de transações", nas áreas "financeira, comercial e operacional"; DD financeira, operacional e de TI antes da transação | https://www.pwc.com.br/pt/assessoria-transacoes/transaction-services.html | EV-snippet |
| TI em M&A | Só menção: "atividades relacionadas a processos de investigação (due diligence) de TI referentes a fusões e aquisições" | https://www.pwc.com.br/pt/consultoria-negocios/tecnologia-da-informacao.html (ver R2 #23) | EV-snippet |
| Strategy& Brasil | "Transformação através de fusões e aquisições"; "Soluções únicas"; PwC BR "Estratégia em fusões e aquisições" | strategyand.pwc.com/br/pt/…; pwc.com.br/pt/consultoria-negocios/estrategia-fusoes-aquisicoes.html | EV-snippet (títulos) |
| Pesquisa de mercado | Série "Fusões e Aquisições no Brasil" (contagem mensal, setor de tecnologia como nº 1) — ver R1/X1 | forbes.com.br (out/2025) etc. | EV-snippet |
| IA em deals no Brasil | Não achei página ou anúncio local de Harvey, ToltIQ, Palantir, Junction ou "AI and technology due diligence" em pt-BR. A notícia brasileira sobre Harvey (Bloomberg Línea, 18/03/2023) trata da área jurídica global, não de deals no Brasil | bloomberglinea.com.br/2023/03/18/… | **não encontrado** (para deals BR) |
| Página pt-BR de Tech/AI/Cyber DD | **não encontrado** | — | — |

**Leitura (HIP):** no Brasil, a PwC vende transação como pacote financeiro, contábil e de estratégia (Strategy&), com integração e carve-out descritos em linguagem genérica. A camada de tecnologia e IA aparece forte em inglês, nos sites dos EUA, Reino Unido e global, mas não foi localizada. Para um comprador brasileiro de tech DD, a PwC sinaliza capacidade global e não um produto local com nome.

---

## 6. Pontos fortes e lacunas

**Pontos fortes (EV, salvo indicação)**
1. **Escala e liderança de volume.** É nº 1 por número de transações assessoradas (Mergermarket FY25, 1H26 e 9M26; ver L0). Afirmou em 2024 "over 7,500 deals a year" e "more than 650 divestitures annually".
2. **Ecossistema de IA com marcas fortes e exclusividades:** Harvey (co-desenvolvido e licenciado), ToltIQ (exclusiva entre as Big Four) e Palantir (plataforma "AI-native"). Também reúne Google, Azure e agentes.
3. **Hub do cliente maduro (Junction)**, com citações de analistas (IDC 2022, TBR 2021) e uso em separação e integração.
4. **Separação e carve-out "produtizados"**, com DMO, TSA, carve-out financials com tecnologia proprietária, app de separação de TI, playbooks de IA e Step Plan com IA. Une Tax, Legal e Assurance no mesmo deal.
5. **Narrativa de IA no objeto do deal**: AI DD e a lente "acceleration vs. erosion of value", que conversa com o medo do "SaaS-pocalypse" em PE de software.
6. **Métricas de velocidade e custo publicadas** (bastidor): 4x/90%, até 50% mais rápido, -45% em custos one-time, 20–30% melhor aderência a marcos.

**Lacunas e vulnerabilidades (HIP, salvo indicação)**
1. **Brasil raso em tech M&A.** Não há produto nomeado em pt-BR de Tech, AI ou Cyber DD, nem de IT separation ou TSA (EV: não encontrado).
2. **Dependência de terceiros.** O diferencial de IA é, em boa parte, de parceiros (Harvey, ToltIQ, Palantir) a que o mercado também tem acesso direto. A ToltIQ, por exemplo, é vendida a PEs. Isso tende a comoditizar a "IA de DD".
3. **Nomenclatura fragmentada por país** (AI and Technology Diligence, Technology and IT M&A, Technology due diligence, IT Due Diligence). Não há uma suíte global única de Tech M&A com marca, como as "Edge" da EY ou o "M&A Platform" da Deloitte.
4. **Promessa centrada em velocidade, ferramenta e escala, menos em execução com dono.** Por exemplo, operadores interinos, CIO interino ou responsabilidade pelo Value Creation Plan. A frase "digital is not about tools" tenta corrigir isso, mas o discurso continua dominado por plataforma.
5. **Profundidade técnica de produto e código pouco visível.** Não achei parceria declarada de análise de código (CAST, Black Duck/Synopsys, Sigrid etc.) em tech DD da PwC (**não encontrado**).
6. **Poucos cases públicos de Tech DD ou IT separation com cliente nomeado** em 2025–2026. Exceções: "GE split: Deals Transformation & Innovation" (EV-integral, título e lead) e "Breadth and Depth at Speed: How IFS and PwC Transform M&A with Harvey" (EV-snippet, só o título).

**O que a diferencia das outras duas líderes (EY e Deloitte) (HIP sobre EV de R2/L0)**
| Dimensão | PwC | EY (EY-Parthenon) | Deloitte |
|---|---|---|---|
| Modelo de plataforma | Hub do cliente (Junction) + **alianças best-of-breed** (Harvey, ToltIQ, Palantir) | Plataformas proprietárias **"Edge"** (Diligence Edge, Capital Edge, Competitive Edge) com Microsoft/OpenAI | **"M&A Platform"** proprietária via Ascend, com "agentic harness" |
| Licença ao cliente | Sim ("Harvey, powered by PwC"; adoção ToltIQ; Palantir) | Plataforma usada com o cliente | Plataforma usada nos engajamentos |
| Tech DD nomeada | AI and Technology Diligence (EUA) + variações por país | AI, IT, Product & Technology, Cyber DD | Technology DD, Cyber, AI DD, Digital Footprint Analysis |
| Separação/TSA | Mais "produtizada" (app de TI, playbooks, Step Plan com IA) | Capital Edge (TSA) | Divestiture Readiness SelfAssess™ |
| Brasil | Fraca em tech | Média (traduções) | Forte (página "IT M&A" e "Due Diligence de TI" em PT) |

---

## 7. Implicações para a A&M (HIP — insumo para os slides de produto, sem números)

1. **Não competir em "plataforma genérica de IA".** A PwC já ocupa o lugar de "ecossistema de IA licenciado". A A&M deve vender **IA a serviço de um operador que assume o resultado**: "nós lemos o data room com IA e assumimos o Dia 1". A mensagem contrasta com o "digital is not about tools" da PwC, que soa defensivo.
2. **Dar marca única à suíte de Tech M&A em português**, onde a PwC é rasa. Proposta de famílias: *Tech & AI Diligence* (buy-side e sell-side), *Separation & TSA Command*, *Integration Command (IMO de TI)* e *Tech Value Creation*. Cada produto deve ter nome, problema, entrega e tecnologia em uma linha. Os nomes oficiais que a A&M já tem devem ser mantidos e citados: "IT Due Diligence", "Software Product and Technology Diligence", "Merger Integration & Carve-Out", "A&M Data Intelligence Gateway (A&M DIG)", "A&M Global Transaction Analytics" e o grupo "Generative AI" de PE.
3. **Adotar a lente "IA acelera ou corrói o valor do alvo"** como produto próprio (AI DD + dívida técnica + exposição a "SaaS-pocalypse"). A PwC prova a demanda, e a A&M pode entregar com profundidade técnica de produto e código, área em que a PwC não mostra parceria pública.
4. **Separação e TSA são o campo de batalha de IA da PwC.** A resposta da A&M deve ser um "entanglement map" vivo, com classificação assistida por IA e dono da execução da TSA até a saída. Promessa qualitativa: "sair da TSA com o negócio rodando", sem prazo no slide.
5. **Hub do cliente:** a A&M precisa de um equivalente ao Junction, ou seja, uma sala de comando do deal com riscos, sinergias e marcos visíveis ao cliente. O DIG e o Global Transaction Analytics podem ser a base narrativa (HIP: verificar com o time A&M o que é demonstrável).
6. **Cyber DD e Exit/Sell-side Tech Readiness como produtos nomeados.** A PwC tem "cyber deals team" e "exit readiness" com "evidence they can test". A A&M pode empacotar o "Tech Vendor Readiness" (evidência testável para o comprador), na linha do IT Due Diligence Sell Side que já está no deck v7.
7. **Remover do deck atual o que soa genérico ou antiquado frente à PwC**, como "Importância da TI em M&A" e o texto institucional longo. O mercado já parte dessa premissa; a PwC fala de IA, de plataforma e da TI como "the most complex area". O espaço deve ir para produtos, para a lente de IA e para a prova operacional (DNA de implementação e turnaround).
8. **Usar a PwC como referência de escala, não de proximidade (HIP).** No Brasil, a mensagem "Big Four = volume e ferramenta; A&M = operador sênior que executa" tem respaldo na ausência de produto tech da PwC em pt-BR.

---

## 8. Lista de achados com fonte (para verificação)

| # | Achado | Tipo | URL | Data | Trecho literal |
|---|---|---|---|---|---|
| 1 | Capacidades de "Deals Strategy and Value Creation" (5) | evidence | https://www.pwc.com/us/en/services/consulting/deals/portfolio-company-value-creation.html | snapshot 2026 | "1. Commercial Diligence 2. Operations and Analytics Diligence 3. AI and Technology Diligence 4. Contract Analytics 5. ESG Due Diligence" |
| 2 | AI and Technology Diligence — proposta | evidence | idem | snapshot 2026 | "Capture the value of AI—quickly and responsibly. … proven frameworks built from hundreds of engagements." |
| 3 | AI & tech DD — dimensões | evidence | https://www.pwc.com/us/en/services/consulting/deals/strategy-value-creation/ai-technology-diligence.html | 2025–26 | "AI maturity and readiness benchmarking, evaluating strategy, talent, technology, governance, and data foundations"; "product tech stacks for modularity, AI extensibility, and data architecture" |
| 4 | M&A technology — tech-first até TSA exit | evidence | https://www.pwc.com/us/en/services/consulting/deals/technology-mergers-and-acquisitions.html | 2026 | "technology-first lens, from diligence to integration, separation, and post-close stabilization, ensuring Day 1 readiness through TSA exit" |
| 5 | Divestitures & Separations — IA + Junction | evidence | https://www.pwc.com/us/en/services/consulting/deals/divestitures-separations.html | 2026 | "fuses human insight, AI-driven playbooks, and their digital hub, Junction"; "digital command center"; "20-30% better milestone adherence and 50% fewer delays"; "4x faster with over 90% accuracy"; "up to 35%"; "TSA exits 6–12 months earlier" |
| 6 | Divestitures — workstreams e IT separation | evidence | https://github.com/sql-sith/cdc-results (httrack de pwc.com/us/en/services/consulting/deals/divestitures.html) | snapshot 2024 | "IT is the most complex area for many divestitures"; "pre-defined future state IT architectures"; "PwC has proprietary technology to automate this process" |
| 7 | App de IA para separação de TI | evidence | https://www.pwc.com/us/en/tech-effect/innovation/ai-powered-it-separation-for-deals.html | 2025 | "turn complex IT separation data into structured planning outputs"; "application-level separation planning"; "infrastructure and cyber"; "Google and Microsoft Azure" |
| 8 | Integração — The Accelerated Transition® | evidence | httrack de pwc.com/us/.../acquisitions/merger-acquisition-integration.html | snapshot 2024 | "At PwC, The Accelerated Transition® helps our clients by providing deep deal and sector experience, our proven integration methodology and an agile approach to digital solutions" |
| 9 | Integrations — IA na PMI | evidence | https://www.pwc.com/us/en/services/consulting/deals/acquisitions-integrations/integrations.html | 2026 | "AI-enabled post-merger integration to align systems, processes, and teams to realize deal value faster" |
| 10 | Junction — definição e analistas | evidence | httrack de pwc.com/us/.../digital-deals/junction.html; https://www.pwc.com/us/en/services/consulting/deals/ai-powered-deals/junction.html | 2024; 2026 | "Data-fueled, digital M&A deal platform, connecting your team with ours in real time"; "Junction. Insight driven. Tech accelerated." |
| 11 | Digital Deals Experience — ativos | evidence | httrack de pwc.com/us/.../digital-deals.html | snapshot 2024 | "Over 25,000 global digital deals professionals"; "Over 700 deployable deals assets"; "Common Data Model (CDM)" |
| 12 | Harvey UK 2023 — modelos de deal licenciáveis | evidence | https://www.pwc.co.uk/press-room/press-releases/corporate-news/pwc-uk-deals-practice-extends-alliance-with-harvey-gen-ai-platform-ma-market.html | dez/2023 | "AI customised models trained on the essence of deal making … launched to licence to the market"; "first target for development will be due diligence" |
| 13 | Harvey — prova de uso | evidence | https://www.harvey.ai/blog/how-pwc-deals-team-is-redefining-due-diligence-with-ai | 2025–26 | "get to an informed perspective in an hour"; "citation-backed insights"; "secure AI environment" |
| 14 | Harvey for M&A na PwC Store | evidence | https://store.pwc.be/en/solutions/harvey-by-pwc | s.d. | título "Harvey for M&A" |
| 15 | ToltIQ — escala e escopo | evidence | https://www.pwc.com/us/en/about-us/newsroom/press-releases/reimagining-deals-for-the-age-of-ai.html | 15/06/2026 | "used by more than 4,000 PwC Deals practitioners on 5,000+ deals"; "full contract population"; "more interconnected and autonomous deal processes" |
| 16 | Palantir — AI-native deals platform | evidence | https://www.stocktitan.net/news/PLTR/pw-c-and-palantir-expand-strategic-alliance-to-help-organizations-vkhypohylwyh.html ; https://www.theconsultingreport.com/pwc-and-palantir-expand-alliance-across-enterprise-ai-ma-and-erp/ | 03/09/2026 | "industry's first AI-native deals platform, built on Foundry and Palantir's AI Platform (AIP)"; "up to 50% faster"; "up to 45%" |
| 17 | AI in deals — acceleration vs erosion | evidence | https://www.pwc.com/us/en/services/consulting/deals/library/deals-age-ai-acceleration-vs-erosion-value.html | 2026 | "proprietary advantages … pricing power … competitive position … execution capability" |
| 18 | Coding agents e deal agents | evidence (atribuição de URL a confirmar) | https://www.pwc.com/gx/en/services/deals/trends.html (provável) | 2026 | "using coding agents to accelerate analysis"; "co-create and build their own deal agents" |
| 19 | Cyber deals | evidence | https://www.pwc.co.uk/services/technology/cyber-security-services/strategy-advisory/mergers-and-acquisitions.html ; https://www.pwc.com/us/en/services/consulting/deals/library/understanding-cyber-due-diligence.html | s.d. | "dedicated cyber deals team"; "Threat exposure and attack surface analysis" |
| 20 | M&A Operations SG — functional DD com tecnologia e Day One | evidence | https://www.pwc.com/sg/en/services/deals/merger-and-acquisitions-operations.html | snapshot 2026 | "Functional due diligence report across finance and control, human resources, operations and technology"; "Day one operating model and value creation plan" |
| 21 | Deal Analytics SG — ferramentas | evidence | https://www.pwc.com/sg/en/services/deals/deal-analytics.html | snapshot 2026 | "Leveraged on data analytics tools (such as Alteryx and Tableau)" |
| 22 | People in Deals | evidence | https://www.pwc.com/gx/en/services/workforce/people-in-deals.html | snapshot 2026 | "Delivering deal value through people"; "more than 7,500 people in 117 countries" |
| 23 | PE 2026 — IA disrupta e cria valor | evidence | https://www.pwc.com/us/en/industries/financial-services/library/private-equity-deals-outlook.html | 2026 midyear | "AI is simultaneously disrupting legacy software assets and unlocking new value creation levers across the portfolio" |
| 24 | Exit readiness | evidence | https://www.pwc.co.uk/private-equity/assets/exit-readiness.pdf | set/2026 | "buyers increasingly wanting evidence they can test" |
| 25 | PwC One — agentes autônomos incl. DD financeira inicial | evidence (secundária) | https://thenewstack.io/pwcs-ai-agents-are-now-your-consultants-whether-youre-ready-or-not/ | 2026 (s.d.) | "autonomous agents perform the work"; "early-stage financial due diligence" |
| 26 | Brasil — integração e carve-out | evidence | https://www.pwc.com.br/pt/assessoria-transacoes/estrategia-de-ma-e-captura-do-valor-do-deal.html | s.d. | "plano de Dia 1 a Dia 100 da integração"; "desinvestimentos e cisões (carve-outs)" |
| 27 | Brasil — DD de TI só citada | evidence | https://www.pwc.com.br/pt/consultoria-negocios/tecnologia-da-informacao.html | s.d. | "atividades relacionadas a processos de investigação (due diligence) de TI referentes a fusões e aquisições" |
| 28 | Case GE split | evidence | https://www.pwc.com/us/en/library/case-studies/deals-transformation-ge-split.html | s.d. | "how PwC helped GE split into three industry-leading companies, fueling bold innovation, global efficiency, new growth possibilities and deals transformation" |
| 29 | PwC é desafiável no Brasil em tech DD | hypothesis | — | 06/10/2026 | não há página pt-BR de Tech/AI/Cyber DD (**não encontrado**) |
| 30 | IA de DD tende a comoditizar (parceiros vendem direto) | hypothesis | — | — | — |

## 9. Não encontrado / lacunas
- Página pt-BR da PwC Brasil para Tech DD, AI DD, Cyber DD, IT separation ou TSA: **não encontrado**.
- Uso declarado de Harvey, ToltIQ, Palantir ou Junction pela PwC Brasil em deals: **não encontrado**.
- Parceria declarada da PwC com ferramenta de análise de código-fonte (CAST, Black Duck, Sigrid etc.) em tech DD: **não encontrado**.
- Nome comercial do app de separação de TI (só aparece como "AI-powered IT separation planning for deal execution"): **não encontrado**.
- Conteúdo do "AI Step Plan" e do case "IFS + PwC + Harvey": só os títulos (páginas bloqueadas).
- Versão 2026 integral das páginas US "Divestitures & Separations", "M&A technology" e "Integrations": obtida só por snippet; integral só na versão de 2024 (httrack).
- Atribuição exata, a uma URL específica, das frases "co-create and build their own deal agents" e "tipping point for AI in deals": provável Global M&A Trends 2026 mid-year, a confirmar.
