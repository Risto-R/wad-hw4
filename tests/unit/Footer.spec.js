import { mount } from '@vue/test-utils'
import Footer from "../../src/components/Footer";

describe('Footer test', () => {
    const wrapper = mount(Footer);

    it('if "+" button is clicked in Footer component then then "open" property changes to true', () => {
        wrapper.find('span').trigger('click')
        expect(wrapper.vm.open).toBe(true)
    })
});