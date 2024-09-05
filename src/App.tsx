import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removePage, addPage } from './store/slices/page.slice.ts';
import { motion, AnimatePresence } from 'framer-motion';
import { RootState } from './store/store';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const pages = useSelector((state: RootState) => state.page);

  const handleAdd = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    dispatch(addPage(randomColor));
  };

  const handleRemove = () => {
    dispatch(removePage());
  };

  return (
    <div className="App">
      <div className="buttons">
        <button className="add-button" onClick={handleAdd}>
          Добавить
        </button>
        <button className="remove-button" onClick={handleRemove}>
          Удалить
        </button>
      </div>
      <div className="page-list">
        <AnimatePresence initial={false}>
          {pages.map((page) => (
            <motion.div
              key={page.id}
              className="page"
              style={{ backgroundColor: page.color }}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
