// Form.stories.jsx
import { userEvent, within } from "@storybook/testing-library";
import Form from "./Form.jsx";

export default {
  title: "Form",
  component: Form,

  async setup(browser) {
    console.log("setup hook", browser.capabilities);
  },

  async preRender(browser) {
    console.log("preRender hook");
  },

  async postRender(browser) {
    console.log("postRender hook");
  },

  async teardown(browser) {
    console.log("teardown hook");
  },
};

const Template = (args) => <Form {...args} />;

// Component story for an empty form
export const EmptyForm = Template.bind({});

// Component story simulating filling in the form
export const FilledForm = Template.bind({});

FilledForm.play = async ({ canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);

  // 👇 Simulate interactions with the component
  await userEvent.type(canvas.getByTestId("new-todo-input"), "outdoors hike");
  await userEvent.click(canvas.getByRole("button"));
};

FilledForm.test = async (browser, { component }) => {
  // 👇 Run commands and assertions in the Nightwatch context
  await expect(component).to.be.visible;
};
