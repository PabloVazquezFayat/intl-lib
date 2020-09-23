import render from '../utility/Render';
import './test.css';

export default (props) => {
    
    const parent = document.querySelector(props.parent);
    const backgroundImage = `background-image: url(${props.background});`;

    const div = (
        <div id="ge_new-hero" className='bannerStyle' style={backgroundImage}>
            <div className='ge_hero-text'>
                <h1>HERO BANNER TEXT HERE</h1>
                <p>HERO BANNER DESCRIPTION TEXT HERE</p>
                <small>hero banner disclaimer text here. hero banner disclaimer text here</small>
            </div>
        </div>
    );

    parent.append(div);

}