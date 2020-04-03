/**
 * 格式化时间
 * @param {Date} date 
 * 时间对象 date
 * @param {String} fmt 
 * 目前支持关键字是 yyyy[年] MM[月] dd[日] HH[时] mm[分] ss[秒]
 * 关键字起占位的作用, 可以任意组拼时间
 */
const format = function (date, fmt) {

    // 初始化可能的格式
    const _o = {
        yyyy: date.getFullYear(),
        MM: date.getMonth() + 1,
        dd: date.getDate(),
        HH: date.getHours(),
        mm: date.getMinutes(),
        ss: date.getSeconds()
    };

    // 剔除分割符
    let _match = fmt.match(/([a-z]+)/ig);

    // 匹配格式
    _match.forEach(item => {
        if (_o[item]) {
            _o[item] = _o[item] > 9 ? _o[item] : '0' + _o[item]
            fmt = fmt.replace(item, _o[item])
        }
    });

    return fmt;
}

export default { format };