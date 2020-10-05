<template>
<div class="columns">
  <div>
  <div class="tile is-10">
  <section class="hero is-info">
  <div>
      <h1 class="title is-5">
       Lenovo IdeapadSlim 3i 10th Gen Intel Core
      i5 15.6 inch FHD Thin and Light Laptop (4GB/1TB/Windows
      10/MS Office/Grey/1.85Kg), 81WE007YIN
      </h1>
  </div>
</section>
</div>
<div class="app column is-10">
<div style="padding-right:60%;"><small>Please hit hard refresh </small></div>
<ProductZoomer :base-images="images" :base-zoomer-options="zoomerOptions" />
</div>
  <hr />
  <div class="save" style="white-space: nowrap;">
  <h2><strong style="color:brown;"> Save Extra with 5 offers</strong></h2><br />
  <li><a  style="color:orange;">No Cost EMI</a>: Avail No Cost EMI on select cards for orders above ₹3000 <router-link to="">Here's how <select /></router-link></li>
  <li><a  style="color:orange;">Exchange Offer</a>: Up to ₹ 16,700.00 off on Exchange</li>
  <li><a  style="color:orange;">Cashback</a>: Get daily rewards up to ₹100 on shopping with Amazon Pay UPI.Check your eligibility here <router-link to="">Here's how <select /></router-link></li>
  <li><a  style="color:orange;">Bank Offer</a>: 5% Instant discount with HSBC Cashback card <router-link to="">Here's how <select /></router-link></li>
  <li><a  style="color:orange;">Partner Offers (4)</a>: Get FLAT 5% BACK with Amazon Pay ICICI Bank Credit card for Prime members.</li>
  <li><a  style="color:orange;">Flat 3% BACK for non-Prime members.</a>  <router-link to="">Here's how <select /></router-link></li>
  <li>Buy now & pay next month at 0% interest or pay in EMIs with Amazon Pay Later.</li>
  <li>Instant credit upto ₹20,000. Check eligibility here!  <router-link to="">Here's how <select /></router-link></li>
  <li>Avail EMI on Debit Cards. Get credit up to ₹1,00,000. Check eligibility here  <router-link to="">Here's how <select /></router-link></li>
  <li>Get GST invoice and save up to 28% on business purchases. Sign up for free  <router-link to="">Here's how <select /></router-link></li>
  </div>
  <hr />
  <div class="columns is-vcentered ">
  <div class="column is-8 ">
    <h1 class="q">Have a question ? Find answer in product info, Q&As,reviews
    </h1>
    <div class="columns">
  <div class="field-body">
    <div class="field">
        <input class="input" type="email" placeholder="Type your query or keyword">
    </div>
  </div>
</div>
  </div>
</div>
  <div>
  <img :src="img8">
  <hr />
  <div class="table-container">
    <table class="table is-hoverable">
      <body>
        <tr>
          <td>
            <img
              src="https://m.media-amazon.com/images/I/01gkAkB16eL.svg"
              width="30"
            />
            Processor Name :
            <br />
            <span>{{ t1 }}</span>
          </td>
          <td v-for="i in r1" v-bind:key="i">{{ i.c1 }}</td>
        </tr>
        <tr>
          <td>
            <img
              src="https://m.media-amazon.com/images/I/01EZ0cnnl0L.svg"
              width="30"
            />
            Screen Size
          </td>
          <td v-for="i in r2" v-bind:key="i">{{ i.c2 }}</td>
        </tr>
        <tr>
          <td>
            <img
              src="https://m.media-amazon.com/images/I/01ipyl15XaL.svg"
              width="30px"
            />
            Hard Disk Size:
            <br />
            <span>{{ t2 }}</span>
          </td>
          <td v-for="i in r3" v-bind:key="i">{{ i.c3 }}</td>
        </tr>
        <tr>
          <td>
            Operating System:
            <br />
            <span>{{ t3 }}</span>
          </td>
          <td v-for="i in r4" v-bind:key="i">{{ i.c4 }}</td>
        </tr>
        <tr>
          <td>
            <img
              src="https://m.media-amazon.com/images/I/016vqV9lLtL.png"
              width="30px"
            />
            Graphics coprocessor:
            <br />
            <span>{{ t4 }}</span>
          </td>
          <td v-for="i in r5" v-bind:key="i">{{ i.c5 }}</td>
        </tr>
      </body>
    </table>
</div>
<section class="column is-11 hero is-info">
    <h1 class="title is-4">
    SIMILAR PRODUCT :
     Customers who viewed this item also viewed
    </h1>
</section>
<template>
<div class="column is-10">
<ProductSlider />
<img src="@/assets/mfd.jpg" />
<hr />
<h1 style="color:orange;"><big>Product Details</big></h1>
<p1 style="padding:20px; margin-bottom:50px;">Technical information</p1>
<div style="padding:20px;">
  <table class="table is-hoverable">
    <tbody>
      <tr v-for="row in rows" v-bind:key="row">
        <td>{{ row.c1 }}</td>
        <td>{{ row.c2 }}</td>
      </tr>
    </tbody>
  </table>
</div>
<hr />
<custreview></custreview>
</div>
</template>
<hr />

  </div>
  </div>

  <div class="container">
  <div class="card column is-11">
    <div class="colunm">
    <div class="columns title is-6">
    Lenovo IdeapadSlim 3i
    10th Gen Intel Core i5 15.6
    inch FHD Thin and Light Laptop
    (4GB/1TB/Windows 10/MS Office/Grey/1.85Kg),
    81WE007YIN</div>


  <div class="column is-11 radio title is-6">
    <input type="radio" name="answer"> With Exchange<br /><p>Up to 12,3456 off</p>
    <br />
    <input type="radio" name="answer">
     Without Exchange <p>Up to 20,3456 off</p>
  </div>

  <div class="columns title is-6">Add a protection plan :-</div>
    <div label class="checkbox  is-6">
  <input type="checkbox">
  2 year extended warranty for 2,099.00
  <br />
  <input type="checkbox">
   3 year ADP & 2 year Additional warranty for 4,099.00
</label>
<div class=" field columns">
    <div class="select is-dark">
      <select class="column">
        <option>Quantity :</option>
        <option>1</option>
          <option>2</option>
            <option>3</option>
              <option>4</option>
      </select>
    </div>
</div>
</div>
 </label>
 <hr />
 <div class="columns is-6">
   M. R. P :<br/>
   PRICE : <br />
   YOU SAVE :<br />
   Delivery by:
 </div>
 <hr />
 <div class="columns">
   <div class="column is-6">
    <button class="button is-info">Add to Cart</button>
   </div>
   <div class="column">
    <button class="button is-info">Buy Now</button>
   </div>
 </div>
 </div>
  </div>
<div class="container">
<div class="card column is-11">
          <p>
  <strong>Only 1 left in stock.</strong><br />
  <small>Sold by Mega_tronics and Fulfilled by Shopapp.</small>
  <br /><br />
  <small>New (7) from ₹ 47,390.00 + FREE Shipping</small>
  <br />
  <span style="font-size: 80%"><li>Processor: 10th Gen Intel Core i5-1035G1 processor,
  1.0 Ghz base speed, 3.6 Ghz max speed, 4 Cores, 6Mb Smart Cache</li>
  <li>Operating System: Pre-loaded Windows 10 Home with lifetime validity</li>
  <li>Display: 15.6-inch screen with (1920x1080) full hd display  Anti glare technology</li>
  <li>Memory and Storage: 4 GB RAM | Storage 1 TB HDD</li>
  <li>Design and battery: 1.85Kg thin and light laptop | Battery life : Upto 5 Hours</li>
  <li>This genuine Lenovo Laptop comes with 1 year onsite domestic warranty from Lenovo covering</li>
  <li>manufacturing defects and not covering physical damage. For more details, see Warranty section</li>
  <li>Pre-installed software: Microsoft Office 2019 | Inside the box: laptop, charged, user manual</li>
  <li>Ports and Drive: 2 x USB 3.1 (Gen 1), USB 2.0, HDMI 1.4b, SD card reader</li></span>
  </p>
  </h2>
  <hr />
  <h1><strong>PRODUCT DESCRIPTION</strong></h1><br />
  <img src="@/assets/image15.jpg" />
  <p><strong>Go slim. Go stylish.</strong>
   Travel to ends of the world and back without
   worrying about the extra baggage with your 1.6 kg Ideapad Slim 3i. This ultra-sleek
   laptop, with 19.9 mm thinness, is sure to steal the spotlight wherever it goes.</p>

   <img src="@/assets/image16.jpg" />
   <p><strong>Game-changing performance</strong>
  Stream your favourite series, work on your deadlines and say goodbye to lag
  with 10th Gen Intel Core processor. 4 GB RAM and highly reliable
  1TB HDD storage takes your productivity to higher levels without anyone holding you back.</p>

  <img src="@/assets/img17.jpg" />
  <p><strong>Wider view, less distraction</strong>
  The Ideapad Slim 3i, with its 14” HD antiglare display,
  is perfect down to pixels from every angle.
  Edged with 2-sided narrow bezels, it surely pushes the
  boundaries to give you a broader picture.
 </p>
</div>
</div>
</div>
</div>

</div>
</template>

<script>
import ProductSlider from '@/components/ProductSlider.vue'
import custreview from '@/components/custreview.vue'
import img15 from '@/assets/image15.jpg'
import img9 from '@/assets/img9.jpg'
import img7 from '@/assets/lap.jpg'
import img8 from '@/assets/img8.jpg'
export default {
  name: 'app',
  components: {
    custreview,
    ProductSlider
  },
  data: function () {
    return {
      img7,
      img8,
      img9,
      img15,
      images: {
        thumbs: [
          {
            id: 1,
            url:
              'https://images-na.ssl-images-amazon.com/images/I/41RG5f2mpGL._SS0_.jpg'
          },
          {
            id: 2,
            url:
              'https://images-na.ssl-images-amazon.com/images/I/81WRVvZuDvL._SL1500_.jpg'
          },
          {
            id: 3,
            url:
              'https://images-na.ssl-images-amazon.com/images/I/61z7MFZZAvL._SL1500_.jpg'
          },
          {
            id: 4,
            url:
              'https://images-na.ssl-images-amazon.com/images/I/51WO3l2h2IL._SL1000_.jpg'
          },
          {
            id: 5,
            url:
              'https://images-na.ssl-images-amazon.com/images/I/41RG5f2mpGL._SS0_.jpg'
          }
        ],
        normal_size: [
          {
            id: 1,
            url:
              'https://images-na.ssl-images-amazon.com/images/I/41RG5f2mpGL._SS440_.jpg'
          },
          {
            id: 2,
            url:
              'https://images-na.ssl-images-amazon.com/images/I/81WRVvZuDvL._SL400_.jpg'
          },
          {
            id: 3,
            url:
              'https://images-na.ssl-images-amazon.com/images/I/61z7MFZZAvL._SL400_.jpg'
          },
          {
            id: 4,
            url:
              'https://images-na.ssl-images-amazon.com/images/I/51WO3l2h2IL._SL400_.jpg'
          },
          {
            id: 5,
            url:
              'https://images-na.ssl-images-amazon.com/images/I/41RG5f2mpGL._SS440_.jpg'
          }
        ],
        large_size: [
          {
            id: 1,
            url:
              'https://images-na.ssl-images-amazon.com/images/I/41RG5f2mpGL._SS1040_.jpg'
          },
          {
            id: 2,
            url:
              'https://images-na.ssl-images-amazon.com/images/I/81WRVvZuDvL._SL2500_.jpg'
          },
          {
            id: 3,
            url:
              'https://images-na.ssl-images-amazon.com/images/I/61z7MFZZAvL._SL1500_.jpg'
          },
          {
            id: 4,
            url:
              'https://images-na.ssl-images-amazon.com/images/I/51WO3l2h2IL._SL1500_.jpg'
          },
          {
            id: 5,
            url:
              'https://images-na.ssl-images-amazon.com/images/I/41RG5f2mpGL._SS440_.jpg'
          }
        ]
      },
      zoomerOptions: {
        zoomFactor: 3, // scale for zoomer
        pane: 'pane', // three type of pane ['pane', 'container-round', 'container']
        hoverDelay: 300, // how long after the zoomer take effect
        namespace: 'zoomer-top', // add a namespace for zoomer component, useful when on page have mutiple zoomer
        move_by_click: false, // move image by click thumb image or by mouseover
        scroll_items: 5, // thumbs for scroll
        choosed_thumb_border_color: 'orange', // choosed thumb border color
        scroller_button_style: 'line',
        scroller_position: 'left',
        zoomer_pane_position: 'right'
      },
      rows: [
        { c1: 'Brand', c2: 'Lenovo' },
        { c1: 'Series', c2: 'add' },
        { c1: 'Colour', c2: 'Platinum Grey' },
        { c1: 'Form', c2: 'Clamshell' },
        { c1: 'Item Height', c2: '20 Millimeters' },
        { c1: 'Item Width', c2: '24.1 Centimeters' },
        { c1: 'Screen Size', c2: '14 Inches' },
        {
          c1: 'Maximum Display Resolution',
          c2: '1366 x 768 (HD Ready)'
        },
        { c1: 'Item Weight', c2: '1.6 Kg' },
        { c1: 'Product Dimensions', c2: '32.7 x 24.1 x 2 cm' },
        {
          c1: 'Batteries',
          c2: '1 Lithium Polymer batteries required. (included)'
        },
        { c1: 'Item model number', c2: '81WD00JYIN' },
        { c1: 'Processor Brand', c2: 'Intel' },
        { c1: 'Processor Type', c2: 'Core i3' },
        { c1: 'Processor Speed', c2: '3.4 GHz' },
        { c1: 'RAM Size', c2: '4 GB' },
        { c1: 'Memory Technology', c2: 'DDR4' },
        { c1: 'Maximum Memory Supported', c2: '12 GB' },
        { c1: 'Hard Drive Size', c2: 'Mechanical Hard Drive' },
        {
          c1: 'Hard Disk Technology',
          c2: '2X1.5W Dual Speakers, Dolby Audio<'
        },
        { c1: 'Speaker Description', c2: 'Integrated Graphics' },
        { c1: 'Graphics Coprocessor', c2: 'Integrated' },
        { c1: 'Graphics Card Description', c2: 'GDDR5' },
        {
          c1: 'Graphics RAM Type',
          c2: '802.11ac 2x2 Wi-Fi + Bluetooth 5.0, M.2 Card'
        },
        { c1: 'Connectivity Type', c2: '1' },
        { c1: 'Number of Audio-out Ports', c2: '1 ' },
        { c1: 'Number of USB 2.0 Ports', c2: '1' },
        { c1: 'Number of Microphone Ports', c2: '1' },
        { c1: 'Optical Drive Type', c2: 'Not present' },
        { c1: 'Card Reader', c2: 'USB 3.0' },
        { c1: 'Operating System', c2: 'Windows 10' },
        { c1: 'Average Battery Life (in hours)', c2: '7.5 Hours' },
        { c1: 'Lithium Battery Energy Content', c2: '35 Watt Hours' },
        { c1: 'Number of Lithium Ion Cells', c2: '2' },
        { c1: 'Included Components', c2: 'Laptop, Adapter, Manual' }
      ],
      r1: [
        { c1: 'Core i3' },
        { c1: 'Core i3' },
        { c1: 'Core i3' },
        { c1: 'Core i3' }
      ],
      r2: [{ c2: '14in' }, { c2: '14in' }, { c2: '14in' }, { c2: '14in' }],
      r3: [{ c3: '1TB' }, { c3: '1TB' }, { c3: '1TB' }, { c3: '1TB' }],
      r4: [
        { c4: ' Windows 10' },
        { c4: 'DOS' },
        { c4: 'Windows 10 H' },
        { c4: 'Windows 10 H 64bit' }
      ],
      r5: [
        { c5: 'Integrated Graphics' },
        { c5: 'Integrated Graphics' },
        { c5: 'Intel UHD' },
        { c5: 'Intel UHD' }
      ],
      t1: `Brain of the computer.
      Speed of operation, multitasking
        & battery-life depends on it`,
      t2: `Part inside laptop where data is stored. Offers high
      storage but slower than SSDs`,
      t3: `Main software that runs the laptop. Windows, Linux & DOS are
      popular ones. DOS requires separate installation of operating
      system before using the laptop`,
      t4: `Graphics Processing Unit (GPU) is responsible for processingheavy
        graphical tasks. Quality of games & high resolution video depends
        on the type of GPU`
    }
  }
}
</script>
<style>
.input{
  padding-left:10px;
  margin: 20px;
}
.img8{
  padding-left:0px;
}
tr:hover {
  background-color: silver;
}
div
{
padding:10px;
}
</style>
