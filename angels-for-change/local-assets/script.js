const controls = {
  speed: 200,
  elems: document.querySelectorAll('.counter'),
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = parseInt(counter.getAttribute('data-countto'));
      const count = numeral(counter.innerText).value();
      const increment = Math.trunc(target / controls.speed);

      const updateCount = () => {
        if (count < target) {
          counter.innerText = numeral(count + increment).format('0, 0');
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();

      observer.unobserve(counter);
    }
  });
});

controls.elems.forEach((counter) => {
  observer.observe(counter);
});
