<template lang="html">
  <section style="background-color:gray">

    <div class="columns">
    <div class="column is-narrow">
    <div class="box" style="width: 200px;">

        <div class="media">
        <aside class="menu">
          <p class="menu-label">
            Filters
          </p>
          <p class="menu-label">
            Categories
          <ul class="menu-list">
             <li><a>Laptops</a></li>
          </ul>
          </p>

        <div class="navbar-brand">
          <ul>
            <div class="card-content">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Processor
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                core i7
              </a>
              <a class="navbar-item">
                core i5
              </a>
              <a class="navbar-item">
                core i9
              </a>
            </div>
            </div>
            </div>

          <div class="card-content">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                ScreenSize
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  16inch-17.9inch
                </a>
                <a class="navbar-item">
                  above 20inch
                </a>
                <a class="navbar-item">
                  18inch-20inch
                </a>
              </div>
              </div>
              </div>

              <div class="card-content">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  Operating Sytem
                </a>
                <div class="navbar-dropdown">
                  <a class="navbar-item">
                    Windows 7
                  </a>
                  <a class="navbar-item">
                    Android
                  </a>
                  <a class="navbar-item">
                    Linux/Ubuntu
                  </a>
                </div>
                </div>
                </div>

                <div class="card-content">
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    Laptop Type
                  </a>
                  <div class="navbar-dropdown">
                    <a class="navbar-item">
                      Gaming Laptop
                    </a>
                    <a class="navbar-item">
                      Laptop
                    </a>
                    <a class="navbar-item">
                      2 in 1 Laptop
                    </a>
                  </div>
                  </div>
                  </div>

                  <div class="card-content">
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                      Processor Brand
                    </a>
                   <!-- <hr class="navbar-divider" /> -->
                    <div class="navbar-dropdown">
                      <a class="navbar-item">
                        ARM
                      </a>
                      <a class="navbar-item">
                        Microsoft
                      </a>
                      <a class="navbar-item">
                        NVIDIA
                      </a>
                    </div>
                    </div>
                    </div>

                    <div class="card-content">
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                      Ram Type
                    </a>
                    <div class="navbar-dropdown">
                      <a class="navbar-item">
                        DDR4
                      </a>
                      <a class="navbar-item">
                        DDR3L
                      </a>
                      <a class="navbar-item">
                        SDR3
                      </a>
                    </div>
                    </div>
                    </div>

                    <div class="card-content">
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                      Hard Disk Capacity
                    </a>
                    <div class="navbar-dropdown">
                      <a class="navbar-item">
                        1 TB
                      </a>
                      <a class="navbar-item">
                        500 GB
                      </a>
                      <a class="navbar-item">
                        2 TB
                      </a>
                    </div>
                    </div>
                    </div>
             </ul>
             </div>
         </aside>
    </div>
    </div>

  </div>
<!-- sidebar closed -->
  <div class="column">
    <div class="box">

      <div class="columns">
        <div class="column is-12">

        <ul>
          <a href=" ">home</a>
          <span> > </span>
          <a href="productlist">Laptops</a>
        </ul>
        <div>
        <strong><h1>Laptops (showing 1-43 product of 13463)</h1></strong>
        </div>
        <hr class="navbar-divider">
        <div class="level-left">
    <p class="level-item"><strong>Sort By</strong></p>
    <p class="level-item"><a href="productlist">Popularity</a></p>
    <p class="level-item"><a>Price..High to low</a></p>
    <p class="level-item"><a>price..Low to High</a></p>
    <p class="level-item"><a>Newest First</a></p>
  </div>

        </div>
      </div>

      <hr class="navbar-divider">

      <div id="app">
        <div v-for="tweet in tweets" v-bind:key="tweet.id">
          <div class="tweet">
            <div class="columns">
              <!-- 1 -->
            <div class="column is-one-third">

              <div class="card">
               <div class="card-image">

              <figure class="image is-4by3">
                <img :src="tweet.img" alt="Image">
              </figure>
            </div>

            <div class="card-content">
              <div class="content">
                <a>
                  <strong>{{ tweet.name }}</strong>
                  </a>
                  <p>
                  <small>{{ tweet.specification }}</small>
                  </p>

                  <p><strong>₹</strong>{{tweet.price}}</p>

                <div class="level-left">
                  <a class="level-item">
                    <button style="background-color:green"><span class="likes">{{tweet.rating}}</span></button>
                  </a>
                </div>
            </div>
            </div>
            </div>
      </div>

<!-- 2 -->
<div class="column is-one-third">

  <div class="card">
   <div class="card-image">

  <figure class="image is-4by3">
    <img :src="tweet.img" alt="Image">
  </figure>
</div>

<div class="card-content">
  <div class="content">
    <a>
      <strong>{{ tweet.name }}</strong>
      </a>
      <p>
      <small>{{ tweet.specification }}</small>
      </p>
      <p><strong>₹</strong>{{tweet.price}}</p>

    <div class="level-left">
      <a class="level-item">
        <button style="background-color:green"><span class="likes">{{tweet.rating}}</span></button>
      </a>
    </div>
</div>
</div>
</div>
</div>

<!-- 3 -->
<div class="column is-one-third">

  <div class="card">
   <div class="card-image">
  <figure class="image is-4by3">
    <img :src="tweet.img" alt="Image">
  </figure>
</div>

<div class="card-content">
  <div class="content">
    <a>
      <strong>{{ tweet.name }}</strong>
      </a>
      <p>
      <small>{{ tweet.specification }}</small>
      </p>
      <p><strong>₹</strong>{{tweet.price}}</p>

    <div class="level-left">
      <a class="level-item">
        <button style="background-color:green"><span class="likes">{{tweet.rating}}</span></button>
      </a>
    </div>
</div>
</div>
</div>
</div>
<!-- end -->
      </div>
      </div>
      </div>

</div>

</div>
</div>

</div>
  <!-- column ended -->
</section>
  </template>
<script>
export default {
  data () {
    return {
      tweets: [
        {
          id: 1,
          name: 'Acer Aspire 7 Core i5 9th gen-(8GB/512 GB SSD/Window)',
          specification: '15.6 inc charcol black',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2sUGjt4toRgHqqpmNYeWniwyYlY1j2kE6SLoBSJegFoiPR9ArzElRXp1Erg&usqp=CAc.jpeg',
          price: '46,780',
          rating: 4.1
        },
        {
          id: 2,
          name: 'HP 15s Core i5 10th Gen-(8GB/512 GB SSD/Window)',
          specification: '15.6 inc charcol black',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2sUGjt4toRgHqqpmNYeWniwyYlY1j2kE6SLoBSJegFoiPR9ArzElRXp1Erg&usqp=CAc.jpeg',
          price: '56,990',
          rating: 4.2
        },
        {
          id: 3,
          name: 'Lenovo 15s Core i5 10th Gen-(8GB/512 GB SSD/Window)',
          specification: '15.6 inch jet black',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2sUGjt4toRgHqqpmNYeWniwyYlY1j2kE6SLoBSJegFoiPR9ArzElRXp1Erg&usqp=CAc.jpeg',
          price: '52,990',
          rating: 4.3
        }
      ]
    }
  }

}
</script>
