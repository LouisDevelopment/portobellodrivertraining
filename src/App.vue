<template>
  <Header @darkMode="setDark"/>
  <router-view :darkMode="dark"/>

  <Card id="google-reviews"></Card>
</template>

<script>

import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue";
import googlePlaces from "google-maps-reviews";
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data(){
    return{
      dark: false
    }
  },
  methods: {
    setDark: function(dark){
      this.dark = dark
    }
  },
  mounted(){
    if(localStorage.getItem('dark')==='true')
      this.dark = true;

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=${config.apiKey}`;
    script.async = true;
    script.defer = true;

    // Append the script to the document head
    document.head.appendChild(script);
    script.onload = () => {
      try {
        googlePlaces(window.google, "google-reviews", {
        placeId: 'ChIJ2-DCl-bdMmgR4xxI5e8Jc14',
        // the following params are optional (default values)
        header: "<h3>Google Reviews</h3>", // html/text over Reviews
        footer: '', // html/text under Reviews block
        maxRows: 6, // max rows of reviews to be displayed
        minRating: 5, // minimum rating of reviews to be displayed
        months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        textBreakLength: "90", // length before a review box is set to max width
        showDate: false, // renders the date of the review before the review itself
        shortenNames: true, // example: "Max Mustermann" -> "Max M.""
        replaceAnonymous: false, // do not replace anonymous author_name from JSON
        anonymousName: "A Google User", // Google's default value depending on language used (en: "A Google User")
        anonymousNameReplacement: "User chose to remain anonymous", // replacement for default (never shortens)
      });
      } catch (error) {
        console.error("Error loading Google reviews:", error);
      }
    };

  }
}
</script>

<style>
#google-reviews {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  /*display: grid;*/
  /*grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));*/
}

.review-item {
  border: solid 1px rgba(190, 190, 190, .35);
  margin: 0 auto;
  padding: 1em;
  flex: 1 1 50%;
}

@media ( max-width:1200px) {
  .review-item {
    flex: 1 1 50%;
  }
}

@media ( max-width:450px) {
  .review-item {
    flex: 1 1 90%;
  }
}

.review-item-long {
  border: solid 1px rgba(190, 190, 190, .35);
  margin: 0 auto;
  padding: 1em;
  flex: 1 1 90%;
}

@media ( max-width:1200px) {
  .review-item-long {
    flex: 1 1 90%;
  }
}

@media ( max-width:450px) {
  .review-item-long {
    flex: 1 1 90%;
  }
}

.review-meta, .review-stars {
  text-align: center;
  font-size: 115%;
}

.review-author {
  text-transform: capitalize;
  font-weight: bold;
}

.review-date {
  opacity: .6;
  display: block;
}

.review-text {
  line-height: 1.55;
  text-align: left;
  max-width: 32em;
  margin: auto;
}

.review-stars ul {
  display: inline-block;
  list-style: none !important;
  margin: 0;
  padding: 0;
}

.review-stars ul li {
  float: left;
  list-style: none !important;
  margin-right: 1px;
  line-height: 1;
}

.review-stars ul li i {
  color: #fbbc04;
  /* Google's Star Orange in Nov 2017 */
  font-size: 1.4em;
  font-style: normal;
}

.review-stars ul li i.inactive {
  color: #c6c6c6;
}

.star:after {
  content: "\2605";
}
</style>
