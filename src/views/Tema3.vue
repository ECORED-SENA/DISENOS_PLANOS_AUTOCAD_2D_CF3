<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Presentar el plano

    p.mb-3 Uno de los propósitos del objetivo de diseñar un elemento es crear un plano y una representación impresa de dicho dibujo o diseño, para esta presentación AutoCAD cuenta con unos parámetros de edición de características de impresión, desde imprimir en escala de grises o a color, como la orientación del formato, impresión de lotes de planos y escala final que tendrá la impresión según la hoja en la que se va a imprimir.

    .row.justify-content-center.align-items-center.mt-5
        .col-12.col-lg-7.mb-5

            h3.mb-2 Trazado e impresión
            br
            p.mb-3 Según Autodesk (2019) los términos “impresión y trazado” se pueden utilizar indistintamente para la salida de CAD. Normalmente las impresoras solo podían generar texto y los trazadores generaban gráficos vectoriales. Cuando las impresoras se hicieron más versátiles y alcanzaron la capacidad para generar imágenes ráster de datos vectoriales de alta calidad, la diferencia prácticamente desapareció.

            p.mb-3 Además, para la salida en papel, el término global publicación se utiliza para referirse al envío electrónico de varios planos de dibujo. El proceso de generación de modelos físicos en plástico o metal se denomina impresión 3D.

        .col-12.col-lg-5
          img(src="@/assets/curso/images/tema3/img_16.svg" alt="", style="width:500px; display:block; margin:0 auto;")  
    
    h3.mb-3 Los estilos de trazado

    p.mb-3  Un estilo de trazado es un método opcional que controla la forma en que se trazan los objetos o las capas. La asignación de un estilo de trazado a un objeto o a una capa modifica propiedades como el color, el grosor de línea y tipo de línea al trazar. Sólo el aspecto de los objetos trazados se ve afectado por estilo de trazado.
    
    p.mb-3 Las tablas de estilos de trazado recopilan grupos de estilos de trazado y los guardan en un archivo que se puede aplicar posteriormente al trazar.
 
    p.mb-3 Existen dos tipos de estilos de trazado: dependientes del color y guardados. Un dibujo sólo puede utilizar un tipo de tabla de estilos de trazado. Las tablas de estilos se pueden convertir de un tipo a otro.
 
    p.mb-3 Con los conceptos de trazado descritos, es evidente que no existe limitante de imprimir texto o líneas descritas como vectores, estos vectores se pueden imprimir con diferente espesor, con colores y trazos diferentes reflejando las propiedades de la capa usadas en el dibujo.

    p.mb-5 Con la combinación de teclas Ctrl+P se puede acceder al menú de impresión o trazado de modelo.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8
          p.BorTit Menú de impresión
          img(src="@/assets/curso/images/tema3/img_17.svg" alt="", style="width:800px; display:block; margin:0 auto;")
          br
          figcaption Nota. imagen tomada desde el programa AutoCAD (Santamaria 2020)
    p.mb-5 Al desplegar el botón con la letra A de la parte superior izquierda, se encuentra el acceso a la impresora, permitirá trazar planos individuales y trazado por lotes. Seleccionar Trazar.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8
          p.BorTit Configuración 
          img(src="@/assets/curso/images/tema3/img_18.svg" alt="", style="width:800px; display:block; margin:0 auto;")
          br
          figcaption Nota. imagen tomada desde el programa AutoCAD (Santamaria 2020)
    h3.mb-5 Configuración

    LineaTiempoD.color-acento-contenido.my-5
      .row(numero="1" titulo="Impresora/trazador")
        .col-12-md-6.mb-4.mb-md-0-lg-12.p-5
          p.mb-3 Como se explicó anteriormente existían antiguamente diferencia entre un trazador y una impresora, más en la actualidad la diferencia es casi imperceptible porque tienen las mismas características. Adicional a la selección de una impresora, en este espacio es posible crear documentos PDF y manejar dicha copia virtual si no tenemos la necesidad de manejar un documento físico..
      .row(numero="2" titulo="Formatos de hoja")
        .col-12-md-6.mb-4.mb-md-0.p-4
          p.mb-3 En este apartado se pueden encontrar los distintos formatos de hoja en los que se puede imprimir el documento, existen formatos comerciales como tamaño carta, oficio, tabloide, y formato para plotter como ANSI C y D entre otros.
      .row(numero="3" titulo="Area de trazado")
        .col-12-md-6.mb-4.mb-md-0.p-3
          p.mb-3 El área de trazado hace referencia a lo que queremos definir como espacio de impresión, algunos de esos apartados son:
          ul.lista-ul--color
            li 
              i.fas.fa-pencil-ruler(style="color:#FBA321")
              p <b>Presentación:</b> este imprime lo que estamos viendo dentro del espacio del layout, en el caso de algunos el espacio que aparece de color blanco o negro bordeado por una cuadricula de líneas segmentadas.
        .row.justify-content-center.align-items-center
          .col-12.col-lg-8.mb-5
              p.BorTit Área de presentación 
              img(src="@/assets/curso/images/tema3/img_19.svg" alt="", style="width:800px; display:block; margin:0 auto;")
              br
              figcaption Nota. imagen tomada desde el programa AutoCAD (Santamaria 2020)
          ul.lista-ul--color
            li 
              i.fas.fa-pencil-ruler(style="color:#FBA321")
              p <b>Ventana:</b> permite dando dos clics con el cursor y formando un recuadro, señalar el área de interés sobre el que se desea imprimir, esto sirve para hacer énfasis en una parte de la presentación y adicionalmente guardarlo en un PDF o imprimirlo en un formato de impresión más pequeño que el predefinido.
      .row(numero="4" titulo="Escala de trazado")
        .col-12-md-6.mb-4.mb-md-0.p-4
          p.mb-3 El espacio de escala de trazado permite dimensionar el dibujo 2D para que “quepa” dentro del formato de hoja deseado, lo ideal es imprimir en escala 1:1, así sabemos que si el plano dice que la escala de dibujo es 1:10 sabemos que cada unidad del plano es un metro, pero si cambiamos esta escala por decir para no utilizar un formato tan grande como está hecha la presentación y hacerlo caber en un formato tamaño carta, el software puede hacer una escala automática con varios números decimales para ajustar el dibujo sin distorsionarlo pero ya no será válido medir sobre la hoja de papel  porque se distorsiono la escala original.
      .row(numero="5" titulo="Colores de impresión")
        .col-12-md-6.mb-4.mb-md-0.p-4
          p.mb-3 Este apartado es el espacio que permite manipular los colores que queremos ver en el formato PDF o en la impresión, existen algunas tablas de trazos predefinidos, como imprimir todo en escala de grises o también existe (ninguno) el cual permite imprimir a color. Estas tablas son editables para poner propiedades a las líneas o cambios de colores en el formato final, es decir, si se dibuja con una capa en amarillo que con el fondo negro se puede ver muy bien para trabajar, pero a la hora de imprimirlo no se distingue en un fondo blanco de la hoja de papel, es posible decirle al software que todos los colores amarillos que detecte los imprima en color azul oscuro para que sea más legible el documento impreso o PDF.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
