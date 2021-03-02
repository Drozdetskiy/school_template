function Builder(baseValue) {
  this.baseValue = baseValue
}

// eslint-disable-next-line func-names
Builder.prototype.get = function () {
  return this.baseValue
}

// eslint-disable-next-line func-names
Builder.prototype.baseListOperation = function (values, lambda) {
  this.baseValue = values.reduce(lambda, this.baseValue)
  return this
}
Builder.prototype.baseOperation = function (value, lambda) {
  this.baseValue = lambda(this.baseValue, value)
  return this
}

export { Builder }
