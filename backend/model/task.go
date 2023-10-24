//model/task.go

package model

import (
	"github.com/google/uuid"
	_ "gorm.io/gorm"
)

// Task型は目標データを表す
type Task struct {
	ID       	 uuid.UUID
    Date         string `json:"date"`
    Exercise     string `json:"exercise"`
    Repetitions  int    `json:"repetitions"`
}



// 関数GetTasksは、引数はなく、戻り値は[]Task型（Task型のスライス）とerror型である
func GetTasks() ([]Task, error) {

	// 空のタスクのスライスである、tasksを定義する
	var tasks []Task

	// tasksにDBのタスク全てを代入する。その操作の成否をerrと定義する(*5)
	err := db.Find(&tasks).Error

	// tasksとerrを返す
	return tasks, err
}

/* 関数 AddTask は新しいタスクをデータベースに追加し、引数として日付（date）、
エクササイズ（exercise）、回数（repetitions）を受け取ります。*/
func AddTask(date, exercise string, repetitions int) (*Task, error) {
    id, err := uuid.NewUUID()
    if err != nil {
        return nil, err
    }

    task := Task{
        ID:          id,
        Date:        date,
        Exercise:    exercise,
        Repetitions: repetitions,
    }

    if err := db.Create(&task).Error; err != nil {
        return nil, err
    }
    return &task, nil
}

// 関数 ChangeFinishedTaskの引数はuuid.UUID型のtaskIDで、戻り値はerror型である
func ChangeFinishedTask(taskID uuid.UUID) error {

	// DBのTaskテーブルからtaskIDと一致するidを探し、そのFinishedをtureにする(*3)
	err := db.Model(&Task{}).Where("id = ?", taskID).Update("finished", true).Error
	return err
}

func DeleteTask(taskID uuid.UUID) error {
	// DBのTaskテーブルからtaskIDと一致するidを探し、そのタスクを削除する
	err := db.Where("id = ?", taskID).Delete(&Task{}).Error
	return err
}
