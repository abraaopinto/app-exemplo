<template>
  <q-input
    type="text"
    bottom-slots
    dense
    minlength="3"
    v-bind="$attrs"
    v-on="$listeners"
    v-model="content"
    @input="val => content = $utils.sanitize($utils.capitalize(val))"
    :rules="composeRules()"
    :mask="isMask"
    :maxlength="limiteMaximoCampo"
    unmasked-value
  >
    <template v-slot:before>
      <q-icon name="fas fa-user-circle" />
    </template>

    <template v-slot:append>
      <q-icon
        v-if="isValue"
        name="close"
        @click="clear()"
        class="cursor-pointer"
      />
      <q-icon
        v-if="!isSearch && isValue"
        name="search"
        class="cursor-pointer"
        @click="search()"
      />
    </template>
  </q-input>
</template>
<script>
const regexRegraNomeRazaoSocial = /[A-Zi]/i
const cpfMaskFormat = '###.###.###-###'
const cnpjMaskFormat = '##.###.###/####-##'
const textMaskFormat = ''

export default {
  prop: {
    value: Object
  },
  data () {
    return {
      content: '',
      limiteMaximoCampo: 18,
      pessoa: {
        nomeRazaoSocial: '',
        idFiscal: '',
        cpf: '',
        cnpj: ''
      }
    }
  },
  computed: {
    isSearch: function () {
      let qInput = this.$children[0]
      if (qInput) {
        return qInput.hasError
      }
      return false
    },
    isValue: function () {
      return this.$attrs.value !== ''
    },
    isMask: function () {
      if (this.$attrs.value !== undefined && this.$attrs.value !== '' && this.$attrs.value.toString().match(regexRegraNomeRazaoSocial) === null) {
        if (this.$attrs.value !== undefined && this.$attrs.value.length <= 11) return cpfMaskFormat
        if (this.$attrs.value.length > 11) return cnpjMaskFormat
      }
      return textMaskFormat
    }
  },
  methods: {
    clear () {
      this.content = ''
      return this.$emit('clear')
    },
    search () {
      this.content = ''
      this.$emit('search', this.pessoa)
    },
    composeRules () {
      let rules = []
      if (this.$utils.isNotNull(this.$attrs.rules)) {
        this.$attrs.rules.forEach(element => rules.push(element))
      }
      rules.push(val => {
        if (!this.$utils.containsText(this.$attrs.value)) {
          return 'Informe um valor valido!'
        }
        if (val.toString().match(regexRegraNomeRazaoSocial) !== null) {
          this.limiteMaximoCampo = 100
          this.pessoa.nomeRazaoSocial = val
          this.pessoa.idFiscal = ''
          this.pessoa.cpf = ''
          this.pessoa.cnpj = ''
          if (val.length < this.$attrs.minlength) return `Digite pelo menos ${this.$attrs.minlength} caracteres para realizar a pesquisa!`
        } else {
          this.limiteMaximoCampo = 18
          this.pessoa.nomeRazaoSocial = ''
          this.pessoa.idFiscal = val
          if (val.length > 11 && val.length <= 14) {
            this.pessoa.cnpj = val
            this.pessoa.cpf = ''
            return this.$utils.isCnpj(val) || 'CNPJ invalido!'
          }
          if (val.length <= 11) {
            this.pessoa.cpf = val
            this.pessoa.cnpj = ''
            return this.$utils.isCpf(val) || 'CPF invalido!'
          }
        }
      })
      return rules
    }
  }
}
</script>
