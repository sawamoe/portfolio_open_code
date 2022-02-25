<template>
  <v-app>
    <h1>Skills</h1>

    <!--IT関係のスキル-->
    <v-container>
      <v-row dense>
        <v-col v-for="(item, i) in items" :key="i" cols='12' md="6">
          <v-card :color="item.color" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-avatar class="ma-2" size="100" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
              <div>
                <v-card-title v-text="item.title"></v-card-title>
                <v-card-subtitle v-text="item.text"></v-card-subtitle>
              </div>

            </div>
          </v-card>
        </v-col>
      </v-row>

      <!--事務関係のスキル-->
      <v-row dense>
        <v-col v-for="(otherItem, i) in otherItems" :key="i" cols='12' md="6">
          <v-card :color="otherItem.color" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-avatar class="ma-2" size="100" tile>
                <v-img :src="otherItem.src"></v-img>
              </v-avatar>
              <div>
                <v-card-title v-text="otherItem.title"></v-card-title>
                <v-card-subtitle v-text="otherItem.text"></v-card-subtitle>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      items: [{
          color: '#2b81bf',
          src: require('../assets/HTMLlogo.png'),
          title: 'HTML',
          text: '基礎的なページ作成',
        },
        {
          color: '#2b81bf',
          src: require('../assets/CSSlogo.png'),
          title: 'CSS',
          text: 'ページのレイアウト、装飾等',
        },
        {
          color: '#2b81bf',
          src: require('../assets/JavaScriptlogo.png'),
          title: 'JavaScript',
          text: '条件分岐、繰り返し、関数等の基礎。HTMLへの動的な書き換え',
        },
        {
          color: '#2b81bf',
          src: require('../assets/vuelogo.png'),
          title: 'Vue.js',
          text: 'Vue router、Vuex、Vuetifyを利用した単一ファイルコンポーネントでのページ作成',
        },
      ],
      otherItems: [{
          color: '#2bbcab',
          src: require('../assets/Excellogo.png'),
          title: 'Excel',
          text: '集計、表・グラフ、関数計算、テーブル等。業務で使用経験あり',
        },
        {
          color: '#2bbcab',
          src: require('../assets/Wordlogo.png'),
          title: 'Word',
          text: '図表・グラフ挿入等。業務で使用経験あり',
        },
        {
          color: '#2bbcab',
          src: require('../assets/Powerpointlogo.png'),
          title: 'PowerPoint',
          text: '図表作成、アニメーション等を使用。大学にてプレゼンテーションの経験あり',
        },
        {
          color: '#2bbcab',
          src: require('../assets/tellogo.png'),
          title: 'その他事務スキル',
          text: '電話・窓口対応、書類作成など',
        },
        {
          color: '#b7bc2b',
          src: require('../assets/penlogo.png'),
          title: 'イラスト作成',
          text: 'CLIP STUDIO PAINTでのイラスト作成。figmaでのイメージ図の作成',
        },
      ],
    }),
  }
</script>




<style scoped>
  h1 {
    text-align: center;
    padding: 1em;
  }

  .theme--light.v-application {
    background: rgba(0, 0, 0, 0);
  }

  .v-application {
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }

  .v-card__title {
    font-size: clamp(20px, 3vw, 30px);
    line-height: 1.7rem;

  }

  .v-card__subtitle {
    padding: 10px;
    font-size: clamp(12px, 2vw, 18px);
    padding: 15px;
  }

  .v-card {
    height: 200px;
    display: flex;
    align-items: center;
  }
</style>