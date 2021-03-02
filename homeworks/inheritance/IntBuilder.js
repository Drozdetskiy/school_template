// eslint-disable-next-line import/extensions
import { Builder } from './Builder.js'

function IntBuilder(baseValue) {
  Builder.call(this, baseValue)
}

IntBuilder.prototype = Object.create(Builder.prototype)
IntBuilder.prototype.constructor = Builder
// eslint-disable-next-line func-names
IntBuilder.prototype.plus = function (...values) {
  return this.baseListOperation(values, (acc, number) => acc + number)
}
IntBuilder.prototype.minus = function (...values) {
  return this.baseListOperation(values, (acc, number) => acc - number)
}
IntBuilder.prototype.multiply = function (value) {
  return this.baseOperation(value, (acc, number) => acc * number)
}
IntBuilder.prototype.divide = function (value) {
  return this.baseOperation(value, (acc, number) => acc / number)
}
IntBuilder.prototype.mod = function (value) {
  return this.baseOperation(value, (acc, number) => acc % number)
}

IntBuilder.random = function (from, to) {
  return Math.random() * (to - from) + from
}

export { IntBuilder }
