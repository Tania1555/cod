<template>
  <h1>Выбери себе котокуба</h1>
  <div class="content">
    <div class="items">
      <div><img src="https://basket-12.wbbasket.ru/vol1754/part175416/175416028/images/big/2.webp"></div><br>
      <p>Трёхцветный (приносит удачу, редкий)</p><div class="price"><label>1500 руб. </label><input type="checkbox" v-model="array" value=1500></div>
    </div>
    <div class="items">
      <div><img src="https://basket-12.wbbasket.ru/vol1689/part168948/168948575/images/big/1.jpg"></div><br>
      <p>Рыжий (приносит счастье)</p><div class="price"><label>1300 руб. </label><input type="checkbox" v-model="array" value=1300></div>
    </div>
    <div class="items">
      <div><img src="https://basket-10.wbbasket.ru/vol1535/part153596/153596019/images/big/1.jpg"></div><br>
      <p>Черный (приносит богатство)</p><div class="price"><label>1350 руб. </label><input type="checkbox" v-model="array" value=1350></div>
    </div>
  </div>   
  <div class="text">Итого: {{ sumArray(array) }} руб.</div>
  <span v-if="!sumArray(array)==0">Прекрасный выбор!</span>
</template>
<script>
export default {
  data() {
    return {
      array: []
    }
  },
  methods: {
    sumArray(arr){
      return arr.reduce((total, num) => total + Number(num), 0)
    }
  }
}
</script>
<style>
img {
  height: 55vh;
  flex-basis: 100%
}
.content {
  display: flex;
  justify-content: space-around;
}
.items {
  flex-basis: 30%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 3vh;
  padding-bottom: 3vh;
  border: 3px solid rgba(122, 122, 251, 0.499);
  border-radius: 30px;
}
label {
  font-size: 3.5vh;
  font-family: Comic Sans MS, Comic Sans, cursive;
}
p {
  flex-basis: 100%;
  text-align: center;
  font-family: Comic Sans MS, Comic Sans, cursive;
  font-size: 3vh;
}
input[type=checkbox] {
    transform: scale(1.5);
}
.price {
  background-color: rgba(159, 159, 220, 0.39);
  padding: 0.5vh;
  border: 2px solid rgba(122, 122, 251, 0.689);
  border-radius: 10px;
}
h1 {
  font-family: Comic Sans MS, Comic Sans, cursive;
  text-align: center;
  font-size: 6vh;
}
.text {
  font-family: Comic Sans MS, Comic Sans, cursive;
  text-align: center;
  font-size: 5vh;
  margin: 3vh;
}
span {
  font-family: Comic Sans MS, Comic Sans, cursive;
  text-align: center;
  font-size: 4vh;
  display: flex;
  justify-content: center;
}
</style>