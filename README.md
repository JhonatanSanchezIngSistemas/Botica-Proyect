# Botica-Proyect
Sistema de gestión de botica con React (frontend) y Spring Boot (backend).

## Estructura
- Botica-Backend: API con Java, Spring Boot, MySQL, Hibernate, Lombok, Spring Security (JWT y roles).
- Botica-Frontend: Interfaz con React.

## Instalación
- Backend: cd Botica-Backend && mvn spring-boot:run
- Frontend: cd Botica-Frontend && npm start

## Tecnologías
- Backend: JDK 21, Spring Boot, MySQL, Hibernate, Lombok, Spring Security.
- Frontend: React, Axios para APIs.

## AVANCE 02: Mejoras de Seguridad y Preparación para Colaboración

### Mejoras Implementadas
- **JWT Secret Mejorado**: Se cambió el secret por defecto a uno más seguro.
- **Configuración CORS**: Configurado para permitir orígenes específicos (localhost:3000) y métodos permitidos.
- **Enum Role**: Uso de enum Role para roles (ADMIN, USER) en lugar de strings.
- **BigDecimal para Precios**: Cambiado Double a BigDecimal en Producto para precisión financiera.
- **Manejo de Errores Mejorado**: Agregado logging en GlobalExceptionHandler y AuthController, reemplazando printStackTrace con logger.error.
- **JWT Actualizado**: Actualizado a JJWT 0.12.5 para compatibilidad y seguridad.
- **Login con Redirección**: Después del login exitoso, redirige al dashboard y muestra el JWT token.
- **Dashboard con JWT**: El dashboard muestra el JWT token almacenado en localStorage.

### Preparación para Colaboración
- **Repositorio Git**: Inicializar repositorio Git en el proyecto.
- **Ramas**: Crear ramas para desarrollo (e.g., feature/login-improvements).
- **Pull Requests**: Simular PRs para revisión de código.
- **Conflictos de Merge**: Resolver conflictos de merge simulados.
- **Release v1.0**: Crear release v1.0 con tag y documentación.

### Evidencias
- [Enlace a GitHub Repo](https://github.com/usuario/botica-proyecto)
- [PRs](https://github.com/usuario/botica-proyecto/pulls)
- [Release v1.0](https://github.com/usuario/botica-proyecto/releases/tag/v1.0)

## Avance 02 - Trabajo colaborativo con control de versiones

### Evolución funcional
- Implementación de autenticación JWT con roles (ADMIN, USER).
- Endpoints de productos protegidos por roles.
- Nueva funcionalidad: Registro y login de usuarios.

### Trabajo colaborativo
- Rama feature/seguridad-jwt creada para desarrollo de autenticación.
- Commits descriptivos en rama secundaria.
- Merge exitoso a rama main.

### Simulación de conflicto de merge
- No se presentó conflicto en este avance, pero se documenta el proceso para futuros merges.

### Release v1.0
- Tag v1.0 creado y subido a GitHub.
- Changelog: Implementación completa de backend con seguridad JWT.

### Herramientas de colaboración
- Git/GitHub para control de versiones.
- Estrategia de branching: Feature branching.

### Gestión de actividades
- TODO.md para seguimiento de tareas.

### Evidencia
- Pull Request: https://github.com/JhonatanSanchezIngSistemas/Botica-Proyect/pull/1 (simulado)
- Release: https://github.com/JhonatanSanchezIngSistemas/Botica-Proyect/releases/tag/v1.0
- Tablero de tareas: TODO.md en el repositorio
