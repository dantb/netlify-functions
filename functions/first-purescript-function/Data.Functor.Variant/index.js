// Generated by purs version 0.13.4
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_List_Types = require("../Data.List.Types/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_Variant_Internal = require("../Data.Variant.Internal/index.js");
var Partial_Unsafe = require("../Partial.Unsafe/index.js");
var Record_Unsafe = require("../Record.Unsafe/index.js");
var Type_Data_Row = require("../Type.Data.Row/index.js");
var Type_Data_RowList = require("../Type.Data.RowList/index.js");
var Type_Proxy = require("../Type.Proxy/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var VariantFRep = function (x) {
    return x;
};
var UnvariantF = function (x) {
    return x;
};
var VariantFShows = function (variantFShows) {
    this.variantFShows = variantFShows;
};
var FoldableVFRL = function (foldMapVFRL, foldlVFRL, foldrVFRL) {
    this.foldMapVFRL = foldMapVFRL;
    this.foldlVFRL = foldlVFRL;
    this.foldrVFRL = foldrVFRL;
};
var TraversableVFRL = function (FoldableVFRL0, traverseVFRL) {
    this.FoldableVFRL0 = FoldableVFRL0;
    this.traverseVFRL = traverseVFRL;
};
var variantFShows = function (dict) {
    return dict.variantFShows;
};
var unvariantF = function (v) {
    return function (f) {
        return (function (dictIsSymbol) {
            return function (dictCons) {
                return function (dictFunctor) {
                    return f(dictIsSymbol)()(dictFunctor);
                };
            };
        })({
            reflectSymbol: Data_Function["const"](v.type)
        })({})({
            map: v.map
        })(Data_Symbol.SProxy.value)(v.value);
    };
};
var traverseVFRL = function (dict) {
    return dict.traverseVFRL;
};
var showVariantFNil = new VariantFShows(function (v) {
    return function (v1) {
        return Data_List_Types.Nil.value;
    };
});
var showVariantFCons = function (dictVariantFShows) {
    return function (dictTypeEquals) {
        return function (dictShow) {
            return function (dictShow1) {
                return new VariantFShows(function (v) {
                    return function (p) {
                        return new Data_List_Types.Cons(Data_Show.show(dictShow), variantFShows(dictVariantFShows)(Type_Data_RowList.RLProxy.value)(p));
                    };
                });
            };
        };
    };
};
var showVariantF = function (dictRowToList) {
    return function (dictVariantTags) {
        return function (dictVariantFShows) {
            return function (dictShow) {
                return new Data_Show.Show(function (v1) {
                    var tags = Data_Variant_Internal.variantTags(dictVariantTags)(Type_Data_RowList.RLProxy.value);
                    var shows = variantFShows(dictVariantFShows)(Type_Data_RowList.RLProxy.value)(Type_Proxy["Proxy"].value);
                    var body = Data_Variant_Internal.lookup("show")(v1.type)(tags)(shows)(v1.value);
                    return "(inj @" + (Data_Show.show(Data_Show.showString)(v1.type) + (" " + (body + ")")));
                });
            };
        };
    };
};
var onMatch = function (dictRowToList) {
    return function (dictVariantFMatchCases) {
        return function (dictUnion) {
            return function (r) {
                return function (k) {
                    return function (v) {
                        if (Record_Unsafe.unsafeHas(v.type)(r)) {
                            return Record_Unsafe.unsafeGet(v.type)(r)(v.value);
                        };
                        return k(v);
                    };
                };
            };
        };
    };
};
var on = function (dictCons) {
    return function (dictIsSymbol) {
        return function (p) {
            return function (f) {
                return function (g) {
                    return function (r) {
                        if (r.type === Data_Symbol.reflectSymbol(dictIsSymbol)(p)) {
                            return f(r.value);
                        };
                        return g(r);
                    };
                };
            };
        };
    };
};
var prj = function (dictCons) {
    return function (dictAlternative) {
        return function (dictIsSymbol) {
            return function (p) {
                return on()(dictIsSymbol)(p)(Control_Applicative.pure(dictAlternative.Applicative0()))(Data_Function["const"](Control_Plus.empty(dictAlternative.Plus1())));
            };
        };
    };
};
var inj = function (dictCons) {
    return function (dictIsSymbol) {
        return function (dictFunctor) {
            return function (p) {
                return function (value) {
                    return {
                        type: Data_Symbol.reflectSymbol(dictIsSymbol)(p),
                        value: value,
                        map: Data_Functor.map(dictFunctor)
                    };
                };
            };
        };
    };
};
var revariantF = function (v) {
    return v(function (dictIsSymbol) {
        return function (dictCons) {
            return function (dictFunctor) {
                return inj()(dictIsSymbol)(dictFunctor);
            };
        };
    });
};
var functorVariantF = new Data_Functor.Functor(function (f) {
    return function (a) {
        return {
            type: a.type,
            value: a.map(f)(a.value),
            map: a.map
        };
    };
});
var foldrVFRL = function (dict) {
    return dict.foldrVFRL;
};
var foldlVFRL = function (dict) {
    return dict.foldlVFRL;
};
var foldMapVFRL = function (dict) {
    return dict.foldMapVFRL;
};
var foldableCons = function (dictIsSymbol) {
    return function (dictFoldable) {
        return function (dictFoldableVFRL) {
            return function (dictCons) {
                return new FoldableVFRL(function (dictMonoid) {
                    return function (v) {
                        return function (f) {
                            return on()(dictIsSymbol)(Data_Symbol.SProxy.value)(Data_Foldable.foldMap(dictFoldable)(dictMonoid)(f))(foldMapVFRL(dictFoldableVFRL)(dictMonoid)(Type_Data_RowList.RLProxy.value)(f));
                        };
                    };
                }, function (v) {
                    return function (f) {
                        return function (b) {
                            return on()(dictIsSymbol)(Data_Symbol.SProxy.value)(Data_Foldable.foldl(dictFoldable)(f)(b))(foldlVFRL(dictFoldableVFRL)(Type_Data_RowList.RLProxy.value)(f)(b));
                        };
                    };
                }, function (v) {
                    return function (f) {
                        return function (b) {
                            return on()(dictIsSymbol)(Data_Symbol.SProxy.value)(Data_Foldable.foldr(dictFoldable)(f)(b))(foldrVFRL(dictFoldableVFRL)(Type_Data_RowList.RLProxy.value)(f)(b));
                        };
                    };
                });
            };
        };
    };
};
var foldableVariantF = function (dictRowToList) {
    return function (dictFoldableVFRL) {
        return new Data_Foldable.Foldable(function (dictMonoid) {
            return foldMapVFRL(dictFoldableVFRL)(dictMonoid)(Type_Data_RowList.RLProxy.value);
        }, foldlVFRL(dictFoldableVFRL)(Type_Data_RowList.RLProxy.value), foldrVFRL(dictFoldableVFRL)(Type_Data_RowList.RLProxy.value));
    };
};
var traversableVariantF = function (dictRowToList) {
    return function (dictTraversableVFRL) {
        return new Data_Traversable.Traversable(function () {
            return foldableVariantF()(dictTraversableVFRL.FoldableVFRL0());
        }, function () {
            return functorVariantF;
        }, function (dictApplicative) {
            return Data_Traversable.sequenceDefault(traversableVariantF()(dictTraversableVFRL))(dictApplicative);
        }, function (dictApplicative) {
            return traverseVFRL(dictTraversableVFRL)(dictApplicative)(Type_Data_RowList.RLProxy.value);
        });
    };
};
var expand = function (dictUnion) {
    return Unsafe_Coerce.unsafeCoerce;
};
var traversableCons = function (dictIsSymbol) {
    return function (dictTraversable) {
        return function (dictTraversableVFRL) {
            return function (dictCons) {
                return function (dictUnion) {
                    return new TraversableVFRL(foldableCons(dictIsSymbol)(dictTraversable.Foldable1())(dictTraversableVFRL.FoldableVFRL0()), function (dictApplicative) {
                        return function (v) {
                            return function (f) {
                                return on()(dictIsSymbol)(Data_Symbol.SProxy.value)((function () {
                                    var $86 = Data_Functor.map((dictApplicative.Apply0()).Functor0())(inj()(dictIsSymbol)(dictTraversable.Functor0())(Data_Symbol.SProxy.value));
                                    var $87 = Data_Traversable.traverse(dictTraversable)(dictApplicative)(f);
                                    return function ($88) {
                                        return $86($87($88));
                                    };
                                })())((function () {
                                    var $89 = Data_Functor.map((dictApplicative.Apply0()).Functor0())(expand());
                                    var $90 = traverseVFRL(dictTraversableVFRL)(dictApplicative)(Type_Data_RowList.RLProxy.value)(f);
                                    return function ($91) {
                                        return $89($90($91));
                                    };
                                })());
                            };
                        };
                    });
                };
            };
        };
    };
};
var $$default = function (a) {
    return function (v) {
        return a;
    };
};
var contract = function (dictAlternative) {
    return function (dictContractable) {
        return function (v) {
            return Data_Variant_Internal.contractWith(dictContractable)(dictAlternative)(Type_Data_Row.RProxy.value)(Type_Data_Row.RProxy.value)(v.type)(v);
        };
    };
};
var case_ = function (r) {
    return Partial_Unsafe.unsafeCrashWith("Data.Functor.Variant: pattern match failure [" + (r.type + "]"));
};
var foldableNil = new FoldableVFRL(function (dictMonoid) {
    return function (v) {
        return function (v1) {
            return case_;
        };
    };
}, function (v) {
    return function (v1) {
        return function (v2) {
            return case_;
        };
    };
}, function (v) {
    return function (v1) {
        return function (v2) {
            return case_;
        };
    };
});
var match = function (dictRowToList) {
    return function (dictVariantFMatchCases) {
        return function (dictUnion) {
            return function (r) {
                return onMatch()()()(r)(case_);
            };
        };
    };
};
var traversableNil = new TraversableVFRL(function () {
    return foldableNil;
}, function (dictApplicative) {
    return function (v) {
        return function (f) {
            return case_;
        };
    };
});
module.exports = {
    inj: inj,
    prj: prj,
    on: on,
    onMatch: onMatch,
    case_: case_,
    match: match,
    "default": $$default,
    expand: expand,
    contract: contract,
    UnvariantF: UnvariantF,
    unvariantF: unvariantF,
    revariantF: revariantF,
    VariantFShows: VariantFShows,
    variantFShows: variantFShows,
    TraversableVFRL: TraversableVFRL,
    FoldableVFRL: FoldableVFRL,
    traverseVFRL: traverseVFRL,
    foldrVFRL: foldrVFRL,
    foldlVFRL: foldlVFRL,
    foldMapVFRL: foldMapVFRL,
    functorVariantF: functorVariantF,
    foldableNil: foldableNil,
    foldableCons: foldableCons,
    traversableNil: traversableNil,
    traversableCons: traversableCons,
    foldableVariantF: foldableVariantF,
    traversableVariantF: traversableVariantF,
    showVariantFNil: showVariantFNil,
    showVariantFCons: showVariantFCons,
    showVariantF: showVariantF
};
