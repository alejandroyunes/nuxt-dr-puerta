<script lang="ts" setup>
import './contact-modal.scss'
import { ref } from 'vue'
import { reset } from '@formkit/core'
import { AxiosError } from 'axios'
import Loading from '~/components/atoms/loading/loading-icon/index.vue'
import CrossSvg from '~/components/icons/CrossSvg.vue'
import Button from '~/components/atoms/buttons/fill/index.vue'
import { formPost } from '~/utils/apis/FormPostMethod'

const name = ref()
const phone = ref()
const message = ref()

const isResponseError = ref(false)
const isRequestError = ref(false)
const isSuccess = ref(false)
const isLoading = ref(false)
const isConfirmInfoVisible = ref(false)

type Props = {
  contact: {
    name: string
    phone: string
  }
}

const { toggleModal } = defineProps<{
  toggleModal: () => void
}>()

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

    reset('contact-form')

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
  <section class="contact-modal">
    <div class="modal-inner">
      
      <div @click="toggleModal" class="btn-close">
        <CrossSvg />
      </div>

      <div class="form" v-if="!isConfirmInfoVisible">

        <h2 class="modal-description">{{ $t('contactUs') }}</h2>

        <FormKit type="form" id="contact-modal" #default="{ state }" @submit="submitHandler">

          <FormKit type="group" name="contact">
           
            <div class="form-group">
              <label for="name">{{ $t('contactName') }}</label>
              <FormKit type="text" placeholder="Ana Perez" maxLength="30" minLength="3" v-model="name" name="name"
                validation="required" />
            </div>

            <div class="form-group">
              <label for="tel">{{ $t('contactPhone') }}</label>
              <FormKit maxLength="10" minLength="10" inputmode="numeric" name="phone"
                oninput="this.value = this.value.replace(/\D/g, '')"
                :validation="[['matches', /^.{10,10}$/], ['required']]" v-model.number="phone" type="text"
                placeholder="301 456 7890" />
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

            <Button :class="['btn-submit', { 'btn-disabled': !state.valid }]" type="submit" :text="$t('send')" />
          </FormKit>

        </FormKit>

      </div>

      <div v-else class="modal-info">

        <h3 v-show="isLoading" class="modal-title">{{ $t("contactModalLoadingTitle") }}</h3>
        <p v-show="isLoading" class="modal-description">{{ $t("contactModalLoadingInfo") }}</p>
        <Loading v-show="isLoading" />

        <h3 v-show="isSuccess" class="modal-title">{{ $t("contactModalTitle") }}</h3>
        <p v-show="isSuccess" class="modal-description">{{ $t("contactModalDescription") }}</p>

        <h3 v-show="isResponseError" class="modal-title">{{ $t("contactModalResponseErrorTitle") }}</h3>
        <p v-show="isResponseError" class="modal-description">{{ $t("contactModalResponseErrorInfo") }}</p>
        
        <h3 v-show="isRequestError" class="modal-title">{{ $t("contactModalRequestErrorTitle") }}</h3>
        <p v-show="isRequestError" class="modal-description">{{ $t("contactModalRequestErrorInfo") }}</p>

        <Button v-show="!isLoading" class="btn-submit" @click="toggleModal" :text="$t('close')" />

      </div>
    </div>


  </section>
</template>
