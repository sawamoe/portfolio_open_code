<template>
  <div>
    <h1>test</h1>

    <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">SHECYDUUUELEELE 👽👽👽👽 <a href="https://t.co/Z6iKnBPsZt">pic.twitter.com/Z6iKnBPsZt</a></p>&mdash; Mysta Rias 🕵️‍♂️🦊 NIJISANJI EN (@Mysta_Rias) <a href="https://twitter.com/Mysta_Rias/status/1495775854374359045?ref_src=twsrc%5Etfw">February 21, 2022</a>
    </blockquote>
    <a class="twitter-timeline" href="https://twitter.com/Mysta_Rias?ref_src=twsrc%5Etfw">Tweets by Mysta_Rias</a>
  </div>

</template>

<script>
  window.twttr = (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function (f) {
      t._e.push(f);
    };

    return t;
  }(document, "script", "twitter-wjs"));

export default {
  created(){
    this.axios.get('https://api.twitter.com/2/users?Mysta_Rias')
    .then(response => { //この関数の中にAPIをどうしたいか書く
      this.users = response.data //dataのusersにAPIのデータを代入する
    })
    // .catch(err => { //エラーの場合に備えて、こうしてconsoleで見られるようにする
    //   console.log(err);
    // })
},
}
</script>