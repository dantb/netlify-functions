// Generated by purs version 0.13.4
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Show = require("../Data.Show/index.js");
var Effect = require("../Effect/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var Foreign = require("../Foreign/index.js");
var Node_Express_Handler = require("../Node.Express.Handler/index.js");
var Node_Express_Types = require("../Node.Express.Types/index.js");
var AppM = (function () {
    function AppM(value0) {
        this.value0 = value0;
    };
    AppM.create = function (value0) {
        return new AppM(value0);
    };
    return AppM;
})();
var useOnParam = function (param) {
    return function (handler) {
        return new AppM(function (app) {
            return $foreign["_useOnParam"](app, param, function ($85) {
                return Node_Express_Handler.runHandlerM(handler($85));
            });
        });
    };
};
var useOnError = function (handler) {
    return new AppM(function (app) {
        return $foreign["_useOnError"](app, function ($86) {
            return Node_Express_Handler.runHandlerM(handler($86));
        });
    });
};
var useExternal = function (fn) {
    return new AppM(function (app) {
        return $foreign["_useExternal"](app, fn);
    });
};
var useAtExternal = function (route) {
    return function (fn) {
        return new AppM(function (app) {
            return $foreign["_useAtExternal"](app, route, fn);
        });
    };
};
var useAt = function (route) {
    return function (middleware) {
        return new AppM(function (app) {
            return $foreign["_useAt"](app, route, Node_Express_Handler.runHandlerM(middleware));
        });
    };
};
var use = function (middleware) {
    return new AppM(function (app) {
        return $foreign["_use"](app, Node_Express_Handler.runHandlerM(middleware));
    });
};
var setProp = function (name) {
    return function (val) {
        return new AppM(function (app) {
            return $foreign["_setProp"](app, name, val);
        });
    };
};
var makeHttpsServer = function (v) {
    return function __do() {
        var v1 = $foreign.mkApplication();
        v.value0(v1)();
        return $foreign["_httpsServer"](v1)();
    };
};
var makeHttpServer = function (v) {
    return function __do() {
        var v1 = $foreign.mkApplication();
        v.value0(v1)();
        return $foreign["_httpServer"](v1)();
    };
};
var listenPipe = function (v) {
    return function (pipe) {
        return function (cb) {
            return function __do() {
                var v1 = $foreign.mkApplication();
                v.value0(v1)();
                return $foreign["_listenPipe"](v1)(pipe)(cb)();
            };
        };
    };
};
var listenHttps = function (v) {
    return function (port) {
        return function (opts) {
            return function (cb) {
                return function __do() {
                    var v1 = $foreign.mkApplication();
                    v.value0(v1)();
                    return $foreign["_listenHttps"](v1)(port)(opts)(cb)();
                };
            };
        };
    };
};
var listenHttp = function (v) {
    return function (port) {
        return function (cb) {
            return function __do() {
                var v1 = $foreign.mkApplication();
                v.value0(v1)();
                return $foreign["_listenHttp"](v1)(port)(cb)();
            };
        };
    };
};
var listenHostHttps = function (v) {
    return function (port) {
        return function (host) {
            return function (opts) {
                return function (cb) {
                    return function __do() {
                        var v1 = $foreign.mkApplication();
                        v.value0(v1)();
                        return $foreign["_listenHostHttps"](v1)(port)(host)(opts)(cb)();
                    };
                };
            };
        };
    };
};
var listenHostHttp = function (v) {
    return function (port) {
        return function (host) {
            return function (cb) {
                return function __do() {
                    var v1 = $foreign.mkApplication();
                    v.value0(v1)();
                    return $foreign["_listenHostHttp"](v1)(port)(host)(cb)();
                };
            };
        };
    };
};
var http = function (dictRoutePattern) {
    return function (method) {
        return function (route) {
            return function (handler) {
                return new AppM(function (app) {
                    return $foreign["_http"](app, Data_Show.show(Node_Express_Types.showMethod)(method), Foreign.unsafeToForeign(route), Node_Express_Handler.runHandlerM(handler));
                });
            };
        };
    };
};
var post = function (dictRoutePattern) {
    return http()(Node_Express_Types.POST.value);
};
var put = function (dictRoutePattern) {
    return http()(Node_Express_Types.PUT.value);
};
var getProp = function (name) {
    return new AppM(function (app) {
        return Effect_Class.liftEffect(Effect_Class.monadEffectEffect)($foreign["_getProp"](app, name, Data_Maybe.Nothing.value, Data_Maybe.Just.create));
    });
};
var get = function (dictRoutePattern) {
    return http()(Node_Express_Types.GET.value);
};
var functorAppM = new Data_Functor.Functor(function (f) {
    return function (v) {
        return new AppM(function (app) {
            return Control_Monad.liftM1(Effect.monadEffect)(f)(v.value0(app));
        });
    };
});
var $$delete = function (dictRoutePattern) {
    return http()(Node_Express_Types.DELETE.value);
};
var applyAppM = new Control_Apply.Apply(function () {
    return functorAppM;
}, function (v) {
    return function (v1) {
        return new AppM(function (app) {
            return function __do() {
                var v2 = v1.value0(app)();
                var v3 = v.value0(app)();
                return v3(v2);
            };
        });
    };
});
var bindAppM = new Control_Bind.Bind(function () {
    return applyAppM;
}, function (v) {
    return function (f) {
        return new AppM(function (app) {
            return function __do() {
                var v1 = v.value0(app)();
                var v2 = f(v1);
                return v2.value0(app)();
            };
        });
    };
});
var apply = function (v) {
    return function (app) {
        return v.value0(app);
    };
};
var applicativeAppM = new Control_Applicative.Applicative(function () {
    return applyAppM;
}, function (x) {
    return new AppM(function (v) {
        return Control_Applicative.pure(Effect.applicativeEffect)(x);
    });
});
var monadAppM = new Control_Monad.Monad(function () {
    return applicativeAppM;
}, function () {
    return bindAppM;
});
var monadEffectAppM = new Effect_Class.MonadEffect(function () {
    return monadAppM;
}, function (act) {
    return new AppM(function (v) {
        return act;
    });
});
var all = function (dictRoutePattern) {
    return http()(Node_Express_Types.ALL.value);
};
module.exports = {
    listenHttp: listenHttp,
    listenHttps: listenHttps,
    listenHostHttp: listenHostHttp,
    listenHostHttps: listenHostHttps,
    listenPipe: listenPipe,
    makeHttpServer: makeHttpServer,
    makeHttpsServer: makeHttpsServer,
    apply: apply,
    use: use,
    useExternal: useExternal,
    useAt: useAt,
    useAtExternal: useAtExternal,
    useOnParam: useOnParam,
    useOnError: useOnError,
    getProp: getProp,
    setProp: setProp,
    http: http,
    get: get,
    post: post,
    put: put,
    "delete": $$delete,
    all: all,
    functorAppM: functorAppM,
    applyAppM: applyAppM,
    applicativeAppM: applicativeAppM,
    bindAppM: bindAppM,
    monadAppM: monadAppM,
    monadEffectAppM: monadEffectAppM
};
