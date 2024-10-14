<template>
  <div class="home">
    <div class="splashpage">
      <img class='logo' aria-label="portobello driver training logo" src="../assets/PortobelloDriverTraining.png"/>
      <h2>Professional and affordable driving lessons in Edinburgh</h2>
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
}

.logo{
  width:30%;
  height:auto;
}

.splashpage{
  margin: 0 auto;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height:100vh;
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
  background-color: var(--p-surface-300);
  color: var(--p-surface-700);
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