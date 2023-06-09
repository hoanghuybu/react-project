import * as request from '~/untils/reques';

export const search = async (q, type = 'less') => {
    try {
        const res = await request.get('/users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
};
