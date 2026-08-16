# Mila Meekins Real Estate — Content Studio

Página HTML **única e interactiva** (`index.html`) para planificar el contenido de la marca:
Dashboard, Projects, Reels, Carruseles, Posts y **Feed Preview en tiempo real**.
No requiere servidor, build ni dependencias: se abre con doble clic en cualquier navegador.

## Cómo usarla

1. Abre `index.html` en el navegador (o publica la carpeta en GitHub Pages / Netlify).
2. Edita cualquier campo: todo se guarda solo en el navegador (localStorage) y con
   **Guardar Cambios** / `Ctrl+S` (`⌘S`) se confirma el guardado.

## Qué incluye

### Edición total con rol de usuario
- Selector de rol en la barra superior y en *Settings*:
  - **Admin** — edita todo, elimina piezas y administra el perfil.
  - **Editor** — edita y puntúa, pero no elimina.
  - **Viewer** — solo lectura (todos los controles de edición se ocultan).
- Cada texto es editable in-place: títulos, texto del diseño, desarrollo, copy, hook,
  CTA, notas, enlaces, bio, handle, seguidores, plan, etc.
- Estados por pieza: Borrador · En revisión · Programado · Publicado.
- Crear, duplicar, plegar, eliminar y reordenar piezas.

### Imágenes adjuntas
- Clic en cualquier zona de imagen (visual 4:5, portada 9:16, slides 1080×1350, foto de perfil)
  para adjuntar un archivo del equipo.
- Las imágenes se redimensionan a 1280 px y se comprimen a JPEG antes de guardarse,
  para que quepan en el almacenamiento local.

### Feed Preview en tiempo real
- Reúne **todas** las publicaciones de las otras pestañas (Posts + Reels + Carruseles)
  en una sola grilla estilo perfil.
- La grilla se llena **de abajo hacia arriba y de derecha a izquierda**: las celdas entran
  animadas desde la esquina inferior derecha hacia la superior izquierda, de modo que la
  pieza más reciente queda arriba a la izquierda y los huecos programados (`#04`, `#03`, …)
  quedan abajo a la derecha.
- Se actualiza al instante con cualquier cambio hecho en las otras pestañas.
- Arrastra las celdas para reordenar el feed; clic en una celda abre su editor.
- Botón *Reordenar por fecha* para volver al orden cronológico.

### Medidor de receptividad (1–10 con estrellas)
- Cada post, reel, carrusel y proyecto tiene un medidor de **Receptividad del público**
  de 1 a 10 estrellas, con puntaje numérico y etiqueta (Baja / Media / Alta receptividad).
- Volver a hacer clic en la misma estrella baja un punto.
- Cada celda del feed muestra su puntaje y el Dashboard calcula la **receptividad media**.

### Extras
- Búsqueda global sobre posts, reels, carruseles y proyectos.
- Registro de actividad reciente y acciones rápidas en el Dashboard.
- Exportar / importar el workspace completo en `.json` y restablecer al contenido de ejemplo.
- Diseño responsive (escritorio, tablet y móvil) con la identidad de la marca:
  navy `#0E2A4A`, dorado `#B98F4F`, crema `#FAF5EC`, tipografías Playfair Display + Jost
  (con alternativas del sistema si no hay conexión).

## Datos

Todo vive en el navegador bajo la clave `mila.studio.v1` de `localStorage`; no se envía
nada a ningún servidor. Usa *Settings → Exportar* para respaldar o mover el workspace.
