module Main exposing (..)

import Browser
import Html exposing (Html, text, div, h1, img, p)
import Html.Attributes exposing (src)
import RemoteData exposing (WebData)
import Http
import Json.Decode exposing (..)
import Debug exposing (toString)

---- MODEL ----


type alias Model = {
    tokenAndUrl: WebData TokenAndUrl }


init : ( Model, Cmd Msg )
init =
    ( Model RemoteData.NotAsked, callFunction)


url : String
url = ".netlify/functions/dantb-first-function"

---- UPDATE ----


type Msg
    = NoOp
    | FunctionResponse (WebData TokenAndUrl)

type alias TokenAndUrl = { response: List String }

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FunctionResponse tokenAndUrl ->
            ( { model | tokenAndUrl = tokenAndUrl }, Cmd.none)
        _ ->
            ( model, Cmd.none )


callFunction: Cmd Msg
callFunction =
    Http.get { 
        expect = Http.expectJson (RemoteData.fromResult >> FunctionResponse) decodeTokenAndUrl,
        url = url
    }

listDecoder : Decoder (List String)
listDecoder = Json.Decode.list Json.Decode.string

decodeTokenAndUrl : Decoder TokenAndUrl
decodeTokenAndUrl =
    Json.Decode.map TokenAndUrl
        (field "response" listDecoder)

---- VIEW ----


view : Model -> Html Msg
view model =
    case model.tokenAndUrl of
        RemoteData.NotAsked -> 
            text "Initialising."

        RemoteData.Loading -> 
            text "Loading."
            
        RemoteData.Failure err -> 
            text "Error."

        RemoteData.Success tokenAndUrl -> 
            text ("This is an elm app calling a Netlify function on url " ++ url ++ "\nResponse:\n" ++ (toString tokenAndUrl.response))



---- PROGRAM ----


main : Program () Model Msg
main =
    Browser.element
        { view = view
        , init = \_ -> init
        , update = update
        , subscriptions = always Sub.none
        }
