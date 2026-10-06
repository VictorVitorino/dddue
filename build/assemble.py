import sys,re,pathlib
b=pathlib.Path(__file__).parent
tpl=(b/'template.html').read_text()
slides=(b/'slides.html').read_text() if (b/'slides.html').exists() else ''
for mk,fn in [('<!--@@CORE@@-->','slides_core.html'),('<!--@@ONEPAGE@@-->','onepage_tiles.html'),('<!--@@PRODUCTS@@-->','products_slides.html'),('<!--@@END@@-->','slides_end.html'),('<!--@@SOURCES@@-->','sources_slides.html')]:
    if (b/fn).exists(): slides=slides.replace(mk,(b/fn).read_text())
data=(b/'data.js').read_text() if (b/'data.js').exists() else 'const PARTS={"Contexto":"Contexto"};const CH={};'
extra_js=(b/'extra.js').read_text() if (b/'extra.js').exists() else ''
extra_css=(b/'extra.css').read_text() if (b/'extra.css').exists() else ''
out=tpl.replace('<!--@@SLIDES@@-->',slides).replace('/*@@DATA@@*/',data).replace('/*@@EXTRA_JS@@*/',extra_js).replace('/*@@EXTRA_CSS@@*/',extra_css)
dest=pathlib.Path(sys.argv[1]) if len(sys.argv)>1 else b/'out.html'
dest.write_text(out); print('wrote',dest,len(out),'bytes', out.count('<section'),'slides')
# artifact variant: strip document wrapper (publish skeleton adds it)
import re as _re
art=_re.sub(r'^.*?<head>\s*','',out,count=1,flags=_re.S)
art=art.replace('<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n','')
art=art.replace('</head>\n<body>\n','').replace('</body>\n</html>\n','')
(dest.parent/'artifact.html').write_text(art); print('wrote artifact variant',len(art))
