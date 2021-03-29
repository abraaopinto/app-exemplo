import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import PageHeader from '../../src/components/PageHeader.vue'

describe('PageHeader.vue', () => {
  it('Validando a inserção do titulo no pageHeader.', () => {
    const title = 'Titulo inserido header'
    const wrapper = shallowMount(PageHeader, {
      propsData: { title }
    })
    expect(wrapper.text()).to.include(title)
  })
})
