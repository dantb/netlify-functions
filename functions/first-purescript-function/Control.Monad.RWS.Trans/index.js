// Generated by purs version 0.13.4
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Alternative = require("../Control.Alternative/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Lazy = require("../Control.Lazy/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Control_Monad_Error_Class = require("../Control.Monad.Error.Class/index.js");
var Control_Monad_Reader_Class = require("../Control.Monad.Reader.Class/index.js");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class/index.js");
var Control_Monad_State_Class = require("../Control.Monad.State.Class/index.js");
var Control_Monad_Trans_Class = require("../Control.Monad.Trans.Class/index.js");
var Control_Monad_Writer_Class = require("../Control.Monad.Writer.Class/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var RWSResult = (function () {
    function RWSResult(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    RWSResult.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new RWSResult(value0, value1, value2);
            };
        };
    };
    return RWSResult;
})();
var RWST = function (x) {
    return x;
};
var withRWST = function (f) {
    return function (m) {
        return function (r) {
            return function (s) {
                return Data_Tuple.uncurry(m)(f(r)(s));
            };
        };
    };
};
var runRWST = function (v) {
    return v;
};
var newtypeRWST = new Data_Newtype.Newtype(function (n) {
    return n;
}, RWST);
var monadTransRWST = function (dictMonoid) {
    return new Control_Monad_Trans_Class.MonadTrans(function (dictMonad) {
        return function (m) {
            return function (v) {
                return function (s) {
                    return Control_Bind.bind(dictMonad.Bind1())(m)(function (a) {
                        return Control_Applicative.pure(dictMonad.Applicative0())(new RWSResult(s, a, Data_Monoid.mempty(dictMonoid)));
                    });
                };
            };
        };
    });
};
var mapRWST = function (f) {
    return function (v) {
        return function (r) {
            return function (s) {
                return f(v(r)(s));
            };
        };
    };
};
var lazyRWST = new Control_Lazy.Lazy(function (f) {
    return function (r) {
        return function (s) {
            var v = f(Data_Unit.unit);
            return v(r)(s);
        };
    };
});
var functorRWST = function (dictFunctor) {
    return new Data_Functor.Functor(function (f) {
        return function (v) {
            return function (r) {
                return function (s) {
                    return Data_Functor.map(dictFunctor)(function (v1) {
                        return new RWSResult(v1.value0, f(v1.value1), v1.value2);
                    })(v(r)(s));
                };
            };
        };
    });
};
var execRWST = function (dictMonad) {
    return function (v) {
        return function (r) {
            return function (s) {
                return Control_Bind.bind(dictMonad.Bind1())(v(r)(s))(function (v1) {
                    return Control_Applicative.pure(dictMonad.Applicative0())(new Data_Tuple.Tuple(v1.value0, v1.value2));
                });
            };
        };
    };
};
var evalRWST = function (dictMonad) {
    return function (v) {
        return function (r) {
            return function (s) {
                return Control_Bind.bind(dictMonad.Bind1())(v(r)(s))(function (v1) {
                    return Control_Applicative.pure(dictMonad.Applicative0())(new Data_Tuple.Tuple(v1.value1, v1.value2));
                });
            };
        };
    };
};
var applyRWST = function (dictBind) {
    return function (dictMonoid) {
        return new Control_Apply.Apply(function () {
            return functorRWST((dictBind.Apply0()).Functor0());
        }, function (v) {
            return function (v1) {
                return function (r) {
                    return function (s) {
                        return Control_Bind.bind(dictBind)(v(r)(s))(function (v2) {
                            return Data_Functor.mapFlipped((dictBind.Apply0()).Functor0())(v1(r)(v2.value0))(function (v3) {
                                return new RWSResult(v3.value0, v2.value1(v3.value1), Data_Semigroup.append(dictMonoid.Semigroup0())(v2.value2)(v3.value2));
                            });
                        });
                    };
                };
            };
        });
    };
};
var bindRWST = function (dictBind) {
    return function (dictMonoid) {
        return new Control_Bind.Bind(function () {
            return applyRWST(dictBind)(dictMonoid);
        }, function (v) {
            return function (f) {
                return function (r) {
                    return function (s) {
                        return Control_Bind.bind(dictBind)(v(r)(s))(function (v1) {
                            var v2 = f(v1.value1);
                            return Data_Functor.mapFlipped((dictBind.Apply0()).Functor0())(v2(r)(v1.value0))(function (v3) {
                                return new RWSResult(v3.value0, v3.value1, Data_Semigroup.append(dictMonoid.Semigroup0())(v1.value2)(v3.value2));
                            });
                        });
                    };
                };
            };
        });
    };
};
var applicativeRWST = function (dictMonad) {
    return function (dictMonoid) {
        return new Control_Applicative.Applicative(function () {
            return applyRWST(dictMonad.Bind1())(dictMonoid);
        }, function (a) {
            return function (v) {
                return function (s) {
                    return Control_Applicative.pure(dictMonad.Applicative0())(new RWSResult(s, a, Data_Monoid.mempty(dictMonoid)));
                };
            };
        });
    };
};
var monadRWST = function (dictMonad) {
    return function (dictMonoid) {
        return new Control_Monad.Monad(function () {
            return applicativeRWST(dictMonad)(dictMonoid);
        }, function () {
            return bindRWST(dictMonad.Bind1())(dictMonoid);
        });
    };
};
var monadAskRWST = function (dictMonad) {
    return function (dictMonoid) {
        return new Control_Monad_Reader_Class.MonadAsk(function () {
            return monadRWST(dictMonad)(dictMonoid);
        }, function (r) {
            return function (s) {
                return Control_Applicative.pure(dictMonad.Applicative0())(new RWSResult(s, r, Data_Monoid.mempty(dictMonoid)));
            };
        });
    };
};
var monadReaderRWST = function (dictMonad) {
    return function (dictMonoid) {
        return new Control_Monad_Reader_Class.MonadReader(function () {
            return monadAskRWST(dictMonad)(dictMonoid);
        }, function (f) {
            return function (m) {
                return function (r) {
                    return function (s) {
                        return m(f(r))(s);
                    };
                };
            };
        });
    };
};
var monadEffectRWS = function (dictMonoid) {
    return function (dictMonadEffect) {
        return new Effect_Class.MonadEffect(function () {
            return monadRWST(dictMonadEffect.Monad0())(dictMonoid);
        }, (function () {
            var $155 = Control_Monad_Trans_Class.lift(monadTransRWST(dictMonoid))(dictMonadEffect.Monad0());
            var $156 = Effect_Class.liftEffect(dictMonadEffect);
            return function ($157) {
                return $155($156($157));
            };
        })());
    };
};
var monadRecRWST = function (dictMonadRec) {
    return function (dictMonoid) {
        return new Control_Monad_Rec_Class.MonadRec(function () {
            return monadRWST(dictMonadRec.Monad0())(dictMonoid);
        }, function (k) {
            return function (a) {
                var k$prime = function (r) {
                    return function (v) {
                        var v1 = k(v.value1);
                        return Control_Bind.bind((dictMonadRec.Monad0()).Bind1())(v1(r)(v.value0))(function (v2) {
                            return Control_Applicative.pure((dictMonadRec.Monad0()).Applicative0())((function () {
                                if (v2.value1 instanceof Control_Monad_Rec_Class.Loop) {
                                    return new Control_Monad_Rec_Class.Loop(new RWSResult(v2.value0, v2.value1.value0, Data_Semigroup.append(dictMonoid.Semigroup0())(v.value2)(v2.value2)));
                                };
                                if (v2.value1 instanceof Control_Monad_Rec_Class.Done) {
                                    return new Control_Monad_Rec_Class.Done(new RWSResult(v2.value0, v2.value1.value0, Data_Semigroup.append(dictMonoid.Semigroup0())(v.value2)(v2.value2)));
                                };
                                throw new Error("Failed pattern match at Control.Monad.RWS.Trans (line 127, column 16 - line 129, column 68): " + [ v2.value1.constructor.name ]);
                            })());
                        });
                    };
                };
                return function (r) {
                    return function (s) {
                        return Control_Monad_Rec_Class.tailRecM(dictMonadRec)(k$prime(r))(new RWSResult(s, a, Data_Monoid.mempty(dictMonoid)));
                    };
                };
            };
        });
    };
};
var monadStateRWST = function (dictMonad) {
    return function (dictMonoid) {
        return new Control_Monad_State_Class.MonadState(function () {
            return monadRWST(dictMonad)(dictMonoid);
        }, function (f) {
            return function (v) {
                return function (s) {
                    var v1 = f(s);
                    return Control_Applicative.pure(dictMonad.Applicative0())(new RWSResult(v1.value1, v1.value0, Data_Monoid.mempty(dictMonoid)));
                };
            };
        });
    };
};
var monadTellRWST = function (dictMonad) {
    return function (dictMonoid) {
        return new Control_Monad_Writer_Class.MonadTell(function () {
            return monadRWST(dictMonad)(dictMonoid);
        }, function (w) {
            return function (v) {
                return function (s) {
                    return Control_Applicative.pure(dictMonad.Applicative0())(new RWSResult(s, Data_Unit.unit, w));
                };
            };
        });
    };
};
var monadWriterRWST = function (dictMonad) {
    return function (dictMonoid) {
        return new Control_Monad_Writer_Class.MonadWriter(function () {
            return monadTellRWST(dictMonad)(dictMonoid);
        }, function (m) {
            return function (r) {
                return function (s) {
                    return Control_Bind.bind(dictMonad.Bind1())(m(r)(s))(function (v) {
                        return Control_Applicative.pure(dictMonad.Applicative0())(new RWSResult(v.value0, new Data_Tuple.Tuple(v.value1, v.value2), v.value2));
                    });
                };
            };
        }, function (m) {
            return function (r) {
                return function (s) {
                    return Control_Bind.bind(dictMonad.Bind1())(m(r)(s))(function (v) {
                        return Control_Applicative.pure(dictMonad.Applicative0())(new RWSResult(v.value0, v.value1.value0, v.value1.value1(v.value2)));
                    });
                };
            };
        });
    };
};
var monadThrowRWST = function (dictMonadThrow) {
    return function (dictMonoid) {
        return new Control_Monad_Error_Class.MonadThrow(function () {
            return monadRWST(dictMonadThrow.Monad0())(dictMonoid);
        }, function (e) {
            return Control_Monad_Trans_Class.lift(monadTransRWST(dictMonoid))(dictMonadThrow.Monad0())(Control_Monad_Error_Class.throwError(dictMonadThrow)(e));
        });
    };
};
var monadErrorRWST = function (dictMonadError) {
    return function (dictMonoid) {
        return new Control_Monad_Error_Class.MonadError(function () {
            return monadThrowRWST(dictMonadError.MonadThrow0())(dictMonoid);
        }, function (m) {
            return function (h) {
                return RWST(function (r) {
                    return function (s) {
                        return Control_Monad_Error_Class.catchError(dictMonadError)(m(r)(s))(function (e) {
                            var v = h(e);
                            return v(r)(s);
                        });
                    };
                });
            };
        });
    };
};
var altRWST = function (dictAlt) {
    return new Control_Alt.Alt(function () {
        return functorRWST(dictAlt.Functor0());
    }, function (v) {
        return function (v1) {
            return RWST(function (r) {
                return function (s) {
                    return Control_Alt.alt(dictAlt)(v(r)(s))(v1(r)(s));
                };
            });
        };
    });
};
var plusRWST = function (dictPlus) {
    return new Control_Plus.Plus(function () {
        return altRWST(dictPlus.Alt0());
    }, function (v) {
        return function (v1) {
            return Control_Plus.empty(dictPlus);
        };
    });
};
var alternativeRWST = function (dictMonoid) {
    return function (dictAlternative) {
        return function (dictMonad) {
            return new Control_Alternative.Alternative(function () {
                return applicativeRWST(dictMonad)(dictMonoid);
            }, function () {
                return plusRWST(dictAlternative.Plus1());
            });
        };
    };
};
module.exports = {
    RWSResult: RWSResult,
    RWST: RWST,
    runRWST: runRWST,
    evalRWST: evalRWST,
    execRWST: execRWST,
    mapRWST: mapRWST,
    withRWST: withRWST,
    newtypeRWST: newtypeRWST,
    functorRWST: functorRWST,
    applyRWST: applyRWST,
    altRWST: altRWST,
    alternativeRWST: alternativeRWST,
    bindRWST: bindRWST,
    applicativeRWST: applicativeRWST,
    monadRWST: monadRWST,
    monadTransRWST: monadTransRWST,
    lazyRWST: lazyRWST,
    monadEffectRWS: monadEffectRWS,
    monadAskRWST: monadAskRWST,
    monadReaderRWST: monadReaderRWST,
    monadStateRWST: monadStateRWST,
    monadTellRWST: monadTellRWST,
    monadWriterRWST: monadWriterRWST,
    monadThrowRWST: monadThrowRWST,
    monadErrorRWST: monadErrorRWST,
    monadRecRWST: monadRecRWST,
    plusRWST: plusRWST
};
