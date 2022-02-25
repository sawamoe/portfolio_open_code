<template>

  <div class="container">
    <div class="items">
      <div class="title">
        <h1 v-if="!ENlanguage">Youtube配信時差変換アプリ(luxiem ver)</h1>
        <h1 v-if="ENlanguage">Youtube delivery time difference conversion application (luxiem ver)</h1>
      </div>

      <h2 v-if="!ENlanguage">海外ストリーマーの配信予告、時差があってわかりにくい！</h2>
      <h2 v-if="ENlanguage">International streamer delivery notice, <br>
        hard to tell with the time difference!</h2>
    </div>
    <div class="verticalLineContainer">
      <div class="verticalLine"></div>

      <div class="verticalLineText">
        <div v-if="!ENlanguage">
          <p>そんな不満から生まれたアプリです。<br><br>
            このアプリでは、海外Vtuberグループである「luxiem」のライブ配信の情報を<br>YoutubeAPIで取得し、各国の時間に変換します。<br>
            タブをクリックし、気になる配信者の配信予定を見てみましょう！</p>
        </div>
        <div v-if="ENlanguage">
          <p>This app was born out of such frustration.<br>
            This app uses the Youtube API to get information about the live streaming of "luxiem",<br>
            a group of overseas Vtubers,<br>
            and convert it to your country's time.<br>
            Click on the tabs to see the streaming schedule of the distributor you're interested in!</p>
        </div>
      </div>
    </div>





    <div v-if="noDataMsg" class="noDataMsgArea">
      <div class="noDataMsg animate__animated animate__bounce">
        <p>{{noDataMsg}}</p>
      </div>
    </div>




    <!--動画表示エリア-->
    <div class="tab">
      <ul>

        <li v-for="luxiemData in luxiemDatas" :key="luxiemData.name" :style="luxiemData.tabColor" @click="upcomingJson(luxiemData.channelId,luxiemData.eventType,luxiemData.name,luxiemData.Id);tabToggle(luxiemData.name)" style="cursor: pointer" :class="{tabStyle:luxiemData.isActive}">
          <div class="tabText">
            <span class="material-icons">{{luxiemData.icon}}</span>
            <p>{{luxiemData.name}}</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="liveStreaming">
      <table>
        <tr>
          <th class="lineThumbnails">
            <p v-if="!ENlanguage">タイトル</p>
            <p v-if="ENlanguage">Title</p>

          </th>
          <th class="lineTime">
            <p v-if="!ENlanguage">世界標準時</p>
            <p v-if="ENlanguage">Universal Time</p>

          </th>
          <th class="lineTime">
            <div v-if="!ENlanguage">
              <div class="selectTime" @mouseover="mouseover" @mouseleave="mouseleave" style="cursor: pointer">
                <span>
                  <p>{{pullDownText}} ▼</p>

                  <ul class="dropDown" v-if=pullDownOpen>
                    <li v-for="pullDown in pullDowns" :key="pullDown.id" @click="dropDownSelect(pullDown.name,pullDown.timeDifference)" style="cursor: pointer">
                      <p>
                        {{ pullDown.name }}
                      </p>
                    </li>
                  </ul>
                </span>
              </div>
              <p>時間</p>
            </div>
            <div v-if="ENlanguage">
              <div class="selectTime" @mouseover="mouseover" @mouseleave="mouseleave" style="cursor: pointer">
                <span>
                  {{pullDownTextEN}} ▼
                  <ul class="dropDown" v-if=pullDownOpen>
                    <li v-for="pullDown in pullDownsEN" :key="pullDown.id" @click="dropDownSelect(pullDown.name,pullDown.timeDifference)" style="cursor: pointer">
                      <p>
                        {{ pullDown.name }}
                      </p>
                    </li>
                  </ul>
                </span>
              </div>
              <p>Time</p>
            </div>
          </th>
        </tr>
        <tr v-for="video in videos" :key="video.id">
          <td v-if="luxiemDatas[video.Id].isActive" class="lineThumbnails">
            <a :href="video.videoURL">
              <p>
                {{video.title}}</p>
            </a>
            <a :href="video.videoURL">
              <img class="thumbnails" :src="video.Thumbnails" alt="">
            </a>
          </td>
          <td class="lineTime" v-if="luxiemDatas[video.Id].isActive">
            <p>{{video.videoTimeUTCDay}}</p>
            <p>{{video.videoTimeUTCHM}}</p>
          </td>
          <td class="lineTime" v-if="luxiemDatas[video.Id].isActive">
            <p>{{video.videoTimeSelectDay}}</p>
            <p>{{video.videoTimeSelectHM}}</p>
          </td>
        </tr>
        <tr class="firstView">
          <td colspan="3">
            <p>{{firstView()}}</p>
          </td>
        </tr>
      </table>


      <div class="fukidasiArea">
        <div class="fukidashi">
          <h4 v-if="!ENlanguage">注意事項</h4>
          <h4 v-if="ENlanguage">Precautions</h4>
          <p v-if="!ENlanguage">
            YoutubeAPIの仕様上、下記のエラーが発生することがあります。<br>
            <span>
              ・ストリーマーが配信予定時間を変更した場合、変更前のデータが残ったまま表示される。<br>
              ・１日１００回を超えるクリックがあった場合、それ以上の検索ができないようになる。<br>
            </span>
            <br>
            ストリーマーの配信内容によって、下記のサムネイルが表示されることがあります。<br>
            <span>
              ・ホラー要素<br>
              ・センシティブなイラスト<br>
            </span>
          </p>
          <p v-if="ENlanguage">
            Due to the specifications of the Youtube API, the following error may occur.<br>
            <span>
              ・If a streamer changes the scheduled delivery time, the data before the change will still be
              displayed.<br>
              ・If there are more than 100 clicks per day, further searches will be disabled.<br>
            </span>
            <br>

            The following thumbnails may be displayed depending on what the streamer is delivering.<br>
            <span>
              ・Horror elements<br>
              ・Sensitive illustration<br>
            </span>
          </p>
        </div>
      </div>
    </div>

    <!--トピックス-->
    <h3 v-if="!ENlanguage">このアプリについてもっと詳しく知る</h3>
    <h3 v-if="ENlanguage"> Learn more about this app</h3>
    <div id="scroll"><span></span></div>
    <div class="moreApp">

      <div class="verticalLineContainer">
        <p class="topics" v-if="!ENlanguage">特徴</p>
        <p class="topics" v-if="ENlanguage">Features</p>
        <div class="verticalLine"></div>
        <div class="verticalLineText">
          <p v-if="!ENlanguage">このアプリでは「Youtube API」を使用しています。<br>
            axiosを用いてデータを取得しました。<br>
            <p v-if="ENlanguage">This app uses the "Youtube API".<br>
              The data was obtained using axios.<br>
            </p>
        </div>
      </div>

      <div class="verticalLineContainer">
        <p class="topics" v-if="!ENlanguage">APIの利用について</p>
        <p class="topics" v-if="ENlanguage">About using the API</p>
        <div class="verticalLine"></div>
        <div class="verticalLineText">
          <p v-if="!ENlanguage"><br>
            「Youtube API」は使用回数に制限があるため、一度取得したデータは重複して取得しないようにプログラムを組んでいます。<br>
            タブで動画情報の表示/非表示を切り替える際は、一度格納したデータを使用しています。<br>
            タイムゾーンを変更した際も格納したデータを使用し、使用回数を節約しています。<br>
            <br>
            <p v-if="ENlanguage">Since there is a limit to the number of times the "Youtube API" can be used, the
              program is designed so that once the data has been retrieved, it will not be retrieved twice.<br>
              When switching between showing and hiding video information in tabs, the data stored once is
              used.<br>
              It uses the stored data even when the time zone is changed, saving the number of times it is used.<br>
            </p>
        </div>
      </div>


      <div class="verticalLineContainer">
        <p class="topics" v-if="!ENlanguage">仕様書</p>
        <p class="topics" v-if="ENlanguage">specification document</p>
        <div class="verticalLine"></div>
        <div class="verticalLineText">
          <p v-if="!ENlanguage">Notionにて簡単な仕様書を作成しました。</p>
          <p v-if="ENlanguage">A simple specification document was created in Notion.</p>
          <a href="https://misty-dibble-6e8.notion.site/Luxiem-4f992567fb5443efb4912f37948ff339">URL</a>
        </div>
      </div>
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


    <div class="menuBtn">
      <!--戻るボタン-->
      <div class="backBtn" @click="$router.push('/')" style="cursor: pointer">▶︎Back</div>
      <!--言語切り替えボタン-->
      <div class="switchArea">
        <input type="checkbox" id="switch1">
        <label for="switch1" @click="ENlanguage= !ENlanguage" style="cursor: pointer"><span></span></label>
        <div id="swImg"></div>
      </div>
    </div>



  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        //APIに関するデータ
        videos: [],
        videoUpcoming: null,
        videoUpcomingItems: null, //ここで配列を選択チャンネルにあるだけ取得
        videoUpcomingVideoId: null,
        videoUpcomingTitle: null,
        videoUpcomingThumbnails: null,
        liveStreamingDeta: null, //これは２つめのaxiosで取得
        videoPublishTimeJSON: null,
        videoUnixNowTimezone: null,
        videoTimeUTCDay: null,
        videoTimeUTCHM: null,
        videoTimeSelectDay: null,
        videoTimeSelectHM: null,
        videoURL: null,
        apiKey: '###',
        //メンバー個人のデータ
        luxiemDatas: [{
            Id: '0',
            name: 'Mysta',
            icon: 'search',
            isActive: false,
            channelId: 'UCIM92Ok_spNKLVB5TsgwseQ',
            eventType: 'upcoming',
            tabColor: 'background-color : #C3552B',
          },
          {
            Id: '1',
            name: 'Ike',
            icon: 'border_color',
            isActive: false,
            channelId: 'UC4yNIKGvy-YUrwYupVdLDXA',
            eventType: 'upcoming',
            tabColor: 'background-color : #348EC7',
          },
          {
            Id: '2',
            name: 'Vox',
            icon: 'local_drink',
            isActive: false,
            channelId: 'UCckdfYDGrjojJM28n5SHYrA',
            eventType: 'upcoming',
            tabColor: 'background-color : #960018',
          },
          {
            Id: '3',
            name: 'Luka',
            icon: 'pets',
            isActive: false,
            channelId: 'UC7Gb7Uawe20QyFibhLl1lzA',
            eventType: 'upcoming',
            tabColor: 'background-color : #D4AF37',
          },
          {
            Id: '4',
            name: 'Shu',
            icon: 'school',
            isActive: false,
            channelId: 'UCG0rzBZV_QMP4MtWg6IjhEA',
            eventType: 'upcoming',
            tabColor: 'background-color : #A660A7',
          }
        ],
        //サイトに関するデータ
        ENlanguage: false,
        noDataMsg: null,
        pullDownOpen: false,
        pullDownText: '日本',
        pullDownTextEN: 'Japan',
        resultTimeDifference: null,
        pullDowns: [{ //時差は分換算
            id: 1,
            name: '日本',
            timeDifference: -540
          },
          {
            id: 2,
            name: 'アメリカ （ワシントン）',
            timeDifference: 300
          },
          {
            id: 3,
            name: 'オーストラリア（キャンベラ）',
            timeDifference: -600
          },
          {
            id: 4,
            name: 'スウェーデン',
            timeDifference: -60
          },
        ],
        pullDownsEN: [{
            id: 1,
            name: 'Japan',
            timeDifference: -540
          },
          {
            id: 2,
            name: 'American (Washington, D.C.)',
            timeDifference: 300
          },
          {
            id: 3,
            name: `Australian (Canberran)`,
            timeDifference: -600
          },
          {
            id: 4,
            name: 'Swedish',
            timeDifference: -60
          },
        ],
      }
    },
    methods: {
      //最初に表示するメッセージ
      firstView() {
        if (this.videos == '') {
          if (this.ENlanguage == false) {
            return 'メンバーのタブをクリック！'
          } else {
            return `Click on the member's tab!`
          }
        }
      },
      //タブのactive切り替え
      tabToggle(name) {
        const result = this.luxiemDatas.find((luxiemDatas) => {
          return luxiemDatas.name === name
        })
        result.isActive = !result.isActive
      },
      //基準時間を選択するプルダウンの表示
      mouseover() {
        this.pullDownOpen = true;
      },
      mouseleave() {
        this.pullDownOpen = false;
      },
      //基準時間を選択するプルダウンを選択した後
      dropDownSelect(countryName, timeDifference) {
        this.pullDownOpen = false;
        if (this.ENlanguage == true) {
          this.pullDownTextEN = countryName
        } else {
          this.pullDownText = countryName
        }
        for (let i = 0; i < this.videos.length; i++) {
          let videoItems = this.videos[i]
          let unixNowTimezone = Date.parse(videoItems.videoPublishTimeJSON)
          let now = new Date();
          let TimezoneDifference = now.getTimezoneOffset()
          let unixUCT = unixNowTimezone + (TimezoneDifference * 60 * 1000)
          let unixSelect = unixUCT + (timeDifference * 60 * 1000)
          let TimeUTC = new Date(unixUCT)
          let TimeSelect = new Date(unixSelect)
          videoItems.videoTimeUTCDay = `${Number(TimeUTC.getMonth())+1}/${TimeUTC.getDate()}`
          videoItems.videoTimeUTCHM =
            `${('0' + TimeUTC.getHours()).slice(-2)}:${('0' + TimeUTC.getMinutes()).slice(-2)}`
          videoItems.videoTimeSelectDay = `${Number(TimeSelect.getMonth())+1}/${TimeSelect.getDate()}`
          videoItems.videoTimeSelectHM =
            `${('0' + TimeSelect.getHours()).slice(-2)}:${('0' + TimeSelect.getMinutes()).slice(-2)}`
        }
      },
      upcomingJson(channelId, eventType, name, Id) {
        //最初にif文で重複したオブジェクトデータが既にないか確認する
        if (this.videos.findIndex((objkey) => {
            return objkey.channelId === channelId
          }) == -1) {
          //ここでチャンネル状況のAPIを取得
          axios.get(
              `https://www.googleapis.com/youtube/v3/search?channelId=${channelId}&key=${this.apiKey}&part=snippet&eventType=${eventType}&type=video`
            )
            .then(response => {
              this.videoUpcoming = response.data
              //配信予定がなかったときのポップアップ
              if (this.videoUpcoming.items == '' && this.ENlanguage == false) {
                this.noDataMsg = `今「${name}」の配信予定はないみたい`
              } else if (this.videoUpcoming.items == '' && this.ENlanguage == true) {
                this.noDataMsg = `I don't think there are any plans for ${name}'s stream.`
              } else {
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
                      this.videoPublishTimeJSON = this.liveStreamingDeta.items[0].liveStreamingDetails
                        .scheduledStartTime

                      if (this.ENlanguage == true) {
                        let countryName = this.pullDownTextEN
                        let resultSearch = this.pullDownsEN.find((pullDownsEN) => {
                          return pullDownsEN.name === countryName
                        })
                        this.resultTimeDifference = resultSearch.timeDifference

                      } else {
                        let countryName = this.pullDownText
                        let resultSearch = this.pullDowns.find((pullDowns) => {
                          return pullDowns.name === countryName
                        })
                        this.resultTimeDifference = resultSearch.timeDifference
                      }

                      let unixNowTimezone = Date.parse(this.videoPublishTimeJSON)
                      let now = new Date();
                      let TimezoneDifference = now.getTimezoneOffset()
                      let unixUCT = unixNowTimezone + (TimezoneDifference * 60 * 1000)
                      let unixSelect = unixUCT + (this.resultTimeDifference * 60 * 1000)
                      let TimeUTC = new Date(unixUCT)
                      let TimeSelect = new Date(unixSelect)

                      this.videoTimeUTCDay = `${Number(TimeUTC.getMonth())+1}/${TimeUTC.getDate()}`
                      this.videoTimeUTCHM =
                        `${('0' + TimeUTC.getHours()).slice(-2)}:${('0' + TimeUTC.getMinutes()).slice(-2)}`
                      this.videoTimeSelectDay = `${Number(TimeSelect.getMonth())+1}/${TimeSelect.getDate()}`
                      this.videoTimeSelectHM =
                        `${('0' + TimeSelect.getHours()).slice(-2)}:${('0' + TimeSelect.getMinutes()).slice(-2)}`
                      //取得したAPIをvideosに格納
                      this.videos.push({
                        Id: Id,
                        channelId: channelId,
                        title: this.videoUpcomingItems.snippet.title,
                        Thumbnails: this.videoUpcomingItems.snippet.thumbnails.high.url,
                        videoPublishTimeJSON: this.videoPublishTimeJSON,
                        videoURL: this.videoURL = `https://www.youtube.com/watch?v=` + this
                          .videoUpcomingVideoId,
                        videoTimeUTCDay: this.videoTimeUTCDay,
                        videoTimeUTCHM: this.videoTimeUTCHM,
                        videoTimeSelectDay: this.videoTimeSelectDay,
                        videoTimeSelectHM: this.videoTimeSelectHM,
                        videoUnixNowTimezone: Date.parse(this.videoPublishTimeJSON)
                      })
                      this.videos.sort((a, b) => a.videoUnixNowTimezone - b.videoUnixNowTimezone)
                    })
                }
              }
            }).catch(err => {
              console.log(err);
              if (this.ENlanguage == false) {
                this.noDataMsg = `一日の検索上限に達しました…また夕方以降に検索してください！`
              } else if (this.ENlanguage == true) {
                this.noDataMsg = `The daily search limit has been reached... please search again tomorrow!`
              }
            })
        }

        //RSS1からデータを取得する（
        // このデータには配信状況が含まれていないため使えない
        // 今の時間を取得し、公式APIの動画の開始時間と比較して表示すれば配信予定の動画を表示できる
        // created(channelId){
        //     this.axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=UC2GuoutVyegg6PUK88lLpjw')
        //     .then(response => { 
        //       this.users = response.data 
        //     })
        // },



      },
    },
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
    margin: 0px 0 70px 0;
  }

  .verticalLine {
    height: 180px;
    width: 70px;
    border-right: solid black 2px;
    margin: 20px;
  }

  .noDataMsgArea {
    display: flex;
    justify-content: center;
    margin: 50px;
  }

  .noDataMsg {
    text-align: center;
    filter: drop-shadow(5px 5px 0 #000);
    background: #E23221;
    color: #FFF;
    width: 50vw;
    padding: 1.5rem;
    border-radius: 2%;
  }

  .noDataMsg:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-top-color: #E23221;
    border-left-color: #E23221;
  }

  .tab>ul {
    display: flex;
    justify-content: space-between;
    ;
    list-style-type: none;
    color: white;
    height: 100px;
  }

  .tab li {
    background-color: #E23221;
    border-radius: 5% 5% 0% 0%;
    padding: 15px 4%;
    bottom: -20px;
  }

  .tabText {
    font-size: 1.5rem;
    font-family: 'Staatliches', cursive;
    width: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .tabStyle {
    position: relative;
    height: 80px;
  }

  .isOpen {
    display: block;
  }

  .selectTime {
    background-color: rgb(0, 0, 0);
    padding: 0.5rem 0;
  }

  .dropDown {
    position: absolute;
    background: rgb(0, 0, 0);
    transition: .5s;
    z-index: 10;
    cursor: pointer;
    list-style: none;
    padding: 5px;

  }

  .dropDown>li {
    /* margin: 0.5rem; */
    padding: 0.5rem;
  }

  .dropDown>li:hover {
    list-style: none;
    background: #E23221;
    width: auto;
  }

  table {
    background-color: #E23221;
    width: 100%;
    border: solid 10px #E23221;
    border-collapse: collapse;
    font-family: 'Zen Kaku Gothic New', sans-serif;
  }

  .liveStreaming th,
  select {
    background-color: #E23221;
    height: 100px;
    color: white;
    font-size: clamp(12px, 2.2vw, 20px);
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

  .fukidasiArea {
    display: flex;
    justify-content: center;
    color: #ababab;
  }

  .fukidashi {
    position: relative;
    display: inline-block;
    margin: 3em 0;
    padding: 2vh 5vw 4vh 5vw;
    min-width: 120px;
    max-width: 100%;
    font-size: 16px;
    background: #FFF;
    border: solid 3px #ababab;
    box-sizing: border-box;
    color: #ababab;
  }

  .fukidashi:before {
    content: "";
    position: absolute;
    top: -24px;
    left: 50%;
    margin-left: -15px;
    border: 12px solid transparent;
    border-bottom: 12px solid #FFF;
    z-index: 2;
  }

  .fukidashi:after {
    content: "";
    position: absolute;
    top: -30px;
    left: 50%;
    margin-left: -17px;
    border: 14px solid transparent;
    border-bottom: 14px solid #ababab;
    z-index: 1;
  }

  .fukidashi span {
    font-size: 0.8rem;
  }

  h4 {
    text-align: center;
    padding: 10px;
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

  .menuBtn {
    display: flex;
  }

  .backBtn {
    position: fixed;
    top: 1%;
    right: 1%;
    margin: 5px;
    font-size: 20px;
    font-family: 'Shippori Antique B1', cursive;
  }

  /*言語切り替えボタン*/
  .switchArea {
    position: fixed;
    top: 6%;
    right: 1%;
    margin: 20px;
    line-height: 34px;
    text-align: center;
    font-size: 20px;
    margin: auto;
    width: 80px;
    background: rgba(255, 255, 255, 0);
  }

  .switchArea input[type="checkbox"] {
    display: none;
  }

  .switchArea label {
    display: block;
    box-sizing: border-box;
    height: 40px;
    border: 2px solid #000000;
  }

  .switchArea input[type="checkbox"]:checked+label {
    border-color: #000000;
  }

  .switchArea label span:after {
    content: "JP";
    padding: 0 0 0 36px;
    color: #E23221;
  }

  .switchArea input[type="checkbox"]:checked+label span:after {
    content: "EN";
    padding: 0 30px 0 0;
    color: #000000;
  }

  .switchArea #swImg {
    position: absolute;
    width: 32px;
    height: 32px;
    background: #000000;
    top: 4px;
    left: 4px;
    border-radius: 5%;
    transition: .2s;
    z-index: -10;
  }

  .switchArea input[type="checkbox"]:checked~#swImg {
    transform: translateX(40px);
    background: #E23221;
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