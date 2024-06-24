package main

import (
	"sync"

	"github.com/gin-gonic/gin"
)

// User represent a user entity with username, password, and email fields.
type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
	Email    string `json:"email"`
}

// users is an memory storage for register users.
var users = make([]User, 0)

// mutex is used to ensure thread-safe access ro the user slice.
var mutex = &sync.Mutex{}

func main() {
	r := gin.Default()

	// Endpoint for register user and registeruser handle the registration of the new users
	r.POST("/register", func(c *gin.Context) {
		var user User
		if err := c.ShouldBindJSON(&user); err != nil {
			c.JSON(400, gin.H{"error": err.Error()})
			return
		}
		// Adding the user to the in-memory storage
		mutex.Lock()
		users = append(users, user)
		mutex.Unlock()

		c.JSON(200, user)
	})
	// Enpoint to retrive all registered users
	r.GET("/users", func(c *gin.Context) {
		c.JSON(200, users)
	})

	r.Run(":8080")
}
