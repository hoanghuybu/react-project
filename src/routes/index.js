import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layouts';

const publicRounter = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layouts: HeaderOnly },
];

const privateRounter = [];

export { privateRounter, publicRounter };
