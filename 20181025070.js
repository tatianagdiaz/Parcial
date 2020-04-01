
function pesoreal(){
    let pesoa= document.getElementById('kg').value;
    let pesofinal = parseInt(pesoa)*parseInt(703);
    return pesofinal;
}
function estaturareal(){
    let estaturaa= document.getElementById('m').value;

    let estaturafinal =parseInt(estaturaa)*parseInt(estaturaa);
    return estaturafinal;
}
function calcularimc(){

    let pesofinal = pesoreal();
    let estaturafinal = estaturareal();

   var imc = pesofinal*estaturafinal;

}
function clasificar(){

	calc = document.getElementById("calc");
	kg = document.getElementById("kg");
	m = document.getElementById("m");
	imc = document.getElementById("imc");
	lectura = document.getElementById("lectura");

	calc.onclick = function(){
		if(kg.value!="" && m.value!=""){
			imcx = (kg.value / (m.value* m.value));
			imc.innerHTML = imcx
			console.log(imcx);

			if(imcx<18.5){ lectura.innerHTML = "Bajo de peso"; }
			else if(imcx>=18.5 && imcx<=24.9){ lectura.innerHTML = "Peso normal"; }
			else if(imcx>=25 && imcx<=29.9){ lectura.innerHTML = "Subido de peso"; }
			else if(imcx>30){ lectura.innerHTML = "Obesidad"; }

		}else{
			alert("Ingresa tus datos")
		}

	};
}
