import {injectReducer} from 'store/reducers';
import Preview from '../routes/Preview';
import React from 'react';

export default (store) => ([
  Preview(store)
]);