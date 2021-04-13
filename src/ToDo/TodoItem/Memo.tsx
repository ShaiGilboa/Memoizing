import React, { PropsWithChildren } from 'react';

interface props {
  style?: React.CSSProperties,
  item: ItemType,
  onDelete: (item: ItemType) => void,
};

const MemoTodoItem : React.FC<PropsWithChildren<props>> = ({ item, onDelete}) => {

  const onClickDelete = React.useCallback(() => {
    onDelete(item)
  }, [onDelete])

  React.useEffect(() => {
    console.log('item', item)
  }, [])
  return (
    <div data-css='TodoItem' className='todo-item'>
      <strong>{item.title}</strong>
      <button
        onClick={onClickDelete}
      >Delete</button>
    </div>
  )
}

export default React.memo(MemoTodoItem); 