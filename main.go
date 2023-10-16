package main

import (
	"github.com/catechlounge/Go-list/model"
	"github.com/catechlounge/Go-list/router"
	"github.com/labstack/echo/v4"
)

func main() {
	sqlDB := model.DBConnection()
	defer sqlDB.Close()
	e := echo.New()
	router.SetRouter(e)
}
