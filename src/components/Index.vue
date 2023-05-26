<script setup>
import ChildItem from "./ChildItem.vue";
import {useUserStore} from "../stores/UserStore.js";
import {ref} from "vue";

const userStore = useUserStore()

const parent = ref({
  nameParent: '',
  ageParent: ''
});


</script>

<template>
  <div class="container-form">
    <div class="content-form">
      <p class="title">Персональные данные</p>
      <div>
        <form action="#" class="parent-form">
          <label for="name" class="label_name">Имя</label>
          <input type="text" id="name" v-model="parent.nameParent">
          <label for="name" class="label_age">Возраст</label>
          <input type="number" v-model="parent.ageParent">
        </form>
      </div>
      <div>
        <div class="child-content">
          <h3>Дети (макс. 5)</h3>
          <button
                  :class="{'limit-child': !userStore.limitChild}"
                  class="add_child"
                  @click="userStore.addChild()"
          >
            <svg class="btn_logo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                 stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            <span>Добавить ребенка</span>
          </button>
        </div>
        <div v-for="child in userStore.kids" :key="child.id">
          <ChildItem :child="child"/>
        </div>
        <template v-if="userStore.kids.length > 0">
          <button
                  @click="userStore.saveFamily(parent)"
                  class="save-child"
          >Сохранить
          </button>
          <div v-if="userStore.isValid">Заполните все поля</div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="css">

</style>