import json, unicodedata, re
T=json.load(open('/tmp/claude-0/asr/transcript.json'))
def norm(s): return ''.join(c for c in unicodedata.normalize('NFD',s.lower()) if unicodedata.category(c)!='Mn')
def at(ph, after=0.0, frac=0.0):
    p=norm(ph)
    for s in T:
        if s['b']<after: continue
        t=norm(s['t']); i=t.find(p)
        if i>=0:
            pos=(i+frac*len(p))/max(1,len(t))
            return round(s['a']+(s['b']-s['a'])*pos,2)
    raise Exception('no '+ph)
SC=[]
def scene(kind,start,end,**kw): SC.append(dict(kind=kind,start=start,end=end,**kw))
def cards(*pairs): return [dict(p=x[0],t=at(x[1],x[2] if len(x)>2 else 0)) for x in pairs]
scene('hook',0,3.35, t50=0.2, tTemas=at('temas'), tImp=at('impulso'))
scene('title',3.35,5.72, tMk=at('marketing'), tTodo=at('todo en uno'))
scene('cards',5.72,11.45,sec=0,cards=cards((1,'planificar'),(2,'publico'),(3,'pilares'),(4,'ideas para')))
scene('cards',11.45,13.8,sec=0,cards=cards((5,'reutilizarlas')))
scene('cards',13.8,16.72,sec=1,cards=cards((6,'instrucciones')))
scene('cards',16.72,22.4,sec=1,cards=cards((7,'guiones'),(8,'copies'),(9,'ganchos'),(10,'tono de marca')))
scene('break',22.4,24.3,big='PARTE',big2='creativa',emoji='🎨',tIn=at('parte creativa'))
scene('cards',24.3,28.3,sec=2,cards=cards((11,'caricatura'),(12,'cambios de elementos'),(13,'prendas'),(14,'fondos en fotos')))
scene('cards',28.3,31.32,sec=2,cards=cards((15,'flyers'),(16,'mejoras de imagen'),(17,'coherencia visual')))
scene('cards',31.32,34.5,sec=3,cards=cards((18,'carruceles'),(19,'stories'),(20,'posts')))
scene('cards',34.5,37.97,sec=3,cards=cards((21,'plantillas'),(22,'programacion')))
scene('break',37.97,40.92,big='VAMOS CON EL',big2='video',emoji='🎬',tIn=at('video'),rec=True,card=dict(p=23,t=at('video')+0.25))
scene('cards',40.92,44.55,sec=4,cards=cards((24,'planos'),(25,'angulos'),(26,'iluminacion'),(27,'color')))
scene('cards',44.55,49.15,sec=4,cards=cards((28,'sonido'),(29,'edicion')))
scene('cards',49.15,51.85,sec=4,cards=cards((30,'cambios de fondos'),(31,'elementos en video')))
scene('cards',51.85,57.95,sec=5,cards=cards((32,'pdf'),(33,'propuestas web'),(34,'cotizaciones')))
scene('cards',57.95,60.8,sec=6,cards=cards((35,'cada red social'),(36,'algoritmos'),(37,'y formatos',57)))
scene('cards',60.8,66.1,sec=6,cards=cards((38,'estadisticas'),(39,'tu zona'),(40,'curiosidades')))
scene('cards',66.1,71.35,sec=7,cards=cards((41,'herramientas'),(42,'inversion inicial'),(43,'vocabulario')))
scene('break',71.35,73.9,big='TRABAJAREMOS',big2='tu negocio',emoji='💼',tIn=at('tu negocio'))
scene('cards',73.9,78.0,sec=8,cards=cards((44,'negociacion'),(45,'administracion'),(46,'paquetes')))
scene('cards',78.0,83.9,sec=8,cards=cards((47,'captacion'),(48,'briefs'),(49,'plazos')))
scene('cards',83.9,88.3,sec=8,cards=cards((50,'organizaras')),chips=[dict(k=k,t=at(k)) for k in ['tareas','aprobaciones','cobros','entregas']])
scene('final',88.3,94.12,t8=at('8 horas'),tA=at('aprender'),tP=at('practicas'),tAct=at('activar'),tSum=at('te sumas'))
KW=[('planificar','Planificar'),('publico','Público'),('pilares','Pilares'),('ideas para','Ideas por negocio'),('reutilizarlas','Varios formatos'),
('instrucciones','Prompts para IA'),('guiones','Guiones'),('copies','Copies'),('ganchos','Ganchos'),('titulos','Títulos'),('llamados a la accion','CTA'),('tono de marca','Tono de marca'),
('caricatura','Tu caricatura'),('cambios de elementos','Elementos'),('prendas','Prendas'),('fondos en fotos','Fondos'),('flyers','Flyers'),('mejoras de imagen','Mejoras de imagen'),('coherencia visual','Coherencia visual'),
('carruceles','Carruseles'),('stories','Stories'),('posts por lotes','Posts por lotes'),('plantillas','Plantillas'),('programacion','Programación'),
('planos','Planos'),('angulos','Ángulos'),('encuadres','Encuadres'),('iluminacion','Iluminación'),('color','Color'),('contraste','Contraste'),('sonido','Sonido'),('microfonos','Micrófonos'),('edicion','Edición'),('musica','Música'),('subtitulos','Subtítulos'),
('cambios de fondos','Fondos en video'),('elementos en video','Elementos en video'),('pdf','PDF'),('propuestas web','Propuestas web'),('cotizaciones','Cotizaciones'),('catalogos','Catálogos'),('portafolios','Portafolios'),
('cada red social','Cada red social'),('algoritmos','Algoritmos'),('y formatos','Formatos'),('estadisticas','Estadísticas'),('tu zona','Tu zona'),('curiosidades','Curiosidades'),('mitos','Mitos'),
('herramientas','Herramientas'),('inversion inicial','Inversión inicial'),('basico','Básico'),('intermedio','Intermedio'),('avanzado','Avanzado'),
('negociacion','Negociación'),('administracion','Administración'),('paquetes','Paquetes'),('costos','Costos'),('precios','Precios'),('captacion','Captación'),('seguimiento','Seguimiento'),('briefs','Briefs'),('entregables','Entregables'),('plazos','Plazos'),('revisiones','Revisiones'),('condiciones','Condiciones')]
kws=[]; last=5
for ph,lab in KW:
    t=at(ph, 57 if ph=='y formatos' else last-1); kws.append(dict(k=lab,t=t)); last=t
json.dump(dict(scenes=SC,kw=kws,dur=94.12),open('timeline.json','w'),ensure_ascii=False,indent=0)
for s in SC: print(s['kind'],s['start'],s['end'],[c['t'] for c in s.get('cards',[])])
print(len(kws), [ (k['k'],k['t']) for k in kws][:12])
