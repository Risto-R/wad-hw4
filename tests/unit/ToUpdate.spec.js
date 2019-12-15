import { mount } from "@vue/test-utils";

import List from "../../src/components/List.vue";
import Item from "../../src/models/Item.js";

describe("Update item", () => {
    const wrapper = mount(List,{
        propsData: {
            list: [new Item("testing")]
        }
    });

    it("When an item in the list is marked as done the item is updated correctly", () => {
        if (List.computed.sortedList.length) {
            let originValue = wrapper.props().list[0].done;
            wrapper.find('.list-item:nth-of-type(1) span').trigger('click');
            let newValue = wrapper.props().list[0].done;
            expect(newValue).toEqual(!originValue);
        }
    });
});