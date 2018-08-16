import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { appLanguageChanged } from '../../actions';
import strings from './strings';
import {withRouter}  from  'react-router-dom';
import Text from '../Text';

class Header extends Component {


    languageChanged = () => {
        const { language } = this.props;
        this.props.appLanguageChanged(language === 'en' ? 'ar' : 'en');

    }



    render() {
        const { classes, language } = this.props;
        return (
            <div >
                <Grid style={{minHeight:40}} container spacing={0} direction={language === 'en' ? 'row' : 'row-reverse'}>
                    <Grid item xs={8} dir={language=='en'?'ltr':'rtl'}>
                        <Paper elevation={0} className={classes.paper}>
                            {this.props.noIcon ? null :this.props.language=='en'? <ArrowBack
                            onClick={()=>this.props.history.goBack()}
                            style={{ color: 'white' }} />:<ArrowForward
                            onClick={()=>this.props.history.goBack()}
                            style={{ color: 'white' }} />}
                            {this.props.profile ?<Text
                            text={strings.profile[language]}
                            onClick={()=>this.props.history.push('/profile')}
                            style={{margin:5,
                                cursor:'pointer',
                                float: language === 'en' ? 'left' : 'right', color: 'white' }} />:null}
                        </Paper>
                    </Grid>
                    <Grid  item xs={4}>
                        <Paper
                            onClick={this.languageChanged}
                            elevation={0} className={classes.paper} style={{ cursor: 'pointer',textAlign: 'right' }}>
                            <Text style={{
                                margin: 5,
                                fontWeight:'500',
                                float: language === 'en' ? 'right' : 'left',
                                fontFamily: language !== 'en' ? 'ZainEnglish' : 'ZainArabic'
                            }} text={this.props.showLanguage?strings.language[language]:null} />
                        </Paper>
                    </Grid>
                </Grid>
                <Divider style={{ backgroundColor: '#BDBDBD', marginBottom: 15 }} />
            </div>
        );
    }
}

const styles = theme => ({

    paper: {
        color: theme.palette.text.secondary,
        backgroundColor: 'transparent',
        margin: 9
    },
    icon: {
        color: 'white'
    }
});

const mapStateToProps = ({ app }) => {
    const { language } = app;
    return { language };
}


export default withRouter(connect(mapStateToProps, {
    appLanguageChanged
})(withStyles(styles)(Header)));
