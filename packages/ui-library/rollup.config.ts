import { dirname } from "path";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import ignore from "rollup-plugin-ignore";
import del from "rollup-plugin-delete";
import linaria from "linaria/rollup";
import cssnano from "cssnano";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  external: ["react"],
  plugins: [
    del({
      targets: [dirname(pkg.main), dirname(pkg.module), dirname(pkg.style)],
    }),
    ignore(["linaria"]),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    postcss({
      extract: pkg.style,
      plugins: [cssnano({ preset: "default" })],
    }),
    linaria(),
    terser(),
  ],
};
