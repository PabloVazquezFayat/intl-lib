export default (url)=> {

    const data = {};
    const codes = url.split('?')[1].split('&');

    codes.forEach((item)=> {
        data[item.split('=')[0]] = item.split('=')[1];
    });

    data.page = url.split('?')[0];
    data.packageCode ? data['numberOfNights'] = parseInt(data.packageCode.substring(2, 4)) : null ;

    return data;

}