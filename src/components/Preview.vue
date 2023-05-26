<script setup>
import {useUserStore} from "../stores/UserStore.js";

const userStore = useUserStore()
</script>

<template>
  <div class="container-form">
    <div class="content-form" v-if="userStore.kidsRes.length && userStore.parent.length">
      <p class="title">Персональные данные</p>
      <div>
        <div v-for="people in userStore.parent">
          <h3>{{ people.nameParent }}, {{ people.ageParent }} лет</h3>
        </div>
        <div class="preview-child">
          <p class="title">Дети</p>
          <template v-for="people in userStore.kidsRes" :key="people.id">
            <div class="preview-child__item">
              {{ people.nameChild }}, {{ people.ageChild }} лет
            </div>
          </template>
        </div>
      </div>
    </div>
    <div v-else class="no-family">
      Список Семьи пуст
    </div>
  </div>
</template>

<style lang="css">
</style>