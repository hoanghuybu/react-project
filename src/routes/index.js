import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';
import { HeaderOnly } from '~/layouts';
import config from '~/config';

const publicRounter = [
    { path: config.route.home, component: Home },
    { path: config.route.following, component: Following },
    { path: config.route.live, component: Live },
    { path: config.route.profile, component: Profile },
    { path: config.route.upload, component: Upload, layouts: HeaderOnly },
];

const privateRounter = [];

export { privateRounter, publicRounter };
