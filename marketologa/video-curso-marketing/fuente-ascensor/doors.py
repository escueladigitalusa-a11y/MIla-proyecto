import json
TL=json.load(open('/tmp/claude-0/video/timeline.json'))
sc=TL['scenes']; D=[[-9,-9,3.35,3.8]]
for i in range(1,len(sc)):
    p,c=sc[i-1],sc[i]
    if c['kind']=='break': D.append([c['start']-.32,c['start'],c['end'],c['end']+.45])
    elif p['kind']=='break' or p['kind']=='hook': continue
    elif (c['kind']=='cards' and (p['kind']!='cards' or p['sec']!=c['sec'])) or c['kind']=='final':
        D.append([c['start']-.32,c['start'],c['start']+.06,c['start']+.46])
TL['doors']=D
json.dump(TL,open('timeline2.json','w'),ensure_ascii=False)
print(len(D),D[:5])
