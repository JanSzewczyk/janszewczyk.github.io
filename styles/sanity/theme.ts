import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "rgb(250, 250, 250)",
  "--my-black": "rgb(28, 28, 28)",
  "--my-typography": "rgb(242, 242, 242)",
  "--my-blue": "rgb(21, 143, 255)",
  "--my-red": "rgb(247, 65, 64)",
  "--my-yellow": "rgb(255, 159, 45)",
  "--my-green": "rgb(22, 203, 73)",
  "--my-gray": "rgb(96, 96, 96)"
};

export const theme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": props["--my-gray"],
  "--gray-base": props["--my-gray"],

  "--component-bg": "rgb(39, 39, 39)",
  "--component-text-color": props["--my-typography"],

  /* Brand */
  "--brand-primary": props["--my-blue"],

  // Default button
  "--default-button-color": props["--my-gray"],
  "--default-button-primary-color": props["--my-blue"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  /* State */
  "--state-info-color": props["--my-blue"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  /* Navbar */
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-typography"],

  "--focus-color": props["--my-blue"]
});
