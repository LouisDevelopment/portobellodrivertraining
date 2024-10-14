<template>
<div class="header">
  <div class="left">
    <img @click="this.$router.push({name: 'Home'});" class="logo" src="../assets/PortobelloDriverTrainingMini.svg"/>
    <Button class="header-button" text :label="items[0].label" @click="items[0].command"/>
    <Button class="header-button" text :label="items[1].label" @click="items[1].command"/>
  </div>
  <div class="right">
    <ToggleSwitch v-model="checked"/>
  </div>
</div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      checked: false,
      items: [
        {
          label: 'Pricing',
          icon: 'fa-solid fa-dollar-sign',
          command: () => {
            this.$router.push({name: 'Pricing'});
          }
        },
        {
          label: 'Book Lessons',
          icon: 'fa-solid fa-car',
          command: () => {
            window.open("https://goroadie.com/e/8b13c", '_blank');
          }
        }
      ]
    }
  },
  watch:{
    checked: function(){
      document.documentElement.classList.toggle('dark-mode');
    }
  }
}
</script>

<style scoped>
  .header{
    background-color: var(--p-surface-500);
    width: 101%;
    min-width: 101%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: -1px;
    left: -1px;
    padding:0px;
    border-radius: 0px;
    box-shadow:0 0 6px 0 var(--p-surface-500);
    z-index: 1000;
  }
  .logo{
    width:3rem;
    padding:0 0.3rem;
    height:auto;
  }
  .logo:hover{
    cursor:pointer;
  }
  .header-button{
    font-size:20px;
    color: var(--p-surface-200);
    padding:0.7rem 1rem;
    border-radius: 0px;
  }
  .header-button:hover{
    color: var(--p-surface-200);
    background-color: var(--p-surface-100);
  }

  .left{
    display:flex;
  }
  .right{
    display:flex;
    margin: 0 24px 0 0;
  }
</style>