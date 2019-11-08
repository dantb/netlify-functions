module Main where

import Node.Express.App (App, get)
import Node.Express.Handler (Handler)
import Node.Express.Response (sendJson)
import Network.AWS.Lambda.Express as Lambda

-- Define an Express web app

responseVal :: Array String
responseVal = ["Hi Josh, Rosen and peeping Thom.", "This", "data", "comes", "from", "a", "purescript", "netlify", "function"]

indexHandler :: Handler
indexHandler = do
  sendJson { data: responseVal }

app :: App
app = do
  get "/" indexHandler

-- Define the AWS Lambda handler

handler :: Lambda.HttpHandler
handler =
  Lambda.makeHandler app