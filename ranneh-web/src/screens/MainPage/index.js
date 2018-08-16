import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import Play from '@material-ui/icons/PlayArrow';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import strings from './strings';
import Button from '@material-ui/core/Button';
import { COLOR_PRIMARY, COLOR_ALT } from '../../assets/colors';
import {
    generateUserToken,
    clearAllData,
    userTokenChanged,
    getSingleTone,
    subscribeTone, 
    getToneList,
    getMsisdnByTokenId, 
} from '../../actions';
import _ from 'lodash';
import { ACTIVE_PAY_AS_YOU_GO, AVAILABLE_PAY_AS_YOU_GO } from '../../actions/types';
import Text from "../../components/Text";

class MainPage extends Component {

    state = {
        open: false,
        confirmed: false
    };

    getParam = (q) => {
        return q.split('=')[1];
    };


    componentDidMount() {
        this.props.generateUserToken(() => {
            this.props.getMsisdnByTokenId(() => {
                this.props.getSingleTone(1614);
            });
        }, () => {
            this.props.history.push('/network-error')
        });
    }

    render() {
        const { classes, language, subscribingTone } = this.props;
        let Icon = language === 'en' ? ChevronRight : ChevronLeft;
        let dir = language === 'en' ? 'ltr' : 'rtl';
        console.log(this.props.tone);
        if (this.props.loadingFeatures)
            return (<div>
                <Header showLanguage noIcon />
                <div style={{ flex: 1, textAlign: 'center', padding: 30 }}>
                    <CircularProgress style={{ color: "white" }} size={130} />
                </div>
            </div>)
        return (
            <div>
                <Header showLanguage noIcon />

                <Grid item style={{ margin: 25, textAlign: 'center' }}>
                    <div style={{ marginTop: 50 }} />
                    <Text
                        style={{ width: '100%', color: COLOR_PRIMARY, textAlign: 'center', fontSize: 20 }}
                        text={strings.header[language]}
                    />
                    {_.map(this.props.tone, tone => {
                        return (
                            <div key={tone.toneId} style={{ textAlign: 'center', marginTop: 25 }}>
                                <div
                                    style={{ left: 0, right: 0, width: 202, margin: 'auto', height: 202, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', color: COLOR_PRIMARY }}>

                                    <CircularProgress
                                        thickness={1}
                                        style={{ width: 200, height: 200, position: 'absolute', color: COLOR_PRIMARY }}
                                        variant="static" value={45} />
                                    <Play
                                        thickness={1}
                                        size={25}
                                        onClick={() => alert('wow')}
                                        style={{ fontSize: 45, backgroundColor: COLOR_PRIMARY, borderRadius: 100, color: 'white' }}
                                        variant="static" value={100} />
                                </div>
                                <img style={{ width: 200, height: 200, borderRadius: 100 }} src={tone.toneImage} />
                                <div style={{ marginTop: 15 }}>
                                    <Text
                                        style={{ color: 'black', fontSize: 20 }}
                                        text={tone.toneName && tone.toneName[language]} />
                                    <div>
                                        <Text
                                            style={{ color: COLOR_PRIMARY, fontSize: 15 }}
                                            text={tone.toneAuthor && tone.toneAuthor[language]} />
                                    </div>
                                </div>
                                <Button
                                    onClick={()=>this.props.subscribeTone(tone)}
                                    disabled={subscribingTone}
                                    style={{ backgroundColor:subscribingTone?'#BDBDBD': COLOR_PRIMARY, borderRadius: 100, margin: 15, textTransform: 'none' }}
                                >
                        {subscribingTone&&<CircularProgress size={15} style={{marginLeft:5,marginRight:5,color:'white'}}/>}
                                    <Text
                                        style={{ color: 'white' }}
                                        text={strings.activate[language]}
                                    />
                                </Button>
                            </div>
                        )
                    })}

                    <div style={{ marginTop: 70, textAlign: 'center' }}>
                        <div>
                            <img src={require('../../assets/images/RannehLogo.png')}
                                style={{ width: 70, height: 70, marginRight: 10 }} />
                        </div>
                        <Text
                            style={{ color: 'black', textAlign: 'left' }}
                            text={strings.downloadRanneh[language]}
                        />
                        <div>
                            <Text
                                onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=com.ranneh'}
                                style={{ color: COLOR_PRIMARY, textDecoration: 'underline' }}
                                text={strings.downloadNow[language]}
                            />
                        </div>
                    </div>
                </Grid>
            </div>
        );
    }
}

const styles = {
    layout: {
        margin: 25,
        marginTop: 10
    },
    text: {
        fontSize: 30
    },
    card: {
        cursor: 'pointer',
        marginTop: 25
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
        fontSize: '20px',
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
        backgroundColor: 'red'
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

const mapStateToProps = ({ app, auth, tones }) => {
    const { language } = app;
    const { apiToken, defaultToken } = auth;
    const { tone ,subscribingTone } = tones;
    return {
        language,
        defaultToken,
        subscribingTone,
        apiToken,
        tone
    };
};


export default connect(mapStateToProps, {
    generateUserToken,
    subscribeTone,
    clearAllData,
    userTokenChanged,
    getSingleTone,
    getMsisdnByTokenId,
    getToneList
})(withStyles(classess)(MainPage));
