"""Create review boards and small previews from final JPEGs. Requires Pillow."""
from pathlib import Path
from PIL import Image,ImageDraw
ROOT=Path(__file__).resolve().parents[2];out=ROOT/'docs/social-sharing-qa';out.mkdir(exist_ok=True)
major=['home','about','portfolio','contact','ewallet','norton','fluxcrm'];spot=['zappay','coverride','amazon','eddiebauer','mydoc']
for names,label in [(major,'review-board'),(spot,'case-template-board')]:
 board=Image.new('RGB',(1800,((len(names)+2)//3)*350),'#111318');d=ImageDraw.Draw(board)
 for i,name in enumerate(names):
  im=Image.open(ROOT/f'assets/social/og-{name}.jpg');x=(i%3)*600;y=(i//3)*350;board.paste(im.resize((600,315),Image.Resampling.LANCZOS),(x,y));d.text((x+12,y+323),name.upper(),fill='white')
 board.save(out/f'{label}.jpg',quality=94)
for name in major+spot:
 im=Image.open(ROOT/f'assets/social/og-{name}.jpg')
 for w,h in [(600,315),(300,158)]:im.resize((w,h),Image.Resampling.LANCZOS).save(out/f'{name}-{w}.jpg',quality=94)
