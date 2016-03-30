$(document).on("ready",configurarApp); /*Ejecutamos la funcion configurarApp
cuando el Documento es Listo o Cargado en el Navegador*/

function configurarApp()
{
	var canvas = document.getElementById("miCanvas"); /*Declaramos una variable
	llamada canvas que tendra como valor el elemento con id=miCanvas*/
	var ctx = canvas.getContext("2d"); /*Se declara una variable ctx para el
	contexto del canvas que en este caso es de 2d (dibujo de dos dimensiones)*/
	canvas.width = screen.availWidth; /*Al ancho del elemento canvas con id=miCanvas
	se le asigna el ancho igual al ancho de la pantalla del cliente*/
	dibujoFooter(canvas,ctx);
}

function dibujoFooter(canvas,contexto)
{
	contexto.fillStyle="rgba(0,0,0,0.8)"; /*Cambia el relleno conque el canvas dibuja*/
	contexto.moveTo(0,0); /*Indicamos al compilador desde donde empesar a dibujar 
	la figura*/
	//quadraticCurveTo(cpx,xpy,x,y);
	contexto.quadraticCurveTo(0,-50,canvas.width-100,canvas.height-50); /*Esta funcion nos permite dibujar lienzos*/
	//contexto.stroke();/*Construlle la recta desde el punto Inicial hasta el Punto final*/
	contexto.fill();/*nos permitira rellenar la figura*/
}