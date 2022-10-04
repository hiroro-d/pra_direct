<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<template>
  <div class="about">
    {{ $store.state.counter }}
    <button @click='increment'>ボタン</button>
    <h2>{{ cartItemsCount }}</h2>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.dispatch('increment', 10);
    }
  },
  computed: {
    cartItemsCount() {
      return this.$store.getters.cartItemsCount;
    }
  }
}
</script>

