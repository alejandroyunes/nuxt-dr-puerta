<script lang="ts" setup>
import './contact-modal.scss'
import { ref } from 'vue'
import Loading from '~/components/atoms/loading/loading-1/index.vue'
import CrossSvg from '~/components/icons/CrossSvg.vue'


const name = ref('')
const email = ref('')
const phone = ref('')

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

const { toggleModal } = defineProps<{
  toggleModal: () => void
}>()

const submitHandler = async (createForm: Props) => {
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 3000))
  isLoading.value = false
  toggleModal()
}

</script>

<template>
  <section class="contact-modal">
    <div class="modal-inner">
      <div @click="toggleModal" class="btn-close">
        <CrossSvg />
      </div>

      <Loading v-if="isLoading" />

      <div class="form">

        <h2 class="modal-description">{{ $t('contactTitle') }}</h2>

        <FormKit type="form" id="contact-form" #default="{ value, state }"
          @submit="submitHandler">

          <FormKit type="group" name="contact">
            <div class="form-group">
              <label for="name">{{ $t('contactName') }}</label>
              <FormKit type="text" placeholder="Juana Pérez" maxLength="30" minLength="3" v-model="name" name="name"
                validation="required" />
            </div>

            <div class="form-group">
              <label for="email">{{ $t('contactEmail') }}</label>
              <FormKit type="email" placeholder="juanaperez@email.com" v-model="email" name="email"
                validation="required|email" />
            </div>

            <div class="form-group">
              <label for="tel">{{ $t('contactPhone') }}</label>
              <FormKit maxLength="10" minLength="10" inputmode="numeric" name="phone"
                oninput="this.value = this.value.replace(/\D/g, '')"
                :validation="[['matches', /^.{10,10}$/], ['required']]" v-model.number="phone" type="text"
                placeholder="301 456 7890" />
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
