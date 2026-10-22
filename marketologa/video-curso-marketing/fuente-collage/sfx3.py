import numpy as np, json, wave
SR=44100; TL=json.load(open('/tmp/claude-0/v3/timeline2.json')); D=TL['dur']
out=np.zeros(int(SR*(D+1)))
rng=np.random.default_rng(3)
def env(n,a,d):
    t=np.arange(n)/SR; return np.minimum(1,t/max(a,1e-4))*np.exp(-t/d)
def lp(x,k):
    k=max(1,int(k)); c=np.cumsum(np.concatenate([[0],x])); y=(c[k:]-c[:-k])/k; return np.concatenate([y,np.zeros(k-1)])
def add(t,sig,g=1.0):
    i=int(t*SR)
    if i<0: sig=sig[-i:]; i=0
    j=min(len(out),i+len(sig)); out[i:j]+=sig[:j-i]*g
def pop(f=520):
    n=int(.14*SR); t=np.arange(n)/SR; fr=f*(1+1.2*np.exp(-t*60))
    s=np.sin(2*np.pi*np.cumsum(fr)/SR)*env(n,.002,.035)
    s+=rng.normal(0,1,n)*env(n,.0005,.004)*.25
    return s
def tick(f=2600):
    n=int(.03*SR); t=np.arange(n)/SR; return np.sin(2*np.pi*f*t)*env(n,.0005,.006)
def whoosh(dur=.45,up=True):
    n=int(dur*SR); x=rng.normal(0,1,n); t=np.linspace(0,1,n)
    a=lp(x,6); b=lp(x,40)
    mix=np.where(up,t,1-t) if False else t
    s=a*(mix)+b*(1-mix)*1.6
    e=np.sin(np.pi*t)**1.5
    return s*e*.55
def impact():
    n=int(.7*SR); t=np.arange(n)/SR
    s=np.sin(2*np.pi*(55+90*np.exp(-t*18))*t)*env(n,.002,.22)
    s+=lp(rng.normal(0,1,n),12)*env(n,.001,.06)*1.2
    return s
def riser(dur):
    n=int(dur*SR); t=np.linspace(0,1,n)
    s=lp(rng.normal(0,1,n),3)*t**2*.4+np.sin(2*np.pi*np.cumsum(300+900*t**2)/SR)*t**2*.15
    return s
def sparkle():
    s=np.zeros(int(.9*SR))
    for k,f in enumerate([1568,2093,2637,3136,3951]):
        n=int(.5*SR); t=np.arange(n)/SR; g=np.sin(2*np.pi*f*t)*env(n,.002,.12)*.35
        i=int(k*.06*SR); s[i:i+n]+=g[:len(s)-i]
    return s
def chime():
    s=np.zeros(int(1.2*SR))
    for k,f in enumerate([523.25,659.25,783.99,1046.5]):
        n=int(1*SR); t=np.arange(n)/SR; g=(np.sin(2*np.pi*f*t)+.3*np.sin(4*np.pi*f*t))*env(n,.003,.3)*.35
        i=int(k*.07*SR); s[i:i+n]+=g[:len(s)-i]
    return s

def bell():
    s=np.zeros(int(1.6*SR))
    for k,(f,dt) in enumerate([(1318.5,0),(1046.5,.28)]):
        n=int(1.3*SR); t=np.arange(n)/SR; g=(np.sin(2*np.pi*f*t)+.4*np.sin(2*np.pi*f*2.76*t)*np.exp(-t*6)+.2*np.sin(2*np.pi*f*5.4*t)*np.exp(-t*10))*env(n,.002,.45)*.4
        i=int(dt*SR); s[i:i+n]+=g[:len(s)-i]
    return s
def slide(dur):
    n=int(dur*SR); t=np.linspace(0,1,n); x=lp(rng.normal(0,1,n),60)*3
    return x*np.sin(np.pi*t)**.8*.6+np.sin(2*np.pi*70*np.arange(n)/SR)*np.sin(np.pi*t)*.15
def thunk():
    n=int(.35*SR); t=np.arange(n)/SR
    return np.sin(2*np.pi*(90+60*np.exp(-t*30))*t)*env(n,.001,.07)*.9+lp(rng.normal(0,1,n),20)*env(n,.0005,.02)
def boing():
    n=int(.5*SR); t=np.arange(n)/SR; f=220+260*(1-np.exp(-t*9))+30*np.sin(2*np.pi*14*t)*np.exp(-t*4)
    return np.sin(2*np.pi*np.cumsum(f)/SR)*env(n,.004,.16)*.8


def paperswoosh(dur):
    n=int(dur*SR); t=np.linspace(0,1,n); x=rng.normal(0,1,n); hp=x-lp(x,4)
    crk=(rng.random(n)<.004)*rng.normal(0,1,n)*3
    return (hp*.5+lp(x,10)*.6+lp(crk,3))*np.sin(np.pi*t)**1.2*.7
def slap():
    n=int(.18*SR); x=rng.normal(0,1,n); return (x-lp(x,3))*env(n,.0005,.025)*1.1+lp(x,30)*env(n,.001,.05)
def rip():
    n=int(.35*SR); t=np.linspace(0,1,n); crk=(rng.random(n)<.03)*rng.normal(0,1,n)*2.5; x=rng.normal(0,1,n)
    return (lp(crk,2)+ (x-lp(x,5))*.3)*np.sin(np.pi*t)*.8

pops=[]; P=[560,620,700,780]
sc=TL['scenes']
for si,s in enumerate(sc):
    if si>0 and s['kind'] in ('cards','break','final','title') and not any(abs(d[1]-s['start'])<.05 or abs(d[2]-s['start'])<.6 for d in TL['doors']): add(s['start']-.18,whoosh(.42),.7)
    if s['kind']=='hook':
        add(s['t50'],impact(),.7)
        for k in range(10): add(s['t50']+k*.085,tick(1800+k*120),.5)
        add(s['tTemas'],pop(480),1); add(s['tImp']-.15,sparkle(),.8)
    if s['kind']=='title':
        add(s['tMk']-.1,impact(),.8); add(s['tMk']-.1,sparkle(),.5)
        add(s['tTodo']-.05,pop(700),1); add(s['tTodo']+.02,tick(3200),.8); add(s['tTodo']+.09,tick(3200),.6)
        for k in range(9): add(s['tMk']-.15+k*.04,tick(1500+k*140),.35)
        add(s['tTodo'],sparkle(),.7)
    for i,c in enumerate(s.get('cards',[])):
        t=c['t']-.12; add(t,pop(P[i%4]),1); pops.append(t)
    if s['kind']=='break':
        add(s['start'],riser(max(.3,s['tIn']-.1-s['start'])),.8); add(s['tIn']-.1,impact(),.85); add(s['start']+.2,sparkle(),.6)
        if s.get('card'): t=s['card']['t']; add(t,pop(640),.9); pops.append(t)
    if s['kind']=='final':
        for k in range(8): add(s['t8']-.1+k*.085,tick(1700+k*150),.5)
        add(s['t8']-.1,impact(),.6)
        for i,k in enumerate(['tA','tP','tAct']): add(s[k]-.1,pop(600+i*90),.9)
        add(s['tSum']-.25,pop(520),.9); add(s['tSum']+.35,tick(3000),.9); add(s['tSum']+.42,tick(3000),.7); add(s['tSum']+.45,chime(),.9)
for a,b,c,e in TL['doors']:
    if a>0: add(a,paperswoosh(b-a+.08),.85); add(b-.02,slap(),.7)
    add(c,paperswoosh(e-c+.08),.75)
    if e-c<1 and a>0: add(c+.15,rip(),.5)
for s_ in sc:
    for k_ in ['tMk','tIn','t8']:
        if k_ in s_:
            for i in range(9): add(s_[k_]-.15+i*.045,tick(1400+(i%4)*220),.35)
for s_ in sc:
    if s_['kind']=='break': add(s_['start']+.55,pop(420),.8); add(s_['tIn']+.25,pop(760),.6)
    if s_['kind']=='title':
        for i in range(6): add(s_['tMk']-.05+i*.09,pop(600+i*50),.45)
kw=TL['kw']+[dict(k=c['k'],t=c['t']) for s in sc for c in s.get('chips',[])]
for k in kw:
    if all(abs(k['t']-p)>.25 for p in pops): add(k['t']-.05,tick(2400),.55)
out=out/np.abs(out).max()*0.5
pcm=(out*32767).astype(np.int16)
with wave.open('sfx.wav','wb') as w: w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
print('ok',len(pops))
