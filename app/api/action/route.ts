import { ActionGetResponse, ActionPostRequest, ActionPostResponse, ACTIONS_CORS_HEADERS } from "@solana/actions";

export async function GET(request: Request) {
  const responseBody : ActionGetResponse = {
    icon: '',
    description: 'test blink',
    title: 'Do Blink',
    label: 'Click Me!'
  };

  const response = Response.json(responseBody, {headers: ACTIONS_CORS_HEADERS,})
  return response;
}

export async function POST(request:Request) {

  const requestBody: ActionPostRequest = await request.json();
  const userPubkey = requestBody.account;
  console.log(userPubkey);

  const responseBody : ActionPostResponse = {
    transaction :'',
    message:'hello '+userPubkey,
  };

  const response = Response.json(responseBody, {headers: ACTIONS_CORS_HEADERS,})
  return response;
}
