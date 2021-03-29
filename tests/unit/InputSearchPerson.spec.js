import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import InputSearchPerson from '../../src/components/InputSearchPerson.vue'
import Vue from 'vue'
import { QInput } from 'quasar'
import utils from '../../src/utils/utils'

Vue.prototype.$utils = utils
debugger
describe('Testes - InputSearchPerson.vue', () => {
  // renderiza o componente
  const wrapper = shallowMount(InputSearchPerson)

  it('Verificando a renderização do componente InputSearchPerson', () => {
    expect(wrapper.find(InputSearchPerson).exists()).to.equal(true)
  })

  it('Verificando a renderização do sub componente QInput', () => {
    expect(wrapper.find(QInput).exists()).to.equal(true)
  })

  it('Verificando a inclusão de dados', () => {
    wrapper.setData({ content: 'a' })
    expect(wrapper.find(QInput).contains('fd')).to.equal(true)
  })
})
