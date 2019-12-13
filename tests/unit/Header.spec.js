import { mount } from '@vue/test-utils'
import Header from "../../src/components/Header";

describe('List test', () => {
    const wrapper = mount(Header);

    it('Check if header displays correct date', () => {
        let today = new Date();
        let date = today.getDate() < 10 ?  `0${today.getDate()}` : today.getDate();
        expect(wrapper.html()).toContain(date)
    })

    it('Check if header displays correct year', () => {
        let today = new Date();
        let year = today.getFullYear();
        expect(wrapper.html()).toContain(year)
    })

    it('Check if header displays correct month', () => {
        let today = new Date();
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
        let month = months[today.getMonth()].slice(0,3).toUpperCase();
        expect(wrapper.html()).toContain(month)
    })

    it('Check if header displays correct week day', () => {
        let today = new Date();
        let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = weekdays[today.getDay()].toUpperCase();
        expect(wrapper.html()).toContain(day)
    })
});