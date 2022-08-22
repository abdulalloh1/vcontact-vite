<template>
  <div>
    <h1>Login</h1>
    <div>
      <input
        type="text"
        v-model="credentials.login"
      >
    </div>
    <div>
      <input
        type="password"
        v-model="credentials.password"
      >
    </div>
    <button
      class="btn"
      @click="login"
    >
      Submit
    </button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const credentials = reactive({
  login: 'admin',
  password: 'password'
})

function login () {
  if(credentials.login === 'admin' && credentials.password === 'password') {
    localStorage.setItem('authorized', true)
    router.push({
      name: 'Home'
    })
  }
}
</script>

<style scoped>

</style>