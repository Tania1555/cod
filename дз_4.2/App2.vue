<template>
  <div class="content">
    <div class="a">
    <button @click="deleteExample">Удалить задачу</button>
    </div>
    <ul>
      <li class="examples" v-for="example in examples" :key="example.id">{{ example.title }}. {{ example.description }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  data() {
    return {
      examples: [
{ id: 1, title: "Задача 1", description: "Сколько будет 2 + 3?" },
{ id: 2, title: "Задача 2", description: "Сколько будет 2 * 3?" },
{ id: 3, title: "Задача 3", description: "Сколько будет 2 - 3?" }
],
    }
  },
  methods: {
    deleteExample() {
      this.examples.pop()
    }
  }
}
</script>

<style>
  li {
    padding: 5px;
    flex-basis: 100%;
  }
  .content {
    font-size: 25px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }
  button {
    width: 30%;
    font-size: 20px;
    margin-top: 3%;
  }
  .a {
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
</style>
