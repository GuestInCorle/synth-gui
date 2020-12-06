import React, {useCallback, useState} from 'react';
import './App.css';
import {FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";

enum Mode {
  FractionalMod2 = 0,
  FractionalMod1 = 1,
  Fractional36Bit = 2,
  Integer = 3,
}

function App() {
  const [mode, setMode] = useState(Mode.Integer);
  const modeChange = useCallback((event) => {
    setMode(event.target.value);
  }, []);
  const [integerDivider, setIntegerDivider] = useState(100);
  const integerDividerChange = useCallback((event) => {
    setIntegerDivider(parseInt(event.target.value));
  }, []);
  return (
    <Grid
      container
      direction="row">
      <Grid item xs={6}>
        <FormControl>
          <InputLabel id="mode-label">MODSEL</InputLabel>
          <Select
            labelId="mode-label"
            id="mode"
            value={mode}
            onChange={modeChange}
          >
            <MenuItem value={Mode.FractionalMod2}>Дробный MOD2</MenuItem>
            <MenuItem value={Mode.FractionalMod1}>Дробный MOD1</MenuItem>
            <MenuItem value={Mode.Fractional36Bit}>Дробный 36 бит</MenuItem>
            <MenuItem value={Mode.Integer}>Целочисленный</MenuItem>
          </Select>
          <FormHelperText>Режим работы</FormHelperText>
        </FormControl>
        <TextField
          id="integer-divider"
          label="Integer divider"
          type="number"
          value={integerDivider}
          onChange={integerDividerChange}
        />
      </Grid>
      <Grid item xs={6}>
        <span>{mode.toString(2).padStart(2, '0')}{integerDivider.toString(2).padStart(20, '0')}0000000000</span>
      </Grid>
    </Grid>
  );
}

export default App;
