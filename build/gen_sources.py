import json,html,pathlib
b=pathlib.Path(__file__).parent
E=json.load(open((b/'evidence.json') if (b/'evidence.json').exists() else (b.parent/'dados'/'evidence.json')))['items']
TOPIC={'mercado':'Mercado','deck':'Deck A&M','concorrencia':'Concorrência','demanda_ia':'IA em M&A','integracao':'Integração','software':'Software','ia_local':'IA no Brasil','pessoas':'Pessoas','legado':'Legado e cloud','licencas':'Licenças','regulatorio':'Regulatório'}
def badge(e):
    t=e.get('type'); c={'high':'alta','med':'média','low':'baixa'}.get(e.get('conf',''),e.get('conf',''))
    if t=='evidence': return f'<span class="ev ev-e">Evidência · {c}</span>'
    if t=='law': return '<span class="ev ev-am">Lei · conferir</span>'
    return f'<span class="ev ev-h">Hipótese · {c}</span>'
def esc(s): return html.escape(str(s),quote=False)
chunks=[E[i:i+14] for i in range(0,len(E),14)]
out=[]
for k,ch in enumerate(chunks):
    rows=''.join(f'<tr style="height:44px"><td><b>{esc(e["id"])}</b></td><td>{esc(TOPIC.get(e.get("topic",""),e.get("topic","")))}</td><td>{esc(e["claim"])}</td><td>{esc(e["src"])}<br><span style="color:var(--muted)">{esc(e.get("date","—"))}</span>{(" · <a href=\""+esc(e["url"])+"\" target=\"_blank\" rel=\"noopener\" style=\"color:var(--blue)\">link</a>") if e.get("url") else ""}</td><td>{badge(e)}</td></tr>' for e in ch)
    out.append(f'''<section class="slide" data-p="Anexos" data-t="Fontes {k+1}/{len(chunks)}" data-band="Fontes e nível de confiança · {k+1} de {len(chunks)}" data-c="c-steel" data-bs="Registro de evidências {ch[0]['id']}–{ch[-1]['id']} · {len(E)} itens no total" data-src="Pesquisa de 06/10/2026 por motor de busca (pt e en); páginas-fonte não abertas nesta sessão por política de rede; trechos literais atribuídos às fontes. Confiança: alta = 2+ fontes independentes; média = 1 trecho literal; baixa = fonte secundária ou divergência." data-desc="Registro completo das evidências usadas na apresentação, com fonte, data, link e nível de confiança. Hipóteses e textos legais estão marcados. Recomenda-se abrir as fontes antes de uso externo.">
  <div class="body" style="padding-top:8px">
    <table class="tbl" style="font-size:10px">
      <tr><th style="width:4%">ID</th><th style="width:8%">Tema</th><th style="width:52%">Claim</th><th style="width:26%">Fonte · data</th><th>Tipo</th></tr>
      {rows}
    </table>
  </div>
</section>''')
(b/'sources_slides.html').write_text('\n'.join(out)); print(len(chunks),'source slides,',len(E),'items')
