import {mount} from 'vue-test-utils'
import Counter from '../src/component/Counter'
import expect from 'expect'

describe('Counter', ()=> {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(Counter);
    })

    it('default to zero', () => {
        expect(wrapper.vm.count).toBe(0);
    })

    it('increment the count', () => {
        expect(wrapper.vm.count).toBe(0);

        wrapper.find('#btn').trigger('click')

        expect(wrapper.vm.count).toBe(1);

    })

    it('contains current count', () => {
        expect(wrapper.find('.count').html()).toContain(0);
        wrapper.find('#btn').trigger('click')
        expect(wrapper.find('.count').html()).toContain(1);

    })
})
