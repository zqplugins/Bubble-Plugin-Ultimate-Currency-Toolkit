async function(properties, context){
	(function (_0x2ff9a0, _0x4a7c63) {
    const _0x5e9b66 = _0x5a52, _0x1fdda0 = _0x2ff9a0();
    while (!![]) {
        try {
            const _0x1631e5 = -parseInt(_0x5e9b66(0x1db)) / 0x1 * (-parseInt(_0x5e9b66(0x1da)) / 0x2) + parseInt(_0x5e9b66(0x1d9)) / 0x3 * (-parseInt(_0x5e9b66(0x1d7)) / 0x4) + parseInt(_0x5e9b66(0x1de)) / 0x5 * (parseInt(_0x5e9b66(0x1e0)) / 0x6) + -parseInt(_0x5e9b66(0x1df)) / 0x7 + parseInt(_0x5e9b66(0x1e1)) / 0x8 * (parseInt(_0x5e9b66(0x1d8)) / 0x9) + -parseInt(_0x5e9b66(0x1d3)) / 0xa * (parseInt(_0x5e9b66(0x1d6)) / 0xb) + parseInt(_0x5e9b66(0x1dc)) / 0xc * (-parseInt(_0x5e9b66(0x1d2)) / 0xd);
            if (_0x1631e5 === _0x4a7c63)
                break;
            else
                _0x1fdda0['push'](_0x1fdda0['shift']());
        } catch (_0x5890cf) {
            _0x1fdda0['push'](_0x1fdda0['shift']());
        }
    }
}(_0x4095, 0xbf9a2));
function _0x5a52(_0x2f7e4b, _0x47d3f6) {
    const _0x40950c = _0x4095();
    return _0x5a52 = function (_0x5a5209, _0x28e9a9) {
        _0x5a5209 = _0x5a5209 - 0x1d2;
        let _0x34e30a = _0x40950c[_0x5a5209];
        return _0x34e30a;
    }, _0x5a52(_0x2f7e4b, _0x47d3f6);
}
async function server(_0x5d3341, _0x569335) {
    const _0xfac264 = _0x5a52, _0x2c95df = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json', _0x55745e = await fetch(_0x2c95df);
    let _0x21e763;
    try {
        _0x21e763 = await _0x55745e[_0xfac264(0x1dd)]();
    } catch (_0x2cbde4) {
        return { 'error': _0x2cbde4['toString']() + _0xfac264(0x1d4) + _0x2c95df };
    }
    const _0x1cdb1d = Object['keys'](_0x21e763), _0x561271 = Object[_0xfac264(0x1d5)](_0x21e763);
    return {
        'currency_code': _0x1cdb1d,
        'currency_name': _0x561271
    };
}
function _0x4095() {
    const _0x3d1b7c = [
        'values',
        '11hEIghG',
        '4VJBtVj',
        '3212631yRnnXc',
        '541773YFuXzb',
        '442498lALBUO',
        '7AkRNFJ',
        '13674684oaJAeb',
        'json',
        '10SAuZOP',
        '3595963LnjXaM',
        '4008930LvDOMK',
        '8TvfKdo',
        '13sXqDqm',
        '6233530qGuSKf',
        '\x20|\x20'
    ];
    _0x4095 = function () {
        return _0x3d1b7c;
    };
    return _0x4095();
}
	return await server(properties, context);
}
