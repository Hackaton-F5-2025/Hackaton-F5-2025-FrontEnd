# EcoPart - Marketplace ecológico y participativo

## 🌿 Descripción
EcoPart es un innovador marketplace diseñado para fomentar la sostenibilidad y la reutilización de productos a través del alquiler, la venta de repuestos y la creatividad con residuos: 

·Alquiler de productos: Encuentra y ofrece productos en alquiler para reducir el consumo innecesario.

·Venta de repuestos: Compra y vende piezas para reparar en lugar de desechar.

·Residuos creativos: Una sección dedicada a la reutilización de materiales con creatividad.

## 🔧 Tecnologías utilizadas
- **Frontend:** React, Vite, React Router, Material UI.
- **Backend:** Laravel, MySQL.
- **Estilos:** CSS Módulos, Material UI.
- **Despliegue:** AWS (EC2, S3, RDS, Load Balancer).

## 💻 Instalación
Sigue estos pasos para ejecutar el proyecto localmente:

### 1. Clonar el repositorio
```sh
 git clone https://github.com/Hackaton-F5-2025
 cd Hackaton-F5-2025
```

### 2. Instalación del frontend
```sh
 cd frontend
 npm install
```

### 3. Instalación del backend
```sh
 cd backend
 composer install
 php artisan migrate --seed
```

### 4. Variables de entorno
Crea un archivo `.env` en el backend y configura las variables necesarias.

### 5. Ejecutar el proyecto
**Frontend:**
```sh
npm run dev
```

**Backend:**
```sh
php artisan serve
```

## 🔍 Características principales
- 🏠 **Inicio:** Búsqueda de productos y menú intuitivo.
- 🛒 **Carrito de compras:** Agregar productos y gestionar pedidos. (Futura feature).
- ⚙️ **Repuestos:** Sección de piezas reutilizables.
- 👥 **Inicio de sesión:** Registro y autenticación de usuarios. (Futura feature).
- 📚 **Sistema de alquiler:** Próximamente.

## 📤 Despliegue en AWS
**(https://miro.com/app/board/uXjVINsuqLQ=/)**
El proyecto está configurado para ejecutarse en AWS con:
- **EC2:** Servidor de backend.
- **S3:** Almacenamiento de imágenes.
- **RDS:** Base de datos MySQL.
- **Load Balancer:** Balanceo de carga y escalabilidad.

## 🚀 Contribución
1. Crea un **fork** del repositorio.
2. Crea una nueva rama: `git checkout -b feature/nueva-funcionalidad`
3. Realiza tus cambios y haz un commit: `git commit -m "Agregado x funcionalidad"`
4. Sube tus cambios: `git push origin feature/nueva-funcionalidad`
5. Crea un Pull Request.

## 👤 Autores
- **[Guadalupe Hani Schajris](https://github.com/GuadalupeSchajris)(https://www.linkedin.com/in/guadalupe-hani/)** - Product Owner/Frontend/Cloud. 
- **[Patricia Fernández Bregón](https://github.com/PFBregon)(https://www.linkedin.com/in/patricia-fern%C3%A1ndez-breg%C3%B3n/)** - Diseñadora UI/UX /Frontend.
- **[Rafael Fernandez Rodiguez](https://github.com/FaloCurso?tab=projects)** - Frontend.
- **[David Orlando Bustos Vanegas](https://github.com/Davis-10)** - Frontend.
- **[Jonathan Torreblanca Vallejo](https://github.com/Leonkeneddy86)(http://www.linkedin.com/in/jonathantorreblanca)** - Backend.
- **[Antonio Guillen](https://github.com/AntonioGuillen123/AntonioGuillen123)(http://www.linkedin.com/in/jonathantorreblanca)** - Backend.
- **[Miguel Reyes Vasquez](https://github.com/MIANREVA2024)** - Backend.

## 🌟 Agradecimientos
Gracias a Factoría F5 y Globant por impulsar este proyecto.

---
**© EcoPart 2025**