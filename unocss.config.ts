import { defineConfig, presetAttributify, presetUno, transformerDirectives } from 'unocss';

export default defineConfig({
  shortcuts: [
    {
      'custom-container': 'dark:bg-#181818 dark:text-white light:bg-white rounded-10px',
      'custom-rounded': 'rounded-10px',
      'flex-c-c': 'flex justify-center items-center',
      'flex-align-c': 'flex items-center',
      'flex-bw': 'flex justify-between',
      'flex-bw-c': 'flex justify-between items-center',
      'detail-container': 'flex flex-col gap-10px h-full w-full p-l-13px p-r-13px',
      '...': 'line-clamp-1',
    },
  ],
  transformers: [transformerDirectives()],
  presets: [presetAttributify({}), presetUno()],
});