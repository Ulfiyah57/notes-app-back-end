import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import daStyle from "eslint-config-dicodingacademy";

export default defineConfig([
  daStyle, // Gaya dari Dicoding Academy

  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      indent: ["error", 2], // Gunakan 2 spasi untuk indentasi
      "no-trailing-spaces": "error", // Tidak boleh ada spasi di akhir baris
      "eol-last": ["error", "always"], // Tambahkan baris kosong di akhir file
    },
  },
]);
