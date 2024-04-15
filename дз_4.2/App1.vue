<template>
  <div>
    <hr>
    <ul>
      <li class="users" v-for="user in users" :key="user.id">{{ user.name }}, Age: {{ user.age }}, {{ user.administrator }}</li>
    </ul>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      users: [{id: 1, name:"Tania", age: 14, administrator: "She is the administrator"}, {id: 2, name:"Vova", age: 10, administrator: "He isn't the administrator"}, {id: 3, name:"Slava", age: 17, administrator: "He isn't the administrator"}],
    }
  },
}
</script>

<style>
  li {
    padding: 5px;
    flex-basis: 100%;
  }
  div {
    font-size: 25px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }
  p {
    text-align: center;
    flex-basis: 100%;
  }
  button {
    flex-basis: 30%;
    font-size: 20px;
    margin-top: 3%;
  }
  hr {
    flex-basis: 80%;
  }
</style>
