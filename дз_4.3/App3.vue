<template>
  <div>
    <ul>
      <li :class="classes_f" @mouseover="mouse_f" @mouseleave="mouse_f">Item 1</li>
      <li :class="classes_s" @mouseover="mouse_s" @mouseleave="mouse_s">Item 2</li>
      <li :class="classes_t" @mouseover="mouse_t" @mouseleave="mouse_t">Item 3</li>
    </ul>
  </div>
</template>

<script>
  export default {
  data() {
    return {
      isActive_f: false,
      isActive_s: false,
      isActive_t: false,
    }
  },
  computed: {
    classes_f() {
      return {
        active_f: this.isActive_f,
        notactive_f: !this.isActive_f
      }
    },
    classes_s() {
      return {
        active_s: this.isActive_s,
        notactive_s: !this.isActive_s
      }
    },
    classes_t() {
      return {
        active_t: this.isActive_t,
        notactive_t: !this.isActive_t
      }
    }
  },
  methods: {
    mouse_f() {
      this.isActive_f = !this.isActive_f
    },
    mouse_s() {
      this.isActive_s = !this.isActive_s
    },
    mouse_t() {
      this.isActive_t = !this.isActive_t
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
  li{
    padding: 4vh;
    font-size: 6vh;
  }
  .notactive_f{
    background-color: rgb(60, 65, 70);
  }
  .notactive_s{
    background-color: rgb(78, 86, 90);
  }
  .notactive_t{
    background-color: rgb(105, 107, 108);
  }
  .active_f {
    background-color:rgba(7, 41, 82, 0.6);
    }
  .active_s {
    background-color:rgba(5, 60, 128, 0.543);
  }
  .active_t {
    background-color:rgba(7, 94, 201, 0.543);
    }
</style>