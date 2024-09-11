import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import app from "~/app.vue";

describe("App", () => {
  const wrapper = mount(app)

  it('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
