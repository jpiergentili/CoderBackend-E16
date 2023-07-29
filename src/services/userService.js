import UserDaoArray from "../daos/userDaoArray.js";

export default class UserService {
    constructor() {
        this.userDao = new UserDaoArray()
    }

    getUsers = async() => {
        return await this.userDao.getAll()
    }

    addUser = async(user) => {
        return await this.userDao.save(user)
    }

}