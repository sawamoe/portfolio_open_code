<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <h1>Portfolio</h1>
      </v-row>

      <v-row>
        <v-col cols='12' md="6">
          <v-card class="mx-auto amber lighten-5" max-width="350" height="450">
            <v-img class="align-end " height="200px" src="../assets/toppic.png">
              <v-card-title>ポートフォリオサイト</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <p>このサイトです。<br><br>
                Vue.jsで作成しました。<br>
                Vue Routerを用いてシングルページアプリケーションにしています。<br><br>
                他のアプリもスマホを意識し、レスポンシブに対応しています。</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols='12' md="6">
          <v-card class="mx-auto amber lighten-5" max-width="350" height="450">
            <v-img class="align-end" height="200px" src="../assets/corgi.gif">
              <v-card-title>看板犬</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div>制作期間：約１週間</div><br>
              <p>トップでお出迎えをしてくれている犬です。<br>
                時間によって挨拶が変わります。<br>
                CLIP STUDIOにてgifイラストを自作しました。</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange" text outlined to="/" v-scroll-to="'#top'"> Check! </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols='12' md="6">
          <v-card class="mx-auto amber lighten-5" max-width="350" height="450">
            <v-img class="align-end" height="200px" src="../assets/gyudon1.png">
              <v-card-title>どんぶり勘定計算機</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div>制作期間：約３週間</div><br>
              <div>入力した金額をどんぶり一杯分の値段に変換します。</div>
              <div>散財を防ぎましょう！</div>
            </v-card-text>
            <v-card-actions>
              <v-btn to="/donburi" color="orange" text outlined> Check! </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols='12' md="6">
          <v-card class="mx-auto amber lighten-5" max-width="350" height="450">
            <v-img class="align-end" height="200px" src="../assets/stream.png">
              <v-card-title>海外配信時差チェック</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div>制作期間：約４週間</div><br>
              <div>APIを取得し、海外ストリーマーの配信予定時刻の時差を日本時間に変換します</div>
              <div>見逃しを防ぎましょう！</div>
            </v-card-text>
            <v-card-actions>
              <v-btn to="/TimeDifference" color="orange" text> Check! </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
  .theme--light.v-application {
    background: rgba(0, 0, 0, 0);
  }

  body {
    display: block;
    margin: 0px;
  }

  h1 {
    text-align: center;
    padding: 1em;
  }

  .v-card__title {
    background: #fff8e063;
  }

  .v-card__text {
    height: 120px;
  }

  .v-application {
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }

  .v-card__actions {
    justify-content: center;
    padding: 40px;
  }

  .v-btn.v-size--default {
    font-size: 1em;
    background: #616161;

  }

  .v-application .orange--text {
    color: #61616100;
  }

  .v-btn:not(.v-btn--round).v-size--default {
    padding: 1.25em 5em;
  }
</style>