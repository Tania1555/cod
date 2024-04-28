<template>
  <div class="content">
    <div class="mincontent">
    <h1 class="items">Заполни форму</h1>
    <div class="items"><input v-model="inputValue1" type="text" placeholder="Имя"></div>
    <div class="items"><input v-model="inputValue2" type="email" placeholder="Email"></div>
    <div class="items"><textarea v-model="text" placeholder="Сообщение"></textarea></div>
    <div class="items"><button @click="addMessage(inputValue1, inputValue2, text)" :disabled="inputValue1 == '' || inputValue2 == '' || text == ''">Отправить</button></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        number: 1,
        messages: [],
        inputValue1: '',
        inputValue2: '',
        text: ''
      }
    },
    methods: {
      addMessage(n, e, m) {
        this.messages.push({id: this.number, name: n, email: e, message: m}),
        this.number += 1,
        this.inputValue1 = '',
        this.inputValue2 = '',
        this.text = '',
        console.log(this.messages)
      }
    }
  }
</script>

<style>
  .content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 100vh;
    align-content: center;
    flex-basis: 100%;
  }
  .items {
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    padding: 2vh;
  }
  input {
    height: 5vh;
    width: 30vw;
    font-size: 3vh;
    border: 0.5vh solid rgba(144, 221, 189, 0.557);
  }
  textarea {
    resize: vertical;
    width: 30vw;
    height: 10vh;
    font-size: 3vh;
    border: 0.5vh solid rgba(144, 221, 189, 0.557);
  }
  .mincontent {
    padding: 4vh;
    border: 0.5vh solid rgba(144, 221, 189, 0.557);
    border-radius: 5vh;
  }
  button {
    width: 10vw;
    height: 5vh;
    font-size: 3vh;
    border: 0.5vh solid rgba(144, 221, 189, 0.557);
    background-color: rgba(144, 221, 189, 0.383);
  }
  h1 {
    font-size: 6vh;
    color: rgba(61, 121, 96, 0.921);
  }
</style>