<script setup lang="ts">
import './curriculum.scss'

useSeoMeta({
  title: 'Blog | Noticias, Análisis y Tendencias Sobre Tecnología y Desarrollo Web',
  description: 'Mantente al día con las últimas noticias sobre innovaciones en tecnología y desarrollo web.',
  ogSiteName: 'Paginas Profesionales',
  ogTitle: 'Blog | Noticias, Análisis y Tendencias Sobre Tecnología y Desarrollo Web',
  ogDescription: 'Mantente al día con las últimas noticias sobre innovaciones en tecnología y desarrollo web.',
  ogImage: '/meta/default.webp',
  ogUrl: 'https://paginasprofesionales.co/blog',
  ogLocale: 'es_CO',
  twitterTitle: 'Blog | Noticias, Análisis y Tendencias Sobre Tecnología y Desarrollo Web',
  twitterDescription: 'Mantente al día con las últimas noticias sobre innovaciones en tecnología y desarrollo web.',
  twitterImage: '/meta/default.webp',
  twitterCard: 'summary_large_image',
})

const curriculum = [
  {
    title: 'curriculumTitle',
    description: 'curriculumDescription',
  },
  {
    title: 'curriculumTitle2',
    description: 'curriculumDescription2',
    description1: 'curriculumDescription3',
    description2: 'curriculumDescription4',
    description3: 'curriculumDescription5',
    description4: 'curriculumDescription6',
  },
  {
    title: 'curriculumTitle3',
    description: 'curriculumDescription7',
    description1: 'curriculumDescription8',
  },
  {
    title: 'curriculumTitle4',
    description: 'curriculumDescription9',
    description1:'curriculumDescription10',
    description2:'curriculumDescription11',
  },
  {
    title: 'curriculumTitle5',
    description: 'curriculumDescription12',
    description1: 'curriculumDescription13',
    description2: 'curriculumDescription14',
    description3: 'curriculumDescription15',
  },
]

const experience = [
  {
    title: 'experienceTitle',
    description: 'experienceDescription',
    description1: 'experienceDescription1',
    description2: 'experienceDescription2',
    description3: 'experienceDescription3',
    description4: 'experienceDescription4',
    description5: 'experienceDescription5',
    description6: 'experienceDescription6',
    description7: 'experienceDescription7',
    description8: 'experienceDescription8',
    description9: 'experienceDescription9',
    description10: 'experienceDescription10',
    description11: 'experienceDescription11',
    description12: 'experienceDescription12',
  },
  {
    title: 'Otros Cursos y Actualizaciones',
    description: 'Curso Internacional Otorrinolaringología, Santa fe de Bogotá, Mayo de 1999.',
    description1: 'Curso Avanzado de Laringología y Fonolaringología, Medellín, Noviembre de 1999.',
    description2: 'XXX Congreso Nacional de Otorrinolaringología, San Andrés Isla, Mayo -Junio del 2000.',
    description3: 'XXXI Congreso Nacional de Otorrinolaringología, Santa Marta, en junio de 2002.',
    description4: 'X Congreso Nacional de Cirugía Plástica Facial y Rinología, Cartagena, Octubre 2 al 5 de 2003.',
    description5: 'XXXII Congreso Nacional de Otorrinolaringología, Cartagena, Mayo de 2004.',
    description6: 'Curso Latinoamericano para el Diagnóstico y Tratamiento de las Alergias, Medellín, Septiembre de 2004.',
    description7: 'Simposio Internacional de Cirugía Plástica. Curso de Instrucción: Técnica MACS suspensión Craneofacial-Hilos Tensores Faciales, Cali, Octubre de 2004.',
    description8: 'Diplomado Internacional Antiaging: Botox y Rellenos faciales, Buenos Aires, Argentina, Abril de 2005.',
    description9: 'XI Congreso Nacional de Cirugía Plástica Facial y Rinología, Cartagena, Mayo 14 al 17 de 2005.',
    description10: 'XXXIII Congreso Nacional de Otorrinolaringología, Santiago de Cali, Mayo de 2006.',
    description11: 'XII Congreso Nacional de Cirugía Plástica Facial y Rinología, Bogotá, Marzo de 2007.',
    description12: 'Curso Internacional Innovaciones en Otorrinolaringología, Bogotá Septiembre de 2007.',
    description13: 'Curso de Rinología Estado del Arte. Medellín, Octubre de 2007.',
    description14: 'Curso de Entrenamiento en Microcirugía. NewYork-Presbyterian Hospital, Columbia University. New York, USA, Noviembre de 2007.',
    description15: 'Diplomado en Oculoplastia y Frontoplastia, Medellín, Enero a Marzo de 2008.',
    description16: 'Diplomado en Ritidoplastia y Cirugía Plástica Facial, Medellín, Abril a Julio de 2008.',
    description17: 'Curso el Arte del Rejuvenecimiento: Botox y Surgiderm, Medellín, Julio de 2008.',
    description18: 'Diplomado en Corrección de Cicatrices y Colgajos faciales, Medellín, Noviembre de 2008.',
  },
]

</script>

<template>
  <article class="curriculum">  
    <div class="item">
      <h2>{{ $t(curriculum[0].title) }}</h2>
      <p>{{ $t(curriculum[0].description) }}</p>

      <h2>{{ $t(curriculum[1].title) }}</h2>
      <p>{{ $t(curriculum[1]?.description ?? '') }}</p>
      <p>{{ $t(curriculum[1]?.description1 ?? '') }}</p>
      <p>{{ $t(curriculum[1]?.description2 ?? '') }}</p>
      <p>{{ $t(curriculum[1]?.description3 ?? '') }}</p>

      <h2>{{ $t(curriculum[2].title) }}</h2>
      <p>{{ $t(curriculum[2].description) }}</p>
      <p>{{ $t(curriculum[2].description1 ?? '') }}</p>

      <h2>{{ $t(curriculum[3].title) }}</h2>
      <p>{{ $t(curriculum[3].description) }}</p>
      <p>{{ $t(curriculum[3].description1 ?? '') }}</p>
      <p>{{ $t(curriculum[3].description2 ?? '') }}</p>

      <h2>{{ $t(curriculum[4].title) }}</h2>
      <p>{{ $t(curriculum[4].description) }}</p>
      <p>{{ $t(curriculum[4].description1 ?? '') }}</p>
      <p>{{ $t(curriculum[4].description2 ?? '') }}</p>
      <p>{{ $t(curriculum[4].description3 ?? '') }}</p>



    </div>
    <div class="item">

      <h2>{{ $t(experience[0].title) }}</h2>
      <p>{{ $t(experience[0].description) }}</p>
      <p>{{ $t(experience[0].description1 ?? '') }}</p>
      <p>{{ $t(experience[0].description2 ?? '') }}</p>
      <p>{{ $t(experience[0].description3 ?? '') }}</p>
      <p>{{ $t(experience[0].description4 ?? '') }}</p>
      <p>{{ $t(experience[0].description5 ?? '') }}</p>
      <p>{{ $t(experience[0].description6 ?? '') }}</p>
      <p>{{ $t(experience[0].description7 ?? '') }}</p>
      <p>{{ $t(experience[0].description8 ?? '') }}</p>
      <p>{{ $t(experience[0].description9 ?? '') }}</p>
      <p>{{ $t(experience[0].description10 ?? '') }}</p>
      <p>{{ $t(experience[0].description11 ?? '') }}</p>
      <p>{{ $t(experience[0].description12 ?? '') }}</p>

    </div>
  </article>

</template>