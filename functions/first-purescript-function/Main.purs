module Main where

import Prelude hiding (apply)
import Effect (Effect)
import Effect.Console (log)
import Node.Express.Types (Application)
import Node.Express.App (App, listenHttp, get)
import Node.Express.Response (send)
import Node.HTTP (Server)
import Simple.JSON as JSON

foreign import realMain :: (Application -> Effect Server) -> Effect Server

type MyResponseAlias = { response :: Array String }

responseVal :: Array String
responseVal = ["Hi Josh, Rosen and peeping Thom.", "This", "data", "comes", "from", "a", "purescript", "netlify", "function"]

app :: App
app = get "/" $ send (JSON.writeJSON ({ response : responseVal } :: MyResponseAlias))

main :: Effect Server
main = do
    listenHttp app 3000 \_ ->
        log $ "Listening on " <> show 3000
        