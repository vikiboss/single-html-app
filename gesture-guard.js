// gesture-guard: prevent pull-to-refresh and edge-swipe navigation
(() => {
  const style = document.createElement('style')
  style.textContent = 'html, body { overscroll-behavior: none; overscroll-behavior-x: none; overscroll-behavior-y: none; }'
  document.head.appendChild(style)

  let startX = 0
  let startY = 0
  let tracking = false
  let atTop = false
  let atLeftEdge = false
  let atRightEdge = false
  const edgeSize = 24
  const edgeCommit = 32
  const refreshCommit = 12

  window.addEventListener('touchstart', (event) => {
    if (event.touches.length !== 1) return
    const touch = event.touches[0]
    startX = touch.clientX
    startY = touch.clientY
    tracking = true
    atTop = window.scrollY <= 0
    const width = window.innerWidth || document.documentElement.clientWidth
    atLeftEdge = startX <= edgeSize
    atRightEdge = startX >= width - edgeSize
  }, { passive: true })

  window.addEventListener('touchmove', (event) => {
    if (!tracking || event.touches.length !== 1) return
    const touch = event.touches[0]
    const dx = touch.clientX - startX
    const dy = touch.clientY - startY
    const absX = Math.abs(dx)
    const absY = Math.abs(dy)

    const edgeSwipe = (atLeftEdge && dx > 0) || (atRightEdge && dx < 0)
    const horizontalIntent = absX > absY && absX > edgeCommit

    if (edgeSwipe && horizontalIntent) {
      tracking = false
      return
    }

    if (atTop && dy > 0 && absY > absX && absY > refreshCommit) {
      event.preventDefault()
      return
    }
  }, { passive: false })

  const stopTracking = () => { tracking = false }
  window.addEventListener('touchend', stopTracking, { passive: true })
  window.addEventListener('touchcancel', stopTracking, { passive: true })
})()
