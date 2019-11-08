// Generated by purs version 0.13.4
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_List = require("../Data.List/index.js");
var Data_List_Types = require("../Data.List.Types/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Effect_Aff = require("../Effect.Aff/index.js");
var Effect_Exception = require("../Effect.Exception/index.js");
var Test_Unit = require("../Test.Unit/index.js");
var Test_Unit_Console = require("../Test.Unit.Console/index.js");
var indent = function (v) {
    if (v === 0) {
        return Data_Monoid.mempty(Data_Monoid.monoidString);
    };
    return "  " + indent(v - 1 | 0);
};
var indent$prime = function ($30) {
    return indent(Data_List.length($30));
};
var printLive = function (tst) {
    var runSuiteItem = function (path) {
        return function (v) {
            if (v instanceof Data_Either.Left) {
                return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(Test_Unit_Console.log(Effect_Aff.monadEffectAff)(indent$prime(path) + ("- Suite: " + v.value0)))(function () {
                    return Control_Applicative.pure(Effect_Aff.applicativeAff)(Data_Unit.unit);
                });
            };
            if (v instanceof Data_Either.Right) {
                return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Aff.attempt(v.value0.value1))(function (v1) {
                    return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)((function () {
                        if (v1 instanceof Data_Either.Right) {
                            return Test_Unit_Console.log(Effect_Aff.monadEffectAff)(indent$prime(path) + ("\u2713 Passed: " + v.value0.value0));
                        };
                        if (v1 instanceof Data_Either.Left) {
                            return Test_Unit_Console.log(Effect_Aff.monadEffectAff)(indent$prime(path) + ("\u2620 Failed: " + (v.value0.value0 + (" because " + Effect_Exception.message(v1.value0)))));
                        };
                        throw new Error("Failed pattern match at Test.Unit.Output.Simple (line 32, column 7 - line 36, column 59): " + [ v1.constructor.name ]);
                    })())(function () {
                        return Control_Applicative.pure(Effect_Aff.applicativeAff)(Data_Unit.unit);
                    });
                });
            };
            throw new Error("Failed pattern match at Test.Unit.Output.Simple (line 27, column 5 - line 29, column 16): " + [ path.constructor.name, v.constructor.name ]);
        };
    };
    return Test_Unit.walkSuite(runSuiteItem)(tst);
};
var printErrors = function (tests) {
    return function (skCount) {
        var printHeader = function (level) {
            return function (path) {
                var v = Data_List.uncons(path);
                if (v instanceof Data_Maybe.Nothing) {
                    return Control_Applicative.pure(Effect_Aff.applicativeAff)(Data_Unit.unit);
                };
                if (v instanceof Data_Maybe.Just) {
                    return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(Test_Unit_Console.log(Effect_Aff.monadEffectAff)(indent(level) + ("In \"" + (v.value0.head + "\":"))))(function () {
                        return printHeader(level + 1 | 0)(v.value0.tail);
                    });
                };
                throw new Error("Failed pattern match at Test.Unit.Output.Simple (line 61, column 34 - line 65, column 41): " + [ v.constructor.name ]);
            };
        };
        var printError = function (err) {
            return Test_Unit_Console.log(Effect_Aff.monadEffectAff)("Error: " + Data_Maybe.fromMaybe(Effect_Exception.message(err))(Effect_Exception.stack(err)));
        };
        var print = function (v) {
            return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(printHeader(0)(v.value0))(function () {
                return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(printError(v.value1))(function () {
                    return Test_Unit_Console.log(Effect_Aff.monadEffectAff)("");
                });
            });
        };
        var list = Data_Foldable.traverse_(Effect_Aff.applicativeAff)(Data_List_Types.foldableList)(print);
        return Control_Bind.bind(Effect_Aff.bindAff)(Test_Unit.collectResults(tests))(function (v) {
            var skMsg = (function () {
                if (skCount === 0) {
                    return "";
                };
                if (skCount === 1) {
                    return " (1 test skipped)";
                };
                return " (" + (Data_Show.show(Data_Show.showInt)(skCount) + " tests skipped)");
            })();
            var errors = Test_Unit.keepErrors(v);
            return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(Test_Unit_Console.log(Effect_Aff.monadEffectAff)(""))(function () {
                var v1 = Data_List.length(errors);
                if (v1 === 0) {
                    return Test_Unit_Console.log(Effect_Aff.monadEffectAff)("All " + (Data_Show.show(Data_Show.showInt)(Data_List.length(v)) + (" tests passed" + (skMsg + "!"))));
                };
                if (v1 === 1) {
                    return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(Test_Unit_Console.log(Effect_Aff.monadEffectAff)("1 test failed" + (skMsg + ":\x0a")))(function () {
                        return list(errors);
                    });
                };
                return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(Test_Unit_Console.log(Effect_Aff.monadEffectAff)(Data_Show.show(Data_Show.showInt)(v1) + (" tests failed" + (skMsg + ":\x0a"))))(function () {
                    return list(errors);
                });
            });
        });
    };
};
var runTest = function (suite) {
    return Control_Bind.bind(Effect_Aff.bindAff)(printLive(suite))(function (v) {
        return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(printErrors(v)(Test_Unit.countSkippedTests(suite)))(function () {
            return Control_Applicative.pure(Effect_Aff.applicativeAff)(v);
        });
    });
};
module.exports = {
    runTest: runTest
};
