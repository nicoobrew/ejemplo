let semaforo = document.getElementById("semaforo");
let verde = document.getElementById("verde");
let amarillo = document.getElementById("amarillo");
let rojo = document.getElementById("rojo");

semaforo.addEventListener('mouseover', function(event){
  let distancia = calcularDistancia(event.clientX, event.clientY);
  if(distancia > 200){
    cambiarLuz('verde');
  }
  else if(distancia >= 150 && distancia <= 200){
    cambiarLuz('amarillo')
  }
  else if(distancia < 150){
    cambiarLuz('rojo')
  }
});

function cambiarLuz(luzActiva){
  verde.style.backgroundColor = "gray";
  amarillo.style.backgroundColor = "gray";
  rojo.style.backgroundColor = "gray";

  if(luzActiva == "verde"){
    verde.style.backgroundColor = "green";
    setTimeout(function(){
      cambiarLuz("amarillo")
    }, 3000);
  }
  if(luzActiva == "amarillo"){
    amarillo.style.backgroundColor = "yellow";
    setTimeout(function(){
      cambiarLuz("rojo")
    }, 1000);
  }
  if(luzActiva == "rojo"){
    rojo.style.backgroundColor = "red";
    setTimeout(function(){
      cambiarLuz('verde')
    }, 3000);
  }
};

function calcularDistancia(x,y){
  let centroX = (semaforo.offsetLeft + semaforo.offsetWidth) / 2;
  let centroY = (semaforo.offsetTop + semaforo.offsetHeight) / 2;
  return Math.sqrt(Math.pow(x-centroX, 2) + Math.pow(y-centroY, 2));

};
