import React, { useEffect, useState } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  currentTheme,
  availableThemes,
  switchTheme,
} from '../redux/slices/themeSlice';

const MyThemeProvider = (props) => {
  const theme = useSelector(currentTheme);
  const allThemes = useSelector(availableThemes);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme.theme}>
      <p>Current theme: {theme.name}</p>
      <div>
        {allThemes.map((item) => (
          <div key={Math.random()}>
            <Button onClick={() => dispatch(switchTheme(item))}>
              {item}
            </Button>
          </div>
        ))}
      </div>
      {props.children}
    </ThemeProvider>
  );
};

export default MyThemeProvider;
