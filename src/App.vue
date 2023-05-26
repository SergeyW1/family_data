<script setup>

</script>

<template>
  <div class="main">
    <nav>
      <router-link :to="{name: 'main'}" class="link">Форма</router-link>
      <router-link :to="{name: 'preview'}" class="link">Превью</router-link>
    </nav>
  </div>
  <router-view/>
</template>

<style lang="css">

</style>


