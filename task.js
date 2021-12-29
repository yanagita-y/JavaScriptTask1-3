const arr=['掃除','買い物','散歩'];

const out = () => {
    console.log('========================');
    console.log('現在持っているタスク一覧');
    console.log('========================');
    for(let i=0 ; i < arr.length ; i++) {
        console.log(`${i} : ${arr[i]}`);
    }
}

const task = () => {
    let str = prompt("タスクを入力してください")
    arr[arr.length] = str;
    alert("新しいタスクを追加しました。");
    out();
    prompt("「確認,追加,削除,終了」の４つのいずれかを入力してください");
    task();
}