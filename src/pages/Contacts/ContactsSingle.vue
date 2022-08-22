<template>
  <div>
    <table>
      <tbody>
      <tr>
        <th>
          Name:
        </th>
        <td>
          {{ contact.name }}
        </td>
      </tr>
      <tr>
        <th>
          Email:
        </th>
        <td>
          {{ contact.email }}
        </td>
      </tr>
      <tr>
        <th>
          Phone:
        </th>
        <td>
          {{ contact.phone }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const contact = ref({})
const route = useRoute()

function getContact () {
  fetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
    .then(response => response.json())
    .then(data => contact.value = data)
}

onMounted(() => {
  getContact()
})
</script>

<style scoped>

</style>