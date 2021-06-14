/**
 * const let 等の変数宣言
 */

//  var vall = "var変数"
//  console.log(vall)

//object定義は基本constで行う
//オブジェクトのvaluesは変更できてしまう
//新たにkey:valueも追加できる
// const val4 = {
//   name: "totaeni",
//   age: 26
// };
// val4.address = "Tokyo"//新たに追加、
// val4.name = "ponkotu"
// console.log(val4)

//constで定義した配列は変更が可能
// const array = ["dog", "cat"];
// array[1] = "bird";
// array.push("monkey");
// array.push("see");
// console.log(array);

//テンプレート文字列
// const name = "totani";
// const age = 26;
// const name2 = "ni-ru";
// const age2 = 28;
// //従来の方法
// const message = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message);

// //テンプレート文字を用いた方法
// const messagetemple = `私の名前は ${name2} です。年齢は${age2}です。`;
// console.log(messagetemple);

//アロー関数

//従来の記法

// function func1(msg){
//   return msg;
// }

//アロー関数　省略なし
// const　func1 = (msg) => {
//   return msg;
// }
//アロー関数の省略記法をやるときは関数名に格納しないとエラーになる。下記記法だとだめ。
// const　func1　=　msg　=>　msg;
//引数が一つの場合のみ()が省略可能
//戻り値が1行の時のみ{retun }が省略可能
// console.log(func1("hel"));
// const func3 = (num1,num2) => num1 + num2;
// console.log(func3(23,34))

// ///分割代入
// const myProf = {
//   name: "totani",
//   age: 26
// };
// const message1 = `私は${myProf.name}です。　年齢は${myProf.age}歳です。`;
// //毎回myprofで定義するのが面倒くさい
// console.log(message1);
// const { name, age } = myProf;
// const message2 = `私は${name}ですyo。　年齢は${age}歳ですyo。`;
// console.log(message2);

// const myProf2 = ["ryuya", 26]
// // const message3 = `私は${myProf2[0]}ですyo。　年齢は${myProf2[1]}歳ですyo。`;
// // console.log(message3);
// const [name2, age2] = myProf2
// const message4 = `私は${name2}ですyo。　年齢は${age2}歳ですyo。`;
// console.log(message4);

// //デフォルト値
// const func　 = (name = "ゲスト") => console.log(`こんにちは！${name}さん。`)
// //func()で何も渡さないとundifinedになるが、引数で代入しておくとundifinedを避けられる
// func()

//配列 スプレッド構文
const array = [1, 2, 3];
// console.log(array)
// console.log(...array)
//スプレッド構文で配列を展開すると[1,2,3]と配列ではなく1,2,3の値のみにできる

//const funcAr = (num1, num2) => num1 + num2
// console.log(funcAr(array[0],array[2]))
// console.log(funcAr(...array))//関数の引数が二つの場合は、スプレッドで３つ展開しても最初の二つのみが適応される
// console.log(...array)

// //配列の展開
// const array1 = [1, 2, 3, 4, 5];
// const [num1, num2, ...array2] = array1;
// //変数に格納するのではなく、直接配列に格納する
// console.log(num1);
// console.log(num2);
// console.log(array2);

// //配列のコピー
// const array3 = [1,2]
// //スプレッド構文を使用すると参照は引き継がれない
// const arrDep = [...array3]
// console.log(arrDep)
// arrDep[0] = 100
// console.log(arrDep)
// console.log(array3)//元は変わらない
// //参照は引き継がれるパターン
// const arrDep2 = array3 //直接配列の変数を使っている
// console.log(arrDep2)
// arrDep2[0] = 100
// console.log(array3)//元のarray3も変化してしまっている

// //配列の結合
// const arr5 = [10,20]
// const arr6 = [30,40]
// const arrUni = [...arr5,...arr6]//スプレッドで結合している
// console.log(arrUni)

//map関数
//従来のfor文
// const arr = ["田中", "ズ", "Mike"];
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// const arr2 = arr.map((name) => {
//   return name;
// });
// console.log(arr2);
// //map()は配列で返す

// const arrMap = arr.map((num) => console.log(num));
// console.log(arrMap); //numをreturnすれば、配列にnumが入る
// //1行で書ける

// const nameArr = ["戸谷", "宮田", "小山"];
// nameArr.map((name, index) => console.log(`${index + 1}番目は　${name}です。`));
//indexを使うときは引数にindexを入れることに注意

//filter関数
// const numarr = [1,2,3,4,5]
// const filterNum = numarr.filter((num) => {
//   return num % 2 !== 0
// })
// console.log(filterNum)

// //三項演算子
// const num = 5;
// const boo = num < 5 ? "true" : "false";
// console.log(boo);
// const formattedNUm =
//   typeof num === "number" ? num.toString() : "数値を入力してください";
// console.log(`${formattedNUm}は${typeof formattedNUm}型です`);

// const booNum = (num1, num2) => {
//   const sum = num1 + num2;
//   if (isNaN(sum) === true || sum === 'undefined') {
//     return "入力値が不正です"
//   } else {
//     return sum < 100 ? `${sum}は許容範囲内です` : "100を超えています";
//   }
// };
// console.log(booNum(20,"w"));

//論旨演算子
const flag1 = true;
const flag2 = true;

if (flag1 || flag2) {
  console.log("1か2はtrue");
}

if (flag1 && flag2) {
  console.log("1と2はtrue");
}

const num = null;
// const num = 100
const fee = num || "金額未設定です";
// fee = null >>　"金額未設定です"
// fee = 100 >>　100
// || は左がfalseなら右を返す、左がtrueなら左を返す
console.log(fee);

//　&& は左がtrueなら右を返す、左がfalse左を返す
const num2 = null;
// const fee2 = num2 && "何か設定されました"
const fee2 = "何か設定されました" && num2;

console.log(fee2);
