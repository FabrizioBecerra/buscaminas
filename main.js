//Constantes del juego
const COLUMNAS = 3;
const FILAS = 3;
const CANTIDAD_MINAS = 2;

//Variables con colores para los casilleros (NO se pudieron declarar como constantes ya que  la fn color sólo está definida para el setup y el draw)
var COLOR_CASILLERO_CON_MINA;
var COLOR_CASILLERO_SIN_MINA;
var COLOR_CASILLERO_MARCADO;

//Variables controladas al hacer click con el mouse: mousePressed()
var columnaPresionada;
var filaPresionada;
var hizoClick = false;

//Otras variables
var casillerosSinDescubrir;

function setup()
{
  createCanvas(500, 500);   //crea un lienzo o panel donde estará el juego. El primer parámetro es el ancho y el segundo el alto del lienzo.
  laMagiaDeLosProfes();

  //Asigno colores que se utilizarán. La fn color solo está definida para el setup y el draw
  COLOR_CASILLERO_CON_MINA = color("#FF0000");
  COLOR_CASILLERO_SIN_MINA = color("#1CC932");
  COLOR_CASILLERO_MARCADO = color("#278EF2");

  // Modificar/completar
 ponerMinasTablero();
 casillerosSinDescubrir = COLUMNAS * FILAS;
}


function draw() {
  if (hizoClick == true)
  {
    if (mouseButton == LEFT)
    {
      if (tieneMinaCasillero(columnaPresionada, filaPresionada))
      {
        pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_CON_MINA);
        perder(); 
        
      }
      else
      {
        pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_SIN_MINA);
        descubrirCasillero(columnaPresionada, filaPresionada);
      }
      if(casillerosSinDescubrir == CANTIDAD_MINAS)
      {
        ganoElJuego();
      }
    }
    else
    {
        pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_MARCADO);
    }
  
    //pinta el casillero clickeado. Modificar/completar

    hizoClick = false;  //Indico que ya "procesé" el click del usuario. NO modificar
  }
}


function ganoElJuego()
{
  ganar();
  return true;   
}

function ponerMinasTablero()
{
  for (let contador = 0; contador < CANTIDAD_MINAS; contador++)
{
  numeroAleatorioFila = floor(random(0, 3));
  numeroAleatorioColumna = floor(random(0, 3));
  if(!tieneMinaCasillero(numeroAleatorioColumna, numeroAleatorioFila))
    ponerMinaCasillero(numeroAleatorioColumna, numeroAleatorioFila); 
  else
    contador--;
    console.log(numeroAleatorioColumna, numeroAleatorioFila);
}
  
}

function mostrarMinas()
{
  for (let columna = 0; columna < COLUMNAS; columna++) //recorro columnas
    for(let fila = 0; fila < FILAS; fila++) //recorro filas
      if (tieneMinaCasillero(columna, fila) == true) // veo si hay una mina en esa columna y fila
          pintarCasillero(columna, fila, COLOR_CASILLERO_CON_MINA); // pinto el casillero
}

function contarMinasAlrededor(columna, fila)
{
  return 9;   //Esto hace que SIEMPRE cuente 9 minas alrededor. Modificar/completar

}