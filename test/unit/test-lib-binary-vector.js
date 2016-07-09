/* global describe it */
var expect = require('chai').expect
var assert = require('chai').assert
var BinaryVector = require('../../lib/BinaryVector')

exports.binary_vector_creation_test = function (done) {
  var elements = [1, 2, 3, 4, 5]
  describe('Vector creation:', function () {
    it('New vectors are of BinaryVector type', function () {
      var vector = new BinaryVector()
      assert.isOk(vector instanceof BinaryVector)
    })

    it('New vectors are objects', function () {
      var vector = new BinaryVector()
      assert.isOk(typeof vector === 'object')
    })

    it('Create new vector from array', function () {
      var vector = BinaryVector.newOne(elements)
      expect(vector.elements).to.deep.equal(elements)
    })

    it('Create zeros vector', function () {
      var n = 5
      var zeroVector = BinaryVector.zero(n)
      expect(zeroVector.elements).to.deep.equal([0, 0, 0, 0, 0])
    })

    it('Create ones vector', function () {
      var n = 5
      var onesVector = BinaryVector.one(n)
      expect(onesVector.elements).to.deep.equal([1, 1, 1, 1, 1])
    })
  })
  done()
}

exports.binary_vector_operations_test = function () {
  var elements = [1, 2, 9, 4, 5]
  describe('Vector operations:', function () {
    it('Element correctly returned', function () {
      var vector = BinaryVector.newOne(elements)
      expect(vector.element(3)).to.deep.equal(9)
    })

    it('Element set correctly', function () {
      var vector = BinaryVector.newOne(elements)
      vector.setElement(3, 0)
      expect(vector.element(3)).to.deep.equal(0)
    })

    it('Index correctly obtained', function () {
      var vector = BinaryVector.newOne(elements)
      var index = vector.indexOf(9)
      expect(index).to.deep.equal(3)
    })

    it('Vector view displayed correctly', function () {
      var vector = BinaryVector.newOne(elements)
      var display = vector.view()
      expect(display).to.deep.equal('[1, 2, 9, 4, 5]')
    })

    it('Vector elements being replaced', function () {
      var vector = BinaryVector.newOne(elements)
      var newElements = [0, 1, 0, 1, 0]
      vector.setElements(newElements)
      expect(vector.elements).to.deep.equal(newElements)
    })
  })
}
