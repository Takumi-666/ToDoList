// pages/mypage.tsx
import React from 'react'
import ProfileCard from './components/Profile'

const MyPage: React.FC = () => {
  return (
    <div>
      <ProfileCard
        username="ユーザー名"
        iconUrl="/path/to/icon.jpg" // アイコン画像のパス
        achievements={10} // 目標達成数
      />
    </div>
  )
}

export default MyPage
