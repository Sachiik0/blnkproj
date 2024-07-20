import { ActionGetResponse, ActionPostRequest, ActionPostResponse, ACTIONS_CORS_HEADERS } from "@solana/actions";

export async function GET(request: Request) {
  const responseBody : ActionGetResponse = {
    icon: 'https://scontent.fceb1-5.fna.fbcdn.net/v/t39.30808-6/451298361_431465133272016_4432019430255871475_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHmrkNrk_3Z3VY_6O0H9ibVGkgJYCYrJZAaSAlgJislkLOM_LQ0w8bxx23aCCLkIkmoEV_ar3dk4rDGcTDiP4Gy&_nc_ohc=IPFSzIFZ1G0Q7kNvgFQF4Y0&_nc_ht=scontent.fceb1-5.fna&oh=00_AYDQZeMlkZ0dFmkKuUF1okMlfozWl-BkSVznF_p2Zu4Fog&oe=66A130F4',
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
