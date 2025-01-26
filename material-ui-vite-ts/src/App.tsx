// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';

// ページコンポーネントのインポート
import HomePage from './pages/HomePage';
import InfomationPage from './pages/InfomationPage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import NotificationPage from './pages/NotificationPage';
import MyAccountPage from './pages/MyAccountPage';
import MessagePage from './pages/MessagePage';
import SignInOriginalPage from './pages/SignInOriginalPage';

const isLogin = false;

const PrivateRoutes = () => {
  // 未ログインチェック
  // （isLoginを判定する処理は省略してます）
  if (isLogin === false) {
    return (
      <Navigate to='/signin' />
    )
  }
  return <Outlet />
}

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* 各ページのルート設定 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInOriginalPage />} />
        {/* サインインを求めるルートのルート設定 */}
        <Route element={<PrivateRoutes />}>
          <Route path="/info" element={<InfomationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/notice" element={<NotificationPage />} />
          <Route path="/account" element={<MyAccountPage />} />
          <Route path="/message" element={<MessagePage />} />
        </Route>
        {/* 404 ページ */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;