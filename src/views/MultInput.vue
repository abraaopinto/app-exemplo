<template>
  <q-page>
    <PageHeader title="MultInput" />
    <q-card>
      <q-card-section>
        <q-input
          type="text"
          bottom-slots
          v-model="value"
          label="Informe o CPF, CNPJ, Nome ou Razão Social!"
          counter
          @keypress="analisarValor()"
          @input="val => { value = this.utils.helpers.removerCaracteresEspeciaisCaixaAlta(val) }"
          dense
          minlength="3"
          v-bind:maxlength="limiteMaximoCampo"
        >
          <template v-slot:before>
            <q-icon name="fas fa-user-circle" />
          </template>

          <template v-slot:append>
            <q-icon
              v-if="value !== ''"
              name="close"
              @click="value = ''"
              class="cursor-pointer"
            />
            <q-icon
              name="search"
              class="cursor-pointer"
            />
          </template>

          <template v-if="value !== ''" v-slot:hint>
            <p v-if="cpf !== ''">CPF: {{ cpf }}</p>
            <p v-if="cnpj !== ''">CNPJ: {{ cnpj }}</p>
            <p v-if="nomeOuRazaoSocial !== ''">
              Nome ou Razão Social: {{ nomeOuRazaoSocial }}
            </p>
          </template>
        </q-input>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
import PageHeader from '../components/PageHeader'

export default {
  components: {
    PageHeader
  },
  data () {
    return {
      value: '',
      cpf: '',
      cnpj: '',
      nomeOuRazaoSocial: '',
      limiteMaximoCampo: 100
    }
  },
  methods: {
    analisarValor () {
      console.log(utils.helpers.removerCaracteresEspeciaisCaixaAlta(this.value))
    }
  }
}
</script>
