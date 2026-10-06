# Verificação cética · Frente bench:PwC (B1)

Data: 06/10/2026. Método, na ordem pedida:
1. Espelhos GitHub: mcjuh/BT4103-Scrape-and-Tag (snapshot 2026), sql-sith/cdc-results (httrack 2024 de pwc.com/us) e kzinmr/ai-topics (cópias dos posts do blog da Harvey sobre a PwC Deals). Busquei com search_code e li via raw.githubusercontent.com.
2. Relatórios anteriores: research/R2_big_four.md, v2/research/B1_PwC.md e v2/research/pwc_pages/.
3. Três WebSearch, todas usadas: (a) Divestitures/Junction; (b) PwC+Palantir; (c) M&A technology + AI tech DD.

Acesso direto a pwc.com: 403 no proxy (testei uma vez).

Legenda:
- **confirmed**: vi o texto literal (espelho ou snippet de busca feito por mim).
- **partially_confirmed**: só parte do claim foi vista, ou a única fonte é o snippet relatado em relatório anterior.
- **unverifiable**: não há como checar.

| # | Item | Veredito | Como | Correção |
|---|---|---|---|---|
| 1 | AI and Technology Diligence | confirmed | Espelho mcjuh: "3. AI and Technology Diligence" (página value creation). A busca devolveu o título "AI and technology due diligence: PwC" na URL exata, com "deal-focused evaluation of AI, product technology, and IT systems". | Na página dedicada, o nome aparece como "AI and technology due diligence". |
| 2 | Deals Strategy and Value Creation | confirmed | Espelho mcjuh: H1 "Deals Strategy and Value Creation"; título "Deals Strategy & Value Creation: PwC". | — |
| 3 | Contract Analytics | confirmed | Espelho mcjuh: "4. Contract Analytics" + "collecting and analyzing contracts to identify risks, drive synergies…". | — |
| 4 | M&A technology | confirmed | A busca devolveu o título "M&A technology: PwC" na URL exata. | — |
| 5 | Divestitures & Separations | confirmed | A busca devolveu o título "Divestitures & Separations: PwC" na URL exata. | — |
| 6 | AI-powered IT separation planning for deal execution | confirmed | A busca devolveu o título "AI-powered IT separation planning for deal execution: PwC" na URL exata. | — |
| 7 | Integrations / The Accelerated Transition® | partially_confirmed | A busca devolveu "Integrations: PwC" na URL de 2026. "The Accelerated Transition®" e "M&A Integration" (og:title) aparecem só no httrack 2024 (sql-sith), em outra URL: /deals/acquisitions/merger-acquisition-integration.html. | Não vi a marca na página de 2026. Citar como metodologia de 2024. |
| 8 | Junction | confirmed | A busca devolveu "Junction: A data-fueled, digital destination: PwC" na URL exata /ai-powered-deals/junction.html. Também está no httrack 2024 (/digital-deals/junction.html). | — |
| 9 | Harvey, powered by PwC / Harvey for M&A | partially_confirmed | Espelho kzinmr (blog da Harvey) confirma que a PwC Deals usa Harvey/Harvey Vault com "citation-backed insights" e "secure AI environment". A busca devolveu o título do press release gx na URL exata. "Harvey, powered by PwC… licensed to clients" aparece só como snippet em R2 #16. "Harvey for M&A" (PwC Store BE) não foi visto. | Não usar "Harvey for M&A" sem checar. |
| 10 | ToltIQ (sole professional services advisor) | partially_confirmed | Literal só em R2 #19 (snippet GlobeNewswire 15/06/2026): "PwC becomes ToltIQ's sole professional services advisor, with exclusivity among the Big Four…". Um espelho GitHub (vikasgoyal) cita "ToltIQ (with PwC and PitchBook integration)". A URL pwc.com reimagining-deals não foi verificada. | Fonte primária mais segura: release da GlobeNewswire. |
| 11 | AI-native deals platform (PwC + Palantir) | confirmed | A busca devolveu theconsultingreport ("PwC and Palantir Expand Alliance Across Enterprise AI, M&A, and ERP") e stocktitan com "industry's first AI-native deals platform, built on Foundry and… AIP"; M&A e desinvestimentos "up to 50% faster", custos one-time "up to 45%" menores; 03/09/2026. | R2 grafou "AI-native deals IT platform". A grafia observada é "AI-native deals platform". |
| 12 | Cyber due diligence (dedicated cyber deals team) | partially_confirmed | Só o snippet relatado em B1/R2: "dedicated cyber deals team"; "Threat exposure and attack surface analysis". Nenhum espelho e nenhuma busca própria. | — |
| 13 | Technology and IT M&A (CH) / Tech DD red-flag vs full-scope (BE) / IT Due Diligence (AT) | partially_confirmed | Snippets em R2 #13 e #15 (CH e BE com trechos literais) e em B1 P15 (AT). Não verificados por mim. | A URL do item cobre só a página da Suíça. BE = pwc.be/en/services/deals/technology-due-diligence.html; AT = pwc.at/en/it-due-diligence.html. |
| 14 | Merger and Acquisitions Operations (SG) | confirmed | Espelho mcjuh (raw): H1 "Merger and Acquisitions Operations"; "identify, quantify, and deliver full deal value…". | — |
| 15 | 5 capacidades, incluindo AI&Tech Diligence e Contract Analytics | confirmed | Espelho mcjuh: "1. Commercial Diligence 2. Operations and Analytics Diligence 3. AI and Technology Diligence 4. Contract Analytics 5. ESG Due Diligence". | — |
| 16 | Capturar valor de IA com frameworks de centenas de engajamentos | confirmed | Espelho mcjuh: "Capture the value of AI—quickly and responsibly… proven frameworks built from hundreds of engagements." | — |
| 17 | Maturidade de IA (5 dimensões) + stack (modularidade, extensibilidade de IA, arquitetura de dados) | partially_confirmed | Snippet próprio: "deep-dive evaluations of product tech stacks for modularity, AI extensibility, and data architecture". A parte "AI maturity and readiness benchmarking… strategy, talent, technology, governance, and data foundations" está só em B1 (snippet), não vista por mim. | — |
| 18 | Lente tech-first do diligence ao TSA exit | confirmed | Snippet próprio: "technology-first lens, from diligence to integration, separation, and post-close stabilization, ensuring Day 1 readiness through TSA exit". | — |
| 19 | Playbooks de IA + Junction como "digital command center" | partially_confirmed | Snippet próprio: "PwC's digital command center, Junction, can give you a live, unified view of your separation". "AI-powered playbooks" também apareceu, mas na busca da página M&A technology, o que deixa a atribuição ambígua. A frase "fuses human insight, AI-driven playbooks, and their digital hub, Junction" está só em B1. | — |
| 20 | Junction 20-30% / 50% menos atrasos; IA 4x / >90% | partially_confirmed | Snippet próprio: "Clients see up to 20-30% better milestone adherence and 50% fewer delays" (página divestitures-separations). "4x faster… over 90% accuracy" não apareceu nessa busca. R2 #17 atribui essa métrica à página tech-effect do app de separação de TI. | Atribuir 4x/90% à página ai-powered-it-separation-for-deals, não à divestitures-separations. Manter o "up to" nos 20-30%. Só como bastidor. |
| 21 | 2024: TI como área mais complexa; arquiteturas-alvo pré-definidas; tecnologia proprietária para carve-out financials | confirmed | httrack 2024 (sql-sith/cdc-results, .httrack/iscore-2024/www.pwc.com/us/en/services/consulting/deals/divestitures.html): "IT is the most complex area for many divestitures"; "pre-defined future state IT architectures"; "PwC has proprietary technology to automate this process" (carve-out financial statements). | — |
| 22 | App de IA de separação de TI: nível de aplicação, LLMs Google/Azure, expansão para infra e cyber | partially_confirmed | Snippet próprio só confirma "turn complex IT separation data into structured planning outputs". "application-level separation planning", "Google and Microsoft Azure" e "infrastructure and cyber" estão só em R2 #17 e B1 (snippets). | — |

## Resumo
- confirmed: 13 (itens 1, 2, 3, 4, 5, 6, 8, 11, 14, 15, 16, 18, 21).
- partially_confirmed: 9 (itens 7, 9, 10, 12, 13, 17, 19, 20, 22).
- refuted: 0. unverifiable: 0.

## Correções relevantes para o deck
1. A métrica "4x / >90%" pertence ao app de separação de TI (página tech-effect), não à página Divestitures & Separations.
2. "The Accelerated Transition®" só foi vista no snapshot de 2024.
3. O nome da plataforma com a Palantir é "AI-native deals platform", sem "IT".
4. "Harvey for M&A" não foi confirmado.
