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
        <a href="https://goroadie.com/e/8b13c" target="_blank"><Button style="margin-top:16px; border-radius: 32px" label="Book Lessons Now"></Button></a>
      </div>
      <div class="background-img-container">
        <img draggable="false" class="background-img" src="../assets/SplashImage1.png"/>
      </div>
    </div>
    <div class="inline">
      <div class="feature">
        <img draggable="false" class="featured-img default-img" src="../assets/DVSA%20instructor.png"/>
        <div class="feature-right">
          <h1>Fully Certified Instruction</h1>
          <p>As an approved driving instructor of over X years, with hundreds of passed pupils, you can be certain you're in good hands.</p>
        </div>

      </div>
      <div class="feature feature-flipped">
        <img draggable="false" class="featured-img custom-img" src="../assets/Gearbox.png"/>
        <div class="feature-right">
          <h1>Manual Lessons</h1>
          <p>With Portobello Driver Training you'll be driving a manual car, picking up all the skills
            required to pass the UK driving test and get a complete Manual and Automatic car licence.</p>
        </div>

      </div>
      <div class="feature">
        <img draggable="false" class="featured-img custom-img" src="../assets/currency.png"/>
        <div class="feature-right">
          <h1>Competitive Pricing</h1>
          <p>With 90 minute lessons costing £65 (£43 per hour), Portobello Driver Training is priced below the average for the Edinburgh Area.</p>
        </div>

      </div>
      <div class="feature feature-flipped">
        <img draggable="false" class="featured-img custom-img" src="../assets/kindness.png"/>
        <div class="feature-right">
          <h1>Friendly & Patient</h1>
          <p>No one wants to be treated unfairly, especially when driving. Portobello Driver Training will treat you with the respect and patience that you deserve.</p>
        </div>

      </div>
    </div>
    <div class="review-card">
        <Carousel :value="reviewData" circular :autoplayInterval="8000" :numVisible="1" :numScroll="3">
          <template #item="slotProps">
            <div v-if="slotProps.data.text">
              <div style="margin-bottom: 12px; display: inline">
                <div style="text-align:center">{{ slotProps.data.name }}</div>
                <div style="text-align:right;margin-top:-16px">{{slotProps.data.date}}</div>
              </div>

              <div style="margin-bottom: 12px; color:gold; font-size: 24px">
              <span v-for="i in slotProps.data.stars">★</span>
              <span v-for="i in (5-slotProps.data.stars)">☆</span>
              </div>

              <div style="margin-bottom: 12px">{{ slotProps.data.text }}</div>
            </div>
            <div v-else>
              <div style="margin-bottom: 12px; display: inline">
                <div style="text-align:center">{{ slotProps.data.name }}</div>
                <div style="text-align:right; margin-top:-16px">{{slotProps.data.date}}</div>
              </div>
              <div style="margin-bottom: 12px; color:gold; font-size: 64px">
                <span v-for="i in slotProps.data.stars">★</span>
                <span v-for="i in (5-slotProps.data.stars)">☆</span>
              </div>
            </div>
          </template>
        </Carousel>
     </div>
    <p>Reviews from <a target="_blank" href="https://www.google.co.uk/maps/place/Portobello+Driver+Training/@55.9362305,-3.1112234,17z/data=!4m14!1m7!3m6!1s0x6832dde697c2e0db:0x5e7309efe5481ce3!2sPortobello+Driver+Training!8m2!3d55.9362305!4d-3.1112234!16s%2Fg%2F11shc4hmvh!3m5!1s0x6832dde697c2e0db:0x5e7309efe5481ce3!8m2!3d55.9362305!4d-3.1112234!16s%2Fg%2F11shc4hmvh?entry=ttu&g_ep=EgoyMDI0MTAxMy4wIKXMDSoASAFQAw%3D%3D">Google Maps</a></p>

  </div>




</template>

<script>
import logoDefault from '../assets/PortobelloDriverTraining.png';
import logoDark from '../assets/PortobelloDriverTrainingWhite.png';
export default {
  name: "Home",
  props: {
    darkMode: false,
    reviewData: Array
  },
  data(){
    return{
      logo: logoDefault
    }
  },
  methods: {
    getLogoSource(){
      console.log("changing " + this.darkMode)
      if(this.darkMode){
        this.logo = logoDefault;
      } else {
        this.logo= logoDark;
      }
    },
  },
  watch: {
    darkMode: function(){
      console.log("bbb " + this.darkMode);
      this.getLogoSource();
    }
  },
  mounted(){
    if(localStorage.getItem('dark') === 'false'){
      this.logo = logoDark;
    }
  }
}
</script>

<style scoped>
.home{
  display:flex;
  align-items: center;
  flex-direction: column;
  width:100%;
  min-height: 100vh;
  margin:0px;
  padding:0px;
}

.custom-img{
  height:7.3rem;
  margin:0.7rem 0.7rem 0 0.7rem;
  border-radius: 50%;
  box-shadow: 0px 0px 0px 2px white;
}

.default-img{
  height:8rem;
}

.feature{
  display:flex;
  flex-direction: column;
  align-items: center;
  width:20%;
  margin: 16px 4%;
}

.logo{
  width:12rem;
  background-color: var(--p-card-background);
  border-radius: 50% 50% 0 0;
  height:auto;
  z-index: 900;
}

.review-card{
  background-color: var(--p-card-background);
  padding: 2rem 0 2rem 0;
  border-radius: 10px;
  margin-bottom: 1rem;
  width: 50%;
  margin-top:32px;
  justify-content: center;
  align-items: center;
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
  box-shadow: 0 0 3px 0 var(--p-background-alt);
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
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: unset; /* Remove the minimum width when stacked */
  }

  .feature{
    justify-content: center;
    align-items: center;
    width:80%;
    flex-direction: row;
  }

  .feature-flipped{
    flex-direction: row-reverse;
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
    font-size:14px;
  }
  .title {

    margin: 128px 24px 128px 24px;
  }
  .logo{
    width:10rem;
  }
  .review-card{
    width:95%;
  }
}
</style>
