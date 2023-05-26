<script setup>
import {useUserStore} from "../stores/UserStore.js";

const userStore = useUserStore()

const props = defineProps({
  child: Object,
})

</script>

<template>
  <div class="child-item">
    <form action="#" class="child-form">
      <label for="name" class="label_child-name">Имя</label>
      <input type="text" id="name" v-model="props.child.nameChild">
      <label for="age" class="label_child-age">Возраст</label>
      <input type="number" id="age" v-model="props.child.ageChild">
      <button class="delete-child" @click.prevent="userStore.deleteChild(props.child.id)">Удалить</button>
    </form>
  </div>
</template>

<style scoped>
input {
  width: 616px;
  height: 56px;
  outline: none;
  border: 1px solid #8d8d8d4a;
  padding: 24px 10px 10px 10px;
  appearance: none;
  border-radius: 5px;
}

.child-form {
  display: flex;
  justify-content: space-between;
  margin: 15px auto;
  position: relative;
  align-items: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.child-form input {
  width: 260px;
  border-radius: 5px;
  position: relative;
}

.label_child-name {
  position: absolute;
  z-index: 1;
  left: 11px;
  top: 7px;
  color: #8D8D8D;
}

.label_child-age {
  position: absolute;
  z-index: 1;
  color: #8D8D8D;
  top: 7px;
  right: 258px;
}

.delete-child {
  border: 1px;
  color: #01A7FD;
  width: 52px;
  height: 20px;
  background: white;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
}

</style>