<template>
<div class="footer">
  <div class="left">
    <h3>Gordon Kemp</h3>
  </div>

  <div class="right">
    <h3>Gordon Kemp</h3>
  </div>
</div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      checked: false,
      items: [
        {
          label: 'Pricing',
          icon: 'fa-solid fa-sterling-sign',
          command: () => {
            this.$router.push("/pricing");
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
  .footer{
    background-color: var(--p-surface-800);
    width: 101%;
    min-width: 101%;
    top: -1px;
    left: -1px;
    border-radius: 0px;
    z-index: 1000;
    display: flex; /* Use flexbox for layout */
    justify-content: space-between; /* Space between left and right sections */
    align-items: center; /* Center items vertically */
    padding: 20px 40px; /* Padding around the footer */
    color: white; /* Text color */
    position: relative; /* Positioning context */
  }

  .left{
    display:flex;
  }
  .right{
    display:flex;
    margin: 0 1.2rem 0 0;
  }
</style>