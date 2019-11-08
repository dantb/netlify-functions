// Generated by purs version 0.13.4
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Alternative = require("../Control.Alternative/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_FoldableWithIndex = require("../Data.FoldableWithIndex/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Functor_App = require("../Data.Functor.App/index.js");
var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_TraversableWithIndex = require("../Data.TraversableWithIndex/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Compose = function (x) {
    return x;
};
var showCompose = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Compose " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var newtypeCompose = new Data_Newtype.Newtype(function (n) {
    return n;
}, Compose);
var functorCompose = function (dictFunctor) {
    return function (dictFunctor1) {
        return new Data_Functor.Functor(function (f) {
            return function (v) {
                return Compose(Data_Functor.map(dictFunctor)(Data_Functor.map(dictFunctor1)(f))(v));
            };
        });
    };
};
var functorWithIndexCompose = function (dictFunctorWithIndex) {
    return function (dictFunctorWithIndex1) {
        return new Data_FunctorWithIndex.FunctorWithIndex(function () {
            return functorCompose(dictFunctorWithIndex.Functor0())(dictFunctorWithIndex1.Functor0());
        }, function (f) {
            return function (v) {
                return Compose(Data_FunctorWithIndex.mapWithIndex(dictFunctorWithIndex)((function () {
                    var $100 = Data_FunctorWithIndex.mapWithIndex(dictFunctorWithIndex1);
                    var $101 = Data_Tuple.curry(f);
                    return function ($102) {
                        return $100($101($102));
                    };
                })())(v));
            };
        });
    };
};
var foldableCompose = function (dictFoldable) {
    return function (dictFoldable1) {
        return new Data_Foldable.Foldable(function (dictMonoid) {
            return function (f) {
                return function (v) {
                    return Data_Foldable.foldMap(dictFoldable)(dictMonoid)(Data_Foldable.foldMap(dictFoldable1)(dictMonoid)(f))(v);
                };
            };
        }, function (f) {
            return function (i) {
                return function (v) {
                    return Data_Foldable.foldl(dictFoldable)(Data_Foldable.foldl(dictFoldable1)(f))(i)(v);
                };
            };
        }, function (f) {
            return function (i) {
                return function (v) {
                    return Data_Foldable.foldr(dictFoldable)(Data_Function.flip(Data_Foldable.foldr(dictFoldable1)(f)))(i)(v);
                };
            };
        });
    };
};
var foldableWithIndexCompose = function (dictFoldableWithIndex) {
    return function (dictFoldableWithIndex1) {
        return new Data_FoldableWithIndex.FoldableWithIndex(function () {
            return foldableCompose(dictFoldableWithIndex.Foldable0())(dictFoldableWithIndex1.Foldable0());
        }, function (dictMonoid) {
            return function (f) {
                return function (v) {
                    return Data_FoldableWithIndex.foldMapWithIndex(dictFoldableWithIndex)(dictMonoid)((function () {
                        var $103 = Data_FoldableWithIndex.foldMapWithIndex(dictFoldableWithIndex1)(dictMonoid);
                        var $104 = Data_Tuple.curry(f);
                        return function ($105) {
                            return $103($104($105));
                        };
                    })())(v);
                };
            };
        }, function (f) {
            return function (i) {
                return function (v) {
                    return Data_FoldableWithIndex.foldlWithIndex(dictFoldableWithIndex)((function () {
                        var $106 = Data_FoldableWithIndex.foldlWithIndex(dictFoldableWithIndex1);
                        var $107 = Data_Tuple.curry(f);
                        return function ($108) {
                            return $106($107($108));
                        };
                    })())(i)(v);
                };
            };
        }, function (f) {
            return function (i) {
                return function (v) {
                    return Data_FoldableWithIndex.foldrWithIndex(dictFoldableWithIndex)(function (a) {
                        return Data_Function.flip(Data_FoldableWithIndex.foldrWithIndex(dictFoldableWithIndex1)(Data_Tuple.curry(f)(a)));
                    })(i)(v);
                };
            };
        });
    };
};
var traversableCompose = function (dictTraversable) {
    return function (dictTraversable1) {
        return new Data_Traversable.Traversable(function () {
            return foldableCompose(dictTraversable.Foldable1())(dictTraversable1.Foldable1());
        }, function () {
            return functorCompose(dictTraversable.Functor0())(dictTraversable1.Functor0());
        }, function (dictApplicative) {
            return Data_Traversable.traverse(traversableCompose(dictTraversable)(dictTraversable1))(dictApplicative)(Control_Category.identity(Control_Category.categoryFn));
        }, function (dictApplicative) {
            return function (f) {
                return function (v) {
                    return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Compose)(Data_Traversable.traverse(dictTraversable)(dictApplicative)(Data_Traversable.traverse(dictTraversable1)(dictApplicative)(f))(v));
                };
            };
        });
    };
};
var traversableWithIndexCompose = function (dictTraversableWithIndex) {
    return function (dictTraversableWithIndex1) {
        return new Data_TraversableWithIndex.TraversableWithIndex(function () {
            return foldableWithIndexCompose(dictTraversableWithIndex.FoldableWithIndex1())(dictTraversableWithIndex1.FoldableWithIndex1());
        }, function () {
            return functorWithIndexCompose(dictTraversableWithIndex.FunctorWithIndex0())(dictTraversableWithIndex1.FunctorWithIndex0());
        }, function () {
            return traversableCompose(dictTraversableWithIndex.Traversable2())(dictTraversableWithIndex1.Traversable2());
        }, function (dictApplicative) {
            return function (f) {
                return function (v) {
                    return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Compose)(Data_TraversableWithIndex.traverseWithIndex(dictTraversableWithIndex)(dictApplicative)((function () {
                        var $109 = Data_TraversableWithIndex.traverseWithIndex(dictTraversableWithIndex1)(dictApplicative);
                        var $110 = Data_Tuple.curry(f);
                        return function ($111) {
                            return $109($110($111));
                        };
                    })())(v));
                };
            };
        });
    };
};
var eqCompose = function (dictEq1) {
    return function (dictEq11) {
        return function (dictEq) {
            return new Data_Eq.Eq(function (v) {
                return function (v1) {
                    return Data_Eq.eq1(dictEq1)(Data_Functor_App.eqApp(dictEq11)(dictEq))(Data_Functor_App.hoistLiftApp(v))(Data_Functor_App.hoistLiftApp(v1));
                };
            });
        };
    };
};
var ordCompose = function (dictOrd1) {
    return function (dictOrd11) {
        return function (dictOrd) {
            return new Data_Ord.Ord(function () {
                return eqCompose(dictOrd1.Eq10())(dictOrd11.Eq10())(dictOrd.Eq0());
            }, function (v) {
                return function (v1) {
                    return Data_Ord.compare1(dictOrd1)(Data_Functor_App.ordApp(dictOrd11)(dictOrd))(Data_Functor_App.hoistLiftApp(v))(Data_Functor_App.hoistLiftApp(v1));
                };
            });
        };
    };
};
var eq1Compose = function (dictEq1) {
    return function (dictEq11) {
        return new Data_Eq.Eq1(function (dictEq) {
            return Data_Eq.eq(eqCompose(dictEq1)(dictEq11)(dictEq));
        });
    };
};
var ord1Compose = function (dictOrd1) {
    return function (dictOrd11) {
        return new Data_Ord.Ord1(function () {
            return eq1Compose(dictOrd1.Eq10())(dictOrd11.Eq10());
        }, function (dictOrd) {
            return Data_Ord.compare(ordCompose(dictOrd1)(dictOrd11)(dictOrd));
        });
    };
};
var bihoistCompose = function (dictFunctor) {
    return function (natF) {
        return function (natG) {
            return function (v) {
                return natF(Data_Functor.map(dictFunctor)(natG)(v));
            };
        };
    };
};
var applyCompose = function (dictApply) {
    return function (dictApply1) {
        return new Control_Apply.Apply(function () {
            return functorCompose(dictApply.Functor0())(dictApply1.Functor0());
        }, function (v) {
            return function (v1) {
                return Compose(Control_Apply.apply(dictApply)(Data_Functor.map(dictApply.Functor0())(Control_Apply.apply(dictApply1))(v))(v1));
            };
        });
    };
};
var applicativeCompose = function (dictApplicative) {
    return function (dictApplicative1) {
        return new Control_Applicative.Applicative(function () {
            return applyCompose(dictApplicative.Apply0())(dictApplicative1.Apply0());
        }, (function () {
            var $112 = Control_Applicative.pure(dictApplicative);
            var $113 = Control_Applicative.pure(dictApplicative1);
            return function ($114) {
                return Compose($112($113($114)));
            };
        })());
    };
};
var altCompose = function (dictAlt) {
    return function (dictFunctor) {
        return new Control_Alt.Alt(function () {
            return functorCompose(dictAlt.Functor0())(dictFunctor);
        }, function (v) {
            return function (v1) {
                return Compose(Control_Alt.alt(dictAlt)(v)(v1));
            };
        });
    };
};
var plusCompose = function (dictPlus) {
    return function (dictFunctor) {
        return new Control_Plus.Plus(function () {
            return altCompose(dictPlus.Alt0())(dictFunctor);
        }, Control_Plus.empty(dictPlus));
    };
};
var alternativeCompose = function (dictAlternative) {
    return function (dictApplicative) {
        return new Control_Alternative.Alternative(function () {
            return applicativeCompose(dictAlternative.Applicative0())(dictApplicative);
        }, function () {
            return plusCompose(dictAlternative.Plus1())((dictApplicative.Apply0()).Functor0());
        });
    };
};
module.exports = {
    Compose: Compose,
    bihoistCompose: bihoistCompose,
    newtypeCompose: newtypeCompose,
    eqCompose: eqCompose,
    eq1Compose: eq1Compose,
    ordCompose: ordCompose,
    ord1Compose: ord1Compose,
    showCompose: showCompose,
    functorCompose: functorCompose,
    functorWithIndexCompose: functorWithIndexCompose,
    applyCompose: applyCompose,
    applicativeCompose: applicativeCompose,
    foldableCompose: foldableCompose,
    foldableWithIndexCompose: foldableWithIndexCompose,
    traversableCompose: traversableCompose,
    traversableWithIndexCompose: traversableWithIndexCompose,
    altCompose: altCompose,
    plusCompose: plusCompose,
    alternativeCompose: alternativeCompose
};
