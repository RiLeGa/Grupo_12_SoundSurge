module.exports = (req,res,next) => {
    if (req.cookies.SoundSurge) {
        req.session.userLogin = req.cookies.SoundSurge
    }
    next()
}