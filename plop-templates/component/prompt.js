import { notEmpty } from '../../src/utils/index.js'

// https://github.com/plopjs/plop/blob/main/packages/plop/tests/examples/javascript/plopfile.js

export default {
  description: 'generate vue component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'component name please(PascalCase):',
      validate: notEmpty('name')
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: 'Blocks:',
      choices: [
        {
          name: '<script setup>',
          value: 'setup',
          checked: false
        },
        {
          name: '<template>',
          value: 'template',
          checked: true
        },
        {
          name: '<script>',
          value: 'script',
          checked: true
        },
        {
          name: '<style lang="scss">',
          value: 'style',
          checked: true
        }
      ],
      validate (value) {
        if (value.includes('setup') && value.includes('script')) {
          return 'only require a <script setup> or <script> tag'
        }
        return true
      }
    }
  ],
  actions: (data) => {
    const name = '{{ kebabCase  name}}'
    const actions = [
      {
        type: 'add',
        path: `src/views/${name}/index.vue`,
        templateFile: 'plop-templates/component/index.hbs',
        data: {
          name: name,
          setup: data.blocks.includes('setup'),
          template: data.blocks.includes('template'),
          script: data.blocks.includes('script'),
          style: data.blocks.includes('style')
        }
      }
    ]
    return actions
  }
}
