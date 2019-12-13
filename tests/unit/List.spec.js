import { mount } from '@vue/test-utils'
import List from "../../src/components/List";

describe('List test', () => {
    const wrapper = mount(List);

    it('if no list item is provided List component displays text', () => {
        if(!List.computed.sortedList.length){
            expect(wrapper.html()).toContain("Add your first Todo task")
        }
    })
});