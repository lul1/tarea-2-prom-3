document.addEventListener("DOMContentLoaded", function() {
    console.log("Estoy Listo!!");

    var form = document.querySelectorAll("form")

    form[0].addEventListener("submit", function(event){
        event.preventDefault();
        console.log("Enviado");

    });
    /*
      form.on("submit")


    console.log(form);

})
