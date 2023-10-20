package main

import (
	"github.com/Takumi-666/ToDoList-Server/backend/model"
	"github.com/Takumi-666/ToDoList-Server/backend/router"
    "github.com/labstack/echo/v4"
)

func main() {
	sqlDB := model.DBConnection()
	defer sqlDB.Close()
	e := echo.New()
	router.SetRouter(e)
}