const computer = [];
let strikeCount;
let ballCount;
let nothing;
let count = 0;

function computerNumbers() {
  while (computer.length < 4) {
    let number = Math.floor(Math.random() * 9) + 1;
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
}

function numbersInput() {
  let input = document.querySelector("#inputNumber").value;
  error(input);
  strikeCount = 0;
  ballCount = 0;
  nothing = 0;
  computer.map((e, i) => {
    if (input.includes(e)) {
      return input.indexOf(e) === i ? strikeCount++ : ballCount++;
    } else nothing++;
  });
  gamePlay(input);
}

function gamePlay(input) {
  award();
  count += 1;
  let div = document.createElement("div");
  let result = document.querySelector("#result");
  if (strikeCount === 4) {
    div.innerHTML = `<h1>축하합니다!</h1>아웃 : ${count} </br>
    ${input} : 4스트라이크
    <hr>`;
    result.appendChild(div);
    return;
  }
  else if (nothing === 4) {
    div.innerHTML = `아웃 : ${count}  </br>
    ${input} : <span class="nothing">낫싱</span> <hr>`;
    result.appendChild(div);
    return;
  } else if (ballCount > 0 || strikeCount > 0) {
    div.innerHTML = `아웃 : ${count} </br>
    ${input} : <span class="ball">${ballCount}</span>볼 <span class="strike">${strikeCount}</span>스트라이크 <hr>`;
    result.appendChild(div);
    return;
  }
  return gamePlay();
}

function award() {
  if (count < 6 && strikeCount === 4) {
    document.write(
      `<h1>축하합니다! 운이 좋으시군요!</h1> 아웃 : ${count} </br> <span class="strike">${strikeCount}</span>스트라이크 <hr>`
    );
  }
}

function error(input) {
  let set = new Set(input);
  let duplication = [...set];
  if (isNaN(Number(input))) {
    alert("문자가 아닌 숫자를 입력해 주세요!");
    window.location.href = "/";
  } else if (input.length < 4) {
    alert("4개의 숫자를 입력해주세요!");
    window.location.href = "/";
  } else if (duplication.length < 4) {
    alert("중복된 숫자는 안됩니다!");
    window.location.href = "/";
  }
}

computerNumbers();
