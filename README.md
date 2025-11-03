# 🌐 AR \</\> Flow.jv - Three.js Octahedron Scene

[](https://www.google.com/search?q=https://github.com/alejosv07/threejsARflow/actions)
[](https://opensource.org/licenses/MIT)

## 🌟 Introducción

**AR \</\> Flow.jv** es una demostración visual interactiva construida con **Three.js** que combina texto 3D dinámico con un entorno inmersivo de objetos geométricos dispersos. El proyecto simula un ambiente de "flujo de datos" o "espacio cibernético" utilizando octaedros flotantes y una paleta de colores vibrantes.

El proyecto está diseñado para ser visualmente atractivo y fácil de manipular mediante una interfaz gráfica de usuario (**GUI**).

## 🚀 Ver el Proyecto

Puedes explorar la demo en vivo en GitHub Pages:

**🔗 [https://alejosv07.github.io/threejsARflow/](https://alejosv07.github.io/threejsARflow/)**

### Controles Interactivos

Una vez cargada la escena, puedes manipular los siguientes elementos a través del panel **`General Control`** (lil-gui) en la esquina superior derecha:

  * **`positionY`**: Ajusta la posición vertical (`Y`) del texto.
  * **`Text`**: Edita el contenido de las líneas de texto 3D.
  * **`Color`**: Cambia el color del texto principal y secundario.
  * **`Wireframe`**: Alterna el modo de malla (wireframe) para los objetos de texto.
  * **Mouse/Trackpad**: Usa los controles **OrbitControls** para rotar la escena y acercarte/alejarte.

-----

## 🏗️ Tecnología Utilizada

Este proyecto fue desarrollado utilizando el ecosistema moderno de JavaScript para el desarrollo web 3D.

  * **[Three.js](https://threejs.org/)**: Librería principal para la creación y renderizado de gráficos 3D en el navegador.
      * **`FontLoader` / `TextGeometry`**: Utilizados para generar el texto 3D a partir de una fuente tipográfica.
      * **`OrbitControls`**: Permite la navegación y manipulación de la cámara.
  * **[lil-gui](https://lil-gui.georgealways.com/)**: Interfaz gráfica de usuario simple para debugging y control interactivo de parámetros.
  * **[Vite](https://vitejs.dev/)**: Herramienta de construcción rápida y ligera para el entorno de desarrollo.
  * **GitHub Pages**: Servicio de hosting estático utilizado para el despliegue.

-----

## 🛠️ Instalación y Desarrollo Local

Si deseas clonar y ejecutar este proyecto en tu entorno local:

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/alejosv07/threejsARflow.git
    cd threejsARflow
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**

    ```bash
    npm run dev
    ```

    El proyecto estará disponible en `http://localhost:5173` (o el puerto indicado por Vite).

-----

## ⚙️ Notas de Despliegue (GitHub Pages)

El proyecto utiliza **Vite** y **GitHub Pages** para el despliegue automático.

  * La configuración de despliegue se gestiona a través de un flujo de trabajo de GitHub Actions (`.github/workflows/deploy.yml`).
  * El archivo `vite.config.js` contiene la propiedad `base: '/threejsARflow/'` para asegurar que las rutas de los assets se resuelvan correctamente en la URL de GitHub Pages.

-----

## 📜 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](https://www.google.com/search?q=LICENSE) para más detalles.

-----

## 📧 Contacto

Desarrollado por [Alejosv07](https://www.google.com/search?q=https://github.com/alejosv07).
