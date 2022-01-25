
//llenar campo ciudad
var region_ARICA_Y_PARINACOTA = ["Arica","Camarones","G.Lagos","Putre"];
var region_TARAPACA=["Alto Hospicio","Camiña","Colchane","Huara","Iquique","Pica","Pozo Almonte"];
var region_ANTOFAGASTA=["Antofagasta","Calama","María Elena","Mejillones","Ollagüe","S.Pedro de Atacama","Sierra Gorda","Taltal","Tocopilla"];
var region_ATACAMA=["Alto del Carmen","Caldera","Chañaral","Copiapó","D.de Alamagro","Freirina","Huasco","Tierra Amarilla","Vallenar"];
var region_COQUIMBO=["Andacollo","Canela","Combarbalá","Coquimbo","La Higuera","La Serena","Los Vilos","Monte Patria","Ovalle","Paiguano","Punitaqui","Río Hurtado","Salamanca","Vicuña"];
var region_VALPARAISO=["Algarrobo","Cabildo","Calle larga","Cartagena","Casablanca","Catemu","Concón","El Quisco","El Tabo","Hijuelas","Isla de pascua","A.Juan Fernandez","La Calera","La Cruz","La Ligua","Limache","Llaillay","Los Andes","Nogales","Olmue","Panquehue","Papudo","Petorca","Puchuncaví","Putaendo","Quillota","Quilpue","Quintero","Rinconada","San Antonio","San Felipe","San Esteban","Santa María","Santo Domingo","Valparaíso","Villa Alemana","Viña del mar","Zapallar"];
var region_METROPOLITANA=["Alhué","Buin","Calera de tango","Cerrillos","Cerra Navia","Colina","Conchalí","Curacaví","El Bosque","El Monte","Estación Central","Huechuraba","Independencia","Isla de Maipo","La Cisterna","La Florida","La Granja","Lampa","La Pintana","La Reina","Las Condes","Lo Barnechea","Lo Espejo","Lo Prado","Macul","Maipú","María Pinto","Melipilla","Ñuñoa","Padre Hurtado","Paine","P.A.Cerda","Peñaflor","Peñalolen","Pirque","Providencia","Pudahuel","Puente Alto","Quilicura","Quinta Normal","Recoleta","Renca","San Bernardo","San Joaquín","San josé de Maipo","San Miguel","San Pedro","San Ramón","Santiago","Talagante","Til Til","Vitacura"];
var region_LIBERTADORBO=["Chépica","Chimbarongo","Codegua","Coinco","Coltauco","Doñigue","Graneros","La Estrella","Las Cabras","Litueche","Lolol","Machalí","Malloa","Marchihue","Mostazal","Nancagua","Navidad","Olivar","Palmilla","Paredones","Peralillo","Peumo","Pichidegua","Pichilemu","Placilla","Pumanque","Quinta de Tilcoco","Rancagua","Renco","Requinoa","San Fernando","Santa Cruz","San Vicente"];
var region_MAULE=["Cauquenes","Chanco","Colbún","Constitución","Curepto","Curicó","Empedrado","Hualañe","Licantén","Linares","Longaví","Maule","Molina","Parral","Pelarco","Pelluhue","Pencahue","Rauco","Retiro","Río seco","Romeral","Sagrada Famila","San Clemente","San Javier","San Rafael","Talca","Teño","Vichuquen","Villa Alegre","Yerbas Buenas"];
var region_NUBLE=["Bulnes","Chillán","Chillán Viejo","Cobquecura","Coelemu","Coihueco","El Carmen","Ninhue","Ñiquén","Peumo","Pirque","Portezuelo","Quillón","Quirihue","Ránquil","San Carlos","San Fabian","San Ignacio","San Nicolás","Treguaco","Yungay"];
var region_BIOBIO=["Alto Biobío","Antuco","Arauco","Cabrero","Cañete","Chiguayante","Concepción","Contulmo","Coronel","Curanilahue","Florida","hualpén","Hualqui","Laja","Lebu","Los Angeles","Los Alamos","Lota","Mulchén","Nacimiento","Negrete","Penco","Quilaco","Quilleco","San Pedro de la paz","S.Rosendo","Sta.Bárbara","Sta.Juana","Talcahuano","Tirúa","Tucapel","Tomé","Yumbel"];
var region_ARAUCANIA=["Angól","Carahue","Chochol","Collipulli","Cunco","Curacautín","Curarrehue","Ercilla","Freire","Galvarino","Gorbea","Lautaro","Loncoche","Lonquimay","Los Sauces","Lumaco","Melipeuco","Nueva Imperial","Padre Las casas","Peruquenco","Pitrufquén","Pucón","Purén","Renaico","Saavedra","Temuco","Teodoro Schmidt","Toltén","Traiguén","Victoria","Vilcún","Villarrica"];
var region_RIOS=["Corral","Futrono","Lago Ranco","Lanco","La Unión","Los Lagos","Máfil","Paillaco","Panguipulli","Río Bueno","S.José De la Mariquina","Valdivia"];
var region_LAGOS=["Ancud","Calbuco","Castro","Chaitén","Chonchi","Cochamó","Curaco de Vélez","Dalcahue","Fresia","Frutillar","Futaleufú","Hualaihué","Llanquihue","Los Muermos","Maullín","Osorno","Palena","Pto.Montt","Pto.Octay","Pto.Varas","Puqueldón","Purranque","Puyehue","Queilén","Quellón","Quemchi","Quimchao","Río Negro","S.Juan De la Costa","San Pablo"];
var region_AYSEN=["Aysen","Chile Chico","Cisnes","Cochrane","Coihaique","Guaitecas","Lago verde","O'Higgins","Río Ibañéz","Tortel"];
var region_MAGA=["Antártica","Cabo de Hornos","Laguna Blanca","Natales","Porvenir","Primavera","Punta Arenas","Río Varde","San Gregorio","Timaukel","Torres del Paine"];

function cambia_ciudad(){
 var dpt
 dpt = document.getElementById('ciudad').value
     mis_ciudad = acentos(dpt)
if (mis_ciudad!=0) {
      	 mis_ciudades=eval("region_"+mis_ciudad)
      	 num_ciudad = mis_ciudades.length
      	 document.f1.cdades.length = num_ciudad
      	 for(i=0;i<num_ciudad;i++){
         	 document.f1.cdades.options[i].value=mis_ciudades[i]
         	 document.f1.cdades.options[i].text=mis_ciudades[i]
      	 }
   	    }else{
      	 document.f1.cdades.length = 1
      	 document.f1.cdades.options[0].value = " "
      	 document.f1.cdades.options[0].text = "SIN ASIGNAR"
   	   }
   	}

   function acentos(dpt){
   var acentuada
   if(dpt=="ARICA Y PARINACOTA"){ acentuada="ARICA_Y_PARINACOTA";}
   else{
   	if(dpt=="TARAPACÁ"){ acentuada="TARAPACA"; }
   	else{
   		if(dpt=="ANTOFAGASTA"){ acentuada="ANTOFAGASTA"; }
   		else{
   			if(dpt=="ATACAMA"){ acentuada="ATACAMA"; }
   			else{

   				if(dpt=="COQUIMBO"){ acentuada="COQUIMBO"; }
   				else{
   					if(dpt=="VALPARAÍSO"){ acentuada="VALPARAISO"; }
   					else{
   						if(dpt=="METROPOLITANA"){ acentuada="METROPOLITANA"; }
   						else{
   							if(dpt=="LIBERTADORBO"){ acentuada="LIBERTADORBO"; }
   							else{
   								if(dpt=="MAULE"){ acentuada="MAULE"; }
   								else{
   									if(dpt=="NUBLE"){ acentuada="NUBLE"; }
   									else{
   									if(dpt=="BIOBIO"){ acentuada="BIOBIO"; }
   									else{
   										if(dpt=="ARAUCANIA"){ acentuada="ARAUCANIA"; }
   										else{
   											if(dpt=="RIOS"){ acentuada="RIOS"; }
   											else{
                          if(dpt=="LAGOS"){ acentuada="LAGOS"; }
                            else{
                              if(dpt=="AYSEN"){ acentuada="AYSEN"; }
                            else{
                              if(dpt=="MAGA"){ acentuada="MAGA"; }
                            else{

                                 acentuada=dpt;
                                         }
                            }
   											}
   										}
   									}
   									}
   								}
   							}
   						}
   					}
   				}
   			}
   		}
   	}
   }

  }
return  acentuada
   }// FIN DE FUNCIONcambia_ciudad


  //filtro
$(function(){
  var articles = $('article > .item-wrapper'),
  lightingRgb = '255,255,255';

articles.mousemove(function(e) {
var current = $(this),
    x = current.width() - e.offsetX * 2,
    y = current.height() - e.offsetY * 2,
    rx = -x / 30,
    ry = y / 24,
    deg = Math.atan2(y, x) * (180 / Math.PI) + 45;
current.css({"transform":"scale(1.05) rotateY("+rx+"deg) rotateX("+ry+"deg)"});
$('figure > .lighting',this).css('background','linear-gradient('+deg+'deg, rgba('+lightingRgb+',0.32) 0%, rgba('+lightingRgb+',0) 100%)');
});

articles.on({
'mouseenter':function() {
  var current = $(this);
  current.addClass('enter ease').removeClass("leave");
  setTimeout(function(){
    current.removeClass('ease');
  }, 280);
},
'mouseleave':function() {
  var current = $(this);
  current.css({"transform":"rotate(0)"});
  current.removeClass('enter').addClass("leave");
  $('figure > .lighting',this).removeAttr('style');
}}
);



//validador de rut
var Fn = {
  validaRut : function (rutCompleto) {
    rutCompleto = rutCompleto.replace("‐","-");
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
      return false;
    var tmp 	= rutCompleto.split('-');
    var digv	= tmp[1];
    var rut 	= tmp[0];
    if ( digv == 'K' ) digv = 'k' ;

    return (Fn.dv(rut) == digv );
  },
  dv : function(T){
    var M=0,S=1;
    for(;T;T=Math.floor(T/10))
      S=(S+T%10*(9-M++%6))%11;
    return S?S-1:'k';
  }
}

$("#enviar").click(function(){
  if (Fn.validaRut( $("#txt_rut").val() )){
    $("#msgerror").html("");
  } else {
    $("#msgerror").html("El Rut no es válido ");
  }
});
});
//slider
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})

//validarcampos solo letras
/*function validar2() {
  var input = document.getElementById('nombres');
  if(!input.checkValidity()) {
    alert('Ingrese solo letras');
  } else {

  }
}*/
