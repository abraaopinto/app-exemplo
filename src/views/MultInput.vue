<template>
  <q-page>
    <h1>Mult input</h1>
    <q-card>
      <q-card-section>
        <q-input
          type="text"
          bottom-slots
          v-model="value"
          label="Informe o CPF, CNPJ, Nome ou Razão Social!"
          counter
          @keyup="validateInput()"
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
              @click="validateInput()"
              class="cursor-pointer"
            />
          </template>

          <template
            v-if=" value !== ''"
            v-slot:hint
          >
            <p v-if=" cpf !== ''"> CPF: {{ cpf }}</p>
            <p v-if=" cnpj !== ''"> CNPJ: {{ cnpj }}</p>
            <p v-if=" nomeOuRazaoSocial !== ''"> Nome ou Razão Social: {{ nomeOuRazaoSocial }}</p>
          </template>

        </q-input>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
export default {
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
    validateInput () {
      const regexRegra1 = /[A-Zi]/i

      // Regra 1 - somente nomeOuRazaoSocial recebe o valor de value pois o campo contem letras e numeros.
      if (this.value.match(regexRegra1) !== null) {
        this.limiteMaximoCampo = 100
        this.nomeOuRazaoSocial = this.value
        this.cpf = ''
        this.cnpj = ''
      } else {
        /*  Analise dos demais casos onde todos os digitos são numericos. */
        // Reseta o valor de nomeOuRazaoSocial.
        this.nomeOuRazaoSocial = ''

        // Limita o tamanho do campo para o maior formato.
        this.limiteMaximoCampo = 18
        // Realizar as validações para os demais variaveis.

        // Verifica se é um CPF
        if (this.validarCPF(this.value)) {
          this.cpf = this.value
          console.log('passou aqui cpf')
          this.limiteMaximoCampo = 14
        } else {
          this.cpf = ''
        }

        // Verifica se é um CNPJ
        if (this.validarCNPJ(this.value)) {
          this.limiteMaximoCampo = 18
          this.cnpj = this.value
          console.log('passou aqui cnpj')
        } else {
          this.cnpj = ''
        }
      }
    },
    validarCPF (pCpf) {
      pCpf = pCpf.replace(/[^\d]+/g, '').padStart(11, '0')

      if (pCpf.length !== 11 ||
        pCpf === '00000000000' ||
        pCpf === '11111111111' ||
        pCpf === '22222222222' ||
        pCpf === '33333333333' ||
        pCpf === '44444444444' ||
        pCpf === '55555555555' ||
        pCpf === '66666666666' ||
        pCpf === '77777777777' ||
        pCpf === '88888888888' ||
        pCpf === '99999999999') return false

      // Valida 1o digito
      let add = 0
      let rev = 0

      for (let i = 0; i < 9; i++) add += parseInt(pCpf.charAt(i)) * (10 - i)

      rev = 11 - (add % 11)

      if (rev === 10 || rev === 11) rev = 0

      if (rev !== parseInt(pCpf.charAt(9))) return false

      // Valida 2o digito
      add = 0
      for (let j = 0; j < 10; j++) add += parseInt(pCpf.charAt(j)) * (11 - j)

      rev = 11 - (add % 11)

      if (rev === 10 || rev === 11) rev = 0

      if (rev !== parseInt(pCpf.charAt(10))) return false

      return true
    },
    validarCNPJ (pCnpj) {
      pCnpj = pCnpj.replace(/[^\d]+/g, '').padStart(14, '0')

      if (pCnpj === '') return false

      if (pCnpj.length !== 14) return false
      // Elimina CNPJs invalidos conhecidos
      if (pCnpj === '00000000000000' ||
        pCnpj === '11111111111111' ||
        pCnpj === '22222222222222' ||
        pCnpj === '33333333333333' ||
        pCnpj === '44444444444444' ||
        pCnpj === '55555555555555' ||
        pCnpj === '66666666666666' ||
        pCnpj === '77777777777777' ||
        pCnpj === '88888888888888' ||
        pCnpj === '99999999999999'
      ) { return false }
      // Valida DVs
      let tamanho = pCnpj.length - 2
      let numeros = pCnpj.substring(0, tamanho)
      let digitos = pCnpj.substring(tamanho)
      let soma = 0
      let pos = tamanho - 7
      for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--
        if (pos < 2) pos = 9
      }
      let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
      if (resultado !== digitos.charAt(0)) return false
      tamanho = tamanho + 1
      numeros = pCnpj.substring(0, tamanho)
      soma = 0
      pos = tamanho - 7
      for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--
        if (pos < 2) pos = 9
      }
      resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
      if (resultado !== digitos.charAt(1)) return false
      return true
    }
  }
}
</script>
