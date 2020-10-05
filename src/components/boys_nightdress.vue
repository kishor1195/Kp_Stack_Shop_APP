<template>
    <section>
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
                 All Categories > Boys Fashion > NightWear
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
     <!-- dress -->
    <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
              <a class="navbar-item" href="boys_dress">
                 Party Wear
              </a>
              <a class="navbar-item" href="boys_nightdress">
                 Night Wear
              </a>
              <a class="navbar-item" href="boys_winter">
                Winter Cloths
             </a>
        </div>
      </div>
    </nav>
      <!-- col -->
      <div class="columns">
  
          <div class="column is-narrow">
              <div class="box" style="width:300px">
  
                  <div>
                      <h3>Check Deliver Details</h3>
                      <input type="text" class="input is-small" placeholder="Enter Pin Code">
                      <!-- <span class="icon is-right"> CHECK</span>  -->
                  </div>
                  <div class="filter">
                      <span class="filter">  Filter By </span>
                  </div>
                  <div class="category">
                      <i class="fa fa-check" aria-hidden="true"></i>
                        CLOTHES & SHOES
                        <div class="checkbox">
                          <label class="checkbox">
                              <input type="checkbox">
                              Bath Time<span style="color:#b9bdba"> (541)</span>
                            </label><br>
                            <label class="checkbox">
                              <input type="checkbox">
                              Cap, Gloves<span style="color:#b9bdba"> (2029)</span>
                            </label><br>
                            <label class="checkbox">
                              <input type="checkbox">
                              Nightwear<span style="color:#b9bdba"> (1661)</span>
                            </label><br>
                            <label class="checkbox">
                              <input type="checkbox">
                              Footwear<span style="color:#b9bdba"> (6693)</span>
                            </label><br>
                            <label class="checkbox">
                              <input type="checkbox">
                              Frocks and Dresses<span style="color:#b9bdba"> (5100)</span>
                            </label>
                        </div>
                  </div>
                  <hr>
  
                  <div class="dropdown">
                      <b-dropdown aria-role="list">
                          <b-button class="button is-light" slot="trigger" slot-scope="{ active }">
                              <span style="text-align:left">Shop For </span>
                              <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
                          </b-button>
                          <b-dropdown-item aria-role="listitem">
                              <label class="checkbox">
                              <input type="checkbox">
                              Unisex<span style="color:#b9bdba"> (6693)</span>
                            </label><br>
                          </b-dropdown-item>
                          <b-dropdown-item aria-role="listitem">
                              <label class="checkbox">
                              <input type="checkbox">
                              Girls<span style="color:#b9bdba"> (35920)</span>
                            </label><br>
                          </b-dropdown-item>
                          <b-dropdown-item aria-role="listitem">
                              <label class="checkbox">
                              <input type="checkbox">
                              Boys<span style="color: #b9bdba"> (26693)</span>
                            </label>
                          </b-dropdown-item>
                      </b-dropdown>
                  </div>
                  <hr>
  
                  <div class="dropdown">
                    <b-dropdown aria-role="list">
                        <b-button class="button is-light" slot="trigger" slot-scope="{ active }">
                            <span>AGE </span>
                            <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
                        </b-button>
                        <div class="panel-block">
                          <a>
                            <input style="width:200px" class="input is-small" type="text" placeholder="Search for Age...">
                            <i class="fa fa-fw fa-search"></i>
                          </a>
                      </div>
                      <div class="scroll">
                        <b-dropdown-item aria-role="listitem">
                          <label class="checkbox">
                            <input type="checkbox">
                            Preemie<span style="color:#b9bdba"> (297)</span>
                          </label><br>
                        </b-dropdown-item>
                        <b-dropdown-item aria-role="listitem">
                          <label class="checkbox">
                            <input type="checkbox">
                            0-3 Months<span style="color:#b9bdba"> (7692)</span>
                          </label><br>
                        </b-dropdown-item>
                        <b-dropdown-item aria-role="listitem">
                          <label class="checkbox">
                            <input type="checkbox">
                            3-6 Months<span style="color: #b9bdba"> (12727)</span>
                          </label>
                        </b-dropdown-item>
                        <b-dropdown-item aria-role="listitem">
                          <label class="checkbox">
                            <input type="checkbox">
                            6-9 Months<span style="color: #b9bdba"> (12727)</span>
                          </label>
                        </b-dropdown-item> 
                        <b-dropdown-item aria-role="listitem">
                          <label class="checkbox">
                            <input type="checkbox">
                            9-12 Months<span style="color: #b9bdba"> (12727)</span>
                          </label>
                        </b-dropdown-item>
                      </div>
                    </b-dropdown>
                </div>
                  <hr>
  
                  <div class="dropdown">
                    <b-dropdown aria-role="list">
                        <b-button class="button is-light" slot="trigger" slot-scope="{ active }">
                            <span>PRICE </span>
                            <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
                        </b-button>
                      <div class="scroll"> 
                        <div class="panel-block">
                          <a>
                            <input style="width:200px" class="input is-small" type="text" placeholder="Search for Age...">
                            <i class="fa fa-fw fa-search"></i>
                          </a>
                      </div>
                        <b-dropdown-item aria-role="listitem">
                          <label class="checkbox">
                            <input type="checkbox">
                            ₹ 0-250<span style="color:#b9bdba"> (297)</span>
                          </label><br>
                        </b-dropdown-item>
                        <b-dropdown-item aria-role="listitem">
                          <label class="checkbox">
                            <input type="checkbox">
                            ₹ 250-500<span style="color:#b9bdba"> (7692)</span>
                          </label><br>
                        </b-dropdown-item>
                        <b-dropdown-item aria-role="listitem">
                          <label class="checkbox">
                            <input type="checkbox">
                            ₹ 500-1000<span style="color: #b9bdba"> (12727)</span>
                          </label>
                        </b-dropdown-item>
                        <b-dropdown-item aria-role="listitem">
                          <label class="checkbox">
                            <input type="checkbox">
                            ₹ 1000-2000<span style="color: #b9bdba"> (12727)</span>
                          </label>
                        </b-dropdown-item> 
                        <b-dropdown-item aria-role="listitem">
                          <label class="checkbox">
                            <input type="checkbox">
                            ₹ 2000-3000<span style="color: #b9bdba"> (12727)</span>
                          </label>
                        </b-dropdown-item>
                        <b-dropdown-item aria-role="listitem">
                          <label class="checkbox">
                            <input type="checkbox">
                            ₹ 3000-4000<span style="color: #b9bdba"> (12727)</span>
                          </label>
                        </b-dropdown-item>
                        <b-dropdown-item aria-role="listitem">
                          <label class="checkbox">
                            <input type="checkbox">
                            ₹ 4000-5000<span style="color: #b9bdba"> (12727)</span>
                          </label>
                        </b-dropdown-item>
                        <b-dropdown-item aria-role="listitem">
                          <label class="checkbox">
                            <input type="checkbox">
                            ₹ 5000 Above<span style="color: #b9bdba"> (12727)</span>
                          </label>
                        </b-dropdown-item>
                      </div> 
                    </b-dropdown>
                </div>
  
                  <hr>
              </div>
          </div>    <!-- narrow column is end -->
          <div class="column">
              <div class="box">
                 <div class="columns">
  
                        <!-- ************** 1 **************** -->
                     <div class="column is-one-third">
                      <div class="card">
                          <div class="card-image">
                            <figure class="image is-4by3">
                              <img src="@/assets/img/nightdress.jpg" alt="Collor Dress">
                            </figure>
                          </div>
                          <div class="card-content">
                            <div class="media">
                              <div class="media-content">
                                <p class="title is-4">Night Dress</p>
                                <p class="subtitle is-6">12 to 18 Months</p>
                              </div>
                            </div>
                            <div class="content">
                              Babyhug Full Sleeves Night Suit Space Print - Grey
                              <p>
                                  <span><strong style="color:blue">₹ 449.10</strong></span><br>
                                  <span style="color:grey"><del>  ₹ 499.00 </del></span>
                                  <span style="color:rgb(214, 85, 11)">  ( 10% OFF )</span><br>
                                  <span style="color:grey; font-size: 12px;">MRP incl. all taxes</span><br>
                                  <span>(449.50 including GST)</span>
                               </p>
                            </div>
                          </div>
                        </div>
                      </div>
                   <!-- ********************* 2 ***********************   -->
                  <div class="column is-one-third">
                   <div class="card">
                      <div class="card-image">
                        <figure class="image is-4by3">
                          <img src="@/assets/img/nightsuit.jpg" alt="Night dress">
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="media">
                          <div class="media-content">
                            <p class="title is-4">Night suit</p>
                            <p class="subtitle is-6">12 to 18 Months</p>
                          </div>
                        </div>
                        <div class="content">
                          Babyhug Full Sleeves Night Suit Space Print - Grey
                         <p>
                             <span><strong style="color:blue">₹ 449</strong></span><br>
                             <span style="color:grey"><del>  ₹ 499 </del></span>
                             <span style="color:rgb(214, 85, 11)">  ( 10% OFF )</span><br>
                             <span style="color:grey; font-size: 12px;">MRP incl. all taxes</span><br>
                             <span>(₹449 including GST)</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
  
                <!-- ************* 3 ************** -->
  
                <div class="column is-one-third">
                  <div class="card">
                     <div class="card-image">
                       <figure class="image is-4by3">
                         <img src="@/assets/img/3sleep.jpg" alt="Party Wear">
                       </figure>
                     </div>
                     <div class="card-content">
                       <div class="media">
                         <div class="media-content">
                           <p class="title is-4">3 Piece suit</p>
                           <p class="subtitle is-6">18 to 24 Months</p>
                         </div>
                       </div>
                       <div class="content">
                          Kidi Wav Dino Print Full Sleeves Pack of 3 Suits - Multicolor
                         <p><span><strong style="color:blue">₹ 699</strong></span><br>
                         <span style="color:grey">
                         <del>  ₹ 640 </del></span>
                         <span style="color:rgb(214, 85, 11)">  ( 10% OFF )</span><br>
                         <span style="color:grey; font-size: 12px;">MRP incl. all taxes</span><br>
                         <span>(₹699 including GST)</span>
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
   
              <!--   end   -->
                </div> 
              </div>
           </div>
  
      </div>
     </section>
  </template>
  
  <script>
  // import modal from '../components/modal.vue'
  export default {
    name: 'boys_dress'
    // component: {
    //   appModal: modal
    // }
  }
  </script>
  
  <style>
      .filter {
          background-color: #ced6d0;
          text-align: left;
          margin-top: 20px;
          padding-left: 5px;
      }
      .category, h1 {
          text-align: left;
      }
      .dropdown {
        text-align: left
      }
      .scroll {
        margin:4px, 4px; 
        padding:4px; 
        width: 270px; 
        height: 150px; 
        overflow-x: hidden; 
        overflow-y: auto; 
        text-align:justify;
      }
  </style>
  