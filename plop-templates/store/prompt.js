import { notEmpty } from '../../src/utils/index.js'

// https://github.com/plopjs/plop/blob/main/packages/plop/tests/examples/javascript/plopfile.js

export default {
  description: 'generate vue store',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'store name please(camelCase):customStore',
      validate: notEmpty('name')
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: 'Select which way to create store:',
      choices: [
        {
          name: 'Option Store',
          value: 'option',
          checked: true
        },
        {
          name: 'Setup Store',
          value: 'setup'
        }
      ],
      validate (value) {
        if (value.includes('option') && value.includes('setup')) {
          return 'only require a Option Store or Setup Store'
        }
        return true
      }
    }
  ],
  actions: (data) => {
    const name = '{{ camelCase  name }}'
    const actions = [
      {
        type: 'add',
        path: `src/stores/${name}.js`,
        templateFile: 'plop-templates/store/index.hbs',
        data: {
          name,
          option: data.blocks.includes('option'),
          setup: data.blocks.includes('setup')
        }
      }
    ]
    return actions
  }
}
