
const prom = () => new Promise ((resolve, reject) => {
    setTimeout(() => {
        if(Math.round(Math.random() * 10) % 3 === 0) {
            return reject('не повезло')
        } else {
            return resolve('повезло')
        }
    }, 2000)
})

export default prom