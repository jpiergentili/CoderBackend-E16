/* -----------------------------DAO CON PERSISTENCIA EN ARCHIVO----------------------------------- */

import fs from 'fs'

export default class UserDaoFile {
    constructor() {
        this.path = '.data/user.json'
        this.#init()
    }
    
    #init = async() => {
        if (!fs.existsSync(this.path)) await fs.promises.writeFile(this.path, JSON.stringify([]))
    }

    getAll = async() => {
        let users = await fs.promises.readFile(this.path, 'utf-8')
        return JSON.parse(users)
    }

    save = async(user) => {
        const users = await this.getAll()
        if (users.length === 0) user.id = 1
        else user.id = users[users.length-1].id + 1
        users.push(user)
        await fs.promises.writeFile(this.path, JSON.stringify(users, null, '\t'))
        return user
    }
}
