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
})
