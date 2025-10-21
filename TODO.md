# TODO - Proyecto Botica

## Tareas Completadas
- [x] Inicializar backend con Spring Boot y dependencias
- [x] Crear estructura de paquetes (controller, service, entity, repository, config, security)
- [x] Implementar entidades Usuario y Producto
- [x] Implementar repositorios
- [x] Implementar servicios
- [x] Implementar controladores con endpoints REST
- [x] Configurar seguridad JWT con roles
- [x] Inicializar frontend React con Axios
- [x] Crear componentes básicos (LoginForm, Dashboard, ProductoList, ProductoForm)
- [x] Integrar API en frontend

## Mejoras Críticas (Prioridad Alta)
- [x] Fortalecer secreto JWT: Generar clave fuerte y aleatoria, cargar desde variable de entorno
- [x] Configurar CORS correctamente: Eliminar cors().disable(), configurar orígenes permitidos
- [x] Usar enum para roles: Crear Role.java, modificar Usuario.java y servicios relacionados
- [x] Usar BigDecimal para precios: Cambiar Double a BigDecimal en Producto.java, ajustar servicios y controlador
- [x] Mejorar manejo de errores: Reemplazar printStackTrace con logger, mensajes seguros para cliente
- [x] Actualizar JJWT a versión 0.12.5 en pom.xml

## Funcionalidad Básica
- [x] Asegurar login funcional: Después de login, redirigir a dashboard y mostrar JWT
- [x] Probar integración backend-frontend

## Mejoras de Código (Prioridad Media)
- [ ] Introducir DTOs: Crear RegisterRequest, LoginRequest, ProductoRequest, AuthResponse, ProductoResponse
- [ ] Modificar controladores para usar DTOs

## Expansión (Prioridad Baja)
- [ ] Implementar pruebas unitarias
- [ ] Paginación y filtrado para productos
- [ ] Gestión de usuarios CRUD para ADMIN
- [ ] Documentación API con Swagger
- [ ] Contenedorización con Docker

## Preparación AVANCE 02
- [ ] Eliminar carpeta OnceSports-main (temporal)
- [ ] Inicializar repositorio Git
- [ ] Crear ramas individuales para features
- [ ] Simular commits descriptivos
- [ ] Crear Pull Requests simulados con revisiones
- [ ] Simular y resolver conflicto de merge
- [ ] Crear flujo de release (tag v1.0 con changelog)
- [ ] Configurar herramientas de colaboración (ej. GitHub Discussions)
- [ ] Configurar herramienta de gestión de actividades (ej. GitHub Projects o Trello)
- [ ] Actualizar README.md con evidencias (capturas, enlaces, etc.)
- [ ] Documentar proceso en README.md
