# Spec: add-todo-item

## Requirements

- R1: `add(title)` 新增一筆 todo，回傳含 `{ id, title, completed: false }` 的物件
- R2: `complete(id)` 把指定 id 的 todo 的 `completed` 改為 `true`，回傳更新後的 item
- R3: `remove(id)` 刪除指定 id 的 todo，回傳 `true`
- R4: `list()` 回傳目前所有 todo 的陣列
- R5: `complete(id)` 對不存在的 id 拋出 `Error('Todo not found')`
- R6: `remove(id)` 對不存在的 id 拋出 `Error('Todo not found')`
- R7: 每筆 todo 的 id 必須唯一（自動遞增整數）

## Non-goals
- 不做 UI
- 不做持久化（資料在記憶體）
- 不做優先級、截止日期

## Acceptance Scenarios

### Scenario 1 — 新增 todo
Given 一個空的 TodoList
When 呼叫 add('買牛奶')
Then 回傳 `{ id: 1, title: '買牛奶', completed: false }`
And list() 回傳長度為 1 的陣列

### Scenario 2 — 完成 todo
Given TodoList 中有 id=1 的 todo
When 呼叫 complete(1)
Then 回傳 `{ id: 1, title: '買牛奶', completed: true }`
And list()[0].completed === true

### Scenario 3 — 刪除 todo
Given TodoList 中有 id=1 的 todo
When 呼叫 remove(1)
Then 回傳 true
And list() 回傳空陣列

### Scenario 4 — 多筆 todo id 唯一遞增
Given 一個空的 TodoList
When 依序呼叫 add('A')、add('B')、add('C')
Then 三筆的 id 分別是 1、2、3

### Scenario 5 — 完成不存在的 todo
Given 一個空的 TodoList
When 呼叫 complete(999)
Then 拋出 Error('Todo not found')

### Scenario 6 — 刪除不存在的 todo
Given TodoList 中沒有 id=999 的 todo
When 呼叫 remove(999)
Then 拋出 Error('Todo not found')
