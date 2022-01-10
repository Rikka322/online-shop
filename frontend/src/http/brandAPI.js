import {$host} from './index';

export const fetchBrand = async (id) => {
    const {data} = await $host.get('api/brand/' + id);
    return data;
}