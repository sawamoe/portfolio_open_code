<template>
  <v-app>
    <v-container class="dogArea">
      <v-row class="greeting">
        <v-col cols="6">
          <p>{{nowTime}}です！</p>
          <p>{{greeting}}</p>
          <img class="fukidashiImg" src="../assets/fukidashi.png" alt="ふきだし">
        </v-col>
        <v-col cols="6"><img class="dogImg" src="../assets/corgi.gif" alt="看板犬"></v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        greeting: '',
        nowTime: '',
        nowHours: '',
      }
    },
    created() {
      setInterval(this.nowDay, 800)
    },
    watch: {
      nowHours() { //Houreが変わると条件分岐にかける
        if (0 <= this.nowHours && this.nowHours <= 5) {
          this.greeting = '夜更かしですか？ゆっくり休んでくださいね'
        } else if (6 <= this.nowHours && this.nowHours <= 9) {
          this.greeting = 'おはようございます！今日も一日頑張りましょう'
        } else if (10 <= this.nowHours && this.nowHours <= 14) {
          this.greeting = 'こんにちは！お昼は何を食べますか？'
        } else if (this.nowHours == 15) {
          this.greeting = 'ちょっと休憩しませんか？おやつを食べてリフレッシュ！'
        } else if (16 <= this.nowHours && this.nowHours <= 20) {
          this.greeting = 'こんばんは！今日も一日お疲れ様でした'
        } else if (21 <= this.nowHours && this.nowHours <= 23) {
          this.greeting = 'おやすみなさい。一日の疲れを癒しましょう'
        } else {
          this.greeting = 'お疲れ様です！'
        }
      }
    },
    methods: {
      nowDay() { //時間を取得
        let date = new Date()
        this.nowTime = `${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}`
        this.nowHours = date.getHours()
      },
    }
  }
</script>

<style scoped>
  .theme--light.v-application {
    background-color: rgba(255, 255, 255, 0);
  }

  .dogArea {
    display: flex;
    padding-top: 100px;
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }

  .dogImg {
    width: 30vw;
    height: auto;
    max-width: 500px;
  }

  .fukidashiImg {
    width: 30vw;
    height: auto;
    max-width: 400px;
  }
</style>