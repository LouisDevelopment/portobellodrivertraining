<template>
<div class="header">
  <div class="left">
    <img @mouseover="logo=logoHover"
         @mouseleave="logo=defaultLogo"  @click="this.$router.push({name: 'Home'});" class="logo" :src="logo"/>
    <Button
        class="header-button" text :label="items[0].label" @click="items[0].command"/>
    <Button class="header-button" text :label="items[1].label" @click="items[1].command"/>
  </div>
  <div class="right">
    <ToggleSwitch v-model="checked"/>
  </div>
</div>
</template>

<script>

import logoDefault from '../assets/PortobelloDriverTrainingWhite.svg';
import logoHovered from '../assets/PortobelloDriverTrainingMini.svg';
export default {
  name: "Header",
  data() {
    return {
      checked: false,
      logo: logoDefault,
      defaultLogo: logoDefault,
      logoHover: logoHovered,
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
  watch: {
    checked: function() {
      if (this.checked) {
        document.documentElement.classList.add('dark-mode'); // Add dark mode class
      } else {
        document.documentElement.classList.remove('dark-mode'); // Remove dark mode class
      }
      this.$emit('darkMode', this.checked)
      localStorage.setItem('dark', this.checked); // Save preference
    }
  },
  mounted() {
    const savedTheme = localStorage.getItem('dark');
    this.$emit('darkMode', savedTheme);
    // Convert the saved string back to a boolean
    this.checked = savedTheme === 'true'; // Set `checked` to true or false based on stored value
  }
}
</script>

<style scoped>
  .header{
    background-color: var(--p-surface-500);
    width: 100%;
    height: 6vh;
    min-width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    padding:0px;
    border-radius: 0px;
    box-shadow:0 0 2px 0 var(--p-surface-500);
    z-index: 1000;
  }
  .logo{
    width:3rem;
    padding:0 0.3rem;
    height:auto;
  }
  .logo:hover{
    background-color: var(--p-button-text-primary-hover-background);
    cursor:pointer;
  }
  .header-button{
    font-size:20px;
    color: var(--p-surface-200);
    height:6vh;
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