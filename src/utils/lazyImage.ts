export const createImageLoader = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = (images: string[]): Promise<void[]> => {
  return Promise.all(images.map(createImageLoader));
};

export const lazyLoadImage = (
  element: HTMLElement,
  imageSrc: string,
  callback?: () => void
): IntersectionObserver => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = new Image();
          img.src = imageSrc;
          img.onload = () => {
            element.style.backgroundImage = `url('${imageSrc}')`;
            callback?.();
          };
          observer.disconnect();
        }
      });
    },
    {
      rootMargin: '50px',
    }
  );

  observer.observe(element);
  return observer;
};
