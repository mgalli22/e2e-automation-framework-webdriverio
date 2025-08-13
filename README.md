# WebdriverIO Advanced QA Automation Framework

## Descripción

Framework profesional de automatización de pruebas E2E orientado a back-end, construido con **WebdriverIO** y siguiendo las mejores prácticas de la industria. Incluye:

- Arquitectura modular con Page Object Model avanzado
- Integración de pruebas API + UI
- Separación de datos, helpers y servicios
- Soporte multi-ambiente y variables de entorno
- Reportes avanzados (Allure)
- Comandos customizados, hooks, logs y screenshots automáticos en fallos
- Ejemplo de integración API-UI para mostrar pruebas cross-layer

---

## Estructura del proyecto

```plaintext
wdio-advanced-qa/
├── .env                # Variables de entorno
├── test/
│   ├── specs/          # Casos de prueba E2E
│   ├── data/           # Datos de prueba
│   ├── pageobjects/    # Page Objects
│   ├── helpers/        # Utilidades y assertions custom
│   └── services/       # Integraciones backend/API
├── utils/              # Utilidades globales (env)
├── wdio.conf.js        # Configuración principal
├── package.json        # Dependencias y scripts
```

---

## Instalación

1. **Clonar el repositorio**  
   `git clone <repo-url> && cd wdio-advanced-qa`

2. **Instalar dependencias**  
   `npm install`

3. **Configurar variables de entorno**  
   Copia el archivo `.env` y ajusta según tu ambiente:

   ```
   BASE_URL=https://www.google.com
   API_BASE_URL=https://api.publicapis.org
   ```

4. **Correr los tests**  
   `npm test`

---

## Mejores prácticas implementadas

- Uso de **Page Object Model** para mantener el código escalable y reutilizable
- **Separación de concerns**: helpers, datos, servicios y lógica de negocio desacoplados
- **Hooks** para screenshots automáticos ante errores, logs de inicio y fin de ejecución
- Configuración avanzada de **reportes** (Allure) y paralelización
- Ejemplo de **pruebas híbridas UI+API** para escenarios cross-layer y validaciones backend
- Soporte para variables de entorno, ambientes y configuración flexible
- **Headless** y optimización para pipelines CI/CD

---

## Extender el framework

- Agrega nuevos Page Objects en `test/pageobjects/`
- Define nuevos helpers/utilidades en `test/helpers/`
- Implementa servicios API REST en `test/services/`
- Usa nuevos datos de prueba en `test/data/`
- Crea specs E2E en `test/specs/`

---

## Scripts útiles

- `npm test` — Corre los tests localmente
- `npm run test:ci` — Corre los tests en modo CI (puedes customizar variables en el script)
- `allure generate allure-results` — Genera el reporte Allure (si lo tienes instalado globalmente)

---

## Dependencias principales

- [WebdriverIO](https://webdriver.io/)
- [Mocha](https://mochajs.org/)
- [Allure Reporter](https://docs.qameta.io/allure/)
- [Chai](https://www.chaijs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Axios (API integration)](https://axios-http.com/)

---

## Ejemplo de caso de prueba avanzado

- Búsqueda en Google con validación dinámica de resultados usando API backend como fuente de datos
- Screenshots automáticos en fallos
- Assertions customizados y reutilizables
- Separación clara de datos, lógica de negocio y helpers

---

## ¿Cómo escalar este framework?

- Agrega soporte a otros navegadores/capacidades en `wdio.conf.js`
- Integra tu propio CI/CD pipeline
- Añade coverage, linters y quality gates
- Implementa patrones de pruebas avanzados: data-driven, contract testing, etc.

---

## Contacto

Cualquier consulta, sugerencia o colaboración es bienvenida.

---