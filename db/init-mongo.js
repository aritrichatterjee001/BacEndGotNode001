db.createUser(
  {
    user: "aritricha",
    pwd: "gpDuckYourself",
    roles: [
      {
        role: "readWrite",
        db: "multicontainer-database"
      }
    ]
  }
)