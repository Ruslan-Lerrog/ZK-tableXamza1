import http from '@/libs/axios';

export function getShopList(params) {
  return http({
    url: '/marked/marked/',
    method: 'get',
    params,
  });
}
export function getOneShopList(id) {
  return http({
    url: `/marked/marked/${id}/`,
    method: 'get',
  });
}
export function getOneShopListPhotos(id) {
  return http({
    url: `/marked/marked/${id}/get_second_photo/`,
    method: 'get',
  });
}

export function createShopList(data) {
  return http({
    url: '/marked/marked/',
    method: 'post',
    data,
  });
}

export function editShopList(data) {
  return http({
    url: `/marked/marked/${data.get('id')}/`,
    method: 'patch',
    data,
  });
}

export function deleteShopList(data) {
  return http({
    url: `/marked/marked/${data.id}/`,
    method: 'delete',
    data,
  });
}

export function deleteSecondPhoto(id) {
  return http({
    url: `/marked/images/${id}/`,
    method: 'delete',
  });
}
export function createSecondPhoto(data) {
  return http({
    url: '/marked/images/',
    method: 'post',
    data,
  });
}

export function getShopRegion(params) {
  return http({
    url: '/marked/region/',
    method: 'get',
    params,
  });
}
