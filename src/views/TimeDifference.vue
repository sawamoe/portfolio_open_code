<template>

  <div class="container">

    <div class="items">
      <h1 class="title">Youtube配信時差変換アプリ(luxiem ver)</h1>
      <div class="titleTriangle"></div>
      <h2>海外ストリーマーの配信予告、時差があってわかりにくい！</h2>
      <div class="verticalLineContainer">
        <div class="verticalLine"></div>
        <div class="verticalLineText">
          <p>そんな不満から生まれたアプリです。</p><br>
          <p>このアプリでは、海外Vtuberグループである「luxiem」のライブ配信の情報を<br>YoutubeAPIで取得し、日本時間に変換します。</p>
          <p>タブをクリックし、気になる配信者の配信予定を見てみましょう！</p>
        </div>
      </div>
    </div>

    <!--動画表示エリア-->
    <div class="tab">
      <ul>
        <li v-for="luxiemData in luxiemDatas" :key="luxiemData.name" :style="luxiemData.tabColor">
          <button @click="upcomingJson(luxiemData.channelId,luxiemData.eventType)">
            <div class="tabText">
              <span class="material-icons">{{luxiemData.icon}}</span>
              <p>{{luxiemData.name}}</p>
            </div>
          </button>
        </li>
      </ul>
    </div>

    <div class="liveStreaming">
      <table>
        <tr>
          <th class="lineThumbnails">
            <p>タイトル</p>

          </th>
          <th class="lineTime">
            <p>世界標準時</p>
          </th>
          <th class="lineTime">
            <p>日本時間</p>
          </th>
        </tr>
        <tr v-for="video in videos" :key="video.id">
          <td v-if="videoUpcoming" class="lineThumbnails">
            <p>
              {{video.title}}</p>
            <img class="thumbnails" :src="video.Thumbnails" alt="">
          </td>
          <td class="lineTime">
            <p>{{video.videoPublishTimeDay}}</p>
            <p>{{video.videoPublishTimeHM}}</p>
          </td>
          <td class="lineTime">
            <p>{{video.videoJapanTimeDay}}</p>
            <p>{{video.videoJapanTimeHM}}</p>
          </td>
        </tr>
        <tr class="firstView">
          <td colspan="3">
            <p>{{firstView()}}</p>
          </td>
        </tr>
      </table>
    </div>


    <!--背景の三角-->
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

    <!--トピックス-->
    <h3> このアプリについてもっと詳しく知る</h3>
    <div id="scroll"><span></span></div>
    <div class="moreApp">
      <div class="verticalLineContainer">
        <p class="topics">特徴</p>
        <div class="verticalLine"></div>
        <div class="verticalLineText">
          <p>このアプリでは「Youtube API」を使用しています。</p>
          <p>axiosを用いてデータを取得しました。</p>
        </div>
      </div>

      <div class="verticalLineContainer">
        <p class="topics">実装予定の機能</p>
        <div class="verticalLine"></div>
        <div class="verticalLineText">
          <p>・選択中のタブをわかりやすくする</p>
          <p>・配信予定のないストリーマーを選択した際は専用メッセージを返す</p>
          <p>・サイトの英語対応</p>
          <p>・日本以外の時間も選択できるようにする</p>
          <p>・ライブ配信中の動画は目立つように表示
          </p>
        </div>
      </div>

      <div class="verticalLineContainer">
        <p class="topics">仕様書</p>
        <div class="verticalLine"></div>
        <div class="verticalLineText">
          <p>Notionにて簡単な仕様書を作成しました。</p>
          <a href="https://misty-dibble-6e8.notion.site/Luxiem-4f992567fb5443efb4912f37948ff339">URL</a>
        </div>
      </div>
    </div>

    <!--戻るボタン-->
    <div class="backBtn" @click="$router.push('/')" style="cursor: pointer">▶︎Back</div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        videos: [],
        videoUpcoming: null,
        videoUpcomingItems: null, //ここで配列を選択チャンネルにあるだけ取得
        videoUpcomingVideoId: null,
        videoUpcomingTitle: null,
        videoUpcomingThumbnails: null,
        liveStreamingDeta: null, //これは２つめのaxiosで取得
        videoPublishTime: null,
        videoPublishTimeShow: null,
        videoJapanTime: null,
        videoJapanTimeShow: null,
        apiKey: process.env.VUE_APP_apiKey_sawa,

        //メンバー個人のデータ
        luxiemDatas: [{
            name: 'Mysta',
            icon: 'search',
            isActive: false,
            channelId: 'UCIM92Ok_spNKLVB5TsgwseQ',
            eventType: 'upcoming',
            tabColor: 'background-color : #C3552B',
          },
          {
            name: 'Ike',
            icon: 'border_color',
            isActive: false,
            channelId: 'UC4yNIKGvy-YUrwYupVdLDXA',
            eventType: 'upcoming',
            tabColor: 'background-color : #348EC7',
          },
          {
            name: 'Vox',
            icon: 'local_drink',
            isActive: false,
            channelId: 'UCckdfYDGrjojJM28n5SHYrA',
            eventType: 'upcoming',
            tabColor: 'background-color : #960018',
          },
          {
            name: 'Luka',
            icon: 'pets',
            isActive: false,
            channelId: 'UC7Gb7Uawe20QyFibhLl1lzA',
            eventType: 'upcoming',
            tabColor: 'background-color : #D4AF37',
          },
          {
            name: 'Shu',
            icon: 'school',
            isActive: false,
            channelId: 'UCG0rzBZV_QMP4MtWg6IjhEA',
            eventType: 'upcoming',
            tabColor: 'background-color : #A660A7',
          }
        ]
      }
    },
    methods: {
      
      //最初に表示するメッセージ
      firstView() {
        if (this.videos == '') {
          return 'メンバーのタブをクリック！（※配信予定がない場合、クリックしても表示されません）'
        }
      },

      upcomingJson(channelId, eventType) {
        //最初にif文で重複したオブジェクトデータが既にないか確認する
        if (this.videos.findIndex((objkey) => {
            return objkey.Id === channelId
          }) == -1) {
          console.log(this.videos)

          //ここでチャンネル状況のAPIを取得
          axios.get(
              `https://www.googleapis.com/youtube/v3/search?channelId=${channelId}&key=${this.apiKey}&part=snippet&eventType=${eventType}&type=video`
            )
            .then(response => {
              this.videoUpcoming = response.data
            
              for (let i = 0; i < this.videoUpcoming.items.length; i++) {
                this.videoUpcomingItems = this.videoUpcoming.items[i]
                this.videoUpcomingVideoId = this.videoUpcomingItems.id.videoId
                this.videoUpcomingTitle = this.videoUpcomingItems.snippet.title
                this.videoUpcomingThumbnails = this.videoUpcomingItems.snippet.thumbnails.high.url

                //ここで動画の配信時間のAPIを取得
                axios.get(
                    `https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&key=${this.apiKey}&id=${this.videoUpcomingVideoId}`
                  )
                  .then(response => {
                    this.liveStreamingDeta = response.data 
                    this.videoPublishTime = new Date(this.liveStreamingDeta.items[0].liveStreamingDetails
                      .scheduledStartTime)
                    this.videoPublishTimeShow =
                      `${this.videoPublishTime.getUTCMonth()}/${this.videoPublishTime.getUTCDate()} ${('0' + this.videoPublishTime.getUTCHours()).slice(-2)}:${('0' + this.videoPublishTime.getUTCMinutes()).slice(-2)}`
                    this.videoJapanTime = new Date(this.videoPublishTime)
                    this.videoJapanTimeShow =
                      `${this.videoJapanTime.getMonth()}/${this.videoJapanTime.getDate()} ${('0' + this.videoJapanTime.getHours()).slice(-2)}:${('0' + this.videoJapanTime.getMinutes()).slice(-2)}`

                    //取得したAPIをvideosに格納
                    this.videos.push({
                      Id: channelId,
                      title: this.videoUpcomingItems.snippet.title,
                      Thumbnails: this.videoUpcomingItems.snippet.thumbnails.high.url,
                      videoPublishTimeDay: `${this.videoPublishTime.getUTCMonth()}/${this.videoPublishTime.getUTCDate()}`,
                      videoPublishTimeHM: `${('0' + this.videoPublishTime.getUTCHours()).slice(-2)}:${('0' + this.videoPublishTime.getUTCMinutes()).slice(-2)}`,
                      videoJapanTimeDay: `${this.videoJapanTime.getMonth()}/${this.videoJapanTime.getDate()}`,
                      videoJapanTimeHM: `${('0' + this.videoJapanTime.getHours()).slice(-2)}:${('0' + this.videoJapanTime.getMinutes()).slice(-2)}`
                    })
                  })
              }
            })
        }
      },
    }
  }
</script>

<style scoped>
  .container {
    width: 80vw;
    min-width: 350px;
    max-width: 1000px;
    font-family: 'Shippori Antique B1', cursive;
    padding: 0;
  }

  .items {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    color: white;
    background-color: #E23221;
    background-image: repeating-linear-gradient(-45deg, #ffffff, #ffffff 2px, rgba(0, 0, 0, 0) 2px, rgba(0, 0, 0, 0)4px);
    position: relative;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100% 5%;
    padding: 3rem;
    width: 80%;
    text-align: center;
    font-family: 'Zen Maru Gothic', sans-serif;
    margin: 50px;
  }

  .title:before {
    position: absolute;
    border: 3px solid black;
    top: -0.7rem;
    left: -0.7rem;
    z-index: 10;
    width: 100%;
    height: 100%;
    content: '';
  }


  h2 {
    margin: 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2::before,
  h2::after {
    content: "";
    width: 20px;
    height: 20px;
  }

  h2::before {
    margin-bottom: 100px;
    border-top: 5px solid #ff0000;
    border-left: 5px solid #000000;
  }

  h2::after {
    margin-top: 100px;
    border-right: 5px solid #ff0000;
    border-bottom: 5px solid #000000;
  }

  .verticalLineContainer {
    display: flex;
    align-items: center;
    margin: 0px 0 150px 0;
  }

  .verticalLine {
    height: 180px;
    width: 70px;
    border-right: solid black 2px;
    margin: 20px;
  }


  .tab>ul {
    display: flex;
    justify-content: space-between;
    ;
    list-style-type: none;
    color: white;
  }

  .tab li {
    background-color: #E23221;
    border-radius: 5% 5% 0% 0%;
    padding: 20px 4%;
  }

  .tabText {
    font-size: 1.5rem;
    font-family: 'Staatliches', cursive;
  }

  table {
    background-color: #E23221;
    width: 100%;
    border: solid 10px #E23221;
    border-collapse: collapse;
    font-family: 'Zen Kaku Gothic New', sans-serif;
  }

  .liveStreaming th {
    background-color: #E23221;
    height: 100px;
    color: white;

  }

  .liveStreaming td {
    background-color: rgb(255, 255, 255);
    overflow-wrap: break-word;
  }

  .lineThumbnails {
    width: 60%;
    text-align: center;
  }

  .lineTime {
    width: 20%;
    text-align: center;
  }

  td[class="lineTime"] {
    font-size: 1.5rem;
  }

  .thumbnails {
    width: 80%;
    max-width: 400px;
    text-align: center;
  }

  .firstView {
    background-color: #fff;
    font-family: 'Zen Kaku Gothic New', sans-serif;
  }

  h3 {
    margin-top: 20rem;
    text-align: center;
    font-family: 'Zen Maru Gothic', sans-serif;
  }

  .moreApp {
    margin-top: 150px;
  }

  .topics {
    padding: 2rem;
    width: 10vw;
  }

  .backBtn {
    position: fixed;
    top: 1%;
    right: 1%;
    margin: 20px
  }






  /*以下アニメーションの設定*/



  /*背景のアニメーション */

  @import url('https://fonts.googleapis.com/css?family=Exo:400,700');

  body {
    font-family: 'Exo', sans-serif;
  }

  .circles {

    overflow: hidden;
  }

  .circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 187, 0, 0);
    animation: animate 5s linear infinite;
    bottom: -1700px;
    z-index: -10;
  }

  .circles li:nth-child(1) {
    left: 25%;
    animation-delay: 0s;
    border-style: solid;
    border-width: 100px 0 100px 180px;
    border-color: transparent transparent transparent #c3562b15;
  }

  .circles li:nth-child(2) {
    left: 10%;
    animation-delay: 2s;
    animation-duration: 12s;
    border-style: solid;
    border-width: 100px 0 100px 180px;
    border-color: transparent transparent transparent #C3552B50;
  }

  .circles li:nth-child(3) {
    right: 30%;
    animation-delay: 4s;
    border-style: solid;
    border-width: 100px 0 100px 180px;
    border-color: transparent transparent transparent #A660A750;
  }

  .circles li:nth-child(4) {
    left: 40%;
    animation-delay: 0s;
    animation-duration: 18s;
    border-style: solid;
    border-width: 100px 0 100px 180px;
    border-color: transparent transparent transparent #348EC750;
  }

  .circles li:nth-child(5) {
    right: 45%;
    animation-delay: 0s;
    border-style: solid;
    border-width: 100px 0 100px 180px;
    border-color: transparent transparent transparent #348EC750;
  }

  .circles li:nth-child(6) {
    right: 25%;
    animation-delay: 3s;
    border-style: solid;
    border-width: 100px 0 100px 180px;
    border-color: transparent transparent transparent #96001850;
  }

  .circles li:nth-child(7) {
    left: 35%;
    animation-delay: 7s;
    border-style: solid;
    border-width: 100px 0 100px 180px;
    border-color: transparent transparent transparent #96001850;
  }

  .circles li:nth-child(8) {
    left: 50%;
    animation-delay: 15s;
    animation-duration: 45s;
    border-style: solid;
    border-width: 100px 0 100px 180px;
    border-color: transparent transparent transparent #D4AF3750;
  }

  .circles li:nth-child(9) {
    left: 20%;
    animation-delay: 2s;
    animation-duration: 35s;
    border-style: solid;
    border-width: 100px 0 100px 180px;
    border-color: transparent transparent transparent #D4AF3750;
  }

  .circles li:nth-child(10) {
    right: 15%;
    animation-delay: 0s;
    animation-duration: 11s;
    border-style: solid;
    border-width: 100px 0 100px 180px;
    border-color: transparent transparent transparent #A660A750;
  }



  @keyframes animate {

    0% {
      transform: translateY(100px) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-2500px) rotate(500deg);
      opacity: 0;
      border-radius: 0%;
    }
  }




  /*スクロールのアニメーション*/

  #scroll {
    margin: 50px;
  }

  #scroll span {
    display: inline-block;
    position: relative;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 5px solid rgb(0, 0, 0);
    border-bottom: 5px solid #ff0000;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb 1.5s infinite;
    animation: sdb 1.5s infinite;
    box-sizing: border-box;
  }

  @-webkit-keyframes sdb {
    0% {
      -webkit-transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      -webkit-transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }

  @keyframes sdb {
    0% {
      transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }
</style>