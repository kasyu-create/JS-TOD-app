import "./styles.css";

const OnclickAdd = () => {
  // テキストボックスの値を取得して初期化;
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
}

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
}

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
    //div生成
    const div = document.createElement("div");
    div.className = "list-row";
  
    //liタグ
    const li = document.createElement("li");
    li.innerText = text;
    // console.log(div);
    //console.log(li);
    //alert(inputText);
  
    //button（完了タグ）の生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
      // alert("完了");
  
      deleteFromIncompleteList(completeButton.parentNode);
      // const deleteTaret = completeButton.parentNode;
      // document.getElementById("incomplate-list").removeChild(deleteTaret);
  
      // 完了リストに追加する要素
      // parentNode 親要素取得今回の場合はdiv
      const addTarget = completeButton.parentNode;
      // firstElementChild divの中での最初の子要素（今回の場合はliタグ）
      // innerText liタグの中の文字を取得　今回の場合はTODOです
      const text = addTarget.firstElementChild.innerText;
      // console.log(text);
  
      // div以下を初期化
      // addTargetは<div class="list-row">のdivタグで囲まれている全て
      // textContentは上記divタグの中にあるtextを指定 つまりTODOです　完了　削除の文字
      // それらの文字を持つ子要素を全て削除するという意味でのnullを代入するという意味
      addTarget.textContent = null;
      // console.log(addTarget);
  
      // liタグを生成
      const li =document.createElement("li");
      li.innerText = text;
      // console.log(li);
      // buttonタグを生成
      const backButton = document.createElement("button");
      backButton.innerText = "戻す";
      backButton.addEventListener("click", () => {
        // alert("戻す");
        // 押された戻すボタンの親タグ(div)を完了リストから削除
        const deleteTaret = backButton.parentNode;
        document.getElementById("complete-list").removeChild(deleteTaret);
  
        // テキストを取得
        const text = backButton.parentNode.firstElementChild.innerText;
        // console.log(text);
        createIncompleteList(text);
      });
  
      // divタグの子要素に各要素を設定
      addTarget.appendChild(li);
      addTarget.appendChild(backButton);
      // console.log(addTarget);
      
      // 完了リストに追加
      document.getElementById("complete-list").appendChild(addTarget);
    });
  
    //button（削除タグ）の生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
      // alert("削除");
      // 押された削除ボタンの親タグ（div）を未完了リストから削除
  
      // parentNode 親要素を取得 今回の場合はdivを取得
      deleteFromIncompleteList(deleteButton.parentNode);
      // const deleteTaret = deleteButton.parentNode;
      // console.log(deleteTaret);
      // removeChild まずで親要素(incomplate-list=ulのid)を取得し、次に子ノード削除（deleteTaret=divのid）
      // document.getElementById("incomplate-list").removeChild(deleteTaret);
    });
  
    //dovタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
      // console.log(div);
  
    // 未完了のリストに追加
    document.getElementById("incomplete-list").appendChild(div);
  
}

document
  .getElementById("add-button")
  .addEventListener("click", () => OnclickAdd());
  