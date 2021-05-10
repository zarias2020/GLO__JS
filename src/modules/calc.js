const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block'),
    calcType = document.querySelector('.calc-type'),
    calcCount = document.querySelector('.calc-count'),
    calcDay = document.querySelector('.calc-day'),
    calcSquare = document.querySelector('.calc-square'),
    totalValue = document.getElementById('total');

  const countSum = () => {
    let total = 0,
      countValue = 1,
      dayValue = 1;

    let typeValue = calcType.options[calcType.selectedIndex].value,
      squareValue = +calcSquare.value;

    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }

    if (calcDay.value && calcDay.value <= 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value <= 10) {
      dayValue *= 1.5;
    }

    if (squareValue && typeValue) {
      total = price * typeValue * squareValue * countValue * dayValue;
    }
    totalValue.textContent = total;
    // let t = 0;
    // const f1 = () => {
    //   let interval = setInterval(() => {
    //     console.log(t);
    //     t = (t + 4) * 3;

    //     if (t >= total) {
    //       clearInterval(interval);
    //       t = total;
    //     }
    //     totalValue.textContent = t;
    //   }, 100);
    // };
    // f1();
  };

  calcBlock.addEventListener('input', (e) => {
    const target = e.target;

    if (target.matches('select') || target.matches('input')) {
      countSum();
    }
  });
};
export default calc;
