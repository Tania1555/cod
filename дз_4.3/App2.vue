<template>
  <div class="content">
    <div class="example">Сколько будет 7 + 3?</div>
    <div class="input">
    <input :class="{active: isActive}" v-model="inputValue" type="text" @input="inputEvent">
    </div>
    <div class="button">
    <button @click="clickButton">Отправить</button>
    </div>
    <p v-if="!visible">Неправильно</p>
    <p v-else-if="invisible">Правильно</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: '',
      isActive: false,
      visible: true,
      invisible: false
    }
  },
  methods: {
    inputEvent() {
    this.isActive = !this.inputValue == ''
    },
    clickButton() {
      this.visible = this.inputValue == '10';
      this.invisible = this.visible;
      console.log(this.visible, this.inputValue, this.inputValue == '10')
    }
  }
}
</script>
<style>
  .content {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
  .example {
    font-size: 8vh;
    padding-top: 4vh
  }
  .input {
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    padding: 10vh;
  }
  input {
    width: 5%;
    font-size: 6vh;
  }
  .button {
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
  button {
    font-size: 4vh;
    margin-bottom: 2vh;
    border-radius: 5px;
    background-color:rgba(126, 126, 170, 0.461); 
  }
  .active {
    width: 10%;
    border: 2px solid rgba(126, 126, 170, 0.703);
  }
  p {
    background-color: rgba(126, 126, 170, 0.703);
    text-align: center;
    flex-basis: 10%;
    border-radius: 30px;
    font-size: 5vh;
    padding: 5vh;
  }
</style>