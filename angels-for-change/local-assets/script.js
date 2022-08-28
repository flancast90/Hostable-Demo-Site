const controls = {
    speed: 200,
    elems: document.querySelectorAll('.counter'),
}

controls.elems.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute('data-countto'));
    const count = parseInt(counter.innerText);
    const increment = Math.trunc(target / controls.speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});