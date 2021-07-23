<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-lg-6.mb-5
        br
        br

        p.mb-3 AutoCAD cuenta con un espacio dedicado a la elaboración de planos de ingeniería y arquitectura. Los planos son dibujos a escala desde herramientas CAD que permiten tener un diseño previo a la hora de la construcción y las especificaciones del espacio. Los planos se utilizan cuando se fabrica por primera vez o al reutilizar partes individuales del diseño para otros productos diferentes lo que reduce considerablemente el tiempo de desarrollos. 

        p.mb-3  Los planos dicen todo lo que necesita saber sobre los detalles de diseño y fabricación, como ajustes, tolerancias, trazados, longitudes… requeridos en la presentación o layout donde se establecerán las medidas, vistas y datos de salida del software, en manera impresa o digital.


      .col-12.col-lg-6
          img(src="@/assets/curso/images/tema1/intro.svg" alt="", style="width:500px; display:block; margin:0 auto;")



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
