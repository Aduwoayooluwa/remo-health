import type { NextRequest } from "next/server";
import { agoraAppId } from "@/utils";
import { RtcTokenBuilder, RtcRole } from 'agora-token';

export async function POST(request: NextRequest) {
    const { channelName, uid } = await request.json();

    const appId = agoraAppId ?? "";
    const appCertificate = "d24426db5e734b64aaad506222e890b0";
    const role = RtcRole.PUBLISHER;
    // 
    // token expiry time
    const expirationTimeInSeconds = 86400;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

    if (!channelName || !uid) {
        return new Response(JSON.stringify({
            message: "Missing channel name or uid",
            error: "Fill all missing fields."
        }), {
            status: 400
        })
    }


    try {
        // creating the token
        const token = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, role, expirationTimeInSeconds, privilegeExpiredTs);
        return new Response(JSON.stringify({
            message: "Token generated Successfully",
            token: token
        }))
    }
    catch (error) {
        return new Response(JSON.stringify({
            message: "Internal Sever error"
        }), {
            status: 500
        })
    }
}