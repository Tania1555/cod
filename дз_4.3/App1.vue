<template>
  <div>
    <a href="https://github.com/Tania1555/cod">
      <button :class="classes" @mouseover="mouse" @mouseleave="mouse">Перейти на сайт</button>
    </a>
  </div>
</template>

<script>
  export default {
  data() {
    return {
      isActive: false,
    }
  },
  computed: {
    classes() {
      return {
        active: this.isActive,
      }
    }
  },
  methods: {
    mouse() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style>
  div {
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
  }
  button {
    height: 200px;
    font-size: 40px;
    border-radius: 20px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: rgb(255, 255, 255);
  }
  .active {
    background-image: url(https://shedoesart.files.wordpress.com/2014/12/eye-spies.jpg);
    background-size: 100% 100%;
    }
</style>