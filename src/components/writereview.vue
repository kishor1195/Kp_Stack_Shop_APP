<template>
  <section>
    <div class="buttons">
      <button class="button is-small is-dark" @click="isCardModalActive = true">
        write a product review
      </button>
    </div>
    <b-modal v-model="isCardModalActive" :width="800" scroll="">
      <div class="card">
        <div class=" card-content">
          <div class="media">
            <div class="columns">
              <img :src="l" style="width:80px;" />
            </div>
            <div class=""><strong>Canon EOS 1500D 24.1 Digital SLR Camera (Black)</strong><star-rating
                      v-bind:max-rating="5"
                      v-bind:rating="2.8"
                      v-bind:read-only="true"
                      inactive-color="#000"
                      active-color="yellow"
                      v-bind:star-size="20"
                      :show-rating="false"
                    /></div>
            <div class="media-content">
              <p class="title is-4"></p>
              <p class="subtitle is-6"></p>
            </div>
            <button class="button is-dark">Submit</button>
          </div>
          <div class="content column is-narrow">
            <div class="columns">
              <div class="column">
                product feature rate 1
                <star-rating
                  v-bind:max-rating="5"
                  v-bind:read-only="0"
                  inactive-color="#000"
                  active-color="silver"
                  v-bind:star-size="20"
                  :show-rating="false"
                />
                product feature rate 2
                <star-rating
                  v-bind:max-rating="5"
                  v-bind:read-only="0"
                  inactive-color="#000"
                  active-color="silver"
                  v-bind:star-size="20"
                  :show-rating="false"
                />
                <div class>
                  <p class="bd-notification is-primary"></p>
                  <section>
                    <b-field>
                      <b-upload v-model="dropFiles" multiple drag-drop>
                        <section class="section">
                          <div class="content has-text-centered">
                            <p>
                              <b-icon icon="upload" size="is-large"> </b-icon>
                            </p>
                            <p>Drop and upload</p>
                          </div>
                        </section>
                      </b-upload>
                    </b-field>

                    <div class="tags">
                      <span
                        v-for="(file, index) in dropFiles"
                        :key="index"
                        class="tag is-primary"
                      >
                        {{ file.name }}
                        <button class="delete is-small" type="button" @>
                          > click="deleteDropFile(index)" > > >
                        </button>
                      </span>
                    </div>
                    <input
                      class="input is-hovered is-dark"
                      type="text"
                      placeholder="Add a title..........."
                    />
                  </section>
                </div>
              </div>

              <div class="column">
                product feature rate 2
                <star-rating
                  v-bind:max-rating="5"
                  v-bind:read-only="0"
                  inactive-color="#000"
                  active-color="silver"
                  v-bind:star-size="20"
                  :show-rating="false"
                />
                product feature rate 2
                <star-rating
                  v-bind:max-rating="5"
                  v-bind:read-only="0"
                  inactive-color="#000"
                  active-color="silver"
                  v-bind:star-size="20"
                  :show-rating="false"
                />
              </div>
            </div>
            <div>
              <textarea
                class="textarea has-fixed-size is-dark"
                placeholder="Add review..........."
              ></textarea>
              <br />
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </section>
</template>

<script>
import l from '@/assets/l.jpg'
import StarRating from 'vue-star-rating'
export default {
  components: {
    StarRating
  },
  data: function () {
    return {
      l,
      isCardModalActive: false
    }
  }
}
</script>
