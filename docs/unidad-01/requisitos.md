---
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Requisitos

Bueno ya determinamos que aprenderemos **Python**, por lo tanto necesitamos instalarlo en nuestro sistema.

No te preocupes lo veremos paso a paso!.

---

## Instalación de Python

<Tabs>
<TabItem value="windows" label="Windows">

## Windows:
1. **Visita el sitio oficial de Python:**  
   [https://www.python.org/downloads/](https://www.python.org/downloads/).
2. **Descarga la última versión de Python.**
3. **Ejecuta el instalador:**  
   Abre el archivo `.exe` descargado.
4. **Configuración clave:**

    :::danger Paso Crítico (¡No omitir!)
    ✅ Marca la opción **`Add Python to PATH`**.  
    Este paso es **obligatorio** para poder usar Python y sus herramientas (`pip`) desde la Terminal o PowerShell.  
    **Si lo olvidas, tendrás que agregar el path en variables del sistema.**
    :::
    :::warning Paso Opcional: 🔍 Privilegios de administrador  
    ✅ **Marca "Use admin privileges"** si deseas una instalación global (para todos los usuarios).  
    - **No lo marques** si prefieres instalar Python solo para tu usuario actual.
    :::

    <details>
    <summary>Haz clic para ver la captura de pantalla</summary>
    <p>
        <img 
        src="/python/img/py-win-add-path.png" 
        alt="Captura de pantalla: Marcar 'Add Python to PATH'" 
        style={{ width: '60%', border: '1px solid #ddd', borderRadius: '5px' }} 
        />
    </p>
    </details>
  
5. **Inicia la instalación:**  
   Haz clic en **"Install Now"** y espera a que termine.
6. **Finaliza:**  
   Al terminar, haz clic en **"Close"**.

### Solución: ¿Olvidaste marcar 'Add to PATH'?
:::info
Si te olvidaste de esto entonces no podrás usar python en un IDE o terminal  
La solución es sencilla:
1. Volver a ejecutar el instalador (NO necesitas eliminar nada)
2. Clickear en **Modify**
3. Las primeras opciones tildalas y dale a next
4. Entre las siguientes opciones estará a**add to path**, márcala!
:::

</TabItem>
<TabItem value="macos" label="macOS">

## macOS:

Yo no se nada de macOs pero por suerte python es multiplataforma:

1. **Descarga el instalador desde el sitio oficial:**  
   [https://www.python.org/downloads/mac-osx/](https://www.python.org/downloads/mac-osx/)
2. **Sigue los pasos del instalador.**

:::info Nota del Autor y Recomendación Si bien Python es multiplataforma, como desarrollador de entorno Linux, mi recomendación para macOS es siempre usar Homebrew (el gestor de paquetes de Mac) para instalar y gestionar versiones de Python, ya que es el estándar de desarrollo. 
:::

</TabItem>

<TabItem value="linux" label="Linux">

## Linux:
Probablemente ya venga instalado Python en tu linux, puedes corroborarlo así:

1. Abre una terminal y verifica si Python ya está instalado:
 ```bash
   python --version
   # Si el anterior falla, prueba:
   python3 --version
```
   
2. Si no está instalado puedes instalarlo desde la terminal con install python3 según tu distro.
</TabItem>
</Tabs>

## IDE (Entorno de Desarrollo Integrado)

Básicamente es un software que combina diferentes tipos de herramientas que te facilitarán la vida a la hora de desarrollar.
Si bien el código no deja de ser texto y podrías incluso programar en un Bloc de notas, un IDE te ayuda a detectar si tenés errores, o a conectar con otro lenguaje (si se pueden combinar) o a almacenar o una infinidad de herramientas útiles, para escribir, probar y organizar tu código.

El que recomiendo por ligereza versatilidad y popularidad es:

:::tip Visual Studio Code y lo pueden descargar desde aquí

[https://code.visualstudio.com/](https://code.visualstudio.com/)
:::

Es multiplataforma por lo que podrás descargar desde allí tanto para Windows, Linux o MacOS

## No tengo una PC

Quizás no tengas una computadora, o no puedas instalar cosas allí

No te preocupes por el momento tienes algunas alternativas

- Visual Studio code:
  - Ofrece dentro de su web una versión online  
  [https://vscode.dev/](https://vscode.dev/)

- Python online  
  - Tienes un editor online de python  
  [https://pythonsandbox.io/editor](https://pythonsandbox.io/editor)

- Google Colab
  - Es un editor de google bastante poderoso y ligero  
  [https://colab.research.google.com/](https://colab.research.google.com/)
  

