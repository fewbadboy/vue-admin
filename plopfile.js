import componentGenerator from './plop-templates/component/prompt.js'
import storeGenerator from './plop-templates/store/prompt.js'

export default function (plop) {
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('store', storeGenerator)
}
