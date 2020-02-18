<template>
  <div id="page-header" class="q-pa-sm q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el :label="currentRoute" />
    </q-breadcrumbs>
    <q-toolbar>
      <q-toolbar-title>
        {{ title }}
      </q-toolbar-title>
    </q-toolbar>
  </div>
</template>
<style>
</style>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      currentRoute: window.location.pathname
    }
  }
}
</script>
