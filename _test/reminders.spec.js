import { mount } from 'vue-test-utils';
import expect from 'expect';
import Reminders from '../src/component/Reminders.vue';

describe ('Reminders', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(Reminders);
    });

    it ('hides reminders if there are none', () => {
        expect(wrapper.contains('.ul')).toBe(false)
    })

    it ('can add a reminder', () => {
        addReminder('Go fish')
        expect(wrapper.find('ul').text()).toContain('Go fish')
    })

    it ('can remove a reminder', () => {
        addReminder('Go fish')
        addReminder('go to the store')

        let deleteBtn = wrapper.find('ul > li:first-child .delete')
        deleteBtn.trigger('click');
        expect(wrapper.find('ul').text()).not.toContain('Go fish')
    })


    function addReminder(body) {
        let newReminder = wrapper.find('.new-reminder')
        newReminder.element.value = body
        newReminder.trigger('input')
        wrapper.find('button').trigger('click')
    }



});