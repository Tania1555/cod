<template>
  <div>
    <button @click="addUser('User ', 'This is User ')">Добавить элемент</button>
    <hr>
    <ul>
      <li class="users" v-for="user in users" :key="user" @click="showUser(user)">{{ user }}</li>
    </ul>
    <hr>
    <p>{{ suser }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      number: 3,
      users: ['User 1. This is User 1', 'User 2. This is User 2', 'User 3. This is User 3'],
      suser: ''
    }
  },
  methods: {
    addUser(user, information) {
      this.number += 1
      this.users.push(user + String(this.number) + '. ' + information + String(this.number))
      
    },
    showUser(user) {
      this.suser = user + '. ' + 'He is in the list of users.'
    }
  }
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