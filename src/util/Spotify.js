const clientID = '1523d2a81c0040c2b9e2466405ed3b29';
const redirectURI = 'http://localhost:3000/';

let accessToken = '';
let URL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;

const Spotify = {
    async search(term) {
        const searchURL = `https://api.spotify.com/v1/search?type=track&q=${term}`;
        accessToken = getAccessToken();
console.log(`Bearer ${accessToken}`);
        try {
            const response = await fetch(searchURL, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            if(response.ok) {
alert('response ok');
                const jsonResponse = await response.json();
                return jsonResponse.length === 0 ? [] : jsonResponse;
            }

alert('throw error');
            throw new Error('Request Failed!');
        } catch(error) {
            console.log(error);
            alert('catch error');
        }        
    }  
};

function getAccessToken() {
    if(accessToken) {
        return accessToken;
    }
  
    alert(`URL: ${URL}`);
    window.location.assign(URL);
  
    let href = window.location.href;
    alert(`href: ${href}`);
  
    accessToken = href.match(/access_token=([^&]*)/)[1];
    let expiresIn = href.match(/expires_in=([^&]*)/)[1];
  
    alert(`accessToken: ${accessToken}`);
    alert(`expiresIn: ${expiresIn}`);
  
    window.setTimeout(() => accessToken = '', expiresIn * 1000);
    window.history.pushState('Access Token', null, '/');        
  
    if(!accessToken) {
        alert(`Access token not found. Going back to ${redirectURI}`);
        window.location = redirectURI;
    }
   
    return accessToken;
  }

export default Spotify;

/*
function getAccessToken() {
    if(accessToken) {
        return accessToken;
    }

    alert(`URL: ${URL}`);
    window.location(URL);

    let href = window.location.href;
    alert(`href: ${href}`);
    
    let accessToken = href.match(/access_token=([^&]*)/);
    let expiresIn = href.match(/expires_in=([^&]*)/);

    alert(`accessToken: ${accessToken}`);
    alert(`expiresIn: ${expiresIn}`);

    window.setTimeout(() => accessToken = '', expiresIn * 1000);
    window.history.pushState('Access Token', null, '/');        

    return accessToken;

    if(!accessToken) {
        alert(`Access token not found. Going back to ${redirectURI}`);
        window.location = redirectURI;
    }

    return '';
}
*/
