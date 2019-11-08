// Generated by purs version 0.13.4
"use strict";
var $foreign = require("./foreign.js");
var Data_Functor_Contravariant = require("../Data.Functor.Contravariant/index.js");
var Data_Op = require("../Data.Op/index.js");
var Data_Options = require("../Data.Options/index.js");
var Foreign = require("../Foreign/index.js");
var Foreign_Object = require("../Foreign.Object/index.js");
var Node_URL = require("../Node.URL/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var RequestHeaders = function (x) {
    return x;
};
var IPV4 = (function () {
    function IPV4() {

    };
    IPV4.value = new IPV4();
    return IPV4;
})();
var IPV6 = (function () {
    function IPV6() {

    };
    IPV6.value = new IPV6();
    return IPV6;
})();
var statusMessage = function ($6) {
    return $6.statusMessage;
};
var statusCode = function ($7) {
    return $7.statusCode;
};
var responseAsStream = Unsafe_Coerce.unsafeCoerce;
var requestFromURI = function ($8) {
    return $foreign.requestImpl(Foreign.unsafeToForeign(Node_URL.parse($8)));
};
var requestAsStream = Unsafe_Coerce.unsafeCoerce;
var request = function ($9) {
    return $foreign.requestImpl(Data_Options.options($9));
};
var rejectUnauthorized = Data_Options.opt("rejectUnauthorized");
var protocol = Data_Options.opt("protocol");
var port = Data_Options.opt("port");
var path = Data_Options.opt("path");
var method = Data_Options.opt("method");
var key = Data_Options.opt("key");
var httpVersion = function ($10) {
    return $10.httpVersion;
};
var hostname = Data_Options.opt("hostname");
var headers$prime = function ($11) {
    return $11.headers;
};
var responseCookies = function (res) {
    return Foreign_Object.lookup("set-cookie")(headers$prime(res));
};
var responseHeaders = function (res) {
    return Foreign_Object["delete"]("set-cookie")(headers$prime(res));
};
var headers = Data_Options.opt("headers");
var familyToOption = function (v) {
    if (v instanceof IPV4) {
        return 4;
    };
    if (v instanceof IPV6) {
        return 6;
    };
    throw new Error("Failed pattern match at Node.HTTP.Client (line 105, column 1 - line 105, column 39): " + [ v.constructor.name ]);
};
var family = Data_Functor_Contravariant.cmap(Data_Op.contravariantOp)(familyToOption)(Data_Options.opt("family"));
var cert = Data_Options.opt("cert");
var auth = Data_Options.opt("auth");
module.exports = {
    RequestHeaders: RequestHeaders,
    IPV4: IPV4,
    IPV6: IPV6,
    protocol: protocol,
    hostname: hostname,
    port: port,
    method: method,
    path: path,
    headers: headers,
    auth: auth,
    key: key,
    cert: cert,
    rejectUnauthorized: rejectUnauthorized,
    family: family,
    request: request,
    requestFromURI: requestFromURI,
    requestAsStream: requestAsStream,
    responseAsStream: responseAsStream,
    httpVersion: httpVersion,
    responseHeaders: responseHeaders,
    responseCookies: responseCookies,
    statusCode: statusCode,
    statusMessage: statusMessage,
    setTimeout: $foreign.setTimeout
};
