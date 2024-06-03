
const getImage = async() => {

    try{
    const apiKey = 'iExDoJsUzcGvpbNRnVpjdvAfXRqpmpUi';
    const resp = await fetch (`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`)
    const {data} = await resp.json();
    
    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
    }catch(error){
    //manejo del error
    console.log(error)
    }

}

getImage();
