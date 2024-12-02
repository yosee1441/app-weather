# **App Weather**

Esta es una aplicación móvil diseñada para consultar el estado del tiempo. Permite obtener información meteorológica como temperatura, humedad y descripción general del clima. La aplicación está desarrollada con **React Native** y sigue una adaptación de la **Clean Architecture**.

## **Restricciones**
- Este proyecto utiliza `ToastAndroid` para mostrar mensajes de error en dispositivos Android. Ten en cuenta que los `Toast` solo funcionarán en plataformas Android. Si deseas mostrar mensajes de tipo Toast en iOS o en otras plataformas, necesitarás implementar una alternativa o usar una librería diferente.

---

## **Arquitectura**

La aplicación implementa los principios de Clean Architecture adaptados de la siguiente manera:

- **Servicios**:
  - Contiene las integraciones con servicios externos como la API de clima.
  - Ejemplo: `WeatherHttpService`.

- **Adaptadores**:
  - Gestionan la comunicación entre los casos de uso y las capas externas.
  - Ejemplo: Lógica implementada con hooks y controladores que interactúan con los servicios.

- **Componentes**:
  - Contienen la lógica de negocio de la aplicación, como buscar el clima por ciudad.
  - Ejemplo: `findOneByCity`.

- **Modelos/State**:
  - Define las entidades y estados que describen el núcleo de la aplicación.
  - Ejemplo: Modelos de clima y estados de Redux.

---

## **Requisitos**

### **Dependencias principales**
- [Node.js](https://nodejs.org) v16 o superior
- [Expo CLI](https://expo.dev)
- [React Native](https://reactnative.dev)

### **Variables de entorno**
Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```plaintext
API_URL=https://api.openweathermap.org
API_KEY_WEATHER=tu_api_key
```

## **Instalación**

### **Clonar el repositorio**
```code
git clone https://github.com/yosee1441/app-weather.git
cd app-weather
```

### **Instalar las dependencias**
```code
npm install
```

### **Iniciar Expo Web**
```code
npm run web
```

### **Iniciar Expo probar en disposivo**
```code
npm run start
```
