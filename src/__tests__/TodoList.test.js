const TodoList = require('../TodoList')

describe('TodoList', () => {
  let list

  beforeEach(() => {
    list = new TodoList()
  })

  // R1 + Scenario 1
  test('add() 回傳含 id/title/completed 的物件', () => {
    const item = list.add('買牛奶')
    expect(item).toEqual({ id: 1, title: '買牛奶', completed: false })
  })

  // R4 + Scenario 1
  test('list() 回傳所有 todo 陣列', () => {
    list.add('買牛奶')
    list.add('運動')
    expect(list.list()).toHaveLength(2)
    expect(list.list()[0].title).toBe('買牛奶')
  })

  // R2 + Scenario 2
  test('complete(id) 標記 completed=true', () => {
    list.add('買牛奶')
    const updated = list.complete(1)
    expect(updated.completed).toBe(true)
    expect(list.list()[0].completed).toBe(true)
  })

  // R3 + Scenario 3
  test('remove(id) 刪除 todo 並回傳 true', () => {
    list.add('買牛奶')
    const result = list.remove(1)
    expect(result).toBe(true)
    expect(list.list()).toHaveLength(0)
  })

  // R7 + Scenario 4
  test('id 自動遞增且唯一', () => {
    const a = list.add('A')
    const b = list.add('B')
    const c = list.add('C')
    expect(a.id).toBe(1)
    expect(b.id).toBe(2)
    expect(c.id).toBe(3)
  })

  // R5 + Scenario 5
  test('complete(不存在的id) 拋出 Error', () => {
    expect(() => list.complete(999)).toThrow('Todo not found')
  })

  // R6 + Scenario 6
  test('remove(不存在的id) 拋出 Error', () => {
    expect(() => list.remove(999)).toThrow('Todo not found')
  })

  // ===== filter-todos: listByStatus =====

  // R1 + Scenario 1: listByStatus(false) 回傳未完成
  test('listByStatus(false) 回傳所有 completed=false 的 todo', () => {
    list.add('買牛奶')
    list.add('運動')
    list.add('看書')
    list.complete(1)
    const result = list.listByStatus(false)
    expect(result).toHaveLength(2)
    expect(result.every(i => i.completed === false)).toBe(true)
  })

  // R2 + Scenario 2: listByStatus(true) 回傳已完成
  test('listByStatus(true) 回傳所有 completed=true 的 todo', () => {
    list.add('買牛奶')
    list.add('運動')
    list.add('看書')
    list.complete(1)
    const result = list.listByStatus(true)
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe(1)
    expect(result[0].completed).toBe(true)
  })

  // R4 + Scenario 3: 空陣列回傳 []
  test('listByStatus(false) 在空 list 時回傳 []', () => {
    expect(list.listByStatus(false)).toEqual([])
  })

  // R3 + Scenario 4: 非 boolean 拋出 Error
  test('listByStatus(非boolean) 拋出 Error', () => {
    expect(() => list.listByStatus('done')).toThrow('completed must be a boolean')
    expect(() => list.listByStatus(1)).toThrow('completed must be a boolean')
    expect(() => list.listByStatus(null)).toThrow('completed must be a boolean')
  })

  // R5: 回傳淺拷貝，不影響內部狀態
  test('listByStatus 回傳淺拷貝，修改不影響內部', () => {
    list.add('買牛奶')
    const result = list.listByStatus(false)
    result[0].title = 'HACKED'
    expect(list.list()[0].title).toBe('買牛奶')
  })
})
