<template>
  <div class="home">
    <div class="splashpage">
      <img draggable="false" class="background-img" src="../assets/SplashImage1.png"/>
          <img draggable="false" class='logo' aria-label="portobello driver training logo" src="../assets/PortobelloDriverTraining.png"/>
      <Card class="logo-text">
        <template #content>
          <h2>Professional and affordable driving lessons in Edinburgh</h2>
        </template>
      </Card>
    </div>
    <div class="content">
      <div class="inline">
        <Card class="info-panel">
          <template #title>
            About me
          </template>
          <template #content>
            I've been a driving instructor for over 20 years, and have had several hundred pupils over the years
          </template>
        </Card>
        <Card class="info-panel">
          <template #title>
            About me
          </template>
          <template #content>
            I've been a driving instructor for over 20 years, and have had several hundred pupils over the years
          </template>
        </Card>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.home{
  display:flex;
  flex-direction: column;
  width:100%;
  margin:0px;
  padding:0px;
}

.logo{
  width:15rem;
  margin-top:20vh;
  background-color: var(--p-card-background);
  border-radius: 50% 50% 0 0;
  height:auto;
  z-index: 900;
}

.logo-text{
  margin-top:-32px;
  border-radius: 64px;
}

.background-img{
  position:absolute;
  left:0px;
  top:0px;
  margin:0px;
  padding:0px;
  width:100%;
  height:67vh;
  object-fit:cover;
  filter: saturate(20%);
  box-shadow: 0 0 10px 0 black;
  z-index: -1;
}

.splashpage{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:100%;
  height:70vh;
  margin:0px;
  padding:0px;
}
.content{
  display:flex;
  justify-content: center;
  padding:0 2rem;
  width:100%;
}
.inline{
  display:flex;
  flex-direction: row;
}
.info-panel{
  margin:0 16px;
}
@media (max-width: 900px) {
  .inline {
    flex-direction: column;
    min-width: unset; /* Remove the minimum width when stacked */
  }

  .info-panel{
    margin:16px 16px;
  }
}
</style>