import {$host} from './index';

export const fetchType = async (id) => {
    const {data} = await $host.get('api/type/' + id);
    return data;
}