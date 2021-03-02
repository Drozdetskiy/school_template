// eslint-disable-next-line import/extensions
import { IntBuilder } from './IntBuilder.js'
// eslint-disable-next-line import/extensions
import { StringBuilder } from './StringBuilder.js'

function main() {
  const intBuilder = new IntBuilder(10)
  const res = intBuilder
    .plus(2, 3, 2)
    .minus(1, 2)
    .multiply(2)
    .divide(4)
    .mod(3)
    .get()
  console.assert(res, 1)
  console.log(IntBuilder.random(10, 100))

  const strBuilder = new StringBuilder('Hello')
  console.assert(
    strBuilder
      .plus(' all', '!')
      .minus(4)
      .multiply(3).divide(4)
      .remove('l')
      .sub(1, 1)
      .get(),
    'e',
  )
  console.log('Great!')
}

main()
