<script setup lang="ts">
import './investigation.scss'

const studies = [
  {
    fig: 'studiesFig',
  },
  {
    title: 'studiesTitle1',
  },
  {
    title: 'studiesTitle2'
  },
  {
    title: 'studiesTitle3',
    description: 'studiesDescription'
  },
  {
    title: 'studiesTitle4',
    description: 'studiesDescription1'
  },
  {
    title: 'studiesTitle5',
    description: 'studiesDescription2'
  },
  {
    fig: 'studiesFig2'
  },
  {
    fig: 'studiesFig3'
  },
]

const studies2 = [
  {
    fig: 'studiesFig3',
    title: 'studiesTitle6',
    description: 'studiesDescription3',
  },
]

</script>

<template>
  <article class="investigation">  
    <div class="item">
      <p>{{ $t(studies[0].fig ?? '') }}</p>
      <h2>{{ $t(studies[1].title ?? '') }}</h2>
      <h2>{{ $t(studies[2].title ?? '') }}</h2>
      
      <h3>{{ $t(studies[3].title ?? '') }}</h3>
      <p>{{ $t(studies[3].description ?? '') }}</p>

      <h3>{{ $t(studies[4].title ?? '') }}</h3>
      <p>{{ $t(studies[4].description ?? '') }}</p>

      <h3>{{ $t(studies[5].title ?? '') }}</h3>
      <p>{{ $t(studies[5].description ?? '') }}</p>
      
      <NuxtPicture
        src="/images/estudio-1.webp"
        alt="HA in rabbit model"
        densities="x1"
        class="image"
      />
      <p>{{ $t(studies[6].fig ?? '') }}</p>

    </div>
    <div class="item">
      <NuxtPicture
        src="/images/estudio-2.webp"
        alt="HA in rabbit model"
        densities="x1"
        class="image"
      />
      <p>{{ $t(studies2[0].fig ?? '') }}</p>

      <h2>{{ $t(studies2[0].title ?? '') }}</h2>
      <p>{{ $t(studies2[0].description ?? '') }}</p>
      <!-- <p class="download-pdf">{{ $t('studiesDownload') }}</p> -->

    </div>
  </article>

</template>