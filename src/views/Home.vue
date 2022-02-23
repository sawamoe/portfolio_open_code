<template>
  <v-app class="bgImg">
    <Header></Header>

    <!--TOP画面-->
    <div class="container" id="top">
      <h1 id="title_back"><br>Moemi Sawada<br>Portfolio Site</h1>
      <div class="dog">
        <Kanbanken />
      </div>
    </div>

    <!--コンテンツ-->
    <svg width="100%" height="100%" id="svg" viewBox="50 0 1000 300" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
      <path d="M 0,400 C 0,400 0,200 0,200 C 189.46666666666664,181.6 378.9333333333333,163.2 555,150 C 731.0666666666667,136.8 893.7333333333333,128.8 1039,138 C 1184.2666666666667,147.2 1312.1333333333332,173.6 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#f1e8d5ff" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
    </svg>
    <div class="container bgY" id="about">
      <About />
    </div>
    <svg width="100%" height="100%" id="svg" viewBox="50 0 1000 300" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
      <path d="M 0,400 C 0,400 0,200 0,200 C 65.99230769230766,208.4871794871795 131.98461538461532,216.97435897435898 220,195 C 308.0153846153847,173.02564102564102 418.05384615384617,120.58974358974356 511,128 C 603.9461538461538,135.41025641025644 679.7999999999998,202.66666666666669 747,212 C 814.2000000000002,221.33333333333331 872.7461538461541,172.74358974358972 957,163 C 1041.2538461538459,153.25641025641028 1151.2153846153844,182.35897435897436 1236,195 C 1320.7846153846156,207.64102564102564 1380.392307692308,203.82051282051282 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#f1e8d5ff" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path>
    </svg>


    <svg width="100%" height="100%" id="svg" viewBox="50 0 1000 300" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
      <path d="M 0,400 C 0,400 0,200 0,200 C 82.48803827751198,166.14354066985646 164.97607655502395,132.2870813397129 263,135 C 361.02392344497605,137.7129186602871 474.5837320574162,176.9952153110048 572,192 C 669.4162679425838,207.0047846889952 750.688995215311,197.73205741626793 842,187 C 933.311004784689,176.26794258373207 1034.6602870813397,164.07655502392345 1136,166 C 1237.3397129186603,167.92344497607655 1338.6698564593303,183.96172248803828 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#f1e8d5ff" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
    </svg>
    <div class="container bgY" id="me">
      <Me />
    </div>
    <svg width="100%" height="100%" id="svg" viewBox="50 0 1000 300" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
      <path d="M 0,400 C 0,400 0,200 0,200 C 124.16267942583733,181.07177033492823 248.32535885167465,162.14354066985646 333,157 C 417.67464114832535,151.85645933014354 462.8612440191388,160.49760765550238 550,177 C 637.1387559808612,193.50239234449762 766.2296650717703,217.866028708134 883,218 C 999.7703349282297,218.133971291866 1104.22009569378,194.0382775119617 1195,187 C 1285.77990430622,179.9617224880383 1362.88995215311,189.98086124401914 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#f1e8d5ff" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path>
    </svg>

    <svg width="100%" height="100%" id="svg" viewBox="50 0 1000 300" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
      <path d="M 0,400 C 0,400 0,200 0,200 C 89.25358851674642,218.7846889952153 178.50717703349284,237.5693779904306 285,247 C 391.49282296650716,256.4306220095694 515.2248803827752,256.50717703349284 626,253 C 736.7751196172248,249.49282296650716 834.5933014354067,242.40191387559807 910,231 C 985.4066985645933,219.59808612440193 1038.401913875598,203.88516746411486 1123,198 C 1207.598086124402,192.11483253588514 1323.799043062201,196.05741626794259 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#f1e8d5ff" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
    </svg>
    <div class="container bgY" id="think">
      <Think />
    </div>
    <svg width="100%" height="100%" id="svg" viewBox="50 0 1000 300" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
      <path d="M 0,400 C 0,400 0,200 0,200 C 91.23444976076553,228.07655502392345 182.46889952153106,256.1531100478469 275,245 C 367.53110047846894,233.8468899521531 461.3588516746412,183.46411483253593 552,172 C 642.6411483253588,160.53588516746407 730.0956937799043,187.99043062200954 818,189 C 905.9043062200957,190.00956937799046 994.2583732057417,164.57416267942585 1098,162 C 1201.7416267942583,159.42583732057415 1320.870813397129,179.71291866028707 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#f1e8d5ff" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path>
    </svg>


    <svg width="100%" height="100%" id="svg" viewBox="50 0 1000 300" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
      <path d="M 0,400 C 0,400 0,200 0,200 C 114.46889952153111,225.8468899521531 228.93779904306223,251.6937799043062 333,244 C 437.0622009569378,236.3062200956938 530.7177033492821,195.0717703349282 626,173 C 721.2822966507179,150.9282296650718 818.1913875598087,148.01913875598086 915,174 C 1011.8086124401913,199.98086124401914 1108.5167464114832,254.8516746411483 1196,264 C 1283.4832535885168,273.1483253588517 1361.7416267942585,236.57416267942585 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#f1e8d5ff" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
    </svg>
    <div class="container bgY" id="skills">
      <Skills />
    </div>
    <svg width="100%" height="100%" id="svg" viewBox="50 0 1000 300" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
      <path d="M 0,400 C 0,400 0,200 0,200 C 82.83253588516746,180.4976076555024 165.66507177033492,160.99521531100478 265,182 C 364.3349282296651,203.00478468899522 480.17224880382787,264.51674641148327 596,271 C 711.8277511961721,277.48325358851673 827.645933014354,228.9377990430622 917,210 C 1006.354066985646,191.0622009569378 1069.244019138756,201.73205741626793 1152,205 C 1234.755980861244,208.26794258373207 1337.377990430622,204.13397129186603 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#f1e8d5ff" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path>
    </svg>

    <div class="container" id="portfolio">
      <Portfolio />
    </div>

    <svg width="100%" height="100%" id="svg" viewBox="50 0 1000 300" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
      <path d="M 0,400 C 0,400 0,200 0,200 C 75.4736842105263,164.41148325358853 150.9473684210526,128.82296650717703 262,130 C 373.0526315789474,131.17703349282297 519.6842105263158,169.11961722488041 616,201 C 712.3157894736842,232.88038277511959 758.3157894736842,258.6985645933014 838,264 C 917.6842105263158,269.3014354066986 1031.0526315789475,254.08612440191388 1137,240 C 1242.9473684210525,225.91387559808612 1341.4736842105262,212.95693779904306 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#f1e8d5ff" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
    </svg>
    <div class="container bgY" id="contact">

      <img id="mail" src="../assets/tegaki/mail.png" alt="メール">
      <Contact />
    </div>
    <svg width="100%" height="100%" id="svg" viewBox="50 0 1000 300" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
      <path d="M 0,400 C 0,400 0,200 0,200 C 84.88995215311004,190.42105263157896 169.7799043062201,180.8421052631579 271,166 C 372.2200956937799,151.1578947368421 489.77033492822966,131.05263157894737 575,139 C 660.2296650717703,146.94736842105263 713.1387559808611,182.94736842105263 812,208 C 910.8612440191389,233.05263157894737 1055.6746411483255,247.15789473684214 1168,244 C 1280.3253588516745,240.84210526315786 1360.1626794258373,220.42105263157893 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#f1e8d5ff" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path>
    </svg>

    <!--SNSのリンク-->
    <div id="snsLink">
      <a href="https://twitter.com/sawaweb"><img src="../assets/twitterLogo.png" alt="Twitterのロゴ"></a>
      <a href="https://github.com/sawamoe"><img src="../assets/gitHubLogo.png" alt="gitHubのロゴ"></a>
    </div>

  </v-app>
</template>

<script>
  import Kanbanken from './Kanbanken.vue'
  import About from './About.vue'
  import Me from './Me.vue'
  import Think from './Think.vue'
  import Skills from './Skills.vue'
  import Portfolio from './Portfolio.vue'
  import Contact from './Contact.vue'
  export default {
    components: {
      Kanbanken,
      About,
      Me,
      Think,
      Skills,
      Portfolio,
      Contact,

    },

    data() {
      return {
        show: false,
      }
    },
  }
</script>

<style scoped>
  v-app {
    height: 100vh;
    width: 100vw;
    position: relative;
  }

  .container {
    display: flex;
    justify-content: center;
    max-width: 100vw;
    padding: 0vh 15vw;
    font-size: 1.2em;
    align-items: center;
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }

  .bgY {
    background-color: #F1E8D5;
  }

  .bgImg {
    color: #2c2c2c;
    background-color: #ef5734;
    background-image: linear-gradient(315deg, #ef5734 0%, #ffa229 74%);
  }

  #top {
    display: flex;
    flex-direction: column;
    padding-top: 20vh;
  }

  #mail {
    height: auto;
    width: 20%;
  }

  #snsLink {
    position: fixed;
    bottom: 3%;
    left: 3%;
    width: 80px;
    height: 120px;
    background-color: #fea22900;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #snsLink img {
    width: 40px;
    margin: 10px;
  }





/*Topタイトル背景のもやもや */

  #title_back {
    width: 60%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F0E7D5;
    animation: maru 15s ease 0s infinite;
  }

  @keyframes maru {

    0%,
    100% {
      border-radius: 63% 37% 54% 46%/35% 48% 52% 45%;
    }

    14% {
      border-radius: 40% 60% 54% 46%/49% 60% 40% 51%;
    }

    28% {
      border-radius: 54% 46% 38% 62%/49% 70% 30% 51%;
    }

    42% {
      border-radius: 61% 39% 55% 45%/61% 38% 62% 39%;
    }

    56% {
      border-radius: 61% 39% 67% 33%/70% 50% 50% 30%;
    }

    70% {
      border-radius: 50% 50% 34% 66%/56% 68% 32% 44%;
    }

    84% {
      border-radius: 46% 54% 50% 50%/35% 61% 39% 65%;
    }
  }
</style>