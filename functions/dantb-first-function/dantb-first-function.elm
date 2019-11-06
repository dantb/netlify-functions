module Main exposing (..)

import Signal

type alias Message =
    { operation : String
    , message : String
    }

port request : Signal Message

port response : Signal Message
port response = Signal.map handleRequest request

handleRequest : Message -> Message
handleRequest m =
    case m.operation of
        "PING" ->
            { m | operation = "PONG" }

        x ->
            { m | operation = "UNKNOWN" }
