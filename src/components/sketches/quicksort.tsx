const sketch = (p: any) => {
  const values:any[] = [];
  const states:any[] =[]

  p.setup = () => {
    p.createCanvas(300, 300);
    for(let i = 0; i < p.width/8; i++) {
      values.push(p.random(p.height));
      states.push(-1);
    }
    quickSort(0, values.length - 1)
  };
  p.draw = () => {
    p.background(140);
    for(let i = 0; i < values.length; i++) {
      if (states[i] == 0) {
        p.fill('#E0777D');
      } else if (states[i] == 1) {
        p.fill('#D6FFB7');
      } else {
        p.fill(255);
      }
      p.rect(i * 8, p.height - values[i], 8, values[i]);
    }
  };
  async function quickSort(start:any, end:any) {
    if (start > end) {
      return;
    }

    let index = await partition(start, end);

    states[index] = -1;
    await Promise.all(
      [quickSort(start, index - 1), 
       quickSort(index + 1, end)
      ]);
  }

  async function partition(start:any, end:any) {
    for (let i = start; i < end; i++) {
      states[i] = 1;
    }

    let pivotIndex = start;

    states[pivotIndex] = 0;
    let pivotElement = values[end];
    for (let i = start; i < end; i++) {
      if (values[i] < pivotElement) {
        await swap(i, pivotIndex);
        states[pivotIndex] = -1;
        pivotIndex++;
        states[pivotIndex] = 0;
      }
    }
    await swap(end, pivotIndex);
    for (let i = start; i < end; i++) {
      if (i != pivotIndex) {
        states[i] = -1;
      }
    }
    return pivotIndex;
  }
  async function swap(i:any, j:any) {
    await sleep(25);
    let temp = values[i];
    values[i] = values[j];
    values[j] = temp;
  }
  

  function sleep(ms:any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
};

export default sketch;