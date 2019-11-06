import { mount } from 'vue-test-utils';
import expect from 'expect';
import couponCode from '../src/component/couponCode.vue';

describe ('coupons', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(couponCode);
    });

    it('contains input coupon code', ()=> {
       expect(wrapper.contains('input.coupon-code')).toBe(true)
    });

    it('apply coupon code', ()=> {
       let input = wrapper.find('input.coupon-code')
        input.element.value = '50OFF'
        input.trigger('input')

        expect(wrapper.vm.valid).toBe(true)

        expect(wrapper.html()).toContain('Redeem: 50% off')
    });




    it('brodcast a coupon has been applied', ()=> {
       wrapper.setData({code: '50OFF'})
        wrapper.vm.validate()

        expect(wrapper.emitted().applied).toBeTruthy()
        expect(wrapper.emitted().applied[0]).toEqual([50])
    });

    it('has fake coupon', ()=> {
        wrapper.setData({code: 'NOTREAL'})
        wrapper.vm.validate()

        expect(wrapper.vm.valid).toBe(false)

        expect(wrapper.html()).toContain('Invalid coupon!')
    });
});