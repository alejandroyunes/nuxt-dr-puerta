<script lang="ts" setup>
import './contact-form.scss'
import { ref } from 'vue'
import { AxiosError } from 'axios'
import { reset } from '@formkit/core'
import Loading from '~/components/atoms/loading/loading-icon/index.vue'
import { formPost } from '~/utils/apis/FormPostMethod'
import Button from '~/components/atoms/buttons/fill/index.vue'

const name = ref('')
const email = ref('')
const message = ref('')

const isResponseError = ref(true)
const isRequestError = ref(false)
const isSuccess = ref(false)
const isLoading = ref(false)
const isConfirmInfoVisible = ref(false)

type Props = {
  contact: {
    name: string
    email: string
    message: string
  }
}

const submitHandler = async (createForm: Props) => {
  isLoading.value = true
  isConfirmInfoVisible.value = true

  try {
    isSuccess.value = false
    isRequestError.value = false
    isResponseError.value = false

    const { contact } = createForm
    await formPost(contact)

    isLoading.value = false
    isSuccess.value = true

    reset('contact-page')

  } catch (error) {
    isLoading.value = false

    const axiosError = error as AxiosError<Error>

    if (axiosError.response) {
      isResponseError.value = true
    } else if (axiosError.request) {
      isRequestError.value = true
    }
  }

  isLoading.value = false
}

</script>

<template>
  <section class="contact-wrapper">
    <div class="contact-form-inner">

      <div class="contact-form" v-if="!isConfirmInfoVisible">

        <FormKit type="form" id="contact-page" #default="{ state }" @submit="submitHandler">

          <FormKit type="group" name="contact">

            <div class="form-group-inline">
              <div class="form-group">
                <label for="name">{{ $t('contactName') }}</label>
                <FormKit
                  type="text"
                  placeholder="Ana Perez"
                  maxLength="30"
                  minLength="3"
                  v-model="name"
                  name="name"
                  validation="required" />
              </div>

              <div class="form-group">
                <label for="email">{{ $t('contactEmail') }}</label>
                <FormKit
                  type="email"
                  placeholder="juanaperez@email.com"
                  v-model="email"
                  name="email"
                  validation="required|email" />
              </div>
            </div>

            <div class="form-group">
              <label for="message">{{ $t('contactMessage') }}</label>
              <FormKit
                type="textarea"
                name="message"
                :placeholder="$t('contactMessage')"
                maxLength="85"
                v-model="message"
                validation="required" />
            </div>

            <button :class="['btn-submit', { 'btn-disabled': !state.valid }]" type="submit">
              <span>{{ $t('send') }}</span>
            </button>

          </FormKit>

        </FormKit>

      </div>

      <div v-else class="contact-form-info">

        <h3 v-show="isLoading" class="modal-title">{{ $t("contactModalLoadingTitle") }}</h3>
        <p v-show="isLoading" class="modal-description">{{ $t("contactModalLoadingInfo") }}</p>
        <Loading v-show="isLoading" />

        <h3 v-show="isSuccess" class="modal-title">{{ $t("contactModalTitle") }}</h3>
        <p v-show="isSuccess" class="modal-description">{{ $t("contactModalDescription") }}</p>

        <h3 v-show="isResponseError" class="modal-title">{{ $t("contactModalResponseErrorTitle") }}</h3>
        <p v-show="isResponseError" class="modal-description">{{ $t("contactModalResponseErrorInfo") }}</p>

        <h3 v-show="isRequestError" class="modal-title">{{ $t("contactModalRequestErrorTitle") }}</h3>
        <p v-show="isRequestError" class="modal-description">{{ $t("contactModalRequestErrorInfo") }}</p>

        <Button v-show="!isLoading && !isSuccess" class="btn-submit" :text="$t('close')" @click="isConfirmInfoVisible = false" />

      </div>

    </div>

  </section>
</template>
