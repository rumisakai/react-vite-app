// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// ページコンポーネントのインポート
import HomePage from './pages/HomePage';
import InfomationPage from './pages/InfomationPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* 各ページのルート設定 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<InfomationPage />} />
        {/* 404 ページ */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;