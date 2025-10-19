// Prevent pinch-to-zoom and double-tap zoom on mobile
(function () {
  try {
    document.documentElement.style.touchAction = "manipulation";
  } catch (e) {}

  // Prevent pinch gestures (two+ fingers)
  document.addEventListener(
    "touchstart",
    function (e) {
      if (e.touches && e.touches.length > 1) {
        e.preventDefault();
      }
    },
    { passive: false }
  );

  // Prevent double-tap -> zoom
  let lastTouch = 0;
  document.addEventListener(
    "touchend",
    function (e) {
      const now = Date.now();
      if (now - lastTouch <= 300) {
        e.preventDefault();
      }
      lastTouch = now;
    },
    { passive: false }
  );

  // iOS Safari gesturestart (pinch) prevention
  document.addEventListener("gesturestart", function (e) {
    e.preventDefault();
  });
})();
