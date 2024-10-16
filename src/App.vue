<template>
  <Header @darkMode="setDark"/>
  <router-view :darkMode="dark" :reviewData="reviewData"/>
  <div id="google-reviews"></div>
</template>

<script>

import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue";
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data(){
    return{
      dark: false,
      reviewData: []
    }
  },
  methods: {
    setDark: function(dark){
      this.dark = dark
    },
    /* Copyright (c) 2021, Simon Neutert
//
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

 README
Inspired by Steven Monson's magnificent article here:
https://www.launch2success.com/guide/display-google-reviews-website-2017/

Stevens code was based on peledies jquery plugin on github:
https://github.com/peledies/google-places

made me think and remix their work into the following lines.

Thank you guys!
*/
    googlePlaces(google, elem, options) {
      // This is the easiest way to have default options.
      let settings = {
        // These are the defaults.
        header: "<h3>Google Reviews</h3>",
        footer: "",
        maxRows: 6,
        minRating: 4,
        months: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        textBreakLength: "90",
        shortenNames: true,
        replaceAnonymous: false,
        anonymousName: "A Google User",
        anonymousNameReplacement: "User chose to remain anonymous",
        showDate: false,
        showProfilePicture: false,
        placeId: "",
      };
      settings = { ...settings, ...options };
      const targetDiv = document.getElementById(elem);


      const shortenName = (name) => {
        if (name === undefined) return settings.anonymousName;

        if (name.split(" ").length > 1) {
          const splitName = name.split(" ");
          const firstName = splitName[0];
          const lastNameFirstLetter = splitName[1][0];

          if (lastNameFirstLetter === ".") {
            return firstName;
          }
          return `${firstName} ${lastNameFirstLetter}.`;
        }
        if (name !== undefined) {
          return name;
        }
        return settings.anonymousName;
      };

      const renderStars = (rating) => {
        let stars = '<div class="review-stars"><ul>';
        // fill in gold stars

        for (let i = 0; i < rating; i += 1) {
          stars += '<li><i class="star"></i></li>';
        }
        // fill in empty stars
        if (rating < 5) {
          for (let i = 0; i < 5 - rating; i += 1) {
            stars += '<li><i class="star inactive"></i></li>';
          }
        }
        stars += "</ul></div>";
        return stars;
      };

      const convertTime = (unixTimestamp) => {
        const a = new Date(unixTimestamp * 1000);
        const { months } = settings;
        const time = `${a.getDate()}. ${months[a.getMonth()]} ${a.getFullYear()}`;
        return time;
      };

      const filterReviewsByMinRating = (reviews) => {
        // eslint-disable-next-line no-void
        if (reviews === void 0) {
          return [];
        }
        for (let i = reviews.length - 1; i >= 0; i -= 1) {
          if (reviews[i].rating < settings.minRating) {
            reviews.splice(i, 1);
          }
        }
        return reviews;
      };

      const sortReviewsByDateDesc = (reviews) => {
        if (
            typeof reviews !== "undefined" &&
            reviews != null &&
            reviews.length != null &&
            reviews.length > 0
        ) {
          return (
              reviews
                  // eslint-disable-next-line no-nested-ternary
                  .sort((a, b) => (a.time > b.time ? 1 : b.time > a.time ? -1 : 0))
                  .reverse()
          );
        }
        return [];
      };

      const renderReviews = (reviews) => {
        reviews.reverse();
        let html = "";
        let rowCount =
            settings.maxRows > 0 ? settings.maxRows - 1 : reviews.length - 1;

        // make sure the rowCount is not greater than available records
        rowCount = rowCount > reviews.length - 1 ? reviews.length - 1 : rowCount;

        for (let i = rowCount; i >= 0; i -= 1) {
          const review = reviews[i];
          if (!review) return;
          this.reviewData.push({
            stars: review.rating,
            date: convertTime(review.time),
            name: settings.shortenNames
                ? shortenName(review.author_name)
                : review.author_name,
            style:review.text.length > parseInt(settings.textBreakLength, 10)
                ? "review-item-long"
                : "review-item",
            text: review.text
          });

        }
        console.log(this.reviewData)
        targetDiv.innerHTML += html;
      };

      // GOOGLE PLACES API CALL STARTS HERE

      // initiate a Google Places Object
      const service = new google.maps.places.PlacesService(targetDiv);
      // set.getDetails takes 2 arguments: request, callback
      // see documentation here:  https://developers.google.com/maps/documentation/javascript/3.exp/reference#PlacesService
      const request = {
        placeId: settings.placeId,
      };
      // the callback is what initiates the rendering if Status returns OK
      const callback = (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          const filteredReviews = filterReviewsByMinRating(place.reviews);
          const sortedReviews = sortReviewsByDateDesc(filteredReviews);
          if (sortedReviews.length > 0) {
            renderReviews(sortedReviews);
          }
        }
      };

      if (settings.placeId === undefined || settings.placeId === "") {
        console.error("NO PLACE ID DEFINED");
        return true;
      }

      return service.getDetails(request, callback);
    }

  },
  mounted(){
    if(localStorage.getItem('dark')==='true')
      this.dark = true;

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyAYefAU2nogrtKI6GCGzmj1RKMHEcC67_A`;
    script.async = true;
    script.defer = true;

    // Append the script to the document head
    document.head.appendChild(script);
    script.onload = () => {
      try {
        this.googlePlaces(window.google, "google-reviews", {
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
