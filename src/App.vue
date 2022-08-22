<script setup>

import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

function logOut () {
  localStorage.removeItem('authorized')
  router.push({
    name: 'Login'
  })
}
</script>

<template>
  <div>
    <div>
      <button
        v-if="route.name !== 'Login'"
        class="btn"
        style="margin-bottom: 20px"
        @click="logOut"
      >
        Log out
      </button>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>

</style>
