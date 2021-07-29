<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Crear planos digitales

    p.mb-3 Los arquitectos y dibujantes utilizan AutoCAD para diseñar planos de edificios, puentes y carreteras. Lo más probable es que la casa o el apartamento en el que se vive actualmente se haya diseñado con software CAD y en este caso AutoCAD 2D el cual permite crear de manera digital, diferentes planos, dibujos y bocetos desde la computadora. Adicionalmente este software tiene muchos más usos para diseñar cualquier cosa en detalle y a escala.

    Separador 
    #t_2_1.titulo-segundo
      .h4 2.1  Estilos de texto y anotación

    .row.mt-5
        .col-12.col-lg-6.mb-5

            p.mb-2 Según Autodesk (2020) un estilo de texto es una colección guardada de parámetros que controla el aspecto del texto como, por ejemplo, el tipo de letra, el interlineado, la justificación y el color. Se crean estilos de texto para especificar el formato del texto rápidamente y para garantizar que el texto se ajuste a las normas del proyecto o el sector. Un ejemplo claro es cuando se crea un texto, utiliza los parámetros del estilo de texto actual.
            br
            .cajon.color-secundario.p-4.mb-4
              p <b>Si cambia un parámetro en un estilo de texto, se actualizan automáticamente todos los objetos de texto del dibujo que utilizan ese estilo y puede cambiar las propiedades de los objetos individuales para reemplazar el estilo de texto.</b>

        
            .jumbotron-white 

            p.mb-3.text-center <b>Todos los estilos de texto del dibujo se enumeran en el menú desplegable “Estilo de texto” los cuales se aplican a las notas, las directrices, las cotas, las tablas y los atributos de bloque.</b>
            br
            .cajon.color-secundario.p-4.mb-4
              p <b> Todos los dibujos contienen un estilo de texto ESTÁNDAR que no se pueden suprimir. Después de crear un conjunto estándar de capas, puede guardar el dibujo como un archivo de plantilla (.dwt), que se puede utilizar al iniciar un dibujo nuevo.</b>

        .col-12.col-lg-6
          img(src="@/assets/curso/images/tema2/img_3.svg" alt="", style="width:600px; display:block; margin:0 auto;")

    LineaTiempoD.color-acento-contenido.my-5
      .row(numero="1" titulo="Tipo de letra de texto")
        
          
        .col-md-6.mb-4.mb-md-0.p-5
          p.mb-3 Una parte importante de cualquier estilo de texto es el tipo de letra asignado a ese estilo. Varios estilos de texto pueden utilizar el mismo tipo de letra. Si su empresa utiliza un determinado tipo de letra, puede modificar otros parámetros de estilo para crear un conjunto de estilos que utilice un tipo de letra de diversas formas.

          p A continuación, se muestra el mismo tipo de letra empleado por estilos distintos que disponen de diferentes valores de oblicuidad para definir la inclinación del texto.
        .col-md-6
          figure
            img(src='@/assets/curso/images/tema2/img_4.svg', alt="", style="width:400px; display:block; margin:0 auto;")

      .row(numero="2" titulo="Altura de texto")
          
        .col-12-md-6.mb-4.mb-md-0.p-4
          p.mb-3 Si se especifica una altura de texto distinta a 0 como parte de un estilo de texto, ese valor se utiliza al crear texto de una línea y de líneas múltiples. Si la altura se establece en 0, se solicita la altura cuando se crea texto de una línea, mientras que el texto de líneas múltiples se establece por defecto en el valor almacenado en la variable de sistema TEXTSIZE.

    p.my-5 A continuación, se describe el paso a paso de la aplicación y creación de estilos de texto: 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-10
        figure.mb-3
          .video
            <iframe width="560" height="315" src="https://www.youtube.com/embed/2_ESyrIpy3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    p.mb-5 Con el fin de reforzar el uso y aplicación del comando se recomienda ver el siguiente video tutorial donde se explica la creación de estilos de texto: 

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        figure.mb-5
          .video
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lQZ0VGbvhNE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    Separador 

    #t_2_2.titulo-segundo
      .h4 2.2  Ventanas de visualización o gráficas

    p.mb-3 Las ventanas gráficas son el portal de la presentación hacia el espacio de modelo, estas ventanas permiten filtrar y visualizar solo los elementos deseados y así dar orden a la creación de los planos o documentos impresos y digitales que se creen.

    p.my-5 Con el fin de reforzar el uso y aplicación ver el siguiente video tutorial donde se explica la creación de ventanas gráficas: 

    .row.justify-content-center.align-items-center.mb-5
        .col-10
          figure.mb-5
            .video
              <iframe width="560" height="315" src="https://www.youtube.com/embed/BD5pqPy62Ws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    Separador 
    #t_2_3.titulo-segundo
      .h4 2.3  Estilos y tipos de cotas

    p.mb-3 Según Autodesk (2020) se pueden crear varios tipos de cotas para una gran variedad de tipos de objetos con muchas orientaciones y alineaciones. Los tipos básicos de cotas son lineales, radiales, angulares, por coordenadas y de longitud de arco y se utiliza el comando ACOTA para crear de forma automática las cotas según el tipo de objeto.

    p.mb-5 Puede controlar el aspecto de los estilos de cota mediante la configuración de estilos de cota o la edición de cotas individuales en casos especiales. Los estilos de cota permiten especificar rápidamente las convenciones y mantener las normas de acotación del sector o el proyecto.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p Consejo: para simplificar la organización de los dibujos y el ajuste de escala de las cotas, puede crear cotas en presentaciones en lugar de en el espacio modelo
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Cotas lineales")
        .col-md-6.mb-4.mb-md-0
          br 
          br 
          br 
          p Una cota lineal puede ser horizontal, vertical o alineada. Con el comando ACOTA puede crear una cota alineada, horizontal o vertical en función de cómo el desplace el cursor al colocar el texto.
          br 
          br 
          br
          br
          br
          br
          br
          br
          p En cotas giradas, la línea de cota se coloca en un ángulo con respecto a los puntos de origen de la línea de referencia. En este ejemplo, el ángulo especificado para el giro de la cota es igual al del zócalo.
      
        .col-md-6
          p.BorTit Cota lineal 
          figure
            img(src='@/assets/curso/images/tema2/img_5.svg', alt="", style="margin: auto; max-width: 100%;")
            br
            figcaption Nota. imagen extraida de Autodesk (2020)
          br
          p.BorTit Cota lineal girada
          figure
            img(src='@/assets/curso/images/tema2/img_6.svg', alt="", style="margin: auto; max-width: 100%;")
            br
            figcaption Nota. imagen extraida de Autodesk (2020)
      .row(titulo="Cotas radiales")
        .col-md-6.mb-4.mb-md-0
          p Una cota radial mide el radio o el diámetro de los arcos y los círculos con un eje o una marca de centro opcionales. En la ilustración aparecen varias opciones.
          
          .cajon.color-primario.p-4.mb-4
                
            p Nota: cuando parte de la cota se encuentra dentro del círculo o el arco acotado, el eje no asociativo o la marca de centro se desactivan automáticamente.
      
        .col-md-6
          p.BorTit Cota radial
          figure
            img(src='@/assets/curso/images/tema2/img_7.svg', alt="", style="margin: auto; max-width: 100%;")    
            br
            figcaption Nota. imagen extraida de Autodesk (2020)

      .row(titulo="Cotas angulares")
        .col-md-6.mb-4.mb-md-0
          br 
          br 
          br
          p Las cotas angulares miden el ángulo formado por dos objetos geométricos o tres puntos. De izquierda a derecha, el ejemplo muestra la cota angular creada mediante un vértice y dos puntos, un arco y dos líneas.
          
        .col-md-6
          p.BorTit Cota angular
          figure
            img(src='@/assets/curso/images/tema2/img_8.svg', alt="", style="margin: auto; max-width: 100%;") 
            br
            figcaption Nota. imagen extraida de Autodesk (2020)   

      .row(titulo="Cotas por coordenadas")
        .col-md-6.mb-4.mb-md-0
          p Las cotas por coordenadas miden las distancias perpendiculares desde un punto de origen denominado punto de referencia como, por ejemplo, el agujero de una pieza. La acotación por coordenadas evita los errores de escala, al mantener desfases exactos de los objetos con respecto al punto de referencia.
          .cajon.color-primario.p-4.mb-4  
            p Importante: El punto de referencia se establece mediante la ubicación actual del origen del SCP.
        .col-md-6
          p.BorTit Cota por coordenadas
          figure
            img(src='@/assets/curso/images/tema2/img_9.svg', alt="", style="margin: auto; max-width: 100%;")  
            br
            figcaption Nota. imagen extraida de Autodesk (2020)
      .row(titulo="Cotas de longitud de arco")
        .col-md-6.mb-4.mb-md-0
          br
          br
          br
          p.mb-3 Las cotas de longitud de arco miden la distancia del segmento de un arco de polilínea o un arco. Entre los usos habituales de las cotas de longitud de arco se incluyen la medición del trayecto alrededor de una leva o bien la indicación de la longitud de un cable.
          p Para diferenciarlas de las cotas lineales o angulares, las cotas de longitud de arco muestran por defecto un símbolo de arco. El símbolo de arco, también conocido por sombrero, se muestra por encima o delante del texto de cota.
        .col-md-6
          p.BorTit Cota por longitud de arco 
          figure
            img(src='@/assets/curso/images/tema2/img_10.svg', alt="", style="margin: auto; max-width: 60%;") 
            br
            figcaption Nota. imagen extraida de Autodesk (2020)
      .row(titulo="Cotas de línea base y continuas")
        .col-md-6.mb-4.mb-md-0
          br
          br
          br 
          br 
          br 
          p Las cotas continuadas, denominadas también cotas continuas, son varias cotas ubicadas de extremo a extremo.
          br 
          br 
          br 
          br 
          br 
          br
          br
          br
          br
          br
          br
          br
          br
          p Las cotas de línea base son varias cotas con líneas de cota de desfase que se miden desde la misma ubicación.
        .col-md-6.mb-3
          p.BorTit Cotas continuadas 
          figure
            img(src='@/assets/curso/images/tema2/img_11.svg', alt="", style="margin: auto; max-width: 100%;")
            br
            figcaption Nota. imagen extraida de Autodesk (2020) 
          br
          p.BorTit Cotas continuadas 
          figure
            img(src='@/assets/curso/images/tema2/img_12.svg', alt="", style="margin: auto; max-width: 100%;")
            br
            figcaption Nota. imagen extraida de Autodesk (2020)
        .cajon.color-secundario.p-4.mb-4  
            p Nota: antes de poder crear cotas de línea base o continuas, se deben crear primero cotas lineales, angulares o por coordenadas para que actúen como cota base desde la que hacer referencia a las cotas posteriores.
        p Recuerde que para la modificación de capa actual todos los objetos nuevos se crean en la misma capa. Para los nuevos objetos de dimensión, puede especificar una capa diferente especificando la capa con la variable de sistema DIMLAYER.
    
    p.mb-5 A continuación, se describe el paso a paso de la creación de estilos y tipos de cotas:
    .row.justify-content-center.align-items-center.mb-3
      .col-10 
        figure.mb-5
          .video
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WdsBaFcRqaw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            
    p.mb-5 Con el fin de reforzar el uso y aplicación ver el siguiente video tutorial donde se explican los estilos y tipos de cotas: 

    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3nClgDS3KqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
    Separador 
    #t_2_4.titulo-segundo
      .h4 2.4 Directriz de anotación

    p.mb-3 Según Autodesk (2019) los objetos de directriz son líneas o splines con un extremo de cota en un lado y un objeto de texto o bloque de líneas múltiples en el otro, pero en algunos casos, una pequeña línea horizontal, denominada segmento de conexión, conecta texto o bloques y cuadros de control de características a la línea de directriz.

    p.mb-5 El segmento de conexión y la línea de directriz están asociados con el objeto de texto o con el bloque de líneas múltiples, de modo que cuando el segmento de conexión se vuelve a colocar, el contenido y la línea de directriz se desplazan con él.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8
          p.BorTit Directriz de anotación 
          img(src="@/assets/curso/images/tema2/img_13.svg" alt="", style="width:800px; display:block; margin:0 auto;")
          br
          figcaption Nota. imagen extraida de Autodesk (2020)
    p.mb-3 Cuando se activa la acotación asociativa y se emplean las referencias a objetos para localizar los extremos de cota, la directriz se asocia al objeto con el que esté enlazado el extremo de cota. Si se desplaza el objeto, el extremo de cota también cambiará de posición y el segmento de conexión se estirará en consonancia.

    p.mb-5 Con el fin de reforzar el uso y aplicación ver el siguiente video tutorial donde se explican los estilos y tipos de directriz: 

    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            <iframe width="560" height="315" src="https://www.youtube.com/embed/z2hHVTaGYvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    Separador 
    #t_2_5.titulo-segundo
      .h4 2.5 Tablas de anotación

    p.mb-3 Según Autodesk (2020) una tabla es un objeto compuesto que contiene información organizada en filas y columnas. De modo similar a la mayoría de las aplicaciones de hojas de cálculo, las filas y las columnas se pueden ajustar mediante pinzamientos y se pueden asignar estilos a la tabla y las celdas seleccionadas.

    p.mb-5 En la ilustración siguiente se muestran los pinzamientos en una tabla y una celda seleccionada.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8
          p.BorTit Tablas de anotación
          img(src="@/assets/curso/images/tema2/img_14.svg" alt="", style="width:800px; display:block; margin:0 auto;")
          br
          figcaption Nota. imagen extraida de Autodesk (2020)
    p.mb-3 A menudo los dibujos incluyen información en tablas, como por ejemplo, una variedad de tablas de planificación, y listas de piezas, materiales y precios. La propia información puede ser texto, bloques de gráficos y diversos tipos de datos numéricos. Las celdas que contienen datos pueden relacionarse mediante cálculos con otras celdas o información externa, como una hoja de cálculo u otros datos extraídos.
 
    p.mb-5 La creación manual de tablas a partir de líneas y texto puede resultar una tarea tediosa y su modificación puede llevar mucho tiempo, pero se puede crear fácilmente un objeto de tabla simplemente mediante la especificación de las filas y las columnas con el comando TABLA. También puede crear un objeto de tabla de AutoCAD mediante referencias a una hoja de cálculo de Microsoft Excel.

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-tarjeta.p-4(titulo="Estilos de tabla y celda")
        .row.justify-content-center.align-items-center
          .col-12
            p Utilice los “estilos de tabla” para almacenar los parámetros y las definiciones por defecto de la tabla y sus celdas. Los parámetros son similares a los que aparecen en una aplicación de hojas de cálculo. Se pueden guardar varios “estilos de celda” en un estilo de tabla. Cada estilo de celda almacena parámetros, como el estilo, la altura, el color de relleno de fondo y los bordes de celda. Puede crear sus propios estilos de celda y guardarlos en sus propios estilos de tabla.
    
      .tarjeta.color-tarjeta.p-4(titulo="Vínculos de datos")
        .row.justify-content-center.align-items-center
          .col-12
            p Un vínculo de datos es la información incluida en un archivo de dibujo de AutoCAD que establece una conexión a una fuente de información externa, en concreto, un archivo  de Microsoft Excel o un archivo de extracción de datos (.dxe).
        .row.justify-content-center.align-items-center
          .col-8
            p.BorTit Vinculos de datos 
            figure
              img(src='@/assets/curso/images/tema2/img_15.svg', alt="", style="width:500px; display:block; margin: auto 0;") 
              br
              figcaption Nota. imagen extraida de Autodesk (2020)
          .col-12
              p Las celdas de un objeto de tabla se pueden vincular a los datos de las celdas especificadas de una hoja de cálculo de Microsoft Excel. Puede elegir si el vínculo es unidireccional o bidireccional y dónde se realizan los cálculos.

    p.mb-5 Con el fin de reforzar el uso y aplicación del comando, ver el siguiente video tutorial donde se explica la creación de tablas: 

    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            <iframe width="560" height="315" src="https://www.youtube.com/embed/QnRYBeFF8rw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</template>

<script>
export default {
  name: 'Tema2',
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
