// 指令資料庫
const commands = {
    add: {
        title: "ADD: 準備行李 🎒",
        description: "將你修改或新增的檔案，從工作目錄 (Working Directory) 放到暫存區 (Staging Area)，準備進行提交。",
        syntax: "add [檔案名稱 或 .代表全部]"
    },
    commit: {
        title: "COMMIT: 蓋章存檔 💾",
        description: "將暫存區的檔案正式存入本地倉庫 (Local Repository)。這就像是遊戲中的「存檔點」，需要寫下簡短的說明 (Message)。",
        syntax: "commit -m \"你的提交訊息\""
    },
    push: {
        title: "PUSH: 寄送包裹 📤",
        description: "將你本地倉庫的變更，上傳到遠端倉庫 (如 GitHub)。分享你的進度給大家！",
        syntax: "push [遠端名稱] [分支名稱]"
    },
    pull: {
        title: "PULL: 領取包裹 📥",
        description: "從遠端倉庫下載最新的變更，並自動合併到你目前的工作目錄中。",
        syntax: "pull [遠端名稱] [分支名稱]"
    },
    revert: {
        title: "REVERT: 時光倒轉？🕒",
        description: "創建一個「新的」提交，用來取消某個舊提交的修改。它不會抹除歷史紀錄，而是安全地撤銷變更。",
        syntax: "revert [提交的雜湊碼/ID]"
    },
    checkout: {
        title: "CHECKOUT: 傳送到別處  teleport 🔮",
        description: "切換到不同的分支 (Branch) 或歷史版本。注意：新版 Git 推薦使用 `switch` 和 `restore` 來做更安全的分流操作。",
        syntax: "checkout [分支名稱 或 雜湊碼]"
    },
    merge: {
        title: "MERGE: 組合機器人 🤖",
        description: "將一個分支的變更合併到另一個分支。這是團隊合作中很重要的步驟！",
        syntax: "merge [要合併進來的分支名稱]"
    }
};

// 獲取 Modal 元素
const modal = document.getElementById("commandModal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalSyntax = document.getElementById("modal-command-syntax");

// 顯示 Modal
function showModal(commandName) {
    const data = commands[commandName];
    if (data) {
        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        modalSyntax.textContent = data.syntax;
        modal.style.display = "flex"; // 使用 flex 讓內容置中
    }
}

// 關閉 Modal
function closeModal() {
    modal.style.display = "none";
}

// 點擊 Modal 外部時關閉視窗
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}
