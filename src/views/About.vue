<template>
  <q-page>
    <PageHeader title="Sobre" />
    <p>
      This is an about page {{ currentRoute }}
    </p>
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
      currentRoute: window.location.pathname
    }
  }
}
</script>
