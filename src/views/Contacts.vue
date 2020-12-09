<template>
<div>
  <div class="intro">
    <marquee direction="up"> loremipsumvneahhgiaerynjnvrijffj  m,irfnrvbehgruigcnferauibfdjbc ;qykfurhefoer'</marquee>
  </div>
</div>
</template>

<script>
export default {
  name: 'Contacts',
};
</script>

<style scoped>
.intro {
  max-width: 30em;
  margin: 1em auto 2em;
  border: 10px solid #F0F0FF;
  overflow: hidden;
  box-shadow: 0 .25em .5em #CCC,inset 0 0 1em .25em #CCC;
}
intro > :first-child {
  display: inline-block;                /* modèle de boîte en ligne */
  padding-right: 2em;                   /* un peu d'espace pour la transition */
  padding-left: 100%;                   /* placement à droite du conteneur */
  white-space: nowrap;                  /* pas de passage à la ligne */
  animation: defilement-rtl 15s infinite linear;
}
@keyframes defilement-rtl {
  0% {
    transform: translate3d(0,0,0);      /* position initiale à droite */
  }
  100% {
    transform: translate3d(-100%,0,0);  /* position finale à gauche */
  }
}
</style>
