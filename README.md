# Mila Meekins Real Estate — Content Studio

Página HTML **única e interactiva** (`index.html`) para planificar el contenido de la marca:
Dashboard, Projects, Reels, Carruseles, Posts, Historias y **Feed Preview en tiempo real**.
No requiere servidor, build ni dependencias: se abre con doble clic en cualquier navegador.

Viene precargada con el **contenido ya desarrollado** de la marca — no solo las ideas, sino
las piezas listas para producir: 15 reels con guion cronometrado, 10 posts con titular y
caption terminados, 10 carruseles slide-by-slide y 44 historias con el texto exacto del
sticker. Todo conserva su número original del Banco de Ideas y su pilar de marca
(Educación, Patrimonio, Servicio, Fe y Relaciones/Hogar), y usa el **logo real** del Brand
Board (monograma "M" dorado/navy). Solo falta que el equipo cargue las fotos y videos.

## Cómo usarla

1. Abre `index.html` en el navegador (o publica la carpeta en GitHub Pages / Netlify).
2. Edita cualquier campo: todo se guarda solo en el navegador (localStorage) y con
   **Guardar Cambios** / `Ctrl+S` (`⌘S`) se confirma el guardado.

## Qué incluye

### Marca real
- Logo real de Mila Meekins Real Estate (monograma "M" con ventana, tomado del Brand Board)
  en la barra lateral, el pie de página y como avatar por defecto.
- Paleta exacta del board: navy `#1A1E39` y dorado `#DBB879`.
- Tipografía: **Montserrat** en toda la interfaz — wordmark, titulares, cuerpo de texto —
  una sola familia por pedido explícito, sin mezclar con la pareja serif que traía el
  Brand Board.

### Edición total con rol de usuario
- Selector de rol en la barra superior y en *Settings*:
  - **Admin** — edita todo, elimina piezas, administra el perfil y es el único que puede
    marcar un formato como **revisado y listo para publicar**.
  - **Editor** — edita y puntúa, pero no elimina ni marca como revisado.
  - **Viewer** — solo lectura (todos los controles de edición se ocultan).
- Cada texto es editable in-place en Posts, Reels, Carruseles, Historias y Projects.
- Estados por pieza: Borrador · En revisión · Programado · Publicado.
- Crear, duplicar, plegar, eliminar y reordenar piezas.

### Check de "Revisado y listo para publicar"
- Todos los formatos (Posts, Reels, Carruseles e Historias) tienen un check dedicado.
- Solo el rol **Admin** puede marcarlo; al activarlo aparece un ✓ verde en la tarjeta y
  un distintivo circular sobre la miniatura correspondiente en el Feed Preview.

### Miniatura, fecha y pilar en cada formato
- La cabecera de cada Post, Reel, Carrusel e Historia muestra una **miniatura** de su
  imagen principal (se ve incluso con la tarjeta plegada), la **fecha de creación** y un
  chip del **pilar de marca** (Educación, Patrimonio, Servicio, Fe, Relaciones).
- Los reels además muestran si son formato "🎥 Cámara" o "🎨 Animado".

### Filtros por tandas
- Cada sección (Posts, Reels, Carruseles, Historias, Projects) tiene su propia barra de
  filtros: **ordenar** por más recientes o más antiguos, y filtrar por **tanda de mes**
  (calculada automáticamente a partir de las fechas de creación reales).

### Imágenes y media adjuntas
- Clic en cualquier zona visual (post 4:5, portada de reel 9:16, slides 1080×1350, media
  de historia, foto de perfil) para adjuntar un archivo.
- Cada imagen se reescala y comprime antes de guardarse, para no reventar el
  almacenamiento del navegador.

### Feed Preview: espacios vacíos, elegidos a mano
- El feed **arranca completamente vacío** — sin posts, reels ni carruseles precargados.
  Cada espacio es un slot en blanco que dice "Elegir publicación · Formato → título".
- Clic en un espacio abre una **lista plegable**: primero se elige el formato (Posts,
  Reels o Carruseles, cada uno con su conteo de títulos), y al abrirlo aparecen todos
  los títulos de esa colección con su miniatura — o un aviso "Sin media" si la pieza
  todavía no tiene imagen. Al elegir un título, su media se coloca sola en el espacio.
- Una pieza no puede ocupar dos espacios a la vez; si ya está en el feed, el picker lo
  indica ("Ya en el feed · #N") en vez de dejar duplicarla.
- Cada tarjeta de un formato muestra un chip clicable **"En Feed · #N"** con su posición
  exacta dentro del feed; al hacer clic, salta directo a esa celda y la resalta.
- Al revés, hacer clic en una celda ocupada abre exactamente ese formato para editarlo;
  el botón de papelera en la esquina de la celda solo vacía el espacio, sin borrar la pieza.
- Subir o reemplazar la imagen de cualquier formato la refleja **al instante** en su celda
  del feed — sin recargar ni guardar primero.
- Los espacios se numeran **de abajo hacia arriba y de derecha a izquierda**; arrastra una
  celda ocupada sobre otra (vacía o llena) para intercambiar su posición, o usa
  "Vaciar feed" para dejar todos los espacios en blanco de nuevo.

### Check de "Publicado"
- Además del check de revisión, todos los formatos (Posts, Reels, Carruseles e Historias)
  tienen un segundo check dedicado: **Publicado**, también exclusivo del rol Admin.
- Al marcarlo, toda la tarjeta se tiñe de verde (cabecera, miniatura, número) y, si esa
  pieza está colocada en el Feed Preview, su celda recibe un marco verde y el distintivo
  "✓ Publicado" — de un vistazo se distingue lo publicado de lo que todavía no.

### Guía de distribución de Posts
- Un panel plegable al inicio de la sección de Posts recoge todo lo que no pertenece a
  una sola pieza sino a la colección completa: el enfoque de diseño (poco texto en el
  arte + mensaje instantáneo + caption que profundiza + CTA específico), los principios
  de marca, y el **orden narrativo sugerido de publicación** — Down payment → Testimonio
  → Consejo de Mila → Propósito → Checklist → Equity → Gratitud → Servicios → Fe →
  Compromiso — como una secuencia de chips clicables que saltan directo al post real.
  Cierra con las cuatro impresiones que se busca dejar en quien descubre el perfil.

### Reels: tarjeta mínima + checklist
- Cada uno de los 15 reels se edita con solo 3 campos de texto: **Título**, **Tomas —
  Desarrollo y acción** (un espacio grande único para el guion completo) y **Copy**.
  Sin miniatura, sin fecha, sin pilar, sin portada — el desglose detallado que tenía
  antes se retiró a pedido explícito.
- Debajo lleva un **checklist** de 3 puntos, exclusivo del rol Admin: **Aprobado para
  publicar** y **Publicado** (checkboxes de etiqueta fija — a diferencia del resto de
  la app, el texto no cambia según el estado, solo el color) y **Valoración (1 a 10)**
  con el mismo medidor de estrellas que usan Posts, Carruseles y Projects.

### Los 15 reels, en blanco
- Por pedido explícito, los **15 reels** quedaron completamente vacíos: título, "Tomas
  — Desarrollo y acción", copy, los dos checks ("Aprobado para publicar" y
  "Publicado") sin marcar, y la valoración en 0/10 ("Sin evaluar"). Listos para
  cargarse desde cero con el guion que se defina para cada uno.

### Contenido desarrollado, campo por campo
- **Posts:** el texto completo del arte con su jerarquía (antetítulo, titular, sellos,
  letra pequeña), el concepto visual y la composición, el caption largo desarrollado, un CTA
  con palabra clave («Comenta DOWN», «CITA», «EQUITY», «MI HOGAR», «MILA» / «EMPEZAR»),
  hashtags y **Notas de publicación**: el empuje en Stories, la serie a la que pertenece la
  pieza y su posición en el orden sugerido del feed.
- **Carruseles:** cada slide trae su texto desarrollado (portada → desarrollo → resumen → CTA),
  además de hook global, CTA, caption e hashtags.
- **Historias:** formato del sticker (Encuesta, Quiz, Repost, Tip…), el texto exacto que va
  en pantalla, el seguimiento sugerido y una media 9:16 por cargar.

### Avisos de cumplimiento
- Las piezas que lo requieren muestran una banda de aviso antes de publicar, tomada de las
  notas de producción del documento: testimonios que necesitan **autorización escrita**
  (Post 21, Carruseles 30 y 50, Historias 42, 46 y 89), datos que exigen **verificar fuente
  y fecha** (Post 12, Historia 37), el recordatorio de **remitir a un profesional certificado**
  en temas migratorios o legales (Carrusel 3) y el **tono testimonial** en contenido de fe.

### Hashtags
- Cada formato tiene su campo de hashtags propio, y debajo aparece siempre la **base de
  marca** como recordatorio (editable desde *Settings*), con la indicación de variar 2–3 por
  publicación en lugar de repetir siempre los mismos.

### Medidor de receptividad (1–10 con estrellas)
- Post, Reel, Carrusel y Project tienen un medidor de **Receptividad del público** de 1 a
  10 estrellas, con puntaje numérico y etiqueta (Baja / Media / Alta receptividad).
- Volver a hacer clic en la misma estrella baja un punto.
- El Dashboard calcula la receptividad media sobre las piezas ya puntuadas.

### Extras
- Búsqueda global sobre posts, reels, carruseles, historias y proyectos.
- Registro de actividad reciente y acciones rápidas en el Dashboard (incluye "Nueva Historia").
- Los proyectos vienen organizados como las **tandas de grabación** sugeridas (batch content):
  Educación, Patrimonio + Servicio, y Fe + Comunidad.
- Exportar / importar el workspace completo en `.json` y restablecer al contenido de ejemplo.
- Diseño responsive (escritorio, tablet y móvil).

## Datos

Todo vive en el navegador bajo la clave `mila.studio.v1` de `localStorage`; no se envía
nada a ningún servidor. Usa *Settings → Exportar* para respaldar o mover el workspace.
