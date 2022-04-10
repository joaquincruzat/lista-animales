//Referencia formulario HTML

let dueño = document.getElementById("propietario").value;
let numeroTelefonico = document.getElementById("telefono").value;
let lugarResidencia = document.getElementById("direccion").value;
let nombreMascota = document.getElementById("nombreMascota").value;
let tipo = document.getElementById("tipo").value;
let motivoConsulta = document.getElementById("enfermedad").value;


const btn = document.getElementById ("button");

btn.addEventListener ("click", (event)=>{
    event.preventDefault();

let paciente = new Mascota(nombreMascota,motivoConsulta,tipo,dueño,lugarResidencia,numeroTelefonico);
console.log (paciente) 

const propietario = paciente.datosPropietario();

let resultado = document.getElementById("resultado");
resultado.innerHTML = 
`
<div style="border: 1px; border-color: black; border-style: solid;">
<p class="mt-3">Datos agregados</p>
<ul class = "text-center" >
    <li>El nombre del dueño es: ${propietario.nombre}. El domicilio es: ${propietario.direccion}, y el número telefónico de contacto: ${propietario.telefono}.</li>
    <li>El tipo de animal es un: ${paciente.tipo}, mientras que el nombre de la mascota es: ${paciente.nombreMascota}, y la enfermedad es: ${paciente.motivoConsulta}.</li>
</ul>
</div>
`

})


//Clases

class Propietario {
    constructor (nombre, direccion, telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    datosPropietario (){
        return {
            nombre: this.nombre,
            direccion: this.direccion,
            telefono: this.telefono,
        }
    }
    
}

class Animal extends Propietario {
    constructor (tipo, nombrePropietario, direccionPropietario, telefonoPropietario){
        super (nombrePropietario, direccionPropietario, telefonoPropietario)
        this._tipo = tipo
    }
get tipo(){
    return this._tipo = tipo
    }
}

class Mascota extends Animal {
    constructor (nombreMascota, motivoConsulta, tipoAnimal, nombrePropietario, direccionPropietario, telefonoPropietario){
        super (tipoAnimal, nombrePropietario, direccionPropietario, telefonoPropietario)
        this._nombreMascota = nombreMascota;
        this._motivoConsulta = motivoConsulta;
    }
get nombreMascota (){
    return this._nombreMascota = nombreMascota;
    }
set nombreMascota (nombreMascota_nuevo){
    this._nombreMascota = nombreMascota_nuevo;
    }
get motivoConsulta (){
    return this._motivoConsulta = motivoConsulta; 
    }
set motivoConsulta (nuevo_motivoConsulta){
    this._motivoConsulta = nuevo_motivoConsulta;
    }
}
