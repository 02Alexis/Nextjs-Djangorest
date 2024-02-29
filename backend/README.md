## Instalación del back
```bash
# Navega al directorio del proyecto:
cd Nextjs-Djangorest/backend
```

# Configuración del entorno virtual

Sigue los pasos a continuación para configurar y activar un entorno virtual:

    $ py -m venv venv
    $ .\venv\Scripts\activate

# Instalación de dependencias
Asegúrate de tener el entorno virtual activo y ejecuta el siguiente comando para instalar las dependencias del proyecto:

    pip install -r requirements.txt

# Migraciones de la base de datos

Ejecuta los siguientes comandos para aplicar las migraciones y crear las tablas en la base de datos:

    python manage.py makemigrations
    python manage.py migrate

# Iniciar el servidor local

Ejecuta el siguiente comando para iniciar el servidor local:

    $ python manage.py runserver
    http://localhost:8000/api/tasks/


 # Samples 

## Backend
![image](https://github.com/02Alexis/Nextjs-Djangorest/assets/99287560/8506e6d9-59c9-4931-ae01-0e851fc5486c)
