<template>
  <v-app>
    <div class="me">
      <h1>Me</h1>
      <p>大阪府在住。<br>
        大学では心理学を学び、卒業後は一般事務をしておりました。<br>
        <span class="keikou">2021年12月より</span>ゼロからプログラミングを学び始めた駆け出しです。<br>
      </p>

      <!--アピールポイント-->
      <img id="look" class="animate__animated animate__bounce animate__infinite" src="../assets/tegaki/look.png" alt="ルック">
      <div class="appeal">
        <h2>アピールしたい３つのポイント</h2>
        <v-container>
          <v-row dense>
            <v-col v-for="item in items" :key="item.id" cols='12' md="4">
              <v-card class="mx-auto" max-width="300" :color="item.color">
                <v-img :src="item.img" height="200px"></v-img>
                <v-card-title>
                  {{item.title}}
                </v-card-title>
                <v-card-subtitle>
                  {{item.subtitle}}
                </v-card-subtitle>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="show = !show">
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="show">
                    <v-divider></v-divider>
                    <v-card-text>
                      {{item.text}}
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

      </div>
    </div>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        items: [{
            id: 1,
            color: '#e86863',
            img: require('../assets/power.jpg'),
            title: '向上心',
            subtitle: 'ゼロから始めて２ヶ月でここまで作り上げました！',
            text: '訓練校だけの学習だけでなく、Udemyを使った自宅学習を毎日１〜２時間ほどしています。今学んでいる言語を十分に使いこなせるようになったら、新しい言語やフレームワークも覚えていきたいです。',
          }, {
            id: 2,
            color: '#FDEE82',
            img: require('../assets/friendly.jpg'),
            title: '協調性',
            subtitle: '今までもこれからもチームワークを大切にしていきます！',
            text: '前職や学校での部活動などでは、グループの調整役でした。良い仕事や人生は人間関係からだと考えておりますので、良いご縁を頂いた後も大切にしていきたいです。',
          },
          {
            id: 3,
            color: '#85caea',
            img: require('../assets/customer.jpg'),
            title: '顧客目線',
            subtitle: '経験を活かしてお客さま目線で考えることができます！',
            text: '接客の経験が多いので、お客さまに寄り添った対応ができます。今後もクライアント様の意見を大切にして仕事をこなしたいです。',
          },
        ]
      }
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }

  .me {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
  }

  .theme--light.v-application {
    background: rgba(0, 0, 0, 0);
  }

  h1 {
    text-align: center;
    padding: 1em;
  }

  h2 {
    text-align: center;
  }

  .appeal {
    margin: 30px;
  }

  .keikou {
    background: linear-gradient(transparent 40%, rgba(255, 255, 63, 0.801)50%);
  }

  #look {
    width: 40vw;
    height: 10vh;
    margin-top: 5em;
  }
</style>