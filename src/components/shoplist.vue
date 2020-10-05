<template>
  <div>
    <div>
      <div class="tile is-12">
        <div class="tile">
          <div class="tile ">
            <div class="tile is-parent">
              <article class="tile is-child notification is-primary"></article>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="column is-11">
      <div class="columns">
        <div class="column is-3">
          <div class="card" />
          <div class="box">
            <h1><strong>Avg. Customer Review</strong></h1>
            <router-link to="">
              <star-rating
                v-bind:key="i"
                v-bind:increment="0.5"
                v-bind:max-rating="5"
                inactive-color="#000"
                active-color="yellow"
                v-bind:star-size="20"
                :read-only="true"
                :rating="3.8"
              >
              </star-rating>
            </router-link>
            <router-link to="">
              <star-rating
                v-bind:key="i"
                v-bind:increment="0.5"
                v-bind:max-rating="5"
                inactive-color="#000"
                active-color="yellow"
                v-bind:star-size="20"
                :read-only="true"
                :rating="2.8"
              >
              </star-rating>
            </router-link>
            <router-link to="">
              <star-rating
                v-bind:key="i"
                v-bind:increment="0.5"
                v-bind:max-rating="5"
                inactive-color="#000"
                active-color="yellow"
                v-bind:star-size="20"
                :read-only="true"
                :rating="1.8"
              >
              </star-rating>
            </router-link>
            <router-link to="">
              <star-rating
                v-bind:key="i"
                v-bind:increment="0.5"
                v-bind:max-rating="5"
                inactive-color="#000"
                active-color="yellow"
                v-bind:star-size="20"
                :read-only="true"
                :rating="0.8"
              >
              </star-rating>
            </router-link>
            <div style="padding-left:20px;">{{ i }}</div>
            <h1 style="padding-right:10px;padding-top:10px;">
              <strong>Department</strong>
            </h1>
            <small>Certified Refurbished Laptops</small>
            <p style="padding-left:10px;font-size:80%;">Laptops</p>
            <h1 />
            <h1 style="padding-right:10px;padding-top:10px;">
              <strong>Brands</strong>
            </h1>
            <div
              style="padding-left:5px"
              class="checkbox"
              v-for="i in brands"
              v-bind:key="i.brands"
            >
              <input type="checkbox" />
              {{ i }}
            </div>
            <br />
            <router-link to=""
              ><small style="color:orange; padding-left:5px;">
                SEE MORE
              </small></router-link
            >
            <router-view />
            <br />
            <h1 style="padding-right:10px;padding-top:10px;">
              <strong>Price</strong>
            </h1>
            <small>Over Rs 20,000</small>
            <div>
              <div
                class="columns is-2 is-0-mobile is-1-tablet is-1-desktop is-3-widescreen is-3-fullhd
              "
                style="padding-left:10px;padding-top:10px;"
              >
                <div class="column">
                  <input class="input" type="text" placeholder="MIN" />
                </div>
                <div class="column">
                  <input class="input" type="text" placeholder="MAX" />
                </div>
                <div class="column" style="padding-left:10px;">
                  <button style="width:50px; height:35px;"><strong>GO</strong></button>
                </div>
              </div>
            </div>
            <h1 style="padding-right:10px;padding-top:10px;">
              <strong>Pay On Delivery</strong>
            </h1>
            <input type="checkbox" />
            Eligible for pay on delivery
            <br />
            <h2 style="padding-right:10px;padding-top:10px;">
              <strong>New Arrivals</strong>
            </h2>
            Last 30 days<br />
            Last 90 days
            <br />
            <h1 style="padding-right:10px;padding-top:10px;">
              <strong>Seller</strong>
            </h1>

            <h1 style="padding-right:10px;padding-top:10px;">
              <strong>Discount</strong>
            </h1>
            <router-link to="">10% off or more</router-link><br />
            <router-link to="">25% off or more</router-link>
            <router-view />
            <br />
            <h1 style="padding-right:10px;padding-top:10px;">
              <strong>Seller</strong>
            </h1>
            <input type="checkbox" />
            Inlude Out of Stock
            <br />
            <input type="checkbox" />
            Inlude Out of Stock
            <br />
            <input type="checkbox" />
            Inlude Out of Stock

            <br />
            <h2 style="padding-right:10px;padding-top:10px;">
              <strong>Availability</strong>
            </h2>
            <label class="checkbox">
              <input type="checkbox" />
              Inlude Out of Stock
            </label>
          </div>
        </div>

        <div class="column is-11">
          <div class="columns">
            <div class="column is-2">
              <img src="@/assets/img11.jpg" />
            </div>
            <div class="column is-8">
              <router-link to="viewproduct">
                <div v-bind:key="msg">
                  {{ msg }}
                </div></router-link
              >
              <router-view />
            </div>
          </div>
          <hr />

          <div class="columns">
            <div class="column is-2">
              <img src="@/assets/img12.jpg" />
            </div>
            <div class="column is-8">
              <router-link to="viewproduct">
                <div>
                  {{ msg }}
                </div></router-link
              >
              <router-view />
            </div>
          </div>
          <hr />

          <div class="columns">
            <div class="column is-2">
              <img src="@/assets/img13.jpg" />
            </div>
            <div class="column is-8">
              <router-link to="viewproduct">
                <div>
                  {{ msg }}
                </div></router-link
              >
              <router-view />
            </div>
          </div>

          <hr />
          <div class="columns">
            <div class="column is-2">
              <img :src="image" />
            </div>
            <div class="column is-8">
              <router-link to="viewproduct">
                <div>
                  {{ msg }}
                </div></router-link
              >
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image from "@/assets/img14.jpg";
export default {
  data: function() {
    return {
      image: image,
      msg: `ASUS VivoBook S14 AMD Ryzen 5 4500U, 14-inch FHD Thin and'
        'Light Laptop (8GB RAM/512GB NVMe SSD/Windows 10/MS Office'
        '2019/Integrated Graphics/Indie Black/1.40 kg), M433IA-EB594TS`,
      brands: [" HP ", " DELL", "LENEVO", "ASUS", "LG", "MI"],
      string: ["and more"]
    };
  }
};
</script>
@import "~/bulma/bulma.sass"
<style>
.t1,
.t2 {
  text-align: justify;
  text-justify: inter-word;
  padding: 10px;
}
a {
  font-weight: ;
  color: black;

  /* &.router-link-exact-active {
      color:;
    } */
}
</style>
