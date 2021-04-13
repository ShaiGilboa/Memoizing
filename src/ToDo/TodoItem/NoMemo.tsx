import React, { PropsWithChildren } from 'react';

interface props {
  style?: React.CSSProperties,
  item: ItemType,
  onDelete: (item: ItemType) => void,
};

const NoMemoTodoItem : React.FC<PropsWithChildren<props>> = ({ item, onDelete}) => {

  const onClickDelete = () => {
    onDelete(item)
  }

  return (
    <div data-css='TodoItem' className='todo-item'>
      <strong>{item.title}</strong>
      <button
        onClick={onClickDelete}
      >Delete</button>
    </div>
  )
}

export default NoMemoTodoItem; 