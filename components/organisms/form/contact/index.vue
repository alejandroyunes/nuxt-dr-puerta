<script lang="ts" setup>
import './contact-form.scss'
import { ref } from 'vue'
import Loading from '~/components/atoms/loading/loading-1/index.vue'

const name = ref('')
const email = ref('')
const message = ref('')

const isModalOpen = ref(false)
const isResponseError = ref(false)
const isRequestError = ref(false)
const isSuccess = ref(false)
const isFormSubmitting = ref(false)
const isLoading = ref(false)


type Props = {
  email: string
  password: string
  confirmPassword: string
}

const submitHandler = async (createForm: Props) => {
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 3000))
  isLoading.value = false
}

</script>

<template>
  <section class="contact-form">
    <div class="modal-inner">

      <Loading v-if="isLoading" />

      <div class="form">

        <FormKit type="form" id="support-form" #default="{ value, state }"
          @submit="submitHandler">

          <FormKit type="group" name="support">

            <div class="form-group-inline">
              <div class="form-group">
                <label for="name">{{ $t('contactName') }}</label>
                <FormKit type="text" placeholder="Juana Perez" maxLength="30" minLength="3" v-model="name" name="name"
                  validation="required" />
            </div>

            <div class="form-group">
                <label for="email">{{ $t('contactEmail') }}</label>
                <FormKit type="email" placeholder="juanaperez@email.com" v-model="email" name="email"
                  validation="required|email" />
              </div>
            </div>

            <div class="form-group">
              <label for="message">{{ $t('contactMessage') }}</label>
              <FormKit
                type="textarea"
                name="message"
                placeholder="Mensaje"
                maxLength="85"
                v-model="message"
                validation="required" />
            </div>

            <button :class="['btn-submit', { 'btn-disabled': !state.valid }]" type="submit">
              <span>{{ $t('contactSubmit') }}</span>
            </button>
          </FormKit>

        </FormKit>

      </div>

    </div>
  </section>
</template>
