import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import { scss, globalStyle } from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import alias from "rollup-plugin-alias";

const aliases = {
  resolve: [".json", ".js", ".html", ".svelte"],
  "@": __dirname + "/src"
};

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/bundle.js"
  },
  plugins: [
    alias(aliases),
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      extensions: [".svelte", ".svx"], // here actually
      preprocess: [
        scss({ data: `@import "src/styles/settings/_colors.scss";` }),
        globalStyle(),
        mdsvex({
          extension: ".svx" // the default is '.svexy', if you lack taste, you might want to change it
        })
      ],
      // preprocess: autoProcess(),
      css: css => {
        css.write("public/bundle.css");
      }
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve({ browser: true }),
    commonjs(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
