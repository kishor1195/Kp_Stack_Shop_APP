<template>
    <div>
        <transition-group name="fade" tag="div">
          <div v-for="i in [currentIndex]" :key="i">
            <img :src="currentImg" style=" width: 100%; height: 400px; margin : auto;"/>
          </div>
        </transition-group>
        <div class="level">
          <div class="level-left">
            <a class="prev" @click="prev" href="#">&#10094; Previous </a>
          </div>
          <div class="level-right">
            <a class="next" @click="next" href="#">   Next &#10095; </a>
          </div>
        </div>
      </div>
  </template>

<script>
export default {
  name: 'Slider',
  data () {
    return {
      images: [
        'https://c1.mydm.in/uploads/event/2014-06-12/134627/134627_2.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpbRvBrA6L3txwSaUyFptvePmAAeymfmrDcA&usqp=CAU.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKyn0ppJvzGE_L0tLQOHoIveFhULCwX7XShw&usqp=CAU.png',
        'https://emailtuna.com/images/newsletter/9c8/9c8a319f6309fc65bc902ba42c25ca49.jpg'
      ],
      timer: null,
      currentIndex: 0
    }
  },

  mounted: function () {
    this.startSlide()
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 4000)
    },

    next: function () {
      this.currentIndex += 1
    },
    prev: function () {
      this.currentIndex -= 1
    }
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length]
    }
  }
}
</script>

<style>
   img {
       width: 700px;
       height: 300px;
       margin : auto;
   }
</style>
