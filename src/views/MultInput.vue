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
          @clear="clearForm()"
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
    clearForm () {
      this.texto = ''
    },
    pesquisar: function (pessoa) {
      let mensagemRetorno = this.$utils.containsText(pessoa.nomeRazaoSocial) ? `Confirma realizar a pesquisa por Nome ou Razão Social: ${pessoa.nomeRazaoSocial}` : `Confirma realizar a pesquisa Identificação Fiscal: ${pessoa.idFiscal}`
      this.$q.dialog({
        title: 'Pesquisar',
        message: mensagemRetorno,
        ok: {
          push: true
        },
        cancel: {
          push: true,
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        console.log('OK')
      }).onCancel(() => {
        console.log('Cancel')
      }).onDismiss(() => {
        this.clearForm()
        console.log('I am triggered on both OK and Cancel')
      })
    }
  }
}
</script>
