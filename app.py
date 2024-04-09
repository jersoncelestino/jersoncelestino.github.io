from flask import Flask, render_template #De esta manera llamamos al framework #El render template nos ayuda a importar un html
app = Flask(__name__) #Guardamos en una variable lo que nos devuelve el método para usarlo para nuestras urls y servidor


app.config['SERVER_NAME'] = 'localhost:5000'  # Cambia esto por el nombre de dominio y el puerto de tu aplicación
app.config['APPLICATION_ROOT'] = '/'  # Esto es opcional, pero puedes configurarlo según sea necesario
app.config['PREFERRED_URL_SCHEME'] = 'https'  # Cambia esto si tu aplicación usa HTTPS


#RUTA PARA MANEJAR LA PÁGINA PRINCIPAL
@app.route('/')#Aqui estamos creando una ruta pra nuestra pagina principal
def home():
    with app.app_context():
        return render_template('home.html')#usamos el render_template para llamar a un html

#RUTA PARA MANEJAR LA PÁGINA ABOUT
@app.route('/about')#Aqui estamos creando una ruta pra nuestra pagina about
def about():
    with app.app_context():
        return render_template('about.html')#usamos el render_template para llamar a un html


#Necesitamos saber si nuestra aplicación está escuchando constantemente
if __name__ == '__main__': #Esta validación nos ayuda a saber si estamos ejecutando el archivo principal
    app.run(debug=True)#Este metodo run nos permite eejcutar nuestra aplicación #Debug=true es para indicar al código que estaré modificando constantemente






