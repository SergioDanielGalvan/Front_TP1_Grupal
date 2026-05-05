# Front_TP1_Grupal
Trabajo Práctico Grupal 1  Proyecto Web en Equipo
 
# Equipo "MocoSoft"

Bienvenido al repositorio oficial del Proyecto MocoSoft. Este sitio web ha sido desarrollado como parte del Trabajo Práctico N°1 de la Tecnicatura Superior en Desarrollo de Software.

## Enlaces_del_Proyecto
Sitio en Vivo (Vercel): front-tp-1-grupal.vercel.app

Repositorio: GitHub - SergioDanielGalvan/Front_TP1_Grupal

## Integrantes_del_Equipo
Alejandro Rodriguez: Maquetación en html, lógica de Modo Oscuro y gestión de contenido multimedia.

Sergio Daniel Galván: Creación de repositorio, optimización de recursos gráficos y desarrollo de secciones de perfil.

Víctor Álvarez: Desarrollo de página de contacto y lógica de validación de formularios.

## Tecnologías_y_Herramientas
Para este proyecto se utilizaron estándares modernos de desarrollo web:

HTML5 Semántico: Uso de etiquetas como <header>, <main>, <nav>, <section> y <table> para asegurar accesibilidad y SEO.

CSS3 Avanzado: Uso de Variables CSS (:root), Flexbox para el diseño responsivo y transiciones suaves.

JavaScript:

Manipulación del DOM para interactividad.

Uso de localStorage para persistencia del Modo Oscuro.

Gestión de eventos (addEventListener) para formularios y menús.

Control de Versiones: Git & GitHub (flujo de trabajo colaborativo mediante ramas y Pull Requests).

## Funcionalidades_Destacadas

Se implementó una funcionalidad mediante JavaScript que permite alternar la visibilidad del propósito institucional. 
Utilizando el método `classList.toggle`, el sitio gestiona la aparición de contenido oculto sin recargar la página. Además, se incluyó lógica condicional para actualizar el texto del botón de acción (`Conocer Propósito` / `Ocultar Propósito`) en tiempo real según el estado del contenedor.
| Botón Conocer Propósito | Botón Ocultar Propósito |
| :---: | :---: |
| ![Vista Conocer](img/capture/capture_index.jpg) | ![Vista Ocultar](img/capture/capture_index2.jpg) |

Como parte de los requisitos del proyecto, se puede acceder a las páginas individuales con la información pedida.

*   [Perfil de Sergio Daniel Galván](sergiogalvan.html)
*   [Perfil de Víctor Álvarez](victoralvarez.html)
*   [Perfil de Alejandro Rodriguez](alejandrorodriguez.html)

Navegación Bidireccional: Cada página cuenta con un botón de retorno ("Volver atrás") claramente identificado.
| Botón Volver Atrás |
| :---: |
| ![Botón Volver Atrás](img/capture/capture_volveratras.jpg) |

Modo Oscuro Persistente: El usuario puede cambiar el tema del sitio, y su preferencia se guarda en el navegador para futuras visitas.
| Modo Claro | Modo Oscuro |
| :---: | :---: |
| ![Vista Clara](img/capture/capture_claro.jpg) | ![Vista Oscura](img/capture/capture_oscuro.jpg) |

Menú Hamburguesa: Navegación optimizada para dispositivos móviles (Responsive Design).
| Menu Responsive | Menu |
| :---: | :---: |
| ![Vista Menu Responsive](img/capture/capture_menu_responsive.jpg) | ![Vista Menu](img/capture/capture_menu.jpg) |

Bitácora Integrada: Un registro detallado de la evolución del proyecto accesible desde el menú principal.
| Bitácora |
| :---: |
| ![Html Bitácora](img/capture/capture_bitacora.jpg) |

Galería Multimedia: Integración dinámica de trailers de cine y pistas de audio (Spotify/YouTube).
| Menu Responsive |
| :---: |
| ![Vista Button](img/capture/capture_iframes.jpg) |

Formularios Inteligentes: Validación de campos y limpieza automática tras el envío exitoso.
| Contac Val | Contact Send |
| :---: | :---: |
| ![Vista Validacion](img/capture/capture_validacion.jpg) | ![Vista Enviado](img/capture/capture_msj_send.jpg) |

## Estructura del Repositorio
/
├── index.html          # Página principal
├── bitacora.html       # Registro de acciones
├── contact.html       # Formulario de contacto
├── sergiogalvan.html   # Perfil de Sergio
├── victoralvarez.html  # Perfil de Víctor
├── alejandrorodriguez.html # Perfil de Alejandro
├── css/
│   └── style.css         # Estilos globales
├── js/
│   └── main.js         # Lógica de Modo Oscuro y botones
├── img/                # Organizado en /capture, /disc y /film
└── README.md           # Este documento

## Nota_del_Equipo
Este proyecto refleja la capacidad de trabajo colaborativo y la aplicación de conceptos de desarrollo frontend modernos, priorizando siempre la experiencia del usuario y la legibilidad del código.