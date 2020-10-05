<template>
<div class="container">
    <carousel
      :navigationEnabled="1"
      :navigationNextLabel="next"
      :navigationPrevLabel="prev"
      :navigationClickTargetSize="10"
      :paginationEnabled="0"
      :paginationSize="1"
      :paginationPadding="10"
      :scrollPerPage="0"
      :perPage="2"
      :minSwipeDistance="1"
    >
    <slide>
    <div>
      <img :src="image" />
      <div class="columns ">ASUS VivoBook 14 AMD Ryzen 3 3250U
       14-inch FHD Compact and Light Laptop
       (4GB RAM/1TB HDD/Windows
      10/Integrated Graphics/Slate Grey/1.60 kg),
       M409DA-EK484T</div>
       <div class=" columns title is-5">
        <star-rating
          v-bind:max-rating="5"
          v-bind:read-only="0"
          inactive-color="#000"
          active-color="yellow"
          v-bind:star-size="20"
          :show-rating="true"
        />
         <div class="column title is-5 hero is-dark">Rs 34234</div>
        </div>
        </div>
    </slide>
      <slide>
      <div>
        <img :src="image2" />
        <div class="columns ">
        AVITA PURA NS14A6INU541-MEGYB 14-inch
        Laptop (AMD R3-3200U/8GB/256GB SSD/FHD
        Radeon Vega 3 Graphics/1.34 kg), Metallic
        Black with 3 in 1 Sleeve (Grey)
</div>
         <div class=" columns title is-5">
          <star-rating
            v-bind:max-rating="5"
            v-bind:read-only="0"
            inactive-color="#000"
            active-color="yellow"
            v-bind:star-size="20"
            :show-rating="true"
          />
           <div class="column title is-5 hero is-dark">Rs 24234</div>
          </div>
          </div>
      </slide>
      <slide>
      <div>
        <img :src="image1" />
        <div class="columns ">ASUS VivoBook 14 AMD Ryzen 3 3250U
         14-inch FHD Compact and Light Laptop
         (4GB RAM/1TB HDD/Windows
        10/Integrated Graphics/Slate Grey/1.60 kg),
         M409DA-EK484T</div>
         <div class=" columns title is-5">
          <star-rating
            v-bind:max-rating="5"
            v-bind:read-only="0"
            inactive-color="#000"
            active-color="yellow"
            v-bind:star-size="20"
            :show-rating="true"
          />
           <div class="column title is-5 hero is-dark">Rs 34234</div>
          </div>
          </div>
      </slide>
    </carousel>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'
import image from '@/assets/img12.jpg'
import image2 from '@/assets/img9.jpg'
import image1 from '@/assets/img10.jpg'
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide,
    StarRating
  },
  data: function () {
    return {
      image,
      image1,
      image2
    }
  }
}
</script>
