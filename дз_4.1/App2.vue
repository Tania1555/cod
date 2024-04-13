<template>
  <div>
    <p @click="changeText">{{ text1 }}</p>
    <p>{{ text2 }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyText',
  data() {
    return {
      text1: 'Hello',
      text2: 'World',
    }
  },
  methods: {
    changeText() {
      this.text1 = 'Goodbye'
    }
  }
}
</script>
<style>
  div {
    display: flex;
    justify-content: center;
    font-size: 65px;
    margin-top: 5%;
  }
  p {
    padding: 3%;
  }
</style>