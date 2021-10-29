var nombre = document.getElementById("nombre")
var apellido = document.getElementById("apellido")
var email = document.getElementById("email")
var telefono = document.getElementById("telefono")
var mensaje = document.getElementById ("mensaje")
var error = document.getElementById ("error")

var form = document.getElementById ("form")
    form.addEventListener ("submit", function (evt){
        evt.preventDefault ();

        var mensajeserror = [];

        if(nombre.value === null || nombre.value === ""){
            mensajeserror.push ("Ingresa un nombre");
        }

        if(nombre.value === null || apellido.value === ""){
            mensajeserror.push ("Ingresa un apellido");
        }
    
        if(nombre.value === null || email.value === ""){
            mensajeserror.push ("Ingresa un email");
        }
        if(nombre.value === null || telefono.value === ""){
            mensajeserror.push ("Ingresa un teléfono");
        }
        if(nombre.value === null || mensaje.value === ""){
            mensajeserror.push ("Ingresa un mensaje");
        }
        error.innerHTML = mensajeserror.join (" , ");

    })

