function(instance, properties, context){
	(function (_0x2f06e3, _0x513685) {
    const _0x445f8d = _0x5d6b, _0xcff742 = _0x2f06e3();
    while (!![]) {
        try {
            const _0xd4f3f9 = parseInt(_0x445f8d(0xb5)) / 0x1 * (-parseInt(_0x445f8d(0xc0)) / 0x2) + -parseInt(_0x445f8d(0xb7)) / 0x3 + parseInt(_0x445f8d(0xb1)) / 0x4 * (-parseInt(_0x445f8d(0xbc)) / 0x5) + -parseInt(_0x445f8d(0xb9)) / 0x6 + parseInt(_0x445f8d(0xb0)) / 0x7 + -parseInt(_0x445f8d(0xb3)) / 0x8 * (parseInt(_0x445f8d(0xbe)) / 0x9) + parseInt(_0x445f8d(0xaa)) / 0xa;
            if (_0xd4f3f9 === _0x513685)
                break;
            else
                _0xcff742['push'](_0xcff742['shift']());
        } catch (_0x208c02) {
            _0xcff742['push'](_0xcff742['shift']());
        }
    }
}(_0x5086, 0xb23d4));
function _0x5086() {
    const _0x2ea572 = [
        'keys',
        '_p_',
        'catch',
        '2339827TSJQrp',
        '9476algZJG',
        '/v1/currencies/',
        '8nlyfuq',
        'time',
        '53840QzdzCb',
        'publishState',
        '4197282XugsCk',
        '.json',
        '3593328OMSrlj',
        'currency',
        'response',
        '995uklnPC',
        'json',
        '11075625RCdKas',
        'log',
        '26pFcbRt',
        'error',
        '47957650yOChHE',
        'then',
        'length'
    ];
    _0x5086 = function () {
        return _0x2ea572;
    };
    return _0x5086();
}
function _0x5d6b(_0x160ea2, _0x2dea12) {
    const _0x508627 = _0x5086();
    return _0x5d6b = function (_0x5d6bdd, _0x255bf5) {
        _0x5d6bdd = _0x5d6bdd - 0xa9;
        let _0x5dd69a = _0x508627[_0x5d6bdd];
        return _0x5dd69a;
    }, _0x5d6b(_0x160ea2, _0x2dea12);
}
function update(_0x3878b2, _0x20bb82, _0x548625) {
    const _0x29c25a = _0x5d6b;
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@' + _0x20bb82[_0x29c25a(0xb4)] + _0x29c25a(0xb2) + _0x20bb82[_0x29c25a(0xba)] + _0x29c25a(0xb8))[_0x29c25a(0xab)](_0x5ccbaa => _0x5ccbaa[_0x29c25a(0xbd)]())[_0x29c25a(0xab)](_0x520589 => {
        const _0x16561e = _0x29c25a;
        console[_0x16561e(0xbf)](_0x520589);
        const _0x3bad29 = { '_p_date': _0x520589['date'] }, _0x3f9b9b = _0x520589[_0x20bb82[_0x16561e(0xba)]], _0x593c87 = Object[_0x16561e(0xad)](_0x3f9b9b);
        for (let _0x10e282 = 0x0; _0x10e282 < _0x593c87[_0x16561e(0xac)]; _0x10e282 += 0x1) {
            const _0x5637cd = _0x593c87[_0x10e282];
            _0x3bad29[_0x16561e(0xae) + _0x5637cd] = _0x3f9b9b[_0x5637cd];
        }
        console[_0x16561e(0xbf)](_0x3bad29), _0x3878b2[_0x16561e(0xb6)](_0x16561e(0xbb), _0x3bad29), _0x3878b2[_0x16561e(0xb6)](_0x16561e(0xa9), '');
    })[_0x29c25a(0xaf)](_0x226dd5 => {
        const _0x77bbcc = _0x29c25a;
        _0x3878b2['publishState'](_0x77bbcc(0xa9), 'currency\x20was\x20not\x20found');
    });
}
	 update(instance, properties, context);
}