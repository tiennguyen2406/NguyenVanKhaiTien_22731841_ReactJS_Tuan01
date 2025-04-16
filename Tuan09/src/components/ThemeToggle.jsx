import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/slices/themeSlice';

const ThemeToggle = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.className = isDark ? 'dark-theme' : 'light-theme';
  }, [isDark]);

  return (
    <button className="theme-toggle" onClick={() => dispatch(toggleTheme())}>
      Theme
    </button>
  );
};

export default ThemeToggle; 