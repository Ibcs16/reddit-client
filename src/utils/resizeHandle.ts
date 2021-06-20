const setResizeHandle = (handle) => {
  let resizeTimeout;

  handle(window);

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
      handle(window);
    }, 1);
  });
};

export { setResizeHandle };
