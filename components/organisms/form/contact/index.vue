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
  <section class="contact-form-inner">

    <div class="contact-form" v-if="!isConfirmInfoVisible">

      <FormKit type="form" id="contact-page" #default="{ state }" @submit="submitHandler">

        <FormKit type="group" name="contact">

          <div class="form-group-inline">
            <div class="form-group-input">
              <label for="name">{{ $t('contactName') }}</label>
              <FormKit
                type="text"
                placeholder="Ana"
                maxLength="30"
                minLength="3"
                v-model="name"
                name="name"
                validation="required" />
            </div>

            <div class="form-group-input">
              <label for="email">{{ $t('contactEmail') }}</label>
              <FormKit
                type="email"
                placeholder="ana@email.com"
                v-model="email"
                name="email"
                validation="required|email" />
            </div>
          </div>

          <div class="form-group-textarea">
            <label for="message">{{ $t('contactMessageLabel') }}</label>
            <FormKit
              type="textarea"
              name="message"
              :placeholder="$t('contactMessage')"
              maxLength="85"
              v-model="message"
              validation="required" />
          </div>

          <Button :disabled="!state.valid" :text="$t('send')" type="submit" /> 

        </FormKit>

      </FormKit>

    </div>

    <div v-else class="contact-form-info">

      <h3 v-show="isLoading" class="contact-form-title">{{ $t("contactModalLoadingTitle") }}</h3>
      <p v-show="isLoading" class="contact-form-description">{{ $t("contactModalLoadingInfo") }}</p>
      <Loading v-show="isLoading" />

      <h3 v-show="isSuccess" class="contact-form-title">{{ $t("contactModalTitle") }}</h3>
      <p v-show="isSuccess" class="contact-form-description">{{ $t("contactModalDescription") }}</p>

      <h3 v-show="isResponseError" class="contact-form-title">{{ $t("contactModalResponseErrorTitle") }}</h3>
      <p v-show="isResponseError" class="contact-form-description">{{ $t("contactModalResponseErrorInfo") }}</p>

      <h3 v-show="isRequestError" class="contact-form-title">{{ $t("contactModalRequestErrorTitle") }}</h3>
      <p v-show="isRequestError" class="contact-form-description">{{ $t("contactModalRequestErrorInfo") }}</p>

      <Button v-show="!isLoading && !isSuccess" :text="$t('close')" @click="isConfirmInfoVisible = false" />

    </div>

  </section>
</template>
