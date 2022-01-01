'use strict';

const title='======================\n現在持っているタスク一覧\n======================';
const tasklist=['掃除','買い物','散歩'];

const out = () => {
    console.log(title);
    tasklist.forEach((task, index) => console.log(`${index} : ${task}`));
}

const task = () => {
    let job = prompt('タスクを入力してください。');
    tasklist.push(job);
    alert('新しいタスクを追加しました。');
    out();
    prompt("「確認,追加,削除,終了」の４つのいずれかを入力してください");
    task();
}