import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    //Create a Token: jwt.sign({payload}, secretkey, {options})
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: '30d'
    }) 

    //Create a cookie: 
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production' ? true : false, //https only in production, else only http
        sameSize: 'strict',
        maxAge: 30*24*60*60*1000 //only accepts in milisecs

    })

}

const destroyToken = (res) => {
    res.cookie('jwt','',{
        httpOnly: true,
        expires: new Date(0)
    })
}

export {generateToken, destroyToken};