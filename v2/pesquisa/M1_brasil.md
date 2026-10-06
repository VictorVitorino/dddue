# M1 — Brasil 2026: o que compradores e vendedores precisam em tecnologia durante M&A
## Sinais qualitativos para os slides "Desafio", "Riscos e Impactos" e "Mercado e Concorrência"

Data: 06/10/2026 · Autor: analista sênior (subagente M1) · Idioma: pt-BR
Escopo: sinais qualitativos de 2025-2026. Não trata de preço, forma de cobrança, prazo ou timeline de implementação (pedido explícito do usuário).

---

## 0. Método e limites (ler antes de usar)

- Li antes R1, X1, X2 e X3 (pesquisa de 06/10/2026) e não repeti o que já estava coberto: série TTR/KPMG/PwC, lista de carve-outs 2024-26, Lexter/Harvey, Tema 1.389 até ago/2026, custos de passivo PJ.
- **16 WebSearch** usadas (teto respeitado). Curl/WebFetch de sites de notícia: **403** (testado 2x, startups.com.br e telesintese.com.br). GitHub search_code deu 500/504; o **curl raw do espelho mcjuh/BT4103-Scrape-and-Tag funcionou** e trouxe 3 páginas A&M Brasil lidas integralmente (salvas em `v2/research/dl_m1/`).
- Rótulos:
  - **evidence (literal)**: trecho copiado da página lida integralmente (só as páginas A&M do espelho) ou o **título** literal da matéria.
  - **evidence (snippet)**: fato atribuído à fonte nomeada no resumo do buscador; a página não foi aberta. Confirmar antes de citar em material externo.
  - **hypothesis**: inferência minha.
- Números aparecem só como **prova de bastidor**. O deck é de produto e venda, sem números nos slides.

---

## 1. Resumo executivo (o que muda em 2026, em uma página)

1. **Menos deals, maiores e mais seletivos. A régua técnica subiu.** M&A de tecnologia no Brasil virou um jogo de seletividade: "seletividade e IA ditam o ritmo" (startups.com.br, 2026). Compradores pagam prêmio por software vertical com dado proprietário e IA aplicada. Vendedores precisam provar receita recorrente, base fiel e capacidade de incorporar IA.
2. **IA e dado viraram tese de valor, não acessório.** O valor está migrando "da funcionalidade isolada para a combinação de dados proprietários, automação e aplicação em fluxos de negócio" (resumo do buscador, startups.com.br). Para o comprador, isso exige provar a origem, a propriedade e a qualidade do dado e do modelo durante a diligência.
3. **Consolidação continua em saúde, educação, seguros, agro e software**, com compradores seriais (Unifique, Vela LatAm/Constellation, Selbetti, Visma em tech; Alper em seguros; Bionexo comprando o Tasy da Philips em software hospitalar). Cada add-on é uma integração de sistemas e dados.
4. **Carve-out é tecnologia.** O caso Nio/Oi Services (separação tecnológica com migração de legado, desligamento progressivo de aplicações e reconstrução de plataformas críticas) mostra que a separação de TI define quando a nova empresa ganha "autonomia total". O TSA é a espinha operacional do Dia 1 (BakerLaw, 2026).
5. **O risco regulatório de dados ficou real e caro.** A ANPD virou agência reguladora (Lei 15.352/2026). Ela aplicou a maior multa da sua história (TikTok, ago/2026), abriu processos sancionadores em série e tem a IA entre os temas prioritários de fiscalização em 2026-2027. Pelo PL do governo, também passa a ser a "autoridade reguladora residual" de IA.
6. **O Marco Legal da IA (PL 2.338/2023) segue indefinido na Câmara.** Ele foi aprovado no Senado em 10/12/2024. Na Câmara, a comissão especial perdeu sucessivas datas e o relator jogou a votação para depois das eleições de out/2026. Comprador e vendedor precisam avaliar risco de IA sem saber como será a regra final.
7. **O risco cibernético de terceiros atingiu o coração do sistema.** Houve os ataques via fornecedores de tecnologia do Pix: C&M Software (jun-jul/2025) e Sinqia (29/08/2025), esta uma empresa adquirida pela Evertec, com acesso por credenciais de fornecedores de TI. Em 2026 vieram BNB (jan), Cedro Têxtil (jun) e ICN/PROSUB (ago). Ou seja, o risco cibernético herdado e o risco de terceiros fazem parte do deal.
8. **O regulador financeiro apertou a cadeia de fornecedores.** As Resoluções CMN 5.274/2025 e BCB 538/2025 (de 18/12/2025) atualizaram a 4.893/2021, com adequação até 01/03/2026 e efeito sobre toda a cadeia de prestadores. A Resolução Conjunta nº 16/2025 (BaaS) reforça que "terceiriza-se a execução, não a responsabilidade" (A&M Brasil).
9. **A reforma tributária virou risco de TI no deal.** 2026 é ano-teste de CBS/IBS, com campos novos na NF-e/NFC-e. Em 2027 PIS/Cofins são extintos, e a transição vai até 2033. ERPs, emissores, PDVs, OMS e e-commerce precisam ser adaptados. A diligência fiscal "olha além do passivo" e passa a ser prospectiva: capacidade do sistema, créditos e split payment (Capital Aberto, jul/2026).
10. **A pejotização segue sem tese no STF (Tema 1.389).** Há pedido de vista da Min. Cármen Lúcia desde dez/2025 e parecer da PGR favorável em fev/2026. Em 18/06/2026 os processos foram liberados na 1ª e 2ª instâncias (no TST continuam suspensos), e o estoque cresceu de ~50 mil para mais de 74 mil ações. Times de tecnologia contratados como PJ continuam sendo passivo contingente em aberto.

---

## 2. Achados por tema

### 2.1 Mercado: seletividade, IA e dado proprietário como prêmio

| # | Achado | Tipo | Fonte · data · URL | Trecho |
|---|---|---|---|---|
| M1 | Título: tecnologia em 2026 é guiada por seletividade e IA | evidence (literal: título) | startups.com.br, "Mercado de M&A em tecnologia no Brasil: seletividade e IA ditam o ritmo", 2026 · https://startups.com.br/exclusivo/com-regua-mais-alta-mas-caem-no-1o-semestre-de-2026/ | "Mercado de M&A em tecnologia no Brasil: seletividade e IA ditam o ritmo" |
| M2 | A IA "deixou de ser um diferencial pontual e passou a reorganizar as teses de aquisição"; o valor migra "da funcionalidade isolada para a combinação de dados proprietários, automação e aplicação em fluxos de negócio" | evidence (snippet) | idem | resumo do buscador (frases entre aspas acima reproduzem o resumo, não a página) |
| M3 | Compradores buscam **software vertical com dado proprietário e IA aplicada** e pagam prêmio por isso. Compradores seriais do 1S26: **Unifique** (telecom), **Vela LatAm (Constellation)** (software vertical), **Selbetti** e **Visma** | evidence (snippet) | idem | "Compradores buscam software vertical com dado proprietário e IA aplicada, dispostos a pagar prêmio" (resumo) |
| M4 | O vendedor precisa demonstrar "receita recorrente, bases fiéis e capacidade de incorporar IA"; critérios "mais técnicos, com foco em rentabilidade, previsibilidade e governança" | evidence (snippet) | idem | resumo do buscador |
| M5 | Título: empresas de tecnologia estão mais seletivas nas aquisições | evidence (literal: título) | Paraná Builders, 05/08/2026 · https://parana.builders/2026/08/05/ma-empresas-de-tecnologia-estao-mais-seletivas-nas-aquisicoes/ | "M&A: empresas de tecnologia estão mais seletivas nas aquisições" |
| M6 | Precificar IA é difícil: intangíveis como "algoritmos proprietários, bancos de dados exclusivos, equipes de talentos especializados" | evidence (snippet) | BLB Escola de Negócios, "Avaliação de empresas de inteligência artificial em M&A: como precificar?", s/d · https://blbescoladenegocios.com.br/blog/valuation-empresas-de-inteligencia-artificial/ | resumo do buscador |
| M7 | Para o 2S26, aquisições ligadas a tecnologia e IA devem ganhar espaço, sobretudo em serviços financeiros, saúde e ciências da vida, e bens de consumo. 1S26: 610 transações, R$ 195 bi (valor +22,3%, quantidade -35%) | evidence (snippet) | KPMG, "Pesquisa Trimestral de M&A – 2º trimestre 2026", ago/2026 · https://kpmg.com/br/pt/insights/2026/08/pesquisa-trimestral-m-a-2-trimestre-2026.html | resumo do buscador |
| M8 | IA em todas as etapas do deal (pipeline, roadshow, DD, revisão documental). Mas "a atenção humana, o julgamento e a experiência" passam a valer mais: a IA "aumenta a capacidade de execução, mas não substitui a responsabilidade" dos assessores. Tecnologia (software, TI, fintech, IA) deve liderar em quantidade de operações | evidence (snippet) | Decisor Brasil, "M&A no Brasil: Seis vozes do mercado brasileiro projetam o próximo ciclo de fusões e aquisições" (International M&A Day 2026), 2026 · https://www.decisorbrasil.com.br/ma-no-brasil-international-ma-day-2026/ | resumo do buscador |
| M9 | Ganho e desafio da "era da inteligência" (KPMG Brasil, abr/2026). Conteúdo não extraído | evidence (só existência) | https://kpmg.com/br/pt/insights/2026/04/ganhos-desafios-era-inteligencia.html | — |

**Leitura (hypothesis):** quando o prêmio está no dado e na IA, a pergunta do comprador muda de "o sistema funciona?" para "o dado é meu, é limpo, é legal e o modelo se sustenta?". Isso pede uma diligência de dados e IA, além da diligência de TI clássica.

### 2.2 Consolidação / buy-and-build por setor (2026)

| # | Setor | Achado | Tipo | Fonte · data · URL |
|---|---|---|---|---|
| C1 | Saúde | Valor de M&A em saúde, ciências da vida e bem-estar no 1S26 com salto de 507% e menos operações (55 vs 83). Exemplo: **Bionexo compra o Tasy da Philips**; a empresa, investida de Bain Capital e Prisma, "avança na consolidação de software hospitalar" | evidence (snippet) | Dr. Finanças, "Fusões e aquisições na saúde saltam 507% no semestre", 2026 · https://drfinancas.com/blog/fusoes-aquisicoes-saude-clinica/ |
| C2 | Educação básica | Setor atrai fundos de PE e grupos internacionais (sobretudo britânicos). O capital institucional transforma escolas em ativos "comparáveis a empresas de tecnologia" em margem e eficiência | evidence (snippet) | Barte, "Consolidação de Escolas de Educação Básica Atrai Fundos e Grupos Internacionais", s/d · https://www.barte.com/blog-posts/consolidacao-de-escolas-de-educacao-basica-atrai-fundos-e-grupos-internacionais |
| C3 | Seguros | Título: "Consolidação e disputa por mercado aquecem o setor de corretoras de seguros no Brasil". **Alper** citada como "o maior consolidador do mercado nacional" (72 aquisições desde 2010) | evidence (literal: título; snippet: Alper) | CQCS, s/d · https://cqcs.com.br/noticia/consolidacao-e-disputa-por-mercado-aquecem-o-setor-de-corretoras-de-seguros-no-brasil/ |
| C4 | Agro | Título: "Crise financeira acelera consolidação no agro e abre janela para aquisições". A Fortezza Partners aponta que o mercado ainda não precificou a recuperação. Outro texto: "A Ilusão da Escala na Consolidação do Varejo de Insumos Agro" | evidence (literal: títulos) | CNN Brasil, s/d (2026) · https://www.cnnbrasil.com.br/agro/crise-financeira-acelera-consolidacao-no-agro-e-abre-janela-para-aquisicoes/ ; AgroAdvance · https://agroadvance.com.br/blog-ilusao-da-escala-consolidacao-do-varejo-de-insumos-agricolas/ |
| C5 | Assessorias / gestoras / plataformas de investimento | "M&A se torna principal fator de crescimento do mercado de assessorias, consultorias e gestoras" (incorporação de AUC em 16 meses) | evidence (literal: título) | Veritas, s/d · https://www.veritas.law/post/com-r-160-bi-em-auc-incorporado-nos-%C3%BAltimos-16-meses-m-a-se-torna-principal-fator-de-crescimento-d |
| C6 | Software (já em X1) | TOTVS/Linx, Sankhya, Senior/Salú, Nuvini, Stefanini | ver X1 | — |

**Leitura (hypothesis):** em todas essas teses o valor da plataforma depende de padronizar sistemas, dados e processos aquisição após aquisição. O comprador serial precisa de um modelo repetível de diligência e integração de tecnologia. O vendedor (o add-on) precisa chegar "integrável".

### 2.3 Carve-outs, desinvestimentos e o papel da TI e do TSA

| # | Achado | Tipo | Fonte · data · URL | Trecho |
|---|---|---|---|---|
| T1 | **Nio conclui a separação tecnológica da Oi Services** e passa a operar com "autonomia total". Houve migração de sistemas legados para arquitetura própria com mais de 2 petabytes de dados e, ao longo de 2025, "desligamento progressivo de aplicações, reconstrução de plataformas críticas e implementação de nova arquitetura". A V.tal aparece como parceira de infraestrutura | evidence (literal: título; snippet: detalhes) | TeleSíntese, s/d (2026) · https://telesintese.com.br/nio-conclui-separacao-tecnologica-da-oi-services-e-passa-a-operar-com-autonomia-total/ | "Nio conclui separação tecnológica da Oi Services e passa a operar com autonomia total" |
| T2 | Telefônica Brasil: em 01/07/2026 a Telefônica Infraestrutura e Segurança incorporou a Telefônica Cibersegurança e Tecnologia do Brasil para simplificar estruturas e reduzir custos (pós-compra da Telefónica Tech Brasil, ver R1) | evidence (snippet) | SEC Form 6-K, Telefônica Brasil, 01/07/2026 · https://www.sec.gov/Archives/edgar/data/0001066119/000129281426003650/viv20260701_6k.htm | resumo do buscador |
| T3 | TSAs "são frequentemente a espinha operacional de um carve-out", necessários para operar o Dia 1 e reduzir a chance de ruptura pós-closing. Título: "Carve-Outs Are In: Practical Guidance as Activity Rises in 2026" | evidence (literal: título; snippet: frase) | BakerHostetler, 2026 (global, não Brasil) · https://www.bakerlaw.com/insights/carve-outs-are-in-practical-guidance-as-activity-rises-in-2026/ | "Carve-Outs Are In: Practical Guidance as Activity Rises in 2026" |
| T4 | Pipeline de carve-outs por desalavancagem: Natura/Avon, Raízen, Braskem, Hapvida, Americanas, Motiva/CPC | evidence (ver R1 §7) | R1 | — |
| T5 | A&M (deck v7) já tem cases aderentes de carve-out com mapeamento de entanglements (Mubadala/UniFTC; Invepar) | evidence | 00_AM_deck_v7_text.txt | "mapeando mais de 50 entanglements" |

**Leitura (hypothesis):** no Brasil de 2026, carve-outs vêm de grupos alavancados ou em recuperação, que precisam vender rápido sem quebrar a operação. O comprador quer saber o que precisa ser reconstruído (aplicações, dados, contratos de software, rede). O vendedor quer um TSA que não vire dependência indefinida. Os dois lados precisam de um mapa de entrelaçamentos de tecnologia antes do signing.

### 2.4 Dados e IA: ANPD e Marco Legal da IA

| # | Achado | Tipo | Fonte · data · URL | Trecho |
|---|---|---|---|---|
| D1 | **Lei nº 15.352/2026**, publicada em 25/02/2026, formaliza a ANPD como autarquia especial (agência reguladora), com mais autonomia e carreira própria | evidence (snippet) | LH Law ("ANPD em 2026: principais regulamentos, consultas públicas e tendências") · https://www.lhlaw.com.br/publicacoes/anpd-em-2026-principais-regulamentos-consultas-publicas-e-tendencias-2/ ; DPOnet · https://dponet.com.br/blog/anpd-2026-fiscalizacao-lgpd-empresas-sancoes/ | resumo do buscador |
| D2 | **Maior multa da história da ANPD: R$ 153,7 mi ao TikTok (ByteDance)** por falhas no tratamento de dados de crianças e adolescentes. Foram 5 violações à LGPD, com determinação de eliminação dos dados e plano de medidas. Publicada no DOU em 25/08/2026; ainda cabe recurso ao Conselho Diretor | evidence (literal: título; snippet: detalhes) | Migalhas, "ANPD multa TikTok em R$ 153,7 milhões por falha na proteção de menores", 25/08/2026 · https://www.migalhas.com.br/quentes/463088/anpd-multa-tiktok-em-r-153-7-milhoes-por-falha-na-protecao-de-menores ; Correio Braziliense · https://www.correiobraziliense.com.br/politica/2026/08/7487181-tiktok-e-multado-em-rs-1537-milhoes-por-dados-de-menores.html | "ANPD multa TikTok em R$ 153,7 milhões por falha na proteção de menores" |
| D3 | Antes disso, a única multa em dinheiro ao setor privado somava R$ 14.400 (caso de 2023). 19 novos processos sancionadores só em junho/2026. Teto de R$ 50 mi por infração | evidence (snippet) | Migalhas (depeso 464001) · https://www.migalhas.com.br/depeso/464001/anpd-multa-recorde-o-que-muda-agora-no-tratamento-de-dados-de-menores ; DPOnet (idem D1) | resumo do buscador |
| D4 | "Falhar em responder os ofícios da ANPD ou em demonstrar quem é o responsável pelos dados" virou o gatilho mais rápido para abrir processo sancionador | evidence (snippet) | DPOnet / Turivius 2026 · https://turivius.com/portal/slug-anpd-2026-fiscalizacao-lgpd/ | resumo do buscador |
| D5 | Título: "ANPD Sanções 2026: 16 Processos Abertos em Um Dia" | evidence (literal: título; fonte de menor autoridade) | Thiago Bicalho Adv. · https://thiagobicalho.adv.br/anpd-sancoes-lgpd-2026.html | — |
| D6 | **Resoluções CD/ANPD nº 30/2025 e nº 31/2025** (dez/2025) criam o **Mapa de Temas Prioritários 2026-2027** e atualizam a Agenda Regulatória. IA e tecnologias emergentes concentram ações em 2027. Foco: direitos dos titulares, crianças e adolescentes, poder público e IA | evidence (snippet) | LH Law (idem D1); Confidata, "ANPD e Regulação de IA no Brasil: Guia 2026-2027" · https://confidata.com.br/blog/anpd-regulacao-ia-brasil-2026-2027 | resumo do buscador |
| D7 | Títulos: "ANPD terá centro de IA e reforça estrutura para fiscalizar novas tecnologias" e "ANPD é formalizada como coordenadora do Sistema Nacional de Inteligência Artificial" | evidence (literal: títulos) | Capital Digital · https://capitaldigital.com.br/anpd-tera-centro-de-ia-e-reforca-estrutura-para-fiscalizar-novas-tecnologias/ ; FGV Direito Rio (Regulação em Números) · https://regulacaoemnumeros-direitorio.fgv.br/post/anpd-e-formalizada-como-coordenadora-do-sistema-nacional-de-inteligencia-artificial | — |
| D8 | Título: "PL do governo garante ANPD como reguladora residual de IA no Brasil". Onde não houver regulador setorial, cabe à ANPD normatizar, fiscalizar e sancionar "desenvolvedores, distribuidores e aplicadores" de IA | evidence (literal: título; snippet: escopo) | TELETIME, 09/12/2025 · https://teletime.com.br/09/12/2025/pl-do-governo-garante-anpd-como-reguladora-residual-de-ia-no-brasil/ ; MGI, dez/2025 · https://www.gov.br/gestao/pt-br/assuntos/noticias/2025/dezembro/pl-do-governo-propoe-sistema-de-governanca-para-a-inteligencia-artificial-no-pais ; Planalto, PL 6.237/2025 · https://www.planalto.gov.br/ccivil_03/projetos/ato_2023_2026/2025/pl/pl-6237.htm | "PL do governo garante ANPD como reguladora residual de IA no Brasil" |
| D9 | **PL 2.338/2023 (Marco Legal da IA):** aprovado por unanimidade no Senado em 10/12/2024. Na Câmara está em regime de prioridade na Comissão Especial (presidente Luisa Canziani; relator Aguinaldo Ribeiro). Comissão instalada em 20/05/2025 e sem parecer apresentado. Cinco datas de votação marcadas e perdidas desde nov/2025. **Em 24/08/2026 o relator confirmou votação só depois das eleições de outubro** | evidence (snippet) | LCF Consulting Monitor · https://monitor.lcfconsulting.com.br/proposicoes/pl-2338-2023/ ; Câmara · https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-temporarias/especiais/57a-legislatura/comissao-especial-sobre-inteligencia-artificial-pl-2338-23 ; Desinformante · https://desinformante.com.br/votacao-do-marco-da-ia-fica-para-2026-em-meio-a-impasses-politicos-e-criticas-ao-texto | resumo do buscador |
| D10 | Título DIAP: "PL 2338/23: Votação do projeto sobre Inteligência Artificial está prevista apenas para dezembro" (data da matéria não confirmada) | evidence (literal: título) | DIAP · https://www.diap.org.br/index.php/noticias/noticias/92249-pl-2338-23-votacao-do-projeto-sobre-inteligencia-artificial-esta-prevista-apenas-para-dezembro | — |
| D11 | Regulamento de Dosimetria e Aplicação de Sanções (Resolução CD/ANPD nº 4/2023) segue como base de cálculo das multas | hypothesis (conhecimento prévio; não verificado nesta sessão) | — | — |
| D12 | "ANPD consulta mudanças no processo de fiscalização e sanções" (2026). Conteúdo não extraído | evidence (literal: título; fonte de menor autoridade) | Prompt Mestre · https://promptmestre.com/noticias/anpd-consulta-fiscalizacao-sancoes-2026 | — |

**Leitura (hypothesis):** para o comprador, LGPD deixou de ser checklist. É passivo com regulador ativo e precedente de multa alta, principalmente em ativos B2C, edtech, saúde e plataformas com menores. Para IA, a combinação "ANPD como reguladora residual + PL 2.338 indefinido" cria incerteza regulatória. A diligência precisa mapear onde a IA do alvo usa dado pessoal, com qual base legal e com qual governança.

### 2.5 Incidentes cibernéticos que afetaram operações (2025-2026)

| # | Caso | Achado | Tipo | Fonte · data · URL |
|---|---|---|---|---|
| I1 | **C&M Software** (PSTI do Pix) | Na noite de 30/06/2025, uma credencial vazada de um operador de TI da C&M foi usada para acessar contas de reserva de instituições no BCB. A BMP sozinha reportou R$ 541 mi de perda. A PF prendeu 25 pessoas e recuperou mais de R$ 500 mi. Título Vigilant: "Um ano depois do maior ataque cibernético financeiro do Brasil" | evidence (snippet; título literal) | Vigilant · https://vigilant.com.br/cm-software-pix-banco-central-um-ano-depois/ ; Mobile Time, 03/07/2025 · https://www.mobiletime.com.br/noticias/03/07/2025/cm-software-volta-pix/ ; Economic News Brasil, 02/07/2025 · https://economicnewsbrasil.com.br/2025/07/02/ataque-hacker-a-cm-software/ |
| I2 | **Sinqia (Evertec)** | Em 29/08/2025, atividade não autorizada no ambiente Pix da Sinqia, empresa **adquirida pela Evertec**. O acesso foi via **credenciais legítimas comprometidas de fornecedores de TI da Sinqia**. Desvio de ~R$ 710 mi (HSBC R$ 669 mi; Artta R$ 41 mi), a maior parte bloqueada. Título Baguete: "Sinqia: ataque foi por fornecedor" | evidence (literal: título; snippet: detalhes) | Baguete · https://www.baguete.com.br/noticias/sinqia-ataque-foi-por-fornecedor ; InfoMoney · https://www.infomoney.com.br/economia/desvio-de-recursos-em-ataque-hacker-ao-pix-vai-a-r-710-mi-maior-parte-foi-bloqueada/ ; O Cafezinho, 01/09/2025 · https://www.ocafezinho.com/2025/09/01/ataque-hacker-a-sinqia-expoe-falhas-estruturais-na-seguranca-do-pix/ |
| I3 | Leitura dos dois casos | A Sinqia era provedora "com acesso privilegiado a um dos sistemas mais críticos do país sem estar sujeita ao mesmo nível de escrutínio" de bancos e fintechs autorizadas | evidence (snippet) | O Cafezinho (idem) |
| I4 | **Banco do Nordeste (BNB)** | Ataque em jan/2026. O banco suspendeu o Pix de 26 a 29/01/2026 como medida preventiva. Título: "Banco registra prejuízo de R$ 146,6 milhões após ataque hacker" | evidence (literal: título; snippet: datas) | TecMundo, 2026 · https://www.tecmundo.com.br/seguranca/413112-banco-registra-prejuizo-de-r-1466-milhoes-apos-ataque-hacker.htm |
| I5 | **Cedro Têxtil** | Incidente afetou ambientes e sistemas corporativos com impacto operacional; restabelecimento comunicado em 24/06/2026 | evidence (snippet) | Minuto da Segurança, "Incidentes cibernéticos no Brasil em 2026: perdas e lições" · https://minutodaseguranca.blog.br/incidentes-seguranca-cibernetica-brasil-2026/ |
| I6 | **Itaguaí Construções Navais (ICN/PROSUB)** | Ransomware confirmado em 09/08/2026 (por volta das 23h). Alegações do grupo criminoso sobre posse de dados não foram confirmadas pela empresa | evidence (snippet) | Minuto da Segurança, "Principais ataques cibernéticos no Brasil em agosto de 2026" · https://minutodaseguranca.blog.br/ataques-ciberneticos-brasil-agosto-2026/ |
| I7 | Caso anonimizado de M&A | Em compra de fintech por fundo internacional, a DD de segurança achou riscos com impacto potencial "superior a dezenas de milhões de reais" | evidence (snippet; ver X2) | TI Inside, 01/05/2026 · https://tiinside.com.br/01/05/2026/ma-e-seguranca-da-informacao-o-risco-invisivel-que-pode-comprometer-o-valor-da-aquisicao/ |
| I8 | Ciber em contrato | "Com LGPD consolidada, fiscalização mais ativa da ANPD e ataques baseados em IA", a avaliação técnica de riscos digitais virou "cláusula central" nos contratos de compra e venda em 2026. DD tecnológica deixou de ser "rubrica auxiliar" | evidence (snippet; fonte de baixa autoridade, blog de fornecedor) | Decripte, "Due Diligence de Segurança em M&A: Guia 2026" · https://decripte.com.br/artigos/due-diligence-seguranca-ma/due-diligence-de-seguranca-em-ma-riscos-ocultos-mmcmnrxr |
| I9 | Ciber e comércio exterior | Título: "Acordo Mercosul e UE: cibersegurança também será competitividade" | evidence (literal: título) | UAI, 02/10/2026 · https://www.uai.com.br/networking-e-negocios/2026/10/02/acordo-mercosul-e-ue-ciberseguranca-tambem-sera-competitividade/ |
| I10 | Governança | Título: "Quando o risco cibernético nasce na sala de reuniões" | evidence (literal: título) | Portal Information Management, 29/04/2026 · https://docmanagement.com.br/04/29/2026/quando-o-risco-cibernetico-nasce-na-sala-de-reunioes/ |

**Leitura (hypothesis):** o caso Sinqia é o melhor exemplo brasileiro de **risco cibernético herdado em M&A**. Um ativo adquirido, com fornecedores de TI e acessos privilegiados, virou vetor de um incidente sistêmico depois da aquisição. A mensagem de venda que sai daí, sem números: "no deal, você compra também os acessos, os fornecedores e as credenciais do alvo".

### 2.6 BCB/CMN e CVM: ciber, nuvem e terceiros

| # | Achado | Tipo | Fonte · data · URL |
|---|---|---|---|
| R1 | Em 18/12/2025, CMN e BCB aprovaram a **Resolução CMN nº 5.274/2025** e a **Resolução BCB nº 538/2025**, que atualizam as normas de 2021 (CMN 4.893/2021) de segurança cibernética e de contratação de processamento, armazenamento de dados e nuvem. Prazo final de adequação: **01/03/2026**. Impacto "muito além das instituições financeiras, atingindo diretamente também toda a sua cadeia de prestadores de serviços" | evidence (snippet) | Clavis, "Banco Central reforça exigências de segurança cibernética: o que muda para instituições até março de 2026" · https://clavis.com.br/blog/banco-central-reforca-exigencias-de-seguranca-cibernetica/ ; Voto CMN 88/2025 · https://normativos.bcb.gov.br/Votos/CMN/202588/Voto_do_CMN_88_2025.pdf ; LegisWeb · https://www.legisweb.com.br/legislacao/?id=488277 ; Machado Meyer · https://www.machadomeyer.com.br/pt/inteligencia-juridica/publicacoes-ij/direito-digital/bcb-novas-regras-para-aumentar-a-ciberseguranca-do-sfn-e-do-spb |
| R2 | Requisitos mínimos: MFA, criptografia, prevenção e detecção de intrusão, prevenção de vazamento, rastreabilidade, backups, avaliação de vulnerabilidades, controle de acesso, proteção de rede, certificados digitais e **segurança de integrações via APIs** | evidence (snippet) | Brownpipe · https://www.brownpipe.com.br/blog/novos-controles-de-seguranca-cibernetica-do-banco-central-resolucoes-cmn-5-274-2025-e-bcb-538-2025/ ; Blaze · https://www.blazeinfosec.com/pt-br/post/cmn-5-274-e-bcb-538-alteracoes/ |
| R3 | Título: "Nova resolução do Banco Central demanda seguro cibernético para fornecedores de tecnologia" (27/09/2025; número da norma não identificado no resumo) | evidence (literal: título) | Inforchannel · https://inforchannel.com.br/2025/09/27/nova-resolucao-do-banco-central-demanda-seguro-cibernetico-para-fornecedores-de-tecnologia/ |
| R4 | **Resolução Conjunta nº 16/2025 (BaaS)**: "a terceirização transfere a execução das atividades, mas não a responsabilidade regulatória nem o dever de diligência perante clientes e supervisor" | evidence (literal; página A&M lida integralmente) | A&M Brasil, "Gestão de Riscos de Terceiros: Pode-se Terceirizar a Tarefa, Não o Risco", 03/08/2026 · https://www.alvarezandmarsal.com/pt-br/thought-leadership/gest-o-de-riscos-de-terceiros-pode-se-terceirizar-a-tarefa-n-o-o-risco |
| R5 | CVM: comunicação imediata à SMI após confirmação de ataque e planos de mitigação (art. 35-I da ICVM 612/19, conforme resumo); plano de continuidade testado ao menos uma vez por ano para participantes do mercado | evidence (snippet; a confirmar na norma consolidada) | CVM Resolução 35 consolidada · https://conteudo.cvm.gov.br/export/sites/cvm/legislacao/resolucoes/anexos/001/resol035consolid.pdf ; Jusbrasil, "CVM orienta intermediários sobre situações relacionadas a Sistemas Críticos e Segurança Cibernética" · https://www.jusbrasil.com.br/artigos/cvm-orienta-intermediarios-sobre-situacoes-relacionadas-a-sistemas-criticos-e-seguranca-cibernetica/893243838 |
| R6 | Título TozziniFreire: "A divulgação de incidente de segurança da informação como fato relevante". Para companhias abertas, incidente cibernético pode ser fato relevante | evidence (literal: título) | https://tozzinifreire.com.br/artigos/a-divulgacao-de-incidente-de-seguranca-da-informacao-como-fato-relevante |
| R7 | Resolução CVM nº 239, de 09/01/2026: o resumo indica alteração do Regimento Interno e do Sistema de Gestão de Riscos **da própria CVM**. Não é norma de ciber para o mercado; **não usar como "nova regra de ciber"** | evidence (snippet) + alerta | LegisWeb · https://www.legisweb.com.br/legislacao/?id=489297 |
| R8 | Zetta lançou o **GAIAG — Guia de Avaliação de Provedores de IA Generativa**, framework para contratar provedores de IA no setor financeiro | evidence (literal; página A&M) | A&M Brasil, 03/08/2026 (idem R4); https://gaiag.somoszetta.org.br/ |

**Leitura (hypothesis):** em deals de fintech, meios de pagamento, BaaS, seguros e de qualquer fornecedor de tecnologia para instituição financeira, a conformidade com CMN 5.274 / BCB 538 virou condição de valor. O alvo que não atende perde clientes regulados. O comprador regulado herda a obrigação de diligência sobre a cadeia.

### 2.7 Reforma tributária (IBS/CBS) como risco de TI no deal

| # | Achado | Tipo | Fonte · data · URL |
|---|---|---|---|
| F1 | 2026 é fase de teste de **CBS (0,9%) e IBS (0,1%)**. Em 2027 PIS e Cofins são extintos e a cobrança de CBS/IBS fica mais efetiva | evidence (snippet) | BLN Contabilidade, "Reforma Tributária 2026: Ano Teste CBS e IBS" · https://blncontabilidade.com.br/reforma-tributaria-2026-ano-teste-cbs-ibs/ ; OFM, "Reforma Tributária 2027: o que muda na operação das empresas" · https://ofm.com.br/reforma-tributaria-2027-o-que-muda-na-operacao-das-empresas/ |
| F2 | "ERPs, emissores fiscais, PDVs, OMSs, plataformas de e-commerce e sistemas integrados com meios de pagamento" precisam receber, preencher, validar e transmitir as novas informações. NF-e e NFC-e ganham campos de IBS/CBS, o que afeta o XML e "todos os sistemas que geram, validam ou consomem esse arquivo" | evidence (snippet) | WMX Consultoria, "Reforma Tributária 2026: Guia Completo IBS, CBS e Impacto no ERP" · https://www.wmxconsultoria.com.br/reforma-tributaria-2026-ibs-cbs/ ; Radar da Reforma · https://radardareformatributaria.com/reforma-tributaria-2026-o-que-muda-ibs-cbs-simples-notas-fiscais/ |
| F3 | Desde **03/08/2026**, documentos fiscais de empresas do regime regular devem conter campos de IBS e CBS (segundo o resumo; confirmar em NT da SEFAZ/RFB) | evidence (snippet; a confirmar) | idem F2 |
| F4 | Transição até **2033**, com os sistemas convivendo ao mesmo tempo com regras do modelo atual e do novo | evidence (snippet) | Contábeis, "Reforma Tributária: O Desafio dos Sistemas e Tecnologia" · https://www.contabeis.com.br/artigos/79713/reforma-tributaria-o-desafio-dos-sistemas-e-tecnologia/ |
| F5 | Título: "Reforma tributária leva M&A a olhar além do passivo fiscal". A auditoria de M&A deixa de olhar só passivos e passa a ser **prospectiva**: avalia a capacidade da empresa de se adaptar à transição. Novos mecanismos contratuais: **earn-out tributário** e **cláusulas MAC** | evidence (literal: título; snippet: conteúdo) | Capital Aberto, jul/2026 · https://capitalaberto.com.br/regulacao/2026/07/reforma-tributaria-leva-m-and-a-a-olhar-alem-do-passivo-fiscal |
| F6 | **Split payment** reduz o "float" entre recebimento e recolhimento, com impacto imediato no caixa. Título Igher: "Split Payment: estar preparado vai aumentar o valor de empresas" | evidence (literal: título; snippet) | Igher · https://igher.com.br/split-payment-ma-venda-de-empresa-2027/ ; Migalhas, "M&A na era da reforma tributária: O que observar?" · https://www.migalhas.com.br/depeso/426187/m-a-na-era-da-reforma-tributaria-o-que-observar |
| F7 | Título: "Releitura do valor empresarial: impactos sobre indicadores financeiros, valuation e M&A no novo IVA Dual" | evidence (literal: título) | reformatributaria.com · https://www.reformatributaria.com/opiniao/releitura-do-valor-empresarial-impactos-sobre-indicadores-financeiros-valuation-e-ma-no-novo-iva-dual |

**Leitura (hypothesis):** entre 2026 e 2027, um ERP ou motor fiscal que não esteja pronto para IBS/CBS e split payment vira passivo operacional (risco de faturamento e de crédito) e custo de adequação no plano de 100 dias. Em roll-ups com vários ERPs, o problema se multiplica. É gancho natural para unir as diligências de TI e fiscal.

### 2.8 Pejotização (STF Tema 1.389): atualização após X3

| # | Achado | Tipo | Fonte · data · URL |
|---|---|---|---|
| P1 | Julgamento de mérito suspenso por pedido de vista da Min. Cármen Lúcia (dez/2025). Ainda sem decisão final de mérito | evidence (snippet) | Managefy, "Pejotização STF Tema 1.389: Status e 3 cenários (ago/2026)" · https://managefy.com.br/blog/pejotizacao-stf-tema-1389/ ; Marra CLT · https://www.marraclt.com.br/salario/pejotizacao-stf-tema-1389-o-que-muda |
| P2 | Parecer da PGR (Paulo Gonet Branco), em fev/2026, favorável à pejotização | evidence (snippet) | idem |
| P3 | Estoque de ações cresceu de ~50 mil (dez/2025) para **mais de 74 mil (jul/2026)**. Em **18/06/2026** o relator liberou 1ª e 2ª instâncias (varas e TRTs); no TST seguem suspensas | evidence (snippet) | idem; STF Notícias · https://noticias.stf.jus.br/postsnoticias/stf-retira-suspensao-de-processos-sobre-pejotizacao-na-primeira-instancia-e-nos-trts/ ; TST · https://www.tst.jus.br/-/stf-retira-suspensao-de-processos-sobre-pejotizacao-na-primeira-instancia-e-nos-trts |
| P4 | Ministro do STF suspendeu execução baseada em decisão sobre pejotização (Tema 1.389) | evidence (literal: título) | Conexão Trabalho (CNI) · https://conexaotrabalho.portaldaindustria.com.br/noticias/detalhe/trabalhista/-geral/tema-1389-ministro-do-stf-suspende-execucao-baseada-em-decisao-sobre-pejotizacao/ |
| P5 | Andamento oficial: portal STF, ARE 1.532.603 | evidence (só existência) | https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?incidente=7138684&numeroProcesso=1532603&classeProcesso=ARE&numeroTema=1389 |
| P6 | Não encontrei notícia de retomada do julgamento em set-out/2026 | não encontrado | — |

**Leitura (hypothesis):** times de produto e engenharia com alta proporção de PJ (ver X3: 55,6% do crescimento de profissionais de TI via MEI e informalidade) seguem como risco de retenção e de passivo sem tese definida. Na prática, isso significa key-person risk mais contingência trabalhista dentro da diligência de tecnologia.

### 2.9 Voz da própria A&M (páginas lidas integralmente)

| # | Trecho literal | Fonte · data · URL |
|---|---|---|
| A1 | "reguladores nos Estados Unidos, Europa e Brasil convergiram para um mesmo princípio: a empresa pode terceirizar a execução de uma atividade, mas não a responsabilidade por ela." | A&M Brasil (Disputes & Investigations), "Gestão de Riscos de Terceiros: Pode-se Terceirizar a Tarefa, Não o Risco", 03/08/2026, autores Eduardo Magalhaes (MD), Isabela Daguer (Director), Clara Jordão (Manager) · https://www.alvarezandmarsal.com/pt-br/thought-leadership/gest-o-de-riscos-de-terceiros-pode-se-terceirizar-a-tarefa-n-o-o-risco |
| A2 | "Parte considerável dos incidentes cibernéticos atuais tem origem em um fornecedor: um acesso mal configurado, uma credencial comprometida, um sistema desatualizado." | idem |
| A3 | "o risco de terceiros deixou de ser uma questão externa e passou a ser um dos riscos estratégicos de maior relevância, com impactos transversais e, ao mesmo tempo, diretos sobre os resultados e o valor da empresa." | idem |
| A4 | "a inteligência artificial, presente em duas frentes: como nova fonte de risco a ser avaliada nos fornecedores que a utilizam e, simultaneamente, como ferramenta para ampliar a escala das próprias avaliações de terceiros" | idem |
| A5 | "Sponsors need to identify the operational levers before close and start executing from day one." (Steffen Kroner, MD) | A&M, press release do European PE Value Creation Report 2026, Londres, 19/05/2026 (Europa, não Brasil) · https://www.alvarezandmarsal.com/press-release/private-equity-firms-turn-to-operational-value-creation-as-geopolitical-shocks-derail-deal-recovery |
| A6 | "AI is becoming an important part of the operational value creation toolkit, but it has to be tied to clear earnings and cash levers." (Bob Rajan, MD) e "45% point to data quality and availability" como barreira | idem |
| A7 | Página PE pt-br: "Post-deal operating issues have a way of disrupting even the best laid plans." | https://www.alvarezandmarsal.com/pt-br/expertise/private-equity-services (am_pages/pe_ptbr.md) |
| A8 | A&M publicou em 24/08/2026 "Cyber Resilience: A Board Responsibility Redefined" (Julio San Jose, MD) (só título e resumo vistos) | listagem na página A1 |

---

## 3. Frases-chave sugeridas para os slides (sem números)

### Slide "Desafio" (o problema do cliente)
- "Em 2026 o mercado compra menos e escolhe mais. Cada deal precisa provar valor técnico antes do signing." (M1-M5, M7)
- "O prêmio está no dado e na IA, e é exatamente aí que a diligência tradicional não enxerga." (M2, M3, M6)
- "Plataformas de consolidação compram em série. Sem padrão de integração, cada aquisição soma sistemas em vez de somar valor." (C1-C5)
- "Carve-outs de grupos sob pressão precisam separar tecnologia sem parar a operação." (T1, T3, T4)

### Slide "Riscos e Impactos" (o que dá errado)
- **Dados e IA:** "A ANPD virou agência, multa alto e já colocou a IA entre as prioridades. O passivo de dados entra na conta do comprador." (D1-D8)
- **Regra de IA em aberto:** "O Marco Legal da IA segue sem data na Câmara. Quem compra IA compra também a incerteza regulatória." (D9, D10)
- **Ciber herdado e terceiros:** "No deal você compra os acessos, os fornecedores e as credenciais do alvo. Os maiores ataques recentes ao sistema financeiro entraram por um fornecedor de tecnologia." (I1-I3, A1-A2)
- **Continuidade:** "Um incidente para o Pix, a fábrica ou o estaleiro. O valor se perde no primeiro dia de indisponibilidade." (I4-I6)
- **Regulação financeira em cadeia:** "Banco Central e CVM estenderam a régua de segurança a toda a cadeia de fornecedores." (R1-R6)
- **Sistemas fiscais:** "A reforma tributária transforma ERP e motor fiscal em risco de faturamento e de caixa. A diligência fiscal ficou prospectiva." (F1-F6)
- **Pessoas-chave:** "Times de tecnologia contratados como PJ continuam sem regra definida no STF: risco de retenção e de passivo." (P1-P3)
- **Separação:** "TSA mal desenhado vira dependência e disputa. Entrelaçamentos de TI não mapeados atrasam a autonomia do ativo." (T1, T3, T5)

### Slide "Mercado e Concorrência" (contexto do lado de mercado; benchmark de consultorias está em B1-B3)
- "Tecnologia lidera o número de operações. O valor migra para ativos com dado proprietário e IA aplicada." (M3, M7, M8)
- "Saúde, educação, seguros, agro e software consolidam por meio de compradores seriais." (C1-C5)
- "A IA entrou na mesa de M&A, mas o julgamento do especialista vale mais, não menos." (M8)
- "Cibersegurança e diligência tecnológica viraram cláusula de contrato, não anexo." (I8, F5)

---

## 4. Implicações para a oferta A&M (hypothesis, para orientar o portfólio de produtos)

1. **Diligência de Dados e IA** (nova ou ampliada): proveniência e propriedade do dado, base legal LGPD, governança de modelos, exposição à ANPD como reguladora residual de IA, prontidão para o PL 2.338. Responde direto ao "prêmio por dado proprietário e IA".
2. **Cyber & Third-Party Risk no deal** (ampliar a diligência de cibersegurança): inventário de acessos privilegiados, credenciais e fornecedores críticos do alvo; aderência a CMN 5.274 / BCB 538 quando houver exposição ao sistema financeiro. Conecta com a prática de TPRM da A&M Brasil (Eduardo Magalhaes) e com Global Cyber Risk Services.
3. **Separação de TI / TSA** (manter e reposicionar): log de entrelaçamentos, desenho de TSA com saída e reconstrução de plataformas críticas. Casos Nio/Oi e carve-outs de grupos alavancados como narrativa de mercado; cases UniFTC e Invepar como prova.
4. **Integração serial para plataformas buy-and-build:** padrão replicável de diligência e integração de sistemas e dados para consolidadores de saúde, educação, seguros, agro e software.
5. **Prontidão fiscal-sistêmica (IBS/CBS) no deal:** módulo conjunto TI + Tax para avaliar ERP e motor fiscal, split payment e créditos. Diferencial porque a A&M tem Tax no Brasil (página pt-br/expertise/tax no espelho).
6. **Talento e key-person em tecnologia:** mapa de PJ, dependência de pessoas-chave e retenção. Liga a diligência de tecnologia ao risco trabalhista (Tema 1.389).
7. **Remover do deck** (hypothesis): estatísticas genéricas antigas (ex.: "112% 2017-2022"; ver R1) e listas genéricas de riscos de TI sem gancho regulatório de 2026. Substituir pelos ganchos ANPD-agência, ataques via fornecedor, CMN 5.274 e reforma tributária.

---

## 5. Lacunas / não encontrado

- Nenhuma página de notícia brasileira pôde ser aberta (403). Tudo, exceto as páginas A&M do espelho, vem de títulos e resumos do buscador.
- Não confirmei o número/data exata da norma do BCB que "demanda seguro cibernético para fornecedores de tecnologia" (Inforchannel, 27/09/2025).
- Não verifiquei nesta sessão o Regulamento de Dosimetria (Res. CD/ANPD 4/2023); fica como hypothesis.
- Não há notícia de retomada do Tema 1.389 em set-out/2026.
- Não encontrei caso brasileiro nominado em que ciber, dados ou IA tenham mudado preço ou estrutura de um deal; só o caso anonimizado da TI Inside (X2) e o caso Sinqia (incidente pós-aquisição, sem vínculo público com ajuste de preço).
- Não encontrei pesquisa brasileira (survey) sobre o que compradores priorizam em DD de tecnologia em 2026.
- A Resolução CVM 239/2026 parece tratar da gestão interna da CVM, não de regra de ciber para o mercado (não usar).
- O número "15% a 30% no múltiplo" (Decripte) vem de blog de fornecedor, com autoridade baixa. Não usar nem como bastidor sem fonte primária.
