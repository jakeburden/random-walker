var canvas = document.getElementById('canvas')
var walker = Walker(canvas)

;(function loop (walker) {
  requestAnimationFrame(function () {
    walker.step()
    loop(walker)
  })
}(walker))

function Walker (canvas, x, y) {
  if (!(this instanceof Walker)) return new Walker(canvas, x, y)
  this.canvas = canvas
  this.ctx = canvas.getContext('2d')
  this.x = x || this.canvas.height / 2
  this.y = y || this.canvas.width / 2
}

Walker.prototype.display = function () {
  if (this.x > this.canvas.height || this.x < 0) this.x = 200
  if (this.y > this.canvas.width || this.y < 0) this.y = 200
  this.ctx.fillRect(this.x, this.y, 5, 5)
}

Walker.prototype.step = function () {
  var choice = Math.floor(Math.random() * 4)
  if (choice === 0) this.x += 6
  else if (choice === 1) this.x -= 6
  else if (choice === 2) this.y += 6
  else this.y -= 6

  this.display()
}
