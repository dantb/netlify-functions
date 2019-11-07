module Main exposing (..)

import Browser
import Html exposing (Html, text, div, h1, img, p)
import Html.Attributes exposing (src)
import RemoteData exposing (WebData)
import Http
import Json.Decode exposing (..)
import String

---- MODEL ----


type alias Model = {
    lambdaResponse: WebData LambdaResponse }


init : ( Model, Cmd Msg )
init =
    ( Model RemoteData.NotAsked, callFunction)


url : String
url = ".netlify/functions/first-purescript-function"

---- UPDATE ----


type Msg
    = NoOp
    | FunctionResponse (WebData LambdaResponse)

type alias LambdaResponse = { response: List String }

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FunctionResponse lambdaResponse ->
            ( { model | lambdaResponse = lambdaResponse }, Cmd.none)
        _ ->
            ( model, Cmd.none )


callFunction: Cmd Msg
callFunction =
    Http.get { 
        expect = Http.expectJson (RemoteData.fromResult >> FunctionResponse) decodeLambdaResponse,
        url = url
    }

listDecoder : Decoder (List String)
listDecoder = Json.Decode.list Json.Decode.string

decodeLambdaResponse : Decoder LambdaResponse
decodeLambdaResponse =
    Json.Decode.map LambdaResponse
        (field "response" listDecoder)

---- VIEW ----


view : Model -> Html Msg
view model =
    case model.lambdaResponse of
        RemoteData.NotAsked -> 
            text "Initialising."

        RemoteData.Loading -> 
            text "Loading."
            
        RemoteData.Failure err -> 
            text "Error."

        RemoteData.Success lambdaResponse -> 
            text ("This is an elm app calling a Netlify function on url " ++ url ++ "\nResponse:\n" ++ (String.join " " lambdaResponse.response))



---- PROGRAM ----


main : Program () Model Msg
main =
    Browser.element
        { view = view
        , init = \_ -> init
        , update = update
        , subscriptions = always Sub.none
        }
