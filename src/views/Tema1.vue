<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Configurar diferentes tipos de formatos

    .row.mt-5
      .col-12.col-lg-12.mb-5

        p.mb-2 Los formatos, son el tipo y tamaño de hoja que se usara al momento de imprimir, para esto está destinado el apartado de presentación o layout, con el fin de cargar todas las partes del formato normalizado, como lo es su cajetín el cual tiene los datos de fecha, revisión, número de plano, nombre del plano etc. Idealmente en este aparado es donde preferiblemente deben crearse las cotas, textos y tablas que hacen referencia al documento impreso.
    
      .col-12.col-lg-6.mb-5
        h3.mb-3 Presentación y tipos de formato
        p.mb-3 Los formatos de impresión o de dibujo del plano que se encuentran dentro de AutoCAD son formatos de hojas universales, ya sean los más conocidos como tamaño carta, tabloide o doble carta o incluso los formatos normalizados como ANSI A, B o C que tienen un tamaño predefinido, todo esto con el fin para que al momento de que diseñemos un plano tengamos claro el tamaño de la escala de los dibujos, tamaño de texto o cotas y que al instante de imprimir el documento, sea legible y de fácil interpretación para el receptor de la cadena de comunicación del sistema de expresión gráfica.

        p.mb-3 Según Autodesk (2020) una presentación es un entorno de trabajo 2D para crear planos de dibujo y el área ubicada dentro de una presentación se denomina espacio papel, donde se puede añadir un cuadro de rotulación, visualizar las vistas con escala ajustada del espacio modelo en las ventanas gráficas de presentación, y crear tablas, tablas de planificación, notas y cotas para el dibujo.

        .cajon.color-primario.p-4
          p Se puede acceder a una o varias presentaciones desde las fichas ubicadas en la esquina inferior izquierda del área de dibujo ubicada a la derecha de la ficha Modelo. Puede utilizar varias fichas Presentación para ver los detalles de los distintos componentes del modelo con distintas escalas y en diferentes tamaños de plano.
      
      .col-12.col-lg-6
          br
          img(src="@/assets/curso/images/tema1/img_1.svg" alt="", style="margin: auto; max-width: 400%;")
    
    .row.justify-content-center.align-items-center.my-5
      .col-12.col-lg-8
        p.BorTit Presentación de trabajo 2D
                figure
                  img(src="@/assets/curso/images/tema1/img_2.svg" alt="", style="width:700px; display:block; margin:0 auto;")
                  br
                  figcaption Nota. imagen extraida de Autodesk (2020)

    p.mb-3 Existen varias formas en que se pueden añadir nuevas presentaciones o copiar presentaciones existentes.

    .row.justify-content-center.align-items-center
              ul.lista-ul--color
                li 
                  i.fas.fa-pencil-ruler(style="color:#FBA321")
                  | Utilizar el comando PRESENTACION.
                li
                  i.fas.fa-pencil-ruler(style="color:#FBA321")
                  | Haga clic en una ficha Presentación.
                li
                  i.fas.fa-pencil-ruler(style="color:#FBA321")
                  | Recorra el Asistente para crear presentaciones.
                li
                  i.fas.fa-pencil-ruler(style="color:#FBA321")
                  | Uso de DesignCenter.

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p Cada presentación guarda su propia configuración de página, que controla el aspecto y el formato para la visualización y la impresión de cada presentación. Por ejemplo, puede usar la configuración de página para especificar el tamaño y la orientación del plano. Se puede acceder al “Administrador de configuraciones” de página desde el comando PREPAGINA, el menú de la aplicación y la cinta de opciones.


    .bloque-texto-a.color-custom.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            h4.mb-0 El comando determina la configuración de la página, el dispositivo de trazado, el tamaño de papel y otros parámetros para cada nueva presentación.
        .col-lg-4.mb-4.mb-lg-0
          img(src="@/assets/curso/images/tema1/ico_1.svg" alt="", style="width:100px; display: block; margin:0 auto ;")

    p.mb-3 Una configuración de página es una colección de parámetros del dispositivo de trazado y de otros tipos que determinan el aspecto y el formato del resultado final. Estos parámetros se almacenan en el archivo de dibujo y pueden modificarse y aplicarse a otras presentaciones. 

    p.mb-5 Con el fin de reforzar el uso y aplicación es conveniente ver el siguiente video tutorial donde se explica la pestaña de presentación: 

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        figure.mb-5
          .video
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5f7ees1_aVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
