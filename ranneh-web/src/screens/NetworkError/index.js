import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import strings from './strings';
import Text from '../../components/Text';
import Header from '../../components/Header';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { clearAllData } from '../../actions';
import { COLOR_PRIMARY } from '../../assets/colors';
import { Link } from 'react-router-dom';

class ThankYou extends Component {

    state = {
        isStopped: false,
        isPaused: false
    }

    getUrl = () => {
        var getUrl = window.location;
        var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
        return baseUrl.replace('https', 'http');
    }

    render() {
        const { classes, language } = this.props;
        let dir = language === 'en' ? 'ltr' : 'rtl';

        return (
            <div>
                <Header showLanguage noIcon  />
                <div dir={dir} style={styles.layout}>
                    <Card style={styles.card}>
                        <CardContent style={{ textAlign: 'center' }}>
                            <div>
                                <img
                                    alt='network'
                                    style={{tintColor:'red', width: 60, height: 75, marginBottom: 40, marginTop: 40 }}
                                    src={require('../../assets/icons/networkIcon.png')} />
                            </div>
                            <div>
                                <Text text={strings.header[language]} style={{ fontSize: 20, marginTop: 18, fontWeight: '900', color: 'black' }} />
                            </div>
                            <div>
                                <Text style={{ color: "#666666" }} text={strings.subHeader[language]} />
                            </div>
                            <Button
                                onClick={() => {
                                    this.props.history.goBack();
                                }}
                                style={{textTransform:'none', marginTop: 27, width: '100%', height: 43, backgroundColor: COLOR_PRIMARY, color: 'white' }}
                                variant="extendedFab" className={classes.button}>
                                <Text style={{ textTransform:'none',fontSize: 15 ,color:'white'}} text={strings.buttonText[language]} />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

const styles = {
    layout: {
        margin: 25,
        marginTop: 10,
        marginBottom: 55
    },
    text: {
        fontSize: 30
    },
    card: {
        alignItems: 'center'
    },
    pos: {
        fontSize: '14px',
        color: COLOR_PRIMARY
    },
    title: {
        fontSize: '14px',
        color: 'black'
    },
    headLine: {
        fontSize: '16',
        fontWeight: '900',
        color: 'black'
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: '900',
        color: 'black'
    },
    modalSubTitle: {
        color: 'black',
        fontSize: '16px'
    },
    button: {
        marginLeft: 3,
        width: '10px',
        backgroundColor: 'white',
        borderRadius: 100
    },
    cardButton: {
        marginLeft: 3,
        width: '10px',
        border: '2px solid #959595',
        backgroundColor: 'white',
        borderRadius: 100
    },
    selectedCardButton: {
        marginLeft: 3,
        width: '10px',
        backgroundColor: COLOR_PRIMARY,
        borderRadius: 100
    }
}
const classess = theme => ({
    colorSwitchBase: {
        color: '#F2F2F2',
        '&$colorChecked': {
            color: COLOR_PRIMARY,
            '& + $colorBar': {
                backgroundColor: COLOR_PRIMARY,
            },
        },
    },
    colorBar: {},
    colorChecked: {},
    paper: {
        width: '80%',
        backgroundColor: 'white',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%,80%)'
    },
});

const mapStateToProps = ({ app }) => {
    const { language } = app;
    return { language };
}


export default connect(mapStateToProps, {
    clearAllData
})(withStyles(classess)(ThankYou));
