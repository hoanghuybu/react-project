import * as request from '~/untils/reques';

export const search = async (q, type = 'more') => {
    try {
        const res = await request.get('/users', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
