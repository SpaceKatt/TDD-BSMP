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
  })
  done()
}
