# Mejoras versión 1.3.0

Continuación de `Mejoras version1.2.1.md`. Carpeta de trabajo: `Version 1.3.0` (la 1.2.1 queda intacta). Contexto: `Doc/resumenes_versiones_anteriores/OMNIA 1.2.1 - Resumen de contexto.md`.

## 1. Número de versión 1.3.0
- Cambiado en `package.json`, `package-lock.json` (dos apariciones), `src-tauri/tauri.conf.json`, `src-tauri/Cargo.toml` y `Cargo.lock` (paquete `cuaderno`).
- No se tocó nada de lo que afecta a los datos (identificador `app.cuaderno.desktop`, `cuaderno.db`, `cuaderno.vault.json`, prefijos de copias, marca `app: "cuaderno"`, constantes de cifrado).
- Comprobación: solo lectura de los archivos tras el cambio (sin compilar ni ejecutar nada).

## 2. README: línea de `Doc/` con la 1.3.0 — hecho
- Qué se pidió: actualizar el README con la nueva versión. Qué se hizo: la línea de `Doc/` del apartado «Cómo está organizado el código» ahora cita las mejoras 1.1.0, 1.2.0, 1.2.1 y 1.3.0.

## 3. `projectName()` extendido al grafo y a la búsqueda — hecho (pendiente de probar)

### Qué se pidió
Pendiente de la 1.2.1: que el nombre de ejemplo del tablero de Inicio salga en el idioma actual también en el grafo y la búsqueda (antes solo en el título del tablero y la papelera).

### Causa
Esos dos sitios leían `p.name` (el nombre guardado, p. ej. «Inicio» de una instalación en español) en lugar de `projectName(p)`.

### Qué se hizo
- `src/lib/graph.ts`: la etiqueta del nodo de proyecto usa `projectName(p)`.
- `src/lib/store.ts` (`searchIndex`): el texto del resultado de proyecto y la ruta («Proyecto › Tarjeta») de los resultados usan `projectName(p)`.
- No se modificó ningún dato guardado. Los enlaces `[[ ]]` siguen resolviéndose por el nombre guardado (`resolve` en `graph.ts`), a propósito, para no cambiar su comportamiento. Un nombre propio se respeta.
- Prueba nueva: `src/__tests__/names130.test.ts` (nodo y resultado en francés con datos en español, ruta de la búsqueda, nombre propio y datos intactos).

### Cómo se comprobó
- Sin ejecutar nada (no se compila ni se ejecuta). Pendiente: Vitest, `tsc` y, en la app real, grafo y búsqueda con la interfaz en francés sobre una base en español.

### Ampliación a otras vistas (aprobada)
Con la misma causa, `projectName()` se usa también en:
- `src/views/ReminderRow.tsx` (ruta del recordatorio en Hoy y Recordatorios) y `src/views/Today.tsx` (proyecto de «Checklists en curso»).
- `src/views/pm/Linked.tsx` (selector de relaciones de la Tabla PM: título y subtítulo «Tarjeta de …»). El enlace se guarda por id, no cambia.
- `src/App.tsx`: texto de la notificación del sistema y botón «Volver a …».
- `WidgetBody.tsx` no necesita cambio: el widget «Tareas principales» excluye Inicio.
- **Excluido a propósito:** el selector `[[ ]]` (`App.tsx`, `resolveLink` y lista de sugerencias). El nombre se escribe dentro del texto del enlace y se resuelve por el nombre guardado; traducirlo rompería los enlaces. Pendiente de decidir aparte.
- La barra lateral no se revisó (no está claro que liste Inicio).

### Puntos a confirmar
- Se busca por el nombre mostrado («accueil»), no por el guardado («inicio»): con la interfaz en francés, buscar «inicio» ya no encuentra el tablero de Inicio.

## 4. Nuevo logo de la app — hecho (pendiente de probar)

### Qué se pidió
Cambiar el logo de la app por `Doc/Logo.png` (1024×1024, RGBA, con sombra y fondo exterior transparente).

### Qué se hizo
- Con un script de Python (Pillow, con permiso expreso del usuario como excepción a la regla de no ejecutar nada; no se instaló nada) se regeneraron a partir de `Doc/Logo.png`, con los mismos nombres y tamaños que había:
  - `src-tauri/icons/`: `32x32`, `64x64`, `128x128`, `128x128@2x` (256), `icon.png` (512), `Square30x30Logo` … `Square310x310Logo`, `StoreLogo` (50), `icon.ico` (16, 24, 32, 48, 64, 256) e `icon.icns`.
  - `app-icon.png` de la raíz (ahora RGBA 1024×1024).
- Reducción con LANCZOS. La sombra va incluida en la imagen. `tauri.conf.json` no cambia (mismas rutas).
- No hay otras referencias al logo en `index.html` ni en `src/`.
- La 1.2.1 conserva los iconos antiguos.

### Cómo se comprobó
- Solo se comprobaron tipo y tamaño de los archivos generados. Pendiente verlos en la app real: ventana, barra de tareas, instalador y Dock.
- A 16–32 px la sombra y el borde se verán pequeños; si no gusta, se puede usar una versión sin sombra para los tamaños pequeños.
- `icon.icns` lo escribió Pillow (no es el formato de `tauri icon`); verificar que macOS lo muestra, y si no, regenerarlo con `npm run tauri icon "Doc/Logo.png"`.

## 5. Exportar e importar tarjetas (.json) — hecho (pendiente de probar)

### Qué se pidió
Un botón en cada tarjeta para exportarla a un archivo `.json`, con ventana del sistema para elegir dónde guardarla, y una opción para importarla: última del menú «Añadir tarjeta». Importar crea una tarjeta nueva en el tablero abierto, con el contenido del archivo, igual que al pegar. (El botón de exportar va en la franja superior de la tarjeta, a la izquierda del botón de color.)

### Qué se hizo
- **Archivo** (`src/lib/cardFile.ts`, nuevo): `{ app: "omnia-card", v: 1, exportedAt, card, assets }`. La marca `omnia-card` es propia de las tarjetas; no se tocó la marca `app: "cuaderno"` de las copias de seguridad. `assets` lleva las imágenes de la tarjeta (tarjeta Imagen y celdas de una Tabla PM). Al leer se valida la marca, la versión (rechaza archivos de una versión posterior), el tipo de tarjeta y las imágenes (solo `data:image/…` y con identificador de ≥ 3 caracteres, porque al pegar el identificador se sustituye dentro del texto de la tarjeta). Un JSON cualquiera o una copia de seguridad se rechaza.
- **Qué no se exporta:** widgets y notas de un día del Diario (mismo criterio que copiar y pegar, `canCopyCard`). En ellos no sale el botón.
- **Backend** (`src/lib/backend.ts`): `saveCard(nombre, texto)` y `openCard()` en `tauriBackend` (diálogo de guardar/abrir del sistema, filtro «Tarjeta de OMNIA» `.json`) y en `memoryBackend` (guarda aparte de las copias, con prefijo `card:`).
- **Rust** (`src-tauri/src/lib.rs`): comandos nuevos `card_write` y `card_read`, registrados en `generate_handler!`. Como `csv_*` e `ics_*`, solo aceptan la extensión `.json`; la lectura admite hasta 64 MB (por las imágenes). Sin permisos nuevos en `capabilities` (los diálogos ya estaban).
- **Interfaz** (`src/components/Board.tsx`): botón «Exportar tarjeta» (icono de bandeja con flecha) a la izquierda del de color; opción «Importar tarjeta…» como **última** del menú «Añadir tarjeta», también en Inicio (tras los widgets). Importar usa la acción `pasteCard` (id nuevo, imágenes duplicadas, entra en el historial, no pega en una tarea en la papelera), lleva la tarjeta a la vista y la selecciona.
- **Textos** en 6 idiomas: `ui.add.import.label/desc`, `ui.board.exportCard`, `ui.board.cardExported`, `ui.board.cardImported`, `ui.board.cardFileBad` y `set.backend.filterCard`.
- **Documentado** en «Funciones de la maqueta» (apartados 3 y 4) y en el README.
- **Pruebas nuevas:** `src/__tests__/cardfile130.test.ts` (ida y vuelta de una nota, imagen duplicada, no exportables, archivos rechazados, imágenes mal formadas, nombre de archivo, almacén en memoria).

### Cómo se comprobó
- Sin ejecutar nada (ni `tsc`, ni Vitest, ni `cargo`). Pendiente: compilar (sobre todo `card_write` / `card_read` en Rust, que no se ha compilado nunca) y probar en la app real: exportar una nota, una imagen y una Tabla PM con imágenes; importarlas en otro tablero y en Inicio; cancelar el diálogo; elegir un archivo que no sea de OMNIA.

### Puntos a tener en cuenta
- El archivo no se cifra aunque el cuaderno lo esté: contiene el texto y las imágenes de la tarjeta en claro.
- Las relaciones de una Tabla PM con otras tablas, los enlaces `[[ ]]` y las flechas se comportan como al copiar y pegar (los enlaces se conservan tal cual; las flechas no se exportan).
- No se comprueba si ya existe una tarjeta igual: importar dos veces crea dos tarjetas.

## 6. Más texturas y ambientes, con selector por páginas — hecho (pendiente de probar)

### Qué se pidió
Más texturas y ambientes en todos los sitios donde se pueden elegir, con un selector con páginas como el de la imagen `Doc/img_1.jpg` (casillas en rejilla, flechas a los lados y puntos debajo). Elegido: 17 texturas nuevas (24 en total, 3 páginas de 8) con miniaturas con el nombre dentro, y 6 ambientes nuevos (12 en total, 2 páginas de 6).

### Qué se hizo
- **Texturas** (`src/lib/appearance.ts`, `src/styles/app.css`): las 17 nuevas van al final, así que las 7 de siempre conservan su sitio y los datos guardados no cambian (los ids nuevos son aditivos; una textura desconocida sigue cayendo en «liso»). Son CSS puro (degradados), sin imágenes ni recursos externos (la CSP no cambia). Nuevas: `cuadriculafina`, `milimetrado`, `isometrica`, `rombos`, `horizontales`, `verticales`, `lunares`, `ondas`, `grano`, `circulos`, `zigzag`, `ajedrez`, `tejido`, `escamas`, `estrellas`, `nubes`, `kraft`. Cada una tiene su regla para tablero (`.board.tex-*`, también el calendario), tarjetas (`.card.ctex-*`), barra lateral (`.side.tex-*`) y su miniatura (`.tex-chip.tex-*`).
- **Ambientes** (6 nuevos, 2.ª página): Ingeniería (Niebla + Milimetrado, tarjeta Blanco + Cuadrícula fina), Artesanía (Arena + Papel kraft, tarjeta Crema + Grano), Cielo (Niebla + Nubes, tarjeta Cielo), Medianoche (Abismo + Estrellas, tarjeta Marino), Lino (Blanco roto + Tejido, tarjeta Papel + Tejido) y Jardín (Blanco roto + Lunares, tarjeta Menta). Solo combinan colores ya existentes, que ya pasan las pruebas de legibilidad.
- **Selector con páginas** (`src/components/Appearance.tsx`, componente `Pager`): flechas ‹ › (desactivadas en los extremos), puntos para saltar a una página y abre en la página de la opción actual. Se usa para las texturas (8 por página, 4 × 2; en barra lateral, tablero, tarjetas y las tres pestañas del calendario) y para los ambientes (6 por página, 3 × 2). Cada casilla de textura es una miniatura con el nombre en una pastilla para que se lea sobre el dibujo.
- **Textos** en 6 idiomas: 17 `set.tex.*`, 6 `set.ambient.*` y `set.ap.pageN` («Página {n} de {total}»). Las flechas reutilizan `cal.prev` y `cal.next`.
- **Pruebas:** actualizada `src/lib/__tests__/appearance.test.ts` (12 ambientes, 24 texturas) y nueva `src/__tests__/textures130.test.ts` (24 texturas, reglas CSS de cada una, nombres en 6 idiomas, 12 ambientes válidos).

### Cambios respecto a lo propuesto
- **«Hexágonos» → «Rombos»** y **«Ladrillos» → «Ajedrez»**: no pude dibujarlos con degradados CSS de forma fiable sin ver el resultado. Las otras 15 son las propuestas.

### Cómo se comprobó
- Sin ejecutar nada. Pendiente: **verlas en la app real** (los dibujos CSS se han escrito sin verlos), en tablero, tarjetas, barra lateral y calendario, con ambientes claros y oscuros; revisar que el texto se lee sobre las más marcadas (Milimetrado, Estrellas, Grano) y que las miniaturas de 8 por página caben bien en el panel.
- Observado de pasada, sin tocarlo: la pestaña «Celdas» del calendario guarda una textura (`look.cell.texture`), pero no encontré ningún sitio del código que la aplique a las celdas. Ya era así antes de esta versión.
