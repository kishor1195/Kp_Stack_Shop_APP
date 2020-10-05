
 <template lang="html">
  <section>
    <!-- <div class="modal">
      <app-Modal></app-Modal>
    </div> -->

    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
         <a class="navbar-item">
               <img style="width:112px; height:28%px" src="@/assets/img/fclogo.png" alt="Firstcry Logo">
         </a>
         <div class="panel-block">
             <a>
               <input style="width:400px" class="input is-small" type="text" placeholder="Search for a Category...">
               <i class="fa fa-fw fa-search"></i>
             </a>
         </div>

         <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
           <span aria-hidden="true"></span>
           <span aria-hidden="true"></span>
           <span aria-hidden="true"></span>
         </a>
       </div>
         <div class="navbar-end">
           <div class="navbar-item">
             <div class="buttons">
               <a class="button is-small is-primary">
                 <strong>Sign up</strong>
               </a>
               <a class="button is-small is-light">
                 <i class="fa fa-fw fa-user"></i>
                 Log in
               </a>
             </div>
           </div>
         </div>
     </nav>
    <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
     <div id="navbarBasicExample" class="navbar-menu">
       <div class="navbar-start">
         <div class="navbar-item has-dropdown is-hoverable">
           <div class="panel-block">
             <a class="navbar-links">
               All Categories
            </a>
           </div>
           <div class="navbar-dropdown is-danger">
             <a class="navbar-item" href="fcshop">
               Boys Fashion
             </a>
             <hr class="navbar-divider">
             <a class="navbar-item">
               Girls Fashion
             </a>
             <hr class="navbar-divider">
             <a class="navbar-item">
               Footwear
             </a>
             <hr class="navbar-divider">
             <a class="navbar-item">
               Toys
             </a>
             <hr class="navbar-divider">
             <a class="navbar-item">
               Nursery
             </a>
           </div>
         </div>
       </div>
     </div>
   </nav>

    <!-- importing slider -->
    <div class="slider">
      <app-Slider></app-Slider>
    </div>
  </section>
</template>

<script>
import slider from '../components/slider.vue'
// import modal from '../components/modal.vue'
export default {
  name: 'product_list',
  components: {
    appSlider: slider
    // appModal: modal
  }
}
</script>

<style>
  .navbar {
    height: 100%
  }

</style>
