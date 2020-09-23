export default (cookie)=> {
    return document.cookie.split(';').find(item => item.indexOf(cookie) !== -1).split('=')[1];
}