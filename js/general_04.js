document.getElementById("notAddBtn").disabled = true;
document.getElementById("addBtn").disabled = true;
document.getElementById("startBtn").disabled = false;
//スタートボタンを押したら
let start = document.getElementById("startBtn");
start.addEventListener("click", startBtnCheck, false);
function startBtnCheck() {
  let trumpNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let trumpType = ["club", "diamond", "heart", "spade"];

  let deck = [];
  for (let i = 0; i < trumpNum.length; i++) {
    for (let j = 0; j < trumpType.length; j++) {
      deck.push("../img/card_" + trumpType[j] + "_" + trumpNum[i] + ".png");
    }
  }
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  // if(deck[0]==1&&deck[1]==1){
  //   deck=
  // }
  // //デッキの計算（数字）
  let data1 = deck[0];
  let trump1 = data1.replace(/[^0-9]/g, "");

  console.log(deck);
  console.log(data1);

  let data2 = deck[1];
  let trump2 = data2.replace(/[^0-9]/g, "");

  let data3 = deck[2];
  let trump3 = data3.replace(/[^0-9]/g, "");

  let data4 = deck[3];
  let trump4 = data4.replace(/[^0-9]/g, "");

  let data5 = deck[4];
  let trump5 = data5.replace(/[^0-9]/g, "");

  let data6 = deck[5];
  let trump6 = data6.replace(/[^0-9]/g, "");

  let trump_1 = Number(trump1);
  let trump_2 = Number(trump2);
  let trump_3 = Number(trump3);
  let trump_4 = Number(trump4);
  let trump_5 = Number(trump5);
  let trump_6 = Number(trump6);

  let trumpNumber = [trump_1, trump_2, trump_3, trump_4, trump_5, trump_6];

  let reDeck = deck.splice(6, 52);
  console.log(reDeck);

  document.getElementById("startBtn").disabled = true;
  document.getElementById("notAddBtn").disabled = false;
  document.getElementById("addBtn").disabled = false;

  document.getElementById("startBtn").disabled = true;
  document.getElementById("enemyImages1").src = deck[0];
  console.log(deck[0]);
  // document.getElementById("enemyImages2").src = deck[1];
  // console.log(deck[1]);
  document.getElementById("myImages1").src = deck[2];
  console.log(deck[2]);
  document.getElementById("myImages2").src = deck[3];
  console.log(deck[3]);
  //   // トランプの数字の計算

  for (let i = 0; i < trumpNumber.length; i++) {
    if (trumpNumber[i] === 1) {
      trumpNumber[i] = 11;
    } else if (trumpNumber[i] >= 11) {
      trumpNumber[i] = 10;
    } else {
      trumpNumber[i] = trumpNumber[i];
    }
  }
  let enemyCard = trumpNumber[0] + trumpNumber[1];
  if (enemyCard > 21) {
    while (trumpNumber[0] + trumpNumber[1] > 21) {
      data2 = reDeck[Math.floor(Math.random() * reDeck.length)];
      trump2 = data2.replace(/[^0-9]/g, "");
      trump_2 = Number(trump2);
      trumpNumber[1] = trump_2;
      console.log(trumpNumber[1]);
      if (trumpNumber[1] >= 11) {
        trumpNumber[1] = 10;
      } else if (trumpNumber[1] == 1) {
        trumpNumber[1] = 11;
      }
      console.log(trumpNumber[1]);
      if (trumpNumber[0] + trumpNumber[1] <= 21) {
        break;
      }
    }
    console.log(trumpNumber[1]);
    document.getElementById("enemyImages2").src = data2;
  } else {
    document.getElementById("enemyImages2").src = deck[1];
  }

  //   // 追加ボタンをおした場合

  let addBtnAdd = document.getElementById("addBtn");

  addBtnAdd.addEventListener("click", addBtncheck, false);
  function addBtncheck() {
    let myTotalAddNum = trumpNumber[2] + trumpNumber[3] + trumpNumber[5];

    let enemyTotalAdd = trumpNumber[0] + trumpNumber[1];
    let enemyCard = trumpNumber[0] + trumpNumber[1];
    let myCard = trumpNumber[3] + trumpNumber[5];

    if (enemyCard < myCard) {
      document.getElementById("enemyImages3").src = data5;
    } else if (myCard < enemyCard && enemyCard <= 16) {
      document.getElementById("enemyImages3").src = data5;
    } else {
      document.getElementById("enemyImages3").src = "";
    }
    let enemyTotalAddNum = trumpNumber[0] + trumpNumber[1] + trumpNumber[4];
    document.getElementById("addBtn").disabled = true;
    document.getElementById("notAddBtn").disabled = true;
    document.getElementById("myImages3").src = data6;

    if (trumpNumber[5] === 1) {
      trumpNumber[5] = 11;
    } else if (trumpNumber[5] >= 11) {
      trumpNumber[5] = 10;
    }

    //     // 合計値の記入
    document.getElementById("myTotal").innerHTML =
      "現在の合計値（自分）:" + myTotalAddNum;
    if (enemyCard < myCard) {
      document.getElementById("enemyTotal").innerHTML =
        "現在の合計値（相手）:" + enemyTotalAddNum;
    } else if (myCard < enemyCard && enemyCard <= 16) {
      document.getElementById("enemyTotal").innerHTML =
        "現在の合計値（相手）:" + enemyTotalAddNum;
    } else {
      document.getElementById("enemyTotal").innerHTML =
        "現在の合計値（相手）:" + enemyTotalAdd;
    }
    //     // 勝ち負けの記述
    if (enemyCard < myCard) {
      if (myTotalAddNum > enemyTotalAddNum && myTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalAddNum < enemyTotalAddNum && enemyTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalAddNum == enemyTotalAddNum) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      } else if (enemyTotalAddNum > 21 && myTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalAddNum > 21 && enemyTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalAddNum > 21 && enemyTotalAddNum > 21) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      }
    }
    if (myCard < enemyCard && enemyCard <= 16) {
      if (myTotalAddNum > enemyTotalAddNum && myTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalAddNum < enemyTotalAddNum && enemyTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalAddNum == enemyTotalAddNum) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      } else if (enemyTotalAddNum > 21 && myTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalAddNum > 21 && enemyTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalAddNum > 21 && enemyTotalAddNum > 21) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      }
    }

    if (myCard == enemyCard || (enemyCard > 16 && myCard < enemyCard)) {
      if (myTotalAddNum > enemyTotalAdd && myTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalAddNum < enemyTotalAdd && enemyTotalAdd < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalAddNum == enemyTotalAdd) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      } else if (enemyTotalAdd > 21 && myTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalAddNum > 21 && enemyTotalAdd < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalAddNum > 21 && enemyTotalAdd > 21) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      }
    }
  }

  //   // 追加しないボタンを押した場合
  let notAddBtnAdd = document.getElementById("notAddBtn");

  notAddBtnAdd.addEventListener("click", notAddBtncheck, false);
  function notAddBtncheck() {
    let enemyCard = trumpNumber[0] + trumpNumber[1];
    let myCard = trumpNumber[3] + trumpNumber[5];
    //数字の計算
    if (enemyCard < myCard) {
      document.getElementById("enemyImages3").src = data5;
    } else if (myCard < enemyCard && enemyCard <= 16) {
      document.getElementById("enemyImages3").src = data5;
    } else {
      document.getElementById("enemyImages3").src = "";
    }
    console.log(trump_5);
    console.log(trumpNumber[4]);
    console.log(trumpNumber[0] + trumpNumber[1] + trumpNumber[4]);
    let enemyTotalAddNum = trumpNumber[0] + trumpNumber[1] + trumpNumber[4];
    let enemyTotalAdd = trumpNumber[0] + trumpNumber[1];
    let myTotalNum = trumpNumber[2] + trumpNumber[3];
    document.getElementById("addBtn").disabled = true;
    document.getElementById("notAddBtn").disabled = true;
    //勝ち負けの計算

    document.getElementById("myTotal").innerHTML =
      "現在の合計値（自分）:" + myTotalNum;
    if (enemyCard < myCard) {
      document.getElementById("enemyTotal").innerHTML =
        "現在の合計値（相手）:" + enemyTotalAddNum;
    } else if (myCard < enemyCard && enemyCard <= 16) {
      document.getElementById("enemyTotal").innerHTML =
        "現在の合計値（相手）:" + enemyTotalAddNum;
    } else {
      document.getElementById("enemyTotal").innerHTML =
        "現在の合計値（相手）:" + enemyTotalAdd;
    }
    if (enemyCard < myCard) {
      if (myTotalNum > enemyTotalAddNum && myTotalNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalNum < enemyTotalAddNum && enemyTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalNum == enemyTotalAddNum) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      } else if (enemyTotalAddNum > 21 && myTotalNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalNum > 21 && enemyTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalNum > 21 && enemyTotalAddNum > 21) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      }
    }

    if (myCard < enemyCard && enemyCard <= 16) {
      if (myTotalNum > enemyTotalAddNum && myTotalNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalNum < enemyTotalAddNum && enemyTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalNum == enemyTotalAddNum) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      } else if (enemyTotalAddNum > 21 && myTotalNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalNum > 21 && enemyTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalNum > 21 && enemyTotalAddNum > 21) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      }
    }
    if (myCard == enemyCard || (enemyCard > 16 && myCard < enemyCard)) {
      if (myTotalNum > enemyTotalAdd && myTotalNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalNum < enemyTotalAdd && enemyTotalAdd < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalNum == enemyTotalAdd) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      } else if (enemyTotalAdd > 21 && myTotalNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalNum > 21 && enemyTotalAdd < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalNum > 21 && enemyTotalAdd > 21) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      }
    }
  }
}
// リセットボタン
let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", resetBtncheck, false);
function resetBtncheck() {
  let formresetEnemy1 = document.getElementById("enemyImages1");
  let resetEnemy2 = document.getElementById("enemyImages2");
  let resetEnemy3 = document.getElementById("enemyImages3");
  let resetMe1 = document.getElementById("myImages1");
  let resetMe2 = document.getElementById("myImages2");
  let resetMe3 = document.getElementById("myImages3");
  let resetEnemyTotal = document.getElementById("enemyTotal");
  let resetEnemyResult = document.getElementById("enemyResult");
  let resetMytotal = document.getElementById("myTotal");
  let resetMyResult = document.getElementById("myResult");
  formresetEnemy1.src = "";
  resetEnemy2.src = "";
  resetEnemy3.src = "";
  resetMe1.src = "";
  resetMe2.src = "";
  resetMe3.src = "";
  resetEnemyTotal.innerHTML = "";
  resetEnemyResult.innerHTML = "";
  resetMytotal.innerHTML = "";
  resetMyResult.innerHTML = "";
  document.getElementById("resetStartBtn").disabled = false;
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("resetStartBtn").style.display = "inline";
  document.getElementById("notAddBtn").disabled = true;
  document.getElementById("addBtn").disabled = true;
}
let resetStart = document.getElementById("resetStartBtn");
resetStart.addEventListener("click", resetStartCheck, false);
function resetStartCheck() {
  document.getElementById("notAddBtn").disabled = false;
  document.getElementById("addBtn").disabled = false;
  document.getElementById("resetStartBtn").disabled = true;
  let trumpNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let trumpType = ["club", "diamond", "heart", "spade"];

  let deck = [];
  for (let i = 0; i < trumpNum.length; i++) {
    for (let j = 0; j < trumpType.length; j++) {
      deck.push("../img/card_" + trumpType[j] + "_" + trumpNum[i] + ".png");
    }
  }
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  // if(deck[0]==1&&deck[1]==1){
  //   deck=
  // }
  // //デッキの計算（数字）
  let data1 = deck[0];
  let trump1 = data1.replace(/[^0-9]/g, "");

  console.log(deck);
  console.log(data1);

  let data2 = deck[1];
  let trump2 = data2.replace(/[^0-9]/g, "");

  let data3 = deck[2];
  let trump3 = data3.replace(/[^0-9]/g, "");

  let data4 = deck[3];
  let trump4 = data4.replace(/[^0-9]/g, "");

  let data5 = deck[4];
  let trump5 = data5.replace(/[^0-9]/g, "");

  let data6 = deck[5];
  let trump6 = data6.replace(/[^0-9]/g, "");

  let trump_1 = Number(trump1);
  let trump_2 = Number(trump2);
  let trump_3 = Number(trump3);
  let trump_4 = Number(trump4);
  let trump_5 = Number(trump5);
  let trump_6 = Number(trump6);

  let trumpNumber = [trump_1, trump_2, trump_3, trump_4, trump_5, trump_6];

  let reDeck = deck.splice(6, 52);
  console.log(reDeck);

  document.getElementById("startBtn").disabled = true;
  document.getElementById("notAddBtn").disabled = false;
  document.getElementById("addBtn").disabled = false;

  document.getElementById("startBtn").disabled = true;
  document.getElementById("enemyImages1").src = deck[0];
  console.log(deck[0]);
  // document.getElementById("enemyImages2").src = deck[1];
  // console.log(deck[1]);
  document.getElementById("myImages1").src = deck[2];
  console.log(deck[2]);
  document.getElementById("myImages2").src = deck[3];
  console.log(deck[3]);
  //   // トランプの数字の計算

  for (let i = 0; i < trumpNumber.length; i++) {
    if (trumpNumber[i] === 1) {
      trumpNumber[i] = 11;
    } else if (trumpNumber[i] >= 11) {
      trumpNumber[i] = 10;
    } else {
      trumpNumber[i] = trumpNumber[i];
    }
  }
  let enemyCard = trumpNumber[0] + trumpNumber[1];
  if (enemyCard > 21) {
    while (trumpNumber[0] + trumpNumber[1] > 21) {
      data2 = reDeck[Math.floor(Math.random() * reDeck.length)];
      trump2 = data2.replace(/[^0-9]/g, "");
      trump_2 = Number(trump2);
      trumpNumber[1] = trump_2;
      console.log(trumpNumber[1]);
      if (trumpNumber[1] >= 11) {
        trumpNumber[1] = 10;
      } else if (trumpNumber[1] == 1) {
        trumpNumber[1] = 11;
      }
      console.log(trumpNumber[1]);
      if (trumpNumber[0] + trumpNumber[1] <= 21) {
        break;
      }
    }
    console.log(trumpNumber[1]);
    document.getElementById("enemyImages2").src = data2;
  } else {
    document.getElementById("enemyImages2").src = deck[1];
  }

  //   // 追加ボタンをおした場合

  let addBtnAdd = document.getElementById("addBtn");

  addBtnAdd.addEventListener("click", addBtncheck, false);
  function addBtncheck() {
    let myTotalAddNum = trumpNumber[2] + trumpNumber[3] + trumpNumber[5];

    let enemyTotalAdd = trumpNumber[0] + trumpNumber[1];
    let enemyCard = trumpNumber[0] + trumpNumber[1];
    let myCard = trumpNumber[3] + trumpNumber[5];

    if (enemyCard < myCard) {
      document.getElementById("enemyImages3").src = data5;
    } else if (myCard < enemyCard && enemyCard <= 16) {
      document.getElementById("enemyImages3").src = data5;
    } else {
      document.getElementById("enemyImages3").src = "";
    }
    let enemyTotalAddNum = trumpNumber[0] + trumpNumber[1] + trumpNumber[4];
    document.getElementById("addBtn").disabled = true;
    document.getElementById("notAddBtn").disabled = true;
    document.getElementById("myImages3").src = data6;

    if (trumpNumber[5] === 1) {
      trumpNumber[5] = 11;
    } else if (trumpNumber[5] >= 11) {
      trumpNumber[5] = 10;
    }

    //     // 合計値の記入
    document.getElementById("myTotal").innerHTML =
      "現在の合計値（自分）:" + myTotalAddNum;
    if (enemyCard < myCard) {
      document.getElementById("enemyTotal").innerHTML =
        "現在の合計値（相手）:" + enemyTotalAddNum;
    } else if (myCard < enemyCard && enemyCard <= 16) {
      document.getElementById("enemyTotal").innerHTML =
        "現在の合計値（相手）:" + enemyTotalAddNum;
    } else {
      document.getElementById("enemyTotal").innerHTML =
        "現在の合計値（相手）:" + enemyTotalAdd;
    }
    //     // 勝ち負けの記述
    if (enemyCard < myCard) {
      if (myTotalAddNum > enemyTotalAddNum && myTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalAddNum < enemyTotalAddNum && enemyTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalAddNum == enemyTotalAddNum) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      } else if (enemyTotalAddNum > 21 && myTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalAddNum > 21 && enemyTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalAddNum > 21 && enemyTotalAddNum > 21) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      }
    }
    if (myCard < enemyCard && enemyCard <= 16) {
      if (myTotalAddNum > enemyTotalAddNum && myTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalAddNum < enemyTotalAddNum && enemyTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalAddNum == enemyTotalAddNum) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      } else if (enemyTotalAddNum > 21 && myTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalAddNum > 21 && enemyTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalAddNum > 21 && enemyTotalAddNum > 21) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      }
    }

    if (myCard == enemyCard || (enemyCard > 16 && myCard < enemyCard)) {
      if (myTotalAddNum > enemyTotalAdd && myTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalAddNum < enemyTotalAdd && enemyTotalAdd < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalAddNum == enemyTotalAdd) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      } else if (enemyTotalAdd > 21 && myTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalAddNum > 21 && enemyTotalAdd < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalAddNum > 21 && enemyTotalAdd > 21) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      }
    }
  }

  //   // 追加しないボタンを押した場合
  let notAddBtnAdd = document.getElementById("notAddBtn");

  notAddBtnAdd.addEventListener("click", notAddBtncheck, false);
  function notAddBtncheck() {
    let enemyCard = trumpNumber[0] + trumpNumber[1];
    let myCard = trumpNumber[3] + trumpNumber[5];
    //数字の計算
    if (enemyCard < myCard) {
      document.getElementById("enemyImages3").src = data5;
    } else if (myCard < enemyCard && enemyCard <= 16) {
      document.getElementById("enemyImages3").src = data5;
    } else {
      document.getElementById("enemyImages3").src = "";
    }
    console.log(trump_5);
    console.log(trumpNumber[4]);
    console.log(trumpNumber[0] + trumpNumber[1] + trumpNumber[4]);
    let enemyTotalAddNum = trumpNumber[0] + trumpNumber[1] + trumpNumber[4];
    let enemyTotalAdd = trumpNumber[0] + trumpNumber[1];
    let myTotalNum = trumpNumber[2] + trumpNumber[3];
    document.getElementById("addBtn").disabled = true;
    document.getElementById("notAddBtn").disabled = true;
    //勝ち負けの計算

    document.getElementById("myTotal").innerHTML =
      "現在の合計値（自分）:" + myTotalNum;
    if (enemyCard < myCard) {
      document.getElementById("enemyTotal").innerHTML =
        "現在の合計値（相手）:" + enemyTotalAddNum;
    } else if (myCard < enemyCard && enemyCard <= 16) {
      document.getElementById("enemyTotal").innerHTML =
        "現在の合計値（相手）:" + enemyTotalAddNum;
    } else {
      document.getElementById("enemyTotal").innerHTML =
        "現在の合計値（相手）:" + enemyTotalAdd;
    }
    if (enemyCard < myCard) {
      if (myTotalNum > enemyTotalAddNum && myTotalNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalNum < enemyTotalAddNum && enemyTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalNum == enemyTotalAddNum) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      } else if (enemyTotalAddNum > 21 && myTotalNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalNum > 21 && enemyTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalNum > 21 && enemyTotalAddNum > 21) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      }
    }

    if (myCard < enemyCard && enemyCard <= 16) {
      if (myTotalNum > enemyTotalAddNum && myTotalNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalNum < enemyTotalAddNum && enemyTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalNum == enemyTotalAddNum) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      } else if (enemyTotalAddNum > 21 && myTotalNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalNum > 21 && enemyTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalNum > 21 && enemyTotalAddNum > 21) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      }
    }
    if (myCard == enemyCard || (enemyCard > 16 && myCard < enemyCard)) {
      if (myTotalNum > enemyTotalAdd && myTotalNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalNum < enemyTotalAdd && enemyTotalAdd < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalNum == enemyTotalAdd) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      } else if (enemyTotalAdd > 21 && myTotalNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalNum > 21 && enemyTotalAdd < 22) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalNum > 21 && enemyTotalAdd > 21) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      }
    }
  }
}
