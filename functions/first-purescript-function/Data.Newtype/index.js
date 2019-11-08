// Generated by purs version 0.13.4
"use strict";
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Monoid_Additive = require("../Data.Monoid.Additive/index.js");
var Data_Monoid_Conj = require("../Data.Monoid.Conj/index.js");
var Data_Monoid_Disj = require("../Data.Monoid.Disj/index.js");
var Data_Monoid_Dual = require("../Data.Monoid.Dual/index.js");
var Data_Monoid_Endo = require("../Data.Monoid.Endo/index.js");
var Data_Monoid_Multiplicative = require("../Data.Monoid.Multiplicative/index.js");
var Data_Semigroup_First = require("../Data.Semigroup.First/index.js");
var Data_Semigroup_Last = require("../Data.Semigroup.Last/index.js");
var Newtype = function (unwrap, wrap) {
    this.unwrap = unwrap;
    this.wrap = wrap;
};
var wrap = function (dict) {
    return dict.wrap;
};
var unwrap = function (dict) {
    return dict.unwrap;
};
var underF2 = function (dictFunctor) {
    return function (dictFunctor1) {
        return function (dictNewtype) {
            return function (dictNewtype1) {
                return function (v) {
                    return function (f) {
                        var $66 = Control_Semigroupoid.compose(Control_Semigroupoid.semigroupoidFn)(Data_Functor.map(dictFunctor1)(unwrap(dictNewtype1)));
                        var $67 = Data_Function.on(f)(Data_Functor.map(dictFunctor)(wrap(dictNewtype)));
                        return function ($68) {
                            return $66($67($68));
                        };
                    };
                };
            };
        };
    };
};
var underF = function (dictFunctor) {
    return function (dictFunctor1) {
        return function (dictNewtype) {
            return function (dictNewtype1) {
                return function (v) {
                    return function (f) {
                        var $69 = Data_Functor.map(dictFunctor1)(unwrap(dictNewtype1));
                        var $70 = Data_Functor.map(dictFunctor)(wrap(dictNewtype));
                        return function ($71) {
                            return $69(f($70($71)));
                        };
                    };
                };
            };
        };
    };
};
var under2 = function (dictNewtype) {
    return function (dictNewtype1) {
        return function (v) {
            return function (f) {
                var $72 = Control_Semigroupoid.compose(Control_Semigroupoid.semigroupoidFn)(unwrap(dictNewtype1));
                var $73 = Data_Function.on(f)(wrap(dictNewtype));
                return function ($74) {
                    return $72($73($74));
                };
            };
        };
    };
};
var under = function (dictNewtype) {
    return function (dictNewtype1) {
        return function (v) {
            return function (f) {
                var $75 = unwrap(dictNewtype1);
                var $76 = wrap(dictNewtype);
                return function ($77) {
                    return $75(f($76($77)));
                };
            };
        };
    };
};
var un = function (dictNewtype) {
    return function (v) {
        return unwrap(dictNewtype);
    };
};
var traverse = function (dictFunctor) {
    return function (dictNewtype) {
        return function (v) {
            return function (f) {
                var $78 = Data_Functor.map(dictFunctor)(wrap(dictNewtype));
                var $79 = unwrap(dictNewtype);
                return function ($80) {
                    return $78(f($79($80)));
                };
            };
        };
    };
};
var overF2 = function (dictFunctor) {
    return function (dictFunctor1) {
        return function (dictNewtype) {
            return function (dictNewtype1) {
                return function (v) {
                    return function (f) {
                        var $81 = Control_Semigroupoid.compose(Control_Semigroupoid.semigroupoidFn)(Data_Functor.map(dictFunctor1)(wrap(dictNewtype1)));
                        var $82 = Data_Function.on(f)(Data_Functor.map(dictFunctor)(unwrap(dictNewtype)));
                        return function ($83) {
                            return $81($82($83));
                        };
                    };
                };
            };
        };
    };
};
var overF = function (dictFunctor) {
    return function (dictFunctor1) {
        return function (dictNewtype) {
            return function (dictNewtype1) {
                return function (v) {
                    return function (f) {
                        var $84 = Data_Functor.map(dictFunctor1)(wrap(dictNewtype1));
                        var $85 = Data_Functor.map(dictFunctor)(unwrap(dictNewtype));
                        return function ($86) {
                            return $84(f($85($86)));
                        };
                    };
                };
            };
        };
    };
};
var over2 = function (dictNewtype) {
    return function (dictNewtype1) {
        return function (v) {
            return function (f) {
                var $87 = Control_Semigroupoid.compose(Control_Semigroupoid.semigroupoidFn)(wrap(dictNewtype1));
                var $88 = Data_Function.on(f)(unwrap(dictNewtype));
                return function ($89) {
                    return $87($88($89));
                };
            };
        };
    };
};
var over = function (dictNewtype) {
    return function (dictNewtype1) {
        return function (v) {
            return function (f) {
                var $90 = wrap(dictNewtype1);
                var $91 = unwrap(dictNewtype);
                return function ($92) {
                    return $90(f($91($92)));
                };
            };
        };
    };
};
var op = function (dictNewtype) {
    return un(dictNewtype);
};
var newtypeMultiplicative = new Newtype(function (v) {
    return v;
}, Data_Monoid_Multiplicative.Multiplicative);
var newtypeLast = new Newtype(function (v) {
    return v;
}, Data_Semigroup_Last.Last);
var newtypeFirst = new Newtype(function (v) {
    return v;
}, Data_Semigroup_First.First);
var newtypeEndo = new Newtype(function (v) {
    return v;
}, Data_Monoid_Endo.Endo);
var newtypeDual = new Newtype(function (v) {
    return v;
}, Data_Monoid_Dual.Dual);
var newtypeDisj = new Newtype(function (v) {
    return v;
}, Data_Monoid_Disj.Disj);
var newtypeConj = new Newtype(function (v) {
    return v;
}, Data_Monoid_Conj.Conj);
var newtypeAdditive = new Newtype(function (v) {
    return v;
}, Data_Monoid_Additive.Additive);
var collect = function (dictFunctor) {
    return function (dictNewtype) {
        return function (v) {
            return function (f) {
                var $93 = wrap(dictNewtype);
                var $94 = Data_Functor.map(dictFunctor)(unwrap(dictNewtype));
                return function ($95) {
                    return $93(f($94($95)));
                };
            };
        };
    };
};
var alaF = function (dictFunctor) {
    return function (dictFunctor1) {
        return function (dictNewtype) {
            return function (dictNewtype1) {
                return function (v) {
                    return function (f) {
                        var $96 = Data_Functor.map(dictFunctor1)(unwrap(dictNewtype1));
                        var $97 = Data_Functor.map(dictFunctor)(wrap(dictNewtype));
                        return function ($98) {
                            return $96(f($97($98)));
                        };
                    };
                };
            };
        };
    };
};
var ala = function (dictFunctor) {
    return function (dictNewtype) {
        return function (dictNewtype1) {
            return function (v) {
                return function (f) {
                    return Data_Functor.map(dictFunctor)(unwrap(dictNewtype))(f(wrap(dictNewtype1)));
                };
            };
        };
    };
};
module.exports = {
    unwrap: unwrap,
    wrap: wrap,
    Newtype: Newtype,
    un: un,
    op: op,
    ala: ala,
    alaF: alaF,
    over: over,
    overF: overF,
    under: under,
    underF: underF,
    over2: over2,
    overF2: overF2,
    under2: under2,
    underF2: underF2,
    traverse: traverse,
    collect: collect,
    newtypeAdditive: newtypeAdditive,
    newtypeMultiplicative: newtypeMultiplicative,
    newtypeConj: newtypeConj,
    newtypeDisj: newtypeDisj,
    newtypeDual: newtypeDual,
    newtypeEndo: newtypeEndo,
    newtypeFirst: newtypeFirst,
    newtypeLast: newtypeLast
};