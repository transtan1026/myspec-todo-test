# Proposal: Add Todo Item

## Problem
使用者需要一個簡單的 TodoList 模組，可以新增、完成、刪除待辦事項。目前專案完全空白，沒有任何業務邏輯。

## Proposal
實作一個 `TodoList` class，提供三個核心操作：
- `add(title)` — 新增一筆 todo，回傳帶 id 的 item
- `complete(id)` — 把指定 todo 標記為完成
- `remove(id)` — 刪除指定 todo

## Approach
純 JS class，不依賴任何 framework。用 Jest 做 TDD 開發。

## Non-goals
- 不做 UI（純邏輯）
- 不做持久化（記憶體即可）
- 不做優先級、截止日期等進階功能

## Risks
無重大風險，純粹的業務邏輯模組。

## Success
- 三個操作都有對應測試且全綠
- 邊界情況（重複 complete、刪不存在的 id）有處理
