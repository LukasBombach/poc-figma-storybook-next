import { configure } from "@storybook/react";

const loader = require.context("../src/components", true, /\.stories\.tsx?$/);

configure(loader, module);
