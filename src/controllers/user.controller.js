import UserService from "../services/userService.js";
const userService = new UserService()

const getUsers = async(req, res) => {
    let result = await userService.getUsers()
    res.json(result)
}

const saveUser = async(req, res) => {
    let user = req.body
    //HACER VALIDACIONES....
    let result = await userService.addUser(user)
    res.json(result)
}

export default { getUsers, saveUser}