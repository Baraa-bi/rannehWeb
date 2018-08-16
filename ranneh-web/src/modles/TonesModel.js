import _ from 'lodash';
import { TONE_PLANS } from '../actions/types';
import { handleJson } from '../actions';






export const tonesModel = tone => {


    let authorImage = handleJson(() => tone.author.media[1].url, handleJson(() => {
            if (tone.author.name)
                return 'https://s3-us-west-2.amazonaws.com/ranneh/assets/RANNEH.png';
        }, 'https://s3-us-west-2.amazonaws.com/ranneh/assets/13358-NOXEYN-01.jpg')
    );

    let subscription = {
        id: handleJson(()=>tone.subscription.subscription_id),
        isEnabled :  handleJson(()=>tone.subscription.is_enabled),
        autoRenewal: handleJson(()=>tone.subscription.auto_renewal)
    };

    let toneItem = {
        toneId: tone.id,
        toneName:{
            en: tone.name ,
            ar:tone.name_arabic,
        },
        toneAuthor:{
            en: tone.author.name,
            ar: tone.author.name_arabic
        },
        toneSource: tone.source,
        toneAuthorId: handleJson(() => tone.author.id),
        toneAudio: handleJson(() => tone.audio.url || '',''),
        toneLanguageId: tone.language,
        toneLanguage: checkLanguage(tone.language),
        toneBadgeEn: handleJson(() => tone.badge.en, ''),
        toneBadgeAr: handleJson(() => tone.badge.ar, ''),
        isSubscribed:tone.is_subscribed,
        children: handleJson(() => _.map(tone.children.data, subTone => tonesModel(subTone)), []),
        genres: handleJson(() => tone.genres.data),
        toneImage: handleJson(() => tone.media[1].url, authorImage),
        toneImageFull: handleJson(() => tone.media[1].url, authorImage),
        tonePlans: handleJson(() => tone.plans.ref),
        subscription,
        planId:tone.plan_id
    };
    return toneItem;
};


export const checkLanguage = toneLanguage => {
    if (toneLanguage == 2 || toneLanguage == 4) return 'ARABIC';
    return 'ENGLISH';
};
