<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          App Exemplos
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
      class=" q-pa-sm"
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item
          clickable
          to="/"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
            <q-item-label caption>Pagina inicial.</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          to="MultInput"
        >
          <q-item-section avatar>
            <q-icon name="far fa-address-card" />
          </q-item-section>
          <q-item-section>
            <q-item-label>MultInput</q-item-label>
            <q-item-label caption>Componente para multiplas entradas de dados.</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          to="about"
        >
          <q-item-section avatar>
            <q-icon name="far fa-comment-dots" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Sobre</q-item-label>
            <q-item-label caption>Pagina Sobre.</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://quasar.dev"
        >
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://github.com/quasarframework/"
        >
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://chat.quasar.dev"
        >
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://forum.quasar.dev"
        >
          <q-item-section avatar>
            <q-icon name="forum" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://twitter.com/quasarframework"
        >
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="q-pa-md">
      <router-view></router-view>
    </q-page-container>
    <q-footer>
      <q-toolbar>
        <q-toolbar-title>
          <q-chip color="blue-10" text-color="white" clickable
          @click="openLink">
          <q-avatar size="sm">
            <img src="https://avatars2.githubusercontent.com/u/49882179?v=4">
          </q-avatar>
          Abraão Pinto
          </q-chip>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',

  components: {},
  methods: {
    openLink () {
      openURL('https://github.com/abraaopinto')
    }
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style lang="stylus" scoped>
header {
  background: linear-gradient(145deg, #027be3 11%, #014a88 75%);
}
footer {
  background: linear-gradient(145deg, #027be3 11%, #014a88 75%);
}
</style>
