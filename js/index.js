// Esta linea garantiza que todo lo que se ejecute dentro de ready
// se ejecute solo cuando el html esté 100% cargado
$(document).ready(() => {
  console.log("JQuery Cargado");

  $('#formulario').submit(function (event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const nombre = $('#nombre').val();
    const apellido = $('#apellido').val();
    const email = $('#email').val();
    const fechaNacimiento = $('#fecha-nacimiento').val();
    const telefono = $('#telefono').val();
    const experiencia = $('#experiencia').val();

    // Actualizar el contenido del mensaje de agradecimiento en el popup
    $('#nombre-apellido').text(nombre + ' ' + apellido);
    $('#correo-electronico').text(email);

    // Mostrar el popup
    $('.popup-contenedor').removeClass('oculto');
  });

  // Agregar un controlador de eventos para ocultar el popup al hacer clic en el botón de cerrar
  $('.cerrar').click(function () {
    $('.popup-contenedor').addClass('oculto');
  });
});
