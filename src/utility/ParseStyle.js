export default (style)=> {

    let styleString = '';

    if(Array.isArray(Object.keys(style))){
        for (const key in style) {
            styleString += style[key];
        }
    }

    if(typeof style === 'string'){
        styleString = style.replace(/\s/g,'');
    }

    return styleString;
    
}