import { mount } from 'vue-test-utils';
import Counter from '../src/component/Counter.vue';
import expect from 'expect';

describe ('Counter', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Counter);
    });

    it ('defaults to a count of 0', () => {
        expect(wrapper.vm.count).toBe(0);
    });

    it ('increments the count when the increment button is clicked', () => {
        expect(wrapper.vm.count).toBe(0);
        expect(wrapper.find('.decrement').hasStyle('display', 'none')).toBe(true)
        wrapper.find('.increment').trigger('click');
        expect(wrapper.find('.decrement').hasStyle('display', 'none')).toBe(false)
        expect(wrapper.vm.count).toBe(1);
    });

    it ('increments the count when the decrement button is clicked', () => {
        wrapper.setData({ count: 4 })
        wrapper.find('.decrement').trigger('click')
        expect(wrapper.vm.count).toBe(3);
    });

    it ('never goes below 0', () => {
        expect(wrapper.vm.count).toBe(0);

        wrapper.find('.decrement').trigger('click');

        expect(wrapper.vm.count).toBe(0);
    });

    it ('presents the current count', () => {
        expect(wrapper.find('.count').html()).toContain(0);

        wrapper.find('button').trigger('click');

        expect(wrapper.find('.count').html()).toContain(1);
    });

});