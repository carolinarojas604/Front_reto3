function validaesVacio(dato){
    return !dato.trim().length;
}

/**
 * Al ingresar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
function validar(){
    //obtiene valores
    let name = $("#name").val();
    let brand = $("#brand").val();
    let model = $("#model").val();
    let category = $("#category").val();
    let description = $("#description").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(name)) {
        errores="Debe ingresar el nombre<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#name").focus();
        return false;
    }else if( validaesVacio(brand)) {
        errores="Debe ingresar la marca<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#brand").focus();
        return false;
    }else if( validaesVacio(model)) {  
        errores="Debe ingresar el año<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#model").focus();
        return false;
    }else if( validaesVacio(category)) { 
        errores="Debe seleccionar la categoría<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#category").focus();
        return false;
    }else if( validaesVacio(description)) { 
        errores="Debe ingresar la descripción<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#description").focus();
        return false;
    }
    else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

/**
 * Al actualizar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
 function validarEditar(){
    //obtiene valores
    let id = $("#idEdit").val();
    let name = $("#nameEdit").val();
    let brand = $("#brandEdit").val();
    let model = $("#modelEdit").val();
    let category = $("#categoryEdit").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(id)) {
        errores="id vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#idEdit").focus();
        return false;
    }else if( validaesVacio(brand)) {
        errores="brand vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#brandEdit").focus();
        return false;
    }else if( validaesVacio(model)) {  
        errores="model vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#modelEdit").focus();
        return false;
    }else if( validaesVacio(category)) { 
        errores="category vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#categoryEdit").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

function upperCaseF(campo) {
    setTimeout(function () {
        campo.value = campo.value.toUpperCase();
    }, 1);
}