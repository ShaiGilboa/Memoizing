import React from 'react';
import logo from './logo.svg';
import './App.css';
import MemoTodoItem from './ToDo/TodoItem/Memo';

function MemoApp() {
  const [list, setList] = React.useState<ItemType[]>([])
  const [newItemTitle, setNewItemTitle] = React.useState<string>('')
  
  const onSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('newItemTitle', newItemTitle)
    const newList: ItemType[] = list.concat({title: newItemTitle, id: Math.random()})
    setList(newList)
    setNewItemTitle('')
  }, [newItemTitle])
  
  const onDelete = React.useCallback((item: ItemType) => {
    const ItemIndex = list.findIndex(listItem => listItem.id === item.id)
    const newList: ItemType[] = JSON.parse(JSON.stringify(list))
    console.log('list pre-', list)
    const deleted = newList.splice(ItemIndex, 1)
    console.log('newList post-', newList)
    console.log('deleted', deleted)
    setList(newList)
  }, [list])

  // const onDelete = (item: ItemType) => {
  //   const ItemIndex = list.findIndex(listItem => listItem.id === item.id)
  //   const newList: ItemType[] = JSON.parse(JSON.stringify(list))
  //   console.log('list pre-', list)
  //   const deleted = newList.splice(ItemIndex, 1)
  //   console.log('newList post-', newList)
  //   console.log('deleted', deleted)
  //   setList(newList)
  // }


  return (
    <div className="App">
      <header className="App-header">
        <form
          onSubmit={onSubmit}
        >
          <h2 className='title' >Add Item</h2>
          <label id='title' htmlFor='html-title'>
            Title:
            <input type='text' name='input-title'
              value={newItemTitle}
              onChange={(e) => setNewItemTitle(e.target.value)}
            />
          </label>
          <button type='submit'>
            Add
          </button>
        </form>
      </header>
      <main className='App-main'>
        <h2>Items</h2>
        <section style={{width: '30vh'}}>
          <>
          {list.map(item => {
            return <MemoTodoItem item={item} onDelete={onDelete} />
          })}
          </>
        </section>
      </main>
    </div>
  );
}

export default MemoApp;
