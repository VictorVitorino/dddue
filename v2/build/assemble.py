import pathlib,re,sys
b=pathlib.Path(__file__).parent
tpl=(b/'template.html').read_text()
css='\n'.join((b/f).read_text() for f in ['base.css','fx.css','slides.css'] if (b/f).exists())
order=['s01_capa','s02_desafio','s03_riscos','s04_mercado','s05_depara','s06_sistema','s07_p1','s08_p2','s09_p3','s10_p4','s11_p5','s12_p6','s13_engine','s14_resultados','s15_fecho']
parts=[];js=[]
for name in order:
    f=b/'slides'/f'{name}.html'
    if not f.exists(): continue
    t=f.read_text()
    # extract <script data-slide> blocks into js bundle
    for m in re.findall(r'<script data-slide>(.*?)</script>',t,re.S): js.append(m)
    t=re.sub(r'<script data-slide>.*?</script>','',t,flags=re.S)
    parts.append(t)
eng=(b/'engine.js').read_text(); fx=(b/'fx.js').read_text()
out=tpl.replace('/*@@CSS@@*/',css).replace('<!--@@SLIDES@@-->','\n'.join(parts)).replace('/*@@JS@@*/',eng+'\n'+fx+'\n'+'\n'.join(js)+'\n'+(b/'final.js').read_text())
dest=pathlib.Path(sys.argv[1]) if len(sys.argv)>1 else b/'out.html'
dest.write_text(out); print('wrote',dest,len(out),'bytes',out.count('<section'),'slides')
art=re.sub(r'^.*?<head>\s*','',out,count=1,flags=re.S)
art=art.replace('<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n','').replace('</head>\n<body>\n','').replace('</body>\n</html>\n','')
(b/'artifact.html').write_text(art)
