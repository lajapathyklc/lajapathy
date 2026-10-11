"""Metadata-only writer. Run from repository root with Python 3; stdlib only."""
from pathlib import Path
from html import escape
from html.parser import HTMLParser
import json,re
ROOT=Path(__file__).resolve().parents[2]
m=json.loads((ROOT/'scripts/social-cards/manifest.json').read_text())
class Tags(HTMLParser):
 def __init__(self,text):
  super().__init__(convert_charrefs=False);self.lines=text.splitlines(keepends=True);self.offsets=[0]
  for line in self.lines:self.offsets.append(self.offsets[-1]+len(line))
  self.spans=[];self.feed(text)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs);key=a.get('property',a.get('name',''))
  if tag=='meta' and (key.startswith('og:') or key.startswith('twitter:')) or tag=='link' and a.get('rel')=='canonical':
   line,col=self.getpos();start=self.offsets[line-1]+col;self.spans.append((start,start+len(self.get_starttag_text())))
 def handle_startendtag(self,tag,attrs):self.handle_starttag(tag,attrs)
for p in m['pages']:
 path=ROOT/p['file'];text=path.read_text();end=text.lower().index('</head>');head=text[:end];parser=Tags(head)
 for start,stop in reversed(parser.spans):head=head[:start]+head[stop:]
 values={'og:type':'website','og:title':p['title'],'og:description':p['description'],'og:url':p['url'],'og:site_name':'Lajapathy','og:image':p['image'],'og:image:width':'1200','og:image:height':'630','og:image:type':'image/jpeg','og:image:alt':p['alt'],'twitter:card':'summary_large_image','twitter:title':p['title'],'twitter:description':p['description'],'twitter:image':p['image'],'twitter:image:alt':p['alt']}
 block='\n<!-- Static social sharing metadata; generated from scripts/social-cards/manifest.json. -->\n'+f'<link rel="canonical" href="{escape(p["url"],quote=True)}">\n'
 for key,value in values.items():block+=f'<meta {"property" if key.startswith("og:") else "name"}="{key}" content="{escape(value,quote=True)}">\n'
 # Experience correction, if found, stays within metadata tags only.
 head=re.sub(r'<meta\b[^>]*>',lambda match:re.sub(r'18\+\s*(?:years|yrs)|18\s+years','20 years',match[0],flags=re.I),head,flags=re.I)
 path.write_text(head+block+text[end:])
print('Updated metadata only on',len(m['pages']),'public routes; page titles and JSON-LD preserved.')
