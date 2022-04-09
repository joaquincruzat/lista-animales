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

let paciente = new Mascota(nombreMascota, motivoConsulta,tipo,dueño,lugarResidencia,numeroTelefonico);
console.log (paciente)

let resultado = document.getElementById("resultado");
resultado.innerHTML = 
`
<div style="border: 1px; border-color: black; border-style: solid;">
<p class="mt-3">Datos agregados</p>
<ul class = "text-center" >
    <li>El nombre del dueño es: ${dueño}. El domicilio es: ${lugarResidencia}, y el número telefónico de contacto: ${numeroTelefonico}.</li>
    <li>El tipo de animal es un: ${tipo}, mientras que el nombre de la mascota es: ${nombreMascota}, y la enfermedad es: ${motivoConsulta}.</li>
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
        return `${this.nombre} - ${this.direccion} - ${this.telefono}`
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
    constructor (nombreMascota, enfermedad, tipoAnimal, nombrePropietario, direccionPropietario, telefonoPropietario){
        super (tipoAnimal, nombrePropietario, direccionPropietario, telefonoPropietario)
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }
get nombreMascota (){
    return this._nombreMascota = nombreMascota;
    }
set nombreMascota (nombreMascota_nuevo){
    this._nombreMascota = nombreMascota_nuevo;
    }
get enfermedad (){
    return this._enfermedad = enfermedad; 
    }
set enfermedad (nueva_enfermedad){
    this._enfermedad = nueva_enfermedad;
    }
}
