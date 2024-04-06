import fs from "fs"

const usersFile = "users.json"

function registerUser(username, password) {
  'use server'
  let data = JSON.parse(fs.readFile(usersFile))
  data[username] = password
  fs.writeFile(usersFile, JSON.stringify(data))
  return true
}

export { registerUser }
