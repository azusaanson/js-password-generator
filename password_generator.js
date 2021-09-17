//random element function
function random_element(num_bool, lower_bool, upper_bool, sc_bool, pw, lower, upper, sc) {
      let g = 0;
      while(g<1){
        let j = Math.floor(Math.random() * 4);

        //numeric
        if (j == 1) {
          if (num_bool){
            g++;
            return Math.floor(Math.random() * 10);
          }else {}
        }
        //upper case
        else if (j == 2) {
          if (upper_bool){
            g++;
            return upper.charAt(Math.floor(Math.random() * upper.length));
          }else {}
        }
        //special characters
        else if (j == 3) {
          if (sc_bool){
            g++;
            return sc.charAt(Math.floor(Math.random() * sc.length));
            }else {}
        }   
        //lower case
        else {
          if (lower_bool){
          	g++;
          	return lower.charAt(Math.floor(Math.random() * lower.length));
            }else {}
        }
      }
    }

//password generator
function pw() {
  //prompt and confirm
  let len = window.prompt("パスワードの長さはどうしますか？");
  let num_bool = window.confirm("数字を入れますか？");
  let lower_bool = window.confirm("小文字を入れますか？");
  let upper_bool = window.confirm("大文字を入れますか？");
  let sc_bool = window.confirm("特殊文字を入れますか？");
	len = Math.floor(parseInt(len));
  
	if (len < 1 && (num_bool+upper_bool+sc_bool+lower_bool) == 0){
    window.alert("パスワードの長さは不適切です。また、数字/小文字/大文字/特殊文字、どれか一つを入れる必要があります。もう一度入力してください。");
  } else if(len < 1){
    window.alert("パスワードの長さは不適切です。もう一度入力してください。");
  } else if((num_bool+upper_bool+sc_bool+lower_bool) == 0){
    window.alert("数字/小文字/大文字/特殊文字、どれか一つを入れる必要があります。もう一度入力してください。");
  } else {

    //elements
    let pw = "";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = lower.toUpperCase();
    const sc = "!#$%&=-+*/@;:_<>";

    //gen password
    for (let i=0; i<len; i++) {
      let k = random_element(num_bool, lower_bool, upper_bool, sc_bool, pw, lower, upper, sc);
      pw += k;
      }

    //finish
    window.alert("パスワードを生成しました！");
    document.getElementById("password").textContent = pw;
  }
}