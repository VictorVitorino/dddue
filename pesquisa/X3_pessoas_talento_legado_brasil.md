# X3 — Riscos de pessoas, talento, legado, cloud e licenciamento em times de tecnologia (Brasil, 2024-2026)
## Insumo para due diligence de M&A — relatório de pesquisa

**Data da pesquisa:** 06/10/2026
**Método:** 25 buscas web (WebSearch, PT/EN) concluídas com resultados. Tentativas de abertura de páginas: 40+ (WebFetch, curl, Firecrawl).
**Limitação crítica (declarada):** nenhuma página pôde ser aberta integralmente nesta sessão. O proxy de egress da sessão bloqueou (CONNECT 403) todos os domínios tentados — inclusive planalto.gov.br, stf.jus.br, tst.jus.br, camara.leg.br, brasscom.org.br, eaesp.fgv.br, flexera.com, mckinsey.com, stripe.com, conjur.com.br, migalhas.com.br, abes.org.br, telesintese.com.br, mobiletime.com.br, exame.com e outros. O Firecrawl (fallback solicitado) retornou "Insufficient credits" / rate limit (chave compartilhada). O orçamento de buscas do turno (200, compartilhado entre agentes) esgotou-se após a 25ª busca útil. Portanto:
- Todos os números abaixo vêm de **trechos retornados pelo motor de busca** (snippets/resumos das páginas-fonte), com URL, título e data quando o trecho os trazia.
- Classificação: **evidence** = número literal atribuído a fonte nomeada no trecho; **hypothesis** = número de fonte secundária, sem data, de atribuição não verificada, ou de memória (marcado explicitamente).
- Os textos legais (Lei 9.609/98 e 9.610/98) **não foram confirmados no Planalto** nesta sessão. O que está marcado como literal veio de repositórios secundários de legislação (modeloinicial.com.br, normaslegais.com.br, legjur.com, qconcursos.com) via snippet. Recomenda-se conferência final no Planalto antes de uso em documento de DD.

---

## 1) Pejotização de profissionais de TI — status no STF (Tema 1.389) e números

### 1.1 Linha do tempo do Tema 1.389 (ARE 1.532.603, rel. Min. Gilmar Mendes)

| Data | Fato | Fonte |
|---|---|---|
| 14/04/2025 | Gilmar Mendes determina **suspensão nacional** de todos os processos que discutem a licitude da contratação de autônomos/PJ para prestação de serviços e a competência da Justiça do Trabalho para julgar fraude em contratos civis. Justificativa citada: grande volume de recursos ao STF contra decisões trabalhistas que, na avaliação dele, deixaram de aplicar a jurisprudência do STF sobre liberdade de organização produtiva. | Conjur, "STF suspende processos sobre licitude de contratos de serviços", 14/04/2025 — https://conjur.com.br/2025-abr-14/supremo-suspende-todos-os-processos-do-pais-que-discutem-pejotizacao/ ; Felsberg — https://www.felsberg.com.br/stf-determina-a-suspensao-de-todos-os-processos-que-versem-sobre-pejotizacao/ ; AASP — https://www.aasp.org.br/comunicado/stf-determina-suspensao-em-ambito-nacional-de-processos-sobre-pejotizacao/ |
| nov–dez/2025 | Julgamento de mérito iniciado no Plenário; **interrompido em dezembro/2025 por pedido de vista da Min. Cármen Lúcia** (sem prazo). Votaram com o relator: Alexandre de Moraes, Cristiano Zanin, Dias Toffoli e André Mendonça; **Edson Fachin divergiu** (placar parcial 5x1 pró-relator, conforme trecho). | APET, "STF deve julgar pejotização, fundo eleitoral e foro especial em 2026" — https://apet.org.br/noticia/stf-deve-julgar-pejotizacao-fundo-eleitoral-e-foro-especial-em-2026/ |
| fev/2026 | **PGR apresenta parecer favorável à pejotização**: constitucionalidade de formas alternativas de contratação; competência para analisar fraude em contratos civis seria da Justiça comum. | Marra CLT — https://www.marraclt.com.br/salario/pejotizacao-stf-tema-1389-o-que-muda ; Managefy — https://managefy.com.br/blog/pejotizacao-stf-tema-1389/ |
| jun/2026 | STF (Gilmar) **retira a suspensão para 1ª instância e TRTs**; processos voltam a tramitar nas instâncias ordinárias, mas **ficam suspensos após decisão dos TRTs** (não sobem ao TST/STF) até a fixação da tese. | STF Notícias — https://noticias.stf.jus.br/postsnoticias/stf-retira-suspensao-de-processos-sobre-pejotizacao-na-primeira-instancia-e-nos-trts/ ; TST — https://www.tst.jus.br/-/stf-retira-suspensao-de-processos-sobre-pejotizacao-na-primeira-instancia-e-nos-trts ; Migalhas — https://www.migalhas.com.br/quentes/458517/stf-gilmar-libera-nas-instancias-inferiores-acoes-de-pejotizacao ; Manual Jurídico Empresário, 22/06/2026 — https://manualjuridicoempresario.com/2026/06/22/tema-1389-stf-pejotizacao-processos-voltam-andar/ |
| jul–ago/2026 | **Sem decisão final de mérito** até jul/2026 (Managefy, atualização ago/2026 com "3 cenários"). | https://managefy.com.br/blog/pejotizacao-stf-tema-1389/ |
| 06/10/2026 | Nenhuma fonte encontrada indicando tese fixada até a data desta pesquisa. **Status: pendente (vista Cármen Lúcia).** | — |

**O que o Tema 1.389 decide (3 pontos):** (i) licitude da contratação de PJ/autônomo; (ii) competência da Justiça do Trabalho para julgar alegação de fraude; (iii) ônus da prova. Decisão terá repercussão geral (vinculante). Fonte: Marra CLT e Managefy (acima). **evidence** (trecho).

Outros registros: Gilmar suspendeu execução de condenação por pejotização até definição da tese (Migalhas 459993 — https://www.migalhas.com.br/quentes/459993/gilmar-suspende-execucao-sobre-pejotizacao-ate-stf-definir-tese); TRT-18 noticiou decisão do STF afastando aplicação do Tema 1389 em caso concreto (https://www.trt18.jus.br/portal/stf-afasta-aplicacao-do-tema-1389-em-acao-em-tramite-em-aguas-lindas-de-goias-que-discute-vinculo-empregatico-decisao-e-vinculante/). O TST publicou "Pejotização — Tema do mês fev./2026" (https://www.tst.jus.br/documents/d/biblioteca/2026_02_pejotizacao) — conteúdo não lido.

### 1.2 Volume de ações (TST)
- **285.055 processos** pedindo reconhecimento de vínculo empregatício na Justiça do Trabalho em **2024**, **+57% vs 2023**, segundo dados compilados pelo TST. Em 2025, **até fevereiro: 53.783 novos casos**; tema em **16º** no ranking de assuntos. Crescimento contínuo desde 2018 (exceto 2020-21). — Istoé Dinheiro, 20/04/2025 — https://istoedinheiro.com.br/processos-que-pedem-vinculo-de-emprego-como-na-pejotizacao-crescem-57-em-2024 ; Band — https://www.band.com.br/economia/noticias/processos-que-pedem-vinculo-de-emprego-como-na-pejotizacao-crescem-57-em-2024-202504200709 ; O Tempo — https://www.otempo.com.br/economia/2025/4/20/justica-do-trabalho-registra-alta-de-57-em-acoes-que-pedem-vinculo-de-emprego-como-a-pejotizacao . **evidence**.
- **"O STF destrancou 74 mil processos"** — número de ações sobre pejotização represadas pela suspensão, segundo artigo de opinião no Migalhas (https://www.migalhas.com.br/depeso/463704/pejotizacao-o-stf-destrancou-74-mil-processos--e-ninguem-sabe). Origem do número não verificada → **hypothesis**.
- Não encontrado: série CSJT específica "pejotização" (o TST classifica como "reconhecimento de vínculo"), nem recorte por setor de TI.

### 1.3 Percentual de profissionais de TI como PJ/MEI
- **Brasscom (estudo "Prospecção de Vagas de Entrada no Macrossetor TIC", ago/2025, PDF: https://brasscom.org.br/wp-content/uploads/2025/08/Prospeccao-vagas-entrada-v21-Versao-Final1.pdf), conforme reportado pela Abruc:** entre dez/2023 e dez/2025, do crescimento do nº de profissionais de TI, **44,4% foi CLT e 55,6% via MEI e informalidade**: **23,7 mil novos CLT, 88,5 mil novos MEI e 13,3 mil informais**; o estudo aponta que o custo da contratação CLT "vem impulsionando a pejotização". — https://www.abruc.org.br/deficit-de-profissionais-de-tecnologia-reduz-mas-setor-enfrenta-pejotizacao-e-fuga-das-universidades/ . **evidence** (trecho; PDF não aberto). Observação: o período "dez/2023–dez/2025" aparece no trecho; como o PDF é de ago/2025, parte pode ser projeção — conferir.
- Brasscom: macrossetor TIC pode gerar **até 147 mil empregos formais em 2025** (https://brasscom.org.br/macrossetor-de-tic-pode-gerar-ate-147-mil-empregos-formais-no-brasil-em-2025-aponta-estudo/); Telesíntese: "Brasscom projeta **33 mil vagas CLT** em TIC" (https://telesintese.com.br/brasscom-projeta-33-mil-vagas-clt-em-tic/). **evidence** (manchetes; base/ano não conferidos).
- **Código Fonte TV, Pesquisa Salarial de Programadores 2026** (https://pesquisa.codigofonte.com.br/2026): salário médio **CLT R$ 10.165,98 vs PJ R$ 13.436,23** (~32% a mais bruto). **evidence** (trecho). O **% de respondentes em regime PJ não foi capturado** no trecho → não encontrado.
- **Não encontrado:** percentual oficial de PJ entre profissionais de TI em Gupy, Revelo ou Glassdoor (buscas específicas não puderam ser feitas após esgotamento do orçamento). Estimativa de mercado frequentemente citada (30–50% PJ em dev) permanece **hypothesis** sem fonte nesta sessão.

### 1.4 Custo típico do passivo trabalhista por pejotização (reconhecimento de vínculo)
- Verbas típicas em condenação: **FGTS não recolhido (8%) + multa de 40%**, **13º salário**, **férias + 1/3**, **INSS patronal** não recolhido, verbas rescisórias (aviso prévio etc.), retroativo a **todo o período como PJ, limitado à prescrição quinquenal (5 anos)**. — Garcia Contabilidade — https://garciacont.com.br/artigos/pejotizacao-quando-vira-risco-trabalhista-pra-empresa ; Von Randow — https://vonrandow.adv.br/multas-riscos-empresa-sem-registrar/ . **evidence** (regra geral da CLT; valores dependem do caso).
- Ordem de grandeza do encargo CLT: "para cada **R$ 1 mil** pagos ao colaborador, a empresa pode gastar até **R$ 1.800**" (FGTS, férias, 13º, multa rescisória, INSS patronal, benefícios). — Contaja — https://contaja.com.br/blog/quanto-custa-um-funcionario-para-empresa/ . **hypothesis** (estimativa contábil genérica, fator 1,8x).
- Regra prática para DD (derivada, **hypothesis**): passivo ≈ (remuneração PJ mensal × 12 × anos ≤ 5) × ~45–70% (encargos + verbas) + multa de 40% FGTS + juros/correção + honorários. Para um PJ de R$ 15 mil/mês por 5 anos, o passivo bruto pode ultrapassar R$ 400–600 mil por pessoa. Nenhuma fonte com valor médio de condenação por pejotização em TI foi encontrada.
- Não encontrado: multa administrativa específica (art. 47 CLT, por empregado não registrado) com valor atualizado 2026 — conferir.

### 1.5 Rotatividade (turnover)
- **TI no Brasil: 30% a 35% ao ano**, "especialmente em startups e scale-ups", atribuído ao **LinkedIn Workforce Report 2025**. — CartaCapital, "Retenção de talentos em TI vira impasse diante da rotatividade de 35%" — https://www.cartacapital.com.br/do-micro-ao-macro/retencao-de-talentos-ti-rotatividade-35/ ; Portal Information Management, 24/02/2026 — https://docmanagement.com.br/02/24/2026/rotatividade-de-ate-35-em-ti-expoe-cinco-desafios-centrais-da-retencao-de-talentos/ . **hypothesis** (atribuição ao LinkedIn não verificada na fonte primária).
- Brasil, todos os setores: **51,3% ao ano** (CAGED; 36% voluntário, 45% sem justa causa, 16% contratos temporários). — Diário do Acionista — https://diariodoacionista.com.br/brasil-lidera-ranking-mundial-de-rotatividade-com-513-ao-ano-aponta-levantamento/ . **hypothesis** (levantamento secundário).
- Não encontrado: dado Revelo/Gupy de tempo médio de permanência em tech 2025/2026.

---

## 2) Déficit e custo de talentos de TI/IA

| Claim | Tipo | Fonte | Data | Número |
|---|---|---|---|---|
| Brasscom: demanda de talentos TIC 2021-2025 | evidence | https://brasscom.org.br/estudo-da-brasscom-aponta-demanda-de-797-mil-profissionais-de-tecnologia-ate-2025/ (PDF: https://brasscom.org.br/wp-content/uploads/2025/12/BRI2-2021-007-01-Demanda-de-Talentos-em-TIC-e-Sigma-TCEM-v112.pdf) | 01/12/2021 | **797 mil** talentos; **159 mil/ano** |
| Brasscom: formados/ano em cursos de perfil tecnológico | evidence | idem; TI Inside — https://tiinside.com.br/01/12/2021/estudo-da-brasscom-aponta-demanda-de-797-mil-profissionais-de-tecnologia-ate-2025/ | 01/12/2021 | **53 mil/ano** |
| Brasscom: déficit anual e acumulado | evidence | idem; FGV IBRE — https://ibre.fgv.br/blog-da-conjuntura-economica/artigos/deficit-de-profissionais-de-ti-pode-chegar-meio-milhao-ate-2025 | 2021/2022 | **106 mil/ano; 530 mil em 5 anos** |
| Google (com Abstartups e Brasscom): déficit até 2025 | evidence | Olhar Digital — https://olhardigital.com.br/2023/06/01/internet-e-redes-sociais/google-faz-alerta-sobre-mercado-da-tecnologia-no-brasil/ ; O Liberal — https://www.oliberal.com/economia/estudo-aponta-deficit-de-530-mil-profissionais-de-tecnologia-no-brasil-ate-2025-1.687827 | 05-06/2023 | **530 mil**; demanda ~800 mil vs 53 mil formados |
| Google: startups que afirmam faltar profissionais de tecnologia | evidence | idem | 2023 | **92%** das startups |
| Google: Brasil no G20 em "desperdício" de PIB por falta de habilidades digitais | evidence | idem | 2023 | **3ª posição** no G20 |
| Nome "Economia Digital" (Google Brasil) | não confirmado | — | — | Título exato do estudo não confirmado nos trechos |
| Robert Half Guia Salarial 2026: Engenheiro(a) de IA, média nacional | evidence | Canaltech — https://canaltech.com.br/mercado/salario-de-r-19-mil-guia-mostra-as-profissoes-de-tecnologia-em-alta-em-2026/ ; Exame — https://exame.com/tecnologia/examelab/salario-de-engenheiro-de-ia-dados-e-ciberseguranca-quanto-o-mercado-brasileiro-paga-em-2026/ ; Robert Half — https://www.roberthalf.com/br/pt/vagas-detalhes/engenheiroa-de-inteligencia-artificial | nov/2025 | **P25 R$ 19.500 / P50 R$ 25.000 / P75 R$ 27.100** mensais |
| Robert Half 2026: gestores de tecnologia dispostos a pagar mais por certificação/especialização | evidence | FIAP — https://www.fiap.com.br/radar-tech/post/raio-x-da-valorizacao-tech-2026-onde-estao-os-melhores-salarios-em-tecnologia/ | nov/2025 | **48%** |
| Robert Half 2026: empresas que pretendem expandir times de tecnologia | evidence | SEGS — https://www.segs.com.br/seguros/434428-robert-half-2026-quase-metade-das-empresas-pretende-expandir-times-de-tecnologia ; Canaltech (acima) | nov/2025 | **4 em 10** ("quase metade") |
| Especialistas IA/ML/modelagem preditiva (faixa alternativa citada) | hypothesis | Capitalist — https://capitalist.com.br/quer-ganhar-bem-essas-profissoes-podem-pagar-mais-de-r-27-mil-em-2026-segundo-recrutadores/ | 2025 | R$ 14.000–22.000 |
| Revelo: salários IA / turnover 2025-2026 | não encontrado | — | — | Busca específica não realizada (orçamento esgotado) |
| Dependência de pessoas-chave em PMEs de tecnologia (dado quantitativo BR) | não encontrado | Portal Information Management, 02/12/2026 (qualitativo) — https://docmanagement.com.br/02/12/2026/a-dependencia-silenciosa-de-pessoas-chave-que-coloca-a-operacao-de-ti-em-risco/ | 2026 | Sem número BR |
| "68% dos desenvolvedores admitem ter conhecimento crítico não documentado" (atribuído a pesquisa anual Stack Overflow) | hypothesis | citado no artigo acima; fonte primária não verificada | — | 68% |

Leitura para DD: o déficit estrutural (Brasscom/Google) e a aceleração de MEI/PJ (Brasscom 2025) combinam-se com salários de IA no topo da tabela (Robert Half) — o custo de reposição de um engenheiro sênior de IA/dados tende a ser ≥ R$ 25 mil/mês + 30–50% de encargos se CLT, e o risco de "pessoa-chave" permanece sem benchmark quantitativo brasileiro.

---

## 3) Dívida técnica, sistemas legados e gasto de TI (mundo e Brasil)

| Claim | Tipo | Fonte | Data | Número |
|---|---|---|---|---|
| Stripe "The Developer Coefficient": tempo semanal de devs em dívida técnica + código ruim | evidence (fonte secundária; PDF original não aberto) | Tiny — https://www.tiny.cloud/technical-debt-whitepaper/ ; DEV — https://dev.to/d_v_/technical-debt-consumes-40-of-it-budgets-4jf1 (original: https://stripe.com/files/reports/the-developer-coefficient.pdf) | 2018 | **42%** da semana (13,5 h dívida técnica + 3,8 h bad code; 17,3 h manutenção) |
| Stripe: custo de oportunidade global anual | evidence (secundária) | idem | 2018 | **~US$ 85 bilhões/ano** |
| Stripe: amostra | evidence (secundária) | idem | 2018 | >1.000 devs e >1.000 executivos |
| McKinsey "Tech debt: Reclaiming tech equity": orçamento de novos produtos desviado para dívida técnica | evidence | https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/tech-debt-reclaiming-tech-equity | survey jul/2020 (publ. out/2020) | **10–20%** |
| McKinsey: dívida técnica como % do valor do "technology estate" (antes de depreciação) | evidence | idem | 2020 | **20–40%** |
| McKinsey: CIOs que dizem que >20% do orçamento é desviado | evidence | idem | 2020 | **~30%** |
| McKinsey: CIOs que percebem aumento da dívida técnica em 3 anos | evidence | idem | 2020 | **60%** (amostra: 50 CIOs, empresas >US$ 1 bi, fin. e tech) |
| FGVcia 36ª Pesquisa Anual do Uso de TI (2025): amostra | evidence | Resumo PDF — https://eaesp.fgv.br/sites/eaesp.fgv.br/files/u68/pesti_fgvcia_resumo_2025.pdf ; página — https://eaesp.fgv.br/producao-intelectual/pesquisa-anual-uso-ti | dados até jun/2025 | **2.672** respostas válidas de >14.000 empresas; 68% das 500 maiores |
| FGVcia: gasto+investimento em TI como % da receita (média das médias e grandes empresas) | evidence | pdcati — https://www.pdcati.com.br/investimentos-ti-2025/ ; TI Especialistas — https://www.tiespecialistas.com.br/pesquisa-fgv-2025-planejamento-estrategico-ti/ | 2025 (ref. 2024) | **10,0%** (1,3% em 1988); expectativa **>11% em 2026** |
| FGVcia: gasto de TI % receita por setor | evidence | idem | 2025 | **Financeiro 21,0% / Serviços 14,5% / Indústria 5,5% / Comércio 4,8%** |
| FGVcia: CAPU (custo anual de TI por usuário) | evidence | idem | 2025 | **Financeiro R$ 135 mil / Serviços R$ 72 mil / média R$ 60 mil / Indústria R$ 52 mil / Comércio R$ 40 mil** |
| FGVcia: dispositivos digitais em uso no Brasil | evidence | Telesíntese — https://telesintese.com.br/brasil-chega-a-502-milhoes-de-dispositivos-digitais-em-uso-aponta-fgvcia/ ; Portal FGV — https://portal.fgv.br/noticias/brasil-tem-mais-dispositivos-digitais-em-uso-do-que-habitantes-revela-pesquisa-da-fgv | mai/2025 | **502 milhões** (2,4 por habitante) |
| FGVcia: computadores (corporativos + domésticos) em uso | evidence | idem | jun/2025 | **230 milhões** |
| FGVcia: gasto de TI dos bancos | evidence | pdcati (acima) | 2025 | deve chegar a **R$ 56 bi em 2027** (dobrou na década) |
| Gartner: gasto global de TI 2026 | evidence | ABES — https://abes.org.br/en/gartner-preve-que-os-gastos-mundiais-com-ti-crescerao-142-em-2026-totalizando-us-637-trilhoes/ ; DCD — https://www.datacenterdynamics.com/br/not%C3%ADcias/gartner-indica-que-gastos-mundiais-com-ti-crescer%C3%A3o-135-em-2026/ ; TI Inside 31/10/2025 — https://tiinside.com.br/31/10/2025/gartner-preve-crescimento-de-98-nos-gastos-com-ti-em-2026-ultrapassando-us-6-trilhoes/ | revisões out/2025 → jul/2026 | **US$ 6,37 tri (+14,2%)** (antes: +9,8%, +13,5%) |
| Gartner: data center 2025→2026; IA 2026; software 2026 | evidence | idem | jul/2026 | DC **US$ 506 bi → 822 bi (+62,5%)**; IA **US$ 2,59 tri (+47%)**; software **+15,2%** |
| % do orçamento de TI em manutenção/legado no Brasil (IDC Brasil, Gartner Brasil) | não encontrado | — | — | — |
| Gartner Brasil (previsão específica BR 2026) | não encontrado | — | — | — |

---

## 4) Cloud no Brasil: adoção, gastos, desperdício

| Claim | Tipo | Fonte | Data | Número |
|---|---|---|---|---|
| ABES/IDC: mercado TIC Brasil 2025 | evidence | Mobile Time — https://www.mobiletime.com.br/noticias/31/07/2025/tic-brasileiro-usd-96-bi/ | 31/07/2025 | **US$ 96,5 bi (+7,2%)** vs US$ 90 bi em 2024 |
| ABES/IDC: nuvem pública Brasil 2025 | evidence | idem; Inforchannel 14/08/2025 — https://inforchannel.com.br/2025/08/14/ia-e-seguranca-puxam-crescimento-da-nuvem-no-brasil/ | 2025 | **US$ 3,5 bi (+20%)** vs US$ 2,92 bi em 2024 |
| IDC: investimentos em nuvem Brasil 2025-2028 | evidence (trecho) | Inforchannel — https://inforchannel.com.br/2025/03/31/gastos-com-infraestrutura-em-nuvem-crescem-de-forma-acelerada-diz-idc/ (ou 14/08/2025) | 2025 | **+15% a.a., somando R$ 331,9 bi** |
| IDC: crescimento TIC Brasil 2025 / 2026 | evidence | Inforchannel 13/02/2025 — https://inforchannel.com.br/2025/02/13/idc-divulga-previsoes-otimistas-para-o-brasil-com-o-mercado-de-tic-crescendo-13/ ; G&P — https://www.gpnet.com.br/2025/02/14/mercado-de-ti-no-brasil-deve-crescer-13-em-2025-preve-idc/ | fev/2025; 2026 | **+13% (2025)**; **11–12% (2026)** |
| IDC: infraestrutura tradicional 2026 | evidence (trecho) | idem | 2026 | LatAm **US$ 2,9 bi**, Brasil **~US$ 1,1 bi** |
| IDC: infra de nuvem pública Brasil (manchete) | evidence (manchete, sem data) | Convergência Digital — https://convergenciadigital.com.br/mercado/gastos-com-infraestrutura-em-nuvem-publica-vao-bater-r-20-bilhoes/ | s/d | **R$ 20 bi** |
| ABES/IDC "Mercado Brasileiro de Software 2025": mercado de TI Brasil | evidence | The Shift — https://theshift.info/hot/crescimento-tecnologia-brasil-abes-idc/ ; PDF — https://telesintese.com.br/wp-content/uploads/2026/03/ABES-Estudo-Mercado-Brasileiro-de-Software-2025.pdf ; Descomplica — https://descomplica.com.br/blog/mercado-de-ti-brasil-cresce-em-2025-abes-2/ | mar/2026 | **US$ 67,8 bi em 2025 (+18,5%** vs US$ 58,6 bi); **10º** mundial; **38%** da América Latina |
| ABES: crescimento previsto software 2025 (edição anterior) | evidence | TI Inside 20/03/2025 — https://tiinside.com.br/20/03/2025/mercado-brasileiro-de-software-deve-crescer-95-em-2025-aponta-estudo/ | 20/03/2025 | **+9,5%** |
| Flexera State of the Cloud 2025: desperdício em IaaS/PaaS | evidence | Flexera blog — https://www.flexera.com/blog/finops/cloud-cost-management-trends/ ; SoftwareOne — https://www.softwareone.com/en-us/blog/articles/2025/05/14/flexera-2025-state-of-the-cloud-recap | 2025 (dados 2024) | **27%** |
| Flexera 2026: desperdício em IaaS/PaaS | evidence | ProsperOps — https://www.prosperops.com/blog/flexeras-2026-state-of-the-cloud-report-takeaways/ ; SHI — https://blog.shi.com/business-of-it/software-licensing/finops-flexera-report/ | 2026 | **29%** (primeira alta em 5 anos; atribuída a IA/GPU e novos PaaS/SaaS) |
| Flexera 2026: estouro de orçamento de nuvem pública | evidence | idem | 2026 | **17% acima do orçamento** (mesmo valor citado na edição 2025) |
| Flexera 2026: amostra e gasto gerido | evidence | idem | 2026 | **1.192** respondentes; **US$ 83 bi**/ano de gasto em nuvem |
| Flexera 2026: grandes empresas gastando >US$ 5 mi/mês em nuvem pública | evidence | idem | 2026 | **76%** |
| Flexera 2026: gestão de custos como principal desafio | evidence | idem | 2026 | **85%** (segurança 82%; licenças de software 78%) |
| Flexera 2026: GenAI como serviço de nuvem pública | evidence | idem | 2026 | **58%** (50% no ano anterior) |
| FinOps Foundation "State of FinOps" 2025/2026 | não encontrado | — | — | Busca não realizada (orçamento esgotado) |
| Custo médio de nuvem por empresa no Brasil | não encontrado | — | — | — |

---

## 5) Licenciamento de software: auditorias, pirataria e base legal

### 5.1 Base legal (textos literais — **não confirmados no Planalto nesta sessão**)
- **Lei 9.609/98, art. 12 (caput)** — via modeloinicial.com.br (https://modeloinicial.com.br/lei/L-9609-1998/lei-software/art-12) e QConcursos: *"Violar direitos de autor de programa de computador: Pena – Detenção de seis meses a dois anos ou multa."* **§ 1º**: reprodução, por qualquer meio, no todo ou em parte, **para fins de comércio**, sem autorização expressa do autor → **reclusão de um a quatro anos e multa**. **§ 2º**: mesma pena para quem **vende, expõe à venda, introduz no País, adquire, oculta ou tem em depósito, para fins de comércio**, original ou cópia produzida com violação de direito autoral. Classificação: **evidence** (texto via repositório secundário; conferir Planalto: https://www.planalto.gov.br/ccivil_03/leis/l9609.htm). §§ 3º-4º (ação penal pública/privada) não capturados.
- **Lei 9.609/98, art. 14** — **não confirmado**. A busca específica não pôde ser executada. Paráfrase de memória (**hypothesis**, verificar): independentemente da ação penal, o prejudicado pode propor ação para proibir a prática do ato, com cominação de pena pecuniária; cumulável com perdas e danos; cabe liminar; busca e apreensão nos moldes do art. 13; segredo de justiça para informações confidenciais; responsabilidade por má-fé.
- **Lei 9.610/98, art. 103, parágrafo único** — via normaslegais.com.br (https://www.normaslegais.com.br/legislacao/trabalhista/lei9610_1998.htm) e legjur (https://www.legjur.com/legislacao/art/lei_00096101998-103): *"Não se conhecendo o número de exemplares que constituem a edição fraudulenta, pagará o transgressor o valor de três mil exemplares, além dos apreendidos."* **evidence** (texto literal via repositório secundário; Planalto: https://www.planalto.gov.br/ccivil_03/leis/l9610.htm).
- **Lei 9.610/98, art. 103 caput e art. 102** — texto literal **não capturado** nos trechos. Paráfrase de memória (**hypothesis**, verificar): art. 102 — o titular de obra fraudulentamente reproduzida/divulgada/utilizada pode requerer apreensão dos exemplares ou suspensão da divulgação, sem prejuízo da indenização; art. 103 caput — quem editar obra sem autorização perde os exemplares apreendidos e paga o preço dos vendidos.
- Aplicação a software: ABES afirma que indenizações por uso de software sem licença *"podem chegar a 3 mil vezes o valor de cada software instalado por computador"* (trecho atribuído à ABES — https://abes.org.br/en/pesquisa-mundial-mostra-queda-na-pirataria-de-softwares-no-brasil/). **hypothesis** quanto à aplicação uniforme: a jurisprudência do STJ sobre art. 103 p.u. para software não foi verificada nesta sessão (há precedentes conhecidos em ambos os sentidos — conferir antes de usar).

### 5.2 Auditorias de fabricantes no Brasil (qualitativo; fontes de consultorias SAM)
- **Microsoft**: criou divisão antipirataria no Brasil; auditorias conduzidas via **escritórios de advocacia terceirizados**, independentemente de porte/receita; início **extrajudicial por e-mail**, com planilhas de inventário de dispositivos/licenças cruzadas com os registros da Microsoft. — Inforsense — https://inforsense.com.br/auditoria-de-licencas-microsoft/ ; ITACS — https://www.itacs.com.br/auditorias.html . **evidence** (qualitativo; sem números).
- **Oracle**: "lidera em volume de ajustes financeiros pós-auditoria" no Brasil segundo consultorias SAM (métricas Processor/Named User Plus, virtualização VMware); processo: notificação do Oracle LMS, coleta por scripts, reconciliação, relatório formal. — 4MATT — https://4matt.com.br/auditoria-oracle-licenciamento/ . **hypothesis** (afirmação de consultoria).
- **SAP**: medições periódicas obrigatórias; usuários mal classificados geram **multas retroativas**; "motores" ativados sem conhecimento do negócio. — 4MATT — https://4matt.com.br/licenciamento-sap ; https://4matt.com.br/licenciamento-microsoft-x-sap . **hypothesis** (qualitativo).
- "Até **60%** das organizações auditadas pelos grandes fabricantes apresentam algum nível de não-conformidade" — atribuído à Gartner por 4MATT (https://4matt.com.br/en/auditoria-de-licencas-de-software-em-2026). **hypothesis** (citação secundária, sem ano).
- Autodesk, IBM: nenhum dado brasileiro específico encontrado.

### 5.3 Pirataria / compliance (ABES/BSA)
- BSA: **46%** do software usado no Brasil é pirata (edição/ano não confirmados no trecho; compatível com BSA Global Software Survey 2018). — ABES — https://abes.org.br/en/pesquisa-mundial-mostra-queda-na-pirataria-de-softwares-no-brasil/ . **hypothesis** quanto ao ano.
- ABES: software pirata "ocupa **50%** do mercado brasileiro"; Brasil **5º** país em casos de violação de licença; perdas **US$ 2,8 bi** no Brasil / **US$ 62,7 bi** no mundo (números de relatórios BSA antigos, provavelmente 2011-2013; sem data no trecho). — IT Forum — https://itforum.com.br/noticias/software-pirata-ainda-ocupa-50-do-mercado-brasileiro-segundo-abes/ ; iMasters — https://imasters.com.br/noticia/de-acordo-com-abes-software-pirata-ocupa-50-do-mercado-brasileiro . **hypothesis** (desatualizado).
- Enforcement recente (sem data no trecho): "Polícia aborda **59 revendas** de software no Brasil" (https://abes.org.br/policia-aborda-59-revendas-de-software-no-brasil/); ação em Caraguatatuba (https://abes.org.br/caraguatatuba-e-alvo-de-acao-policial-contra-pirataria-de-software/); BSA intensifica ações judiciais em Salvador (https://abes.org.br/bsa-intensifica-acoes-judiciais-contra-pirataria-de-software-em-salvador/); ABES/BSA/ESA divulgam balanço antipirataria (https://itforum.com.br/noticias/abes-bsa-e-esa-divulgam-balanco-das-acoes-de-combate-a-pirataria/); ABES lança Manual de Gestão de Ativos de Software (https://abes.org.br/abes-lanca-manual-de-gestao-de-ativos-de-software/). **evidence** de atividade; datas e números não capturados.
- Não encontrado: dado BSA/ABES **2023-2026** de taxa de uso não licenciado (a BSA não publica a Global Software Survey desde 2018, hipótese a confirmar).

---

## 6) Tabela consolidada — os números mais relevantes para DD

| # | Claim | Tipo | Fonte (URL) | Data | Número |
|---|---|---|---|---|---|
| 1 | Suspensão nacional de processos de pejotização (Tema 1.389) | evidence | https://conjur.com.br/2025-abr-14/supremo-suspende-todos-os-processos-do-pais-que-discutem-pejotizacao/ | 14/04/2025 | todos os processos no país |
| 2 | Pedido de vista Cármen Lúcia; placar parcial | evidence | https://apet.org.br/noticia/stf-deve-julgar-pejotizacao-fundo-eleitoral-e-foro-especial-em-2026/ | dez/2025 | 5 votos c/ relator, 1 divergente |
| 3 | Liberação de tramitação em 1ª instância e TRTs | evidence | https://noticias.stf.jus.br/postsnoticias/stf-retira-suspensao-de-processos-sobre-pejotizacao-na-primeira-instancia-e-nos-trts/ | jun/2026 | suspensão mantida após TRTs |
| 4 | Ações de reconhecimento de vínculo na JT em 2024 | evidence | https://istoedinheiro.com.br/processos-que-pedem-vinculo-de-emprego-como-na-pejotizacao-crescem-57-em-2024 | 20/04/2025 | 285.055 (+57%); 53.783 em jan-fev/2025 |
| 5 | Crescimento de profissionais de TI via MEI/informal | evidence | https://www.abruc.org.br/deficit-de-profissionais-de-tecnologia-reduz-mas-setor-enfrenta-pejotizacao-e-fuga-das-universidades/ | 2025 | 55,6% MEI+informal; 88,5 mil MEI vs 23,7 mil CLT |
| 6 | Salário PJ vs CLT devs | evidence | https://pesquisa.codigofonte.com.br/2026 | 2026 | PJ R$ 13.436 vs CLT R$ 10.166 |
| 7 | Turnover em TI | hypothesis | https://www.cartacapital.com.br/do-micro-ao-macro/retencao-de-talentos-ti-rotatividade-35/ | 2025/26 | 30–35% a.a. |
| 8 | Déficit de talentos TIC | evidence | https://brasscom.org.br/estudo-da-brasscom-aponta-demanda-de-797-mil-profissionais-de-tecnologia-ate-2025/ | 01/12/2021 | 797 mil demanda; 530 mil déficit |
| 9 | Startups sem profissionais de tecnologia | evidence | https://olhardigital.com.br/2023/06/01/internet-e-redes-sociais/google-faz-alerta-sobre-mercado-da-tecnologia-no-brasil/ | 06/2023 | 92% |
| 10 | Salário Engenheiro de IA (Robert Half 2026) | evidence | https://canaltech.com.br/mercado/salario-de-r-19-mil-guia-mostra-as-profissoes-de-tecnologia-em-alta-em-2026/ | 11/2025 | R$ 19,5–27,1 mil/mês |
| 11 | Tempo de dev em dívida técnica (Stripe) | evidence | https://www.tiny.cloud/technical-debt-whitepaper/ | 2018 | 42% da semana; US$ 85 bi/ano |
| 12 | Dívida técnica (McKinsey) | evidence | https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/tech-debt-reclaiming-tech-equity | 2020 | 10–20% orçamento; 20–40% do estate |
| 13 | Gasto de TI % receita por setor (FGVcia) | evidence | https://eaesp.fgv.br/sites/eaesp.fgv.br/files/u68/pesti_fgvcia_resumo_2025.pdf | 2025 | 10% média; Fin 21%; Serv 14,5%; Ind 5,5%; Com 4,8% |
| 14 | Computadores / dispositivos em uso (FGVcia) | evidence | https://telesintese.com.br/brasil-chega-a-502-milhoes-de-dispositivos-digitais-em-uso-aponta-fgvcia/ | 05-06/2025 | 230 mi computadores; 502 mi dispositivos |
| 15 | Nuvem pública Brasil (ABES/IDC) | evidence | https://www.mobiletime.com.br/noticias/31/07/2025/tic-brasileiro-usd-96-bi/ | 31/07/2025 | US$ 3,5 bi (+20%); TIC US$ 96,5 bi |
| 16 | Mercado de TI Brasil 2025 (ABES/IDC) | evidence | https://theshift.info/hot/crescimento-tecnologia-brasil-abes-idc/ | 03/2026 | US$ 67,8 bi (+18,5%) |
| 17 | Cloud waste (Flexera 2026) | evidence | https://www.prosperops.com/blog/flexeras-2026-state-of-the-cloud-report-takeaways/ | 2026 | 29% desperdício; 17% acima do orçamento |
| 18 | Cloud waste (Flexera 2025) | evidence | https://www.flexera.com/blog/finops/cloud-cost-management-trends/ | 2025 | 27% |
| 19 | Lei 9.609 art. 12 pena | evidence (sec.) | https://modeloinicial.com.br/lei/L-9609-1998/lei-software/art-12 | 1998 | detenção 6 meses–2 anos ou multa; §1º reclusão 1–4 anos |
| 20 | Lei 9.610 art. 103 p.u. | evidence (sec.) | https://www.normaslegais.com.br/legislacao/trabalhista/lei9610_1998.htm | 1998 | 3.000 exemplares + apreendidos |
| 21 | Pirataria de software BR (BSA) | hypothesis (ano) | https://abes.org.br/en/pesquisa-mundial-mostra-queda-na-pirataria-de-softwares-no-brasil/ | ~2018 | 46% |
| 22 | Não-conformidade em auditorias (Gartner via 4MATT) | hypothesis | https://4matt.com.br/en/auditoria-de-licencas-de-software-em-2026 | s/d | até 60% |

---

## 7) O que NÃO foi encontrado / não confirmado
1. Tese final do Tema 1.389 — não há (julgamento pendente de vista até a última fonte, ago/2026).
2. Texto literal dos arts. 14 da Lei 9.609 e 102/103-caput da Lei 9.610 no Planalto — páginas bloqueadas; art. 12 (9.609) e art. 103 p.u. (9.610) obtidos de repositórios secundários.
3. Percentual de profissionais de TI em regime PJ (Gupy, Revelo, Glassdoor) — não localizado; apenas proxy Brasscom (55,6% do crescimento via MEI/informal) e diferencial salarial Código Fonte TV.
4. Série estatística TST/CSJT com rótulo "pejotização" — o TST usa "reconhecimento de vínculo" (285.055 em 2024).
5. Valor médio de condenação por pejotização em TI — inexistente nas fontes.
6. Dados Revelo 2025/2026 (salários IA, turnover) e Gupy (turnover/permanência) — buscas não realizadas por esgotamento do orçamento.
7. Nome/edição exata do estudo "Economia Digital" do Google Brasil — não confirmado; o estudo localizado é Google + Abstartups + Brasscom (2023).
8. % do orçamento de TI brasileiro gasto em manutenção/legado (IDC Brasil/Gartner Brasil) — não localizado.
9. Gartner Brasil 2026 (previsão país) — não localizado; só global.
10. FinOps Foundation State of FinOps 2025/2026 — não pesquisado (orçamento).
11. Dados ABES/BSA 2023-2026 de taxa de pirataria — não localizados (os números disponíveis são de ciclos anteriores).
12. Auditorias Autodesk e IBM no Brasil — nada específico.
13. Benchmark quantitativo brasileiro de dependência de pessoas-chave em PMEs de tecnologia — nada; só literatura qualitativa.

## 8) Implicações práticas para o checklist de DD (síntese)
- **Pejotização:** tratar todo PJ "full-time, exclusivo, subordinado" como passivo contingente até a tese do STF; estimar com prescrição de 5 anos e fator de encargos 1,4–1,8x; verificar se há ações em curso (que voltaram a tramitar desde jun/2026) e se há execuções suspensas.
- **Talento:** mapear concentração de conhecimento (bus factor) e custo de reposição com base nas faixas Robert Half 2026; considerar turnover setorial de 30–35% como premissa de stress.
- **Legado/dívida técnica:** usar 10–20% do orçamento de novos produtos (McKinsey) e 42% do tempo de dev (Stripe) como benchmarks de "imposto de dívida técnica"; comparar gasto de TI/receita do alvo com a mediana setorial FGVcia (10% geral; 4,8% comércio a 21% financeiro).
- **Cloud:** aplicar 27–29% de desperdício e 17% de estouro orçamentário (Flexera) como faixa de ajuste em projeções de opex de nuvem na ausência de FinOps maduro.
- **Licenças:** quantificar exposição com a regra dos 3.000 exemplares (art. 103 p.u.) como cenário máximo e com o preço de lista × instalações não licenciadas como cenário base; mapear contratos Microsoft/Oracle/SAP e histórico de notificações extrajudiciais.
