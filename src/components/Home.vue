<template lang="html">
  <section>
    <div class="">
      <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href=" ">
          quote
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item is-active" @click="getRandomCode">
            Home
          </a>
      </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
    <div class="card">
      <header class="card-header has-background-white-ter label is-size-6">
        <div class="column">
          <div class="level">
            <div class="level-left">
        <p class="card-header-title">
          <strong><h2>  Show Random Quote</h2></strong>
        </p>
        </div>
        <div class="leve-right">
          <span class="button tag is-primary is-rounded" @click="getRandomCode">Get Random Quote</span>
        </div>
        </div>
        </div>
      </header>
      <div class="card-content"  style="padding: 0 0.5rem;">
      <div class=" has-text-centered">
        <span v-if='rating4or5' class="tag is-primary is-rounded">Showing some similar quotes</span>
      </div>
      <div class="table-container tbsize">
        <table class="table is-bordered is-fullwidth" style="overflow-y:scroll">
  <thead>
    <tr>
      <th><abbr title="_ID">_ID</abbr></th>
      <th><abbr title="EN">EN</abbr></th>
      <th><abbr title="Author">Author</abbr></th>
      <th><abbr title="ID"></abbr>ID</th>
      <th><abbr title="RATE"></abbr>RATE Quote</th>
      </tr>
  </thead>
  <tbody>
    <tr v-for= "each in randomQuote" v-bind:key="each">
      <td>{{each._id}}</td>
      <td class="has-text-info">{{each.en}}</td>
      <td>{{each.author}}</td>
      <td>{{each.id}}</td>
      <td>
        <button type="button" class=" button is-success is-rounded" name="button" @click="RateModal(each._id,each.author)">Give Rating</button>
      </td>
    </tr>
    <p v-if="!randomQuote.length">No Quote</p>
  </tbody>
        </table>
      </div>
    </div>
  </div>
    <div class="modal" :class="{'is-active':isRateModal}">
      <div class="modal-background"></div>
      <div class="modal-card ">
        <header class="modal-card-head">
          <p class="modal-card-title">Give Rating</p>
          <button type="button" class="delete has-background-danger" v-on:click="RateModal"></button>
        </header>
        <section class="modal-card-body">
          <form @submit.prevent="giveRate()">
            <div class="column">
              <div class="field">
                <label class="label is-small">Give Rating</label>
                <div class="control" cols="12">
                  <input type="number" size="sm" class="input is-small"  placeholder="Give Rate" v-model.trim="rate">
                </div>
              </div>
            </div>
            <div class="column has-text-right">
              <span class="padding">
                <button type="submit" class="button is-primary is-small">submit</button>
              </span>
            </div>
          </form>
        </section>
      </div>
    </div>
    <footer>
      <div class="content has-text-centered">
        <span class=" tag is-primary">
           <router-link to='/shoplist'>SHOP</router-link>
          <router-view />
        </span>
         <button>
          <span class=" tag is-primary">
            <a href="product_list"> SHOP
            </a>
         </span>
        </button>
      </div>
    </footer>
  </section>
</template>

<script>
import QUOTE from '../utils/constants'
import http from 'axios'
export default {
  name: 'home',
  data () {
    return {
      randomQuote: [],
      isRateModal: false,
      rate: '',
      rateId: '',
      author: '',
      rating4or5: false
    }
  },
  created () {
    this.getRandomCode()
    this.timer = setInterval(() => this.getRandomCode(), 20 * 1000)
  },
  methods: {
    /**
     * This method used to get random quotes
     *
     */
    getRandomCode: async function () {
      this.rating4or5 = false
      this.randomQuote = []
      let data = await http.get(`${QUOTE.QUOTE_URL}/quotes/random `)
      this.randomQuote.push(data.data)
    },
    /**
     * This method used give rating to displayed quote
     * Rating shouldbe in number
     *
     */
    giveRate: async function () {
      if (!this.rate) {
        alert('Please give Rating')
        return
      }
      if (this.rate && this.rate > 5) {
        alert('Rate should be less than 5 !!')
        return
      }
      this.isRateModal = false
      let rateObj = {
        quoteId: this.rateId,
        newVote: this.rate
      }
      this.rating4or5 = false
      await http.post(`${QUOTE.QUOTE_URL}/quotes/vote`, rateObj)
      if (this.rate > 4) {
        this.rating4or5 = true
        this.listOFAllQuote(this.author)
      }
      alert('Rating Given successfully')
    },
    /*
    It's Modal for giving quote
     */
    RateModal: function (rateid, author) {
      this.rateId = rateid
      this.author = author
      this.rate = ''
      this.isRateModal = !this.isRateModal
    },
    /*
    This method used to display similar quote
     */
    listOFAllQuote: async function (similarauthor) {
      let data
      data = await http.get(`${QUOTE.QUOTE_URL}/quotes`)
      data = data.data.filter((each) => {
        return each.author === similarauthor
      })
      this.randomQuote = [...this.randomQuote, ...data]
    }
  }
}
</script>

<style lang="css" scoped>
hr {
    border: none;
    height: 1px;
}
.tbsize {
   height: 400px;
   overflow-y:auto;
}
</style>
