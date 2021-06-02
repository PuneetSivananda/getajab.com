let today = new Date()

exports.getData = function() {
  return today.toISOString()
}
