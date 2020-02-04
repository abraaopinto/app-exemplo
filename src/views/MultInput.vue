<template>
  <q-page>
    <h1>Mult input</h1>
    <q-card>
      <q-card-section>
        <q-input
          bottom-slots
          v-model="text"
          label="Informe o CPF, CNPJ, Nome ou Razão Social!"
          counter
          maxlength="100"
          :dense="dense"
        >
          <template v-slot:before>
            <q-icon name="fas fa-user-circle" />
          </template>

          <template v-slot:append>
            <q-icon
              v-if="text !== ''"
              name="close"
              @click="text = ''"
              class="cursor-pointer"
            />
            <q-icon name="search" />
          </template>

          <template v-slot:hint>
            Field hint
          </template>

        </q-input>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
export default {

}
</script>
