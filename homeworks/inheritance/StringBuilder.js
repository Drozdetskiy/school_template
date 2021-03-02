// eslint-disable-next-line import/extensions
import { Builder } from './Builder.js'

class StringBuilder extends Builder {
  plus(...values) {
    return this.baseListOperation(values, (baseValue, strs) => baseValue + strs)
  }

  minus(value) {
    return this.baseOperation(value, (baseValue, number) => baseValue.slice(0, -number))
  }

  multiply(value) {
    return this.baseOperation(value, (baseValue, number) => baseValue.repeat(number))
  }

  divide(value) {
    return this.baseOperation(
      value,
      (baseValue, number) => baseValue.slice(0, Math.floor(baseValue.length / number)),
    )
  }

  remove(value) {
    return this.baseOperation(
      value, (baseValue, char) => baseValue.replace(new RegExp(char, 'g'), ''),
    )
  }

  sub(...params) {
    return this.baseOperation(
      params, (baseValue, [from, len]) => baseValue.slice(from, from + len),
    )
  }
}

export { StringBuilder }
