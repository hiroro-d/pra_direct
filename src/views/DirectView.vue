<template>
  <div class="dirext">
    <p><img :src="imagePath" alt=""></p>
    <button @click="mainvisual">ドラクエ！</button>
    <label for=""><input type="text" v-model="user">{{ user }}</label>
    <ul>
      <li v-for="monster in monsters" :key="monster">
       名前： {{ monster.name }} <br>
       ＨＰ： {{ monster.hp }} <br>
      スキル：{{ monster.skill.attack }}
      <a :href="monster.url">画像はこちら</a>
      </li>
    </ul>
    <button @click="hpUp">ＨＰアップ</button>
    <label for="check1"><p>あなたの好きなドラクエ天空シリーズは？</p>
    <p><input id="check1" type="checkbox" v-model="tenkuu3" value="天空の花嫁">天空の花嫁</p></label>
    <label for="check2"><p><input id="check2" type="checkbox" v-model="tenkuu3" value="導かれし者たち">導かれし者たち</p></label>
    <label for="check3"><p><input id="check3" type="checkbox" v-model="tenkuu3" value="幻の大地">幻の大地</p></label>
    <p>{{ tenkuu3 }}</p>

    <label for="radio1"><p><input id="radio1" type="radio" v-model="tenkuu2" value="天空の花嫁">天空の花嫁</p></label>
    <label for="radio2"><p><input id="radio2" type="radio" v-model="tenkuu2" value="導かれし者たち">導かれし者たち</p></label>
    <label for="radio3"><p><input id="radio3" type="radio" v-model="tenkuu2" value="幻の大地">幻の大地</p></label>
    <p>{{ tenkuu2 }}</p>

    <select v-model="tenkuuV">
      <option disable value="">選択してください</option>
      <option v-for="tenkuu in tenkuus" :key="tenkuu.id" :value="tenkuu.name">{{ tenkuu.name }}</option>
    </select>
    <p>{{ tenkuuV }}</p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      monsters: [
        {
          name: 'スライム',
          url: 'https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqGz5pkwNEhTPC-_QtQ8JlESDdXbJLAngcNOEPju7iZUH6tnB7rydkemXnNCydR3HRPubCKd0clb1bgA5q3Vn5W3-Ph4madk0DY-F4VxPoB8jZovPE5IXN76bli1vDkJFoV0mSdBZ8AkleoUt945E1T3IBNvRdg9pf0sAXPazKPrg-qcvFD5VMviXq2Yzk8gVHdUaVyPM2oMOzO7OqapMlEaCc-UyCUdwaRUqNotYmkjmTqpqpDcun96W47j-H08RRPtLXWGsi9GMl3CWlmQyMzJ9OtJn7rw9gXKjOdEHvC6x0zTc_mmjzzCfYe2LzL8C7rbPHkic52Kr85b6xKKyw6b23Nq-EJIrYIT3V_GHzShycUezknq7dFrwmHbPNA9WJm0NpO7TewTo2YRRH7b8xDtU=/latest?errorImage=false',
          level: 1,
          hp: 5,
          skill: {
            attack: 'ギガスラッシュ',
            magic: 'hoimi'
          }
        },
        {
          name: 'ドラキー',
          url: 'https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqGz5pkwNEhTPC-_QtQ8JlESDdXbJLAngcNOEPju7iZUH6tnB7rydkemXnNCydR3HRPnbABV9NX_l7p8oB0GCk8WVSvFo0KW_nBGCOSU6aSLTSAc3R_1JsbxKH2pfbPbni1_dHnF1roxXBX8buFrGTK_eCL3RpZGArHOkYZp8E3cugXefldV2md7Mt4WCoJmG_wSCB-F5PdVm9BBdSVKnteidAvpzRQ0PJMpCow9AsBR4frAZGrkCPWZj7OWj7gTJYsHNeKpop6vxJxXwlZr1RNsmt_0HQT-PQWDZqOD9tY0dYZjibKxKffd-rnvaR5azd6qLzxOSFze-m5Ytbw5CRaFdJknQWfAJJXqFLfeORNU9ypNJfdHfiL8IZocrcW_vNJfI5HEj21NE1E5xgBwHLhKw=/latest?errorImage=false',
          level: 2,
          hp: 10,
          skill: {
            attack: 'ハヤブサ切り',
            magic: 'ranaru-ta'
          }
        },
      ],
      imagePath: '',
      user: '',
      tenkuuV: null,
      tenkuus: [
        {
          id: 4,
          name:'導かれし者たち'
        },
        {
          id: 5,
          name:'天空の花嫁'
        },
        {
          id: 6,
          name:'幻の大地'
        },
      ],
      tenkuu2: null,
      tenkuu3: []
    }
  },
  methods: {
    hpUp() {
      for(let i = 0; i < 2; i++) {
        this.monsters[i].hp++
      }
    },
    mainvisual() {
      this.imagePath = 'https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqGxuQACxqi0fkbGNWy3I1FNXSF8A1KR2JHuRbHSrAVBapMoMbFGrpaJcKZ0k78rt_kzMwqx4j6JcYDIcqw_MaPg4YSsMhnpaCpUeVPyG9yk9XMDAYg1ydGEjQLt4vqLr6gG7TroDBhLJ2fcEohBxkJ5AuKtVajSOCYe7GRgJtAHcL/maxresdefault.jpg?errorImage=false'
    }
  }

}
</script>

<style>

#app li {
  margin-bottom: 1rem;
}

#app img {
  width: 200px;
}

#app label {
  margin-left: 10px;
}

#app select {
  margin-bottom: 100px;
}
</style>