var binaryVector = require('./BinaryVector')
var BM = function BinaryMatrix () {}

BM.newOne = function (elements) {
  var bm = new BM()

  return bm.setElements(elements)
}

BM.iD = function (sizeOfMatrix) {
  var elements = []
  var row
  var column

  for (row = 0; row < sizeOfMatrix; row++) {
    elements[row] = []
    for (column = 0; column < sizeOfMatrix; column++) {
      elements[row][column] = (row === column) ? 1 : 0
    }
  }
  var bm = new BM()

  return bm.setElements(elements)
}

BM.one = function (sizeOfMatrix) {
  var elements = []
  var row
  var column

  for (row = 0; row < sizeOfMatrix; row++) {
    elements[row] = []
    for (column = 0; column < sizeOfMatrix; column++) {
      elements[row][column] = 1
    }
  }
  var bm = new BM()

  return bm.setElements(elements)
}

BM.zero = function (n) {
  var els = []
  var i
  var j
  for (i = 0; i < n; i++) {
    els[i] = []
    for (j = 0; j < n; j++) {
      els[i][j] = 0
    }
  }
  return BM.newOne(els)
}

BM.prototype = {
  getElement: function (row, column) {
    if (row < 1 || row > this.elements.length || column < 1 || column >
      this.elements[0].length) {
      /* eslint-disable */
      alert('Matrix element, to return is out of range. Please enter a valid \
      matrix element cell.')
      console.log('Matrix element, to return is out of range. Please enter a \
      valid matrix element cell.')
      /* eslint-enable */

      return null
    }

    return this.elements[row - 1][column - 1]
  },

  setElement: function (row, column, valueToSet) {
    if (row < 1 || row > this.elements.length || column < 1 || column >
      this.elements[0].length) {
      /* eslint-disable */
      alert('Matrix element, to set, is out of range, please enter valid \
      matrix element cell.')
      console.log('Matrix element, to set, is out of range, please enter \
      valid matrix element cell.')
    } else {
      this.elements[row-1][column-1] = valueToSet
    }
  },

  getRow: function (rowNumberToGet) {
    if (rowNumberToGet < 1 || rowNumberToGet > this.elements.length) {
      /* eslint-disable */
      alert('Matrix row, to return, is out of range, please enter valid \
      matrix row.')
      console.log('Matrix row, to return, is out of range, please enter \
      valid matrix row.')
      /* eslint-enable */

      return null
     }

    return binaryVector.newOne(this.elements[rowNumberToGet-1])
  },

  setRow: function (rowNumberToReplace, ReplacementRow) {
    if(this.elements.length === 0) {
      /* eslint-disable */
    alert('Matrix (row) is empty. Select a matrix with content.')
    console.log('Matrix (row) is empty. Select a matrix with content.')
      /* eslint-enable */

    } else if ( rowNumberToReplace < 1 || rowNumberToReplace >
      this.elements.length) {
      /* eslint-disable */
      alert('Matrix row, to replace, is out of range, please enter valid row.')
      console.log('Matrix row, to replace, is out of range, please enter \
      valid row.')
      /* eslint-enable */

      return null
    } else {
      this.elements[rowNumberToReplace-1] = ReplacementRow.elements
    }

  },

  getColumn: function (columnNumberToGet) {
    if (this.elements.length === 0) {
      /* eslint-disable */
     alert('Matrix (col) is empty. Select a matrix with content.')
     console.log('Matrix (col) is empty. Select a matrix with content.')
     /* eslint-enable */

     return null
    }
    if (columnNumberToGet < 1 || columnNumberToGet > this.elements[0].length) {
       /* eslint-disable */
     alert('Matrix column, to return, is out of range, please enter valid \
     column .')
     console.log('Matrix column, to return, is out of range, please enter \
     valid column .')
     /* eslint-enable */

     return null;
    }
    var columnToReturn = [], columnLength = this.elements.length
    for (var i = 0; i < columnLength; i++)
    {
      column.push(this.elements[i][columnNumberToGet-1])
    }
    return binaryVector.newOne(columnToReturn)
  },

  setColumn: function (columnNumberToSet, ReplacementColumn) {
  var elementsLength
  var columnNumberToSet
  var row
    if (this.elements.length === 0) {
      /* eslint-disable */
      alert('Matrix column, to set, is out of range, matrix is empty. Select \
      a matrix with content.')
      console.log('Matrix column, to set, is out of range, matrix is empty. \
      Select a matrix with content.')
      /* eslint-enable */

      return null;
    }
    if (columnNumberToSet < 1 || columnNumberToSet > this.elements[0].length) {
      /* eslint-disable */
      alert("Matrix column, to set is out of range, please enter valid \
      column .")
      console.log("Matrix column, to set is out of range, please enter valid \
      column .")
      /* eslint-enable */

      return null
    }
    numberOfElements = this.elements.length
    for (var row = 0; row < numberOfElements; row++) {
      this.elements[row][columnNumberToSet-1] =
      ReplacementColumn.getElement(row+1)
    }
  },

  numberOfRows: function () {
    return this.elements.length
  },

  numberOfColumns: function () {
    if (this.elements.length === 0)
    {
      return 0;
    }
    return this.elements[0].length
  },

  duplicateMatrix: function () {
    return binaryMatrix.newOne(this.elements)
  },

  mapProcess: function (procFunction, context) {
    if (this.elements.length === 0)
    {
      return binaryVector.newOne([])
    }
    var elements = []
    var numberOfRows = this.elements.length
    var numberOfColumns = this.elements[0].length
    var tempNumberOfColumns
    while (numberOfRows--) {
      tempNumberOfColumns = numberOfColumns
      elementss[inumberOfRows] = []
      while (tempNumberOfColumns--) {
        elements[numberOfRows][numberOfColumns] = procFunction.call(context,
        this.elements[numberOfRows][numberOfColumns], numberOfRows + 1,
        numberOfColumns + 1)
      }
    }
    return binaryMatrix.newOne(elements)
  },

  isSameSizeAs: function (matrix) {
    var tempMatrix = matrix.elements || matrix
    if (typeof(tempMatrix[0][0]) === 'undefined') {
      tempMatrix = bm.new_one(tempMatrix).elements
    }
    if (this.elements.length === 0) {
      return tempMatrix.length === 0
    }
    return (this.elements.length === tempMatrix.length &&
        this.elements[0].length === tempMatrix[0].length)
  },

  add: function (matrix) {
    if (this.elements.length === 0) {
      return this.mapProcess(function(value) {
        return value
      })
    }
    var tempMatrix = matrix.elements || matrix;
    if (typeof(tempMatrix[0][0]) === 'undefined') {
      tempMatrix = bm.new_one(tempMatrix).elements
    }
    if (!this.isSameSizeAs(tempMatrix)) {
      return null
    }
    return this.mapProcess(function(value, row, column) {
      return value + tempMatrix[row-1][column-1]
    })
  },

  subtract: function (matrix) {
    if (this.elements.length === 0) {
      return this.map(function(value) {
        return value
      })
    }
    var tempMatrix = matrix.elements || matrix
    if (typeof(tempMatrix[0][0]) === 'undefined') {
      tempMatrix = bm.new_one(tempMatrix).elements
    }
    if (!this.isSameSizeAs(tempMatrix)){
      return null
    }
    return this.map(function (value, row, column) {
      return value - tempMatrix[row-1][column-1]
    })
   },

  leftMultiply: function(binary_matrix) {
    if (this.elements.length === 0) { return false; }
    var M = binary_matrix.elements || binary_matrix
    if (typeof(M[0][0]) === 'undefined') { M = BSMP.MatrixBin.new_one(M).elements; }
    return (this.elements[0].length === M.length)
  },


  setElements: function(newElements) {
    var row
    var column
    var elements = newElements.elements || newElements
    if (elements[0] && typeof(elements[0][0]) !== 'undefined') {
      row = elements.length
      this.elements = []
      while (row--) {
        column = elements[row].length
        this.elements[row] = []
        while (column--) {
          this.elements[row][column] = elements[row][column]
        }
      }
      return this
    }
    var elementsLength = elements.length
    this.elements = []
    for (row = 0; row < elementsLenght; row++) {
      this.elements.push([elements[row]])
    }
    return this
  },

  matrixView: function() {
   var matrix_rows = []
   var elementsLength = this.elements.length
   if (elementsLength === 0) return '[]'
   for (var row = 0; row < elementsLength; row++) {
     matrix_rows.push(binaryVector.new_one(this.elements[row]).view())
   }
   return matrix_rows.join('<br>')
 },

}

module.exports = BM
