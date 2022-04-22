
export const idGen = () =>{
    const id = Math.random().toString(36).substr(2);
    console.log(id)
    return id;
}