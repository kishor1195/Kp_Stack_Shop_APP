<template>
  <div class="column is-12 columns">
    <div class="column is-8 is-narrow">
      <div>
        <section class="hero is-dark">
          <div class="hero-body">
                <div class="columns title is-3">Customer reviews
            </div>
            <div class="columns">
            <star-rating
              v-bind:max-rating="5"
              v-bind:rating="2.8"
              v-bind:read-only="true"
              inactive-color="#000"
              active-color="yellow"
              v-bind:star-size="20"
              :show-rating="false"
            />
            <div class="column" v-bind:key="text.message">
              {{ text.message }}
              </div>
            </div>
            </div>

        </section>
        <br />
        <p class="subtitle is-6">
          5 star
          <progress class="progress is-info" value="55" max="100">15%</progress>
        </p>
        <p class="subtitle is-6">
          4 star
          <progress class="progress is-info" value="75" max="100">75%</progress>
        </p>
        <p class="subtitle is-6">
          3 star
          <progress class="progress is-info" value="65" max="100">75%</progress>
        </p>
        <p class="subtitle is-6">
          2 star
          <progress class="progress is-info" value="55" max="100"
            >75%</progress
          >
        </p>
        <p class="subtitle is-6">
          1 star
          <progress class="progress is-info" value="45" max="100">75%</progress>
        </p>
        <hr />
        <div>
          <writereview />
          <hr />
        </div>
      </div>
    </div>

    <div class="column is-9">
      <div class="box">
        <section class="hero is-dark">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Read reviews
              </h1>
            </div>
          </div>
        </section>
        <hr />
        <div class="column">
          <div v-for="commentIndex in commentsToShow" v-bind:key="commentIndex">
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,2125,1024_SX48_.png"
              />
              {{ reviews[commentIndex].name }}
              <div>
                <star-rating
                  v-bind:max-rating="5"
                  v-bind:read-only="0"
                  inactive-color="#000"
                  active-color="yellow"
                  v-bind:star-size="20"
                  :show-rating="false"
                />
                {{ reviews[commentIndex].tit }} <br />
                <small>{{ reviews[commentIndex].ld }}</small>
              </div>
            </div>
            <div>
              <p>{{ reviews[commentIndex].description }}</p>
            </div>

            <br />
            <div class="columns">
              <button class="button">supportive</button>
               <div class="column">
               <router-link to="/reportA">Report Unwanted</router-link></div>
            </div>
            <hr />
          </div>
          <div
            v-if="
              commentsToShow < reviews.length || reviews.length > commentsToShow
            "
          >
            <button class="button is-dark" @click="commentsToShow += 3">Load more reviews</button>
          </div>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import writereview from '@/components/writereview.vue'
import l from '@/assets/l.jpg'
import StarRating from 'vue-star-rating'
export default {
  components: {
    StarRating,
    writereview
  },
  data: function () {
    return {
      l,
      reviews: [
        {
          name: 'empty',
          description: 'empty'
        },
        {
          name: 'qwerty',
          description: `
                               1.Screen ppi is great as entry level device✌
                               2.Battery backup is awesome thanks to samsungs R&D even with .7mamp charger.👀
                               3.Android go version 10 is cute without craps
                               4.Reading pdfs is easy and comfort for eyes atleast samsung has guts to say the truth.
                               5.No lag till now because i dont need gaming other than that all regular even without go apps are nicely running.
                               6.fingerprint and face lock i dont need so good they are not provided.`,
          tit: `sell more of these`,
          ld: `Reviewed in India on 30 July 2020`
        },
        {
          name: 'binod',
          description: ''
        },
        { name: 'poiuyt', description: '' },
        { name: 'empty', description: 'empty' }
      ],
      commentsToShow: 1,
      totalComments: 3,
      text: {
        message: `3 out of 5`
      },
      isCardModalActive: false
    }
  }
}
</script>
