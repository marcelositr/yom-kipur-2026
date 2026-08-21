from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
OUT = Path('public/assets/social/yom-kipur-2026-og.png')

TOP = (22, 61, 50)
BOTTOM = (17, 50, 67)
GOLD = (229, 196, 132)
IVORY = (246, 240, 227)

SANS = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
SERIF = '/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf'

img = Image.new('RGB', (W, H))
pixels = img.load()
for y in range(H):
    t = y / (H - 1)
    color = tuple(round(TOP[i] * (1 - t) + BOTTOM[i] * t) for i in range(3))
    for x in range(W):
        pixels[x, y] = color

draw = ImageDraw.Draw(img)
draw.rounded_rectangle((35, 35, 1165, 596), radius=26, outline=GOLD, width=2)
draw.line((89, 100, 89, 539), fill=GOLD, width=4)

for radius in (320, 280, 240):
    box = (1000 - radius, 350 - radius, 1000 + radius, 350 + radius)
    draw.arc(box, 115, 245, fill=GOLD, width=3)

font_hebrew = ImageFont.truetype(SANS, 52)
font_kicker = ImageFont.truetype(SANS, 23)
font_title = ImageFont.truetype(SERIF, 61)
font_body = ImageFont.truetype(SANS, 29)
font_badge = ImageFont.truetype(SANS, 19)
font_domain = ImageFont.truetype(SANS, 22)

try:
    draw.text((130, 95), 'יום הכיפורים', font=font_hebrew, fill=GOLD, direction='rtl')
except (KeyError, TypeError):
    draw.text((130, 95), 'יום הכיפורים', font=font_hebrew, fill=GOLD)

draw.text((130, 185), 'CAMINHO PARA', font=font_kicker, fill=GOLD)
draw.text((130, 233), 'Yom Kipur 5787', font=font_title, fill=IVORY)
draw.text((130, 333), '15 marcos de estudo, reflexão e preparação', font=font_body, fill=IVORY)
draw.text((130, 378), 'para Yom Kipur • 2026', font=font_body, fill=IVORY)

draw.rounded_rectangle((130, 456, 520, 505), radius=24, outline=GOLD, width=1)
draw.text((151, 470), 'TRADIÇÃO JUDAICA • FONTES • CONTEXTO', font=font_badge, fill=GOLD)
draw.text((130, 552), 'yomkipur.devnux.com.br', font=font_domain, fill=IVORY)

OUT.parent.mkdir(parents=True, exist_ok=True)
img.save(OUT, 'PNG', optimize=True)
print(f'Generated {OUT} ({W}x{H})')
