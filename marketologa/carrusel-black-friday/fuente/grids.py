import numpy as np
from PIL import Image, ImageDraw
W,H=1080,1350; S=54; ss=3
def fmap(x,y,cx,cy,R=900,p=0.62):
    dx,dy=x-cx,y-cy; r=np.hypot(dx,dy)+1e-9
    ro=R*(r/R)**p
    return cx+dx*ro/r, cy+dy*ro/r
def draw(fish,name,cx=540,cy=620,alpha=24):
    im=Image.new("L",(W*ss,H*ss),0); d=ImageDraw.Draw(im)
    rng=range(-60,61) if fish else range(0,40)
    t=np.linspace(-3000,3000,1500) if fish else None
    for i in rng:
        v=(i*S*0.55 if fish else i*S)
        if fish:
            for (xs,ys) in [(np.full_like(t,cx+v),t+cy),(t+cx,np.full_like(t,cy+v))]:
                X,Y=fmap(xs,ys,cx,cy); d.line(list(zip(X*ss,Y*ss)),fill=255,width=2*ss//2+1)
        else:
            d.line([(v*ss,0),(v*ss,H*ss)],fill=255,width=ss); d.line([(0,v*ss),(W*ss,v*ss)],fill=255,width=ss)
    a=im.resize((W,H),Image.LANCZOS).point(lambda q:q*alpha//255)
    out=Image.new("RGBA",(W,H),(27,27,34,0)); out.putalpha(a); out.save(name)
draw(False,"grid.png"); draw(True,"grid_fish.png")
