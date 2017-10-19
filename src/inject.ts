const log = (...args: any[]) => console.log('Habric', ...args);

const counters = document.getElementsByClassName('voting-wjt__counter');

interface HbrComment {
  element: HTMLElement,
  lvl: number
}

const comments: HbrComment[] = [];


function parseLevel(e: HTMLElement): number {
  if (e.innerText === '0') {
    return 0;
  } else if (e.innerText[0] === '+') {
    return Number.parseInt(e.innerText.slice(1));
  } else {
    return -1;
  }
}

function detect(elements: NodeListOf<HTMLElement>) {
  for (let i = 1, block: HTMLElement; block = elements[i]; i++) {
    const lvl     = parseLevel(block);
    const comment = block.parentNode!.parentNode!.parentNode as HTMLElement;
    comments.push({element: comment, lvl: lvl});
  }

  let max: HbrComment;

  comments.forEach(cmt => {
    if (!max || cmt.lvl > max.lvl) {
      max = cmt;
    }
  });

  comments.forEach(cmt => {
    if (cmt.lvl > 3) {
      cmt.element.style.background = "#eee";
    } else {
      cmt.element.style.display = 'none';
    }
  });

  log('max comment', max!);
}


const id = setInterval(() => {
  if (counters[1]) {
    detect(counters as any);
    clearInterval(id)
  }

}, 500);

