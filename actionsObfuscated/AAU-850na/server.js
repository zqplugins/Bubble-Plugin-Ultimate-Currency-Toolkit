async function(properties, context){
	(function (_0xf15dd7, _0x445fd6) {
    const _0x2e773d = _0x2f03, _0x4c3705 = _0xf15dd7();
    while (!![]) {
        try {
            const _0x322336 = parseInt(_0x2e773d(0x186)) / 0x1 + parseInt(_0x2e773d(0x188)) / 0x2 + parseInt(_0x2e773d(0x18d)) / 0x3 + parseInt(_0x2e773d(0x18a)) / 0x4 + parseInt(_0x2e773d(0x180)) / 0x5 * (parseInt(_0x2e773d(0x18c)) / 0x6) + -parseInt(_0x2e773d(0x181)) / 0x7 + -parseInt(_0x2e773d(0x18b)) / 0x8 * (parseInt(_0x2e773d(0x182)) / 0x9);
            if (_0x322336 === _0x445fd6)
                break;
            else
                _0x4c3705['push'](_0x4c3705['shift']());
        } catch (_0x26f797) {
            _0x4c3705['push'](_0x4c3705['shift']());
        }
    }
}(_0x16b1, 0xab7c1));
function _0x16b1() {
    const _0x14f096 = [
        '1609802zODntl',
        'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@',
        '3326980pgTohc',
        '12856456uLYiDq',
        '24SNOKfR',
        '3386184SYEOZN',
        'first_currency',
        'toString',
        '/v1/currencies/',
        'time',
        '97400kRgAIP',
        '8232784oMEDwL',
        '9rSDaQg',
        'second_currency',
        '.json',
        'trim',
        '642276YCHQND',
        'json'
    ];
    _0x16b1 = function () {
        return _0x14f096;
    };
    return _0x16b1();
}
function _0x2f03(_0x1ecaa0, _0x2a3692) {
    const _0x16b1bd = _0x16b1();
    return _0x2f03 = function (_0x2f0345, _0x4219fb) {
        _0x2f0345 = _0x2f0345 - 0x17f;
        let _0x2458df = _0x16b1bd[_0x2f0345];
        return _0x2458df;
    }, _0x2f03(_0x1ecaa0, _0x2a3692);
}
async function server(_0x15f6cf, _0x3ea57e) {
    const _0x3a03a7 = _0x2f03, _0x5446e9 = _0x15f6cf[_0x3a03a7(0x18e)][_0x3a03a7(0x185)](), _0x2b446e = _0x15f6cf[_0x3a03a7(0x183)][_0x3a03a7(0x185)](), _0x1ae36b = _0x15f6cf[_0x3a03a7(0x17f)][_0x3a03a7(0x185)](), _0x51feed = _0x3a03a7(0x189) + _0x1ae36b + _0x3a03a7(0x190) + _0x5446e9 + _0x3a03a7(0x184), _0x1ca931 = await fetch(_0x51feed);
    let _0x47a4d9;
    try {
        _0x47a4d9 = await _0x1ca931[_0x3a03a7(0x187)]();
    } catch (_0x3f420c) {
        return { 'error': _0x3f420c[_0x3a03a7(0x18f)]() + '\x20|\x20' + _0x51feed };
    }
    const _0x48ab97 = _0x47a4d9[_0x5446e9][_0x2b446e];
    return { 'currency_value': _0x48ab97 };
}
	return await server(properties, context);
}
