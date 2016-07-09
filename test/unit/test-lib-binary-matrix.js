/* global describe it */
var expect = require('chai').expect
var assert = require('chai').assert
var BinaryMatrix = require('../../lib/BinaryMatrix')

exports.binary_matrix_creation_test = function (done) {
  var elements = [[1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]]
  describe('Matrix creation:', function () {
    it('New Matrices are of BinaryMatrix type', function () {
      var matrix = new BinaryMatrix()
      assert.isOk(matrix instanceof BinaryMatrix)
    })

    it('New Matrices are objects', function () {
      var matrix = new BinaryMatrix()
      assert.isOk(typeof matrix === 'object')
    })

    it('Create new Matrix from 2-D Array', function () {
      var matrix = BinaryMatrix.newOne(elements)
      expect(matrix.elements).to.deep.equal(elements)
    })

    it('Zero Matrix created properly', function () {
      var n = 3
      var zeroMatrix = BinaryMatrix.zero(n)
      var expectedElements = [[0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]]
      expect(zeroMatrix.elements).to.deep.equal(expectedElements)
    })

    it('Ones Matrix created properly', function () {
      var n = 3
      var onesMatrix = BinaryMatrix.one(n)
      var expectedElements = [[1, 1, 1],
          [1, 1, 1],
          [1, 1, 1]]
      expect(onesMatrix.elements).to.deep.equal(expectedElements)
    })

    it('Identity Matrix created properly', function () {
      var n = 3
      var identityMatrix = BinaryMatrix.iD(n)
      var expectedElements = [[1, 0, 0],
          [0, 1, 0],
          [0, 0, 1]]
      expect(identityMatrix.elements).to.deep.equal(expectedElements)
    })
  })
  done()
}
