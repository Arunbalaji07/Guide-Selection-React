import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const comparePassword = (password, hash) => {
    return bcrypt.compare(password, hash)
}

export const hashPassword = (password) => {
    return bcrypt.hash(password, 7)
}

export const createJWTStudent = (user) => {
    const token = jwt.sign({
            name: user.name,
            regno: user.regno,
            email: user.email
        },
        "Sathyabama-Student"
    )
    return token
}

export const createJWTStaff = (user) => {
    const token = jwt.sign({
            name: user.name,
            email: user.email
        },
        "Sathyabama-Student"
    )
    return token
}