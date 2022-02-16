<template>
    <div id="app" >
    
    <v-app id="inspire">
    <v-app-bar app>
      <v-tabs
        background-color="grey darken-2"
        centered
        icons-and-text
        show-arrows
      >
  
        <v-tab to="/" v-scroll-to="'#top'" exact>
          TOP
          <span class="material-icons">home</span>
        </v-tab>
  
        <v-tab  to="/#about" v-scroll-to="'#about'">
          About
          <span class="material-icons">info</span>
        </v-tab>
  
        <v-tab  to="/#me" v-scroll-to="'#me'">
          Me
          <span class="material-icons">face</span>
        </v-tab>

        <v-tab to="/#think" v-scroll-to="'#think'">
          I think...
          <span class="material-icons">textsms</span>
        </v-tab>

        <v-tab to="/#skills" v-scroll-to="'#skills'">
          Skills
          <span class="material-icons">work</span>
        </v-tab>

        <v-tab to="/#portfolio" v-scroll-to="'#portfolio'">
          Portfolio
          <span class="material-icons">perm_media</span>
        </v-tab>

        <v-tab to="/#contact" v-scroll-to="'#contact'">
          Contact
          <span class="material-icons">email</span>
        </v-tab>

      </v-tabs>

    </v-app-bar>
  </v-app>
    <router-view/>

  </div>
</template>