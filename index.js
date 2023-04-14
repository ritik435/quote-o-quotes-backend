import Express  from "express";

const PORT=3000;
const app = Express();

app.get('/',(req,res)=>{
    res.send('<h1>Its the backend</h1>');
})
app.listen(PORT,()=>{
    console.log(`App is listening to http://localhost:${PORT}`);
})


// Export the Express API
export default app;