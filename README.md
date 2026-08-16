# Mila Meekins Real Estate — Content Studio

Página HTML **única e interactiva** (`index.html`) para planificar el contenido de la marca:
Dashboard, Projects, Reels, Carruseles, Posts, Historias y **Feed Preview en tiempo real**.
No requiere servidor, build ni dependencias: se abre con doble clic en cualquier navegador.

Viene precargada con el **Banco de Ideas de Contenido** real de la marca (15 reels, 10 posts,
10 carruseles y 44 historias, organizados por los 5 pilares: Educación, Patrimonio, Servicio,
Fe y Relaciones/Hogar) y con el **logo real** del Brand Board (monograma "M" dorado/navy).
Solo falta que el equipo cargue las fotos y videos de cada pieza.

## Cómo usarla

1. Abre `index.html` en el navegador (o publica la carpeta en GitHub Pages / Netlify).
2. Edita cualquier campo: todo se guarda solo en el navegador (localStorage) y con
   **Guardar Cambios** / `Ctrl+S` (`⌘S`) se confirma el guardado.

## Qué incluye

### Marca real
- Logo real de Mila Meekins Real Estate (monograma "M" con ventana, tomado del Brand Board)
  en la barra lateral, el pie de página y como avatar por defecto.
- Paleta exacta del board: navy `#1A1E39` y dorado `#DBB879`.
- Tipografía de marca **Cinzel** para el wordmark (sustituto abierto de Trajan Pro) y
  **Montserrat** para el texto general, tal como especifica el Brand Board.

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

### Feed Preview conectado en tiempo real
- Reúne Posts + Reels + Carruseles (las Historias, como en Instagram, tienen su propia
  sección y no forman parte de la grilla del feed).
- Cada tarjeta de un formato muestra un chip clicable **"En Feed · #N"** con su posición
  exacta dentro del feed; al hacer clic, salta directo a esa celda y la resalta.
- Al revés, hacer clic en una celda del feed abre exactamente ese formato para editarlo.
- Subir o reemplazar la imagen de cualquier formato la refleja **al instante** en su celda
  del feed — sin recargar ni guardar primero.
- Las celdas se llenan **de abajo hacia arriba y de derecha a izquierda**; arrastra para
  reordenar manualmente o usa "Reordenar por fecha" para volver al orden cronológico.

### Historias (nueva sección)
- Formato ligero pensado para presencia diaria: **contenido + una media** por historia.
- Grilla compacta con las 44 ideas de historias del Banco de Ideas, cada una con su pilar,
  fecha, estado y check de revisión.

### Medidor de receptividad (1–10 con estrellas)
- Post, Reel, Carrusel y Project tienen un medidor de **Receptividad del público** de 1 a
  10 estrellas, con puntaje numérico y etiqueta (Baja / Media / Alta receptividad).
- Volver a hacer clic en la misma estrella baja un punto.
- El Dashboard calcula la receptividad media sobre las piezas ya puntuadas.

### Extras
- Búsqueda global sobre posts, reels, carruseles, historias y proyectos.
- Registro de actividad reciente y acciones rápidas en el Dashboard (incluye "Nueva Historia").
- Exportar / importar el workspace completo en `.json` y restablecer al contenido de ejemplo.
- Diseño responsive (escritorio, tablet y móvil).

## Datos

Todo vive en el navegador bajo la clave `mila.studio.v1` de `localStorage`; no se envía
nada a ningún servidor. Usa *Settings → Exportar* para respaldar o mover el workspace.
