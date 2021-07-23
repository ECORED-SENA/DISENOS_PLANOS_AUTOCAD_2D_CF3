export default {
  global: {
    componenteFormativo: 'Planos 2D con especificaciones de dibujo técnico',
    descripcionCurso:
      'Uno de los resultados del proceso de diseño y quizás el más importante es la generación de planos, este componente formativo describe los requisitos y características técnicas para obtener la correcta elaboración de este documento de ingeniería o arquitectura.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Configurar diferentes tipos de formatos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Crear planos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estilos de texto y anotación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Ventanas de visualización o gráficas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estilos y tipos de cotas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Directriz de anotación',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Tablas de anotación',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Presentar el plano',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Autodesk (2020) AutoCAD Soporte y aprendizaje: Presentación',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2021/ESP/AutoCAD-Core/files/GUID-93E88E2A-3BA8-40C1-8BF5-9A50B716EB34-htm.html?st=presentacion ',
    },
    {
      referencia:
        'Autodesk (2020) AutoCAD Soporte y aprendizaje: Acerca de estilos de texto',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2021/ESP/AutoCAD-Core/files/GUID-B1B38199-5329-4FF8-A4CE-1403B53A63F3-htm.html',
    },
    {
      referencia:
        'Autodesk (2020) AutoCAD Soporte y aprendizaje: Acerca de los tipos de cotas',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2021/ESP/AutoCAD-Core/files/GUID-9A8AB1F2-4754-444C-B90D-CD3F2FC8A3E0-htm.html',
    },
    {
      referencia:
        'Autodesk (2019) AutoCAD Soporte y aprendizaje: Acerca de los objetos de directriz',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2018/ESP/AutoCAD-Core/files/GUID-426C9A50-9B41-4D38-96BD-BC275D48598A-htm.html',
    },
    {
      referencia:
        'Autodesk (2019) AutoCAD Soporte y aprendizaje: Acerca de tablas',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2021/ESP/AutoCAD-Core/files/GUID-831E41E7-04EB-44DE-BEC8-F6A3A992DA61-htm.html',
    },
    {
      referencia:
        'Autodesk (2019) AutoCAD Soporte y aprendizaje: Acerca del trazado',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2020/ESP/AutoCAD-Core/files/GUID-2DB9EB8C-767C-4C91-B0A3-FFFEC4C5863A-htm.html',
    },
    {
      referencia:
        'Autodesk (2020) AutoCAD Soporte y aprendizaje: Acerca de la creación de directrices',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2018/ESP/AutoCAD-Core/files/GUID-8E2FF7CD-1DF9-49F8-AA10-A614C7E63F68-htm.html',
    },
    {
      referencia:
        'Autodesk (2020) AutoCAD Soporte y aprendizaje: Acerca de la vinculación de una tabla a datos externos',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2021/ESP/AutoCAD-Core/files/GUID-3A038CCF-A659-4E8A-AE6E-1D88D00D3A23-htm.html',
    },
    {
      referencia:
        'Autodesk (2020) AutoCAD Soporte y aprendizaje: Acerca de las cotas asociativas.',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2021/ESP/AutoCAD-Core/files/GUID-8B7E8C96-C30D-409E-881E-7942871E80DA-htm.html',
    },
    {
      referencia:
        'Autodesk (2020) AutoCAD Soporte y aprendizaje: ¿Ha probado?: Creación de tablas',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2018/ESP/AutoCAD-DidYouKnow/files/GUID-AC405227-E1E4-4845-8DDB-B6B207D3C484-htm.html',
    },
  ],
  glosario: [
    {
      termino: 'Acotación',
      significado:
        'Dentro del dibujo técnico, la acotación es el proceso de revestir un plano o croquis con información referente a la longitud, altura o dimensión de un objeto o representación gráfica.',
    },
    {
      termino: 'ANSI',
      significado:
        'Son las siglas del instituto nacional americano de estándares, que proporciona reglas, pautas o características que se deben adoptar para la correcta realización de una acción o desarrollo de una actividad.',
    },
    {
      termino: 'Directriz',
      significado:
        'La directriz es un ítem con puntero en forma de flecha, puede servir para señalar una conexión, especificar un texto o un bloque específico.',
    },
    {
      termino: 'Longitud de arco',
      significado:
        'La longitud de arco, también llamada rectificación de una curva, es la medida de la distancia o camino recorrido a lo largo de una curva o dimensión lineal.',
    },
    {
      termino: 'Trazado',
      significado:
        'Se utiliza indistintamente para la salida de CAD para generar gráficos vectoriales al momento de imprimir, es decir, líneas y puntos diferente a solo imprimir letras. ',
    },
  ],
  complementario: [
    {
      texto:
        'Autodesk (2019) AutoCAD Soporte y aprendizaje: Acerca de la creación de directrices”',
      tipo: 'Página Web',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2018/ESP/AutoCAD-Core/files/GUID-8E2FF7CD-1DF9-49F8-AA10-A614C7E63F68-htm.html',
    },
    {
      texto:
        'Autodesk (2020) AutoCAD Soporte y aprendizaje: Acerca de la vinculación de una tabla a datos externos ',
      tipo: 'Página web',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2021/ESP/AutoCAD-Core/files/GUID-3A038CCF-A659-4E8A-AE6E-1D88D00D3A23-htm.html',
    },
    {
      texto:
        'Autodesk (2020) AutoCAD Soporte y aprendizaje: Acerca de las cotas asociativas',
      tipo: 'Página Web',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2021/ESP/AutoCAD-Core/files/GUID-8B7E8C96-C30D-409E-881E-7942871E80DA-htm.html',
    },
    {
      texto:
        'Autodesk (2020) AutoCAD Soporte y aprendizaje: ¿Ha probado?: Creación de tablas',
      tipo: 'Página web',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2018/ESP/AutoCAD-DidYouKnow/files/GUID-AC405227-E1E4-4845-8DDB-B6B207D3C484-htm.html',
    },
    {
      texto: 'Saúl Santamaría Gutiérrez (2020).',
      tipo: 'ZIP',
      descarga: 'Base inmobiliaria (Material complementario)',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Saúl Santamaría Gutiérrez',
        cargo: 'Experto temático',
        centro:
          'Centro de Mercados, Logística y Tecnologías de la Información – Regional Distrito Capital.',
      },
      {
        nombre: 'Oscar Absalón Guevaras',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
      },
      {
        nombre: 'Luz Aída Quintero Velásquez',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
      },
      {
        nombre: 'Zvi Grosman',
        cargo: 'Diseñador instruccional',
        centro: 'Centro Agropecuario la Granja – Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Blanca Flor Tinoco Torres'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Ricardo Vásquez Arroyave',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Camilo Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
