<template>
  <div>
    <q-toggle v-model="drawerState" />
  </div>
</template>
<script>
export default {
  computed: {
    drawerState: {
      get() {
        return this.$store.state.showcase.drawerState
      },
      set(val) {
        this.$store.commit('showcase/updateDrawerState', val)
      }
    }
  }
}
</script>
