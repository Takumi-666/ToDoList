//model/db.go
package model

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/google/uuid"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)
// Goal型は目標を表す
type Goal struct {
	ID          uuid.UUID `json:"id"`
	Date        string    `json:"date"`
	Exercise    string    `json:"exercise"`
	Repetitions int       `json:"repetitions"`
}

var db *gorm.DB

// DB接続とテーブルを作成する
func DBConnection() *sql.DB {
	dsn := GetDBConfig()
	var err error
	db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(fmt.Errorf("DB Error: %w", err))
	}
	CreateTable(db)
	sqlDB, err := db.DB()
	if err != nil {
		panic(fmt.Errorf("DB Error: %w", err))
	}
	return sqlDB
}

// DBのdsnを取得する
func GetDBConfig() string {
	user := os.Getenv("DB_USERNAME")
	password := os.Getenv("DB_PASSWORD")
	hostname := os.Getenv("DB_HOSTNAME")
	port := os.Getenv("DB_PORT")
	dbname := os.Getenv("DB_DBNAME")

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", user, password, hostname, port, dbname) + "?charset=utf8mb4&parseTime=True&loc=Local"
	return dsn
}

// Task型のテーブルを作成する
func CreateTable(db *gorm.DB) {
	db.AutoMigrate(&Goal{})
}

// SaveGoalToDatabase は目標をデータベースに保存します
func SaveGoalToDatabase(goal Goal) error {
    // データベースに目標を保存するロジックを実装
    if err := db.Create(&goal).Error; err != nil {
        return err
    }
    return nil
}