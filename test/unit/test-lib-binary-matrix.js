/* global describe it */
var expect = require('chai').expect
var assert = require('chai').assert
var BinaryMatrix = require('../../lib/BinaryMatrix')
var BinaryVector = require('../../lib/BinaryVector')

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

exports.binary_matrix_operations_test = function (done) {
  var elements = [[1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]]
  describe('Martrix operations:', function () {
    it('Correct element returned', function () {
      var matrix = BinaryMatrix.newOne(elements)
      var element = matrix.getElement(2, 2)
      expect(element).to.deep.equal(5)
    })

    it('Single element set correctly', function () {
      var matrix = BinaryMatrix.newOne(elements)
      matrix.setElement(2, 2, 42)
      expect(matrix.getElement(2, 2)).to.deep.equal(42)
    })

    it('Row returned correctly', function () {
      var matrix = BinaryMatrix.newOne(elements)
      var row = matrix.getRow(2)
      var expectedRowVector = BinaryVector.newOne([4, 5, 6])
      expect(row).to.deep.equal(expectedRowVector)
    })

    it('Row set correctly', function () {
      var matrix = BinaryMatrix.newOne(elements)
      var rowReplacementVector = BinaryVector.newOne([1, 0, 1])
      matrix.setRow(2, rowReplacementVector)
      expect(matrix.getRow(2)).to.deep.equal(rowReplacementVector)
    })

    // it('Row only set for Vectors of correct length', function () {
    //
    // })

    it('Column returned correctly', function () {
      var matrix = BinaryMatrix.newOne(elements)
      var column = matrix.getColumn(2)
      var expectedColVector = BinaryVector.newOne([2, 5, 8])
      expect(column).to.deep.equal(expectedColVector)
    })

    it('Column set correctly', function () {
      var matrix = BinaryMatrix.newOne(elements)
      var columnVector = BinaryVector.newOne([0, 1, 0])
      matrix.setColumn(2, columnVector)
      expect(matrix.getColumn(2)).to.deep.equal(columnVector)
    })

    // it('Column only set for Vectors of correct length', function () {
    //
    // })

    it('Correct number of rows given', function () {
      var matrix = BinaryMatrix.newOne(elements)
      expect(matrix.numberOfRows()).to.deep.equal(3)
    })

    it('Correct number of columns given', function () {
      var matrix = BinaryMatrix.newOne(elements)
      expect(matrix.numberOfColumns()).to.deep.equal(3)
    })

    it('Matrix duplicated correctly', function () {
      var matrix = BinaryMatrix.newOne(elements)
      var newMatrix = matrix.duplicateMatrix()
      expect(newMatrix).to.deep.equal(matrix)
    })

    it('Map process is valid', function () {
      var matrix = BinaryMatrix.newOne(elements)
      var resultMatrix = matrix.mapProcess(function (value, row, column) {
        return value * 2
      })
      var expectedElements = [[2, 4, 6],
          [8, 10, 12],
          [14, 16, 18]]
      expect(resultMatrix.elements).to.deep.equal(expectedElements)
    })

    it('Same size detection valid', function () {
      var matrix = BinaryMatrix.newOne(elements)
      var diffElements = [[0, 1, 0],
          [1, 0, 1],
          [0, 1, 0]]
      var newMatrix = BinaryMatrix.newOne(diffElements)
      assert.isOk(matrix.isSameSizeAs(newMatrix))
    })

    it('Matrices add properly', function () {
      var matrix = BinaryMatrix.newOne(elements)
      var diffElements = [[0, 1, 0],
          [1, 0, 1],
          [0, 1, 0]]
      var newMatrix = BinaryMatrix.newOne(diffElements)
      var finalMatrix = matrix.add(newMatrix)
      var expectedElements = [[1, 3, 3],
          [5, 5, 7],
          [7, 9, 9]]
      expect(finalMatrix.elements).to.deep.equal(expectedElements)
    })

    it('Matrices subtract properly', function () {
      var matrix = BinaryMatrix.newOne(elements)
      var diffElements = [[0, 1, 0],
          [1, 0, 1],
          [0, 1, 0]]
      var newMatrix = BinaryMatrix.newOne(diffElements)
      var finalMatrix = matrix.subtract(newMatrix)
      var expectedElements = [[1, 1, 3],
          [3, 5, 5],
          [7, 7, 9]]
      expect(finalMatrix.elements).to.deep.equal(expectedElements)
    })

    // it('Left Multiplication valid', function () {
    //   var matrix = BinaryMatrix.newOne(elements)
    //   var identityMatrix = BinaryMatrix.iD(3)
    //   var newMatrix = matrix.leftMultiply(identityMatrix)
    //   expect(newMatrix).to.deep.equal(matrix)
    // })

    it('Elements set correctly', function () {
      var matrix = BinaryMatrix.newOne(elements)
      var diffElements = [[0, 1, 0],
          [1, 0, 1],
          [0, 1, 0]]
      matrix.setElements(diffElements)
      expect(matrix.elements).to.deep.equal(diffElements)
    })

    it('Matrix view valid', function () {
      var matrix = BinaryMatrix.newOne(elements)
      var matrixString = '[1, 2, 3]<br>[4, 5, 6]<br>[7, 8, 9]'
      expect(matrix.matrixView()).to.deep.equal(matrixString)
    })
  })
  done()
}
