import json,pathlib,html
b=pathlib.Path(__file__).parent
D=json.loads(((b/'products.json') if (b/'products.json').exists() else (b.parent/'dados'/'products.json')).read_text())
P=D['products']
ST={'keep':('st-keep','Manter'),'improve':('st-improve','Aprimorar'),'create':('st-create','Criar')}
def esc(s): return html.escape(s,quote=False)
def ev_badge(t):
    return '<span class="ev ev-e">Evidência</span>' if t=='evidence' else ('<span class="ev ev-am">Lei · conferir</span>' if t=='am' else '<span class="ev ev-h">Hipótese</span>')
def ai_dots(n):
    return ''.join(f'<i style="display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:3px;background:{"var(--gold)" if i<n else "#D7E0E8"}"></i>' for i in range(3))
def tile(p,extra=''):
    sc,sl=ST[p['status']]
    return (f'<div class="pcard {p["status"]} clk" data-goto="{p["id"]}" data-a="up" style="--d:{int(p["num"])};{extra}">'
            f'<span class="num">{p["num"]}</span><span class="st {sc}" style="align-self:flex-start">{sl}</span>'
            f'<div class="pn">{esc(p["name"])}</div><div class="pd">{esc(p["tag"])}</div>'
            f'<div class="pf">ver detalhe <span>→</span></div></div>')
by={p['id']:p for p in P}
# ONE PAGE GRID
cols=[('M&A Strategy',['p01']),('Pré-deal',['p03','p02','p04','p05','p06']),('Sign-to-Close',['p07','p08']),('100 days',['p09']),('Hold period (~3–5 anos)',['p10']),('Exit',['p11'])]
widths=['190px','420px','210px','190px','200px','190px']
op=['<div style="display:grid;grid-template-columns:'+' '.join(widths)+';gap:14px;margin-top:8px">']
for (ph,ids),w in zip(cols,widths):
    op.append(f'<div style="display:flex;flex-direction:column;gap:10px"><div style="font:800 12px var(--fh);letter-spacing:.08em;text-transform:uppercase;color:#fff;background:var(--navy);border-radius:6px;padding:6px 10px;text-align:center;position:relative">{esc(ph)}<span style="position:absolute;right:-12px;top:50%;transform:translateY(-50%);color:var(--navy)">›</span></div>')
    if ph=='Pré-deal':
        op.append(tile(by['p03'],'flex:0 0 auto'))
        op.append('<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;flex:1">'+''.join(tile(by[i]) for i in ['p02','p04','p05','p06'])+'</div>')
    else:
        for i in ids: op.append(tile(by[i],'flex:1'))
    op.append('</div>')
op.append('</div>')
# engine band
e=by['p12']
op.append(f'<div class="pcard create clk" data-goto="p12" data-a="up" style="--d:13;margin-top:12px;flex-direction:row;align-items:center;gap:18px;padding:10px 16px;border-top-width:5px"><span class="st st-create">Criar</span><div class="pn" style="font-size:17px">{esc(e["name"])}</div><div class="pd" style="flex:1">{esc(e["tag"])} · ingestão de VDR, inventário automático, scanners, score das 8 lentes, benchmarks, CAPEX/OPEX, relatórios e copilotos (Playbook, VDR, Cockpit)</div><div class="pf" style="margin:0">ver detalhe <span>→</span></div></div>')
(b/'onepage_tiles.html').write_text('\n'.join(op))
# DETAIL SLIDES
def blk(n,color,title,inner):
    return f'<div class="dblk" data-a="up" style="--d:{n+1}"><div class="dh"><i style="background:{color}">{n}</i>{title}</div>{inner}</div>'
def ul(items): return '<ul>'+''.join(f'<li>{i}</li>' for i in items)+'</ul>'
out=[]
for p in P:
    sc,sl=ST[p['status']]
    ev=(p.get('evidence') or [])[:4]
    def short(t,n=175):
        t=str(t); return t if len(t)<=n else t[:n].rsplit(' ',1)[0]+'…'
    evh=''.join(f'<li style="margin-left:0;list-style:none;padding:6px 0;border-bottom:1px solid var(--line2);font-size:10.6px;line-height:1.36;color:var(--ink2)">{ev_badge(x.get("type","hypothesis"))} {esc(short(x["text"]))}<div class="small" style="margin-top:2px;font-size:9.5px">{esc(short(x.get("src",""),90))}</div></li>' for x in ev) or '<li style="margin-left:0;list-style:none;font-size:11px;color:var(--muted)">Evidências de demanda em consolidação.</li>'
    old=f' <span class="small">(antes: {esc(p["old"])})</span>' if p.get('old') and p['old']!='novo' else ''
    desc=f"Página de detalhe do produto {p['num']} · {p['name']}: público, problema, entregáveis, método, sistema e IA, produtização, esforço e indicadores."
    out.append(f'''<section class="slide" id="{p['id']}" data-p="3 · Portfólio" data-t="{esc(p['num'])} · {esc(p['name'])}" data-band="Produto {p['num']} · {esc(p['name'])}" data-c="{p['band']}" data-bs="{esc(p['phase'])} · {esc(p['duration'])}" data-src="Definição de produto: proposta A&amp;M DTS (out/2026). Evidências de demanda: ver coluna à direita e tela de fontes. Modelo comercial e esforço: hipóteses a validar em piloto." data-desc="{esc(desc)}">
  <div class="body">
    <div style="display:flex;align-items:flex-start;gap:16px">
      <div style="flex:1"><div class="stmt kin" style="font-size:22px">{esc(p['name'])}: <em>{esc(p['tag'])}</em></div>
        <div style="display:flex;gap:8px;align-items:center;margin-top:6px;flex-wrap:wrap"><span class="st {sc}">{sl}</span><span class="pill">{esc(p['phase'])}</span><span class="pill">⏱ {esc(p['duration'])}</span><span class="pill" title="Nível de IA: 1 assistiva · 2 automatiza análises · 3 motor do produto">IA {ai_dots(p['ai'])}</span><span class="pill" style="background:#FEF3E2;color:#9C6208">Modelo: {esc(p['model'])}</span>{old}</div></div>
      <button class="backlink" data-goto="onepage">← voltar à one page</button>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr 290px;grid-template-rows:1fr 1fr;gap:10px;margin-top:10px;height:598px">
      {blk(1,'var(--navy)','Público-alvo e problema','<p><b>Para quem:</b> '+esc(p['audience'])+'</p><p style="margin-top:6px"><b>Problema que resolve:</b> '+esc(p['problem'])+'</p>')}
      {blk(2,'var(--blue)','Entregáveis',ul(esc(x) for x in p['deliverables']))}
      {blk(3,'var(--green)','Método, etapas e skills',ul(esc(x) for x in p['steps'])+'<div style="margin-top:6px;display:flex;flex-wrap:wrap;gap:4px">'+''.join(f'<span class="pill" style="font-size:10px;padding:4px 8px">{esc(s)}</span>' for s in p['skills'])+'</div>')}
      <div class="dblk" data-a="right" style="--d:2;grid-row:1 / span 2;background:#F8FAFC"><div class="dh"><i style="background:var(--gold)">★</i>Por que o mercado pede</div><ul style="padding:0">{evh}</ul></div>
      {blk(4,'var(--gold)','Sistema, dados e papel da IA','<p><b>Sistema:</b> '+esc(p['system'])+'</p><p style="margin-top:4px"><b>Dados:</b> '+'; '.join(esc(x) for x in p['data'])+'.</p><p style="margin-top:4px"><b>IA:</b></p>'+ul(esc(x) for x in p['ai_role']))}
      {blk(5,'var(--purple)','Produto replicável e comercializável',ul(esc(x) for x in p['productize']))}
      {blk(6,'var(--red)','Esforço e indicadores de valor','<p><b>Esforço '+esc(p['effort']['size'])+':</b> '+esc(p['effort']['months'])+' · '+esc(p['effort']['team'])+'.<br><b>Pré-requisito:</b> '+esc(p['effort']['prereq'])+'</p><p style="margin-top:4px"><b>Indicadores para o cliente:</b></p>'+ul(esc(x) for x in p['kpis']))}
    </div>
  </div>
</section>''')
(b/'products_slides.html').write_text('\n'.join(out))
print('onepage tiles + ',len(P),'product slides generated')
