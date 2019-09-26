import React from 'react';
import { useSelector } from 'react-redux';
import * as TableSelectors from '../redux/selectors/TableSelectors';

export default function MarkdownCell({ rowIndex, columnIndex }) {

  const value = useSelector(TableSelectors.getCellValue(rowIndex, columnIndex));
  const lastColumn = useSelector(TableSelectors.isLastColumn(columnIndex));
  return (
    <span>| {value} { lastColumn && '|'}</span>
  );
}