import React, { useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import Link from 'next/link'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  MenuItem,
} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'

import { jaLocale } from '../locales/ja'

const Calendar: React.FC = () => {
  const calendarRef = useRef(null)
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [goal, setGoal] = useState({
    date: '',
    exercise: '',
    repetitions: 5, // 初期値を5に設定
  })

  const handleViewChange = (newView: string) => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi()
      calendarApi.changeView(newView)
    }
  }

  const handleDialogOpen = () => {
    setDialogOpen(true)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  const handleGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    // 回数の正規表現パターン（5から200までの自然数）
    const numberPattern = /^(?:[5-9]|[1-9][0-9]|1[0-9][0-9]|200)$/

    if (name === 'repetitions' && !numberPattern.test(value)) {
      // エラーメッセージを表示するか、エラー状態を処理することができます
      console.log('無効な回数です')
    } else {
      // 条件を満たす場合、目標情報を更新
      setGoal({
        ...goal,
        [name]: name === 'repetitions' ? parseInt(value, 10) : value,
      })
    }
  }

  const handleAddGoal = () => {
    // ダイアログから得た情報を使ってカレンダーに目標を追加する処理を実装
    // ここで目標をカレンダーに登録できるようにカスタムのロジックを追加
    console.log('登録する目標:', goal)
    setDialogOpen(false)
  }

  return (
    <div>
      <header
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1>カレンダー</h1>
        <div>
          <div>
            <Link href="/login">ログイン</Link>
            <Link href="/register">会員登録</Link>
            <Link href="/mypage">マイページ</Link>
            <Button onClick={handleDialogOpen} startIcon={<AddCircleIcon />}>
              目標を追加する
            </Button>
          </div>
        </div>
      </header>
      <button onClick={() => handleViewChange('dayGridMonth')}>1か月</button>
      <button onClick={() => handleViewChange('dayGridWeek')}>1週間</button>
      <button onClick={() => handleViewChange('dayGridDay')}>1日</button>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'イベント 1', date: '2023-10-25' },
          { title: 'イベント 2', date: '2023-10-27' },
          // 他のイベント
        ]}
        locale={jaLocale}
        height="auto"
      />

      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>目標を追加する</DialogTitle>
        <DialogContent>
          <DialogContentText>目標の詳細を入力してください。</DialogContentText>
          <TextField
            label="日にち"
            type="date"
            name="date"
            value={goal.date}
            onChange={handleGoalChange}
            fullWidth
          />
          <TextField
            select
            label="種目"
            name="exercise"
            value={goal.exercise}
            onChange={handleGoalChange}
            fullWidth
          >
            <MenuItem value="腕立て">腕立て</MenuItem>
            <MenuItem value="腹筋">腹筋</MenuItem>
            <MenuItem value="スクワット">スクワット</MenuItem>
          </TextField>
          <TextField
            select
            label="回数"
            type="number"
            name="repetitions"
            value={goal.repetitions}
            onChange={handleGoalChange}
            fullWidth
          >
            {Array.from({ length: 40 }, (_, i) => (i + 1) * 5).map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={handleAddGoal} color="primary">
            登録
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Calendar
