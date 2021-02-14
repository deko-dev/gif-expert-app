export const getGifs = async( category ) => {
    const url_api = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=ghVSTcAeTNkPixgQ7duieCFrOZVMWYmo`;

    const response = await fetch( url_api );
    const { data } = await response.json();

    const gifs = data.map( 
        (gif) =>  { 
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url
            }
        }
    )

    return gifs
}