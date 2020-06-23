<template>
  <q-page>
    <PageHeader title="MultInput" />
    <q-card>
      <q-card-section>
        <inputSearchPessoa
          type="text"
          bottom-slots
          v-model="texto"
          label="Informe o CPF, CNPJ, Nome ou Razão Social!"
          counter
          dense
          minlength="3"
          minCaractersSearch="3"
          @search="pesquisar"
          @clear="texto=''"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
import PageHeader from '../components/PageHeader'
import inputSearchPessoa from '../components/inputSearchPerson'
export default {
  components: {
    PageHeader,
    inputSearchPessoa
  },
  data () {
    return {
      texto: ''
    }
  },
  methods: {
    pesquisar: function (pessoa) {
      alert(`${pessoa.nomeRazaoSocial} ${pessoa.idFiscal}`)
    }
  }
}
</script>
