const express = require('express')
const request  = require('request')

const app = express()


const apiKey ="640bd726059c87bf8a2a14b21cff2de3"

const baseURL = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

app.use(express.json())

app.get('/',function(req,res){
    res.send("hey all is cool")
})


app.get('/products/:productId',async function (req,res){

    const {productId} = req.params
    const response = await request(`${baseURL}&url=https://www.amazon.com/dp/${productId}`)
    
    res.json(response)
})


app.listen(process.env.PORT||3000,function(){console.log(" app is running on port3000")})

