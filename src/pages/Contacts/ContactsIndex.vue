<template>
  <div>
    <h1>Contacts</h1>
    <input
      type="text"
      v-model="filter"
      placeholder="Фильтр"
    >
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>ФИО</th>
        <th>Номер телефона</th>
        <th>Email адрес</th>
        <th>Теги</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="(contact, index) in computedContacts"
        :key="index"
      >
        <td>
          {{ index + 1 }}
        </td>
        <td>
          {{ contact.name }}
        </td>
        <td>
          {{ contact.phone }}
        </td>
        <td>
          {{ contact.email }}
        </td>
        <td>
          #{{ contact.tag }}
        </td>
        <td>
          <div class="d-flex">
            <button
              class="btn btn-icon btn-icon--delete"
              @click="deleteContact(index)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 284.011 284.011" style="enable-background:new 0 0 284.011 284.011;" xml:space="preserve">
<g>
	<g>
		<path d="M235.732,66.214l-28.006-13.301l1.452-3.057c6.354-13.379,0.639-29.434-12.74-35.789L172.316,2.611
			c-6.48-3.079-13.771-3.447-20.532-1.042c-6.76,2.406-12.178,7.301-15.256,13.782l-1.452,3.057L107.07,5.106
			c-14.653-6.958-32.239-0.698-39.2,13.955L60.7,34.155c-1.138,2.396-1.277,5.146-0.388,7.644c0.89,2.499,2.735,4.542,5.131,5.68
			l74.218,35.25h-98.18c-2.797,0-5.465,1.171-7.358,3.229c-1.894,2.059-2.839,4.815-2.607,7.602l13.143,157.706
			c1.53,18.362,17.162,32.745,35.588,32.745h73.54c18.425,0,34.057-14.383,35.587-32.745l11.618-139.408l28.205,13.396
			c1.385,0.658,2.845,0.969,4.283,0.969c3.74,0,7.328-2.108,9.04-5.712l7.169-15.093C256.646,90.761,250.386,73.175,235.732,66.214z
			 M154.594,23.931c0.786-1.655,2.17-2.905,3.896-3.521c1.729-0.614,3.59-0.521,5.245,0.267l24.121,11.455
			c3.418,1.624,4.878,5.726,3.255,9.144l-1.452,3.057l-36.518-17.344L154.594,23.931z M169.441,249.604
			c-0.673,8.077-7.55,14.405-15.655,14.405h-73.54c-8.106,0-14.983-6.328-15.656-14.405L52.35,102.728h129.332L169.441,249.604z
			 M231.62,96.835l-2.878,6.06L83.057,33.701l2.879-6.061c2.229-4.695,7.863-6.698,12.554-4.469l128.661,61.108
			C231.845,86.509,233.85,92.142,231.62,96.835z" fill="var(--current-color)"/>
	</g>
</g>
</svg>
            </button>
            <router-link
              :to="{
                name: 'Contacts Single',
                params: {
                  id: contact.id
                }
              }"
              tag="button"
              class="btn btn-icon btn-icon--light"
            >
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   width="442.04px" height="442.04px" viewBox="0 0 442.04 442.04"
                   style="enable-background:new 0 0 442.04 442.04;"
                   xml:space="preserve"
              >
              <path fill="var(--current-color)" d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203
			c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219
			c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367
			c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021
			c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212
			c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071
			c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"/>
                <path fill="var(--current-color)" d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188
			c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993
			c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5
			s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"/>
                <path fill="var(--current-color)"
                      d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z"/>
</svg>
            </router-link>
          </div>
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <input
            type="text"
            v-model="newContact.name"
            placeholder="Name"
          >
        </td>
        <td>
          <input
            type="text"
            v-model="newContact.phone"
            placeholder="Phone"
          >
        </td>
        <td>
          <input
            type="text"
            v-model="newContact.email"
            placeholder="Email"
          >
        </td>
        <td>
          <select
            v-model="newContact.tag"
          >
            <option
              v-for="(option, index) in tagsList"
              :key="index"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
        </td>
        <td>
          <button
            class="btn btn-icon btn-icon--light"
            @click="addContact"
          >
            +
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';

const contacts = ref([])
const filter = ref('')
const tagsList = ref(['Семья', 'Работа', 'Друзья'])
const newContact = ref({
  name: '',
  email: '',
  phone: '',
  tag: ''
})

const computedContacts = computed(() => {
  return contacts.value.filter(item => {
    if(
      item.name.toLowerCase().includes(filter.value.toLowerCase()) ||
      item.phone.toLowerCase().includes(filter.value.toLowerCase()) ||
      item.email.toLowerCase().includes(filter.value.toLowerCase()) ||
      item.tag.toLowerCase().includes(filter.value.toLowerCase())
    ){
      return item
    }
  })
})

function getContacts () {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => contacts.value = data)
    .then(() => {
      contacts.value.forEach(item => {
        item.tag = tagsList.value[Math.floor(Math.random() * tagsList.value.length)]
        return item
      })
    })
}

function deleteContact (index) {
  contacts.value.splice(index, 1)
}

function addContact () {
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'post',
    body: JSON.stringify(newContact.value)
  })
    .then(res => res.json())
    .then(({id}) => newContact.value.id = id)
    .then(() => contacts.value.push(newContact.value))
    .then(() => {
      newContact.value = {
        name: '',
        email: '',
        phone: '',
        tag: ''
      }
    })
}

onMounted(() => {
  getContacts()
})
</script>

<style lang="scss" scoped>
table {
  th, td {
    padding: 10px;
    text-align: left;
  }
}
</style>