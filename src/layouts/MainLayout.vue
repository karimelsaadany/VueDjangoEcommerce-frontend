<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          class="lt-md"
          @click="toggLeftDrawer"
        />
        <q-toolbar-title
          shrink
        >
          VueDjangoEcommerce
        </q-toolbar-title>
        <q-space />
        <q-tabs
          v-model="tab"
          class="q-mr-xs gt-sm"
        >
          <q-route-tab
            label="Summer"
            :to="{name: 'summer'}"
            exact
            no-caps
          />
          <q-route-tab
            label="Winter"
            :to="{name: 'winter'}"
            exact
            no-caps
          />
        </q-tabs>
        <div class="q-gutter-sm gt-sm">
          <q-btn
            color="white"
            text-color="black"
            label="Log in"
            :to="{name: 'login'}"
          />
          <q-btn
            color="secondary"
            label="Cart"
            icon="shopping_cart"
            :to="{name: 'cart'}"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="lt-md"
    >
       <q-list>
          <div
            v-for="menuItem in menuList"
            :key="menuItem"
          >
            <q-item
              clickable
              v-ripple
              :to="{name: menuItem.name}"
            >
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
          </div>
        </q-list>
    </q-drawer>

    <q-footer>
      <q-toolbar>
        <q-toolbar-title class="text-center">Copyright (c) 2021</q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      menuList: [
        {
          name: 'home',
          label: 'Home',
          separator: false
        },
        {
          name: 'summer',
          label: 'Summer',
          separator: false
        },
        {
          name: 'winter',
          label: 'Winter',
          separator: true
        },
        {
          name: 'login',
          label: 'Log In',
          separator: false
        },
        {
          name: 'cart',
          label: 'Cart',
          separator: false
        }
      ],
      leftDrawerOpen: false,
      tab: null
    }
  },

  methods: {
    toggLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
}
</script>

<style>

.q-tab {
  max-width: 80px;
}

</style>
