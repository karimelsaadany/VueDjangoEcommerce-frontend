<template>
  <div class="q-ma-xl">
    <section class="banner bg-dark flex flex-center">
      <div class="text-white text-center">
        <h4 class="q-ma-none">Welcome to VueDjangoEcommerce</h4>
        <p class="q-mt-md">The best store online</p>
      </div>
    </section>
    <div class="row q-gutter-md">
      <div class="col-12 text-center">
        <h2>Latest products</h2>
      </div>
      <q-card
        v-for="product in latestProducts"
        :key="product.id"
        class="my-card"
      >
        <q-img
          :src="product.get_thumbnail"
        />
        <q-card-section>
          <div class="text-h6">{{ product.name }}</div>
          <div class="text-subtitle2">{{ product.price }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-btn>View Details</q-btn>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { api } from 'boot/axios'

export default {
  name: 'Home',

  data () {
    return {
      latestProducts: []
    }
  },

  mounted () {
    this.getLatestProducts()
  },

  methods: {
    async getLatestProducts () {
      try {
        const response = await api.get('/api/v1/latest-products')
        this.latestProducts = response.data
        console.log('*latestProducts', this.latestProducts)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
  .banner {
    height: 24rem;
  }

  .my-card {
    width: 100%;
    max-width: 300px;
    max-height: 320px;
  }
</style>
