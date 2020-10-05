<template lang="html">
  <section>
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
      <a class="navbar-item">
       <p class="ml-10 pt-3">
       <img src="@/assets/download.jpeg" alt="logo" style="width: 150px; height: 300;">
       </p>
      </a>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
      </div>
  </div>

      <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input is-small is-hovered" type="text" placeholder="Search" style="width: 400px;">
      <span class="icon is-right">
        <img src="@/assets/search.jpeg" aria-hidden="true">
      </span>
    </p>
  </div>

    <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  <img src="@/assets/notify1.jpeg" alt="logo">Notification Preferences
                </a>

                <a class="navbar-item">
                  <img src="@/assets/sell.png" alt="logo">Sell on Flipkart
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
            <a class="navbar-item">
              <img src="@/assets/cart.png">
              cart
            </a>
            <span class="navbar-item">
              <a class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Login</span>
              </a>
            </span>
          </div>
        </div>
    </nav>

    <div class="card">
      <header class="card-header has-background-white-ter label is-size-10">
        <div class="column">
          <div class="level">
            <div class="level-left">

              <div class="navbar-brand">
               <div class="navbar-item has-dropdown is-hoverable">
               <a class="navbar-link">
                  Electronics
               </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                Mobiles
              </a>
              <a class="navbar-item" href="productlist">
                Laptops
              </a>
              <a class="navbar-item">
                Tabs
              </a>
            </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                TV's and Appliances
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  TV
                </a>
                <a class="navbar-item">
                  Washing Machine
                </a>
                <!-- <hr class="navbar-divider" /> -->
                <a class="navbar-item">
                  Air Conditioners
                </a>
              </div>
              </div>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  Mens
                </a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">
                    Top Wear
                  </a>
                  <a class="navbar-item">
                    Bottom Wear
                  </a>
                  <!-- <hr class="navbar-divider" /> -->
                  <a class="navbar-item">
                    Winter Wear
                  </a>
                </div>
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    Womens
                  </a>

                  <div class="navbar-dropdown">
                    <a class="navbar-item">
                      Ethenic Wear
                    </a>
                    <a class="navbar-item">
                      Sleep Wear
                    </a>
                    <!-- <hr class="navbar-divider" /> -->
                    <a class="navbar-item">
                      Jewellery
                    </a>
                  </div>
                  </div>

                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                      Baby and Kids
                    </a>

                    <div class="navbar-dropdown">
                      <a class="navbar-item">
                        Girl's Clothing
                      </a>
                      <a class="navbar-item">
                        Boys Clothing
                      </a>

                     <a class="navbar-item">
                        Toys
                    </a>
              </div>
            </div>
          </div>
         </div>
        </div>
        </div>
      </header>
       </div>

       <div>
         <transition-group name="fade" tag="div">
           <div v-for="i in [currentIndex]" :key="i">

             <img :src="currentImg" style="height:400px; width:100%;"/>
           </div>
         </transition-group>
         <div class=level>
           <div class=level-left>
         <a class="prev" @click="prev" href="#">&#10094; Previous</a>
         </div>
         <div class=level-left>
         <a class="next" @click="next" href="#">&#10095; Next</a>
         </div>
         </div>
       </div>
  </section>
</template>
<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqA7sZ-5nuY29D7Tn004xfEEjoBNt3NWU49w&usqp=CAU.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShQdVelrYJ89-e5L_bz6oFgKZfn65x0HlSqQ&usqp=CAU.jpeg"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>
