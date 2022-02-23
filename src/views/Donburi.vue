<template>
  <v-app id="app">

    <!--右上の戻るボタン-->
    <v-toolbar-title class="back" style="cursor: pointer" @click="$router.push('/')">戻る</v-toolbar-title>
    <v-container id="top">

      <!--どんぶりが降ってくるプラグイン（キャンバスなので一番上）-->
      <Snowf v-if="snows" :amount="this.beefBowlCount" :size="60" :speed="2" :wind="0" :opacity="1" :swing="0" :image="this.beefBowlRandomImg" :zIndex="null" :resize="true" />

      <v-row>
        <img src="../assets/noren_blue.png" alt="のれん" class="noren" />
      </v-row>

      <v-row>
        <p>＼散財を防げ！／</p>
      </v-row>
      <v-row>
        <h1>どんぶり勘定</h1>
      </v-row>
      <v-row class="inputText">
        <p>あなたが今欲しいものの価格を入力してください</p>
      </v-row>

      <!--電卓-->
      <div class="calculator">
        <v-row>
          <span>
            <input type="number" v-model="price" min="0" max="100000" step="100" oninput="javascript:if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="7"><span class="yen">円</span></span>
        </v-row>
        <v-row><!--v-for=""で回せるか検討-->
          <button @click="pricePush(numbers[9])" class="numberbtn">
            {{ numbers[9] }}
          </button>
          <button @click="pricePush(numbers[10])" class="numberbtn">
            {{ numbers[10] }}
          </button>
          <button @click="pricePush(numbers[11])" class="numberbtn">
            {{ numbers[11] }}
          </button>
        </v-row>
        <v-row>
          <button @click="pricePush(numbers[6])" class="numberbtn">
            {{ numbers[6] }}
          </button>
          <button @click="pricePush(numbers[7])" class="numberbtn">
            {{ numbers[7] }}
          </button>
          <button @click="pricePush(numbers[8])" class="numberbtn">
            {{ numbers[8] }}
          </button>
        </v-row>
        <v-row>
          <button @click="pricePush(numbers[3])" class="numberbtn">
            {{ numbers[3] }}
          </button>
          <button @click="pricePush(numbers[4])" class="numberbtn">
            {{ numbers[4] }}
          </button>
          <button @click="pricePush(numbers[5])" class="numberbtn">
            {{ numbers[5] }}
          </button>
        </v-row>
        <v-row>
          <button @click="clearPush()" class="numberbtn cbtn">
            {{ numbers[0] }}
          </button>
          <button @click="pricePush(numbers[1])" class="numberbtn">
            {{ numbers[1] }}
          </button>
          <button @click="pricePush(numbers[2])" class="numberbtn">
            {{ numbers[2] }}
          </button>
        </v-row>
        <v-row>
          <button class="account" @click="snow_toggle">お勘定！</button>
        </v-row>
      </div>

      <!-- リザルト画面 -->
      <transition>
        <v-card v-show="snows" class="result">
          <v-card-title>結果</v-card-title>
          <v-card-text>
            あなたが今ほしいものは、牛丼約<span>{{ beefBowlCount }}</span>杯分のお値段です！<br>
            （いま上から降ってきている牛丼は同じ数です）<br>
            ほしいものを我慢すれば、あと<span>{{ Math.floor(beefBowlCount/3 )}}</span>日も牛丼だけで生き延びることができます<br><br>
            ちなみに大盛なら<span>{{ beefBowlCountBig }}</span>杯です
          </v-card-text>
          <v-card-actions>
            <v-btn class="result_back" @click="snow_toggle" to="/donburi" color="blue" text outlined>戻る</v-btn>
          </v-card-actions>
        </v-card>
      </transition>

      <!--トピックス-->
      <v-row>
        <div class="topic" v-for="topic in topics" :key="topic.id">
          <div class="topic_title">{{topic.title}}</div>
          <div class="topic_text">
            <p>{{topic.text}}</p>
            <a v-show="topic.url" :href="topic.url">URL</a>
          </div>
        </div>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import Snowf from "vue-snowf";
  export default {
    components: {
      Snowf,
    },
    data() {
      return {
        price: 0,
        numbers: ["C", "0", "00", "1", "2", "3", "4", "5", "6", "7", "8", "9"], //ここの配列をカラム指定か３区切りにしたらv-forで回せるかも
        beefBowlPrice: 400,
        beefBowlPriceBig: 550,
        beefBowlImg: [
          require("../assets/gyudon1.png"),
          require("../assets/gyudon2.png"),
          require("../assets/gyudon3.png"),
        ],
        snows: false,
        topics: [{
            id: 1,
            title: '制作理由',
            text: '私の兄は金銭感覚が緩くよく散財しているのですが、牛丼の価格改定にだけは厳しいことに気づきました。そこでなんとか牛丼を使って金額を可視化できないかと考え、思いついたのがこのアプリです。'
          },
          {
            id: 2,
            title: '目標',
            text: `このアプリを使うことでビジュアル面から金銭感覚に訴えられるようにしたいと考えています。`
          },
          {
            id: 3,
            title: '仕様書',
            text: 'Notionにて作成いたしました。',
            url: 'https://misty-dibble-6e8.notion.site/8379c6d1c58141f38ad5c63aac3a494c'
          },
        ]
      };
    },
    computed: {
      beefBowlCount() {
        if (this.price == 0) {
          return 0;
        } else {
          return Math.floor(this.price / this.beefBowlPrice);
        }
      },
      beefBowlCountBig() {
        if (this.price == 0) {
          return 0;
        } else {
          return Math.floor(this.price / this.beefBowlPriceBig);
        }
      },
      beefBowlRandomImg() {
        return this.beefBowlImg[Math.floor(Math.random() * 3)]
      }
    },
    methods: {
      pricePush(number) {
        //０と００は先頭に来ないようにする
        if (this.price === 0) {
          this.price = number;
        } else {
          this.price += number;
        }
      },
      clearPush() {
        return (this.price = 0);
      },
      snow_toggle() {
        this.snows = !this.snows;
      },
    },
  };
</script>


<style scoped>
  #app {
    position: relative;
    width: 100vw;
    height: auto;
    font-size: 1.25em;
    background-image: url("../assets/hougan.png");
    background-size: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    background-blend-mode: lighten;
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center
  }

  .row {
    display: flex;
    justify-content: center;
  }

  .back {
    text-align: end;
    font-size: 1.5em;
    position: absolute;
    top: 3%;
    right: 3%;
    background-color: #a9e4e9;
    color: #000;
    border-radius: 10%;
    padding: 0.2em 1em;
  }

  .noren {
    width: auto;
    height: 180px;
  }

  .inputText {
    margin-top: 60px;
  }

  input {
    width: 5em;
    font-size: 2.5em;
    line-height: 1.25em;
    text-align: end;
    background: rgb(223, 236, 200);
    font-family: 'ZCOOL QingKe HuangYou', cursive;
    border-radius: 5%;
    margin: 20px;
  }

  .yen {
    color: #FFF;
    font-size: 1.5em;
    ;
  }

  .calculator {
    display: flex;
    flex-direction: column;
    width: 20em;
    background: #27496d;
    padding: 50px;
    border-radius: 5%;
    margin: 50px;
  }

  .numberbtn {
    width: 2em;
    line-height: 2em;
    font-size: 1.5em;
    background-color: #a9e4e9;
    margin: 8px;
    border-radius: 50%;
    box-shadow: 0 5px 0 #43848b;
  }

  .numberbtn:hover {
    -webkit-transform: translate(0, 3px);
    transform: translate(0, 3px);
    box-shadow: 0 2px 0 #0a363b;
  }

  .cbtn {
    background: rgb(240, 124, 124);
  }

  .account {
    width: 6em;
    line-height: 2em;
    border-radius: 5%;
    background-color: #8fd495;
    margin: 20px;
    font-size: 1.5em;
    box-shadow: 0 5px 0 #43848b;
  }

  .account:hover {
    -webkit-transform: translate(0, 3px);
    transform: translate(0, 3px);
    box-shadow: 0 2px 0 #0a363b;
  }

  canvas {
    z-index: 200;
  }

  .numberbtn {
    border-radius: 50%;
  }

  .container {
    width: auto
  }

  .v-enter-active {
    transition: opacity 2s;
  }

  .v-enter {
    opacity: 0;
  }

  .v-enter-to {
    opacity: 1;
  }

  .result {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }

  .result_back {
    width: 10em;
    margin: 20px;
  }

  .result span {
    font-size: 1.5em;
  }

  .topic {
    width: 80vw;
    margin: 20px;
    background-color: #a9e4e9;
  }

  .topic_title {
    font-size: 1.2em;
    background: #27496d;
    padding: 4px;
    text-align: center;
    color: #FFF;
    font-weight: bold;
    letter-spacing: 0.05em;
  }

  .topic_text {
    margin: 30px;
  }
</style>