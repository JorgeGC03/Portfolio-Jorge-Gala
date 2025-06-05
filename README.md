# Portfolio Jorge Gala Caballero

Portfolio personal desarrollado con Next.js, TypeScript, Tailwind CSS y Framer Motion.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **Responsive**: Adaptado para todos los dispositivos
- **Modo Oscuro**: Soporte completo para tema claro y oscuro
- **Animaciones**: Efectos visuales atractivos con Framer Motion
- **Formulario de Contacto**: Integración con EmailJS para envío de mensajes
- **Proyectos GitHub**: Integración directa con repositorios de GitHub
- **Optimizado**: Rendimiento optimizado con Next.js 15

## 🛠️ Tecnologías

- **Frontend**: Next.js 15, React 19, TypeScript
- **Estilos**: Tailwind CSS, Radix UI
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Formularios**: React Hook Form, Zod
- **Email**: EmailJS
- **Deployment**: Vercel (recomendado)

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/JorgeGC03/Portfolio-Jorge-Gala.git
cd Portfolio-Jorge-Gala
```

2. Instala las dependencias:
```bash
pnpm install
# o
npm install
# o
yarn install
```

3. Ejecuta el servidor de desarrollo:
```bash
pnpm dev
# o
npm run dev
# o
yarn dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📧 Configuración del Formulario de Contacto

Para que el formulario de contacto funcione correctamente, necesitas configurar EmailJS:

### 1. Crear cuenta en EmailJS

1. Ve a [EmailJS](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Verifica tu email

### 2. Configurar el servicio de email

1. En el dashboard de EmailJS, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. Copia el **Service ID**

### 3. Crear template de email

1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Configura el template con estas variables:
   - `{{from_name}}` - Nombre del remitente
   - `{{from_email}}` - Email del remitente
   - `{{message}}` - Mensaje
   - `{{to_name}}` - Tu nombre (Jorge Gala)

Ejemplo de template:
```
Asunto: Nuevo mensaje desde tu portfolio - {{from_name}}

Hola {{to_name}},

Has recibido un nuevo mensaje desde tu portfolio:

Nombre: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}

---
Enviado desde tu portfolio web
```

4. Copia el **Template ID**

### 4. Obtener Public Key

1. Ve a "Account" > "General"
2. Copia tu **Public Key**

### 5. Actualizar el código

En el archivo `app/page.tsx`, actualiza estas líneas (aproximadamente línea 60):

```typescript
// Configuración de EmailJS - Reemplaza con tus propios IDs
const serviceId = 'tu_service_id' // Reemplazar con tu Service ID
const templateId = 'tu_template_id' // Reemplazar con tu Template ID
const publicKey = 'tu_public_key' // Reemplazar con tu Public Key
```

## 📁 Estructura del Proyecto

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   └── theme-provider.tsx
├── public/
│   ├── cv-jorge-gala.pdf
│   ├── carta-recomendacion.pdf
│   └── jorge-foto.jpg (añadir tu foto)
├── lib/
├── hooks/
└── styles/
```

## 🖼️ Añadir tu Foto

Para añadir tu foto al portfolio:

1. Coloca tu foto en la carpeta `public/` con el nombre `jorge-foto.jpg`
2. Asegúrate de que sea una imagen cuadrada para mejor resultado
3. Tamaño recomendado: 400x400px o superior

## 🚀 Deployment

### Vercel (Recomendado)

1. Haz push de tu código a GitHub
2. Ve a [Vercel](https://vercel.com)
3. Importa tu repositorio
4. Configura las variables de entorno si es necesario
5. Deploy automático

### Netlify

1. Haz push de tu código a GitHub
2. Ve a [Netlify](https://netlify.com)
3. Conecta tu repositorio
4. Configura el build command: `pnpm build`
5. Configura el publish directory: `out` o `.next`

## 🎨 Personalización

### Colores

Los colores principales se pueden cambiar en `tailwind.config.ts` o directamente en los componentes:

- **Primario**: Emerald (verde esmeralda)
- **Secundario**: Blue (azul)
- **Acento**: Purple (morado)

### Contenido

Actualiza tu información personal en `app/page.tsx`:

- Información personal
- Experiencia laboral
- Proyectos
- Habilidades
- Formación

## 📄 Archivos de Descarga

Los archivos PDF (CV y carta de recomendación) están en la carpeta `public/`:

- `cv-jorge-gala.pdf` - Tu CV
- `carta-recomendacion.pdf` - Carta de recomendación

Para actualizarlos, simplemente reemplaza los archivos existentes.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

Jorge Gala Caballero - [jorgegalacaballero@gmail.com](mailto:jorgegalacaballero@gmail.com)

Proyecto: [https://github.com/JorgeGC03/Portfolio-Jorge-Gala](https://github.com/JorgeGC03/Portfolio-Jorge-Gala)

---

⭐ ¡No olvides dar una estrella al proyecto si te ha sido útil!
