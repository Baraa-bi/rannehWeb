import React from 'react';
import {connect} from 'react-redux';

const Text  = (props) =>{ 
    return (
        <span 
        style={{
            color:'black',
            fontFamily:props.language ==='en'?'ZainEnglish':'ZainArabic',
            ...props.style
        }}
        onClick={props.onClick}
        >{props.text}</span>
    );
}
 
const mapStateToProps  = ({app})=>{
    const {language} = app;
    return {language};
}

export default connect(mapStateToProps)(Text);
