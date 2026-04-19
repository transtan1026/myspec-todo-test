/**
 * 簡易 TodoList — 記憶體版
 * 支援 add / list / complete / remove / listByStatus，每筆 id 自動遞增
 */
class TodoList {
  constructor() {
    this._items = []
    this._nextId = 1
  }

  /** 新增 todo，回傳 { id, title, completed: false } */
  add(title) {
    const item = { id: this._nextId++, title, completed: false }
    this._items.push(item)
    return { ...item }
  }

  /** 回傳目前所有 todo（淺拷貝） */
  list() {
    return this._items.map(i => ({ ...i }))
  }

  /** 標記指定 id 為完成，不存在拋 Error */
  complete(id) {
    const item = this._find(id)
    item.completed = true
    return { ...item }
  }

  /** 刪除指定 id，不存在拋 Error，成功回傳 true */
  remove(id) {
    const idx = this._items.findIndex(i => i.id === id)
    if (idx === -1) throw new Error('Todo not found')
    this._items.splice(idx, 1)
    return true
  }

  /**
   * 依完成狀態篩選 todo（淺拷貝）
   * @param {boolean} completed - true 回傳已完成，false 回傳未完成
   * @returns {Array}
   */
  listByStatus(completed) {
    if (typeof completed !== 'boolean') {
      throw new Error('completed must be a boolean')
    }
    return this._items
      .filter(i => i.completed === completed)
      .map(i => ({ ...i }))
  }

  /** @private */
  _find(id) {
    const item = this._items.find(i => i.id === id)
    if (!item) throw new Error('Todo not found')
    return item
  }
}

module.exports = TodoList
