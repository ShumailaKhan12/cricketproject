const GetStorgeData =({data}:any) =>{
    localStorage.setItem('session', JSON.stringify(data));
}