# Notes: add-todo-item

## GitHub
Issue: #1 https://github.com/transtan1026/myspec-todo-test/issues/1

PR: #2 https://github.com/transtan1026/myspec-todo-test/pull/2

PR: #2 https://github.com/transtan1026/myspec-todo-test/pull/2

## Reflection（封存時填寫）

### 學到什麼
- worktree + feature branch 讓 main 始終乾淨，開發中可隨時切回 main 查東西
- TDD 讓 R5/R6（error handling）在 Green 階段自然浮現，不用事後補
- `_find()` 私有方法消除 complete/remove 的重複邏輯，是 Refactor 階段才發現的

### 下次不同
- 應在 init 時就建好 GitHub Actions（npm test），這次沒有 CI 只能靠本地跑
- issue body 要用 --body-file，直接 --body 有 shell escaping 問題（已踩）

### Tech Debt
- 無持久化：目前重啟即失資料，下一步若有需要可加 localStorage 或 DB
