const bodyParser = require('body-parser');
const cors=require('cors')
const express = require('express');
const app =express();

const Data=require('./Data/ProjectData')
const port=3001

app.use(bodyParser.json())
app.use(cors())
const ProjectData=[
    {  
        image:'hell/image',
        title:'project 1',
        description:'hello it me project 1'
    }
]

app.get('/', (req, res)=>{
    
    res.send(Data)
})
app.post('/post',(req, res)=>{
    req.body.id=Math.random()
 ProjectData.push(req.body)
res.send(ProjectData)
  
})
app.delete('/:id', (req, res)=>{
    let index =ProjectData.findIndex(x=>x.id==req.params.id)
    ProjectData.splice(index,1)
    res.send(ProjectData)
   
})
app.put('/:id', (req, res)=>{
    let index =ProjectData.findIndex(x=>x.id==req.params.id)
    ProjectData[index].image=req.body.image
    ProjectData[index].title=req.body.title
    ProjectData[index].description=req.body.description
    res.send(ProjectData)
})

app.listen(port,()=>{
    console.log(`Server Running,Listening on port : ${port}`)
})