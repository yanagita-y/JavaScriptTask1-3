let arr = new Array();
arr[0]='掃除';
arr[1]='買い物';
arr[2]='散歩';

const task = () => {
    console.log('========================');
    console.log('現在持っているタスク一覧');
    console.log('========================');
    for(let i=0 ; i < arr.length ; i++) {
        console.log(`${i} : ${arr[i]}`);
    }
    arr[arr.length] = prompt("タスクを入力してください");
    alert("新しいタスクを追加しました。");
    prompt("「確認,追加,削除,終了」の４つのいずれかを入力してください");
    task();
}