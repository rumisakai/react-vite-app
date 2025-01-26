import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

// データはhttpリクエストで取得することを想定
const rows = [
  {
    id: 1,
    '地区ID': 1,
    地区名称: '神戸',
    天気: '晴れ',
  },
  {
    id: 2,
    '地区ID': 2,
    地区名称: '大阪',
    天気:  '曇り',
  },
  {
    id: 3,
    '地区ID': 3,
    地区名称: '京都',
    天気:  '雨',
  },
];

export default function ColumnWidthGrid() {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        columns={[{ field: '地区ID' },{ field: '地区名称', width: 200 }, { field: '天気' }]}
        rows={rows}
      />
    </div>
  );
}
