<template>
  <div class="home">
    <div class="splashpage">
      <div class="title">
        <img draggable="false" class='logo' aria-label="portobello driver training logo" :src="logo"/>

        <Card class="logo-text">
          <template #content>
            <h1>Professional and affordable driving lessons in Edinburgh</h1>
          </template>
        </Card>
        <Button @click="window.open('https://goroadie.com/e/8b13c', '_blank');" style="margin-top:16px" label="Book Lessons Now"></Button>
      </div>
      <div class="background-img-container">
        <img draggable="false" class="background-img" src="../assets/SplashImage1.png"/>
      </div>
    </div>
  </div>


  <div class="inline">
    <div class="feature">
      <img draggable="false" class="featured-img" src="../assets/DVSA%20instructor.png"/>
      <h1>Fully Certified Instruction</h1>
      <p>As a driving instructor of over 20 years, you can be certain you're in good hands</p>

    </div>
    <Card class="feature">
      <template #content>
        <img draggable="false" class="featured-img" src="../assets/DVSA%20instructor.png"/>
      </template>
    </Card>
  </div>

</template>

<script>
import logoDefault from '../assets/PortobelloDriverTraining.png';
import logoDark from '../assets/PortobelloDriverTrainingWhite.png';
export default {
  name: "Home",
  props: {
    darkMode: false
  },
  data(){
    return{
      logo: logoDefault
    }
  },
  methods: {
    getLogoSource(){
      console.log(this.darkMode)
      if(this.darkMode){
        this.logo= logoDark;
      }else {
        this.logo = logoDefault;
      }
    }
  },
  watch: {
    darkMode: function(){
      this.getLogoSource();
    }
  }
}
</script>

<style scoped>
.home{
  display:flex;
  flex-direction: column;
  width:100%;
  min-height: 90vh;
  margin:0px;
  padding:0px;
}

.feature{
  display:flex;
  flex-direction: column;
  align-items: center;
  width:20%;
  margin: 0 4%;
}

.featured-img{
  width:10rem;
}

.logo{
  width:12rem;
  background-color: var(--p-card-background);
  border-radius: 50% 50% 0 0;
  height:auto;
  z-index: 900;
}

.title{
  margin: 128px 64px 128px 24px;
  z-index: 2;
}

.logo-text{
  margin-top:-32px;
  border-radius: 64px;
}

.background-img-container{
  left:50%;
  margin:0px;
  padding:0px;
  width:40%;
  height:60vh;
  object-fit:cover;
  background-color: var(--p-blue-900);
  border-radius: 18% 82% 18% 82% / 100% 0% 100% 0%  ;
  box-shadow: 0 0 3px 0 black;
  z-index: 0;
}
.background-img{
  left:50%;
  margin:0px;
  padding:0px;
  width:100%;
  border-radius: 24% 76% 24% 76% / 100% 0% 100% 0%  ;
  height:60vh;
  object-fit:cover;
  filter: saturate(var(--p-vibrance));
}

.splashpage{
  background-color: var(--p-background-alt);
  display:flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:60vh;
  margin:0px;
  padding:0px;
}

h1{
  font-size:16px;
}


.inline{
  display:flex;
  flex-direction: row;
  justify-content: center;
}
@media (max-width: 1000px) {
  .inline {
    flex-direction: column;
    min-width: unset; /* Remove the minimum width when stacked */
  }

  logo-text{
    margin:0 16px 0 16px;
  }

  h1{
    font-size:16px
  }

  .info-panel{
    margin:16px 16px;
  }
}

@media (max-width: 1200px) {
  .background-img-container{
    position:absolute;
    width:100%;
    left:0;
    z-index: 1;
  }
  .title h1{
    font-size:10px;
  }
  .logo{
    width:8rem;
  }
}
</style>